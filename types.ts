export enum SubjectName {
  CDP = 'Child Development & Pedagogy',
  MATH = 'Mathematics',
  EVS = 'Environmental Studies',
  LANG1 = 'Language I (English)',
  LANG2 = 'Language II (Hindi)',
}

export interface MCQ {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  subjectName: SubjectName;
  topicId: string;
  subTopicId: string;
}

export interface Topic {
  id: string;
  name: string;
  notes: string;
  practiceQuestions: MCQ[];
}

export interface Subject {
  name: SubjectName;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  topics: Topic[];
}

export enum View {
  DASHBOARD,
  STUDY_MODULE,
  MOCK_TEST_SELECTION,
  MOCK_TEST,
  READINESS_TRACKER,
}

export interface QuestionPaper {
  id: string;
  name: string;
  description: string;
  questions: MCQ[];
}

export interface MockTestResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unattempted: number;
  timeTaken: number; // in seconds
  answers: (number | null)[];
  questions: MCQ[];
}

export interface ContextualTopic {
  subjectName: SubjectName;
  topicId: string;
  topicName: string;
}

export interface SyllabusSubTopic {
  id: string;
  name: string;
}

export interface SyllabusTopic {
  id: string;
  name: string;
  subTopics: SyllabusSubTopic[];
}

export interface SyllabusSubject {
  name: SubjectName;
  topics: SyllabusTopic[];
}

export interface CoverageData {
  subjectName: SubjectName;
  topicName: string;
  subTopicName: string;
  questionCount: number;
  contentAvailable: 'Detailed' | 'Basic' | 'Not Available';
}
