#!/usr/bin/env python3
"""
Better parser for Dec-24 Paper II that extracts options from within question text
"""

import json
import re

def parse_question_with_options(text):
    """
    Parse a question that has options embedded like:
    "Question text... (1) Option A (2) Option B (3) Option C (4) Option D"
    """
    # Try to find pattern where options are (1), (2), (3), (4)
    # Split at the first (1) to separate question from options
    match = re.search(r'\(1\)\s+(.+?)(?:\(2\)|\s+ÁŸêŸ|\s+√ÿﬂ„Ê⁄U|\s+¡ËŸ)', text)
    
    if not match:
        return text, []
    
    # Try to split into question and options part
    parts = re.split(r'(?=\(1\)\s+)', text, maxsplit=1)
    
    if len(parts) < 2:
        return text, []
    
    question_part = parts[0].strip()
    options_part = parts[1].strip()
    
    # Extract individual options
    # Pattern: (1) text (2) text (3) text (4) text
    options = []
    option_pattern = r'\((\d)\)\s+([^(]+?)(?=\(\d\)|$|ÁŸêŸ|√ÿﬂ„Ê⁄U|¡ËŸ|‹ﬂ|„ÊÚ|Á»§)'
    
    for match in re.finditer(option_pattern, options_part):
        opt_num = match.group(1)
        opt_text = match.group(2).strip()
        # Clean up - remove Hindi translations and extra spaces
        opt_text = re.sub(r'\s+', ' ', opt_text)
        options.append(opt_text)
    
    # Only return if we found exactly 4 options
    if len(options) == 4:
        return question_part, options
    
    return text, []

def main():
    # Load the extracted questions
    with open('dec24_paper2_questions.json', 'r', encoding='utf-8') as f:
        questions = json.load(f)
    
    print("=" * 80)
    print("Parsing Dec-24 Paper II Questions with Embedded Options")
    print("=" * 80)
    
    # Filter to unique question numbers 1-150
    unique_questions = {}
    for q in questions:
        qnum = q['number']
        if 1 <= qnum <= 150 and qnum not in unique_questions:
            unique_questions[qnum] = q
    
    parsed_questions = {}
    
    for qnum in sorted(unique_questions.keys()):
        q = unique_questions[qnum]
        question_text, options = parse_question_with_options(q['text'])
        
        parsed_questions[qnum] = {
            'number': qnum,
            'question': question_text,
            'options': options
        }
    
    # Display first 5 parsed questions
    print("\n✅ PARSED QUESTIONS (First 10):\n")
    for qnum in range(1, min(11, max(parsed_questions.keys()) + 1)):
        if qnum in parsed_questions:
            pq = parsed_questions[qnum]
            print(f"\n{'='*80}")
            print(f"Q{qnum}")
            print(f"{'='*80}")
            print(f"Question: {pq['question'][:200]}...")
            print(f"\nOptions ({len(pq['options'])}):")
            for i, opt in enumerate(pq['options']):
                print(f"  {i+1}. {opt[:80]}{'...' if len(opt) > 80 else ''}")
    
    # Statistics
    with_options = sum(1 for pq in parsed_questions.values() if len(pq['options']) == 4)
    without_options = len(parsed_questions) - with_options
    
    print(f"\n\n📊 PARSING STATISTICS:")
    print(f"Total parsed: {len(parsed_questions)}")
    print(f"With 4 options: {with_options}")
    print(f"Without proper options: {without_options}")
    
    # Save parsed data
    with open('dec24_parsed_questions.json', 'w', encoding='utf-8') as f:
        json.dump(parsed_questions, f, indent=2, ensure_ascii=False)
    
    print(f"\n✅ Saved to dec24_parsed_questions.json")

if __name__ == "__main__":
    main()
