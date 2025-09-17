#!/usr/bin/env python3
"""
CTET Question Extractor with Language Filtering
Extracts questions 1-120 (English only) and 121-150 (Hindi only)
"""

import sys
import re
from pathlib import Path

try:
    import pdfplumber
except ImportError:
    print("Error: pdfplumber not installed. Please install with: pip install pdfplumber")
    sys.exit(1)

def extract_text_from_pdf(pdf_path):
    """Extract text from PDF file"""
    text_content = []

    try:
        with pdfplumber.open(pdf_path) as pdf:
            for page_num, page in enumerate(pdf.pages, 1):
                text = page.extract_text()
                if text:
                    text_content.append({
                        'page': page_num,
                        'text': text
                    })
                else:
                    print(f"Warning: No text extracted from page {page_num}")

    except Exception as e:
        print(f"Error reading PDF: {e}")
        return []

    return text_content

def contains_devanagari(text):
    """Check if text contains Devanagari script characters"""
    # Unicode range for Devanagari: U+0900 to U+097F
    devanagari_pattern = re.compile(r'[\u0900-\u097f]')
    return bool(devanagari_pattern.search(text))

def contains_hindi_transliteration(text):
    """Check if text contains Hindi transliteration using Latin characters with diacritics"""
    # Common patterns in Hindi transliteration:
    # - Latin letters with diacritics (acute, circumflex, tilde, etc.)
    # - Special symbols like ◊ (lozenge), ‡ (double dagger), ∑ (summation), etc.
    # - Apple logo character () which appears frequently in this encoding

    # Check for transliteration indicators
    transliteration_indicators = [
        r'[ÁÉÍÓÚÝáéíóúý]',  # Acute accents
        r'[ÂÊÎÔÛâêîôû]',  # Circumflex
        r'[ÃÑÕãñõ]',       # Tilde
        r'[ÄËÏÖÜäëïöü]',  # Umlaut
        r'[Çç]',           # Cedilla
        r'[◊‡∑§π∆]',      # Special symbols common in this encoding
        r'[\uf8ff]',       # Apple logo character
        r'[‚„…†‡‰‹›]',    # Quotation marks and other symbols
    ]

    for pattern in transliteration_indicators:
        if re.search(pattern, text):
            return True

    return False

def contains_english_words(text):
    """Check if text contains common English words"""
    english_indicators = [
        'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
        'what', 'which', 'how', 'why', 'when', 'where', 'who', 'does', 'are', 'is',
        'this', 'that', 'will', 'can', 'should', 'would', 'could', 'have', 'has'
    ]
    text_lower = text.lower()
    return any(word in text_lower for word in english_indicators)

def is_pure_english(text):
    """Check if text is primarily English (no Devanagari or transliteration)"""
    return contains_english_words(text) and not contains_devanagari(text) and not contains_hindi_transliteration(text)

def is_pure_hindi(text):
    """Check if text is primarily Hindi (contains Devanagari or transliteration)"""
    return contains_devanagari(text) or contains_hindi_transliteration(text)

def analyze_text_for_debug(text_content, start_q, end_q):
    """Debug function to analyze text content for questions in range"""
    print("DEBUG: Analyzing questions", start_q, "-", end_q)
    print("-" * 50)

    for page_data in text_content:
        text = page_data['text']
        lines = text.split('\n')

        for line in lines:
            line = line.strip()
            if not line:
                continue

            match = re.match(r'^(\d+)\.\s+', line)
            if match:
                question_num = int(match.group(1))
                if start_q <= question_num <= end_q:
                    has_devanagari = contains_devanagari(line)
                    has_transliteration = contains_hindi_transliteration(line)
                    has_english = contains_english_words(line)

                    print(f"Q{question_num}: Devanagari={has_devanagari}, Transliteration={has_transliteration}, English={has_english}")

                    # Show all Unicode characters in the line
                    unicode_chars = []
                    for char in line:
                        if ord(char) > 127:  # Non-ASCII characters
                            unicode_chars.append(f"{char} (U+{ord(char):04X})")

                    if unicode_chars:
                        print(f"  Unicode chars: {', '.join(unicode_chars[:10])}")
                        if len(unicode_chars) > 10:
                            print(f"  ... and {len(unicode_chars) - 10} more")

                    print(f"  Text: {line[:100]}...")
                    print()

def extract_questions_by_range_and_language(text_content, start_q, end_q, language_filter):
    """Extract questions from a specific range with language filtering"""
    questions = []

    for page_data in text_content:
        text = page_data['text']
        lines = text.split('\n')

        current_question = None
        current_options = []

        for line in lines:
            line = line.strip()
            if not line:
                continue

            # Look for question patterns
            match = re.match(r'^(\d+)\.\s+', line)
            if match:
                # Save previous question if exists
                if current_question and current_options:
                    questions.append({
                        'number': current_question['number'],
                        'text': current_question['text'],
                        'options': current_options,
                        'language': current_question['language']
                    })

                question_num = int(match.group(1))

                if start_q <= question_num <= end_q:
                    # Determine language
                    has_devanagari = contains_devanagari(line)
                    has_transliteration = contains_hindi_transliteration(line)
                    has_english = contains_english_words(line)

                    if language_filter == 'english' and not has_devanagari and not has_transliteration:
                        current_question = {
                            'number': question_num,
                            'text': line,
                            'language': 'English'
                        }
                        current_options = []
                    elif language_filter == 'hindi' and (has_devanagari or has_transliteration):
                        current_question = {
                            'number': question_num,
                            'text': line,
                            'language': 'Hindi'
                        }
                        current_options = []
                    else:
                        current_question = None
                        current_options = []
                else:
                    current_question = None
                    current_options = []

            # Look for options
            elif current_question and re.match(r'^\(\d+\)', line):
                current_options.append(line)

        # Save last question
        if current_question and current_options:
            questions.append({
                'number': current_question['number'],
                'text': current_question['text'],
                'options': current_options,
                'language': current_question['language']
            })

    return questions

def main():
    if len(sys.argv) != 2:
        print("Usage: python extract_questions.py <pdf_file_path>")
        sys.exit(1)

    pdf_path = sys.argv[1]

    if not Path(pdf_path).exists():
        print(f"Error: File '{pdf_path}' not found.")
        sys.exit(1)

    print("Extracting Questions from:", pdf_path)
    print("=" * 60)

    # Extract text from PDF
    print("Extracting text from PDF...")
    text_content = extract_text_from_pdf(pdf_path)

    if not text_content:
        print("❌ No text content found in PDF")
        return

    print("Extracted text from", len(text_content), "pages")

    # Extract questions 1-120 (English only)
    print("Extracting Questions 1-120 (English only):")
    print("-" * 50)

    english_questions = extract_questions_by_range_and_language(
        text_content, 1, 120, 'english'
    )

    if english_questions:
        for q in english_questions[:10]:  # Show first 10 as sample
            print(f"Q{q['number']}: {q['text']}")
        if len(english_questions) > 10:
            print(f"... and {len(english_questions) - 10} more English questions")
        print("Total English questions (1-120):", len(english_questions))
    else:
        print("No English questions found in range 1-120")

    # Extract questions 121-150 (Hindi only)
    print("Extracting Questions 121-150 (Hindi only):")
    print("-" * 50)

    hindi_questions = extract_questions_by_range_and_language(
        text_content, 121, 150, 'hindi'
    )

    if hindi_questions:
        for q in hindi_questions[:10]:  # Show first 10 as sample
            print(f"Q{q['number']}: {q['text']}")
        if len(hindi_questions) > 10:
            print(f"... and {len(hindi_questions) - 10} more Hindi questions")
        print("Total Hindi questions (121-150):", len(hindi_questions))
    else:
        print("No Hindi questions found in range 121-150")
        print("Running debug analysis...")
        analyze_text_for_debug(text_content, 121, 150)

    # Summary
    print("SUMMARY:")
    print("   Questions 1-120 (English):", len(english_questions))
    print("   Questions 121-150 (Hindi):", len(hindi_questions))
    print("   Total Questions Extracted:", len(english_questions) + len(hindi_questions))

    print("Extraction Complete!")

if __name__ == "__main__":
    main()