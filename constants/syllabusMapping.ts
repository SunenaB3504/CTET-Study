import { SyllabusTopic, ContentGap, SubjectName } from '../types';

// Enhanced syllabus mapping with coverage tracking
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

// Gap analysis utilities
export class SyllabusGapAnalyzer {
  static analyzeCoverage(
    syllabusTopics: EnhancedSyllabusTopic[],
    existingQuestions: any[]
  ): ContentGap[] {
    const gaps: ContentGap[] = [];

    syllabusTopics.forEach(topic => {
      topic.subtopics.forEach(subtopic => {
        const existingCount = existingQuestions.filter(
          q => q.subTopicId === subtopic.id
        ).length;

        if (existingCount < subtopic.questionCount) {
          gaps.push({
            topicId: topic.id,
            subtopicId: subtopic.id,
            gapType: existingCount === 0 ? 'missing' : 'insufficient',
            requiredQuestions: subtopic.questionCount,
            currentQuestions: existingCount,
            priority: subtopic.priority === 'high' ? 3 :
                     subtopic.priority === 'medium' ? 2 : 1,
          });
        }
      });
    });

    return gaps.sort((a, b) => b.priority - a.priority);
  }

  static calculateCoveragePercentage(
    required: number,
    current: number
  ): number {
    if (required === 0) return 100;
    return Math.min(100, Math.round((current / required) * 100));
  }

  static getGapStatus(coverage: number): 'covered' | 'partial' | 'missing' {
    if (coverage >= 80) return 'covered';
    if (coverage >= 30) return 'partial';
    return 'missing';
  }
}

// Priority scoring for content development
export class ContentPriorityScorer {
  static calculatePriority(
    topic: EnhancedSyllabusTopic,
    gapAnalysis: ContentGap[]
  ): number {
    let score = 0;

    // Base priority from syllabus importance
    if (topic.priority === 'high') score += 30;
    else if (topic.priority === 'medium') score += 20;
    else score += 10;

    // Gap severity
    const topicGaps = gapAnalysis.filter(gap => gap.topicId === topic.id);
    const totalGap = topicGaps.reduce((sum, gap) =>
      sum + (gap.requiredQuestions - gap.currentQuestions), 0);

    if (totalGap > 20) score += 40;
    else if (totalGap > 10) score += 30;
    else if (totalGap > 5) score += 20;
    else if (totalGap > 0) score += 10;

    // Coverage percentage penalty
    if (topic.coverage < 30) score += 20;
    else if (topic.coverage < 60) score += 10;

    return Math.min(100, score);
  }

  static getPriorityLevel(score: number): 'high' | 'medium' | 'low' {
    if (score >= 70) return 'high';
    if (score >= 40) return 'medium';
    return 'low';
  }
}

// Enhanced syllabus data with coverage tracking
export const ENHANCED_SYLLABUS_DATA: EnhancedSyllabusTopic[] = [
  // CDP Topics
  {
    id: 'cdp1',
    name: 'Foundations of Child Development',
    subject: SubjectName.CDP,
    priority: 'high',
    coverage: 65,
    questionCount: 45,
    requiredQuestions: 70,
    gapStatus: 'partial',
    subtopics: [
      {
        id: 'cdp1-foundations',
        name: 'Concept of development, principles, influence of Heredity & Environment.',
        questionCount: 12,
        coverage: 70,
        priority: 'high'
      },
      {
        id: 'cdp1-piaget',
        name: "Piaget's theory of cognitive development.",
        questionCount: 15,
        coverage: 60,
        priority: 'high'
      },
      {
        id: 'cdp1-kohlberg',
        name: "Kohlberg's theory of moral development.",
        questionCount: 10,
        coverage: 80,
        priority: 'medium'
      },
      {
        id: 'cdp1-vygotsky',
        name: "Vygotsky's sociocultural theory.",
        questionCount: 8,
        coverage: 50,
        priority: 'high'
      },
    ],
  },
  {
    id: 'cdp2',
    name: 'Inclusion and Special Needs',
    subject: SubjectName.CDP,
    priority: 'high',
    coverage: 35,
    questionCount: 25,
    requiredQuestions: 70,
    gapStatus: 'missing',
    subtopics: [
      {
        id: 'cdp2-concept',
        name: 'Concept of inclusive education and understanding children with special needs.',
        questionCount: 15,
        coverage: 40,
        priority: 'high'
      },
      {
        id: 'cdp2-diversity',
        name: 'Addressing learners from diverse backgrounds.',
        questionCount: 12,
        coverage: 30,
        priority: 'high'
      },
      {
        id: 'cdp2-sen',
        name: 'Addressing children with learning difficulties, impairment etc.',
        questionCount: 18,
        coverage: 20,
        priority: 'high'
      },
      {
        id: 'cdp2-gifted',
        name: 'Addressing the Talented, Creative, Specially abled Learners.',
        questionCount: 10,
        coverage: 50,
        priority: 'medium'
      },
    ],
  },
  {
    id: 'cdp3',
    name: 'Learning, Pedagogy, and Motivation',
    subject: SubjectName.CDP,
    priority: 'high',
    coverage: 55,
    questionCount: 35,
    requiredQuestions: 65,
    gapStatus: 'partial',
    subtopics: [
      {
        id: 'cdp3-learning-process',
        name: 'Basic processes of teaching and learning; children\'s strategies of learning.',
        questionCount: 15,
        coverage: 60,
        priority: 'high'
      },
      {
        id: 'cdp3-problem-solving',
        name: 'Child as a problem solver and a \'scientific investigator\'.',
        questionCount: 12,
        coverage: 50,
        priority: 'high'
      },
      {
        id: 'cdp3-emotion',
        name: 'Cognition & Emotions.',
        questionCount: 10,
        coverage: 70,
        priority: 'medium'
      },
      {
        id: 'cdp3-motivation',
        name: 'Motivation and learning.',
        questionCount: 8,
        coverage: 40,
        priority: 'high'
      },
    ],
  },
  {
    id: 'cdp4',
    name: 'Social and Gender Constructs',
    subject: SubjectName.CDP,
    priority: 'medium',
    coverage: 45,
    questionCount: 28,
    requiredQuestions: 60,
    gapStatus: 'partial',
    subtopics: [
      {
        id: 'cdp4-socialization',
        name: 'Socialization processes: Social world & children (Teacher, Parents, Peers).',
        questionCount: 12,
        coverage: 50,
        priority: 'medium'
      },
      {
        id: 'cdp4-constructs',
        name: 'Concepts of child-centered and progressive education.',
        questionCount: 10,
        coverage: 60,
        priority: 'medium'
      },
      {
        id: 'cdp4-critical-perspective',
        name: 'Critical perspective of the construct of Intelligence.',
        questionCount: 8,
        coverage: 30,
        priority: 'high'
      },
      {
        id: 'cdp4-gender',
        name: 'Gender as a social construct; gender roles, gender-bias and educational practice.',
        questionCount: 15,
        coverage: 35,
        priority: 'high'
      },
      {
        id: 'cdp4-bias',
        name: 'Gender bias and its implications in the classroom.',
        questionCount: 10,
        coverage: 40,
        priority: 'high'
      },
    ],
  },

  // Mathematics Topics
  {
    id: 'math1',
    name: 'Geometry, Shapes & Solids',
    subject: SubjectName.MATH,
    priority: 'medium',
    coverage: 60,
    questionCount: 30,
    requiredQuestions: 50,
    gapStatus: 'partial',
    subtopics: [
      {
        id: 'math1-geometry',
        name: 'Geometry fundamentals',
        questionCount: 15,
        coverage: 65,
        priority: 'medium'
      },
      {
        id: 'math1-shapes',
        name: 'Shapes & Spatial Understanding',
        questionCount: 18,
        coverage: 55,
        priority: 'medium'
      },
      {
        id: 'math1-solids',
        name: 'Solids around Us',
        questionCount: 12,
        coverage: 60,
        priority: 'low'
      },
    ],
  },
  {
    id: 'math2',
    name: 'Numbers, Measurement & Data Handling',
    subject: SubjectName.MATH,
    priority: 'high',
    coverage: 70,
    questionCount: 42,
    requiredQuestions: 60,
    gapStatus: 'partial',
    subtopics: [
      {
        id: 'math2-numbers',
        name: 'Numbers and operations (Addition, Subtraction, etc.)',
        questionCount: 20,
        coverage: 75,
        priority: 'high'
      },
      {
        id: 'math2-measurement',
        name: 'Measurement (Weight, Time, Length)',
        questionCount: 15,
        coverage: 70,
        priority: 'medium'
      },
      {
        id: 'math2-volume',
        name: 'Volume concepts',
        questionCount: 8,
        coverage: 60,
        priority: 'low'
      },
      {
        id: 'math2-data',
        name: 'Data Handling',
        questionCount: 12,
        coverage: 65,
        priority: 'medium'
      },
      {
        id: 'math2-patterns',
        name: 'Patterns recognition and creation',
        questionCount: 10,
        coverage: 80,
        priority: 'low'
      },
      {
        id: 'math2-money',
        name: 'Money and financial literacy',
        questionCount: 8,
        coverage: 55,
        priority: 'low'
      },
    ],
  },
  {
    id: 'math3',
    name: 'Pedagogical Issues in Mathematics',
    subject: SubjectName.MATH,
    priority: 'high',
    coverage: 0, // Critical gap identified
    questionCount: 0,
    requiredQuestions: 80,
    gapStatus: 'missing',
    subtopics: [
      {
        id: 'math3-nature',
        name: 'Nature of Mathematics/Logical Thinking',
        questionCount: 15,
        coverage: 0,
        priority: 'high'
      },
      {
        id: 'math3-curriculum',
        name: 'Place of Mathematics in Curriculum',
        questionCount: 12,
        coverage: 0,
        priority: 'high'
      },
      {
        id: 'math3-language',
        name: 'Language of Mathematics',
        questionCount: 10,
        coverage: 0,
        priority: 'high'
      },
      {
        id: 'math3-community',
        name: 'Community Mathematics',
        questionCount: 8,
        coverage: 0,
        priority: 'medium'
      },
      {
        id: 'math3-evaluation',
        name: 'Evaluation through formal and informal methods',
        questionCount: 15,
        coverage: 0,
        priority: 'high'
      },
      {
        id: 'math3-error-analysis',
        name: 'Error analysis and related aspects of learning and teaching',
        questionCount: 12,
        coverage: 0,
        priority: 'high'
      },
      {
        id: 'math3-pedagogy',
        name: 'Diagnostic and Remedial Teaching',
        questionCount: 8,
        coverage: 0,
        priority: 'high'
      },
    ],
  },

  // EVS Topics
  {
    id: 'evs1',
    name: 'Family and Friends (Theme)',
    subject: SubjectName.EVS,
    priority: 'medium',
    coverage: 55,
    questionCount: 28,
    requiredQuestions: 50,
    gapStatus: 'partial',
    subtopics: [
      {
        id: 'evs1-relationships',
        name: 'Relationships sub-theme',
        questionCount: 12,
        coverage: 60,
        priority: 'medium'
      },
      {
        id: 'evs1-work-play',
        name: 'Work and Play sub-theme',
        questionCount: 10,
        coverage: 50,
        priority: 'low'
      },
      {
        id: 'evs1-animals',
        name: 'Animals sub-theme',
        questionCount: 8,
        coverage: 70,
        priority: 'low'
      },
      {
        id: 'evs1-plants',
        name: 'Plants sub-theme',
        questionCount: 8,
        coverage: 60,
        priority: 'low'
      },
      {
        id: 'evs1-themes',
        name: 'General concepts of themes and sub-themes',
        questionCount: 6,
        coverage: 40,
        priority: 'medium'
      },
    ],
  },
  {
    id: 'evs2',
    name: 'Food, Shelter, Water, Travel (Themes)',
    subject: SubjectName.EVS,
    priority: 'medium',
    coverage: 50,
    questionCount: 25,
    requiredQuestions: 50,
    gapStatus: 'partial',
    subtopics: [
      {
        id: 'evs2-food',
        name: 'Food theme',
        questionCount: 12,
        coverage: 55,
        priority: 'medium'
      },
      {
        id: 'evs2-shelter',
        name: 'Shelter theme',
        questionCount: 10,
        coverage: 45,
        priority: 'medium'
      },
      {
        id: 'evs2-water',
        name: 'Water theme',
        questionCount: 8,
        coverage: 60,
        priority: 'low'
      },
      {
        id: 'evs2-travel',
        name: 'Travel theme',
        questionCount: 8,
        coverage: 40,
        priority: 'low'
      },
      {
        id: 'evs2-things-we-do',
        name: 'Things We Make and Do theme',
        questionCount: 6,
        coverage: 50,
        priority: 'low'
      },
    ],
  },
  {
    id: 'evs3',
    name: 'Pedagogical Issues in EVS',
    subject: SubjectName.EVS,
    priority: 'high',
    coverage: 25,
    questionCount: 15,
    requiredQuestions: 60,
    gapStatus: 'missing',
    subtopics: [
      {
        id: 'evs3-concept',
        name: 'Concept and scope of EVS',
        questionCount: 8,
        coverage: 30,
        priority: 'high'
      },
      {
        id: 'evs3-significance',
        name: 'Significance of EVS, integrated EVS',
        questionCount: 10,
        coverage: 20,
        priority: 'high'
      },
      {
        id: 'evs3-principles',
        name: 'Learning Principles',
        questionCount: 12,
        coverage: 25,
        priority: 'high'
      },
      {
        id: 'evs3-activities',
        name: 'Activities and Experimentation/Practical Work',
        questionCount: 15,
        coverage: 15,
        priority: 'high'
      },
      {
        id: 'evs3-discussion',
        name: 'Discussion and Inquiry',
        questionCount: 8,
        coverage: 40,
        priority: 'medium'
      },
      {
        id: 'evs3-cce',
        name: 'CCE in EVS',
        questionCount: 6,
        coverage: 20,
        priority: 'medium'
      },
      {
        id: 'evs3-tlm',
        name: 'Teaching Material/Aids',
        questionCount: 10,
        coverage: 30,
        priority: 'medium'
      },
      {
        id: 'evs3-problems',
        name: 'Problems in teaching EVS',
        questionCount: 8,
        coverage: 35,
        priority: 'medium'
      },
      {
        id: 'evs3-communication',
        name: 'Communication and Pedagogy',
        questionCount: 6,
        coverage: 25,
        priority: 'low'
      },
      {
        id: 'evs3-pedagogy',
        name: 'General Pedagogy',
        questionCount: 8,
        coverage: 20,
        priority: 'high'
      },
    ],
  },

  // Language Topics
  {
    id: 'lang1_1',
    name: 'Language Comprehension',
    subject: SubjectName.LANG1,
    priority: 'high',
    coverage: 75,
    questionCount: 38,
    requiredQuestions: 50,
    gapStatus: 'partial',
    subtopics: [
      {
        id: 'lang1_1-comprehension',
        name: 'Reading unseen passages - comprehension',
        questionCount: 20,
        coverage: 80,
        priority: 'high'
      },
      {
        id: 'lang1_1-inference',
        name: 'Reading unseen passages - inference',
        questionCount: 15,
        coverage: 70,
        priority: 'high'
      },
      {
        id: 'lang1_1-grammar',
        name: 'Grammar and verbal ability from passage',
        questionCount: 15,
        coverage: 75,
        priority: 'medium'
      },
    ],
  },
  {
    id: 'lang1_2',
    name: 'Pedagogy of Language Development',
    subject: SubjectName.LANG1,
    priority: 'high',
    coverage: 40,
    questionCount: 25,
    requiredQuestions: 65,
    gapStatus: 'missing',
    subtopics: [
      {
        id: 'lang1_2-acquisition',
        name: 'Learning and acquisition',
        questionCount: 12,
        coverage: 45,
        priority: 'high'
      },
      {
        id: 'lang1_2-principles',
        name: 'Principles of Language Teaching',
        questionCount: 15,
        coverage: 35,
        priority: 'high'
      },
      {
        id: 'lang1_2-lsrw',
        name: 'Role of listening and speaking; function of language',
        questionCount: 10,
        coverage: 50,
        priority: 'high'
      },
      {
        id: 'lang1_2-grammar',
        name: 'Role of grammar in learning a language',
        questionCount: 8,
        coverage: 40,
        priority: 'medium'
      },
      {
        id: 'lang1_2-diversity',
        name: 'Challenges of teaching language in a diverse classroom',
        questionCount: 12,
        coverage: 25,
        priority: 'high'
      },
      {
        id: 'lang1_2-skills',
        name: 'Language Skills',
        questionCount: 10,
        coverage: 45,
        priority: 'high'
      },
      {
        id: 'lang1_2-evaluation',
        name: 'Evaluating language comprehension and proficiency',
        questionCount: 8,
        coverage: 30,
        priority: 'high'
      },
      {
        id: 'lang1_2-tlm',
        name: 'Teaching-learning materials: Textbook, multi-media materials',
        questionCount: 6,
        coverage: 60,
        priority: 'medium'
      },
      {
        id: 'lang1_2-remedial',
        name: 'Remedial Teaching',
        questionCount: 8,
        coverage: 35,
        priority: 'medium'
      },
      {
        id: 'lang1_2-methods',
        name: 'Teaching Methods and Approaches',
        questionCount: 10,
        coverage: 40,
        priority: 'high'
      },
      {
        id: 'lang1_2-strategies',
        name: 'Teaching Strategies',
        questionCount: 8,
        coverage: 45,
        priority: 'medium'
      },
    ],
  },
  {
    id: 'lang2_1',
    name: 'Comprehension (Hindi)',
    subject: SubjectName.LANG2,
    priority: 'high',
    coverage: 70,
    questionCount: 35,
    requiredQuestions: 50,
    gapStatus: 'partial',
    subtopics: [
      {
        id: 'lang2_1-comprehension',
        name: 'Reading unseen prose passages',
        questionCount: 25,
        coverage: 75,
        priority: 'high'
      },
      {
        id: 'lang2_1-grammar',
        name: 'Grammar and verbal ability from passage (Hindi)',
        questionCount: 15,
        coverage: 65,
        priority: 'medium'
      },
    ],
  },
  {
    id: 'lang2_2',
    name: 'Pedagogy of Language Development (Hindi)',
    subject: SubjectName.LANG2,
    priority: 'high',
    coverage: 35,
    questionCount: 20,
    requiredQuestions: 60,
    gapStatus: 'missing',
    subtopics: [
      {
        id: 'lang2_2-acquisition',
        name: 'Learning and acquisition (Hindi)',
        questionCount: 12,
        coverage: 40,
        priority: 'high'
      },
      {
        id: 'lang2_2-principles',
        name: 'Principles of Language Teaching (Hindi)',
        questionCount: 15,
        coverage: 30,
        priority: 'high'
      },
      {
        id: 'lang2_2-lsrw',
        name: 'Role of listening and speaking; function of language (Hindi)',
        questionCount: 10,
        coverage: 45,
        priority: 'high'
      },
      {
        id: 'lang2_2-grammar',
        name: 'Role of grammar in learning a language (Hindi)',
        questionCount: 8,
        coverage: 35,
        priority: 'medium'
      },
      {
        id: 'lang2_2-diversity',
        name: 'Challenges of teaching language in a diverse classroom (Hindi)',
        questionCount: 12,
        coverage: 20,
        priority: 'high'
      },
      {
        id: 'lang2_2-skills',
        name: 'Language Skills (Hindi)',
        questionCount: 10,
        coverage: 40,
        priority: 'high'
      },
      {
        id: 'lang2_2-evaluation',
        name: 'Evaluating language comprehension and proficiency (Hindi)',
        questionCount: 8,
        coverage: 25,
        priority: 'high'
      },
      {
        id: 'lang2_2-tlm',
        name: 'Teaching-learning materials: Textbook, multi-media materials (Hindi)',
        questionCount: 6,
        coverage: 55,
        priority: 'medium'
      },
      {
        id: 'lang2_2-remedial',
        name: 'Remedial Teaching (Hindi)',
        questionCount: 8,
        coverage: 30,
        priority: 'medium'
      },
    ],
  },
];