#!/usr/bin/env python3
"""
Batch CTET Question Paper Correction Script
Applies multiple corrections in a single pass for better efficiency.
"""

import re
from typing import Dict, List, Tuple

def parse_discrepancies_from_file() -> List[Tuple[int, int, int]]:
    """Parse discrepancies by running verification and extracting them."""
    import subprocess

    try:
        result = subprocess.run(['python', 'final_verification.py'],
                              capture_output=True, text=True, encoding='utf-8')
        output = result.stdout
    except Exception as e:
        print(f"Error running verification: {e}")
        return []

    discrepancies = []
    lines = output.split('\n')
    in_discrepancies = False

    for line in lines:
        if '❌ DISCREPANCIES FOUND:' in line:
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

def apply_batch_corrections(discrepancies: List[Tuple[int, int, int]]) -> int:
    """Apply multiple corrections in batch."""
    if not discrepancies:
        print("No discrepancies to correct.")
        return 0

    # Read the file once
    with open('constants/questionPapers/sed-24-i.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    corrections_applied = 0
    original_content = content

    # Extract all question blocks
    question_blocks = re.findall(
        r'{\s*question:[^}]*correctAnswerIndex:\s*\d+[^}]*subjectName:\s*SubjectName\.\w+[^}]*}',
        content, re.DOTALL
    )

    # Apply corrections
    for question_num, current_answer, correct_answer in discrepancies:
        if question_num <= len(question_blocks):
            old_block = question_blocks[question_num - 1]

            # Get question text for logging
            question_match = re.search(r'question:\s*\'([^\']*)\'', old_block)
            question_text = question_match.group(1)[:60] + "..." if question_match and len(question_match.group(1)) > 60 else "Unknown"

            # Create new block with corrected answer
            new_block = re.sub(
                r'correctAnswerIndex:\s*\d+',
                f'correctAnswerIndex: {correct_answer - 1}',  # Convert to 0-based
                old_block
            )

            # Replace in content
            content = content.replace(old_block, new_block, 1)  # Replace only first occurrence

            print(f"✓ Q{question_num}: {question_text}")
            print(f"  Corrected: {current_answer} → {correct_answer}")
            corrections_applied += 1

    # Write back if changes were made
    if content != original_content:
        with open('constants/questionPapers/sed-24-i.ts', 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"\n💾 Applied {corrections_applied} corrections to file")
    else:
        print("No changes were made to the file")

    return corrections_applied

def batch_correct():
    """Main batch correction function."""
    print("🔧 CTET Batch Question Paper Correction")
    print("=" * 60)

    # Get discrepancies
    print("Analyzing current discrepancies...")
    discrepancies = parse_discrepancies_from_file()

    if not discrepancies:
        print("✅ No discrepancies found!")
        return

    print(f"Found {len(discrepancies)} discrepancies")

    # Group by subject for better reporting
    by_subject = {}
    for question_num, file_answer, official_answer in discrepancies:
        # We can't easily get subject without parsing, so just count
        pass

    # Apply corrections
    print(f"\n🔄 Applying {len(discrepancies)} corrections...")
    corrections_applied = apply_batch_corrections(discrepancies)

    if corrections_applied > 0:
        print("\n✅ Batch correction complete!")
        print("Run verification to check results:")
        print("  python final_verification.py")
    else:
        print("\n❌ No corrections were applied")

if __name__ == "__main__":
    batch_correct()