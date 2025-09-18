import { QuestionPaper } from '../../types';
import { QUESTION_PAPER_MVD_18_I } from './mvd18-i';
import { QUESTION_PAPER_JUL_24_I } from './jul-24-i';
import { QUESTION_PAPER_AUG_23_I } from './aug-23-i';
import { QUESTION_PAPER_JAN_24_I } from './jan-24-i';
import { QUESTION_PAPER_DEC_24_I } from './dec-24-i';

export const QUESTION_PAPERS_DATA: QuestionPaper[] = [
  QUESTION_PAPER_MVD_18_I,
  QUESTION_PAPER_JUL_24_I,
  QUESTION_PAPER_AUG_23_I,
  QUESTION_PAPER_JAN_24_I,
  QUESTION_PAPER_DEC_24_I
];

// Export individual papers for direct access
export {
  QUESTION_PAPER_MVD_18_I,
  QUESTION_PAPER_JUL_24_I,
  QUESTION_PAPER_AUG_23_I,
  QUESTION_PAPER_JAN_24_I,
  QUESTION_PAPER_DEC_24_I
};
