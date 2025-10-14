#!/usr/bin/env python3
"""
Advanced PDF extractor for Dec-24 Paper II
Handles complex PDF structure with embedded Hindi and options
"""

import PyPDF2
import json
import re

def extract_all_text_from_pdf(pdf_path):
    """Extract all text from PDF page by page"""
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        pages_text = []
        for i, page in enumerate(reader.pages):
            text = page.extract_text()
            pages_text.append({
                'page_num': i + 1,
                'text': text
            })
        return pages_text

def find_question_pattern(text):
    """
    Find questions in text using multiple patterns
    Pattern 1: "5. Question text..."
    Pattern 2: "Q5: Question text..."
    """
    questions = []
    
    # Split text into lines
    lines = text.split('\n')
    
    current_q = None
    current_options = []
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
        
        # Check for question number pattern
        q_match = re.match(r'^(\d+)\.\s+(.+)', line)
        if q_match:
            qnum = int(q_match.group(1))
            
            # Save previous question if exists
            if current_q:
                questions.append({
                    'number': current_q['number'],
                    'text': current_q['text'],
                    'options': current_options
                })
            
            # Start new question
            current_q = {
                'number': qnum,
                'text': q_match.group(2)
            }
            current_options = []
        
        # Check for option patterns
        elif re.match(r'^\(1\)\s+', line) or re.match(r'^\(2\)\s+', line) or \
             re.match(r'^\(3\)\s+', line) or re.match(r'^\(4\)\s+', line):
            if current_q:
                current_options.append(line)
        
        # Otherwise append to current question or option
        elif current_q:
            if current_options:
                current_options[-1] += ' ' + line
            else:
                current_q['text'] += ' ' + line
    
    # Save last question
    if current_q:
        questions.append({
            'number': current_q['number'],
            'text': current_q['text'],
            'options': current_options
        })
    
    return questions

def clean_english_only(text):
    """Remove Hindi text, keep only English"""
    # Remove Devanagari characters and anything after them
    text = re.sub(r'[À-ſ]+.*?(?=\(|\n|$)', '', text)
    # Remove extra spaces
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def extract_options_from_text(text):
    """Extract options (1) (2) (3) (4) from text"""
    options = []
    
    # Pattern to match (1), (2), (3), (4) with text
    pattern = r'\(([1-4])\)\s+([^(]+?)(?=\([1-4]\)|$)'
    
    matches = re.finditer(pattern, text)
    for match in matches:
        opt_num = int(match.group(1))
        opt_text = match.group(2).strip()
        opt_text = clean_english_only(opt_text)
        options.append(opt_text)
    
    return options[:4]  # Only return first 4 options

def main():
    pdf_path = "SQP/Paper2/Qus-Dec-24.pdf"
    
    print("=" * 80)
    print("Advanced Dec-24 Paper II Extraction")
    print("=" * 80)
    
    # Extract text page by page
    print("\n📖 Reading PDF...")
    pages = extract_all_text_from_pdf(pdf_path)
    print(f"✅ Extracted {len(pages)} pages")
    
    # Combine all text
    full_text = '\n'.join([p['text'] for p in pages])
    
    # Find all questions
    print("\n🔍 Finding questions...")
    all_questions = find_question_pattern(full_text)
    print(f"✅ Found {len(all_questions)} potential questions")
    
    # Process and clean questions
    print("\n🧹 Cleaning and organizing...")
    processed = {}
    
    for q in all_questions:
        qnum = q['number']
        if 1 <= qnum <= 150:
            # Clean question text
            clean_q = clean_english_only(q['text'])
            
            # Try to extract options from question text if not already separated
            if not q['options']:
                options = extract_options_from_text(q['text'])
                # Clean the question text by removing options
                clean_q = re.sub(r'\([1-4]\)\s+[^(]+', '', clean_q).strip()
            else:
                options = [clean_english_only(opt) for opt in q['options'][:4]]
            
            processed[qnum] = {
                'number': qnum,
                'question': clean_q,
                'options': options
            }
    
    # Save to JSON
    output_file = "dec24_all_questions_extracted.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(processed, f, indent=2, ensure_ascii=False)
    
    print(f"\n✅ Saved to {output_file}")
    
    # Statistics
    with_4_options = sum(1 for q in processed.values() if len(q['options']) == 4)
    without_4_options = len(processed) - with_4_options
    
    print(f"\n📊 RESULTS:")
    print(f"Total questions extracted: {len(processed)}/150")
    print(f"With 4 options: {with_4_options}")
    print(f"Without 4 options: {without_4_options}")
    
    # Show sample
    print(f"\n📋 SAMPLE (First 3 questions):")
    for qnum in range(1, 4):
        if qnum in processed:
            q = processed[qnum]
            print(f"\n{'='*60}")
            print(f"Q{qnum}: {q['question'][:80]}...")
            print(f"Options: {len(q['options'])}")
            for i, opt in enumerate(q['options'][:4]):
                print(f"  {i+1}. {opt[:60]}...")
    
    # Show coverage by subject
    print(f"\n📚 SUBJECT COVERAGE:")
    cdp = sum(1 for q in range(1, 31) if q in processed)
    eng = sum(1 for q in range(31, 61) if q in processed)
    hin = sum(1 for q in range(61, 91) if q in processed)
    math = sum(1 for q in range(91, 121) if q in processed)
    soc = sum(1 for q in range(121, 151) if q in processed)
    
    print(f"  CDP (Q1-30): {cdp}/30")
    print(f"  English (Q31-60): {eng}/30")
    print(f"  Hindi (Q61-90): {hin}/30")
    print(f"  Mathematics (Q91-120): {math}/30")
    print(f"  Social Studies (Q121-150): {soc}/30")

if __name__ == "__main__":
    main()
