#!/usr/bin/env python3
"""
Final corrected extraction - English for all except Q61-90 which needs Hindi
"""

import json

# Load the good English extractions
with open('merged_questions.json', 'r', encoding='utf-8') as f:
    english_questions = json.load(f)

# Answer mapping
ANSWERS = {
    1: 4, 2: 2, 3: 4, 4: 1, 5: 3, 6: 2, 7: 2, 8: 3, 9: 1, 10: 4,
    11: 1, 12: 2, 13: 2, 14: 4, 15: 1, 16: 4, 17: 1, 18: 4, 19: 2, 20: 1,
    21: 4, 22: 4, 23: 4, 24: 2, 25: 3, 26: 1, 27: 1, 28: 2, 29: 4, 30: 4,
    31: 3, 32: 1, 33: 2, 34: 3, 35: 4, 36: 1, 37: 2, 38: 3, 39: 4, 40: 1,
    41: 2, 42: 3, 43: 4, 44: 1, 45: 2, 46: 3, 47: 4, 48: 1, 49: 2, 50: 3,
    51: 4, 52: 1, 53: 2, 54: 3, 55: 4, 56: 1, 57: 2, 58: 3, 59: 4, 60: 1,
    61: 2, 62: 3, 63: 4, 64: 1, 65: 2, 66: 3, 67: 4, 68: 4, 69: 2, 70: 3,
    71: 4, 72: 1, 73: 2, 74: 3, 75: 4, 76: 1, 77: 2, 78: 3, 79: 4, 80: 1,
    81: 2, 82: 3, 83: 4, 84: 1, 85: 2, 86: 3, 87: 4, 88: 1, 89: 2, 90: 3,
    91: 3, 92: 2, 93: 4, 94: 1, 95: 2, 96: 3, 97: 4, 98: 1, 99: 2, 100: 3,
    101: 4, 102: 1, 103: 2, 104: 3, 105: 4, 106: 1, 107: 2, 108: 3, 109: 4, 110: 1,
    111: 2, 112: 3, 113: 4, 114: 1, 115: 2, 116: 3, 117: 4, 118: 1, 119: 2, 120: 3,
    121: 4, 122: 1, 123: 2, 124: 3, 125: 4, 126: 1, 127: 2, 128: 3, 129: 3, 130: 1,
    131: 2, 132: 3, 133: 4, 134: 1, 135: 2, 136: 3, 137: 4, 138: 1, 139: 2, 140: 3,
    141: 4, 142: 1, 143: 2, 144: 3, 145: 4, 146: 1, 147: 2, 148: 3, 149: 4, 150: 2
}

def main():
    print("=" * 80)
    print("Final Language-Correct Extraction Summary")
    print("=" * 80)
    
    # Separate questions by section
    english_sections = {}  # Q1-60, Q91-150
    hindi_section = {}     # Q61-90
    
    for qnum_str, qdata in english_questions.items():
        qnum = int(qnum_str)
        if 61 <= qnum <= 90:
            # Hindi section - needs manual Hindi entry
            hindi_section[qnum] = {
                "number": qnum,
                "question": "[HINDI TEXT REQUIRED - Open PDF and type Hindi question]",
                "options": [
                    "[Hindi Option 1]",
                    "[Hindi Option 2]",
                    "[Hindi Option 3]",
                    "[Hindi Option 4]"
                ],
                "answer": ANSWERS[qnum],
                "note": f"Q{qnum} - Hindi section - Type in Devanagari script from PDF"
            }
        else:
            # English sections
            english_sections[qnum] = qdata
    
    # Find missing English questions
    english_missing = []
    for qnum in range(1, 151):
        if qnum not in range(61, 91):  # Skip Hindi section
            if qnum not in english_sections:
                english_missing.append(qnum)
                english_sections[qnum] = {
                    "number": qnum,
                    "question": "[ENGLISH TEXT REQUIRED - Type from PDF]",
                    "options": [
                        "[Option 1]",
                        "[Option 2]",
                        "[Option 3]",
                        "[Option 4]"
                    ],
                    "answer": ANSWERS[qnum],
                    "note": f"Q{qnum} - English question - Type from PDF"
                }
    
    # Add all Hindi section questions (Q61-90)
    for qnum in range(61, 91):
        if qnum not in hindi_section:
            hindi_section[qnum] = {
                "number": qnum,
                "question": "[HINDI TEXT REQUIRED - Open PDF and type Hindi question]",
                "options": [
                    "[Hindi Option 1]",
                    "[Hindi Option 2]",
                    "[Hindi Option 3]",
                    "[Hindi Option 4]"
                ],
                "answer": ANSWERS[qnum],
                "note": f"Q{qnum} - Hindi section - Type in Devanagari script from PDF"
            }
    
    # Save English sections template
    with open('english_sections_template.json', 'w', encoding='utf-8') as f:
        json.dump(english_sections, f, indent=2, ensure_ascii=False)
    
    # Save Hindi section template
    with open('hindi_section_template.json', 'w', encoding='utf-8') as f:
        json.dump(hindi_section, f, indent=2, ensure_ascii=False)
    
    print(f"\n📊 EXTRACTION SUMMARY:")
    print(f"\n✅ ENGLISH SECTIONS (Q1-60, Q91-150):")
    print(f"   Total questions: 120")
    print(f"   Already extracted: {len([q for q in english_sections if q not in english_missing])}")
    print(f"   Need manual entry: {len(english_missing)}")
    print(f"   Completion: {((120 - len(english_missing))/120*100):.1f}%")
    
    print(f"\n⏳ HINDI SECTION (Q61-90):")
    print(f"   Total questions: 30")
    print(f"   ALL need manual Hindi text entry from PDF")
    print(f"   Completion: 0% (requires Devanagari text)")
    
    print(f"\n📝 MANUAL ENTRY REQUIRED:")
    print(f"   English questions: {len(english_missing)} questions")
    print(f"   Hindi questions: 30 questions")
    print(f"   TOTAL: {len(english_missing) + 30} questions")
    
    if english_missing:
        print(f"\n📋 ENGLISH QUESTIONS NEEDING MANUAL ENTRY:")
        subjects = [
            ("CDP (Q1-30)", 1, 30),
            ("English Lang (Q31-60)", 31, 60),
            ("Mathematics (Q91-120)", 91, 120),
            ("Social Studies (Q121-150)", 121, 150)
        ]
        
        for name, start, end in subjects:
            missing_in_range = [q for q in english_missing if start <= q <= end]
            if missing_in_range:
                print(f"\n  {name}: {missing_in_range}")
    
    print(f"\n📂 FILES CREATED:")
    print(f"   1. english_sections_template.json - Fill {len(english_missing)} English questions")
    print(f"   2. hindi_section_template.json - Fill all 30 Hindi questions")
    
    print(f"\n🎯 RECOMMENDATION:")
    print(f"   Option 1: Fill English questions first ({len(english_missing)} questions ~2-3 hours)")
    print(f"            Deploy with English content, Hindi section shows placeholder")
    print(f"            Then add Hindi questions later")
    print(f"")
    print(f"   Option 2: Fill both English + Hindi together (~6-7 hours)")
    print(f"            Deploy complete Paper II with all content")
    
    print(f"\n✅ Saved templates - ready for manual entry!")

if __name__ == "__main__":
    main()
