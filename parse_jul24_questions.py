#!/usr/bin/env python3
"""
Jul-24 Question Parser
Parses questions from Jul-24.txt and generates structured data for TypeScript conversion.
"""

import re
import json
from typing import Dict, List, Any

def parse_jul24_questions(file_path: str) -> Dict[str, Any]:
    """Parse questions from Jul-24.txt file"""

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split content into question blocks
    question_blocks = re.split(r'---------------------\n', content.strip())

    questions = []
    current_part = ""

    for block in question_blocks:
        if not block.strip():
            continue

        # Extract question number and part
        question_match = re.search(r'Question (\d+) \(Part-([IV]+)\)', block)
        if not question_match:
            continue

        question_num = int(question_match.group(1))
        part = question_match.group(2)

        # Map parts to subjects
        subject_map = {
            'I': 'CDP',      # Child Development and Pedagogy
            'II': 'MATH',    # Mathematics
            'III': 'EVS',    # Environmental Studies
            'IV': 'LANG1',   # Language I (English)
            'V': 'LANG2'     # Language II (Hindi)
        }
        subject = subject_map.get(part, 'UNKNOWN')

        # Extract question text (everything after the header until options)
        lines = block.split('\n')
        question_text = ""
        options = []
        correct_answer = ""

        # Find where question text ends and options begin
        option_start = -1
        for i, line in enumerate(lines):
            if line.strip().startswith('1. ') and i > 0:
                option_start = i
                question_text = '\n'.join(lines[1:i]).strip()
                break

        if option_start == -1:
            continue

        # Extract options (4 options)
        for i in range(4):
            if option_start + i < len(lines):
                option_line = lines[option_start + i].strip()
                if option_line:
                    options.append(option_line[3:].strip())  # Remove "1. ", "2. ", etc.

        # Extract correct answer
        for line in lines:
            if line.startswith('Correct Answer:'):
                correct_answer = line.replace('Correct Answer:', '').strip()
                break

        # Create question object
        question = {
            'id': f'jul24_{question_num:03d}',
            'questionNumber': question_num,
            'subject': subject,
            'part': part,
            'question': question_text,
            'options': options,
            'correctAnswer': correct_answer,
            'topic': '',  # Will be filled based on subject classification
            'subtopic': '',  # Will be filled based on content analysis
            'difficulty': 'medium',  # Default, can be adjusted
            'marks': 1
        }

        questions.append(question)

    return {
        'metadata': {
            'source': 'Jul-24.txt',
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

def classify_questions_by_topic(questions: List[Dict]) -> List[Dict]:
    """Classify questions by topic and subtopic based on content analysis"""

    for question in questions:
        subject = question['subject']
        text = question['question'].lower()

        if subject == 'CDP':  # Child Development and Pedagogy
            if any(word in text for word in ['piaget', 'vygotsky', 'cognitive', 'development']):
                question['topic'] = 'Learning Theories'
                question['subtopic'] = 'Cognitive Development Theories'
            elif any(word in text for word in ['intelligence', 'gardner', 'iq']):
                question['topic'] = 'Intelligence and Learning'
                question['subtopic'] = 'Types of Intelligence'
            elif any(word in text for word in ['assessment', 'evaluation', 'test']):
                question['topic'] = 'Assessment and Evaluation'
                question['subtopic'] = 'Types of Assessment'
            elif any(word in text for word in ['disability', 'learning difficulty', 'special needs']):
                question['topic'] = 'Inclusive Education'
                question['subtopic'] = 'Learning Disabilities'
            elif any(word in text for word in ['gender', 'stereotype', 'equity']):
                question['topic'] = 'Social Development'
                question['subtopic'] = 'Gender and Social Issues'
            else:
                question['topic'] = 'Child Development'
                question['subtopic'] = 'General Development'

        elif subject == 'MATH':  # Mathematics
            if any(word in text for word in ['fraction', 'decimal', 'percentage', 'number']):
                question['topic'] = 'Number System'
                question['subtopic'] = 'Fractions and Decimals'
            elif any(word in text for word in ['geometry', 'angle', 'triangle', 'shape']):
                question['topic'] = 'Geometry'
                question['subtopic'] = 'Basic Geometric Concepts'
            elif any(word in text for word in ['data', 'graph', 'statistics', 'average']):
                question['topic'] = 'Data Handling'
                question['subtopic'] = 'Data Interpretation'
            elif any(word in text for word in ['measurement', 'unit', 'conversion']):
                question['topic'] = 'Measurement'
                question['subtopic'] = 'Units and Conversions'
            elif any(word in text for word in ['algebra', 'equation', 'variable']):
                question['topic'] = 'Algebra'
                question['subtopic'] = 'Basic Algebraic Concepts'
            else:
                question['topic'] = 'Mathematics'
                question['subtopic'] = 'General Mathematics'

        elif subject == 'EVS':  # Environmental Studies
            if any(word in text for word in ['environment', 'pollution', 'conservation']):
                question['topic'] = 'Environmental Issues'
                question['subtopic'] = 'Environmental Conservation'
            elif any(word in text for word in ['animal', 'bird', 'species', 'habitat']):
                question['topic'] = 'Living World'
                question['subtopic'] = 'Animals and Habitats'
            elif any(word in text for word in ['plant', 'seed', 'germination', 'forest']):
                question['topic'] = 'Plants and Ecosystems'
                question['subtopic'] = 'Plant Life'
            elif any(word in text for word in ['earth', 'solar', 'moon', 'universe']):
                question['topic'] = 'Earth and Universe'
                question['subtopic'] = 'Solar System'
            elif any(word in text for word in ['health', 'hygiene', 'nutrition']):
                question['topic'] = 'Health and Hygiene'
                question['subtopic'] = 'Personal Health'
            else:
                question['topic'] = 'Environmental Studies'
                question['subtopic'] = 'General EVS'

        elif subject == 'LANG1':  # Language I (English)
            if any(word in text for word in ['reading', 'comprehension', 'text']):
                question['topic'] = 'Reading Comprehension'
                question['subtopic'] = 'Reading Skills'
            elif any(word in text for word in ['grammar', 'sentence', 'clause']):
                question['topic'] = 'Grammar'
                question['subtopic'] = 'Sentence Structure'
            elif any(word in text for word in ['vocabulary', 'word', 'meaning']):
                question['topic'] = 'Vocabulary'
                question['subtopic'] = 'Word Meaning'
            elif any(word in text for word in ['writing', 'composition', 'paragraph']):
                question['topic'] = 'Writing Skills'
                question['subtopic'] = 'Composition'
            elif any(word in text for word in ['teaching', 'method', 'approach']):
                question['topic'] = 'Language Teaching'
                question['subtopic'] = 'Teaching Methods'
            else:
                question['topic'] = 'English Language'
                question['subtopic'] = 'General Language Skills'

        elif subject == 'LANG2':  # Language II (Hindi)
            if any(word in text for word in ['व्याकरण', 'संज्ञा', 'विशेषण', 'क्रिया']):
                question['topic'] = 'व्याकरण'
                question['subtopic'] = 'शब्द भेद'
            elif any(word in text for word in ['पठन', 'पाठ', 'समझ']):
                question['topic'] = 'पठन कौशल'
                question['subtopic'] = 'पाठ समझ'
            elif any(word in text for word in ['लेखन', 'रचना', 'अनुच्छेद']):
                question['topic'] = 'लेखन कौशल'
                question['subtopic'] = 'रचना'
            elif any(word in text for word in ['शिक्षण', 'विधि', 'उपागम']):
                question['topic'] = 'भाषा शिक्षण'
                question['subtopic'] = 'शिक्षण विधियाँ'
            else:
                question['topic'] = 'हिंदी भाषा'
                question['subtopic'] = 'सामान्य भाषा कौशल'

    return questions

def main():
    """Main function to parse Jul-24 questions"""
    input_file = r'c:\Users\Admin\Summs\CTET-Study\SQP\Jul-24.txt'

    print("🔄 Parsing Jul-24 questions...")

    # Parse questions
    data = parse_jul24_questions(input_file)

    # Classify by topic
    data['questions'] = classify_questions_by_topic(data['questions'])

    # Save parsed data
    output_file = r'c:\Users\Admin\Summs\CTET-Study\parsed_jul24.json'
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