import json
import re

# Load the file
with open('dec24_track_a.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Check first question's fourth option
q1 = data['cdp'][0]
opt4 = q1['options'][3]

print(f"Option 4: {opt4[:80]}...")
print(f"\nFull option: {repr(opt4)}")

# Check actual Unicode codepoints after "development."
idx = opt4.find('development.')
if idx > 0:
    after_text = opt4[idx+12:]
    print(f"\nAfter 'development.': {repr(after_text[:50])}")
    
    # Show Unicode codepoints
    for i, char in enumerate(after_text[:10]):
        print(f"  Char {i}: '{char}' = U+{ord(char):04X}")

