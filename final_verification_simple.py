#!/usr/bin/env python3
"""
Simple verification script to check our corrections against official answers
"""

# Official answers from Set I answer key
official_answers = {
    # Main paper (1-90)
    1: 4, 2: 2, 3: 4, 4: 3, 5: 3, 6: 1, 7: 2, 8: 4, 9: 4, 10: 4,
    11: 4, 12: 2, 13: 2, 14: 2, 15: 4, 16: 4, 17: 3, 18: 4, 19: 1, 20: 4,
    21: 3, 22: 1, 23: 4, 24: 1, 25: 4, 26: 4, 27: 3, 28: 4, 29: 2, 30: 3,
    31: 2, 32: 1, 33: 1, 34: 1, 35: 4, 36: 3, 37: 3, 38: 2, 39: 1, 40: 3,
    41: 4, 42: 4, 43: 2, 44: 4, 45: 3, 46: 3, 47: 1, 48: 4, 49: 2, 50: 2,
    51: 1, 52: 4, 53: 2, 54: 3, 55: 3, 56: 1, 57: 2, 58: 3, 59: 3, 60: 4,
    61: 3, 62: 3, 63: 2, 64: 1, 65: 2, 66: 4, 67: 4, 68: 'Z', 69: 4, 70: 4,
    71: 2, 72: 1, 73: 2, 74: 4, 75: 4, 76: 1, 77: 4, 78: 3, 79: 1, 80: 1,
    81: 1, 82: 4, 83: 4, 84: 1, 85: 4, 86: 3, 87: 3, 88: 4, 89: 4, 90: 4,

    # Language I (English) (91-120)
    91: 3, 92: 2, 93: 1, 94: 2, 95: 3, 96: 4, 97: 3, 98: 4, 99: 1, 100: 1,
    101: 4, 102: 1, 103: 4, 104: 4, 105: 1, 106: 2, 107: 4, 108: 4, 109: 2, 110: 4,
    111: 2, 112: 3, 113: 4, 114: 4, 115: 4, 116: 1, 117: 1, 118: 3, 119: 4, 120: 1,

    # Language II (Hindi) (121-132) - only up to 132 since our paper ends there
    121: 1, 122: 3, 123: 3, 124: 0, 125: 1, 126: 1, 127: 1, 128: 2, 129: 0, 130: 2,
    131: 1, 132: 1
}

# Our corrected answers from the mapping file (PDF format - 1-based)
our_answers = {
    1: 4, 2: 2, 3: 4, 4: 3, 5: 3, 6: 1, 7: 2, 8: 4, 9: 4, 10: 4,
    11: 4, 12: 2, 13: 2, 14: 2, 15: 4, 16: 4, 17: 3, 18: 4, 19: 1, 20: 4,
    21: 3, 22: 1, 23: 4, 24: 1, 25: 4, 26: 4, 27: 3, 28: 4, 29: 2, 30: 3,
    31: 2, 32: 1, 33: 1, 34: 1, 35: 4, 36: 3, 37: 3, 38: 2, 39: 1, 40: 3,
    41: 4, 42: 4, 43: 2, 44: 4, 45: 3, 46: 3, 47: 1, 48: 4, 49: 2, 50: 2,
    51: 1, 52: 4, 53: 2, 54: 3, 55: 3, 56: 1, 57: 2, 58: 3, 59: 3, 60: 4,
    61: 3, 62: 3, 63: 2, 64: 1, 65: 2, 66: 4, 67: 4, 68: 4, 69: 4, 70: 4,
    71: 2, 72: 1, 73: 2, 74: 4, 75: 4, 76: 1, 77: 4, 78: 3, 79: 1, 80: 1,
    81: 1, 82: 4, 83: 4, 84: 1, 85: 4, 86: 3, 87: 3, 88: 4, 89: 4, 90: 4,
    91: 2, 92: 3, 93: 2, 94: 1, 95: 4, 96: 4, 97: 1, 98: 1, 99: 4, 100: 2,
    101: 3, 102: 1, 103: 4, 104: 3, 105: 3, 106: 2, 107: 4, 108: 4, 109: 2, 110: 4,
    111: 2, 112: 3, 113: 4, 114: 4, 115: 4, 116: 1, 117: 1, 118: 3, 119: 4, 120: 1,
    121: 1, 122: 3, 123: 3, 124: 0, 125: 1, 126: 1, 127: 1, 128: 2, 129: 0, 130: 2,
    131: 1, 132: 1
}

print("=== FINAL VERIFICATION: Our Corrections vs Official CTET Answers ===")
print("=" * 70)

matches = 0
mismatches = 0
special_cases = 0

for qno in range(1, 133):  # Questions 1-132
    if qno in our_answers and qno in official_answers:
        our_ans = our_answers[qno]
        official_ans = official_answers[qno]

        if official_ans == 'Z':
            # Special case - multiple correct answers
            special_cases += 1
            print(f"Q{qno:3d}: Our={our_ans}, Official={official_ans} (MULTIPLE ANSWERS)")
        elif our_ans == official_ans:
            matches += 1
            print(f"Q{qno:3d}: ✓ MATCH ({our_ans})")
        else:
            mismatches += 1
            print(f"Q{qno:3d}: ✗ MISMATCH (Our={our_ans}, Official={official_ans})")

print("=" * 70)
print("
SUMMARY:")
print(f"Total Questions: 132")
print(f"Matches: {matches}")
print(f"Mismatches: {mismatches}")
print(f"Special Cases (Z): {special_cases}")
print(".1f")

if mismatches == 0:
    print("\n🎉 SUCCESS! All corrections are accurate!")
    print("100% match with official CTET answer key.")
else:
    print(f"\n⚠️  {mismatches} corrections need review.")