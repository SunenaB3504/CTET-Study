# CTET Study App - Dec-24-done.txt Question Processing Prompt

## 🎯 **Objective**
Process `SQP\Dec-24-done.txt` to create a new set of questions and answers following all project documentation standards and quality requirements, ensuring complete adherence to all specified instructions.

## 📋 **Input File Details**
- **File**: `SQP\Dec-24-done.txt`
- **Format**: CTET December 2024 Question Paper with Answer Key (Set K)
- **Structure**: Questions organized by parts (CDP, Mathematics, EVS, Languages)
- **Expected Questions**: 150 total questions
- **Question Format**: Standard MCQ format with 4 options and correct answer index
- **Language Distribution**: English (Q1-120), Hindi (Q121-150)

## 🔄 **Execution Workflow**

### **Phase 1: Analysis and Planning**
1. **File Analysis**: Examine `SQP\Dec-24-done.txt` structure and content
2. **Format Assessment**: Determine question format and parsing requirements
3. **Documentation Review**: Verify all docs/ folder requirements
4. **Planning**: Create detailed implementation plan
5. **PROJECT_PLAN.md Update**: Initialize tracking for Dec-24-done processing

### **Phase 2: Question Processing**
1. **Parse Questions**: Extract all 150 questions from Dec-24-done.txt
2. **Data Extraction**: Capture question text, options, and correct answers
3. **Subject Classification**: Map questions to CDP, MATH, EVS, LANG1, LANG2
4. **Topic Mapping**: Assign appropriate topics and subtopics based on content
5. **Data Validation**: Ensure data integrity throughout processing
6. **Language Handling**: Process mixed English/Hindi content appropriately

### **Phase 3: Code Generation**
1. **TypeScript File Creation**: Generate `constants/questionPapers/dec-24-done-i.ts`
2. **Interface Compliance**: Ensure full adherence to QuestionPaper and MCQ interfaces
3. **Import/Export Setup**: Properly integrate with existing questionPapers/index.ts
4. **Type Safety**: Verify all TypeScript requirements are met

### **Phase 4: Quality Assurance**
1. **Documentation Adherence Check**: Verify compliance with all docs/ standards
2. **DOM Purify Processing**: Sanitize all content for security
3. **JSON Format Validation**: Ensure strict adherence to JSON standards
4. **TypeScript Compilation**: Confirm zero compilation errors
5. **Integration Testing**: Verify seamless integration with existing codebase

### **Phase 5: UI Integration**
1. **MockTestSelection Component**: Add Dec-24-done paper to question papers list
2. **SampleQuestions Component**: Include Dec-24-done questions in sample display
3. **ReadinessTracker Component**: Add Dec-24-done coverage data
4. **Navigation Testing**: Verify all routing and filtering works correctly

### **Phase 6: Final Validation**
1. **PROJECT_PLAN.md Update**: Complete progress tracking with all metrics
2. **Documentation Adherence Recheck**: Final verification of all docs/ compliance
3. **DOM Purify Validation**: Confirm all content properly sanitized
4. **JSON Format Testing**: Strict validation of JSON structure adherence
5. **Integration Verification**: All components working correctly

## 📚 **Documentation Requirements**

### **Core Documentation References**
- `docs/CODING_STANDARDS.md` - Code formatting and structure guidelines
- `docs/IMPLEMENTATION_GUIDE.md` - Implementation patterns and best practices
- `docs/QUALITY_ASSURANCE.md` - Quality standards and testing procedures
- `docs/PDF_PROCESSING_GUIDE.md` - Data processing guidelines
- `docs/TYPES.md` - TypeScript interface definitions
- `docs/ARCHITECTURE.md` - System architecture and design patterns
- `docs/DEPLOYMENT.md` - Deployment and integration procedures
- `docs/API_DOCUMENTATION.md` - API standards and interfaces
- `docs/TESTING.md` - Testing frameworks and procedures
- `docs/USER_GUIDE.md` - User experience and interface guidelines

### **Key Standards to Follow**
1. **TypeScript Standards**: Strict typing, interface compliance, proper imports
2. **Code Organization**: Modular structure, clear separation of concerns
3. **Error Handling**: Comprehensive error management and validation
4. **Performance**: Efficient processing and memory management
5. **Security**: Content sanitization and validation
6. **Documentation**: Complete adherence to all project documentation

## 🛠️ **Technical Specifications**

### **Question Paper Structure**
```typescript
interface QuestionPaper {
  id: string;              // 'dec-24-done-i'
  name: string;            // 'CTET Paper - Dec 2024 (Complete)'
  description: string;     // Descriptive text
  questions: MCQ[];        // Array of 150 questions
}
```

### **MCQ Structure**
```typescript
interface MCQ {
  question: string;           // Question text
  options: string[];          // 4 options as array
  correctAnswerIndex: number; // 0-based index (0-3)
  explanation: string;        // Answer explanation
  subjectName: SubjectName;   // CDP, MATH, EVS, LANG1, LANG2
  topicId: string;           // Topic identifier
  subTopicId: string;        // Subtopic identifier
}
```

### **Subject Classification**
- **CDP**: Child Development & Pedagogy (Questions 1-30)
- **MATH**: Mathematics (Questions 31-60)
- **EVS**: Environmental Studies (Questions 61-90)
- **LANG1**: Language I (English) (Questions 91-120)
- **LANG2**: Language II (Hindi) (Questions 121-150)

## 🔍 **Quality Assurance Checklist**

### **Phase 1 Checklist**
- [ ] File structure analysis completed
- [ ] Question format identified
- [ ] Documentation requirements reviewed
- [ ] PROJECT_PLAN.md initialized

### **Phase 2 Checklist**
- [ ] All 150 questions parsed successfully
- [ ] Question text, options, and answers extracted
- [ ] Subject classification completed
- [ ] Topic and subtopic mapping verified
- [ ] Data integrity validated
- [ ] Mixed language content handled properly

### **Phase 3 Checklist**
- [ ] TypeScript file created: `constants/questionPapers/dec-24-done-i.ts`
- [ ] Interface compliance verified
- [ ] Import/export structure correct
- [ ] Type safety confirmed

### **Phase 4 Checklist**
- [ ] Documentation adherence verified
- [ ] DOM Purify processing completed
- [ ] JSON format validation passed
- [ ] TypeScript compilation successful
- [ ] Integration testing completed

### **Phase 5 Checklist**
- [ ] UI integration completed
- [ ] MockTestSelection component updated
- [ ] SampleQuestions component updated
- [ ] ReadinessTracker component updated
- [ ] Navigation and filtering tested

### **Phase 6 Checklist**
- [ ] PROJECT_PLAN.md fully updated
- [ ] Final documentation adherence check completed
- [ ] DOM Purify validation confirmed
- [ ] JSON format testing passed
- [ ] All integration tests successful

## 📊 **Success Criteria**

### **Functional Requirements**
- [ ] 150 questions successfully processed from Dec-24-done.txt
- [ ] All questions properly classified by subject
- [ ] TypeScript interfaces fully implemented
- [ ] No compilation errors
- [ ] Seamless integration with existing codebase

### **Quality Requirements**
- [ ] 100% documentation compliance
- [ ] All content properly sanitized
- [ ] Strict JSON format adherence
- [ ] Type safety maintained
- [ ] Performance standards met

### **Integration Requirements**
- [ ] Question paper appears in MockTestSelection
- [ ] SampleQuestions component includes Dec-24-done paper
- [ ] ReadinessTracker includes Dec-24-done coverage
- [ ] All navigation and filtering works correctly

## 🚀 **Execution Instructions**

### **Pre-Execution Requirements**
1. Verify `SQP\Dec-24-done.txt` exists and is accessible
2. Confirm all docs/ folder documentation is current
3. Ensure PROJECT_PLAN.md is properly initialized
4. Validate development environment setup

### **Execution Steps**
1. **Phase 1**: File analysis and planning
2. **Phase 2**: Question parsing and classification
3. **Phase 3**: TypeScript code generation
4. **Phase 4**: Quality assurance and validation
5. **Phase 5**: UI integration and testing
6. **Phase 6**: Final validation and documentation update

### **Post-Execution Requirements**
1. Update PROJECT_PLAN.md with completion status
2. Run final documentation adherence check
3. Execute DOM Purify processing validation
4. Perform JSON format validation testing
5. Confirm TypeScript compilation success
6. Verify UI integration functionality

## ⚠️ **Error Handling**

### **Common Issues**
- **File Format Issues**: Verify Dec-24-done.txt structure matches expected format
- **Encoding Problems**: Ensure UTF-8 compatibility for mixed language content
- **Parsing Errors**: Check for inconsistent question formatting
- **Type Errors**: Validate interface compliance
- **Integration Issues**: Test component interactions

### **Recovery Procedures**
- **Data Corruption**: Re-parse from original file
- **Type Errors**: Review interface definitions and fix compliance
- **Integration Failures**: Verify import/export structure
- **Documentation Issues**: Cross-reference with docs/ folder

## 📈 **Progress Tracking**

### **PROJECT_PLAN.md Updates**
- Update after each phase completion
- Mark checklist items as completed
- Record any issues encountered
- Document resolution steps
- Final status update upon completion

### **Metrics to Track**
- Questions processed: 0/150 → 150/150
- Documentation compliance: Target 100%
- Type safety: Target 100%
- Quality checks: Target 100%
- UI integration: Target 100%

## 🎯 **Final Deliverables**

1. **TypeScript File**: `constants/questionPapers/dec-24-done-i.ts`
2. **Updated Index**: `constants/questionPapers/index.ts`
3. **Updated PROJECT_PLAN.md**: Complete progress tracking
4. **Quality Assurance Report**: All checks passed
5. **Integration Verification**: All components working
6. **Documentation Compliance Report**: 100% adherence confirmed

## 🔒 **Security and Compliance**

- **Content Sanitization**: All text content processed through DOM Purify
- **Data Validation**: Strict JSON format adherence
- **Type Safety**: Full TypeScript compliance
- **Documentation Compliance**: All standards followed
- **Integration Security**: Safe component interactions

## 📋 **UI Integration Requirements**

### **MockTestSelection Component**
- Add Dec-24-done paper to question papers list
- Ensure proper display name and description
- Verify navigation to MockTest component works

### **SampleQuestions Component**
- Include Dec-24-done questions in sample display
- Maintain consistent formatting with other papers
- Ensure filtering and search functionality works

### **ReadinessTracker Component**
- Add Dec-24-done coverage data
- Update progress calculations
- Maintain accurate topic coverage statistics

### **Navigation and Filtering**
- Verify all routing works correctly
- Test question filtering by subject
- Confirm mock test execution functions properly

## 🔍 **Documentation Adherence Requirements**

### **Complete Documentation Compliance**
1. **Coding Standards**: Follow all patterns in `docs/CODING_STANDARDS.md`
2. **Implementation Guide**: Adhere to `docs/IMPLEMENTATION_GUIDE.md` patterns
3. **Quality Assurance**: Meet all standards in `docs/QUALITY_ASSURANCE.md`
4. **Architecture**: Follow `docs/ARCHITECTURE.md` design patterns
5. **Type Definitions**: Use interfaces from `docs/TYPES.md`
6. **API Documentation**: Follow `docs/API_DOCUMENTATION.md` standards
7. **Testing**: Implement procedures from `docs/TESTING.md`
8. **User Guide**: Meet requirements in `docs/USER_GUIDE.md`

### **PROJECT_PLAN.md Updates**
- Update after each phase completion
- Mark all checklist items as completed
- Record processing metrics and success criteria
- Document any issues and resolution steps
- Final completion status update

### **DOM Purify Processing**
- Sanitize all question text content
- Sanitize all option text content
- Sanitize all explanation text content
- Ensure security compliance for user-facing content
- Validate sanitization effectiveness

### **JSON Format Validation**
- Validate strict JSON syntax compliance
- Ensure proper escaping of special characters
- Verify array and object structure integrity
- Confirm UTF-8 encoding for mixed language content
- Test JSON parsing and serialization

---

**Created**: September 18, 2025
**Status**: Ready for Execution
**Awaiting**: User Confirmation to Proceed