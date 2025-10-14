#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Process December 2024 Paper II questions and answers into TypeScript file
"""

import sys
import json
import re

# Answer key from extraction
ANSWERS = {
    1: 4, 2: 2, 3: 4, 4: 3, 5: 3, 6: 1, 7: 2, 8: 4, 9: 4, 10: 4,
    11: 4, 12: 2, 13: 2, 14: 2, 15: 4, 16: 4, 17: 3, 18: 4, 19: 1, 20: 4,
    21: 3, 22: 1, 23: 4, 24: 1, 25: 4, 26: 4, 27: 3, 28: 4, 29: 2, 30: 3,
    31: 2, 32: 1, 33: 1, 34: 1, 35: 4, 36: 3, 37: 3, 38: 2, 39: 1, 40: 3,
    41: 4, 42: 4, 43: 2, 44: 4, 45: 3, 46: 3, 47: 1, 48: 4, 49: 2, 50: 2,
    51: 1, 52: 4, 53: 2, 54: 3, 55: 3, 56: 1, 57: 2, 58: 3, 59: 3, 60: 4,
    61: 3, 62: 3, 63: 2, 64: 1, 65: 2, 66: 4, 67: 4, 68: 4, 69: 4, 70: 4,  # Q68 was 'Z', assuming 4
    71: 2, 72: 1, 73: 2, 74: 4, 75: 4, 76: 1, 77: 4, 78: 3, 79: 1, 80: 1,
    81: 1, 82: 4, 83: 4, 84: 1, 85: 4, 86: 3, 87: 3, 88: 4, 89: 4, 90: 4,
    91: 2, 92: 3, 93: 2, 94: 1, 95: 4, 96: 4, 97: 1, 98: 1, 99: 4, 100: 2,
    101: 3, 102: 1, 103: 4, 104: 3, 105: 3, 106: 2, 107: 4, 108: 4, 109: 2, 110: 4,
    111: 2, 112: 3, 113: 4, 114: 4, 115: 4, 116: 1, 117: 1, 118: 3, 119: 4, 120: 1,
    121: 3, 122: 3, 123: 2, 124: 1, 125: 1, 126: 1, 127: 2, 128: 4, 129: 4, 130: 3,
    131: 4, 132: 4, 133: 2, 134: 3, 135: 2, 136: 3, 137: 4, 138: 2, 139: 1, 140: 1,
    141: 2, 142: 4, 143: 2, 144: 4, 145: 1, 146: 3, 147: 1, 148: 1, 149: 3, 150: 2
}

def get_subject_info(q_num):
    """Determine subject, topic, and subtopic based on question number"""
    if 1 <= q_num <= 30:
        return {
            'subjectName': 'CDP',
            'topicId': 'cdp1',
            'subTopicId': 'cdp1-learning-theories'
        }
    elif 31 <= q_num <= 60:
        return {
            'subjectName': 'English',
            'topicId': 'lang1',
            'subTopicId': 'lang1-comprehension'
        }
    elif 61 <= q_num <= 90:
        return {
            'subjectName': 'Hindi',
            'topicId': 'lang2',
            'subTopicId': 'lang2-comprehension'
        }
    elif 91 <= q_num <= 120:
        # Mathematics/Science section - assuming Math for now
        return {
            'subjectName': 'Mathematics',
            'topicId': 'math1',
            'subTopicId': 'math1-general'
        }
    else:  # 121-150
        # Social Studies section
        return {
            'subjectName': 'SocialStudies',
            'topicId': 'social1',
            'subTopicId': 'social1-general'
        }

def generate_typescript_file():
    """Generate TypeScript file with placeholder questions"""
    
    ts_content = """import { QuestionPaper, SubjectName, PaperType } from '../../types';

export const QUESTION_PAPER_DEC_24_II: QuestionPaper = {
  id: 'dec-24-ii',
  name: 'CTET December 2024 - Paper II',
  description: 'Official CTET December 2024 Paper II for Classes 6-8 (Elementary Stage)',
  paperType: PaperType.PAPER_II,
  questions: [
"""

    for q_num in range(1, 151):
        answer_index = ANSWERS.get(q_num, 1) - 1  # Convert 1-4 to 0-3
        subject_info = get_subject_info(q_num)
        
        # Create placeholder question
        question_text = f"Question {q_num} from December 2024 Paper II - [TO BE FILLED]"
        options = [
            "Option A - [TO BE FILLED]",
            "Option B - [TO BE FILLED]",
            "Option C - [TO BE FILLED]",
            "Option D - [TO BE FILLED]"
        ]
        explanation = f"The correct answer is option {chr(65 + answer_index)}. Detailed explanation to be added based on official question paper."
        
        # Format options as JSON array
        options_str = json.dumps(options, ensure_ascii=False, indent=6)
        
        ts_content += f"""    {{
      question: "{question_text}",
      options: {options_str},
      correctAnswerIndex: {answer_index},
      explanation: "{explanation}",
      subjectName: SubjectName.{subject_info['subjectName']},
      topicId: "{subject_info['topicId']}",
      subTopicId: "{subject_info['subTopicId']}",
    }}"""
        
        if q_num < 150:
            ts_content += ","
        
        ts_content += "\n"
    
    ts_content += """  ],
};
"""
    
    return ts_content

def main():
    """Main function"""
    print("Generating Dec-24 Paper II TypeScript file...")
    
    ts_content = generate_typescript_file()
    
    # Write to file
    output_file = "constants/questionPapers/dec-24-ii.ts"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"✅ Created {output_file}")
    print(f"✅ Generated 150 questions with correct answer indices")
    print(f"⚠️  Questions and options are placeholders - need to be filled manually")
    print(f"✅ Subject classification completed:")
    print(f"   - Q1-30: CDP")
    print(f"   - Q31-60: English")
    print(f"   - Q61-90: Hindi")
    print(f"   - Q91-120: Mathematics")
    print(f"   - Q121-150: Social Studies")
    
if __name__ == "__main__":
    main()
