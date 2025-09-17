#!/usr/bin/env python3
"""
Script to create comprehensive verification mapping comparing app answers with official PDF answers
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

def parse_question_mapping_md():
    """Parse the question_answer_mapping.md file to extract app answers"""
    app_answers = {}

    with open("question_answer_mapping.md", 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract table rows
    table_pattern = r'\| (\d+) \| .*? \| (\d+) \| (\d+) \| (\w+) \|'
    matches = re.findall(table_pattern, content)

    for match in matches:
        qno, app_ans, pdf_ans, subject = match
        app_answers[int(qno)] = {
            'app_answer': int(app_ans),
            'pdf_answer': int(pdf_ans),
            'subject': subject
        }

    return app_answers

def main():
    # Read the answer key file
    answer_key_path = Path("SQP/answer_key.txt")
    with open(answer_key_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract official answers for each section
    main_answers = extract_answers_from_text(content, "PAPER-I \\(MAIN\\)")
    english_answers = extract_answers_from_text(content, "PAPER-I 01-ENGLISH")
    hindi_answers = extract_answers_from_text(content, "PAPER-I 02-HINDI")

    # Combine all official answers (using Hindi for questions 91-150 since our paper is Set I)
    official_answers = {}
    official_answers.update(main_answers)
    official_answers.update(hindi_answers)  # Our paper uses Hindi as Language II

    # Get our app answers
    app_answers = parse_question_mapping_md()

    print("=== COMPREHENSIVE VERIFICATION REPORT ===")
    print("Comparing App Answers (corrected) vs Official PDF Answers (Set I)")
    print("=" * 80)

    total_questions = 132  # Our paper has 132 questions
    matches = 0
    mismatches = 0
    not_found = 0

    print("
| Q.No | App Answer | Official PDF | Status | Subject |")
    print("|------|------------|-------------|--------|---------|")

    for qno in range(1, total_questions + 1):
        if qno in app_answers:
            app_ans = app_answers[qno]['app_answer']
            pdf_ans_from_app = app_answers[qno]['pdf_answer']  # This is our converted answer
            subject = app_answers[qno]['subject']

            # Get official answer
            if qno in official_answers:
                official_ans = official_answers[qno]
                if official_ans == 'Z':
                    official_ans = 'Z'  # Special case for multiple correct answers
                else:
                    official_ans = int(official_ans)

                # Compare our PDF answer with official
                if pdf_ans_from_app == official_ans:
                    status = "✅ MATCH"
                    matches += 1
                else:
                    status = "❌ MISMATCH"
                    mismatches += 1

                print(f"| {qno:3d} | {app_ans:10d} | {official_ans:11} | {status} | {subject} |")
            else:
                print(f"| {qno:3d} | {app_ans:10d} | NOT FOUND    | ⚠️  MISSING | {subject} |")
                not_found += 1
        else:
            print(f"| {qno:3d} | NOT FOUND   | -           | ⚠️  MISSING | -       |")
            not_found += 1

    print("=" * 80)
    print("
SUMMARY:")
    print(f"Total Questions: {total_questions}")
    print(f"Matches: {matches}")
    print(f"Mismatches: {mismatches}")
    print(f"Not Found: {not_found}")
    print(".1f")

    if mismatches == 0 and not_found == 0:
        print("\n🎉 PERFECT! 100% accuracy achieved!")
        print("All corrected answers match the official CTET answer key.")
    else:
        print(f"\n⚠️  Issues found: {mismatches} mismatches, {not_found} not found")

    # Show detailed breakdown by subject
    print("
BREAKDOWN BY SUBJECT:")
    subject_stats = {}
    for qno in range(1, total_questions + 1):
        if qno in app_answers:
            subject = app_answers[qno]['subject']
            if subject not in subject_stats:
                subject_stats[subject] = {'total': 0, 'matches': 0, 'mismatches': 0}

            subject_stats[subject]['total'] += 1

            if qno in official_answers:
                pdf_ans_from_app = app_answers[qno]['pdf_answer']
                official_ans = official_answers[qno]
                if official_ans != 'Z':
                    official_ans = int(official_ans)

                if pdf_ans_from_app == official_ans:
                    subject_stats[subject]['matches'] += 1
                else:
                    subject_stats[subject]['mismatches'] += 1

    for subject, stats in subject_stats.items():
        accuracy = (stats['matches'] / stats['total']) * 100 if stats['total'] > 0 else 0
        print(".1f")

if __name__ == "__main__":
    main()