# CTET December 2022 Question Processing Prompt

## 📋 Overview
Process `SQP/Dec-22.txt` to create structured TypeScript question paper following all project documentation standards and requirements.

## 🎯 Objectives
- Process complete 150 questions from Dec-22.txt (Q1-Q150)
- Ensure strict adherence to all documentation in `docs/` folder
- Create TypeScript file: `constants/questionPapers/dec-22-i.ts`
- Integrate with existing UI components
- Update PROJECT_PLAN.md automatically
- Apply DOM Purify sanitization
- Validate JSON format compliance
- Execute comprehensive quality assurance checks

## 📚 Documentation Requirements
**MANDATORY**: Review and adhere to all documentation in `docs/` folder:
- `docs/README.md` - Project overview and setup
- `docs/CODING_STANDARDS.md` - Code formatting and style guidelines
- `docs/API_REFERENCE.md` - Interface definitions and usage
- `docs/DEPLOYMENT.md` - Integration and deployment procedures
- `docs/TESTING.md` - Quality assurance requirements

## 🔄 Execution Workflow

### Phase 1: Analysis and Planning
1. **File Structure Analysis**
   - Verify `SQP/Dec-22.txt` exists and is readable
   - Analyze question format (MCQ with 4 options, correct answer)
   - Confirm subject distribution: CDP (1-30), MATH (31-60), EVS (61-90), LANG1 (91-120), LANG2 (121-150)
   - Review existing question paper patterns in `constants/questionPapers/`

2. **Documentation Review**
   - Read all files in `docs/` folder
   - Understand TypeScript interfaces in `types.ts`
   - Review existing question paper implementations
   - Confirm coding standards and formatting requirements

3. **Environment Setup**
   - Verify Node.js environment configuration
   - Confirm TypeScript compilation setup
   - Check existing project structure and dependencies

### Phase 2: Question Processing
1. **Parse Questions**
   - Extract all 150 questions from Dec-22.txt
   - Parse question text, 4 options (A, B, C, D), and correct answers
   - Handle any special formatting or characters
   - Validate question completeness and format consistency

2. **Subject Classification**
   - CDP: Questions 1-30 (Child Development and Pedagogy)
   - MATH: Questions 31-60 (Mathematics)
   - EVS: Questions 61-90 (Environmental Studies)
   - LANG1: Questions 91-120 (Language I - English)
   - LANG2: Questions 121-150 (Language II - Hindi)

3. **Data Transformation**
   - Convert to MCQ interface format
   - Map answer letters (A, B, C, D) to indices (0, 1, 2, 3)
   - Assign subject names using SubjectName enum
   - Generate topicId and subTopicId based on subject classification
   - Add explanatory text for each question
   - Ensure compliance with QuestionPaper interface

### Phase 3: Code Generation and Integration
1. **Create TypeScript File**
   - Generate `constants/questionPapers/dec-22-i.ts`
   - Apply proper imports: `import { SubjectName } from '../../types'`
   - Format according to CODING_STANDARDS.md
   - Ensure type safety compliance
   - Create QUESTION_PAPER_DEC_22_I export

2. **UI Integration**
   - Update `constants/questionPapers/index.ts` to export Dec-22 questions
   - Verify MockTestSelection component displays Dec-22 option
   - Ensure seamless integration with existing UI components
   - Test question navigation and answer validation

3. **DOM Purify Processing**
   - Apply DOM Purify sanitization to all question text and options
   - Remove any potentially harmful HTML/script content
   - Ensure clean, safe content for web display

### Phase 4: Quality Assurance
1. **Documentation Adherence Verification**
   - Confirm compliance with all `docs/` folder requirements
   - Validate against CODING_STANDARDS.md formatting
   - Verify interface compliance with `types.ts`

2. **JSON Format Validation**
   - Validate generated TypeScript exports proper JSON structure
   - Ensure all required fields are present and correctly typed
   - Test JSON parsing and serialization

3. **TypeScript Compilation Testing**
   - Compile the generated TypeScript file
   - Verify no compilation errors
   - Confirm type safety across the codebase

4. **Integration Testing**
   - Test Dec-22 question paper in UI components
   - Verify MockTestSelection displays Dec-22 option
   - Test question navigation and answer validation
   - Confirm proper display of questions and options

5. **Data Integrity Checks**
   - Verify exactly 150 questions processed
   - Confirm subject distribution (30 per subject)
   - Validate answer indices and explanations
   - Check for UTF-8 encoding of special characters
   - Ensure no duplicate questions or malformed data

### Phase 5: PROJECT_PLAN.md Updates
**AUTOMATED UPDATE REQUIRED**: Update `PROJECT_PLAN.md` with the following structure:

```markdown
## 🎯 Current Task: Dec-22 Question Processing
**Status**: ✅ COMPLETED
**Start Date**: [Current Date]
**Completion Date**: [Current Date]
**Priority**: High

### 📝 Task Description
Process SQP\Dec-22.txt to create a new set of questions and answers, ensuring complete adherence to:
- All documentation in docs/ folder
- TypeScript type definitions
- Project coding standards
- Quality assurance requirements

### 🔄 Execution Phases
#### Phase 1: Analysis and Planning ✅ COMPLETED
- [x] File structure analysis completed
- [x] Question format identified (MCQ with 4 options)
- [x] Documentation requirements reviewed
- [x] PROJECT_PLAN.md initialized
- [x] Subject classification confirmed (CDP 1-30, MATH 31-60, EVS 61-90, LANG1 91-120, LANG2 121-150)

#### Phase 2: Question Processing ✅ COMPLETED
- [x] Parse all 150 questions from Dec-22.txt
- [x] Extract question text, options, and correct answers
- [x] Classify questions by subject (CDP, MATH, EVS, LANG1, LANG2)
- [x] Map to appropriate topics and subtopics
- [x] Validate data integrity
- [x] Handle mixed language content (English/Hindi for LANG2)

#### Phase 3: Code Generation and Integration ✅ COMPLETED
- [x] Create TypeScript file (constants/questionPapers/dec-22-i.ts)
- [x] Apply proper imports and exports
- [x] Format according to CODING_STANDARDS.md
- [x] Ensure type safety compliance
- [x] Integrate into index.ts for UI availability
- [x] Convert to MCQ format with proper interfaces

#### Phase 4: Quality Assurance ✅ COMPLETED
- [x] Documentation adherence verification
- [x] DOM Purify processing applied
- [x] JSON format validation
- [x] TypeScript compilation testing
- [x] Integration testing with existing codebase

### 📊 Progress Metrics
- **Questions Processed**: 150/150 (100%)
- **Documentation Compliance**: 100%
- **Type Safety**: ✅ Passed
- **Quality Checks**: ✅ Passed
- **UI Integration**: ✅ Completed

### 🔍 Current Status
**Phase**: 4 - Quality Assurance ✅ COMPLETED
**Last Update**: [Current Date]
**Next Milestone**: Ready for UI Testing and Deployment

### ⚠️ Issues & Blockers
- None identified - All phases completed successfully

### 📋 Next Steps
1. Test Dec-22 question paper in UI components
2. Verify MockTestSelection displays Dec-22 option
3. Test question navigation and answer validation
4. Deploy to production if needed

### 📈 Success Criteria
- [x] 150 questions successfully processed from Dec-22.txt
- [x] All questions properly classified by subject
- [x] TypeScript interfaces fully implemented
- [x] No compilation errors
- [x] Seamless integration with existing codebase
- [x] Dec-22 appears in MockTestSelection component
```

## ✅ Success Criteria
- [ ] 150 questions successfully processed from Dec-22.txt
- [ ] All questions properly classified by subject (30 each)
- [ ] TypeScript interfaces fully implemented
- [ ] No compilation errors
- [ ] DOM Purify sanitization applied
- [ ] JSON format validation passed
- [ ] Seamless integration with existing UI
- [ ] PROJECT_PLAN.md automatically updated
- [ ] All documentation requirements met
- [ ] Dec-22 appears in MockTestSelection component

## 🔧 Technical Specifications

### File Structure
```
constants/questionPapers/dec-22-i.ts
├── Import statements
├── QUESTION_PAPER_DEC_22_I: QuestionPaper
└── Export statement
```

### MCQ Interface Compliance
```typescript
interface MCQ {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  subjectName: SubjectName;
  topicId: string;
  subTopicId: string;
}
```

### Subject Classification
- **CDP**: Child Development and Pedagogy (Q1-Q30)
- **MATH**: Mathematics (Q31-Q60)
- **EVS**: Environmental Studies (Q61-Q90)
- **LANG1**: Language I - English (Q91-Q120)
- **LANG2**: Language II - Hindi (Q121-Q150)

## 🧪 Quality Assurance Checklist

### Pre-Processing
- [ ] Dec-22.txt file exists and is readable
- [ ] All 150 questions present and properly formatted
- [ ] No malformed questions or missing data
- [ ] Special characters handled correctly

### Processing Validation
- [ ] Subject distribution correct (30 per subject)
- [ ] Answer indices mapped correctly (A=0, B=1, C=2, D=3)
- [ ] TopicId and subTopicId assigned appropriately
- [ ] Explanations provided for all questions

### Code Quality
- [ ] TypeScript compilation successful
- [ ] CODING_STANDARDS.md compliance
- [ ] Proper imports and exports
- [ ] Type safety maintained

### Integration Testing
- [ ] UI components display Dec-22 questions
- [ ] MockTestSelection includes Dec-22 option
- [ ] Question navigation works correctly
- [ ] Answer validation functions properly

### Documentation Compliance
- [ ] All docs/ folder requirements met
- [ ] PROJECT_PLAN.md updated automatically
- [ ] API_REFERENCE.md followed
- [ ] DEPLOYMENT.md procedures followed

## 🚨 Critical Requirements
1. **MANDATORY**: Process ALL 150 questions - no partial processing
2. **MANDATORY**: Strict adherence to all documentation
3. **MANDATORY**: Automated PROJECT_PLAN.md updates
4. **MANDATORY**: DOM Purify sanitization
5. **MANDATORY**: JSON format validation
6. **MANDATORY**: UI integration verification
7. **MANDATORY**: TypeScript compilation success
8. **MANDATORY**: Subject distribution validation (30 each)

## 📝 Final Deliverables
1. `constants/questionPapers/dec-22-i.ts` - Complete question paper
2. Updated `constants/questionPapers/index.ts` - Export integration
3. Updated `PROJECT_PLAN.md` - Progress tracking
4. UI integration verification
5. Quality assurance test results
6. Documentation compliance confirmation

## ⚡ Execution Notes
- Process questions in order (1-150) to maintain subject grouping
- Apply DOM Purify to all text content before integration
- Validate JSON structure before TypeScript compilation
- Update PROJECT_PLAN.md immediately upon completion
- Test UI integration thoroughly before marking complete
- Ensure all special characters are UTF-8 encoded
- Maintain backward compatibility with existing codebase</content>
<parameter name="filePath">c:\Users\Admin\Summs\CTET-Study\docs\prompt\dec-22-question-processing-prompt.md