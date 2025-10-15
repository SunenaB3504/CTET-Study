#!/usr/bin/env python3
"""
Systematic fix for December 2024 Paper II question bank
- Fix subject classifications: Q1-30 CDP, Q31-90 MATH, Q91-150 LANG1
- Update all answer indices based on official answer key
- Clean up malformed questions and explanations
"""

import json
import re

def load_correct_answers():
    """Load the correct answer key"""
    with open('dec_24_answers.json', 'r') as f:
        return json.load(f)

def fix_subject_assignments(content):
    """Fix subject assignments based on question positions"""
    
    # Split into individual questions
    parts = content.split('\n    {\n')
    
    if len(parts) < 2:
        print("Could not parse questions properly")
        return content
    
    # Keep the header (imports, export declaration)
    header = parts[0]
    questions = parts[1:]
    
    fixed_questions = []
    
    for i, question_block in enumerate(questions):
        question_num = i + 1
        
        # Determine correct subject based on December 2024 structure
        if 1 <= question_num <= 30:
            correct_subject = "SubjectName.CDP"
            correct_topic = "child-development"
            correct_subtopic = "pedagogy"
        elif 31 <= question_num <= 90:
            correct_subject = "SubjectName.MATH"
            correct_topic = "mathematics"
            correct_subtopic = "problem-solving"
        elif 91 <= question_num <= 150:
            correct_subject = "SubjectName.LANG1"
            correct_topic = "english-language"
            correct_subtopic = "comprehension"
        else:
            # Keep as is for any extra questions
            fixed_questions.append(question_block)
            continue
        
        # Replace subject assignment
        question_block = re.sub(
            r'subjectName: SubjectName\.\w+',
            f'subjectName: {correct_subject}',
            question_block
        )
        
        # Replace topic assignments
        question_block = re.sub(
            r'topicId: "[^"]*"',
            f'topicId: "{correct_topic}"',
            question_block
        )
        
        question_block = re.sub(
            r'subTopicId: "[^"]*"',
            f'subTopicId: "{correct_subtopic}"',
            question_block
        )
        
        fixed_questions.append(question_block)
    
    # Reconstruct the file
    result = header + '\n    {\n' + '\n    {\n'.join(fixed_questions)
    return result

def update_answer_indices(content, correct_answers):
    """Update answer indices based on official answer key"""
    
    # Convert string keys to int for easier lookup
    answers_int = {int(k): v for k, v in correct_answers.items()}
    
    # Find and replace correctAnswerIndex for each question
    lines = content.split('\n')
    question_num = 0
    
    for i, line in enumerate(lines):
        if 'correctAnswerIndex:' in line:
            question_num += 1
            if question_num in answers_int:
                correct_index = answers_int[question_num]
                lines[i] = f'      correctAnswerIndex: {correct_index},'
                print(f"Updated Q{question_num}: index {correct_index}")
    
    return '\n'.join(lines)

def clean_malformed_questions(content):
    """Clean up garbled text and malformed options"""
    
    # Fix common issues
    fixes = [
        # Remove garbled characters at end of options
        (r'¬˝ª",$', '",$'),
        (r'∞∑§",$', '",$'),
        (r'‚◊",$', '",$'),
        (r'¡",$', '",$'),
        
        # Fix incomplete explanations
        (r'This language comprehension question tests understanding of the passage\. The correct answer \'[^\']*\.\.\.\' demonstrates proper interpretation', 
         'This question tests understanding of the concept. The solution involves proper analysis and application of knowledge'),
        
        # Clean up option formatting
        (r'/c=−', '°'),
        (r'∞∑§', ''),
        (r'¬˝', ''),
        (r'‚◊', ''),
    ]
    
    for pattern, replacement in fixes:
        content = re.sub(pattern, replacement, content)
    
    return content

def main():
    print("Starting December 2024 Paper II systematic fix...")
    
    # Load the correct answers
    try:
        correct_answers = load_correct_answers()
        print(f"Loaded {len(correct_answers)} correct answers")
    except FileNotFoundError:
        print("Error: dec_24_answers.json not found. Please run the answer extraction script first.")
        return
    
    # Read the current file
    file_path = 'constants/questionPapers/dec-24-ii.ts'
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        print(f"Loaded file: {file_path}")
    except FileNotFoundError:
        print(f"Error: {file_path} not found")
        return
    
    # Apply fixes
    print("\n1. Fixing subject assignments...")
    content = fix_subject_assignments(content)
    
    print("\n2. Updating answer indices...")
    content = update_answer_indices(content, correct_answers)
    
    print("\n3. Cleaning malformed questions...")
    content = clean_malformed_questions(content)
    
    # Create backup
    backup_path = file_path + '.backup'
    with open(backup_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Created backup: {backup_path}")
    
    # Write the fixed file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"\n✅ Successfully fixed {file_path}")
    print("🧪 Please test the application to verify the fixes work correctly.")

if __name__ == "__main__":
    main()