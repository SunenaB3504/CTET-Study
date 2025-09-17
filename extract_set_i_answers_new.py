#!/usr/bin/env python3
"""
Script to extract Set I answers from CTET answer key and create comprehensive mapping
"""

import re
from pathlib import Path

def extract_answers_from_text(text, section_name):
    """Extract answers from a section of the answer key text"""
    answers = {}

    # Find the section
    section_pattern = rf"Set :- I {section_name}"
    section_match = re.search(section_pattern, text)

    if not section_match:
        print(f"Section {section_name} not found")
        return answers

    # Extract the section content
    section_start = section_match.start()
    next_section = re.search(r"Set :- [A-Z] PAPER-I", text[section_start + 1:])
    section_end = next_section.start() + section_start + 1 if next_section else len(text)

    section_text = text[section_start:section_end]

    # Extract QNO ANS pairs
    qno_ans_pattern = r'(\d+)\s*\n\s*(\d+|Z)'
    matches = re.findall(qno_ans_pattern, section_text)

    for qno, ans in matches:
        answers[int(qno)] = ans

    return answers

def main():
    # Read the answer key file
    answer_key_path = Path("SQP/answer_key.txt")
    with open(answer_key_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract answers for each section
    main_answers = extract_answers_from_text(content, "PAPER-I \\(MAIN\\)")
    english_answers = extract_answers_from_text(content, "PAPER-I 01-ENGLISH")
    hindi_answers = extract_answers_from_text(content, "PAPER-I 02-HINDI")

    print("=== SET I PAPER-I (MAIN) ANSWERS (Questions 1-90) ===")
    for qno in sorted(main_answers.keys()):
        print(f"Q{qno}: {main_answers[qno]}")

    print("\n=== SET I PAPER-I 01-ENGLISH ANSWERS (Questions 91-150) ===")
    for qno in sorted(english_answers.keys()):
        print(f"Q{qno}: {english_answers[qno]}")

    print("\n=== SET I PAPER-I 02-HINDI ANSWERS (Questions 91-150) ===")
    for qno in sorted(hindi_answers.keys()):
        print(f"Q{qno}: {hindi_answers[qno]}")

    # Create combined mapping
    all_answers = {}
    all_answers.update(main_answers)
    all_answers.update(english_answers)
    all_answers.update(hindi_answers)

    print("\n=== COMBINED ANSWERS (All 150 Questions) ===")
    for qno in range(1, 151):
        if qno in all_answers:
            print(f"Q{qno}: {all_answers[qno]}")
        else:
            print(f"Q{qno}: NOT FOUND")

    return all_answers

if __name__ == "__main__":
    answers = main()