import json

# Read the question file
with open('c:\\Users\\Admin\\Summs\\CTET-Study\\constants\\questionPapers\\sed-24-i.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the questions array (this is a simplified approach)
# In a real scenario, we'd use a proper TypeScript parser
questions_start = content.find('questions: [')
questions_end = content.find('],', questions_start)
questions_content = content[questions_start:questions_end + 1]

# For now, let's manually check some key questions
print("Starting answer verification for CTET Paper - Dec 2024 (Set I)")
print("=" * 60)

# Official answers from PDF for Set I
official_answers = {
    # MAIN section (1-90)
    1: 4, 2: 2, 3: 4, 4: 3, 5: 3, 6: 1, 7: 2, 8: 4, 9: 4, 10: 4,
    11: 4, 12: 2, 13: 2, 14: 2, 15: 4, 16: 4, 17: 3, 18: 4, 19: 1, 20: 4,
    21: 3, 22: 1, 23: 4, 24: 1, 25: 4, 26: 4, 27: 3, 28: 4, 29: 2, 30: 3,
    31: 2, 32: 1, 33: 1, 34: 1, 35: 4, 36: 3, 37: 3, 38: 2, 39: 1, 40: 3,
    41: 4, 42: 4, 43: 2, 44: 4, 45: 3, 46: 3, 47: 1, 48: 4, 49: 2, 50: 2,
    51: 1, 52: 4, 53: 2, 54: 3, 55: 3, 56: 1, 57: 2, 58: 3, 59: 3, 60: 4,
    61: 3, 62: 3, 63: 2, 64: 1, 65: 2, 66: 4, 67: 4, 68: 'Z', 69: 4, 70: 4,
    71: 2, 72: 1, 73: 3, 74: 4, 75: 4, 76: 1, 77: 4, 78: 3, 79: 1, 80: 1,
    81: 1, 82: 4, 83: 4, 84: 1, 85: 4, 86: 3, 87: 3, 88: 4, 89: 4, 90: 4,
    # ENGLISH section (91-150)
    91: 3, 92: 2, 93: 1, 94: 2, 95: 3, 96: 4, 97: 3, 98: 4, 99: 1, 100: 1,
    101: 4, 102: 1, 103: 4, 104: 4, 105: 1, 106: 2, 107: 4, 108: 4, 109: 2, 110: 4,
    111: 2, 112: 3, 113: 4, 114: 4, 115: 4
}

# Parse questions from the file content
questions = []
lines = content.split('\n')
in_questions = False
current_question = {}
question_count = 0

for line in lines:
    if 'questions: [' in line:
        in_questions = True
        continue
    if in_questions and '],' in line:
        break
    if in_questions and '{' in line and 'question:' in line:
        current_question = {}
        question_count += 1
    if in_questions and 'correctAnswerIndex:' in line:
        # Extract the answer index
        answer_match = line.strip().replace('correctAnswerIndex:', '').replace(',', '').strip()
        if answer_match.isdigit():
            current_question['answer'] = int(answer_match)
            current_question['question_number'] = question_count
            questions.append(current_question)

print(f"Found {len(questions)} questions in the file")
print(f"Official answer key has {len(official_answers)} answers")
print()

# Compare answers
matches = 0
discrepancies = []

for q in questions:
    q_num = q['question_number']
    file_answer = q['answer'] + 1  # Convert 0-based to 1-based
    official_answer = official_answers.get(q_num)

    if official_answer == 'Z':
        official_answer = 4  # Z means all options are correct, typically option 4 in MCQs

    if file_answer == official_answer:
        matches += 1
    else:
        discrepancies.append({
            'question': q_num,
            'file_answer': file_answer,
            'official_answer': official_answer
        })

print("VERIFICATION RESULTS:")
print("=" * 40)
print(f"Total questions checked: {len(questions)}")
print(f"Matches: {matches}")
print(f"Discrepancies: {len(discrepancies)}")
print(".1f")

if discrepancies:
    print("\nDISCREPANCIES FOUND:")
    print("-" * 30)
    for disc in discrepancies[:10]:  # Show first 10
        print(f"Question {disc['question']}: File has {disc['file_answer']}, Official has {disc['official_answer']}")
    if len(discrepancies) > 10:
        print(f"... and {len(discrepancies) - 10} more discrepancies")
else:
    print("\n✅ All answers match the official answer key!")

print("\n" + "=" * 60)
print("VERIFICATION COMPLETE")