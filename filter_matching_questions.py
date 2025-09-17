import re

def filter_matching_questions():
    """Filter the comprehensive mapping table to show only rows where PDF Question Text matches App Question Text"""

    matching_rows = []

    try:
        with open('comprehensive_question_mapping.md', 'r', encoding='utf-8') as f:
            lines = f.readlines()

        # Skip header rows
        data_lines = lines[2:]  # Skip the header and separator line

        for line in data_lines:
            if line.strip() and not line.startswith('|-------------'):
                # Parse the markdown table row
                # Remove leading/trailing | and split by |
                parts = [part.strip() for part in line.strip('|').split('|')]

                if len(parts) >= 6:
                    pdf_q_num = parts[0]
                    app_q_num = parts[1]
                    pdf_answer = parts[2]
                    app_answer = parts[3]
                    pdf_question_text = parts[4]
                    app_question_text = parts[5]

                    # Clean up the text for comparison (remove extra spaces, normalize)
                    pdf_clean = re.sub(r'\s+', ' ', pdf_question_text.lower().strip())
                    app_clean = re.sub(r'\s+', ' ', app_question_text.lower().strip())

                    # Remove common prefixes that might differ
                    pdf_clean = re.sub(r'^\d+\.\s*', '', pdf_clean)  # Remove "1. " etc.
                    app_clean = re.sub(r'^\d+\.\s*', '', app_clean)  # Remove "1. " etc.

                    # Check if they match (allowing for some flexibility)
                    if pdf_clean == app_clean or pdf_question_text.strip() == app_question_text.strip():
                        matching_rows.append({
                            'pdf_q_num': pdf_q_num,
                            'app_q_num': app_q_num,
                            'pdf_answer': pdf_answer,
                            'app_answer': app_answer,
                            'pdf_question_text': pdf_question_text,
                            'app_question_text': app_question_text
                        })

    except Exception as e:
        print(f"Error reading file: {e}")
        return

    # Create the filtered table
    with open('matching_questions_table.md', 'w', encoding='utf-8') as f:
        f.write("| PDF Question | App Question | PDF Answer | App Answer | Matching Question Text |\n")
        f.write("|-------------|--------------|------------|------------|-------------------------|\n")

        for row in matching_rows:
            # Use PDF question text since they match
            question_text = row['pdf_question_text'].replace('|', '\\|').replace('\n', ' ')
            f.write(f"| {row['pdf_q_num']} | {row['app_q_num']} | {row['pdf_answer']} | {row['app_answer']} | {question_text} |\n")

    print(f"Found {len(matching_rows)} matching questions")
    print("Filtered table saved to: matching_questions_table.md")

    # Also create a detailed text file
    with open('matching_questions_detailed.txt', 'w', encoding='utf-8') as f:
        f.write("QUESTIONS WHERE PDF TEXT MATCHES APP TEXT\n")
        f.write("=" * 50 + "\n\n")

        for i, row in enumerate(matching_rows, 1):
            f.write(f"Match #{i}:\n")
            f.write(f"PDF Question #{row['pdf_q_num']} = App Question #{row['app_q_num']}\n")
            f.write(f"Question: {row['pdf_question_text']}\n")
            f.write(f"PDF Answer: {row['pdf_answer']}\n")
            f.write(f"App Answer: {row['app_answer']}\n")

            # Check if answers match
            if row['pdf_answer'] and row['app_answer']:
                if row['pdf_answer'] == row['app_answer']:
                    f.write("✓ Answers match\n")
                else:
                    f.write("✗ Answers differ\n")

            f.write("-" * 50 + "\n\n")

    print("Detailed text file saved to: matching_questions_detailed.txt")

if __name__ == "__main__":
    filter_matching_questions()