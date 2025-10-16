#!/usr/bin/env python3
"""
Filter existing extraction and update TypeScript files
"""

import json
import re
from collections import defaultdict

def is_hindi(text):
    """Check if text is predominantly Hindi"""
    hindi_chars = len(re.findall(r'[\u0900-\u097F]', text))
    english_chars = len(re.findall(r'[a-zA-Z]', text))
    return hindi_chars > english_chars * 0.3

def clean_text(text):
    """Remove Hindi portions and clean text"""
    # Remove Hindi characters
    text = re.sub(r'[\u0900-\u097F]+', '', text)
    # Clean multiple spaces
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def filter_questions():
    """Filter questions from advanced extraction"""
    
    with open('dec24_paper2_advanced.json', 'r', encoding='utf-8') as f:
        all_questions = json.load(f)
    
    # Deduplicate: keep best version of each question
    best_questions = {}
    
    for q in all_questions:
        qnum = q['number']
        
        # Only Q1-120 (English portion)
        if qnum < 1 or qnum > 120:
            continue
        
        # Skip if text too short (likely instructions)
        if len(q['text']) < 50:
            continue
        
        # Skip if mostly Hindi
        if is_hindi(q['text']):
            continue
        
        # Calculate quality score
        score = len(q['options']) * 100 + len(q['text'])
        
        # Keep best version
        if qnum not in best_questions or score > best_questions[qnum]['score']:
            best_questions[qnum] = {
                'number': qnum,
                'question': clean_text(q['text']),
                'options': [clean_text(opt) for opt in q['options']],
                'score': score
            }
    
    # Convert to list and sort
    filtered = sorted([{k: v for k, v in q.items() if k != 'score'} 
                      for q in best_questions.values()], 
                     key=lambda x: x['number'])
    
    return filtered

def generate_typescript_question(q, subject_name):
    """Generate TypeScript question object"""
    
    question_text = q['question'].replace("'", "\\'").replace('"', '\\"')
    options = [opt.replace("'", "\\'").replace('"', '\\"') for opt in q['options']]
    
    ts_code = f"""  {{
    id: 'dec24-ii-{subject_name.lower()}-q{q["number"]}',
    questionNumber: {q["number"]},
    question: "{question_text}",
    options: [
      "{options[0] if len(options) > 0 else 'Option 1'}",
      "{options[1] if len(options) > 1 else 'Option 2'}",
      "{options[2] if len(options) > 2 else 'Option 3'}",
      "{options[3] if len(options) > 3 else 'Option 4'}"
    ],
    correctAnswer: 0, // TODO: Add correct answer
    explanation: "Explanation needed", // TODO: Add explanation
    difficulty: 'medium',
    subjectName: SubjectName.{subject_name.upper()},
    topicId: 'topic-placeholder',
    subTopicId: 'subtopic-placeholder'
  }}"""
    
    return ts_code

def main():
    print("=" * 80)
    print("Filtering English Questions from Extraction")
    print("=" * 80)
    
    filtered = filter_questions()
    
    print(f"\n✅ Filtered to {len(filtered)} clean English questions")
    
    # Group by subject
    subjects = {
        'cdp': ([q for q in filtered if 1 <= q['number'] <= 30], 'CDP'),
        'math': ([q for q in filtered if 31 <= q['number'] <= 60], 'MATH'),
        'science': ([q for q in filtered if 61 <= q['number'] <= 90], 'SCIENCE'),
        'lang1': ([q for q in filtered if 91 <= q['number'] <= 120], 'LANG1')
    }
    
    print("\n📚 Distribution:")
    for key, (qs, name) in subjects.items():
        with_4opts = sum(1 for q in qs if len(q['options']) == 4)
        print(f"   {name}: {len(qs)} questions ({with_4opts} with 4 options)")
    
    # Save clean JSON
    with open('dec24_english_filtered.json', 'w', encoding='utf-8') as f:
        json.dump(filtered, f, indent=2, ensure_ascii=False)
    
    print(f"\n✅ Saved to dec24_english_filtered.json")
    
    # Show sample
    print("\n" + "=" * 80)
    print("Sample Questions:")
    print("=" * 80)
    
    for q in filtered[:2]:
        print(f"\n🔹 Q{q['number']}")
        print(f"   {q['question'][:120]}...")
        for i, opt in enumerate(q['options'][:4], 1):
            print(f"   ({i}) {opt[:80]}...")
    
    # Generate update instructions
    print("\n" + "=" * 80)
    print("📝 Next Steps:")
    print("=" * 80)
    print("\n1. Review dec24_english_filtered.json for quality")
    print("2. Run update script to replace placeholders in TypeScript files")
    print("3. Add correct answers from answer key PDF")
    print("4. Add explanations")

if __name__ == "__main__":
    main()
