import PyPDF2
import json
import re
from typing import Dict, List, Tuple, Optional

def extract_questions_from_pdf(pdf_path: str) -> List[str]:
    """Extract questions from PDF file, focusing on actual MCQs"""
    questions = []

    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)

            for page in pdf_reader.pages:
                text = page.extract_text()

                # Split text into lines
                lines = text.split('\n')

                current_question = ""
                in_question = False
                question_count = 0

                for line in lines:
                    line = line.strip()

                    # Skip instructions and headers
                    if any(skip_word in line.lower() for skip_word in [
                        'omr', 'test booklet', 'duration', 'blue/black', 'code',
                        'part-', 'candidates', 'rough work', 'answers', 'discrepancy'
                    ]):
                        continue

                    # Look for actual question patterns
                    if re.match(r'^\d+\.\s*(Assertion|Direction|Which|What|How|In|According|A|The|Meaningful|Kinesthetic)', line, re.IGNORECASE):
                        if current_question and len(current_question) > 20:  # Only save meaningful questions
                            questions.append(current_question.strip())
                        current_question = line
                        in_question = True
                        question_count += 1
                    elif in_question and line and not line.startswith('(') and len(line) > 10:
                        # Continue building the question if it's multi-line
                        if len(current_question + " " + line) < 300:  # Reasonable question length
                            current_question += " " + line
                        else:
                            # If question gets too long, save current and start new
                            if current_question and len(current_question) > 20:
                                questions.append(current_question.strip())
                            current_question = line if re.match(r'^\d+\.', line) else ""
                            in_question = bool(current_question)

                # Add the last question if exists and is meaningful
                if current_question and len(current_question) > 20:
                    questions.append(current_question.strip())

    except Exception as e:
        print(f"Error reading PDF {pdf_path}: {e}")

    return questions

def load_app_questions() -> List[Dict]:
    """Load questions from app data files"""
    app_questions = []

    try:
        # Read the main question paper file
        with open('constants/questionPapers/sed-24-i.ts', 'r', encoding='utf-8') as f:
            content = f.read()

            # Extract question objects using regex
            # Look for question patterns
            question_pattern = r'question:\s*[\'"](.*?)[\'"]'
            answer_pattern = r'correctAnswerIndex:\s*(\d+)'

            questions = re.findall(question_pattern, content)
            answers = re.findall(answer_pattern, content)

            for i, (question_text, answer_index) in enumerate(zip(questions, answers)):
                app_questions.append({
                    'question': question_text.strip(),
                    'correctAnswerIndex': int(answer_index)
                })

    except Exception as e:
        print(f"Error loading app questions: {e}")

    return app_questions

def parse_answer_key() -> Dict[str, List[int]]:
    """Parse the official answer key"""
    answers = {'H': [], 'I': [], 'J': [], 'K': []}

    try:
        with open('SQP/answer_key.txt', 'r', encoding='utf-8') as f:
            content = f.read()

            # Extract answers for each set
            for set_code in ['H', 'I', 'J', 'K']:
                set_pattern = f'SET {set_code}.*?(?=SET [HIJK]|$)'
                set_match = re.search(set_pattern, content, re.DOTALL | re.IGNORECASE)

                if set_match:
                    set_text = set_match.group(0)
                    # Extract answer numbers
                    answer_matches = re.findall(r'\b(\d+)\b', set_text)
                    answers[set_code] = [int(ans) for ans in answer_matches if 1 <= int(ans) <= 4]

    except Exception as e:
        print(f"Error parsing answer key: {e}")

    return answers

def create_comprehensive_mapping_table():
    """Create the comprehensive mapping table with question text"""

    # Extract questions from PDFs
    pdf_questions_dec = extract_questions_from_pdf('SQP/Dec-24.pdf')
    pdf_questions_anz = extract_questions_from_pdf('SQP/Anz-Dec24.pdf')

    # Combine PDF questions
    pdf_questions = pdf_questions_dec + pdf_questions_anz

    # Load app questions
    app_questions = load_app_questions()

    # Parse answer key
    answer_key = parse_answer_key()

    # Use Set I answers (most common)
    pdf_answers = answer_key.get('I', [])

    print("| PDF Question | App Question | PDF Answer | App Answer | PDF Question Text | App Question Text |")
    print("|-------------|--------------|------------|------------|-------------------|-------------------|")

    # Create mapping for first 132 questions (app has 132 questions)
    max_questions = max(len(pdf_questions), len(app_questions))

    for i in range(1, max_questions + 1):
        pdf_q_num = i
        app_q_num = i if i <= len(app_questions) else ""
        pdf_answer = pdf_answers[i-1] if i-1 < len(pdf_answers) else ""
        app_answer = (app_questions[i-1]['correctAnswerIndex'] + 1) if i-1 < len(app_questions) else ""

        # Get question text (first 50 characters)
        pdf_question_text = ""
        if i-1 < len(pdf_questions):
            pdf_question_text = pdf_questions[i-1][:50] + "..." if len(pdf_questions[i-1]) > 50 else pdf_questions[i-1]

        app_question_text = ""
        if i-1 < len(app_questions):
            app_question_text = app_questions[i-1]['question'][:50] + "..." if len(app_questions[i-1]['question']) > 50 else app_questions[i-1]['question']

        print(f"| {pdf_q_num} | {app_q_num} | {pdf_answer} | {app_answer} | {pdf_question_text} | {app_question_text} |")

def create_mcq_text_file():
    """Create a downloadable text file with complete MCQs and answers"""

    # Load app questions with full details
    app_questions = load_app_questions()
    answer_key = parse_answer_key()
    pdf_answers = answer_key.get('I', [])

    with open('complete_mcq_questions.txt', 'w', encoding='utf-8') as f:
        f.write("COMPLETE CTET MCQ QUESTIONS WITH ANSWERS\n")
        f.write("=" * 50 + "\n\n")

        for i, question_data in enumerate(app_questions, 1):
            f.write(f"Question {i}:\n")
            f.write(f"{question_data['question']}\n\n")

            # Add options (placeholder since we don't have them in the data)
            f.write("Options:\n")
            f.write("1. [Option A]\n")
            f.write("2. [Option B]\n")
            f.write("3. [Option C]\n")
            f.write("4. [Option D]\n\n")

            # Official answer
            pdf_answer = pdf_answers[i-1] if i-1 < len(pdf_answers) else "N/A"
            app_answer = question_data['correctAnswerIndex'] + 1

            f.write(f"Official Answer (PDF): {pdf_answer}\n")
            f.write(f"App Answer: {app_answer}\n")
            f.write("-" * 50 + "\n\n")

    print("Complete MCQ file created: complete_mcq_questions.txt")

if __name__ == "__main__":
    print("Creating comprehensive mapping table with question text...")
    create_comprehensive_mapping_table()

    print("\nCreating downloadable MCQ text file...")
    create_mcq_text_file()

    print("\nProcess completed! Check the output above and the generated files.")