# Manual Entry Guide for Remaining 49 Questions

## Current Status: 101/150 Complete (67%)

### ✅ What's Done:
- Infrastructure: 100% complete
- TypeScript file: Generated with 101 real questions + 49 placeholders
- Testing ready: File will compile and run

### ⏳ What's Needed:
**49 questions need manual typing from PDF**

## Questions Requiring Manual Entry

### CDP - Child Development & Pedagogy (11 questions):
**Q4** (Answer: 1) - About inclusive classroom/curriculum adaptations
**Q7** (Answer: 2) - Vygotsky on language and thinking
**Q10** (Answer: 4) - Effective strategies to teach new concepts
**Q12** (Answer: 2) - Metacognition/Fiza analyzing her learning
**Q14** (Answer: 4) - Students with Autism characteristics
**Q16** (Answer: 4) - Class inclusion concept
**Q18** (Answer: 4) - Teacher helping Kakuli with problem-solving/scaffolding
**Q21** (Answer: 4) - Kohlberg's theory characteristics
**Q24** (Answer: 2) - Visually challenged students - Braille
**Q27** (Answer: 1) - Gender assertion/reason question
**Q29** (Answer: 4) - Teacher connecting prior knowledge to new material

### English (11 questions):
**Q34** (Answer: 3) - Comprehension passage question
**Q36** (Answer: 1) - Comprehension passage question
**Q41** (Answer: 2) - Comprehension passage question
**Q43** (Answer: 4) - Comprehension passage question
**Q44** (Answer: 1) - Comprehension passage question
**Q45** (Answer: 2) - Comprehension passage question
**Q47** (Answer: 4) - Comprehension passage question
**Q48** (Answer: 1) - Comprehension passage question
**Q50** (Answer: 3) - Comprehension passage question
**Q54** (Answer: 3) - Comprehension passage question
**Q58** (Answer: 3) - Comprehension passage question

### Hindi (10 questions):
**Q63** (Answer: 4) - Hindi comprehension
**Q66** (Answer: 3) - Hindi comprehension
**Q68** (Answer: 4) - Hindi comprehension (Note: Answer key showed 'Z', interpreted as 4)
**Q74** (Answer: 3) - Hindi comprehension
**Q80** (Answer: 1) - Hindi comprehension
**Q81** (Answer: 2) - Hindi comprehension
**Q83** (Answer: 4) - Hindi comprehension
**Q88** (Answer: 1) - Hindi comprehension
**Q89** (Answer: 2) - Hindi comprehension
**Q90** (Answer: 3) - Hindi comprehension

### Mathematics (9 questions):
**Q91** (Answer: 3) - Standard form of numbers
**Q92** (Answer: 2) - Mathematics concept
**Q93** (Answer: 4) - Mathematics concept
**Q94** (Answer: 1) - Mathematics concept
**Q96** (Answer: 3) - Mathematics concept
**Q99** (Answer: 2) - Mathematics concept
**Q106** (Answer: 1) - Mathematics concept
**Q113** (Answer: 4) - Mathematics concept
**Q120** (Answer: 3) - Mathematics concept

### Social Studies (8 questions):
**Q122** (Answer: 1) - Social Studies concept
**Q125** (Answer: 4) - Social Studies concept
**Q126** (Answer: 1) - Social Studies concept
**Q129** (Answer: 3) - Social Studies concept
**Q134** (Answer: 1) - Social Studies concept
**Q135** (Answer: 2) - Social Studies concept
**Q144** (Answer: 3) - Social Studies concept
**Q150** (Answer: 2) - Social Studies concept

## How to Fill Manual Entries

### Step 1: Open Files
1. Open `manual_entry_template.json` in VS Code
2. Open `SQP/Paper2/Qus-Dec-24.pdf` in PDF reader
3. Place windows side-by-side

### Step 2: For Each Question
1. Find the question number in PDF (e.g., "4.")
2. Read the complete English question text (ignore Hindi translation)
3. In the JSON file, find that question number
4. Replace `"[MANUAL ENTRY NEEDED...]"` with the actual question
5. Replace `"[Option 1...]"` etc. with actual options (English only)
6. The answer is already filled - just verify it matches

### Example - Before:
```json
"4": {
  "number": 4,
  "question": "[MANUAL ENTRY NEEDED - Open PDF and type question here]",
  "options": [
    "[Option 1 - Type from PDF]",
    "[Option 2 - Type from PDF]",
    "[Option 3 - Type from PDF]",
    "[Option 4 - Type from PDF]"
  ],
  "answer": 1,
  "note": "Answer is option 1 - Verify this when typing from PDF"
}
```

### Example - After:
```json
"4": {
  "number": 4,
  "question": "Assertion (A): In an inclusive classroom, all curriculum adaptations should be directed to lower the educational standards for 'Special children'. Reason (R): 'Special children' do not have any potential for learning in mainstream classroom. Choose the correct option.",
  "options": [
    "Both (A) and (R) are false.",
    "Both (A) and (R) are true and (R) is the correct explanation of (A).",
    "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
    "(A) is true but (R) is false."
  ],
  "answer": 1,
  "note": "Answer is option 1 - Both statements are false as inclusive education should not lower standards"
}
```

### Tips for Fast Entry:
1. **Type only English text** - Skip Hindi translations
2. **Remove option markers** - Don't type "(1)", "(2)" etc. in the question text
3. **Keep formatting simple** - Avoid special characters that might cause issues
4. **Verify answer** - The JSON already has the answer number, just confirm it matches PDF
5. **Work in batches**:
   - Day 1: CDP (11 questions) - ~1.5 hours
   - Day 2: English + Hindi (21 questions) - ~2.5 hours
   - Day 3: Math + Social Studies (17 questions) - ~2 hours

## Estimated Time

| Subject | Questions | Est. Time |
|---------|-----------|-----------|
| CDP | 11 | 1.5 hours |
| English | 11 | 1.5 hours |
| Hindi | 10 | 1.5 hours |
| Mathematics | 9 | 1 hour |
| Social Studies | 8 | 45 minutes |
| **Total** | **49** | **~6 hours** |

## After Completion

### Step 1: Re-run Finalization
```bash
python finalize_all_questions.py
```
This will:
- Merge your manual entries with auto-extracted questions
- Generate complete TypeScript file with all 150 questions
- Create detailed explanations automatically

### Step 2: Test Locally
```bash
npm run dev
```
- Navigate to Mock Test → Paper II → Dec-24 Paper II
- Verify all questions display correctly
- Check a few answers to ensure correctness

### Step 3: Deploy
```bash
git add constants/questionPapers/dec-24-ii.ts
git add manual_entry_template.json
git commit -m "Complete Dec-24 Paper II with all 150 questions

- All 150 questions extracted and formatted
- Detailed explanations for each question
- Verified against answer key
- Ready for production use"

git push origin paper-type-separation
```

## Progress Tracking

Use this checklist as you complete questions:

### CDP (11):
- [ ] Q4
- [ ] Q7
- [ ] Q10
- [ ] Q12
- [ ] Q14
- [ ] Q16
- [ ] Q18
- [ ] Q21
- [ ] Q24
- [ ] Q27
- [ ] Q29

### English (11):
- [ ] Q34
- [ ] Q36
- [ ] Q41
- [ ] Q43
- [ ] Q44
- [ ] Q45
- [ ] Q47
- [ ] Q48
- [ ] Q50
- [ ] Q54
- [ ] Q58

### Hindi (10):
- [ ] Q63
- [ ] Q66
- [ ] Q68
- [ ] Q74
- [ ] Q80
- [ ] Q81
- [ ] Q83
- [ ] Q88
- [ ] Q89
- [ ] Q90

### Mathematics (9):
- [ ] Q91
- [ ] Q92
- [ ] Q93
- [ ] Q94
- [ ] Q96
- [ ] Q99
- [ ] Q106
- [ ] Q113
- [ ] Q120

### Social Studies (8):
- [ ] Q122
- [ ] Q125
- [ ] Q126
- [ ] Q129
- [ ] Q134
- [ ] Q135
- [ ] Q144
- [ ] Q150

## Need Help?

If you encounter issues:
1. Check the answer is already provided in the JSON
2. Type only English text (skip Hindi)
3. Keep options concise and clear
4. Run `python finalize_all_questions.py` to see progress anytime
