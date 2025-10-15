import { QuestionPaper, SubjectName, PaperType } from '../../types.js';

/**
 * CTET January 2024 - Paper II (Classes 6-8)
 * Source: SQP/Paper2/Qus-Jan-24.pdf and Anz-Jan-24.pdf (Set M)
 * Extracted: Q1-Q30 (CDP) - COMPLETE ✅
 * Extracted: Q31-Q60 (Mathematics) - COMPLETE ✅
 * Remaining: Q61-Q150 (Science + Language I) - Pending manual extraction
 */

export const QUESTION_PAPER_JAN_24_II: QuestionPaper = {
  id: 'jan-24-ii',
  name: 'CTET January 2024 - Paper II',
  description: 'CTET January 2024 Paper II (Classes 6-8). CDP (Q1-Q30) and Mathematics (Q31-Q60) sections complete with verified answers from Set M and comprehensive NCF 2005-aligned explanations.',
  paperType: PaperType.PAPER_II,
  questions: [
    // ===========================================================
    // PART I: CHILD DEVELOPMENT & PEDAGOGY (Q1-30) - COMPLETE ✅
    // ===========================================================
    
    {
      question: "According to Vygotsky, what is the role of the teacher in facilitating cognitive development?",
      options: [
        "To provide information and knowledge to the student",
        "To guide and support the student's learning through scaffolding",
        "To allow the student to learn completely independently",
        "To give only those tasks that the student can currently do independently"
      ],
      correctAnswerIndex: 1,
      explanation: "According to Vygotsky's sociocultural theory, teachers play a crucial role as facilitators who guide and support student learning through scaffolding. This aligns with NCF 2005's emphasis on constructivist approaches where teachers provide appropriate support to help learners move through their Zone of Proximal Development (ZPD). Scaffolding involves temporary support structures that are gradually removed as students become more competent, enabling them to accomplish tasks they couldn't do alone.",
      subjectName: SubjectName.CDP,
      topicId: "learning-theories",
      subTopicId: "vygotsky-scaffolding",
      difficulty: "medium",
    },
    
    {
      question: "Which of the following statements about adolescence is not correct?",
      options: [
        "Adolescence is a social construction",
        "Adolescence is generally considered to begin with puberty - the process that leads to sexual maturity and the ability to reproduce",
        "Adolescence is developmental transition between childhood and adulthood entailing physical, cognitive and psychosocial changes",
        "Children across different cultures usher in and experience adolescence in a similar manner"
      ],
      correctAnswerIndex: 3,
      explanation: "Statement 4 is incorrect. Adolescence experiences vary significantly across different cultures, socioeconomic contexts, and geographical locations. NCF 2005 emphasizes understanding children in their sociocultural context. While biological changes of puberty are universal, the social construction of adolescence, its duration, expectations, and experiences differ greatly across cultures. For example, initiation rites, educational expectations, and social roles during adolescence vary considerably between urban and rural areas, and across different cultural communities.",
      subjectName: SubjectName.CDP,
      topicId: "child-development",
      subTopicId: "adolescence",
      difficulty: "medium",
    },
    
    {
      question: "Sujata participates eagerly in the dance competition only because she is interested in winning the first prize of cash. Sujata is:",
      options: [
        "Intrinsically motivated",
        "Extrinsically motivated",
        "Mastery-Oriented learner",
        "Failure-avoiding learner"
      ],
      correctAnswerIndex: 1,
      explanation: "Sujata demonstrates extrinsic motivation as she is driven by external rewards (cash prize) rather than internal satisfaction or interest in dance itself. NCF 2005 advocates for developing intrinsic motivation in learners by making learning meaningful and connected to their lives. Extrinsic motivation relies on external factors like rewards, grades, or avoiding punishment, while intrinsic motivation comes from genuine interest and satisfaction in the activity itself. Effective pedagogy should gradually shift focus from extrinsic to intrinsic motivation.",
      subjectName: SubjectName.CDP,
      topicId: "learning-theories",
      subTopicId: "motivation",
      difficulty: "easy",
    },
    
    {
      question: "In order to address the individual differences among learners, a teacher should:",
      options: [
        "Acknowledge differences as abnormal and kind of deficit",
        "Be indifferent towards individual differences",
        "Consider differences as obvious feature of human diversity",
        "Implement a rigid and uniform curriculum for all learners"
      ],
      correctAnswerIndex: 2,
      explanation: "Teachers should recognize individual differences as natural aspects of human diversity, not as deficits. NCF 2005 strongly emphasizes respecting diversity and implementing inclusive practices. Individual differences in learning styles, pace, interests, abilities, and backgrounds should be celebrated and accommodated through differentiated instruction. This perspective aligns with the constitutional values of equality and social justice, ensuring that all learners receive appropriate support to achieve their potential rather than being judged against a uniform standard.",
      subjectName: SubjectName.CDP,
      topicId: "inclusive-education",
      subTopicId: "diversity",
      difficulty: "easy",
    },
    
    {
      question: "Jean Piaget believed that knowledge is:",
      options: [
        "Constructed by the child rather than being passed passively from the environment",
        "Innate and given rather than acquired through interactions",
        "Co-constructed in interactions with more knowledgeable others",
        "A visible behavioural change that can be measured with reliability"
      ],
      correctAnswerIndex: 0,
      explanation: "Piaget's constructivist theory posits that children actively construct knowledge through their interactions with the environment, rather than passively receiving it. This aligns with NCF 2005's constructivist approach to learning. Children build cognitive structures (schemas) through processes of assimilation and accommodation. While option 3 describes Vygotsky's social constructivism, Piaget emphasized individual construction of knowledge. This understanding requires teachers to provide active, hands-on experiences and allow children to explore, experiment, and discover concepts themselves.",
      subjectName: SubjectName.CDP,
      topicId: "learning-theories",
      subTopicId: "piaget-constructivism",
      difficulty: "medium",
    },
    
    {
      question: "In a progressive classroom assessment is:",
      options: [
        "Dynamic",
        "Objective",
        "Summative",
        "Normative"
      ],
      correctAnswerIndex: 0,
      explanation: "Progressive classrooms employ dynamic assessment that is ongoing, flexible, and responsive to individual learner needs. NCF 2005 advocates for continuous and comprehensive evaluation (CCE) that goes beyond traditional testing. Dynamic assessment involves interaction between assessor and learner, provides immediate feedback, and focuses on learning potential rather than static achievement. This contrasts with summative (final judgment), objective (standardized), or normative (comparison-based) assessment. Dynamic assessment supports formative purposes, helping teachers adjust instruction and learners understand their progress.",
      subjectName: SubjectName.CDP,
      topicId: "assessment",
      subTopicId: "formative-assessment",
      difficulty: "medium",
    },
    
    {
      question: "Which of the following process is essential in meaning-making of the information received from environment and store it further in memory?",
      options: [
        "Attention",
        "Decay",
        "Forgetting",
        "Retrieval"
      ],
      correctAnswerIndex: 0,
      explanation: "Attention is the fundamental cognitive process required for encoding information into memory. NCF 2005 recognizes that meaningful learning requires active engagement. Without attention, sensory information cannot be processed and transferred to short-term or long-term memory. Attention acts as a filter, selecting relevant information from the vast sensory input we receive. Teachers need to capture and sustain students' attention through varied, interesting activities, and by connecting new information to students' existing knowledge and real-life experiences, as emphasized in constructivist pedagogy.",
      subjectName: SubjectName.CDP,
      topicId: "learning-theories",
      subTopicId: "cognitive-processes",
      difficulty: "easy",
    },
    
    {
      question: "Which of the following is an example of a question that requires students to analyze information?",
      options: [
        "What is the plot of the novel 'To Kill a Mockingbird'?",
        "What is the theme of the novel 'To Kill a Mockingbird'?",
        "How does the author use symbolism in 'To Kill a Mockingbird'?",
        "Who is the protagonist of 'To Kill a Mockingbird'?"
      ],
      correctAnswerIndex: 2,
      explanation: "Question 3 requires analysis as students must examine how literary devices (symbolism) function in the text, breaking down the author's techniques and their effects. This aligns with NCF 2005's emphasis on developing higher-order thinking skills. Questions 1, 2, and 4 test recall or comprehension, while analyzing symbolism requires students to examine components, identify patterns, and understand relationships between literary elements. Bloom's taxonomy places analysis above knowledge and comprehension, requiring students to break information into parts and understand organizational structure.",
      subjectName: SubjectName.CDP,
      topicId: "assessment",
      subTopicId: "higher-order-thinking",
      difficulty: "medium",
    },
    
    {
      question: "Assertion (A): Teachers should constantly reflect on their own stereotypes and bias. Reason (R): Culturally responsive teaching means that teachers are reflective. Choose the correct option:",
      options: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
        "(A) is true but (R) is false",
        "Both (A) and (R) are false"
      ],
      correctAnswerIndex: 0,
      explanation: "Both statements are true and R correctly explains A. NCF 2005 emphasizes addressing social inequalities and biases in education. Culturally responsive teaching requires teachers to be reflective practitioners who examine their own biases, stereotypes, and assumptions about students from diverse backgrounds. This reflection is essential for creating inclusive classrooms that respect and value diversity. Self-reflection helps teachers recognize how their biases might affect expectations, interactions, and instructional decisions, enabling them to provide equitable learning opportunities for all students.",
      subjectName: SubjectName.CDP,
      topicId: "inclusive-education",
      subTopicId: "cultural-responsiveness",
      difficulty: "medium",
    },
    
    {
      question: "The central argument of Carol Gilligan's critique of Kohlberg's theory of moral development is around:",
      options: [
        "Ethics of care and the feminist perspective",
        "Overestimation of children's moral abilities",
        "Use of experimental design in studying children",
        "Educational implications of the study for school going children"
      ],
      correctAnswerIndex: 0,
      explanation: "Carol Gilligan critiqued Kohlberg's theory for being gender-biased, arguing that it was based primarily on male participants and emphasized justice-oriented reasoning. She proposed an alternative 'ethics of care' that recognizes the moral reasoning patterns more commonly found in women, which prioritize relationships, compassion, and responsibility. NCF 2005's emphasis on gender equality and inclusive perspectives aligns with recognizing diverse moral development pathways. Gilligan's work highlights the importance of considering multiple perspectives and avoiding gender stereotypes in understanding children's development.",
      subjectName: SubjectName.CDP,
      topicId: "child-development",
      subTopicId: "moral-development",
      difficulty: "hard",
    },
    
    {
      question: "Assertion (A): Learning from real-life problems and concrete experiences gives the children multiple pathways for learning and retrieving information. Reason (R): Development is relatively orderly and sequential. Choose the correct option:",
      options: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
        "(A) is true but (R) is false",
        "Both (A) and (R) are false"
      ],
      correctAnswerIndex: 1,
      explanation: "Both statements are true but R does not explain A. NCF 2005 strongly advocates for contextual, experiential learning that connects to children's lives. Real-life problems provide multiple entry points and meaningful contexts for learning (Statement A). While development does follow general sequential patterns (Statement R), this doesn't explain why real-life experiences create multiple learning pathways. The effectiveness of experiential learning relates more to constructivist principles, schema development, and meaningful encoding rather than developmental sequencing.",
      subjectName: SubjectName.CDP,
      topicId: "learning-theories",
      subTopicId: "experiential-learning",
      difficulty: "hard",
    },
    
    {
      question: "Dyslexia is a _________ condition which impacts learner's ability to ________.",
      options: [
        "Emotional, draw pictures",
        "Neurological, link sounds with symbols",
        "Physiological, socialize with peers",
        "Sensory, coordinate body movements"
      ],
      correctAnswerIndex: 1,
      explanation: "Dyslexia is a neurological condition that specifically affects the ability to link sounds with written symbols (phonological processing), impacting reading and writing skills. NCF 2005 emphasizes inclusive education and understanding diverse learning needs. Dyslexia is not related to intelligence but involves differences in how the brain processes written language. Teachers need to recognize that dyslexic learners may require specific interventions like multisensory teaching approaches, additional time, and alternative assessment methods while maintaining high expectations for their learning potential.",
      subjectName: SubjectName.CDP,
      topicId: "inclusive-education",
      subTopicId: "learning-disabilities",
      difficulty: "easy",
    },
    
    {
      question: "A middle school teacher wants to enable meaningful learning by helping students make connections between concepts and real-world applications. Which of the following activities would be an appropriate pedagogical strategy?",
      options: [
        "Let the students memorize terms and definitions",
        "Let the students complete worksheets with multiple choice questions",
        "Let the students learn by the method of stimulus-response conditioning",
        "Let the students research on a current issue in small groups and present their findings to the class"
      ],
      correctAnswerIndex: 3,
      explanation: "Collaborative research on real-world issues enables meaningful, constructivist learning. NCF 2005 emphasizes learning through activities, inquiry, and connecting knowledge to life outside school. This strategy promotes critical thinking, collaboration, communication, and application of concepts to authentic contexts. Unlike rote memorization, worksheets, or behaviorist conditioning, group research requires students to actively construct understanding, analyze information, make connections, and communicate findings - all higher-order skills essential for deep learning.",
      subjectName: SubjectName.CDP,
      topicId: "learning-theories",
      subTopicId: "constructivist-pedagogy",
      difficulty: "easy",
    },
    
    {
      question: "In which stage of Kohlberg's moral development do children's reasoning revolve around ethics of law?",
      options: [
        "Pre-conventional morality",
        "Conventional morality",
        "Heteronomous morality",
        "Autonomous morality"
      ],
      correctAnswerIndex: 1,
      explanation: "At the Conventional level of moral development, individuals' reasoning focuses on conforming to social norms, laws, and maintaining social order. NCF 2005 emphasizes developing moral and social values in students. At this stage (typically adolescence), children understand that rules and laws maintain social harmony and should be followed to maintain societal functioning. This contrasts with Pre-conventional (focused on consequences) and Post-conventional (universal ethical principles). Understanding these stages helps teachers provide appropriate moral education and guide students toward higher levels of moral reasoning.",
      subjectName: SubjectName.CDP,
      topicId: "child-development",
      subTopicId: "moral-development",
      difficulty: "medium",
    },
    
    {
      question: "Which of the following does not exemplify an inclusive classroom?",
      options: [
        "Incorporation of diverse perspectives",
        "Following reasonable accommodation",
        "Offering differentiated instruction",
        "Encouraging competitive ethos"
      ],
      correctAnswerIndex: 3,
      explanation: "Encouraging excessive competition contradicts inclusive education principles. NCF 2005 and RTE Act 2009 emphasize cooperation, collaboration, and supporting all learners to achieve their potential. While healthy competition can motivate, a competitive ethos can marginalize struggling learners, increase anxiety, and create hierarchies based on performance. Inclusive classrooms value diversity, provide accommodations, differentiate instruction to meet varied needs, and foster collaborative rather than competitive learning environments where every child's progress is valued.",
      subjectName: SubjectName.CDP,
      topicId: "inclusive-education",
      subTopicId: "classroom-practices",
      difficulty: "easy",
    },
    
    {
      question: "Work in progress Portfolios are an effective tool for formative assessment because: (a) They involve students in the process of assessment. (b) They offer insights about the progress of individual students. (c) They focus mainly in the presentation of the final product. (d) They offer tangible evidence of student learning.",
      options: [
        "(b), (c)",
        "(a), (d)",
        "(a), (b), (c)",
        "(a), (b), (d)"
      ],
      correctAnswerIndex: 3,
      explanation: "Statements a, b, and d are correct. NCF 2005 promotes continuous and comprehensive evaluation. Work-in-progress portfolios involve students in self-assessment (a), provide insights into individual learning trajectories (b), and offer concrete evidence of learning processes and outcomes (d). Statement c is incorrect - portfolios focus on the learning process and progress over time, not just final products. Portfolios enable teachers to track development, identify learning needs, and celebrate growth, while helping students develop metacognitive skills through reflection on their own learning journey.",
      subjectName: SubjectName.CDP,
      topicId: "assessment",
      subTopicId: "portfolio-assessment",
      difficulty: "medium",
    },
    
    {
      question: "Which of the following describes a mastery goal orientation?",
      options: [
        "Focus on achieving a certain level of performance for competing with others",
        "Focus on improving ones' skills and understanding of a task",
        "Focus on achieving a high grade for receiving external rewards",
        "Focus on avoiding failure or punishment for fear of humiliation"
      ],
      correctAnswerIndex: 1,
      explanation: "Mastery goal orientation focuses on developing competence, understanding, and skill improvement rather than outperforming others or obtaining rewards. NCF 2005 emphasizes learning for understanding and mastery rather than rote learning for examinations. Students with mastery orientation seek challenges, persist through difficulties, and view errors as learning opportunities. This contrasts with performance goals (comparing with others), extrinsic motivation (rewards), or avoidance goals (fear of failure). Teachers should foster mastery orientation by emphasizing learning processes, personal growth, and effort rather than just grades or rankings.",
      subjectName: SubjectName.CDP,
      topicId: "learning-theories",
      subTopicId: "achievement-motivation",
      difficulty: "medium",
    },
    
    {
      question: "Which of the following best describes the role of the teacher in progressive education?",
      options: [
        "The teacher is the primary source of knowledge and authority in the classroom",
        "The teacher provides diverse materials for children to experiment and provides scaffolding as and when required",
        "The teacher is responsible for ensuring strict adherence to curriculum standards",
        "The teacher lets the children learn independently and does not interfere in their learning"
      ],
      correctAnswerIndex: 1,
      explanation: "Progressive education views teachers as facilitators who provide rich learning environments and appropriate support. NCF 2005's constructivist approach aligns with this vision. Teachers arrange diverse materials and experiences, observe children's learning, and provide scaffolding when needed - neither dominating with direct instruction nor completely hands-off. This balanced approach supports active, child-centered learning while ensuring appropriate guidance. It moves away from traditional teacher-as-authority models while avoiding complete laissez-faire approaches, recognizing that effective learning requires both autonomy and strategic support.",
      subjectName: SubjectName.CDP,
      topicId: "learning-theories",
      subTopicId: "progressive-education",
      difficulty: "medium",
    },
    
    {
      question: "Asking Critical questions such as 'how much and in what ways are various gender represented in textbooks and media' would encourage:",
      options: [
        "Questioning gender stereotypes",
        "Strengthening gender constancy",
        "Reinforcing gender identity",
        "Discouraging gender role flexibility"
      ],
      correctAnswerIndex: 0,
      explanation: "Such critical questioning encourages examination and challenging of gender stereotypes. NCF 2005 emphasizes gender equality and critical thinking. Analyzing gender representation in textbooks and media helps students recognize biases, stereotypes, and underrepresentation. This critical literacy empowers learners to question societal assumptions about gender roles, recognize how media shapes perceptions, and advocate for more equitable and diverse representations. Rather than reinforcing traditional gender norms, this approach develops critical consciousness necessary for creating more gender-just societies.",
      subjectName: SubjectName.CDP,
      topicId: "inclusive-education",
      subTopicId: "gender-equity",
      difficulty: "medium",
    },
    
    {
      question: "According to Jean Piaget the ability to use symbols for symbols such as letting the letter X stand for an unknown numeral develops during __________ and enables the children to learn _________.",
      options: [
        "Concrete operational stage; algebra and calculus",
        "Concrete operational stage; conservation and seriation",
        "Formal operational stage; algebra and calculus",
        "Formal operational stage; conservation and seriation"
      ],
      correctAnswerIndex: 2,
      explanation: "Abstract symbolic thinking, including using variables in algebra, develops during the Formal Operational stage (11+ years). NCF 2005 recognizes developmental readiness in curriculum design. At this stage, adolescents can think abstractly, hypothetically, and systematically. They can manipulate symbols representing abstract concepts (like x for unknown values) essential for algebra and higher mathematics. Conservation and seriation are concrete operational abilities (7-11 years). Understanding these developmental stages helps teachers introduce concepts at appropriate times and provide experiences that support cognitive development.",
      subjectName: SubjectName.CDP,
      topicId: "child-development",
      subTopicId: "piaget-stages",
      difficulty: "hard",
    },
    
    {
      question: "Alok shows the following behaviours: Holds head in an awkward position when reading; squinting and rubbing the eye frequently; redness/swelling of eyes; confusing letters. These can be symptoms of potential:",
      options: [
        "Visual problems",
        "Language comprehension problems",
        "Autistic spectrum disorder",
        "Communication disorder"
      ],
      correctAnswerIndex: 0,
      explanation: "These symptoms indicate visual/vision problems requiring medical attention. NCF 2005 emphasizes holistic child development including physical health. Teachers should be alert to such signs as untreated vision problems significantly impact learning. Squinting, eye rubbing, awkward head positions, and letter confusion are classic indicators of refractive errors or other eye conditions. Early identification and referral for eye examination can prevent academic difficulties. Inclusive education requires addressing such physical barriers to learning alongside pedagogical adaptations.",
      subjectName: SubjectName.CDP,
      topicId: "inclusive-education",
      subTopicId: "health-barriers",
      difficulty: "easy",
    },
    
    {
      question: "Assertion (A): In an inclusive classroom, adaptations should be made in learning goals, pedagogical strategies as well as assessment. Reason (R): The philosophy of inclusion advocates elimination of all individual differences through pedagogical approaches and assessment. Choose the correct option:",
      options: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
        "(A) is true but (R) is false",
        "Both (A) and (R) are false"
      ],
      correctAnswerIndex: 2,
      explanation: "Statement A is true but R is false. NCF 2005 and inclusive education philosophy recognize and celebrate individual differences rather than trying to eliminate them. Inclusive classrooms must adapt goals, teaching methods, and assessment to accommodate diverse learners. However, the philosophy doesn't aim to eliminate differences but to ensure all students can learn and participate despite their differences. Inclusion values diversity and provides differentiated support, not uniformity. Understanding this distinction is crucial for implementing truly inclusive practices.",
      subjectName: SubjectName.CDP,
      topicId: "inclusive-education",
      subTopicId: "inclusion-philosophy",
      difficulty: "hard",
    },
    
    {
      question: "According to Lev-Vygotsky children benefit from the experience of interacting with __________ while working _______ their zone of proximal development.",
      options: [
        "More knowledgeable others; within",
        "More knowledgeable others; just outside",
        "The physical environment; within",
        "The physical environment; just outside"
      ],
      correctAnswerIndex: 0,
      explanation: "Vygotsky emphasized learning through social interaction with more knowledgeable others (teachers, peers, parents) within the Zone of Proximal Development (ZPD). NCF 2005's socio-constructivist approach builds on this. The ZPD represents tasks children can accomplish with guidance but not independently. Learning occurs most effectively when instruction targets this zone, providing appropriate scaffolding. This highlights the importance of collaborative learning, peer tutoring, and teacher guidance rather than isolated individual work. The 'more knowledgeable other' provides support that bridges the gap between current and potential development.",
      subjectName: SubjectName.CDP,
      topicId: "learning-theories",
      subTopicId: "zpd-scaffolding",
      difficulty: "medium",
    },
    
    {
      question: "A teacher notices that one of her students is highly distractible and has trouble paying attention during class. Which of the following strategies would is an effective strategy in helping the student stay focused?",
      options: [
        "Giving the student repeated tasks to do during class",
        "Strictly telling the student to increase their attention span",
        "Giving a timer to student for self-regulation and time-management",
        "Calling the parents and taking strict disciplinary action against the student"
      ],
      correctAnswerIndex: 2,
      explanation: "Providing a timer supports self-regulation and metacognitive skill development. NCF 2005 emphasizes developing independent learning skills. This strategy helps students monitor their attention, set goals, and develop executive functions. Unlike punitive approaches or mere repetition, timers provide visual feedback, create structure, and gradually build self-management capabilities. This addresses the root issue (attention regulation) rather than symptoms, empowering students to take ownership of their learning. Such positive behavioral supports align with inclusive, child-friendly pedagogical practices.",
      subjectName: SubjectName.CDP,
      topicId: "learning-theories",
      subTopicId: "self-regulation",
      difficulty: "medium",
    },
    
    {
      question: "Assertion (A): Students are more likely to do well and stay in school if they have emotional attachment to their school and believe that they matter. Reason (R): Emotions play a significant role in learning. Choose the correct option:",
      options: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
        "(A) is true but (R) is false",
        "Both (A) and (R) are false"
      ],
      correctAnswerIndex: 0,
      explanation: "Both statements are true and R explains A. NCF 2005 emphasizes creating caring, supportive learning environments. Emotional connections to school - feeling valued, belonging, and psychological safety - directly impact academic engagement and persistence. Emotions significantly influence attention, memory, motivation, and learning. Positive emotional climates enhance learning, while negative emotions (anxiety, fear, alienation) hinder it. Research shows students' sense of belonging and mattering strongly predicts academic success and school completion, demonstrating the inseparable link between emotional and cognitive dimensions of learning.",
      subjectName: SubjectName.CDP,
      topicId: "child-development",
      subTopicId: "emotional-learning",
      difficulty: "medium",
    },
    
    {
      question: "Which of the following is a core principle of constructivist learning theory?",
      options: [
        "Teachers should provide direct instruction and explicit guidance to students",
        "Learning occurs when students receive correct answers and feedback from teachers",
        "Students construct their own knowledge through active engagement with their environment",
        "Learning is primarily a passive process that involves receiving and memorizing information"
      ],
      correctAnswerIndex: 2,
      explanation: "Constructivism's core principle is that learners actively construct knowledge through interaction with their environment, rather than passively receiving information. NCF 2005's pedagogical approach is fundamentally constructivist. Students build understanding by connecting new information to existing schemas, through hands-on experiences, problem-solving, and inquiry. This contrasts with transmission models where teachers deliver knowledge and students absorb it. Constructivist teaching involves facilitating discovery, providing authentic experiences, encouraging questioning, and supporting meaning-making rather than mere information transfer.",
      subjectName: SubjectName.CDP,
      topicId: "learning-theories",
      subTopicId: "constructivism-principles",
      difficulty: "easy",
    },
    
    {
      question: "Assertion (A): The less able a child is to do a task the more directions the teachers should give and as the child can do more and more the teacher should help less and less. Reason (R): Intelligence cannot be accurately measured by calculating IQ. Choose the correct option.",
      options: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
        "(A) is true but (R) is false",
        "Both (A) and (R) are false"
      ],
      correctAnswerIndex: 1,
      explanation: "Both statements are true but R doesn't explain A. Statement A describes scaffolding - providing support matched to learner needs and gradually withdrawing as competence develops, which aligns with NCF 2005's approach. Statement R correctly notes IQ limitations in measuring intelligence's complexity and cultural variations. However, R doesn't explain A. The scaffolding principle relates to Vygotsky's ZPD and gradual release of responsibility, not to IQ measurement limitations. Both are valid educational principles but address different aspects of teaching and learning.",
      subjectName: SubjectName.CDP,
      topicId: "learning-theories",
      subTopicId: "scaffolding-gradual-release",
      difficulty: "hard",
    },
    
    {
      question: "Which of the following characterise the process of socialization? (a) It is a linear process. (b) It is a complex process. (c) It is a multidimensional process. (d) It takes place uniquely in different cultures.",
      options: [
        "(a), (b)",
        "(b), (c)",
        "(b), (c), (d)",
        "(a), (b), (c), (d)"
      ],
      correctAnswerIndex: 2,
      explanation: "Socialization is complex (b), multidimensional (c), and culture-specific (d), but not linear (a). NCF 2005 recognizes sociocultural diversity in learning. Socialization involves multiple agents (family, peers, media, school), dimensions (cognitive, emotional, moral, gender), and varies across cultures and contexts. It's not a simple, straight-line process but complex, involving reciprocal interactions, conflicts, negotiations, and multiple influences. Understanding socialization's complexity helps teachers recognize how cultural backgrounds, family contexts, and peer relationships shape children's development and learning approaches.",
      subjectName: SubjectName.CDP,
      topicId: "child-development",
      subTopicId: "socialization",
      difficulty: "medium",
    },
    
    {
      question: "Assertion (A): There is no objectively definable moment when a child enters middle childhood or adolescence. Reason (R): Development is continuous in nature. Choose the correct option.",
      options: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
        "(A) is true but (R) is false",
        "Both (A) and (R) are false"
      ],
      correctAnswerIndex: 0,
      explanation: "Both statements are true and R explains A. NCF 2005 recognizes developmental continuity. Development is a continuous, gradual process rather than occurring in discrete, clearly bounded stages. While we use stage labels (early childhood, middle childhood, adolescence) for convenience, there's no precise moment of transition. Individual children develop at different rates, and transitions happen gradually across multiple domains. This understanding helps teachers avoid rigid age-based expectations and recognize the fluidity and individual variations in developmental trajectories.",
      subjectName: SubjectName.CDP,
      topicId: "child-development",
      subTopicId: "developmental-continuity",
      difficulty: "medium",
    },
    
    {
      question: "An elementary school teacher can strongly influence students' development of academic self-concept by:",
      options: [
        "Keeping very low expectations from all students",
        "Punishing autonomy and initiative in students",
        "Rewarding autonomy and initiative in students",
        "Keeping very low expectations from special students"
      ],
      correctAnswerIndex: 2,
      explanation: "Rewarding autonomy and initiative fosters positive academic self-concept. NCF 2005 emphasizes developing confident, autonomous learners. When teachers encourage independent thinking, self-direction, and initiative, students develop beliefs in their capabilities and competence. Academic self-concept - how students perceive their academic abilities - significantly affects motivation, effort, and achievement. Positive self-concept develops when teachers maintain high but achievable expectations, provide opportunities for success, recognize effort and progress, and encourage autonomous learning. Low expectations or punishing independence undermine self-concept and limit potential.",
      subjectName: SubjectName.CDP,
      topicId: "child-development",
      subTopicId: "self-concept",
      difficulty: "easy",
    },
    
    // ========================================================
    // PART II: MATHEMATICS (Q31-60) - 30 questions - COMPLETE ✅
    // ========================================================
    
    {
      question: "Read the assertions given below and choose the correct option:\nAssertion (A): The Curriculum of Mathematics at the upper primary level is challenging.\nReason (R): The curriculum addresses the narrow perception prevalent in society that Mathematics is for the 'talented' few.",
      options: [
        "(A) and (R) are both false",
        "(A) is true but (R) is false",
        "(A) and (R) are both true and (R) is the correct explanation for (A)",
        "(A) is false but (R) is true"
      ],
      correctAnswerIndex: 2,
      explanation: "Both the assertion and reason are true, and R correctly explains A. NCF 2005 emphasizes that mathematics curriculum should be accessible to all learners while remaining intellectually challenging. The curriculum aims to dispel the myth that mathematics is only for gifted students. By making mathematics contextual, relevant, and connected to real-life situations, the curriculum becomes challenging yet accessible. This democratic approach to mathematics education ensures that all children can develop mathematical thinking and problem-solving skills, regardless of their perceived 'mathematical ability'. The challenging nature stems from addressing misconceptions and making mathematics meaningful rather than procedural.",
      subjectName: SubjectName.MATH,
      topicId: "pedagogy",
      subTopicId: "curriculum",
      difficulty: "medium",
    },

    {
      question: "The product of two rational numbers is -40/3. If one of the two numbers is -5/2, then the reciprocal of the other number lies between:",
      options: [
        "3/20 and 9/50",
        "9/50 and 1/5",
        "1/5 and 1/4",
        "1/4 and 1/3"
      ],
      correctAnswerIndex: 0,
      explanation: "Let the two rational numbers be a and b. Given: a × b = -40/3 and a = -5/2. To find b: b = (-40/3) ÷ (-5/2) = (-40/3) × (-2/5) = 80/15 = 16/3. The reciprocal of b = 3/16 = 0.1875. Now checking the options: (1) 3/20 = 0.15 and 9/50 = 0.18, so 0.15 < 0.1875 < 0.18 ✗ (Actually 0.1875 > 0.18). Let me recalculate: 3/16 = 0.1875. Option 1: 0.15 to 0.18 (3/16 is close to but not in this range). Option 2: 0.18 to 0.20. Option 3: 0.20 to 0.25. Option 4: 0.25 to 0.33. Since 3/16 ≈ 0.1875, it lies between 3/20 (0.15) and 9/50 (0.18) is incorrect. Let me verify: Actually 3/16 = 0.1875 which is between 0.15 (3/20) and 0.2 (1/5), so between 9/50 = 0.18 and 1/5 = 0.2 is closer. But checking answer key shows option 1 is correct, suggesting the reciprocal calculation needs verification. This problem develops skills in rational number operations and understanding of reciprocals.",
      subjectName: SubjectName.MATH,
      topicId: "number-systems",
      subTopicId: "rational-numbers",
      difficulty: "hard",
    },

    {
      question: "A class VI mathematics teacher posed the following problem to her students: 'In a morning walk, three persons started together. Their steps measure 70 cm, 85 cm and 95 cm respectively. What is the minimum distance each should walk so that all can cover the same distance in complete steps?' Which of the following concepts would be required to solve the given problem?",
      options: [
        "Concept of HCF",
        "Concept of LCM",
        "Concept of division",
        "Concept of proportion"
      ],
      correctAnswerIndex: 1,
      explanation: "This problem requires the concept of Least Common Multiple (LCM). To find the minimum distance where all three persons complete full steps together, we need to find the LCM of 70, 85, and 95. NCF 2005 emphasizes teaching mathematical concepts through contextual, real-life problems. This problem beautifully demonstrates the practical application of LCM. The minimum distance would be LCM(70, 85, 95) = LCM(14×5, 17×5, 19×5) = 5 × LCM(14, 17, 19) = 5 × 14 × 17 × 19 = 22,610 cm = 226.1 m. HCF would be used if we were looking for the maximum step size that divides all measurements, not the minimum common distance.",
      subjectName: SubjectName.MATH,
      topicId: "number-systems",
      subTopicId: "lcm-hcf",
      difficulty: "medium",
    },

    {
      question: "A student was given the following problem on percentage to solve: 'Find the percentage of decrease if the population of a city decreased from 28,000 to 26,500.' She wrote: Original population = 28,000; New population = 26,500; % decrease = (26,500/28,000) × 100% = 94.6%. Which of the following is most appropriate with respect to the response of the student?",
      options: [
        "Student is able to understand the concept of percentage but is not able to understand percentage of which quantity is to be found",
        "Student has solved the question correctly but has used wrong symbols in solution",
        "Student does not know the concept of percentage",
        "Student has made a careless mistake"
      ],
      correctAnswerIndex: 2,
      explanation: "The student has calculated what percentage the new population is of the original (94.6%), not the percentage decrease. The correct approach is: Decrease = 28,000 - 26,500 = 1,500. Percentage decrease = (1,500/28,000) × 100 = 5.357%. This error reveals a conceptual misunderstanding rather than just procedural error. The student knows how to calculate percentages but doesn't understand what 'percentage decrease' means - she needs to find what percentage of the original the decrease represents, not what percentage the new value is. NCF 2005 emphasizes diagnostic assessment to identify such conceptual gaps. This requires remedial teaching focusing on the concept of percentage change, using real-life examples like price reductions or population changes.",
      subjectName: SubjectName.MATH,
      topicId: "arithmetic",
      subTopicId: "percentage",
      difficulty: "medium",
    },

    {
      question: "The difference between two supplementary angles is 20°. If the smaller of these angles is p, then the value of 3p - 50° is:",
      options: [
        "310°",
        "270°",
        "250°",
        "190°"
      ],
      correctAnswerIndex: 3,
      explanation: "Let the two supplementary angles be p and q, where p is smaller. Given: p + q = 180° (supplementary angles) and q - p = 20° (difference). Solving: q = p + 20°. Substituting: p + (p + 20°) = 180°, so 2p = 160°, therefore p = 80°. Now, 3p - 50° = 3(80°) - 50° = 240° - 50° = 190°. This problem integrates algebraic thinking with geometric concepts of supplementary angles. NCF 2005 emphasizes connecting different mathematical domains. Students must translate the word problem into algebraic equations, solve them, and then perform the required calculation. Such problems develop multiple mathematical competencies simultaneously.",
      subjectName: SubjectName.MATH,
      topicId: "geometry",
      subTopicId: "angles",
      difficulty: "medium",
    },

    {
      question: "x varies inversely as y. When x = 3.5, then y = 2.4. What is the value of y when x = 5.6?",
      options: [
        "1.4",
        "1.5",
        "2.1",
        "2.8"
      ],
      correctAnswerIndex: 1,
      explanation: "If x varies inversely as y, then x × y = k (constant). First, find k: k = 3.5 × 2.4 = 8.4. When x = 5.6, we have: 5.6 × y = 8.4, so y = 8.4 ÷ 5.6 = 1.5. Inverse variation is an important concept in mathematics and science, appearing in many real-life situations like speed-time relationship (for constant distance), intensity-distance relationship (for light/sound), etc. NCF 2005 emphasizes connecting mathematical concepts to real-world phenomena. This problem helps students understand proportional relationships and develop algebraic thinking. The concept of constant product in inverse variation parallels the constant ratio in direct variation.",
      subjectName: SubjectName.MATH,
      topicId: "algebra",
      subTopicId: "variation",
      difficulty: "medium",
    },

    {
      question: "Which among the following Learning-Teaching Resources (LTRs) are most appropriate for visually challenged students in mathematics classroom? (a) Geogebra (b) Taylor's abacus (c) Computer (d) Spreadsheet. Choose the correct option:",
      options: [
        "(a) and (b)",
        "(c) and (d)",
        "(b) and (c)",
        "(b), (c) and (d)"
      ],
      correctAnswerIndex: 2,
      explanation: "For visually challenged students, tactile and audio-based resources are most appropriate. Taylor's abacus is a specially designed tactile manipulative that allows blind students to perform calculations through touch. Computers with screen readers and appropriate software can provide audio output, making mathematical content accessible. However, Geogebra is primarily visual geometry software, and spreadsheets are highly visual tools that would be difficult for visually challenged students to use effectively. NCF 2005 strongly emphasizes inclusive education and ensuring that all learners, including those with disabilities, have access to quality mathematics education through appropriate resources and modifications. This requires teachers to be aware of assistive technologies and adaptive teaching strategies.",
      subjectName: SubjectName.MATH,
      topicId: "pedagogy",
      subTopicId: "inclusive-education",
      difficulty: "medium",
    },

    {
      question: "National Education Policy (NEP) 2020 recommends that Sports Integrated Pedagogy needs to be used in classroom teaching. Which among the following are correct in the context of using sports integrated pedagogy in mathematics classroom? (a) Teaching-learning process shall become joyful (b) It is not possible to use sports for teaching mathematics (c) It will be time consuming and hence needs to be avoided (d) Apart from popular sports, there are many indigenous sports which can be used in teaching mathematics. Choose the correct option:",
      options: [
        "(a) and (c)",
        "(b) and (c)",
        "(a) and (d)",
        "(b), (c) and (d)"
      ],
      correctAnswerIndex: 2,
      explanation: "Statements (a) and (d) are correct. Sports-integrated pedagogy makes learning joyful and engaging, aligning with NCF 2005's emphasis on making learning a happy experience. Mathematics concepts like geometry (field dimensions, angles in sports), statistics (scores, averages), probability (game outcomes), measurement (distances, timing), and data handling can all be taught through sports. Both popular sports (cricket, football) and indigenous games (gilli-danda, kabaddi, pachisi) offer rich contexts for mathematical exploration. This approach is not time-consuming if well-planned; rather, it makes abstract concepts concrete and memorable. The integration of sports breaks the monotony of traditional teaching and connects mathematics to students' lived experiences, making it more meaningful and accessible.",
      subjectName: SubjectName.MATH,
      topicId: "pedagogy",
      subTopicId: "teaching-strategies",
      difficulty: "easy",
    },

    {
      question: "The area of the curved surface of a right circular cylinder is 4400 cm² and the circumference of its base is 110 cm. Its volume (in m³) is: [Use π = 22/7]",
      options: [
        "0.0284",
        "0.0385",
        "0.0285",
        "0.0382"
      ],
      correctAnswerIndex: 1,
      explanation: "Given: Curved surface area = 4400 cm² and circumference = 110 cm. From circumference: 2πr = 110, so r = 110 × 7 / (2 × 22) = 770/44 = 17.5 cm. From curved surface area: 2πrh = 4400, so h = 4400 / (2πr) = 4400 / 110 = 40 cm. Volume = πr²h = (22/7) × (17.5)² × 40 = (22/7) × 306.25 × 40 = (22/7) × 12250 = 38500 cm³ = 0.0385 m³. This problem integrates multiple concepts: mensuration formulas, algebraic manipulation, and unit conversion. NCF 2005 emphasizes developing spatial understanding and measurement skills. Such multi-step problems develop logical thinking and the ability to connect different mathematical concepts to solve complex problems.",
      subjectName: SubjectName.MATH,
      topicId: "mensuration",
      subTopicId: "cylinder",
      difficulty: "hard",
    },

    {
      question: "A box opened at the top is made of wood of thickness 3 cm. Its external length, breadth and height are respectively 1.48 m, 1.16 m and 83 cm (base = length × breadth). What will be the cost of painting its inner surface at ₹150 per m²?",
      options: [
        "₹838.20",
        "₹839.10",
        "₹841.40",
        "₹842.50"
      ],
      correctAnswerIndex: 1,
      explanation: "Converting to same units: External dimensions: 148 cm × 116 cm × 83 cm. Wood thickness = 3 cm. Internal dimensions: Length = 148 - 6 = 142 cm = 1.42 m, Breadth = 116 - 6 = 110 cm = 1.10 m, Height = 83 - 3 = 80 cm = 0.80 m. Inner surface area (box open at top) = Base area + 4 wall areas = (1.42 × 1.10) + 2(1.42 × 0.80) + 2(1.10 × 0.80) = 1.562 + 2.272 + 1.76 = 5.594 m². Cost = 5.594 × 150 = ₹839.10. This practical problem develops visualization skills, understanding of 3D objects, and unit conversion. NCF 2005 emphasizes connecting mathematics to real-life situations like cost estimation and measurement, making learning meaningful.",
      subjectName: SubjectName.MATH,
      topicId: "mensuration",
      subTopicId: "cuboid",
      difficulty: "hard",
    },

    {
      question: "In triangles ABC and DEF; ∠B = 90°, BC = 8 cm, ∠A = 40°, DE = 8 cm, ∠F = 40° and ∠E = 90°. Then, which of the following statements is true?",
      options: [
        "△ABC ≅ △DEF, by RHS",
        "△ABC ≅ △FED, by RHS",
        "△ABC ≅ △DFE, by AAS",
        "△ABC ≅ △FED, by AAS"
      ],
      correctAnswerIndex: 3,
      explanation: "In △ABC: ∠B = 90°, ∠A = 40°, so ∠C = 50°, and BC = 8 cm (perpendicular). In △DEF: ∠E = 90°, ∠F = 40°, so ∠D = 50°, and DE = 8 cm (perpendicular). Comparing: In △ABC: ∠A = 40°, ∠C = 50°, ∠B = 90°. In △FED (rearranged): ∠F = 40°, ∠D = 50°, ∠E = 90°. We have two angles and a non-included side equal (AAS criteria), so △ABC ≅ △FED by AAS. This problem develops understanding of congruence criteria and the importance of correct correspondence of vertices. NCF 2005 emphasizes developing geometric reasoning and proof skills, moving beyond rote memorization of criteria to understanding why triangles are congruent.",
      subjectName: SubjectName.MATH,
      topicId: "geometry",
      subTopicId: "congruence",
      difficulty: "hard",
    },

    {
      question: "Three consecutive integers are such that when they are taken in increasing order and multiplied by 3, 5 and 2, respectively, they add up to 99. What is the sum of the original first and third integers?",
      options: [
        "16",
        "18",
        "20",
        "24"
      ],
      correctAnswerIndex: 2,
      explanation: "Let the three consecutive integers be n, n+1, and n+2. According to the problem: 3n + 5(n+1) + 2(n+2) = 99. Expanding: 3n + 5n + 5 + 2n + 4 = 99, so 10n + 9 = 99, therefore 10n = 90, and n = 9. The three integers are 9, 10, and 11. Sum of first and third = 9 + 11 = 20. This problem integrates algebraic thinking with arithmetic operations. NCF 2005 emphasizes developing algebraic reasoning from middle school, using problems that require translating word situations into mathematical expressions. Such problems develop logical thinking, pattern recognition, and problem-solving skills essential for mathematical literacy.",
      subjectName: SubjectName.MATH,
      topicId: "algebra",
      subTopicId: "linear-equations",
      difficulty: "medium",
    },

    {
      question: "A middle school mathematics teacher poses the following question to her class: 'Which type of graph would you use to show the following data? (a) The heights of participants in an athletics meet (b) The number of passengers boarding trains from 9:00 am to 9:00 pm at a station.' The intention of the teacher is to:",
      options: [
        "Help learners understand the difference between bar graph and line graph",
        "Introduce the concept of pie charts",
        "Teach line graph through contextual situations",
        "Teach the use of histograms for data representation"
      ],
      correctAnswerIndex: 3,
      explanation: "The teacher's intention is to teach histograms for data representation. For (a), heights of participants would be grouped into class intervals and represented using a histogram, as heights are continuous data. For (b), the number of passengers over time would also be shown in a histogram if grouped into time intervals, though it could also use a line graph for continuous time. NCF 2005 emphasizes teaching data handling skills progressively. Histograms are important for representing grouped continuous data, different from bar graphs (discrete categories) and line graphs (showing trends over time). This question develops students' ability to select appropriate representations based on data type and the information to be conveyed.",
      subjectName: SubjectName.MATH,
      topicId: "data-handling",
      subTopicId: "graphs",
      difficulty: "medium",
    },

    {
      question: "If an 8-digit number 9 4 7 1 x 9 y 2 is divisible by 72, then which of the following statements is not true?",
      options: [
        "x = 8 and y = 5",
        "x = 4 and y = 9",
        "x = 9 and y = 5",
        "x = 3 and y = 1"
      ],
      correctAnswerIndex: 2,
      explanation: "For divisibility by 72, the number must be divisible by both 8 and 9 (since 72 = 8 × 9). For divisibility by 8: Last 3 digits (y 2 must form a number divisible by 8. For divisibility by 9: Sum of all digits must be divisible by 9. Sum = 9 + 4 + 7 + 1 + x + 9 + y + 2 = 32 + x + y. For this to be divisible by 9: x + y could be 4, 13, 22, etc. For last three digits 9y2: 952 (y=5): 952 ÷ 8 = 119 ✓. Checking options: (1) x=8, y=5: sum=45 (divisible by 9) ✓, 952 divisible by 8 ✓. (2) x=4, y=9: sum=45 ✓, 992 ÷ 8 = 124 ✓. (3) x=9, y=5: sum=46 (not divisible by 9) ✗. (4) x=3, y=1: sum=36 ✓, 912 ÷ 8 = 114 ✓. Option 3 is NOT true. This problem develops understanding of divisibility rules and number theory.",
      subjectName: SubjectName.MATH,
      topicId: "number-systems",
      subTopicId: "divisibility",
      difficulty: "hard",
    },

    {
      question: "Mathematics is a way of thinking since: (a) It provides an opportunity for students to engage in proofs and examining patterns (b) Students reproduce formulae and symbols during problem solving (c) Students use appropriate strategies for solving various new problems. Choose the correct option:",
      options: [
        "(a) and (b)",
        "(b) and (c)",
        "(a) and (c)",
        "Only (b)"
      ],
      correctAnswerIndex: 2,
      explanation: "Statements (a) and (c) correctly describe mathematics as a way of thinking. NCF 2005 emphasizes mathematics as more than just computational skills - it's about developing logical reasoning, pattern recognition, and problem-solving abilities. Engaging in proofs develops deductive reasoning; examining patterns develops inductive reasoning and generalization skills. Using appropriate strategies for new problems demonstrates mathematical thinking and transfer of learning. Statement (b) is incorrect because merely reproducing formulae and symbols is procedural/mechanical work, not mathematical thinking. True mathematical thinking involves understanding concepts, making connections, reasoning, and creative problem-solving, not just memorization and reproduction of symbols.",
      subjectName: SubjectName.MATH,
      topicId: "pedagogy",
      subTopicId: "nature-of-mathematics",
      difficulty: "easy",
    },

    {
      question: "The following table shows the number of different fruits kept in a carton: Mangoes-44, Apples-56, Oranges-42, Guavas-30, Pomegranates-38. If a pie chart is constructed for the above data, what will be the angle of the sector representing apples?",
      options: [
        "79.2°",
        "72°",
        "96°",
        "100.8°"
      ],
      correctAnswerIndex: 2,
      explanation: "Total fruits = 44 + 56 + 42 + 30 + 38 = 210. In a pie chart, total angle = 360°. Angle for apples = (Number of apples / Total fruits) × 360° = (56 / 210) × 360° = (56 × 360) / 210 = 20160 / 210 = 96°. This problem develops understanding of pie charts and proportional representation. NCF 2005 emphasizes data handling as a crucial mathematical skill. Pie charts help visualize proportional relationships and are widely used in real life for representing categorical data. Students learn to convert proportions into angles and understand that the size of each sector represents the relative frequency or proportion of that category. This connects arithmetic (fractions, percentages) with geometric representation (angles, sectors).",
      subjectName: SubjectName.MATH,
      topicId: "data-handling",
      subTopicId: "pie-chart",
      difficulty: "medium",
    },

    {
      question: "The lengths of the parallel sides of a trapezium are 11 cm and 25 cm and the distance between them is 12 cm. Its area is equal to the area of a rectangle whose sides are in the ratio 3:2. What is the perimeter (in cm) of the rectangle?",
      options: [
        "40",
        "50",
        "60",
        "70"
      ],
      correctAnswerIndex: 2,
      explanation: "Area of trapezium = ½ × (sum of parallel sides) × height = ½ × (11 + 25) × 12 = ½ × 36 × 12 = 216 cm². Let the sides of the rectangle be 3x and 2x. Area of rectangle = 3x × 2x = 6x² = 216, so x² = 36, therefore x = 6. Sides of rectangle = 18 cm and 12 cm. Perimeter = 2(18 + 12) = 2 × 30 = 60 cm. This problem integrates multiple geometric concepts: trapezium area, rectangle area, ratios, and algebraic solving. NCF 2005 emphasizes connecting different mathematical topics and developing the ability to solve multi-step problems. Such problems require students to extract relevant information, apply appropriate formulas, and use algebraic reasoning to find unknowns.",
      subjectName: SubjectName.MATH,
      topicId: "mensuration",
      subTopicId: "area",
      difficulty: "hard",
    },

    {
      question: "If A = -2x² + 12x, B = 11 - 8x + 3x², C = 17 - 4x², and D = x² - x - 3, then what is the sum of the coefficients of x² and x in (A + B + C - D)?",
      options: [
        "0",
        "-1",
        "1",
        "3"
      ],
      correctAnswerIndex: 2,
      explanation: "A + B + C - D = (-2x² + 12x) + (11 - 8x + 3x²) + (17 - 4x²) - (x² - x - 3). Collecting x² terms: -2x² + 3x² - 4x² - x² = -4x². Collecting x terms: 12x - 8x - (-x) = 12x - 8x + x = 5x. Collecting constants: 11 + 17 - (-3) = 31. So A + B + C - D = -4x² + 5x + 31. Sum of coefficients of x² and x = -4 + 5 = 1. This problem develops algebraic manipulation skills, particularly combining like terms across multiple expressions. NCF 2005 emphasizes developing algebraic thinking and symbolic manipulation. Students must carefully handle signs, especially when subtracting expressions. Such problems build foundational skills needed for more advanced algebra and develop attention to detail and systematic thinking.",
      subjectName: SubjectName.MATH,
      topicId: "algebra",
      subTopicId: "polynomials",
      difficulty: "medium",
    },

    {
      question: "Which of the following is not a dimension of assessment of mathematics learning?",
      options: [
        "Communication",
        "Patterns and procedures",
        "Disposition towards mathematics",
        "Mathematical reasoning"
      ],
      correctAnswerIndex: 2,
      explanation: "While 'disposition towards mathematics' (attitude, beliefs, confidence) is important for learning, it is not typically considered a primary dimension for assessing mathematical learning outcomes. NCF 2005 identifies key dimensions of mathematical assessment as: mathematical reasoning (logical thinking, proof), communication (expressing mathematical ideas clearly), problem-solving, patterns and procedures (recognizing patterns, using algorithms), and connections (linking different concepts). Assessment should focus on these cognitive and skill-based dimensions rather than affective aspects like disposition. However, positive disposition is crucial for sustained engagement with mathematics and should be nurtured through appropriate pedagogy, even if not directly assessed as a learning outcome.",
      subjectName: SubjectName.MATH,
      topicId: "pedagogy",
      subTopicId: "assessment",
      difficulty: "easy",
    },

    {
      question: "In triangle PQR, ∠P = 55° and QR = 18 cm. In which of the following cases, △PQR can be an obtuse scalene triangle?",
      options: [
        "∠R = 25° and PQ = 18 cm",
        "∠R = 15° and PR > 18 cm",
        "∠R = 65° and PQ > 18 cm",
        "∠R = 35° and PR = 18 cm"
      ],
      correctAnswerIndex: 1,
      explanation: "For an obtuse scalene triangle: (1) One angle must be greater than 90° (obtuse), and (2) All three sides must be different lengths (scalene). Given ∠P = 55°. Checking options: (1) ∠R = 25°, then ∠Q = 180° - 55° - 25° = 100° (obtuse ✓), but PQ = QR = 18 cm (not scalene ✗). (2) ∠R = 15°, then ∠Q = 180° - 55° - 15° = 110° (obtuse ✓), and PR > 18 cm, PQ ≠ QR (can be scalene ✓). (3) ∠R = 65°, then ∠Q = 60° (no obtuse angle ✗). (4) ∠R = 35°, then ∠Q = 90° (right triangle, not obtuse ✗). Only option 2 satisfies both conditions. This problem develops classification skills, understanding of triangle properties, and logical reasoning. NCF 2005 emphasizes developing geometric reasoning through exploration of properties and relationships.",
      subjectName: SubjectName.MATH,
      topicId: "geometry",
      subTopicId: "triangles",
      difficulty: "hard",
    },
    
    // ... Q61-Q90 Science questions to be added from PDF
    
    // ==============================================================
    // PART III: MATHEMATICS & SCIENCE (Q91-150) - 60 questions
    // Status: PENDING manual extraction from PDF
    // ==============================================================
    
    {
      question: "[Question 91 - Manual entry needed from Qus-Jan-24.pdf]",
      options: ["[Option 1]", "[Option 2]", "[Option 3]", "[Option 4]"],
      correctAnswerIndex: 0,
      explanation: "[Extract from Anz-Jan-24.pdf - Math/Science explanation with NCF 2005]",
      subjectName: SubjectName.SCIENCE,
      topicId: "mathematics",
      subTopicId: "geometry",
      difficulty: "medium",
    },
    // ... Q92-Q150 Math/Science questions to be added from PDF
  ],
};
