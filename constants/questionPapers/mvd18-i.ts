import { QuestionPaper, SubjectName } from '../../types';

export const QUESTION_PAPER_MVD_18_I: QuestionPaper = {
  id: 'mvd18-i',
  name: 'CTET Practice Paper - MVD18-I',
  description: 'A sample test with 15 questions.',
  questions: [
    // CDP
    {
      question: 'Which one of the following statements is true about the role of heredity and environment?',
      options: [
        'Certain aspects of development are influenced more by heredity and others more by environment.',
        "A child's ability to learn and perform is completely decided by the genes.",
        'Good care and a nutritious diet can fight off any disorder a child is born with.',
        "Environment plays a significant role only in the child's language development.",
      ],
      correctAnswerIndex: 0,
      explanation:
        'Development is a complex interplay of both heredity (nature) and environment (nurture). Different traits and aspects of development are influenced by these two factors to varying degrees.',
      subjectName: SubjectName.CDP,
      topicId: 'cdp1',
      subTopicId: 'cdp1-foundations',
    },
    {
      question:
        'Which one of the following does not describe the ways in which a teacher can model problem solving for children in the classroom?',
      options: [
        'Ask questions with convergent answers',
        'Discuss your thought processes about solving a particular problem',
        'Be honest about making mistakes while solving something',
        'Use vocabulary like think, ideas, trial and different answers',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Modeling effective problem solving involves encouraging divergent thinking and exploration. Asking convergent questions, which have only one correct answer, limits this process.',
      subjectName: SubjectName.CDP,
      topicId: 'cdp3',
      subTopicId: 'cdp3-problem-solving',
    },
    {
      question: 'Which one of the following is an emotion?',
      options: ['Fear', 'Memory', 'Attention', 'Stimulus'],
      correctAnswerIndex: 0,
      explanation:
        'Fear is a basic human emotion. Memory, attention, and stimulus are cognitive concepts or processes, not emotions.',
      subjectName: SubjectName.CDP,
      topicId: 'cdp3',
      subTopicId: 'cdp3-emotion',
    },
  ],
};
