#!/usr/bin/env python3
"""
Extract Dec-24 Paper II questions in structured JSON format
"""

import PyPDF2
import json
import re

def extract_questions_from_pdf(pdf_path):
    """Extract questions from PDF with proper structure"""
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        full_text = ""
        for page in reader.pages:
            full_text += page.extract_text()
    
    # Pattern to match question numbers followed by text
    # Matches: "1. Question text..." or "121. Question text..."
    question_pattern = r'(\d+)\.\s+(.+?)(?=\d+\.|$)'
    
    # Extract English questions (Q1-120)
    english_questions = []
    lines = full_text.split('\n')
    
    current_question = None
    current_options = []
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        # Check if this is a new question (starts with number followed by period)
        match = re.match(r'^(\d+)\.\s+(.+)', line)
        if match:
            # Save previous question if exists
            if current_question is not None:
                english_questions.append({
                    'number': current_question['number'],
                    'text': current_question['text'],
                    'options': current_options
                })
            
            # Start new question
            qnum = int(match.group(1))
            qtext = match.group(2)
            current_question = {'number': qnum, 'text': qtext}
            current_options = []
        
        # Check if this is an option (a), (b), (c), (d) or 1., 2., 3., 4.
        elif re.match(r'^\([a-d]\)', line) or re.match(r'^[1-4]\.\s+', line):
            current_options.append(line)
        
        # Otherwise, append to current question text or last option
        elif current_question is not None:
            if current_options:
                current_options[-1] += ' ' + line
            else:
                current_question['text'] += ' ' + line
    
    # Save last question
    if current_question is not None:
        english_questions.append({
            'number': current_question['number'],
            'text': current_question['text'],
            'options': current_options
        })
    
    # Filter to get exactly Q1-150
    filtered_questions = [q for q in english_questions if 1 <= q['number'] <= 150]
    filtered_questions.sort(key=lambda x: x['number'])
    
    return filtered_questions

def main():
    pdf_path = "SQP/Paper2/Qus-Dec-24.pdf"
    
    print("Extracting questions from Dec-24 Paper II...")
    questions = extract_questions_from_pdf(pdf_path)
    
    # Save to JSON
    output_file = "dec24_paper2_questions.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(questions, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Extracted {len(questions)} questions")
    print(f"✅ Saved to {output_file}")
    
    # Print first 5 questions as sample
    print("\n📋 Sample Questions:")
    for q in questions[:5]:
        print(f"\nQ{q['number']}: {q['text'][:100]}...")
        print(f"  Options: {len(q['options'])} options")

if __name__ == "__main__":
    main()
