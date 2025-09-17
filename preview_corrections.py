#!/usr/bin/env python3
"""
CTET Question Paper Correction Preview Script
Shows what corrections would be made without actually applying them.
"""

import subprocess
import re
from typing import Dict, List, Tuple

def run_verification() -> str:
    """Run the verification script and return its output."""
    try:
        result = subprocess.run(['python', 'final_verification.py'],
                              capture_output=True, text=True, encoding='utf-8', errors='ignore')
        return result.stdout
    except Exception as e:
        print(f"Error running verification: {e}")
        return ""

def parse_discrepancies(output: str) -> List[Tuple[int, int, int]]:
    """Parse discrepancies from verification output."""
    if not output:
        return []

    discrepancies = []
    lines = output.split('\n')
    in_discrepancies = False

    for line in lines:
        if 'DISCREPANCIES FOUND:' in line:
            in_discrepancies = True
            continue
        elif in_discrepancies and line.strip() and 'Question' in line:
            match = re.search(r'Question (\d+): File=(\d+), Official=(\d+)', line)
            if match:
                question_num = int(match.group(1))
                file_answer = int(match.group(2))
                official_answer = int(match.group(3))
                discrepancies.append((question_num, file_answer, official_answer))

    return discrepancies

def find_question_in_file(question_num: int) -> Dict:
    """Find question details for preview."""
    with open('constants/questionPapers/sed-24-i.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    question_blocks = re.findall(
        r'{\s*question:[^}]*correctAnswerIndex:\s*\d+[^}]*subjectName:\s*SubjectName\.\w+[^}]*}',
        content, re.DOTALL
    )

    if question_num <= len(question_blocks):
        block = question_blocks[question_num - 1]

        question_match = re.search(r'question:\s*\'([^\']*)\'', block)
        answer_match = re.search(r'correctAnswerIndex:\s*(\d+)', block)
        subject_match = re.search(r'subjectName:\s*SubjectName\.(\w+)', block)

        return {
            'question_text': question_match.group(1) if question_match else "Unknown",
            'current_answer': int(answer_match.group(1)) if answer_match else -1,
            'subject': subject_match.group(1) if subject_match else "Unknown"
        }

    return None

def preview_corrections():
    """Show preview of corrections that would be made."""
    print("🔍 CTET Question Paper Correction Preview")
    print("=" * 60)

    # Run verification
    print("Running verification...")
    output = run_verification()

    # Parse discrepancies
    discrepancies = parse_discrepancies(output)

    if not discrepancies:
        print("✅ No discrepancies found!")
        return

    print(f"\n📋 Found {len(discrepancies)} discrepancies that need correction:")
    print("-" * 60)

    # Group by subject for better organization
    by_subject = {}
    for question_num, file_answer, official_answer in discrepancies:
        question_info = find_question_in_file(question_num)
        if question_info:
            subject = question_info['subject']
            if subject not in by_subject:
                by_subject[subject] = []
            by_subject[subject].append((question_num, file_answer, official_answer, question_info))

    # Show corrections by subject
    for subject in ['MATH', 'EVS', 'LANG1', 'LANG2', 'CDP']:
        if subject in by_subject:
            print(f"\n📚 {subject} Section ({len(by_subject[subject])} corrections):")
            for question_num, file_answer, official_answer, question_info in by_subject[subject]:
                question_text = question_info['question_text'][:80] + "..." if len(question_info['question_text']) > 80 else question_info['question_text']
                print(f"  Q{question_num}: {question_text}")
                print(f"    Current: {file_answer} → Correct: {official_answer}")
                print()

    print("=" * 60)
    print(f"💡 Total corrections needed: {len(discrepancies)}")
    print("\nTo apply these corrections automatically, run:")
    print("  python automated_correction.py")

if __name__ == "__main__":
    preview_corrections()