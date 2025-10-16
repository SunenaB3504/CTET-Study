import { QuestionPaper } from '../../../types.js';
import { metadata } from './metadata.js';
import { cdpQuestions } from './cdp.js';
import { mathematicsQuestions } from './mathematics.js';
import { scienceQuestions } from './science.js';
import { languageIEnglishQuestions } from './language-i-english.js';
import { languageIIHindiQuestions } from './language-ii-hindi.js';

/**
 * CTET July 2024 - Paper II (Complete)
 * 
 * This paper is assembled from individual subject files for better maintainability.
 * 
 * Paper II Structure (Track A - Mathematics & Science):
 * Total: 150 questions
 * - Q1-30: Child Development & Pedagogy (30 questions)
 * - Q31-60: Mathematics (30 questions)
 * - Q61-90: Science (30 questions)
 * - Q91-120: Language I - English (30 questions)
 * - Q121-150: Language II - Hindi (30 questions)
 */
export const QUESTION_PAPER_JUL_24_II: QuestionPaper = {
  ...metadata,
  questions: [
    ...cdpQuestions,
    ...mathematicsQuestions,
    ...scienceQuestions,
    ...languageIEnglishQuestions,
    ...languageIIHindiQuestions
  ]
};
