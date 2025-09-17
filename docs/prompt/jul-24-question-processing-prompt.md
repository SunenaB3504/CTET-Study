# CTET July 2024 Question Paper Processing Prompt

## 🎯 OBJECTIVE
Review the SQP\Jul-24.txt file and create a new set of questions and answers based on it, ensuring complete adherence to project documentation and standards.

## 📋 REQUIREMENTS

### 1. Input Source
- **File**: `SQP\Jul-24.txt`
- **Format**: MCQ Question Paper with answers
- **Expected Output**: TypeScript question paper file following project standards

### 2. Documentation Adherence
**MANDATORY**: Complete adherence to all documentation in the `docs/` folder:
- `CODING_STANDARDS.md` - Code formatting and structure
- `IMPLEMENTATION_GUIDE.md` - Implementation patterns and best practices
- `ARCHITECTURE.md` - System architecture and design patterns
- `DESIGN_SYSTEM.md` - UI/UX consistency requirements
- `TESTING.md` - Testing standards and procedures
- `API_DOCUMENTATION.md` - API structure and conventions
- `CONTEXT_PRESERVATION_GUIDE.md` - Context preservation requirements
- `PDF_PROCESSING_GUIDE.md` - PDF processing standards

### 3. Data Structure Compliance
**MANDATORY**: Follow the exact structure defined in `types.ts`:
```typescript
interface MCQ {
  question: string;
  options: string[];
  correctAnswerIndex: number; // 0-based indexing
  explanation: string;
  subjectName: SubjectName;
  topicId: string;
  subTopicId: string;
}

interface QuestionPaper {
  id: string;
  name: string;
  description: string;
  questions: MCQ[];
}
```

### 4. Subject Classification
**MANDATORY**: Classify questions into correct subjects:
- `CDP` - Child Development & Pedagogy
- `MATH` - Mathematics
- `EVS` - Environmental Studies
- `LANG1` - Language I (English)
- `LANG2` - Language II (Hindi)

### 5. Topic and Subtopic Mapping
**MANDATORY**: Map questions to appropriate topics and subtopics based on syllabus structure in `constants/syllabus.ts`

## 🔄 EXECUTION WORKFLOW

### Phase 1: Analysis and Planning
1. **Review Input File**: Analyze `SQP\Jul-24.txt` structure and content
2. **Documentation Review**: Cross-reference with all docs/ files
3. **Gap Analysis**: Identify any missing documentation or unclear requirements
4. **Planning**: Create detailed implementation plan

### Phase 2: Question Processing
1. **Parse Questions**: Extract questions, options, and answers from text file
2. **Subject Classification**: Assign appropriate SubjectName enum values
3. **Topic Mapping**: Map to correct topicId and subTopicId
4. **Data Validation**: Ensure all required fields are present and valid

### Phase 3: Code Generation
1. **TypeScript Generation**: Create properly formatted TypeScript file
2. **Import Statements**: Include correct imports from types and constants
3. **Export Structure**: Follow project export patterns
4. **Code Formatting**: Apply coding standards from CODING_STANDARDS.md

### Phase 4: Quality Assurance
1. **Documentation Adherence Check**: Verify compliance with all docs/ files
2. **DOM Purify**: Run DOM sanitization on all text content
3. **JSON Format Validation**: Ensure strict JSON format compliance
4. **Type Safety**: Verify TypeScript type compliance

## 📝 OUTPUT SPECIFICATIONS

### File Structure
```
constants/questionPapers/
├── jul-24-i.ts          # Main question paper file
└── jul-24-i-metadata.json # Optional metadata file
```

### Naming Convention
- **File**: `jul-24-i.ts` (following existing pattern)
- **Export**: `QUESTION_PAPER_JUL_24_I`
- **ID**: `jul-24-i`

### Content Requirements
- **Complete Questions**: All questions from Jul-24.txt
- **Accurate Answers**: Correct answer indices (0-based)
- **Detailed Explanations**: Comprehensive explanations for each answer
- **Proper Classification**: Correct subject, topic, and subtopic assignments

## 🔍 VALIDATION CHECKLIST

### Pre-Execution
- [ ] All docs/ files reviewed and understood
- [ ] Input file structure analyzed
- [ ] Type definitions confirmed
- [ ] Existing question papers reviewed for patterns

### During Execution
- [ ] Subject classification accuracy
- [ ] Topic and subtopic mapping correctness
- [ ] Answer index validation (0-based)
- [ ] Text content sanitization

### Post-Execution
- [ ] TypeScript compilation success
- [ ] Import/export structure validation
- [ ] Documentation compliance verification
- [ ] JSON format strict adherence

## 🚨 CRITICAL REQUIREMENTS

### 1. Documentation Compliance
**FAILURE POINT**: Any deviation from docs/ files will result in rejection
- Code must follow CODING_STANDARDS.md exactly
- Architecture must match ARCHITECTURE.md
- Implementation must follow IMPLEMENTATION_GUIDE.md

### 2. Data Integrity
**FAILURE POINT**: Incorrect data structure or missing fields
- All MCQ interface fields must be present
- correctAnswerIndex must be 0-based integer
- subjectName must be valid SubjectName enum

### 3. Quality Standards
**FAILURE POINT**: Poor quality output
- No syntax errors
- Proper TypeScript typing
- Clean, readable code
- Comprehensive explanations

## 📊 SUCCESS METRICS

### Quantitative
- **100%** questions processed from input file
- **100%** documentation compliance
- **0** TypeScript compilation errors
- **100%** JSON format adherence

### Qualitative
- Accurate subject classification
- Proper topic/subtopic mapping
- Clear, educational explanations
- Consistent code formatting

## 🔄 PROJECT PLAN UPDATE

**MANDATORY**: After each execution phase, update `PROJECT_PLAN.md` with:
- Current progress status
- Completed tasks
- Remaining work
- Any issues encountered
- Next steps planned

## 🧪 TESTING REQUIREMENTS

### DOM Purify Test
```javascript
// Run DOM sanitization on all text content
import DOMPurify from 'dompurify';
const sanitized = DOMPurify.sanitize(questionText);
```

### JSON Format Test
```javascript
// Validate strict JSON format
JSON.parse(JSON.stringify(questionPaper));
```

### TypeScript Compilation Test
```bash
npx tsc --noEmit --strict constants/questionPapers/jul-24-i.ts
```

## 📋 FINAL CHECKLIST

### Before Execution
- [ ] All docs/ files reviewed
- [ ] Input file analyzed
- [ ] Type definitions confirmed
- [ ] Existing patterns studied

### During Execution
- [ ] Documentation compliance maintained
- [ ] Data structure integrity preserved
- [ ] Quality standards met

### After Execution
- [ ] PROJECT_PLAN.md updated
- [ ] DOM Purify test passed
- [ ] JSON format test passed
- [ ] TypeScript compilation successful
- [ ] Final documentation adherence check completed

## ⚠️ EXECUTION PROTOCOL

1. **Create this prompt file** in `docs/prompt/` folder
2. **Wait for user confirmation** before proceeding
3. **Execute in phases** with updates after each phase
4. **Validate thoroughly** at each step
5. **Update PROJECT_PLAN.md** after each phase
6. **Run final checks** before completion

---

**CONFIRMATION REQUIRED**: Please review this prompt and confirm execution before proceeding.