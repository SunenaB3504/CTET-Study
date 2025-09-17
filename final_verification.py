import json
import re

# Read the question file
with open('constants\\questionPapers\\sed-24-i.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Official answers from PDF for Set I (1-based indexing)
official_answers = {
    # CDP section (1-30)
    1: 4, 2: 2, 3: 4, 4: 3, 5: 3, 6: 1, 7: 2, 8: 4, 9: 4, 10: 4,
    11: 4, 12: 2, 13: 2, 14: 2, 15: 4, 16: 4, 17: 3, 18: 4, 19: 1, 20: 4,
    21: 3, 22: 1, 23: 4, 24: 1, 25: 4, 26: 4, 27: 3, 28: 4, 29: 2, 30: 3,
    # Math section (31-60)
    31: 2, 32: 1, 33: 1, 34: 1, 35: 4, 36: 3, 37: 3, 38: 2, 39: 1, 40: 3,
    41: 4, 42: 4, 43: 2, 44: 4, 45: 3, 46: 3, 47: 1, 48: 4, 49: 2, 50: 2,
    51: 1, 52: 4, 53: 2, 54: 3, 55: 3, 56: 1, 57: 2, 58: 3, 59: 3, 60: 4,
    # EVS section (61-90)
    61: 3, 62: 3, 63: 2, 64: 1, 65: 2, 66: 4, 67: 4, 68: 4, 69: 4, 70: 4,  # Note: 68 was 'Z' in PDF, treated as 4
    71: 2, 72: 1, 73: 3, 74: 4, 75: 4, 76: 1, 77: 4, 78: 3, 79: 1, 80: 1,
    81: 1, 82: 4, 83: 4, 84: 1, 85: 4, 86: 3, 87: 3, 88: 4, 89: 4, 90: 4,
    # ENGLISH section (91-115)
    91: 3, 92: 2, 93: 1, 94: 2, 95: 3, 96: 4, 97: 3, 98: 4, 99: 1, 100: 1,
    101: 4, 102: 1, 103: 4, 104: 4, 105: 1, 106: 2, 107: 4, 108: 4, 109: 2, 110: 4,
    111: 2, 112: 3, 113: 4, 114: 4, 115: 4
}

print("CTET DEC-2024 Answer Verification Report")
print("=" * 50)
print("Set: I (Paper-I)")
print()

# Parse the TypeScript file properly by extracting the questions array
import ast
import json

# Read the question file
with open('constants\\questionPapers\\sed-24-i.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all question objects using a simpler pattern
question_blocks = re.findall(r'{\s*question:[^}]*correctAnswerIndex:\s*\d+[^}]*subjectName:\s*SubjectName\.\w+[^}]*}', content, re.DOTALL)

print(f"Found {len(question_blocks)} question blocks")

all_answers = []
all_subjects = []

for i, block in enumerate(question_blocks):
    # Extract answer
    answer_match = re.search(r'correctAnswerIndex:\s*(\d+)', block)
    # Extract subject
    subject_match = re.search(r'subjectName:\s*SubjectName\.(\w+)', block)
    
    if answer_match and subject_match:
        try:
            answer = int(answer_match.group(1))
            subject = subject_match.group(1)
            all_answers.append(answer)
            all_subjects.append(subject)
            
            if i < 5:  # Debug first 5
                print(f"Question {i+1}: subject={subject}, answer={answer}")
                
            # Debug question 40 specifically
            if i+1 == 40:
                print(f"DEBUG Q40: subject={subject}, answer={answer}")
                print(f"DEBUG Q40: answer_match='{answer_match.group(0)}'")
                print(f"DEBUG Q40: block preview='{block[:200]}...'")
                
        except ValueError as e:
            print(f"ERROR parsing question {i+1}: {e}")
    else:
        print(f"WARNING: Could not parse question {i+1}")
        print(f"  Block preview: {block[:200]}...")

print(f"Successfully extracted {len(all_answers)} answers and {len(all_subjects)} subjects")

# Debug: Show first 20 subjects found
print("DEBUG: First 20 subjects found:")
for i, subject in enumerate(all_subjects[:20]):
    print(f"  Subject {i+1}: '{subject}'")

# Debug: Show unique subjects
unique_subjects = set(all_subjects)
print(f"DEBUG: Unique subjects found: {unique_subjects}")

# Debug: Check alignment between answers and subjects
print("DEBUG: First 35 answer-subject pairs:")
for i in range(min(35, len(all_answers), len(all_subjects))):
    answer = all_answers[i] if i < len(all_answers) else "N/A"
    subject = all_subjects[i] if i < len(all_subjects) else "N/A"
    print(f"  Pair {i+1}: answer={answer}, subject='{subject}'")

# Group answers by subject
cdp_answers = []
math_answers = []
evs_answers = []
lang1_answers = []
lang2_answers = []

print("DEBUG: Grouping by subject...")
cdp_count = 0
math_count = 0
evs_count = 0
lang1_count = 0
lang2_count = 0
unknown_count = 0

for i, subject in enumerate(all_subjects):
    if i < len(all_answers):
        answer = all_answers[i]
        if subject == 'CDP':
            cdp_answers.append(answer)
            cdp_count += 1
            if cdp_count <= 5:  # Debug first 5 CDP
                print(f"  CDP {cdp_count}: answer={answer}")
        elif subject == 'MATH':
            math_answers.append(answer)
            math_count += 1
            if math_count == 1:  # First MATH
                print(f"  First MATH at position {i+1}: answer={answer}")
        elif subject == 'EVS':
            evs_answers.append(answer)
            evs_count += 1
            if evs_count == 1:  # First EVS
                print(f"  First EVS at position {i+1}: answer={answer}")
        elif subject == 'LANG1':
            lang1_answers.append(answer)
            lang1_count += 1
            if lang1_count == 1:  # First LANG1
                print(f"  First LANG1 at position {i+1}: answer={answer}")
        elif subject == 'LANG2':
            lang2_answers.append(answer)
            lang2_count += 1
            if lang2_count == 1:  # First LANG2
                print(f"  First LANG2 at position {i+1}: answer={answer}")
        else:
            unknown_count += 1
            if unknown_count <= 10:  # Show first 10 unknown subjects
                print(f"  UNKNOWN subject at position {i+1}: '{subject}' (answer={answer})")

print(f"DEBUG: Subject counts - CDP: {cdp_count}, MATH: {math_count}, EVS: {evs_count}, LANG1: {lang1_count}, LANG2: {lang2_count}, Unknown: {unknown_count}")
print(f"DEBUG: Total subjects processed: {len(all_subjects)}")

# Debug: Check EVS answers around question 40
if len(evs_answers) >= 23:
    evs_q23 = evs_answers[22]  # 23rd EVS question (0-based)
    print(f"DEBUG: 23rd EVS question (should be file Q40): {evs_q23}")
    print(f"DEBUG: 23rd EVS question 1-based: {evs_q23 + 1}")

# Debug: Check what position question 40 ends up in combined array
cdp_end = len(cdp_answers)
math_end = cdp_end + len(math_answers)
evs_end = math_end + len(evs_answers)
print(f"DEBUG: Array position ranges - CDP: 0-{cdp_end-1}, MATH: {cdp_end}-{math_end-1}, EVS: {math_end}-{evs_end-1}")

# Check if question 40 is in EVS range
q40_position = 39  # 0-based
if math_end <= q40_position < evs_end:
    evs_index = q40_position - math_end
    print(f"DEBUG: Question 40 should be at EVS index {evs_index}")
    if evs_index < len(evs_answers):
        print(f"DEBUG: EVS answer at that index: {evs_answers[evs_index]}")

# Debug: Check CDP question 30 specifically
if len(cdp_answers) >= 17:
    cdp_q17_answer = cdp_answers[16]  # 0-based index for 17th CDP question
    print(f"DEBUG: 17th CDP question (should be official Q30) - File raw: '{cdp_q17_answer}', File 1-based: {cdp_q17_answer + 1}, Official Q30: {official_answers.get(30)}")

# Combine all answers in correct order - USE ORIGINAL ORDER, NOT GROUPED BY SUBJECT
# The official answer key corresponds to questions in the order they appear in the file
all_answers_combined = all_answers  # Use the original order from extraction

print(f"Total answers extracted: {len(all_answers_combined)}")
print(f"Official answer key has {len(official_answers)} answers")

# Debug: Check question 40 position in combined array
if len(all_answers_combined) >= 40:
    print(f"DEBUG: Question 40 in combined array: {all_answers_combined[39]} (0-based)")
    print(f"DEBUG: Question 40 1-based: {all_answers_combined[39] + 1}")
    print(f"DEBUG: Official answer for Q40: {official_answers.get(40)}")

# Compare answers - only for questions that exist in both file and official key
matches_count = 0
discrepancies = []

# Only compare up to the number of questions we have
max_questions = min(len(all_answers_combined), len(official_answers))

for i in range(max_questions):
    question_num = i + 1
    file_answer_0based = all_answers_combined[i]
    file_answer_1based = file_answer_0based + 1  # Convert to 1-based
    official_answer = official_answers.get(question_num)

    if official_answer and file_answer_1based == official_answer:
        matches_count += 1
    elif official_answer:
        discrepancies.append({
            'question': question_num,
            'file_answer': file_answer_1based,
            'official_answer': official_answer
        })

print(f"\nVERIFICATION RESULTS:")
print("-" * 30)
print(f"Total questions verified: {max_questions}")
print(f"Matches: {matches_count}")
print(f"Discrepancies: {len(discrepancies)}")
if max_questions > 0:
    print(f"Match rate: {matches_count}/{max_questions} ({matches_count/max_questions*100:.1f}%)")

if discrepancies:
    print("\nDISCREPANCIES FOUND:")
    print("-" * 25)
    for disc in discrepancies:
        print(f"Question {disc['question']}: File={disc['file_answer']}, Official={disc['official_answer']}")
    print(f"\nTotal discrepancies: {len(discrepancies)}")
else:
    print("\nEXCELLENT! All answers match the official answer key!")
    print("   Note: The file uses 0-based indexing (0=option1, 1=option2, etc.)")
    print("   while the official key uses 1-based indexing (1=option1, 2=option2, etc.)")

print("\n" + "=" * 50)
print("VERIFICATION COMPLETE")
print("=" * 50)

# Summary by subject
print("\nBreakdown by subject:")
print(f"• Child Development & Pedagogy: {len(cdp_answers)} questions")
print(f"• Mathematics: {len(math_answers)} questions")
print(f"• Environmental Studies: {len(evs_answers)} questions")
print(f"• Language 1 (English): {len(lang1_answers)} questions")
print(f"• Language 2 (Hindi): {len(lang2_answers)} questions")