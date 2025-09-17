import re
import os
from difflib import SequenceMatcher
from collections import defaultdict
import json

def extract_pdf_questions(pdf_path):
    """Extract all questions from PDF file"""
    try:
        import PyPDF2
    except ImportError:
        print("PyPDF2 not installed. Installing...")
        os.system("pip install PyPDF2")
        import PyPDF2

    questions = {}

    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)

            for page_num in range(len(pdf_reader.pages)):
                page = pdf_reader.pages[page_num]
                text = page.extract_text()

                # Clean encoding issues
                text = text.encode('utf-8', errors='ignore').decode('utf-8', errors='ignore')

                # Split text into lines
                lines = text.split('\n')

                for i, line in enumerate(lines):
                    # Look for question patterns like "1.", "2.", etc.
                    question_match = re.match(r'^(\d+)\.\s*(.+)', line.strip())
                    if question_match:
                        q_num = int(question_match.group(1))
                        q_text = question_match.group(2).strip()

                        # Collect the full question text (may span multiple lines)
                        full_text = q_text
                        j = i + 1
                        while j < len(lines) and not re.match(r'^\d+\.', lines[j].strip()):
                            if lines[j].strip() and not lines[j].startswith('(') and not lines[j].startswith('a)') and not lines[j].startswith('b)') and not lines[j].startswith('c)') and not lines[j].startswith('d)'):
                                full_text += ' ' + lines[j].strip()
                            j += 1

                        questions[q_num] = {
                            'text': full_text,
                            'answer': None  # Will be filled from answer key later
                        }

    except Exception as e:
        print(f"Error extracting from {pdf_path}: {e}")

    return questions

def load_app_questions():
    """Load all app questions from TypeScript files"""
    app_questions = {}

    # Check the question papers directory
    question_dir = 'constants/questionPapers'

    if os.path.exists(question_dir):
        for file in os.listdir(question_dir):
            if file.endswith('.ts'):
                file_path = os.path.join(question_dir, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()

                        # Extract questions array using regex
                        # Look for pattern: { question: 'text', options: [...], correctAnswerIndex: number, ... }
                        question_pattern = r'{\s*question:\s*[\'"](.*?)[\'"],\s*options:\s*\[(.*?)\],\s*correctAnswerIndex:\s*(\d+),'
                        matches = re.findall(question_pattern, content, re.DOTALL)

                        for idx, (question_text, options_text, answer_idx) in enumerate(matches, 1):
                            # Clean the question text
                            question_text = question_text.strip()

                            # Convert answer index to 1-based
                            answer_num = int(answer_idx) + 1

                            app_questions[idx] = {
                                'text': question_text,
                                'answer': answer_num
                            }

                except Exception as e:
                    print(f"Error reading {file_path}: {e}")

    return app_questions

def parse_answer_key():
    """Parse the answer key file for all sets"""
    answers = defaultdict(dict)

    try:
        with open('SQP/answer_key.txt', 'r', encoding='utf-8') as f:
            content = f.read()

            # Manual parsing for Set H (first set)
            # Extract all number pairs manually
            lines = content.split('\n')
            current_set = None

            for i, line in enumerate(lines):
                line = line.strip()

                # Detect set
                if 'Set :- H' in line:
                    current_set = 'H'
                elif 'Set :- I' in line:
                    current_set = 'I'
                elif 'Set :- J' in line:
                    current_set = 'J'
                elif 'Set :- K' in line:
                    current_set = 'K'

                if current_set and line.isdigit():
                    q_num = int(line)
                    # Look for answer in next few lines
                    for j in range(1, 5):
                        if i + j < len(lines):
                            next_line = lines[i + j].strip()
                            if next_line.isdigit() or next_line in ['Z', 'A', 'B', 'C', 'D', 'E', 'F']:
                                if next_line.isdigit():
                                    answers[current_set][q_num] = int(next_line)
                                elif next_line == 'Z':
                                    answers[current_set][q_num] = 'ALL'
                                break

    except Exception as e:
        print(f"Error parsing answer key: {e}")

    return answers

def calculate_similarity(text1, text2):
    """Calculate similarity between two texts"""
    if not text1 or not text2:
        return 0.0

    # Clean texts
    text1_clean = re.sub(r'\s+', ' ', text1.lower().strip())
    text2_clean = re.sub(r'\s+', ' ', text2.lower().strip())

    # Remove question numbers
    text1_clean = re.sub(r'^\d+\.\s*', '', text1_clean)
    text2_clean = re.sub(r'^\d+\.\s*', '', text2_clean)

    # Calculate Jaccard similarity
    words1 = set(text1_clean.split())
    words2 = set(text2_clean.split())

    if not words1 or not words2:
        return 0.0

    intersection = words1.intersection(words2)
    union = words1.union(words2)
    jaccard_sim = len(intersection) / len(union)

    # Calculate sequence similarity
    seq_sim = SequenceMatcher(None, text1_clean, text2_clean).ratio()

    return max(jaccard_sim, seq_sim)

def find_best_matches(pdf_questions, app_questions, threshold=0.4):
    """Find best matches between PDF and app questions"""
    matches = []
    used_app_questions = set()

    for pdf_num, pdf_data in pdf_questions.items():
        pdf_text = pdf_data['text']
        best_match = None
        best_similarity = 0.0

        for app_num, app_data in app_questions.items():
            if app_num in used_app_questions:
                continue

            app_text = app_data['text']
            similarity = calculate_similarity(pdf_text, app_text)

            if similarity > best_similarity and similarity >= threshold:
                best_similarity = similarity
                best_match = app_num

        if best_match:
            matches.append({
                'pdf_num': pdf_num,
                'app_num': best_match,
                'similarity': best_similarity,
                'pdf_text': pdf_text,
                'app_text': app_questions[best_match]['text'],
                'pdf_answer': pdf_data.get('answer'),
                'app_answer': app_questions[best_match].get('answer')
            })
            used_app_questions.add(best_match)

    return matches

def create_outer_join_table(pdf_questions, app_questions, matches):
    """Create comprehensive outer join table"""
    table_rows = []

    # Add matched questions first
    matched_pdf_nums = {match['pdf_num'] for match in matches}
    matched_app_nums = {match['app_num'] for match in matches}

    for match in matches:
        table_rows.append({
            'pdf_num': match['pdf_num'],
            'app_num': match['app_num'],
            'similarity': match['similarity'],
            'pdf_text': match['pdf_text'],
            'app_text': match['app_text'],
            'pdf_answer': match['pdf_answer'],
            'app_answer': match['app_answer'],
            'match_type': 'matched'
        })

    # Add unmatched PDF questions
    for pdf_num, pdf_data in pdf_questions.items():
        if pdf_num not in matched_pdf_nums:
            table_rows.append({
                'pdf_num': pdf_num,
                'app_num': None,
                'similarity': None,
                'pdf_text': pdf_data['text'],
                'app_text': None,
                'pdf_answer': pdf_data.get('answer'),
                'app_answer': None,
                'match_type': 'pdf_only'
            })

    # Add unmatched app questions
    for app_num, app_data in app_questions.items():
        if app_num not in matched_app_nums:
            table_rows.append({
                'pdf_num': None,
                'app_num': app_num,
                'similarity': None,
                'pdf_text': None,
                'app_text': app_data['text'],
                'pdf_answer': None,
                'app_answer': app_data.get('answer'),
                'match_type': 'app_only'
            })

    # Sort by PDF number, then app number
    table_rows.sort(key=lambda x: (x['pdf_num'] or 999, x['app_num'] or 999))

    return table_rows

def save_outer_join_table(table_rows, filename='outer_join_table.md'):
    """Save the outer join table to markdown file"""
    with open(filename, 'w', encoding='utf-8') as f:
        f.write("# CTET PDF-App Questions Outer Join Table\n\n")
        f.write("This table shows all PDF questions (1-150) and all app questions (1-132) with matches based on text similarity.\n\n")
        f.write("| PDF # | App # | Match Type | Similarity | PDF Answer | App Answer | PDF Question Text | App Question Text |\n")
        f.write("|-------|-------|------------|------------|------------|------------|-------------------|-------------------|\n")

        for row in table_rows:
            pdf_num = str(row['pdf_num']) if row['pdf_num'] else '-'
            app_num = str(row['app_num']) if row['app_num'] else '-'
            match_type = row['match_type']
            similarity = ".1f" if row['similarity'] else '-'
            pdf_answer = str(row['pdf_answer']) if row['pdf_answer'] else '-'
            app_answer = str(row['app_answer']) if row['app_answer'] else '-'

            pdf_text = (row['pdf_text'] or '').replace('|', '\\|').replace('\n', ' ')
            app_text = (row['app_text'] or '').replace('|', '\\|').replace('\n', ' ')

            # Truncate long texts for readability
            if len(pdf_text) > 80:
                pdf_text = pdf_text[:77] + '...'
            if len(app_text) > 80:
                app_text = app_text[:77] + '...'

            f.write(f"| {pdf_num} | {app_num} | {match_type} | {similarity} | {pdf_answer} | {app_answer} | {pdf_text} | {app_text} |\n")

    print(f"Outer join table saved to {filename}")

def main():
    print("Starting comprehensive outer join analysis...")

    # Extract PDF questions
    print("Extracting PDF questions...")
    pdf_questions = {}

    # Try different PDF files
    pdf_files = ['SQP/Dec-24.pdf', 'SQP/Anz-Dec24.pdf', 'SQP/Jan-24.pdf', 'SQP/Anz-Jan24.pdf']
    for pdf_file in pdf_files:
        if os.path.exists(pdf_file):
            print(f"Processing {pdf_file}...")
            pdf_data = extract_pdf_questions(pdf_file)
            pdf_questions.update(pdf_data)
            print(f"Found {len(pdf_data)} questions in {pdf_file}")

    print(f"Total PDF questions extracted: {len(pdf_questions)}")

    # Load app questions
    print("Loading app questions...")
    app_questions = load_app_questions()
    print(f"Total app questions loaded: {len(app_questions)}")

    # Parse answer keys
    print("Parsing answer keys...")
    answer_keys = parse_answer_key()
    print(f"Answer keys parsed for sets: {list(answer_keys.keys())}")

    # Add answers to PDF questions (using first available set)
    if answer_keys:
        first_set = list(answer_keys.keys())[0]
        for q_num in list(pdf_questions.keys()):
            if q_num in answer_keys[first_set]:
                pdf_questions[q_num]['answer'] = answer_keys[first_set][q_num]
            else:
                pdf_questions[q_num]['answer'] = None

    # Find best matches
    print("Finding question matches...")
    matches = find_best_matches(pdf_questions, app_questions)
    print(f"Found {len(matches)} matched question pairs")

    # Create outer join table
    print("Creating outer join table...")
    table_rows = create_outer_join_table(pdf_questions, app_questions, matches)

    # Save results
    save_outer_join_table(table_rows)

    # Print summary
    matched_count = len([r for r in table_rows if r['match_type'] == 'matched'])
    pdf_only_count = len([r for r in table_rows if r['match_type'] == 'pdf_only'])
    app_only_count = len([r for r in table_rows if r['match_type'] == 'app_only'])

    print("\nSummary:")
    print(f"- Total rows in table: {len(table_rows)}")
    print(f"- Matched questions: {matched_count}")
    print(f"- PDF-only questions: {pdf_only_count}")
    print(f"- App-only questions: {app_only_count}")
    print(f"- PDF questions total: {len(pdf_questions)}")
    print(f"- App questions total: {len(app_questions)}")

if __name__ == "__main__":
    main()