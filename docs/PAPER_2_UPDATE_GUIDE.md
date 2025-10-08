# CTET Paper 2 Question Update Guide

This guide explains how questions and answers are extracted and stored for CTET papers, and how to update Paper 2 questions.

## 📋 Current Status

**Current Papers (All Paper I):**
- `mvd18-i.ts` - March 2018 Paper I
- `jul-24-i.ts` - July 2024 Paper I  
- `aug-23-i.ts` - August 2023 Paper I
- `jan-24-i.ts` - January 2024 Paper I
- `dec-24-i.ts` - December 2024 Paper I
- `dec-22-i.ts` - December 2022 Paper I

**Missing:** Paper II questions are not yet added to the system.

---

## 🔄 Question Extraction Process

### Step 1: Extract Questions from PDF

Use the `extract_questions.py` Python script to extract questions from PDF files:

```bash
python extract_questions.py path/to/paper2.pdf
```

**What it does:**
- Extracts questions 1-120 in **English only**
- Extracts questions 121-150 in **Hindi only**
- Detects language using:
  - Devanagari script detection
  - Hindi transliteration markers
  - English word patterns

**Output:**
- Question number
- Question text
- Options (1) (2) (3) (4)
- Language classification

### Step 2: Extract Answer Keys

Use one of these scripts:

```bash
# Method 1: For Set I answers
python extract_set_i_answers.py path/to/answer_key.pdf

# Method 2: New extraction method
python extract_set_i_answers_new.py path/to/answer_key.pdf
```

**Answer Key Format:**
```
Set :- K PAPER-I 02-HINDI
Q1: 2
Q2: 1
Q3: 4
...
```

### Step 3: Match Questions with Answers

Use verification scripts to ensure correct matching:

```bash
# Simple verification
python simple_verify.py

# Comprehensive verification  
python comprehensive_verification.py

# Automated correction
python automated_correction.py
```

---

## 📝 Paper 2 Question Structure

Paper 2 has a different structure than Paper 1:

### Paper I (Current):
- Questions 1-30: Child Development & Pedagogy
- Questions 31-60: Language I (English/Hindi)
- Questions 61-90: Language II
- Questions 91-120: Mathematics  
- Questions 121-150: Environmental Studies

### Paper II (To Add):
- Questions 1-30: Child Development & Pedagogy
- Questions 31-60: Language I (English/Hindi)
- Questions 61-90: Language II
- Questions 91-120: Mathematics **OR** Science
- Questions 121-150: Social Studies **OR** Other subjects

---

## 🚀 How to Add Paper 2 Questions

### Method 1: Manual Addition (Recommended for accuracy)

1. **Create a new file:**
```bash
constants/questionPapers/dec-24-ii.ts
```

2. **Copy the template from an existing Paper I file:**
```typescript
import { QuestionPaper } from '../../types';
import { SubjectName } from '../../types';

export const QUESTION_PAPER_DEC_24_II: QuestionPaper = {
  id: 'dec-24-ii',
  name: 'CTET December 2024 Paper II (Set K)',
  description: 'Official CTET December 2024 Paper II questions for elementary teacher eligibility test',
  questions: [
    // CDP Questions (Q1-30)
    {
      question: "Your question text here",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
      ],
      correctAnswerIndex: 0, // 0, 1, 2, or 3
      explanation: "Why this answer is correct",
      subjectName: SubjectName.CDP,
      topicId: "topic-slug",
      subTopicId: "subtopic-slug"
    },
    // Add more questions...
  ]
};
```

3. **Update the index file:**

Edit `constants/questionPapers/index.ts`:

```typescript
import { QUESTION_PAPER_DEC_24_II } from './dec-24-ii';

export const QUESTION_PAPERS_DATA: QuestionPaper[] = [
  QUESTION_PAPER_MVD_18_I,
  QUESTION_PAPER_JUL_24_I,
  QUESTION_PAPER_AUG_23_I,
  QUESTION_PAPER_JAN_24_I,
  QUESTION_PAPER_DEC_24_I,
  QUESTION_PAPER_DEC_22_I,
  QUESTION_PAPER_DEC_24_II // Add this line
];

export {
  // ... existing exports
  QUESTION_PAPER_DEC_24_II // Add this
};
```

### Method 2: Automated Extraction (Faster but needs verification)

1. **Place PDF files in SQP folder:**
```
SQP/
  Dec-24-Paper-II.pdf
  Anz-Dec24-Paper-II.pdf (Answer key)
```

2. **Extract questions:**
```bash
cd SQP
python ../extract_questions.py Dec-24-Paper-II.pdf > dec24-ii-questions.txt
```

3. **Extract answers:**
```bash
python ../extract_set_i_answers.py Anz-Dec24-Paper-II.pdf > dec24-ii-answers.txt
```

4. **Create TypeScript file:**
```bash
python ../process_dec24_complete.py --paper-ii
```

5. **Verify and correct:**
```bash
python ../verify_answers.py dec-24-ii
```

---

## 🎯 Subject Name Mapping for Paper 2

### Available SubjectName values:
```typescript
enum SubjectName {
  CDP = 'Child Development & Pedagogy',
  English = 'English',
  Hindi = 'हिंदी',
  Mathematics = 'Mathematics',
  EVS = 'Environmental Studies',
  Science = 'Science',            // Paper 2 only
  SocialStudies = 'Social Studies' // Paper 2 only
}
```

### Topic IDs for Paper 2 subjects:

**Science Topics:**
- `matter-nature`
- `living-world`
- `motion-measurement`
- `natural-resources`
- `science-pedagogy`

**Social Studies Topics:**
- `history-culture`
- `geography`
- `civics-polity`
- `economics`
- `social-studies-pedagogy`

---

## ✅ Quality Checklist

Before committing Paper 2 questions, verify:

- [ ] All 150 questions are present
- [ ] Correct answer indices (0-3) match the answer key
- [ ] Subject names are correctly assigned
- [ ] Topic IDs exist in the subject data
- [ ] Explanations are meaningful (not just "Correct answer")
- [ ] Questions 1-120 are in English
- [ ] Questions 121-150 are in Hindi (if applicable)
- [ ] No duplicate question IDs
- [ ] All options are complete
- [ ] Build compiles without errors: `npm run build`

---

## 🛠️ Verification Commands

```bash
# Check for TypeScript errors
npm run type-check

# Build to verify all imports
npm run build

# Run tests
npm test

# Format code
npm run format

# Lint code
npm run lint:fix
```

---

## 📂 File Locations

- **Question Papers:** `constants/questionPapers/`
- **Types:** `types.ts`
- **Subject Data:** `constants/data.ts`
- **Python Scripts:** Root directory (`*.py`)
- **Source PDFs:** `SQP/` folder
- **Documentation:** `docs/`

---

## 🔍 Example: Adding Dec-24 Paper II

```typescript
// constants/questionPapers/dec-24-ii.ts

export const QUESTION_PAPER_DEC_24_II: QuestionPaper = {
  id: 'dec-24-ii',
  name: 'CTET December 2024 Paper II (Set K)',
  description: 'Elementary teacher eligibility test (Classes 6-8)',
  questions: [
    // Q1-30: CDP
    {
      question: "According to Vygotsky, which concept explains...",
      options: [
        "Zone of Proximal Development",
        "Scaffolding",
        "Cultural tools",
        "Private speech"
      ],
      correctAnswerIndex: 0,
      explanation: "ZPD refers to the gap between...",
      subjectName: SubjectName.CDP,
      topicId: "learning-theories",
      subTopicId: "vygotsky-theory"
    },
    
    // Q91-120: Science (for Science/Math stream)
    {
      question: "Photosynthesis occurs in...",
      options: [
        "Mitochondria",
        "Chloroplast",
        "Nucleus",
        "Ribosome"
      ],
      correctAnswerIndex: 1,
      explanation: "Chloroplasts contain chlorophyll...",
      subjectName: SubjectName.Science,
      topicId: "living-world",
      subTopicId: "plant-physiology"
    },

    // Q121-150: Social Studies (for Social Studies stream)
    {
      question: "The Preamble of Indian Constitution declares India as...",
      options: [
        "Socialist, Secular, Democratic, Republic",
        "Socialist, Secular, Federal, Republic",
        "Sovereign, Socialist, Secular, Democratic, Republic",
        "Sovereign, Federal, Democratic, Republic"
      ],
      correctAnswerIndex: 2,
      explanation: "The Preamble declares India as SSDR...",
      subjectName: SubjectName.SocialStudies,
      topicId: "civics-polity",
      subTopicId: "constitution"
    }
  ]
};
```

---

## 💡 Tips

1. **Start Small:** Add one paper at a time
2. **Verify Early:** Run verification after every 30 questions
3. **Use Templates:** Copy structure from existing files
4. **Test Locally:** Always test with `npm run dev` before committing
5. **Document:** Add explanations that help students learn
6. **Version Control:** Commit after each complete paper
7. **Backup:** Keep original PDFs and extracted text files

---

## 🆘 Troubleshooting

**Q: Extraction script not finding questions?**
- Check if PDF has text layer (not scanned image)
- Try OCR if needed
- Manual entry might be faster for scanned PDFs

**Q: Answer key doesn't match?**
- Verify Set code (H, I, J, K) matches
- Check if questions are shuffled
- Use comprehensive verification script

**Q: TypeScript errors?**
- Ensure all SubjectName values exist in enum
- Check topicId exists in SUBJECT_DATA
- Verify correctAnswerIndex is 0-3

**Q: Build fails?**
- Run `npm run type-check` for detailed errors
- Check for missing commas or brackets
- Ensure proper imports

---

## 📞 Need Help?

Check these files for examples:
- `constants/questionPapers/dec-24-i.ts` - Full example
- `types.ts` - Type definitions
- `constants/data.ts` - Subject and topic structure

---

**Last Updated:** January 2025  
**Version:** 1.0
