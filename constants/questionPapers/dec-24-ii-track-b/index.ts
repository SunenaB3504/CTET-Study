import { QuestionPaper } from '../../../types.js';
import { metadata } from './metadata.js';
import { cdpQuestions } from './cdp.js';
import { socialStudiesPart1Questions } from './social-studies-part1.js';
import { socialStudiesPart2Questions } from './social-studies-part2.js';
import { languageIEnglishQuestions } from './language-i-english.js';
import { languageIIHindiQuestions } from './language-ii-hindi.js';

/**
 * CTET December 2024 - Paper II Track B (Social Studies)
 * 
 * This paper is assembled from individual subject files for better maintainability.
 * Each subject file contains questions with detailed explanations aligned to NCF 2005.
 * 
 * Paper II Track B Structure (Social Studies):
 * Total: 150 questions
 * - Q1-30: Child Development & Pedagogy (30 questions)
 * - Q31-60: Social Studies Part 1 (30 questions) - History, Geography, Civics, Economics
 * - Q61-90: Social Studies Part 2 (30 questions) - History, Geography, Civics, Economics
 * - Q91-120: Language I - English (30 questions)
 * - Q121-150: Language II - Hindi (30 questions)
 * 
 * Note: Paper II has two tracks:
 * - Track A: Mathematics & Science (Q31-90)
 * - Track B: Social Studies (Q31-90) ← This implementation
 * 
 * Candidates choose ONE track based on their teaching preference.
 */
export const QUESTION_PAPER_DEC_24_II_TRACK_B: QuestionPaper = {
  ...metadata,
  questions: [
    ...cdpQuestions,
    ...socialStudiesPart1Questions,
    ...socialStudiesPart2Questions,
    ...languageIEnglishQuestions,
    ...languageIIHindiQuestions
  ]
};
