#!/usr/bin/env python3
"""
PDF Question Counter for CTET Study App
Extracts and counts questions from CTET question papers
Handles both English and Hindi (Devanagari) text
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

def count_questions_by_pattern(text_content):
    """Count questions using multiple patterns"""

    # Pattern 1: Standard numbered questions (1., 2., etc.)
    pattern1 = re.compile(r'^(\d+)\.\s+', re.MULTILINE)

    # Pattern 2: Questions with options (1) (2) (3) (4))
    pattern2 = re.compile(r'^(\d+)\.\s+.*?\(\d+\)\s+.*?\(\d+\)\s+.*?\(\d+\)\s+.*?\(\d+\)', re.MULTILINE | re.DOTALL)

    # Pattern 3: Questions starting with numbers followed by text
    pattern3 = re.compile(r'^(\d+)\.\s*[^\d]', re.MULTILINE)

    all_questions = set()

    for page_data in text_content:
        text = page_data['text']

        # Find all matches with pattern 1
        matches1 = pattern1.findall(text)
        for match in matches1:
            question_num = int(match)
            if 1 <= question_num <= 150:  # CTET range
                all_questions.add(question_num)

        # Find all matches with pattern 2 (more specific)
        matches2 = pattern2.findall(text)
        for match in matches2:
            if match and match[0].isdigit():
                question_num = int(match[0])
                if 1 <= question_num <= 150:
                    all_questions.add(question_num)

    return sorted(list(all_questions))

def analyze_question_distribution_by_language(text_content):
    """Analyze question distribution by parts with language consideration"""

    # Define parts with page ranges and expected language
    parts_info = {
        'Part-I: Child Development and Pedagogy': {
            'range': (1, 30),
            'expected_language': 'English',
            'pages': range(1, 10)  # Approximate page range
        },
        'Part-II: Mathematics': {
            'range': (31, 60),
            'expected_language': 'English',
            'pages': range(10, 20)  # Approximate page range
        },
        'Part-III: Environmental Studies': {
            'range': (61, 90),
            'expected_language': 'English',
            'pages': range(20, 30)  # Approximate page range
        },
        'Part-IV: Language-I': {
            'range': (91, 120),
            'expected_language': 'English',
            'pages': range(30, 40)  # Approximate page range
        },
        'Part-V: Language-II': {
            'range': (121, 150),
            'expected_language': 'Hindi',
            'pages': range(40, 48)  # Approximate page range
        }
    }

    analysis = {}

    for part_name, info in parts_info.items():
        question_range = info['range']
        expected_lang = info['expected_language']

        # Extract text from relevant pages
        part_text = ""
        for page_data in text_content:
            if page_data['page'] in info['pages']:
                part_text += page_data['text'] + "\n"

        # Count questions in this part
        part_questions = []
        lines = part_text.split('\n')

        for line in lines:
            # Look for question patterns
            match = re.match(r'^(\d+)\.\s+', line.strip())
            if match:
                question_num = int(match.group(1))
                if question_range[0] <= question_num <= question_range[1]:
                    part_questions.append(question_num)

        # Remove duplicates
        part_questions = list(set(part_questions))

        # Detect language in this part
        language_detected = detect_language_in_text(part_text)

        analysis[part_name] = {
            'expected_questions': question_range[1] - question_range[0] + 1,
            'found_questions': len(part_questions),
            'questions': sorted(part_questions),
            'expected_language': expected_lang,
            'detected_language': language_detected,
            'language_match': language_detected == expected_lang,
            'missing_questions': [q for q in range(question_range[0], question_range[1] + 1)
                                if q not in part_questions]
        }

    return analysis

def detect_language_in_text(text):
    """Detect primary language in text with better Devanagari detection"""

    # Clean text and convert to lowercase
    text = text.lower()

    # English indicators (common words)
    english_words = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
                    'what', 'which', 'how', 'why', 'when', 'where', 'who', 'does', 'are', 'is',
                    'mean', 'identify', 'cultural', 'show', 'being', 'held']

    # Count English words
    english_count = sum(1 for word in english_words if word in text)

    # Look for Devanagari script patterns (common Hindi words/characters)
    devanagari_indicators = [
        'क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण',
        'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श',
        'ष', 'स', 'ह', 'ा', 'ि', 'ी', 'ु', 'ू', 'े', 'ै', 'ो', 'ौ', 'ं', 'ः', '्'
    ]

    # Count Devanagari characters
    devanagari_count = sum(1 for char in text for indicator in devanagari_indicators if indicator in char)

    # Look for specific Hindi/Devanagari patterns
    hindi_patterns = [
        r'[\u0900-\u097f]+',  # Devanagari Unicode range
        r'क्या', r'कौन', r'कहाँ', r'कब', r'कैसे',  # Common Hindi question words
        r'का', r'की', r'के', r'को', r'से', r'में', r'पर', r'लिए'  # Common Hindi postpositions
    ]

    hindi_pattern_count = 0
    for pattern in hindi_patterns:
        hindi_pattern_count += len(re.findall(pattern, text))

    # Calculate ratios
    total_chars = len(text.replace(' ', '').replace('\n', ''))

    if total_chars == 0:
        return "No Content"

    english_ratio = english_count / max(len(english_words), 1)
    devanagari_ratio = devanagari_count / total_chars if total_chars > 0 else 0

    # Determine primary language
    if devanagari_ratio > 0.05 or hindi_pattern_count > 2:  # More than 5% Devanagari or multiple Hindi patterns
        return "Hindi"
    elif english_ratio > 0.1:  # Multiple English words found
        return "English"
    elif devanagari_ratio > 0 and english_ratio > 0:
        return "Bilingual"
    else:
        return "Undetermined"

def detect_language_content(text_content):
    """Detect if content has both English and Hindi"""

    english_found = False
    hindi_found = False

    # Common English words
    english_indicators = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by']

    # Devanagari script range
    devanagari_range = range(0x0900, 0x097F)

    for page_data in text_content:
        text = page_data['text'].lower()

        # Check for English
        if any(word in text for word in english_indicators):
            english_found = True

        # Check for Devanagari (Hindi)
        if any(ord(char) in devanagari_range for char in text):
            hindi_found = True

    return {
        'english': english_found,
        'hindi': hindi_found,
        'bilingual': english_found and hindi_found
    }

def main():
    if len(sys.argv) != 2:
        print("Usage: python pdf_question_counter.py <pdf_file_path>")
        sys.exit(1)

    pdf_path = sys.argv[1]

    if not Path(pdf_path).exists():
        print(f"Error: File '{pdf_path}' not found.")
        sys.exit(1)

    print("🔍 Analyzing PDF:", pdf_path)
    print("=" * 50)

    # Extract text from PDF
    print("📖 Extracting text from PDF...")
    text_content = extract_text_from_pdf(pdf_path)

    if not text_content:
        print("❌ No text content found in PDF")
        return

    print(f"✅ Extracted text from {len(text_content)} pages")

    # Detect language content
    print("\n🌍 Detecting language content...")
    language_info = detect_language_content(text_content)

    if language_info['bilingual']:
        print("✅ Bilingual content detected (English + Hindi)")
    elif language_info['english']:
        print("✅ English content detected")
    elif language_info['hindi']:
        print("✅ Hindi content detected")
    else:
        print("⚠️  Language detection inconclusive")

    # Count questions
    print("\n🔢 Counting questions...")
    questions = count_questions_by_pattern(text_content)

    print(f"📊 Found {len(questions)} unique questions")
    print(f"📋 Question range: {min(questions)} - {max(questions)}" if questions else "No questions found")

    # Analyze distribution by language
    if questions:
        print("\n📈 Question Distribution Analysis (By Language):")
        print("-" * 50)

        analysis = analyze_question_distribution_by_language(text_content)

        total_expected = 0
        total_found = 0
        english_parts = 0
        hindi_parts = 0

        for part_name, data in analysis.items():
            # Language status
            lang_status = "✅" if data['language_match'] else "❌"
            question_status = "✅" if data['found_questions'] == data['expected_questions'] else "❌"

            print(f"{lang_status}{question_status} {part_name}")
            print(f"   Expected: {data['expected_questions']} ({data['expected_language']})")
            print(f"   Found: {data['found_questions']} ({data['detected_language']})")

            if data['missing_questions']:
                print(f"   Missing: {data['missing_questions'][:5]}{'...' if len(data['missing_questions']) > 5 else ''}")

            total_expected += data['expected_questions']
            total_found += data['found_questions']

            if data['expected_language'] == 'English':
                english_parts += data['found_questions']
            elif data['expected_language'] == 'Hindi':
                hindi_parts += data['found_questions']

            print()

        print("📊 LANGUAGE-BASED SUMMARY:")
        print(f"   Parts I-IV (English): {english_parts} questions")
        print(f"   Part V (Hindi): {hindi_parts} questions")
        print(f"   Total Expected: {total_expected}")
        print(f"   Total Found: {total_found}")
        print(f"   Completion Rate: {(total_found/total_expected*100):.1f}%" if total_expected > 0 else "N/A")

        # Language compliance check
        expected_english = 120  # Parts I-IV: 30*4 = 120
        expected_hindi = 30     # Part V: 30

        print("\n🌍 LANGUAGE COMPLIANCE:")
        print(f"   Expected English (Parts I-IV): {expected_english}")
        print(f"   Expected Hindi (Part V): {expected_hindi}")
        print(f"   English Compliance: {'✅' if english_parts == expected_english else '❌'}")
        print(f"   Hindi Compliance: {'✅' if hindi_parts == expected_hindi else '❌'}")

    print("\n🎯 Analysis Complete!")

if __name__ == "__main__":
    main()