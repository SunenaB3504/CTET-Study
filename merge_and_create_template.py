#!/usr/bin/env python3
"""
Merge successfully extracted questions and create template for manual entry
This combines automated extraction with manual input for remaining questions
"""

import json

# Load the better parsed questions (59 with good options)
with open('dec24_parsed_questions.json', 'r', encoding='utf-8') as f:
    parsed_good = json.load(f)

# Load the all questions extraction
with open('dec24_all_questions_extracted.json', 'r', encoding='utf-8') as f:
    all_extracted = json.load(f)

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
    print("Merging Extracted Questions and Creating Manual Entry Template")
    print("=" * 80)
    
    # Merge sources - prefer parsed_good when available
    merged = {}
    
    # First, add all from parsed_good (these have clean options)
    for qnum_str, qdata in parsed_good.items():
        qnum = int(qnum_str)
        if len(qdata['options']) == 4:
            merged[qnum] = qdata
    
    print(f"\n✅ Loaded {len(merged)} questions with good options")
    
    # Add from all_extracted if not already in merged and has 4 options
    for qnum_str, qdata in all_extracted.items():
        qnum = int(qnum_str)
        if qnum not in merged and len(qdata['options']) == 4:
            # Convert format
            merged[qnum] = {
                'number': qnum,
                'question': qdata['question'],
                'options': qdata['options']
            }
    
    print(f"✅ Added {len(merged) - len(parsed_good)} more from second extraction")
    print(f"✅ Total extracted: {len(merged)}/150")
    
    # Find missing questions
    missing = [q for q in range(1, 151) if q not in merged]
    print(f"\n⚠️  Missing {len(missing)} questions")
    
    # Create manual entry template for missing questions
    manual_template = {}
    for qnum in missing:
        manual_template[qnum] = {
            "number": qnum,
            "question": "[MANUAL ENTRY NEEDED - Open PDF and type question here]",
            "options": [
                "[Option 1 - Type from PDF]",
                "[Option 2 - Type from PDF]",
                "[Option 3 - Type from PDF]",
                "[Option 4 - Type from PDF]"
            ],
            "answer": ANSWERS[qnum],
            "note": f"Answer is option {ANSWERS[qnum]} - Verify this when typing from PDF"
        }
    
    # Save manual template
    with open('manual_entry_template.json', 'w', encoding='utf-8') as f:
        json.dump(manual_template, f, indent=2, ensure_ascii=False)
    
    print(f"\n✅ Created manual_entry_template.json with {len(missing)} questions")
    
    # Save merged data
    with open('merged_questions.json', 'w', encoding='utf-8') as f:
        json.dump(merged, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Saved merged_questions.json with {len(merged)} questions")
    
    # Show statistics
    print(f"\n📊 STATISTICS BY SUBJECT:")
    
    subjects = [
        ("CDP (Q1-30)", 1, 30),
        ("English (Q31-60)", 31, 60),
        ("Hindi (Q61-90)", 61, 90),
        ("Mathematics (Q91-120)", 91, 120),
        ("Social Studies (Q121-150)", 121, 150)
    ]
    
    for name, start, end in subjects:
        extracted = sum(1 for q in range(start, end+1) if q in merged)
        missing_count = sum(1 for q in range(start, end+1) if q in missing)
        print(f"  {name}: {extracted}/30 extracted, {missing_count} need manual entry")
    
    # Show missing questions by subject
    print(f"\n📋 MISSING QUESTIONS TO MANUALLY TYPE:")
    for name, start, end in subjects:
        missing_in_range = [q for q in range(start, end+1) if q in missing]
        if missing_in_range:
            print(f"\n{name}:")
            print(f"  {missing_in_range}")
    
    print(f"\n\n📝 NEXT STEPS:")
    print("1. Open manual_entry_template.json")
    print("2. Open SQP/Paper2/Qus-Dec-24.pdf")
    print("3. For each missing question, type from PDF into the JSON template")
    print("4. When done, run: python finalize_all_questions.py")
    print("5. This will generate the complete TypeScript file")

if __name__ == "__main__":
    main()
