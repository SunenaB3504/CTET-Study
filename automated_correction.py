#!/usr/bin/env python3
"""
Automated CTET Question Paper Correction Script
This script automatically identifies and corrects discrepancies between the question paper file
and the official answer key.
"""

import subprocess
import re
import json
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
    """
    Parse the verification output to extract discrepancies.
    Returns list of tuples: (question_num, file_answer, official_answer)
    """
    if not output:
        return []

    discrepancies = []

    # Find the discrepancies section
    lines = output.split('\n')
    in_discrepancies = False

    for line in lines:
        if 'DISCREPANCIES FOUND:' in line:
            in_discrepancies = True
            continue
        elif in_discrepancies and line.strip() and 'Question' in line:
            # Parse lines like: "Question 40: File=4, Official=3"
            match = re.search(r'Question (\d+): File=(\d+), Official=(\d+)', line)
            if match:
                question_num = int(match.group(1))
                file_answer = int(match.group(2))
                official_answer = int(match.group(3))
                discrepancies.append((question_num, file_answer, official_answer))

    return discrepancies

def find_question_in_file(question_num: int) -> Dict:
    """Find the question block for the given question number."""
    with open('constants/questionPapers/sed-24-i.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract all question blocks
    question_blocks = re.findall(
        r'{\s*question:[^}]*correctAnswerIndex:\s*\d+[^}]*subjectName:\s*SubjectName\.\w+[^}]*}',
        content, re.DOTALL
    )

    if question_num <= len(question_blocks):
        block = question_blocks[question_num - 1]  # 0-based indexing

        # Extract question text for verification
        question_match = re.search(r'question:\s*\'([^\']*)\'', block)
        question_text = question_match.group(1) if question_match else "Unknown"

        return {
            'block': block,
            'question_text': question_text,
            'file_position': question_num
        }

    return None

def apply_correction(question_num: int, current_answer: int, correct_answer: int) -> bool:
    """Apply the correction to the question file."""
    try:
        # Find the question
        question_info = find_question_in_file(question_num)
        if not question_info:
            print(f"Could not find question {question_num}")
            return False

        # Read the file
        with open('constants/questionPapers/sed-24-i.ts', 'r', encoding='utf-8') as f:
            content = f.read()

        # Find the specific question block
        question_blocks = re.findall(
            r'{\s*question:[^}]*correctAnswerIndex:\s*\d+[^}]*subjectName:\s*SubjectName\.\w+[^}]*}',
            content, re.DOTALL
        )

        if question_num <= len(question_blocks):
            old_block = question_blocks[question_num - 1]

            # Create the new block with corrected answer
            new_block = re.sub(
                r'correctAnswerIndex:\s*\d+',
                f'correctAnswerIndex: {correct_answer - 1}',  # Convert to 0-based
                old_block
            )

            # Replace in the file
            new_content = content.replace(old_block, new_block)

            # Write back
            with open('constants/questionPapers/sed-24-i.ts', 'w', encoding='utf-8') as f:
                f.write(new_content)

            print(f"✓ Corrected Question {question_num}: {current_answer} → {correct_answer}")
            return True

    except Exception as e:
        print(f"Error applying correction to question {question_num}: {e}")
        return False

    return False

def main():
    """Main automation function."""
    print("🚀 Starting Automated CTET Question Paper Correction")
    print("=" * 60)

    iteration = 0
    max_iterations = 50  # Safety limit

    while iteration < max_iterations:
        iteration += 1
        print(f"\n📊 Iteration {iteration}")
        print("-" * 30)

        # Run verification
        print("Running verification...")
        output = run_verification()

        # Parse discrepancies
        discrepancies = parse_discrepancies(output)

        if not discrepancies:
            print("✅ No discrepancies found! All questions are correct.")
            break

        print(f"Found {len(discrepancies)} discrepancies")

        # Show current status
        matches_match = re.search(r'Matches: (\d+)/(\d+) \((\d+\.\d+)%\)', output)
        if matches_match:
            matches = matches_match.group(1)
            total = matches_match.group(2)
            percentage = matches_match.group(3)
            print(f"Current status: {matches}/{total} matches ({percentage}%)")

        # Apply corrections
        corrections_applied = 0
        for question_num, file_answer, official_answer in discrepancies:
            print(f"Correcting Question {question_num}: File={file_answer}, Official={official_answer}")

            # Find and show question text
            question_info = find_question_in_file(question_num)
            if question_info:
                question_text = question_info['question_text'][:60] + "..." if len(question_info['question_text']) > 60 else question_info['question_text']
                print(f"  Question: {question_text}")

            # Apply correction
            if apply_correction(question_num, file_answer, official_answer):
                corrections_applied += 1
            else:
                print(f"  ❌ Failed to correct Question {question_num}")

        print(f"Applied {corrections_applied} corrections in this iteration")

        if corrections_applied == 0:
            print("⚠️  No corrections were applied. Stopping to avoid infinite loop.")
            break

    print("\n" + "=" * 60)
    print("🏁 Automation Complete")

    # Final verification
    print("\n📊 Final Verification:")
    final_output = run_verification()
    final_discrepancies = parse_discrepancies(final_output)

    if final_discrepancies:
        print(f"❌ Still {len(final_discrepancies)} discrepancies remaining")
        for q, f, o in final_discrepancies[:10]:  # Show first 10
            print(f"  Question {q}: File={f}, Official={o}")
        if len(final_discrepancies) > 10:
            print(f"  ... and {len(final_discrepancies) - 10} more")
    else:
        print("✅ All discrepancies resolved!")

if __name__ == "__main__":
    main()