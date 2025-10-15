import { QuestionPaper, SubjectName, PaperType } from '../../types.js';

/**
 * CTET January 2024 - Paper II (Classes 6-8) - SOCIAL SCIENCE TRACK
 * Source: CTET-2024-Circular.pdf Page 10
 *
 * OFFICIAL CTET PAPER II STRUCTURE (Social Science Option):
 * ✅ Q1-Q30: Child Development & Pedagogy (compulsory) - 30 MCQs 30 Marks
 * ✅ Q31-Q90: Social Studies/Social Science - 60 MCQs 60 Marks
 * ✅ Q91-Q120: Language I (compulsory) - 30 MCQs 30 Marks
 * ✅ Q121-Q150: Language II (compulsory) - 30 MCQs 30 Marks
 *
 * Total: 150 MCQs 150 Marks
 */

export const QUESTION_PAPER_JAN_24_II_SOCIAL: QuestionPaper = {
  id: 'jan-24-ii-social',
  name: 'CTET January 2024 - Paper II (Social Science Track)',
  description: 'CTET January 2024 Paper II (Classes 6-8) Social Science track: CDP (30), Social Science (60), Language I (30), Language II (30) = 150 total MCQs.',
  paperType: PaperType.PAPER_II,
  questions: [
    // ===========================================================
    // PART I: CHILD DEVELOPMENT & PEDAGOGY (Q1-30) - 30 QUESTIONS
    // ===========================================================
    // ...existing code or questions from CDP section...

    // ===========================================================
    // PART II: SOCIAL STUDIES/SOCIAL SCIENCE (Q31-90) - 60 QUESTIONS
    // ===========================================================
    // Placeholder for 60 Social Science questions
    // Example question:
    {
      question: "Who was the first President of independent India?",
      options: [
        "Dr. Rajendra Prasad",
        "Jawaharlal Nehru",
        "Sardar Vallabhbhai Patel",
        "Dr. B.R. Ambedkar"
      ],
      correctAnswerIndex: 0,
      explanation: "Dr. Rajendra Prasad was the first President of independent India, serving from 1950 to 1962. This is a fundamental fact in Indian political history, relevant for Social Science pedagogy.",
      subjectName: SubjectName.SOCIAL_STUDIES,
      topicId: "indian-polity",
      subTopicId: "presidents-of-india",
      difficulty: "easy",
    },
    // ...add 59 more Social Science questions here...

    // ===========================================================
    // PART III: LANGUAGE I (Q91-120) - 30 QUESTIONS
    // ===========================================================
    // ...existing code or questions from Language I section...

    // ===========================================================
    // PART IV: LANGUAGE II (Q121-150) - 30 QUESTIONS
    // ===========================================================
    // ...existing code or questions from Language II section...
  ]
};
