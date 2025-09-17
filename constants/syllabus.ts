import { SyllabusSubject, SubjectName } from '../types';

export const SYLLABUS_DATA: SyllabusSubject[] = [
  {
    name: SubjectName.CDP,
    topics: [
      {
        id: 'cdp1',
        name: 'Foundations of Child Development',
        subTopics: [
          { id: 'cdp1-foundations', name: 'Concept of development, principles, influence of Heredity & Environment.' },
          { id: 'cdp1-piaget', name: "Piaget's theory of cognitive development." },
          { id: 'cdp1-kohlberg', name: "Kohlberg's theory of moral development." },
          { id: 'cdp1-vygotsky', name: "Vygotsky's sociocultural theory." },
        ],
      },
      {
        id: 'cdp2',
        name: 'Inclusion and Special Needs',
        subTopics: [
          { id: 'cdp2-concept', name: 'Concept of inclusive education and understanding children with special needs.' },
          { id: 'cdp2-diversity', name: 'Addressing learners from diverse backgrounds.' },
          { id: 'cdp2-sen', name: 'Addressing children with learning difficulties, impairment etc.' },
          { id: 'cdp2-gifted', name: 'Addressing the Talented, Creative, Specially abled Learners.' },
        ],
      },
      {
        id: 'cdp3',
        name: 'Learning, Pedagogy, and Motivation',
        subTopics: [
          {
            id: 'cdp3-learning-process',
            name: 'Basic processes of teaching and learning; children’s strategies of learning.',
          },
          { id: 'cdp3-problem-solving', name: 'Child as a problem solver and a ‘scientific investigator’.' },
          { id: 'cdp3-emotion', name: 'Cognition & Emotions.' },
          { id: 'cdp3-motivation', name: 'Motivation and learning.' },
        ],
      },
      {
        id: 'cdp4',
        name: 'Social and Gender Constructs',
        subTopics: [
          {
            id: 'cdp4-socialization',
            name: 'Socialization processes: Social world & children (Teacher, Parents, Peers).',
          },
          { id: 'cdp4-constructs', name: 'Concepts of child-centered and progressive education.' },
          { id: 'cdp4-critical-perspective', name: 'Critical perspective of the construct of Intelligence.' },
          {
            id: 'cdp4-gender',
            name: 'Gender as a social construct; gender roles, gender-bias and educational practice.',
          },
          { id: 'cdp4-bias', name: 'Gender bias and its implications in the classroom.' },
        ],
      },
    ],
  },
  {
    name: SubjectName.MATH,
    topics: [
      {
        id: 'math1',
        name: 'Geometry, Shapes & Solids',
        subTopics: [
          { id: 'math1-geometry', name: 'Geometry fundamentals' },
          { id: 'math1-shapes', name: 'Shapes & Spatial Understanding' },
          { id: 'math1-solids', name: 'Solids around Us' },
        ],
      },
      {
        id: 'math2',
        name: 'Numbers, Measurement & Data Handling',
        subTopics: [
          { id: 'math2-numbers', name: 'Numbers and operations (Addition, Subtraction, etc.)' },
          { id: 'math2-measurement', name: 'Measurement (Weight, Time, Length)' },
          { id: 'math2-volume', name: 'Volume concepts' },
          { id: 'math2-data', name: 'Data Handling' },
          { id: 'math2-patterns', name: 'Patterns recognition and creation' },
          { id: 'math2-money', name: 'Money and financial literacy' },
        ],
      },
      {
        id: 'math3',
        name: 'Pedagogical Issues in Mathematics',
        subTopics: [
          { id: 'math3-nature', name: 'Nature of Mathematics/Logical Thinking' },
          { id: 'math3-curriculum', name: 'Place of Mathematics in Curriculum' },
          { id: 'math3-language', name: 'Language of Mathematics' },
          { id: 'math3-community', name: 'Community Mathematics' },
          { id: 'math3-evaluation', name: 'Evaluation through formal and informal methods' },
          { id: 'math3-error-analysis', name: 'Error analysis and related aspects of learning and teaching' },
          { id: 'math3-pedagogy', name: 'Diagnostic and Remedial Teaching' },
        ],
      },
    ],
  },
  {
    name: SubjectName.EVS,
    topics: [
      {
        id: 'evs1',
        name: 'Family and Friends (Theme)',
        subTopics: [
          { id: 'evs1-relationships', name: 'Relationships sub-theme' },
          { id: 'evs1-work-play', name: 'Work and Play sub-theme' },
          { id: 'evs1-animals', name: 'Animals sub-theme' },
          { id: 'evs1-plants', name: 'Plants sub-theme' },
          { id: 'evs1-themes', name: 'General concepts of themes and sub-themes' },
        ],
      },
      {
        id: 'evs2',
        name: 'Food, Shelter, Water, Travel (Themes)',
        subTopics: [
          { id: 'evs2-food', name: 'Food theme' },
          { id: 'evs2-shelter', name: 'Shelter theme' },
          { id: 'evs2-water', name: 'Water theme' },
          { id: 'evs2-travel', name: 'Travel theme' },
          { id: 'evs2-things-we-do', name: 'Things We Make and Do theme' },
        ],
      },
      {
        id: 'evs3',
        name: 'Pedagogical Issues in EVS',
        subTopics: [
          { id: 'evs3-concept', name: 'Concept and scope of EVS' },
          { id: 'evs3-significance', name: 'Significance of EVS, integrated EVS' },
          { id: 'evs3-principles', name: 'Learning Principles' },
          { id: 'evs3-activities', name: 'Activities and Experimentation/Practical Work' },
          { id: 'evs3-discussion', name: 'Discussion and Inquiry' },
          { id: 'evs3-cce', name: 'CCE in EVS' },
          { id: 'evs3-tlm', name: 'Teaching Material/Aids' },
          { id: 'evs3-problems', name: 'Problems in teaching EVS' },
          { id: 'evs3-communication', name: 'Communication and Pedagogy' },
          { id: 'evs3-pedagogy', name: 'General Pedagogy' },
        ],
      },
    ],
  },
  {
    name: SubjectName.LANG1,
    topics: [
      {
        id: 'lang1_1',
        name: 'Language Comprehension',
        subTopics: [
          { id: 'lang1_1-comprehension', name: 'Reading unseen passages - comprehension' },
          { id: 'lang1_1-inference', name: 'Reading unseen passages - inference' },
          { id: 'lang1_1-grammar', name: 'Grammar and verbal ability from passage' },
        ],
      },
      {
        id: 'lang1_2',
        name: 'Pedagogy of Language Development',
        subTopics: [
          { id: 'lang1_2-acquisition', name: 'Learning and acquisition' },
          { id: 'lang1_2-principles', name: 'Principles of Language Teaching' },
          { id: 'lang1_2-lsrw', name: 'Role of listening and speaking; function of language' },
          { id: 'lang1_2-grammar', name: 'Role of grammar in learning a language' },
          { id: 'lang1_2-diversity', name: 'Challenges of teaching language in a diverse classroom' },
          { id: 'lang1_2-skills', name: 'Language Skills' },
          { id: 'lang1_2-evaluation', name: 'Evaluating language comprehension and proficiency' },
          { id: 'lang1_2-tlm', name: 'Teaching-learning materials: Textbook, multi-media materials' },
          { id: 'lang1_2-remedial', name: 'Remedial Teaching' },
          { id: 'lang1_2-methods', name: 'Teaching Methods and Approaches' },
          { id: 'lang1_2-strategies', name: 'Teaching Strategies' },
        ],
      },
    ],
  },
  {
    name: SubjectName.LANG2,
    topics: [
      {
        id: 'lang2_1',
        name: 'Comprehension (Hindi)',
        subTopics: [
          { id: 'lang2_1-comprehension', name: 'Reading unseen prose passages' },
          { id: 'lang2_1-grammar', name: 'Grammar and verbal ability from passage (Hindi)' },
        ],
      },
      {
        id: 'lang2_2',
        name: 'Pedagogy of Language Development (Hindi)',
        subTopics: [
          { id: 'lang2_2-acquisition', name: 'Learning and acquisition (Hindi)' },
          { id: 'lang2_2-principles', name: 'Principles of Language Teaching (Hindi)' },
          { id: 'lang2_2-lsrw', name: 'Role of listening and speaking; function of language (Hindi)' },
          { id: 'lang2_2-grammar', name: 'Role of grammar in learning a language (Hindi)' },
          { id: 'lang2_2-diversity', name: 'Challenges of teaching language in a diverse classroom (Hindi)' },
          { id: 'lang2_2-skills', name: 'Language Skills (Hindi)' },
          { id: 'lang2_2-evaluation', name: 'Evaluating language comprehension and proficiency (Hindi)' },
          { id: 'lang2_2-tlm', name: 'Teaching-learning materials: Textbook, multi-media materials (Hindi)' },
          { id: 'lang2_2-remedial', name: 'Remedial Teaching (Hindi)' },
        ],
      },
    ],
  },
];
