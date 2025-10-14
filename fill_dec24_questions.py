#!/usr/bin/env python3
"""
Helper script to review and fill Dec-24 Paper II questions
This script displays questions from the JSON file in a structured way
for manual review and updating into the TypeScript file.
"""

import json

def main():
    # Load the extracted questions
    with open('dec24_paper2_questions.json', 'r', encoding='utf-8') as f:
        questions = json.load(f)
    
    print("=" * 80)
    print("Dec-24 Paper II Questions - Manual Review Helper")
    print("=" * 80)
    print(f"\nTotal questions extracted: {len(questions)}")
    
    # Filter to unique question numbers 1-150
    unique_questions = {}
    for q in questions:
        qnum = q['number']
        if 1 <= qnum <= 150 and qnum not in unique_questions:
            unique_questions[qnum] = q
    
    print(f"Unique questions (1-150): {len(unique_questions)}")
    print("\n" + "=" * 80)
    
    # Helper function to determine subject
    def get_subject(qnum):
        if 1 <= qnum <= 30:
            return "Child Development & Pedagogy"
        elif 31 <= qnum <= 60:
            return "English"
        elif 61 <= qnum <= 90:
            return "Hindi"
        elif 91 <= qnum <= 120:
            return "Mathematics"
        else:
            return "Social Studies"
    
    # Display first 5 questions as examples
    print("\n📋 FIRST 5 QUESTIONS FOR REFERENCE:")
    print("=" * 80)
    
    for qnum in range(1, 6):
        if qnum in unique_questions:
            q = unique_questions[qnum]
            subject = get_subject(qnum)
            
            print(f"\n{'='*80}")
            print(f"Q{qnum} - Subject: {subject}")
            print(f"{'='*80}")
            print(f"\nQuestion Text:")
            print(q['text'][:500] + "..." if len(q['text']) > 500 else q['text'])
            print(f"\nOptions Found: {len(q['options'])}")
            for i, opt in enumerate(q['options'][:4]):
                print(f"  {i+1}. {opt[:100]}...")
            print("\n" + "-" * 80)
    
    # Export questions in a format easier to copy
    print("\n\n📄 EXPORTING TO questions_for_typescript.txt")
    with open('questions_for_typescript.txt', 'w', encoding='utf-8') as f:
        for qnum in sorted(unique_questions.keys()):
            q = unique_questions[qnum]
            subject = get_subject(qnum)
            
            f.write(f"\n{'='*80}\n")
            f.write(f"Q{qnum} - Subject: {subject}\n")
            f.write(f"{'='*80}\n\n")
            f.write(f"Question: {q['text']}\n\n")
            f.write(f"Options ({len(q['options'])}):\n")
            for i, opt in enumerate(q['options']):
                f.write(f"  {i+1}. {opt}\n")
            f.write("\n")
    
    print("✅ Created questions_for_typescript.txt")
    print("\n📝 NEXT STEPS:")
    print("1. Open questions_for_typescript.txt to review all questions")
    print("2. Open constants/questionPapers/dec-24-ii.ts")
    print("3. For each question, replace '[TO BE FILLED]' with actual content")
    print("4. Add detailed explanations (50+ words minimum)")
    print("5. Test the paper in the app")
    
    # Statistics
    print("\n\n📊 STATISTICS:")
    print(f"Questions with options: {sum(1 for q in unique_questions.values() if q['options'])}")
    print(f"Questions without options: {sum(1 for q in unique_questions.values() if not q['options'])}")
    
    # Subject distribution
    print("\n📚 SUBJECT DISTRIBUTION:")
    for subject_name, start, end in [
        ("Child Development & Pedagogy", 1, 30),
        ("English", 31, 60),
        ("Hindi", 61, 90),
        ("Mathematics", 91, 120),
        ("Social Studies", 121, 150)
    ]:
        count = sum(1 for qnum in range(start, end+1) if qnum in unique_questions)
        print(f"  {subject_name}: Q{start}-{end} = {count} questions")

if __name__ == "__main__":
    main()
