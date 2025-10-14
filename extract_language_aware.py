#!/usr/bin/env python3
"""
Language-aware extraction for Dec-24 Paper II
- Q1-60: English only
- Q61-90: Hindi only
- Q91-150: English only
"""

import PyPDF2
import json
import re

def extract_hindi_text(text):
    """Extract Hindi (Devanagari) text from mixed content"""
    # Devanagari Unicode range: \u0900-\u097F
    # Keep Devanagari characters, punctuation, numbers
    hindi_pattern = r'[\u0900-\u097F\s\d\.\,\?\!\(\)]+' 
    hindi_parts = re.findall(hindi_pattern, text)
    return ' '.join(hindi_parts).strip()

def extract_english_text(text):
    """Extract English text, remove Hindi"""
    # Remove Devanagari characters and surrounding text
    english_text = re.sub(r'[À-ſ\u0900-\u097F]+.*?(?=\n|$)', '', text, flags=re.MULTILINE)
    # Clean up spaces
    english_text = re.sub(r'\s+', ' ', english_text)
    return english_text.strip()

def extract_questions_from_pdf(pdf_path):
    """Extract all questions with language awareness"""
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        full_text = ""
        for page in reader.pages:
            full_text += page.extract_text() + "\n"
    
    # Split into sections based on page markers or question numbers
    lines = full_text.split('\n')
    
    questions = {}
    current_q = None
    current_text = ""
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
        
        # Look for question numbers
        match = re.match(r'^(\d+)\.\s+(.+)', line)
        if match:
            qnum = int(match.group(1))
            if 1 <= qnum <= 150:
                # Save previous question
                if current_q is not None:
                    questions[current_q] = current_text
                
                # Start new question
                current_q = qnum
                current_text = match.group(2)
        elif current_q:
            current_text += " " + line
    
    # Save last question
    if current_q:
        questions[current_q] = current_text
    
    # Process by language requirement
    processed = {}
    
    for qnum, text in questions.items():
        if 61 <= qnum <= 90:
            # Hindi section - extract Hindi text
            hindi_text = extract_hindi_text(text)
            processed[qnum] = {
                'number': qnum,
                'language': 'hindi',
                'text': hindi_text,
                'raw': text
            }
        else:
            # English sections - extract English text
            english_text = extract_english_text(text)
            processed[qnum] = {
                'number': qnum,
                'language': 'english',
                'text': english_text,
                'raw': text
            }
    
    return processed

def main():
    print("=" * 80)
    print("Language-Aware Extraction for Dec-24 Paper II")
    print("=" * 80)
    
    pdf_path = "SQP/Paper2/Qus-Dec-24.pdf"
    
    print("\n📖 Extracting questions...")
    questions = extract_questions_from_pdf(pdf_path)
    
    print(f"✅ Extracted {len(questions)} questions")
    
    # Separate by language
    hindi_qs = {k: v for k, v in questions.items() if v['language'] == 'hindi'}
    english_qs = {k: v for k, v in questions.items() if v['language'] == 'english'}
    
    print(f"\n📊 Language Distribution:")
    print(f"  English questions (Q1-60, Q91-150): {len(english_qs)}")
    print(f"  Hindi questions (Q61-90): {len(hindi_qs)}")
    
    # Save language-separated files
    with open('questions_english.json', 'w', encoding='utf-8') as f:
        json.dump(english_qs, f, indent=2, ensure_ascii=False)
    
    with open('questions_hindi.json', 'w', encoding='utf-8') as f:
        json.dump(hindi_qs, f, indent=2, ensure_ascii=False)
    
    print(f"\n✅ Saved:")
    print(f"  - questions_english.json ({len(english_qs)} questions)")
    print(f"  - questions_hindi.json ({len(hindi_qs)} questions)")
    
    # Show samples
    print(f"\n📋 SAMPLE - English Question (Q1):")
    if 1 in questions:
        print(f"  {questions[1]['text'][:150]}...")
    
    print(f"\n📋 SAMPLE - Hindi Question (Q61):")
    if 61 in questions:
        print(f"  {questions[61]['text'][:150]}...")
    
    print(f"\n⚠️  NOTE:")
    print(f"  - Q61-90 extracted in HINDI (Devanagari script)")
    print(f"  - All other questions extracted in ENGLISH")
    print(f"  - You may need to manually refine Hindi questions due to PDF extraction issues")

if __name__ == "__main__":
    main()
