#!/usr/bin/env python3
"""
Correct fix for December 2024 Paper II based on manual analysis
Structure:
- Part I: Q1-30 → CDP
- Part II: Q31-90 → MATH & SCIENCE (for Math/Science track) OR SOCIAL_STUDIES (for Social track)  
- Part III: Q91-120 → LANG1 (English)
- Part IV: Q121-150 → LANG2 (Hindi)

Since we're implementing the Math/Science track, the structure should be:
Q1-30: CDP, Q31-60: MATH, Q61-90: SCIENCE, Q91-120: LANG1, Q121-150: LANG2
"""

import json
import re
import pdfplumber

def extract_complete_answers():
    """Extract all answers from the official answer key"""
    
    answers = {}
    
    with pdfplumber.open('SQP/Paper2/Anz-Dec-24.pdf') as pdf:
        for page in pdf.pages:
            text = page.extract_text()
            if text and 'Set :- D PAPER-II' in text:
                
                # Extract answers from table format
                lines = text.split('\n')
                for line in lines:
                    matches = re.findall(r'\|\s*(\d+)\s+(\d+)\s*\|', line)
                    for qno, ans in matches:
                        qno, ans = int(qno), int(ans)
                        answers[qno] = ans - 1  # Convert to 0-based index
    
    return answers

def fix_december_2024_structure(content, answers):
    """Fix the structure to match the correct December 2024 format"""
    
    # Split into questions
    lines = content.split('\n')
    
    question_count = 0
    in_question = False
    
    for i, line in enumerate(lines):
        # Detect start of a question
        if 'question:' in line and 'export' not in line:
            question_count += 1
            in_question = True
            
        # Update subject assignment
        if 'subjectName: SubjectName.' in line and in_question:
            # Determine correct subject based on question number
            if 1 <= question_count <= 30:
                correct_subject = 'SubjectName.CDP'
                correct_topic = 'child-development'
                correct_subtopic = 'pedagogy'
            elif 31 <= question_count <= 60:
                correct_subject = 'SubjectName.MATH'
                correct_topic = 'mathematics'
                correct_subtopic = 'problem-solving'
            elif 61 <= question_count <= 90:
                correct_subject = 'SubjectName.SCIENCE'
                correct_topic = 'science'
                correct_subtopic = 'concepts'
            elif 91 <= question_count <= 120:
                correct_subject = 'SubjectName.LANG1'
                correct_topic = 'english-language'
                correct_subtopic = 'comprehension'
            elif 121 <= question_count <= 150:
                correct_subject = 'SubjectName.LANG2'
                correct_topic = 'hindi-language'
                correct_subtopic = 'comprehension'
            else:
                continue
                
            lines[i] = f'      subjectName: {correct_subject},'
            
        # Update topic assignments
        elif 'topicId:' in line and in_question:
            lines[i] = f'      topicId: "{correct_topic}",'
            
        elif 'subTopicId:' in line and in_question:
            lines[i] = f'      subTopicId: "{correct_subtopic}",'
            
        # Update answer index
        elif 'correctAnswerIndex:' in line and in_question:
            if question_count in answers:
                correct_answer = answers[question_count]
                lines[i] = f'      correctAnswerIndex: {correct_answer},'
                print(f"Updated Q{question_count}: index {correct_answer}")
            
        # End of question detection
        elif line.strip() == '},' or (line.strip() == '},'):
            in_question = False
    
    return '\n'.join(lines)

def main():
    print("Correcting December 2024 Paper II structure based on manual analysis...")
    
    # Extract complete answer key
    print("1. Extracting complete answer key...")
    answers = extract_complete_answers()
    print(f"   Extracted {len(answers)} answers")
    
    # Read current file
    file_path = 'constants/questionPapers/dec-24-ii.ts'
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Create backup
    backup_path = file_path + '.backup2'
    with open(backup_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"   Created backup: {backup_path}")
    
    # Apply corrections
    print("2. Fixing structure: Q1-30 CDP, Q31-60 MATH, Q61-90 SCIENCE, Q91-120 LANG1, Q121-150 LANG2")
    content = fix_december_2024_structure(content, answers)
    
    # Write corrected file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"\n✅ Successfully corrected {file_path}")
    print("📋 Expected distribution:")
    print("   CDP: 30, MATH: 30, SCIENCE: 30, LANG1: 30, LANG2: 30")

if __name__ == "__main__":
    main()