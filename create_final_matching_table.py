import re
from difflib import SequenceMatcher

def create_final_matching_table():
    """Create a final table showing the best matching questions"""

    try:
        with open('comprehensive_question_mapping.md', 'r', encoding='utf-8') as f:
            lines = f.readlines()

        # Skip header rows
        data_lines = lines[2:]  # Skip the header and separator line

        best_matches = []

        for line in data_lines:
            if line.strip() and not line.startswith('|-------------'):
                # Parse the markdown table row
                parts = [part.strip() for part in line.strip('|').split('|')]

                if len(parts) >= 6:
                    pdf_q_num = parts[0]
                    app_q_num = parts[1]
                    pdf_answer = parts[2]
                    app_answer = parts[3]
                    pdf_question_text = parts[4]
                    app_question_text = parts[5]

                    # Skip empty entries
                    if not pdf_question_text.strip() or not app_question_text.strip():
                        continue

                    # Clean up the text for comparison
                    pdf_clean = re.sub(r'\s+', ' ', pdf_question_text.lower().strip())
                    app_clean = re.sub(r'\s+', ' ', app_question_text.lower().strip())

                    # Remove common prefixes
                    pdf_clean = re.sub(r'^\d+\.\s*', '', pdf_clean)
                    app_clean = re.sub(r'^\d+\.\s*', '', app_clean)

                    # Calculate similarity
                    pdf_words = set(pdf_clean.split())
                    app_words = set(app_clean.split())

                    if pdf_words and app_words:
                        intersection = pdf_words.intersection(app_words)
                        union = pdf_words.union(app_words)
                        jaccard_similarity = len(intersection) / len(union) if union else 0

                        seq_similarity = SequenceMatcher(None, pdf_clean, app_clean).ratio()
                        similarity = max(jaccard_similarity, seq_similarity)

                        # Only include matches with similarity > 0.4 (40%)
                        if similarity > 0.4:
                            best_matches.append({
                                'pdf_q_num': pdf_q_num,
                                'app_q_num': app_q_num,
                                'pdf_answer': pdf_answer,
                                'app_answer': app_answer,
                                'pdf_question_text': pdf_question_text,
                                'app_question_text': app_question_text,
                                'similarity': similarity
                            })

        # Sort by similarity (highest first)
        best_matches.sort(key=lambda x: x['similarity'], reverse=True)

        # Create the final table with top matches
        with open('final_matching_questions_table.md', 'w', encoding='utf-8') as f:
            f.write("# QUESTIONS WHERE PDF TEXT MATCHES APP TEXT\n\n")
            f.write("This table shows questions where the PDF and app question text are similar or identical.\n\n")
            f.write("| PDF Question | App Question | PDF Answer | App Answer | Similarity | PDF Question Text | App Question Text |\n")
            f.write("|-------------|--------------|------------|------------|------------|-------------------|-------------------|\n")

            for row in best_matches[:25]:  # Top 25 matches
                pdf_text = row['pdf_question_text'].replace('|', '\\|').replace('\n', ' ')
                app_text = row['app_question_text'].replace('|', '\\|').replace('\n', ' ')
                similarity_pct = ".1f"
                f.write(f"| {row['pdf_q_num']} | {row['app_q_num']} | {row['pdf_answer']} | {row['app_answer']} | {similarity_pct} | {pdf_text} | {app_text} |\n")

        # Create summary statistics
        total_questions = len([line for line in data_lines if line.strip() and not line.startswith('|-------------')])
        matched_questions = len(best_matches)

        with open('matching_summary.txt', 'w', encoding='utf-8') as f:
            f.write("MATCHING QUESTIONS SUMMARY\n")
            f.write("=" * 30 + "\n\n")
            f.write(f"Total questions analyzed: {total_questions}\n")
            f.write(f"Questions with similar text (>40% similarity): {matched_questions}\n")
            f.write(".1f")
            f.write("\n\nTOP 5 MATCHES:\n")
            f.write("-" * 15 + "\n")

            for i, row in enumerate(best_matches[:5], 1):
                f.write(f"{i}. PDF Q{row['pdf_q_num']} ↔ App Q{row['app_q_num']} ({row['similarity']:.1%} similar)\n")
                f.write(f"   PDF: {row['pdf_question_text'][:60]}...\n")
                f.write(f"   App: {row['app_question_text'][:60]}...\n")
                f.write(f"   Answers: PDF={row['pdf_answer']} | App={row['app_answer']}\n\n")

        print(f"Analysis complete! Found {matched_questions} similar questions out of {total_questions} total questions")
        print("Final table saved to: final_matching_questions_table.md")
        print("Summary saved to: matching_summary.txt")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    create_final_matching_table()