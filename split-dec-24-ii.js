import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the original file
const content = fs.readFileSync('constants/questionPapers/dec-24-ii.ts', 'utf-8');

// Extract questions section
const questionsStart = content.indexOf('questions: [');
const questionsEnd = content.lastIndexOf(']');
const questionsSection = content.substring(questionsStart + 12, questionsEnd);

// Parse individual question objects
const questionObjects = [];
let braceCount = 0;
let currentQuestion = '';
let startPos = 0;

for (let i = 0; i < questionsSection.length; i++) {
  if (questionsSection[i] === '{') {
    if (braceCount === 0) startPos = i;
    braceCount++;
  } else if (questionsSection[i] === '}') {
    braceCount--;
    if (braceCount === 0) {
      currentQuestion = questionsSection.substring(startPos, i + 1);
      questionObjects.push(currentQuestion);
    }
  }
}

console.log(`Parsed ${questionObjects.length} questions`);

// Group by subject
const bySubject = {
  CDP: [],
  LANG1: [],
  LANG2: [],
  MATH: [],
  SCIENCE: []
};

questionObjects.forEach((q, index) => {
  if (q.includes('SubjectName.CDP')) bySubject.CDP.push(q);
  else if (q.includes('SubjectName.LANG1')) bySubject.LANG1.push(q);
  else if (q.includes('SubjectName.LANG2')) bySubject.LANG2.push(q);
  else if (q.includes('SubjectName.MATH')) bySubject.MATH.push(q);
  else if (q.includes('SubjectName.SCIENCE')) bySubject.SCIENCE.push(q);
  else console.log(`Question ${index + 1} has unknown subject`);
});

// Create metadata file
const metadata = `import { PaperType } from '../../../types.js';

export const metadata = {
  id: 'dec-24-ii',
  name: 'CTET December 2024 - Paper II',
  description: 'Complete question paper for CTET December 2024 Paper II (Classes 6-8)',
  paperType: PaperType.PAPER_II,
  examDate: '2024-12-15',
  set: 'K'
};
`;

fs.writeFileSync('constants/questionPapers/dec-24-ii/metadata.ts', metadata);
console.log('✓ Created metadata.ts');

// Create CDP file
const cdpFile = `import { MCQ, SubjectName } from '../../../types.js';

/**
 * CTET December 2024 - Paper II
 * Child Development & Pedagogy Questions (Q1-Q30)
 */
export const cdpQuestions: MCQ[] = [
  ${bySubject.CDP.join(',\n  ')}
];
`;

fs.writeFileSync('constants/questionPapers/dec-24-ii/cdp.ts', cdpFile);
console.log(`✓ Created cdp.ts (${bySubject.CDP.length} questions)`);

// Create Language I file
const lang1File = `import { MCQ, SubjectName } from '../../../types.js';

/**
 * CTET December 2024 - Paper II
 * Language I (English) Questions (Q31-Q60)
 */
export const languageIEnglishQuestions: MCQ[] = [
  ${bySubject.LANG1.join(',\n  ')}
];
`;

fs.writeFileSync('constants/questionPapers/dec-24-ii/language-i-english.ts', lang1File);
console.log(`✓ Created language-i-english.ts (${bySubject.LANG1.length} questions)`);

// Create Language II file
const lang2File = `import { MCQ, SubjectName } from '../../../types.js';

/**
 * CTET December 2024 - Paper II
 * Language II (Hindi) Questions (Q61-Q90)
 * 
 * NOTE: These should be Q91-Q120 with Hindi questions.
 * Currently tagged as LANG2 but positioned as Q61-Q90.
 * Needs to be updated to LANG1 and merged with language-i-english.ts
 */
export const languageIIHindiQuestions: MCQ[] = [
  ${bySubject.LANG2.join(',\n  ')}
];
`;

fs.writeFileSync('constants/questionPapers/dec-24-ii/language-ii-hindi.ts', lang2File);
console.log(`✓ Created language-ii-hindi.ts (${bySubject.LANG2.length} questions)`);

// Create Mathematics file
const mathFile = `import { MCQ, SubjectName } from '../../../types.js';

/**
 * CTET December 2024 - Paper II
 * Mathematics Questions (Q91-Q120)
 * 
 * NOTE: In Paper II, Q91-Q120 should be Language II (Hindi), not Mathematics.
 * These questions need review - they might be Science questions tagged incorrectly.
 */
export const mathematicsQuestions: MCQ[] = [
  ${bySubject.MATH.join(',\n  ')}
];
`;

fs.writeFileSync('constants/questionPapers/dec-24-ii/mathematics.ts', mathFile);
console.log(`✓ Created mathematics.ts (${bySubject.MATH.length} questions)`);

// Create Science file
const scienceFile = `import { MCQ, SubjectName } from '../../../types.js';

/**
 * CTET December 2024 - Paper II
 * Science Questions (Q121-Q150)
 * 
 * Paper II includes either:
 * - Mathematics & Science (30 questions each), OR
 * - Social Studies (60 questions)
 */
export const scienceQuestions: MCQ[] = [
  ${bySubject.SCIENCE.join(',\n  ')}
];
`;

fs.writeFileSync('constants/questionPapers/dec-24-ii/science.ts', scienceFile);
console.log(`✓ Created science.ts (${bySubject.SCIENCE.length} questions)`);

// Create index file
const indexFile = `import { QuestionPaper } from '../../../types.js';
import { metadata } from './metadata.js';
import { cdpQuestions } from './cdp.js';
import { languageIEnglishQuestions } from './language-i-english.js';
import { languageIIHindiQuestions } from './language-ii-hindi.js';
import { mathematicsQuestions } from './mathematics.js';
import { scienceQuestions } from './science.js';

/**
 * CTET December 2024 - Paper II (Complete)
 * 
 * This paper is assembled from individual subject files for better maintainability.
 * Each subject file contains 30 questions with detailed explanations aligned to NCF 2005.
 * 
 * Total: 150 questions
 * - CDP: 30 questions (Q1-Q30)
 * - Language I (English): 30 questions (Q31-Q60)
 * - Language II (Hindi): 30 questions (Q61-Q90) - NEEDS REVIEW
 * - Mathematics: 30 questions (Q91-Q120) - NEEDS REVIEW
 * - Science: 30 questions (Q121-Q150)
 * 
 * NOTE: Subject tags need review and correction according to Paper II format:
 * - Q1-30: CDP ✓
 * - Q31-90: Language I (English) - should be 60 questions total
 * - Q91-120: Language II (Hindi) - needs to be added
 * - Q121-150: Mathematics & Science OR Social Studies
 */
export const QUESTION_PAPER_DEC_24_II: QuestionPaper = {
  ...metadata,
  questions: [
    ...cdpQuestions,
    ...languageIEnglishQuestions,
    ...languageIIHindiQuestions,
    ...mathematicsQuestions,
    ...scienceQuestions
  ]
};
`;

fs.writeFileSync('constants/questionPapers/dec-24-ii/index.ts', indexFile);
console.log('✓ Created index.ts (main export)');

// Summary
console.log('\n=== Summary ===');
console.log('Total questions distributed:', 
  bySubject.CDP.length + 
  bySubject.LANG1.length + 
  bySubject.LANG2.length + 
  bySubject.MATH.length + 
  bySubject.SCIENCE.length
);
console.log('\nFiles created in constants/questionPapers/dec-24-ii/:');
console.log('  - metadata.ts');
console.log('  - cdp.ts');
console.log('  - language-i-english.ts');
console.log('  - language-ii-hindi.ts');
console.log('  - mathematics.ts');
console.log('  - science.ts');
console.log('  - index.ts');
console.log('\nNext steps:');
console.log('1. Update constants/questionPapers/index.ts to import from dec-24-ii/index.ts');
console.log('2. Review and fix subject tags according to Paper II format');
console.log('3. Test the import in the app');
console.log('4. Backup and remove the old dec-24-ii.ts file');
