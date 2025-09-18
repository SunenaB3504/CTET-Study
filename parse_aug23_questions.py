#!/usr/bin/env python3
"""
Aug-23 Question Parser
Parses questions from Aug-23.txt and generates structured data for TypeScript conversion.
"""

import re
import json
from typing import Dict, List, Any

def parse_aug23_questions(file_path: str) -> Dict[str, Any]:
    """Parse questions from Aug-23.txt file"""

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split content into lines
    lines = content.split('\n')
    print(f"📄 Read {len(lines)} lines from file")

    questions = []
    current_question = None
    current_options = []
    current_answer = None

    i = 0
    while i < len(lines):
        line = lines[i].strip()

        # Look for question pattern
        question_match = re.match(r'Question (\d+): (.+)', line)
        if question_match:
            print(f"🔍 Found question {question_match.group(1)}: {question_match.group(2)[:50]}...")
            # Save previous question if exists
            if current_question and current_options and current_answer:
                question_data = create_question_object(current_question, current_options, current_answer)
                if question_data:
                    questions.append(question_data)

            # Start new question
            question_num = int(question_match.group(1))
            question_text = question_match.group(2).strip()
            current_question = {'number': question_num, 'text': question_text}
            current_options = []
            current_answer = None

        # Look for options (A, B, C, D) - handle both single line and multi-line
        elif re.match(r'^[A-D]\.\s*', line):
            option_match = re.match(r'^([A-D])\.\s*(.*)', line)
            option_letter = option_match.group(1)
            option_content = option_match.group(2).strip()
            print(f"🔍 Found option {option_letter}: '{option_content}'...")
            current_options.append(option_content)
            
            # Check for multi-line option content
            i += 1
            while i < len(lines):
                next_line = lines[i].strip()
                # Stop if we hit next option, correct answer, or new question
                if re.match(r'^[A-D]\.', next_line) or next_line.startswith('Correct Answer:') or re.match(r'Question \d+:', next_line):
                    i -= 1  # Back up so the next iteration can handle this line
                    break
                if next_line:  # Only add non-empty lines
                    current_options[-1] += ' ' + next_line
                    print(f"🔍   Option {option_letter} continuation: '{next_line}'")
                i += 1

        # Handle multi-line question text (accumulate until we find an option)
        elif current_question and not current_options and not line.startswith('Correct Answer:') and not re.match(r'Question \d+:', line) and line.strip():
            # If we have a question but no options yet, accumulate all lines until we find the first option
            # Check if this line is the start of options
            if len(line) > 2 and line[1] == '.' and line[0] in 'ABCD':
                # This is actually an option, not question text
                pass  # Let it be handled by the option parsing below
            else:
                # This is continuation of question text
                current_question['text'] += ' ' + line.strip()

        # Look for correct answer
        elif line.startswith('Correct Answer:'):
            answer_letter = line.replace('Correct Answer:', '').strip()
            print(f"🔍 Found answer: {answer_letter}")
            current_answer = answer_letter

        i += 1

    # Save last question
    if current_question and current_options and current_answer:
        question_data = create_question_object(current_question, current_options, current_answer)
        if question_data:
            questions.append(question_data)

    print(f"📊 Processed {len(questions)} questions")
    return {
        'metadata': {
            'source': 'Aug-23.txt',
            'totalQuestions': len(questions),
            'subjects': {
                'CDP': len([q for q in questions if q['subject'] == 'CDP']),
                'MATH': len([q for q in questions if q['subject'] == 'MATH']),
                'EVS': len([q for q in questions if q['subject'] == 'EVS']),
                'LANG1': len([q for q in questions if q['subject'] == 'LANG1']),
                'LANG2': len([q for q in questions if q['subject'] == 'LANG2'])
            }
        },
        'questions': questions
    }

def create_question_object(question_data: Dict, options: List[str], answer_letter: str) -> Dict[str, Any]:
    """Create a structured question object"""

    # Handle both 4-option and 2-option (true/false) questions
    if len(options) not in [2, 4]:
        print(f"Warning: Question {question_data['number']} has {len(options)} options instead of 2 or 4")
        return None

    # Convert answer letter to index
    answer_map = {'A': 0, 'B': 1, 'C': 2, 'D': 3}
    if answer_letter not in answer_map:
        print(f"Warning: Invalid answer letter '{answer_letter}' for question {question_data['number']}")
        return None

    correct_index = answer_map[answer_letter]

    # Ensure we have enough options for the answer index
    if correct_index >= len(options):
        print(f"Warning: Answer index {correct_index} is out of range for question {question_data['number']} with {len(options)} options")
        return None

    # Determine subject based on question number
    question_num = question_data['number']
    if 1 <= question_num <= 30:
        subject = 'CDP'
    elif 31 <= question_num <= 60:
        subject = 'MATH'
    elif 61 <= question_num <= 90:
        subject = 'EVS'
    elif 91 <= question_num <= 120:
        subject = 'LANG1'
    elif 121 <= question_num <= 150:
        subject = 'LANG2'
    else:
        subject = 'UNKNOWN'

    # Pad options to 4 if it's a true/false question
    padded_options = options[:]
    if len(options) == 2:
        padded_options.extend(['', ''])  # Add empty strings for C and D

    return {
        'id': f'aug23_{question_num:03d}',
        'questionNumber': question_num,
        'subject': subject,
        'question': question_data['text'],
        'options': padded_options,
        'correctAnswer': answer_letter,
        'topic': '',  # Will be filled based on subject classification
        'subtopic': '',  # Will be filled based on content analysis
        'difficulty': 'medium',  # Default, can be adjusted
        'marks': 1,
        'isTrueFalse': len(options) == 2  # Flag for true/false questions
    }

def classify_questions_by_topic(questions: List[Dict]) -> List[Dict]:
    """Classify questions by topic and subtopic based on content analysis"""

    for question in questions:
        subject = question['subject']
        text = question['question'].lower()

        if subject == 'CDP':  # Child Development and Pedagogy
            if any(word in text for word in ['development', 'growth', 'maturation']):
                question['topic'] = 'Child Development'
                question['subtopic'] = 'Principles of Development'
            elif any(word in text for word in ['learning', 'teaching', 'assessment']):
                question['topic'] = 'Learning and Teaching'
                question['subtopic'] = 'Teaching Methods'
            elif any(word in text for word in ['piaget', 'cognitive', 'thinking']):
                question['topic'] = 'Cognitive Development'
                question['subtopic'] = 'Cognitive Theories'
            elif any(word in text for word in ['emotional', 'social', 'moral']):
                question['topic'] = 'Social and Emotional Development'
                question['subtopic'] = 'Emotional Development'
            else:
                question['topic'] = 'Child Development'
                question['subtopic'] = 'General Development'

        elif subject == 'MATH':  # Mathematics
            if any(word in text for word in ['number', 'counting', 'addition', 'subtraction']):
                question['topic'] = 'Number System'
                question['subtopic'] = 'Basic Operations'
            elif any(word in text for word in ['geometry', 'shapes', 'measurement']):
                question['topic'] = 'Geometry and Measurement'
                question['subtopic'] = 'Basic Geometry'
            elif any(word in text for word in ['pattern', 'sequence', 'logic']):
                question['topic'] = 'Patterns and Logic'
                question['subtopic'] = 'Mathematical Reasoning'
            else:
                question['topic'] = 'Mathematics'
                question['subtopic'] = 'General Mathematics'

        elif subject == 'EVS':  # Environmental Studies
            if any(word in text for word in ['environment', 'nature', 'earth']):
                question['topic'] = 'Our Environment'
                question['subtopic'] = 'Natural Environment'
            elif any(word in text for word in ['animal', 'plant', 'living']):
                question['topic'] = 'Living World'
                question['subtopic'] = 'Plants and Animals'
            elif any(word in text for word in ['health', 'hygiene', 'body']):
                question['topic'] = 'Health and Hygiene'
                question['subtopic'] = 'Personal Health'
            elif any(word in text for word in ['water', 'air', 'pollution']):
                question['topic'] = 'Natural Resources'
                question['subtopic'] = 'Conservation'
            else:
                question['topic'] = 'Environmental Studies'
                question['subtopic'] = 'General EVS'

        elif subject == 'LANG1':  # Language I (English)
            if any(word in text for word in ['grammar', 'sentence', 'tense']):
                question['topic'] = 'Grammar'
                question['subtopic'] = 'English Grammar'
            elif any(word in text for word in ['vocabulary', 'word', 'meaning']):
                question['topic'] = 'Vocabulary'
                question['subtopic'] = 'Word Knowledge'
            elif any(word in text for word in ['reading', 'comprehension']):
                question['topic'] = 'Reading Comprehension'
                question['subtopic'] = 'Reading Skills'
            elif any(word in text for word in ['writing', 'composition']):
                question['topic'] = 'Writing Skills'
                question['subtopic'] = 'Composition'
            else:
                question['topic'] = 'English Language'
                question['subtopic'] = 'General Language Skills'

        elif subject == 'LANG2':  # Language II (Hindi)
            if any(word in text for word in ['व्याकरण', 'संज्ञा', 'क्रिया', 'विशेषण']):
                question['topic'] = 'व्याकरण'
                question['subtopic'] = 'हिंदी व्याकरण'
            elif any(word in text for word in ['शब्द', 'अर्थ', 'पर्याय']):
                question['topic'] = 'शब्द भंडार'
                question['subtopic'] = 'शब्द ज्ञान'
            elif any(word in text for word in ['पठन', 'समझ']):
                question['topic'] = 'पठन कौशल'
                question['subtopic'] = 'पाठ समझ'
            elif any(word in text for word in ['लेखन', 'रचना']):
                question['topic'] = 'लेखन कौशल'
                question['subtopic'] = 'रचना'
            else:
                question['topic'] = 'हिंदी भाषा'
                question['subtopic'] = 'सामान्य भाषा कौशल'

    return questions

def main():
    """Main function to parse Aug-23 questions"""
    input_file = r'c:\Users\Admin\Summs\CTET-Study\SQP\Aug-23.txt'

    print("🔄 Parsing Aug-23 questions...")

    # Parse questions
    data = parse_aug23_questions(input_file)

    # Classify by topic
    data['questions'] = classify_questions_by_topic(data['questions'])

    # Save parsed data
    output_file = r'c:\Users\Admin\Summs\CTET-Study\parsed_aug23.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print("✅ Parsing completed!")
    print(f"📊 Total questions: {data['metadata']['totalQuestions']}")
    print(f"📁 Output saved to: {output_file}")

    # Print subject breakdown
    print("\n📈 Subject Breakdown:")
    for subject, count in data['metadata']['subjects'].items():
        print(f"  {subject}: {count} questions")

if __name__ == '__main__':
    main()