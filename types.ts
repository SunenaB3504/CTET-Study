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
  SAMPLE_QUESTIONS,
  GAP_ANALYSIS_DASHBOARD,
  QUALITY_ASSESSMENT_DASHBOARD,
  EXPERIENCE_LEVEL_SELECTION,
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

// Enhanced syllabus mapping interfaces
export interface EnhancedSyllabusTopic {
  id: string;
  name: string;
  subject: SubjectName;
  subtopics: EnhancedSubtopic[];
  priority: 'high' | 'medium' | 'low';
  coverage: number; // percentage covered
  questionCount: number;
  requiredQuestions: number;
  gapStatus: 'covered' | 'partial' | 'missing';
}

export interface EnhancedSubtopic {
  id: string;
  name: string;
  questionCount: number;
  coverage: number;
  priority: 'high' | 'medium' | 'low';
  lastUpdated?: Date;
}

export interface ContentGap {
  topicId: string;
  subtopicId: string;
  gapType: 'missing' | 'insufficient';
  requiredQuestions: number;
  currentQuestions: number;
  priority: number;
}

export interface GapAnalysisReport {
  totalGaps: number;
  criticalGaps: number;
  subjectBreakdown: {
    subject: SubjectName;
    gaps: number;
    coverage: number;
  }[];
  priorityGaps: ContentGap[];
  recommendations: string[];
}

export interface CoverageMetrics {
  overallCoverage: number;
  subjectCoverage: Record<SubjectName, number>;
  topicCoverage: Record<string, number>;
  subtopicCoverage: Record<string, number>;
  lastUpdated: Date;
}

// Quality assessment interfaces
export interface QualityMetrics {
  overallScore: number;
  contentQuality: number;
  questionStructure: number;
  answerQuality: number;
  syllabusAlignment: number;
  difficultyBalance: number;
  issues: QualityIssue[];
}

export interface QualityIssue {
  type: 'critical' | 'warning' | 'info';
  category: 'content' | 'structure' | 'alignment' | 'difficulty';
  message: string;
  suggestion?: string;
}

export interface ValidationResult {
  isValid: boolean;
  score: number;
  metrics: QualityMetrics;
  recommendations: string[];
}

export interface ContentValidationReport {
  totalQuestions: number;
  validQuestions: number;
  invalidQuestions: number;
  qualityDistribution: {
    excellent: number;
    good: number;
    fair: number;
    poor: number;
  };
  commonIssues: QualityIssue[];
  subjectBreakdown: Record<SubjectName, QualityMetrics>;
}

// Experience level interfaces
export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';

export interface ExperienceLevelConfig {
  level: ExperienceLevel;
  name: string;
  description: string;
  icon: string;
  questionComplexity: 'basic' | 'moderate' | 'advanced';
  contentDepth: 'overview' | 'detailed' | 'comprehensive';
  recommendedStudyTime: number; // minutes per session
  features: string[];
}

export interface UserPreferences {
  experienceLevel: ExperienceLevel;
  studyGoals: string[];
  preferredSubjects: SubjectName[];
  dailyStudyTime: number; // minutes
  notificationsEnabled: boolean;
  lastUpdated: Date;
}

export interface AdaptiveContentFilter {
  experienceLevel: ExperienceLevel;
  subjectFilters: Record<SubjectName, boolean>;
  difficultyFilters: {
    easy: boolean;
    medium: boolean;
    hard: boolean;
  };
  topicPriorities: Record<string, number>; // topicId -> priority score
}
