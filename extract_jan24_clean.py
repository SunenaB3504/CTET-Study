#!/usr/bin/env python3
"""
Clean extraction script for CTET January 2024 Paper II
Extracts all 150 questions with proper formatting
"""

import pdfplumber
import json
import re

def clean_text(text):
    """Clean and normalize extracted text"""
    # Remove extra whitespace
    text = re.sub(r'\s+', ' ', text)
    # Remove page numbers and headers
    text = re.sub(r'P-II\s+!SED-24-II!\s+D\s+\d+', '', text)
    return text.strip()

def extract_questions_from_pdf(pdf_path, answer_path):
    """Extract all 150 questions from PDF"""
    
    questions = []
    
    print(f"Extracting from: {pdf_path}")
    
    with pdfplumber.open(pdf_path) as pdf:
        full_text = ""
        for page in pdf.pages:
            text = page.extract_text()
            if text:
                full_text += text + "\n"
        
        # Extract questions using pattern matching
        # Questions typically start with number followed by period
        question_pattern = r'(\d+)\.\s+(.+?)(?=\d+\.|$)'
        matches = re.findall(question_pattern, full_text, re.DOTALL)
        
        for match in matches:
            q_num = int(match[0])
            q_text = clean_text(match[1])
            
            if 1 <= q_num <= 150:
                questions.append({
                    'number': q_num,
                    'text': q_text[:500]  # Limit length for preview
                })
    
    return sorted(questions, key=lambda x: x['number'])

def main():
    pdf_path = "SQP/Paper2/Qus-Jan-24.pdf"
    answer_path = "SQP/Paper2/Anz-Jan-24.pdf"
    
    questions = extract_questions_from_pdf(pdf_path, answer_path)
    
    print(f"\n✅ Extracted {len(questions)} questions")
    print("\nFirst 5 questions:")
    for q in questions[:5]:
        print(f"\nQ{q['number']}: {q['text'][:150]}...")
    
    # Save to JSON
    with open('jan24_questions_clean.json', 'w', encoding='utf-8') as f:
        json.dump(questions, f, indent=2, ensure_ascii=False)
    
    print(f"\n✅ Saved to jan24_questions_clean.json")

if __name__ == "__main__":
    main()
