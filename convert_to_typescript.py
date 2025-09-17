#!/usr/bin/env python3
"""
Convert parsed Jul-24 questions to TypeScript format
"""

import json
import re
from typing import Dict, List, Any

def convert_answer_to_index(correct_answer: str) -> int:
    """Convert answer string like '2. option text' to 0-based index"""
    match = re.match(r'(\d+)\.', correct_answer.strip())
    if match:
        return int(match.group(1)) - 1
    return 0

def get_topic_id(subject: str, topic: str) -> str:
    """Generate topic ID based on subject and topic"""
    subject_prefixes = {
        'CDP': 'cdp',
        'MATH': 'math',
        'EVS': 'evs',
        'LANG1': 'lang1',
        'LANG2': 'lang2'
    }

    prefix = subject_prefixes.get(subject, 'unknown')

    # Create a simple mapping for topic IDs
    topic_mappings = {
        'CDP': {
            'Learning Theories': '1',
            'Intelligence and Learning': '2',
            'Assessment and Evaluation': '3',
            'Inclusive Education': '4',
            'Social Development': '5',
            'Child Development': '6'
        },
        'MATH': {
            'Number System': '1',
            'Geometry': '2',
            'Data Handling': '3',
            'Measurement': '4',
            'Algebra': '5',
            'Mathematics': '6'
        },
        'EVS': {
            'Environmental Issues': '1',
            'Living World': '2',
            'Plants and Ecosystems': '3',
            'Earth and Universe': '4',
            'Health and Hygiene': '5',
            'Environmental Studies': '6'
        },
        'LANG1': {
            'Reading Comprehension': '1',
            'Grammar': '2',
            'Vocabulary': '3',
            'Writing Skills': '4',
            'Language Teaching': '5',
            'English Language': '6'
        },
        'LANG2': {
            'व्याकरण': '1',
            'पठन कौशल': '2',
            'लेखन कौशल': '3',
            'भाषा शिक्षण': '4',
            'हिंदी भाषा': '5'
        }
    }

    topic_num = topic_mappings.get(subject, {}).get(topic, '1')
    return f'{prefix}{topic_num}'

def get_subtopic_id(subject: str, subtopic: str) -> str:
    """Generate subtopic ID based on subject and subtopic"""
    topic_id = get_topic_id(subject, '')  # Get base topic ID

    # Create subtopic mappings
    subtopic_mappings = {
        'CDP': {
            'Cognitive Development Theories': 'piaget',
            'Types of Intelligence': 'intelligence',
            'Types of Assessment': 'assessment',
            'Learning Disabilities': 'disabilities',
            'Gender and Social Issues': 'gender',
            'General Development': 'general'
        },
        'MATH': {
            'Fractions and Decimals': 'fractions',
            'Basic Geometric Concepts': 'geometry',
            'Data Interpretation': 'data',
            'Units and Conversions': 'measurement',
            'Basic Algebraic Concepts': 'algebra',
            'General Mathematics': 'general'
        },
        'EVS': {
            'Environmental Conservation': 'conservation',
            'Animals and Habitats': 'animals',
            'Plant Life': 'plants',
            'Solar System': 'solar',
            'Personal Health': 'health',
            'General EVS': 'general'
        },
        'LANG1': {
            'Reading Skills': 'reading',
            'Sentence Structure': 'grammar',
            'Word Meaning': 'vocabulary',
            'Composition': 'writing',
            'Teaching Methods': 'teaching',
            'General Language Skills': 'general'
        },
        'LANG2': {
            'शब्द भेद': 'words',
            'पाठ समझ': 'reading',
            'रचना': 'writing',
            'शिक्षण विधियाँ': 'teaching',
            'सामान्य भाषा कौशल': 'general'
        }
    }

    subtopic_suffix = subtopic_mappings.get(subject, {}).get(subtopic, 'general')
    return f'{topic_id}-{subtopic_suffix}'

def generate_explanation(question: str, correct_option: str) -> str:
    """Generate a basic explanation for the question"""
    return f"The correct answer is: {correct_option}"

def convert_to_typescript(data: Dict[str, Any]) -> str:
    """Convert parsed data to TypeScript format"""

    subject_enum_map = {
        'CDP': 'SubjectName.CDP',
        'MATH': 'SubjectName.MATH',
        'EVS': 'SubjectName.EVS',
        'LANG1': 'SubjectName.LANG1',
        'LANG2': 'SubjectName.LANG2'
    }

    ts_questions = []

    for q in data['questions']:
        correct_index = convert_answer_to_index(q['correctAnswer'])
        topic_id = get_topic_id(q['subject'], q['topic'])
        subtopic_id = get_subtopic_id(q['subject'], q['subtopic'])
        subject_enum = subject_enum_map.get(q['subject'], 'SubjectName.CDP')

        # Escape quotes in question and options
        question_text = q['question'].replace('"', '\\"').replace('\n', '\\n')
        options = [opt.replace('"', '\\"') for opt in q['options']]
        correct_option = q['options'][correct_index] if correct_index < len(q['options']) else q['options'][0]

        explanation = generate_explanation(q['question'], correct_option).replace('"', '\\"')

        ts_question = f"""    {{
      question: "{question_text}",
      options: [
        "{options[0]}",
        "{options[1]}",
        "{options[2]}",
        "{options[3]}"
      ],
      correctAnswerIndex: {correct_index},
      explanation: "{explanation}",
      subjectName: {subject_enum},
      topicId: "{topic_id}",
      subTopicId: "{subtopic_id}",
    }}"""

        ts_questions.append(ts_question)

    # Create the full TypeScript file content
    ts_content = f"""import {{ QuestionPaper, SubjectName }} from '../../types';

export const QUESTION_PAPER_JUL_24_I: QuestionPaper = {{
  id: 'jul-24-i',
  name: 'CTET Paper - Jul 2024',
  description: 'Official past paper with 150 questions covering all subjects.',
  questions: [
{','.join(ts_questions)}
  ]
}};
"""

    return ts_content

def main():
    """Main function to convert JSON to TypeScript"""

    input_file = r'c:\Users\Admin\Summs\CTET-Study\parsed_jul24.json'
    output_file = r'c:\Users\Admin\Summs\CTET-Study\constants\questionPapers\jul-24-i.ts'

    print("🔄 Converting parsed questions to TypeScript format...")

    # Load parsed data
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Convert to TypeScript
    ts_content = convert_to_typescript(data)

    # Save TypeScript file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(ts_content)

    print("✅ Conversion completed!")
    print(f"📁 TypeScript file saved to: {output_file}")
    print(f"📊 Generated {len(data['questions'])} questions")

if __name__ == '__main__':
    main()