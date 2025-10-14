import { QuestionPaper, SubjectName, PaperType } from '../../types.js';

export const QUESTION_PAPER_DEC_21_II: QuestionPaper = {
  id: 'dec-21-ii',
  name: 'CTET December 2021 - Paper II',
  description: 'Complete question paper for CTET December 2021 Paper II (Classes 6-8)',
  paperType: PaperType.PAPER_II,
  questions: [
    // Child Development & Pedagogy (Q1-30)
    {
      question: "[Question 1 - Manual entry needed from Qus-Dec-21.pdf]",
      options: ["[Option 1]", "[Option 2]", "[Option 3]", "[Option 4]"],
      correctAnswerIndex: 0,
      explanation: "[Extract from Anz-Dec-21.pdf - Explanation needed with NCF 2005 reference]",
      subjectName: SubjectName.CDP,
      topicId: "child-development",
      subTopicId: "pedagogy",
      difficulty: "medium",
    },
    // ... Q2-Q30 CDP questions to be added from PDF
    
    // Language I - English (Q31-90) - 60 questions total
    {
      question: "[Question 31 - Manual entry needed from Qus-Dec-21.pdf]",
      options: ["[Option 1]", "[Option 2]", "[Option 3]", "[Option 4]"],
      correctAnswerIndex: 0,
      explanation: "[Extract from Anz-Dec-21.pdf - Language comprehension explanation needed]",
      subjectName: SubjectName.LANG1,
      topicId: "english-language",
      subTopicId: "comprehension",
      difficulty: "medium",
    },
    // ... Q32-Q90 Language I (English) questions to be added from PDF
    
    // Science OR Social Studies (Q91-150) - 60 questions total
    {
      question: "[Question 91 - Manual entry needed from Qus-Dec-21.pdf]",
      options: ["[Option 1]", "[Option 2]", "[Option 3]", "[Option 4]"],
      correctAnswerIndex: 0,
      explanation: "[Extract from Anz-Dec-21.pdf - Science/Social Studies explanation with NCF 2005]",
      subjectName: SubjectName.SCIENCE, // or SubjectName.SOCIAL_STUDIES - verify from PDF
      topicId: "science", // or "social-studies"
      subTopicId: "concepts",
      difficulty: "medium",
    },
    // ... Q92-Q150 Science/Social Studies questions to be added from PDF
  ],
};
