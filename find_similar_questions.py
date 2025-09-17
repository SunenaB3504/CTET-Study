import re
from difflib import SequenceMatcher

def find_similar_questions():
    """Find questions with similar or matching text between PDF and app"""

    similar_questions = []
    exact_matches = []

    try:
        with open('comprehensive_question_mapping.md', 'r', encoding='utf-8') as f:
            lines = f.readlines()

        # Skip header rows
        data_lines = lines[2:]  # Skip the header and separator line

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

                    # Check for exact match
                    if pdf_clean == app_clean:
                        exact_matches.append({
                            'pdf_q_num': pdf_q_num,
                            'app_q_num': app_q_num,
                            'pdf_answer': pdf_answer,
                            'app_answer': app_answer,
                            'pdf_question_text': pdf_question_text,
                            'app_question_text': app_question_text,
                            'similarity': 1.0,
                            'match_type': 'exact'
                        })
                    else:
                        # Check for similarity (common keywords)
                        pdf_words = set(pdf_clean.split())
                        app_words = set(app_clean.split())

                        if pdf_words and app_words:
                            intersection = pdf_words.intersection(app_words)
                            union = pdf_words.union(app_words)
                            jaccard_similarity = len(intersection) / len(union) if union else 0

                            # Also check sequence similarity
                            seq_similarity = SequenceMatcher(None, pdf_clean, app_clean).ratio()

                            # Use the higher of the two similarities
                            similarity = max(jaccard_similarity, seq_similarity)

                            # Consider similar if similarity > 0.3 (30% similar)
                            if similarity > 0.3:
                                similar_questions.append({
                                    'pdf_q_num': pdf_q_num,
                                    'app_q_num': app_q_num,
                                    'pdf_answer': pdf_answer,
                                    'app_answer': app_answer,
                                    'pdf_question_text': pdf_question_text,
                                    'app_question_text': app_question_text,
                                    'similarity': similarity,
                                    'match_type': 'similar'
                                })

    except Exception as e:
        print(f"Error reading file: {e}")
        return

    # Sort by similarity (highest first)
    similar_questions.sort(key=lambda x: x['similarity'], reverse=True)

    # Create exact matches table
    if exact_matches:
        with open('exact_matching_questions.md', 'w', encoding='utf-8') as f:
            f.write("| PDF Question | App Question | PDF Answer | App Answer | Exact Matching Question Text |\n")
            f.write("|-------------|--------------|------------|------------|------------------------------|\n")

            for row in exact_matches:
                question_text = row['pdf_question_text'].replace('|', '\\|').replace('\n', ' ')
                f.write(f"| {row['pdf_q_num']} | {row['app_q_num']} | {row['pdf_answer']} | {row['app_answer']} | {question_text} |\n")

    # Create similar questions table
    if similar_questions:
        with open('similar_questions_table.md', 'w', encoding='utf-8') as f:
            f.write("| PDF Question | App Question | PDF Answer | App Answer | Similarity | PDF Question Text | App Question Text |\n")
            f.write("|-------------|--------------|------------|------------|------------|-------------------|-------------------|\n")

            for row in similar_questions[:20]:  # Top 20 most similar
                pdf_text = row['pdf_question_text'].replace('|', '\\|').replace('\n', ' ')
                app_text = row['app_question_text'].replace('|', '\\|').replace('\n', ' ')
                similarity_pct = ".1f"
                f.write(f"| {row['pdf_q_num']} | {row['app_q_num']} | {row['pdf_answer']} | {row['app_answer']} | {similarity_pct} | {pdf_text} | {app_text} |\n")

    # Create detailed analysis file
    with open('question_similarity_analysis.txt', 'w', encoding='utf-8') as f:
        f.write("QUESTION SIMILARITY ANALYSIS\n")
        f.write("=" * 50 + "\n\n")

        f.write(f"EXACT MATCHES FOUND: {len(exact_matches)}\n")
        f.write(f"SIMILAR QUESTIONS FOUND: {len(similar_questions)}\n\n")

        if exact_matches:
            f.write("EXACT MATCHES:\n")
            f.write("-" * 30 + "\n")
            for i, row in enumerate(exact_matches, 1):
                f.write(f"{i}. PDF Q{row['pdf_q_num']} = App Q{row['app_q_num']}\n")
                f.write(f"   Question: {row['pdf_question_text']}\n")
                f.write(f"   PDF Answer: {row['pdf_answer']} | App Answer: {row['app_answer']}\n")
                if row['pdf_answer'] and row['app_answer'] and row['pdf_answer'] != row['app_answer']:
                    f.write("   ⚠️  Answer mismatch!\n")
                f.write("\n")

        if similar_questions:
            f.write("TOP SIMILAR QUESTIONS:\n")
            f.write("-" * 30 + "\n")
            for i, row in enumerate(similar_questions[:10], 1):
                f.write(f"{i}. PDF Q{row['pdf_q_num']} ↔ App Q{row['app_q_num']} (Similarity: {row['similarity']:.1%})\n")
                f.write(f"   PDF: {row['pdf_question_text']}\n")
                f.write(f"   App: {row['app_question_text']}\n")
                f.write(f"   PDF Answer: {row['pdf_answer']} | App Answer: {row['app_answer']}\n")
                if row['pdf_answer'] and row['app_answer'] and row['pdf_answer'] != row['app_answer']:
                    f.write("   ⚠️  Answer mismatch!\n")
                f.write("\n")

    print(f"Found {len(exact_matches)} exact matches and {len(similar_questions)} similar questions")
    if exact_matches:
        print("Exact matches saved to: exact_matching_questions.md")
    if similar_questions:
        print("Similar questions saved to: similar_questions_table.md")
    print("Analysis saved to: question_similarity_analysis.txt")

if __name__ == "__main__":
    find_similar_questions()