import { QuestionPaper, SubjectName, PaperType } from '../../types.js';

/**
 * CTET January 2024 - Paper II (Classes 6-8)
 * Source: SQP/Paper2/Qus-Jan-24.pdf and Anz-Jan-24.pdf
 * Extracted: Q1-Q30 (CDP) - COMPLETE ✅
 * Remaining: Q31-Q150 - Pending manual extraction
 */

export const QUESTION_PAPER_JAN_24_II: QuestionPaper = {
  id: 'jan-24-ii',
  name: 'CTET January 2024 - Paper II',
  description: 'Complete question paper for CTET January 2024 Paper II (Classes 6-8). CDP section (Q1-Q30) fully extracted with answers and NCF 2005-aligned explanations.',
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
    // PART II: LANGUAGE I - ENGLISH (Q31-90) - 60 questions
    // Status: PENDING manual extraction from PDF
    // ========================================================
    
    {
      question: "[Question 31 - Manual entry needed from Qus-Jan-24.pdf]",
      options: ["[Option 1]", "[Option 2]", "[Option 3]", "[Option 4]"],
      correctAnswerIndex: 0,
      explanation: "[Extract from Anz-Jan-24.pdf - Language comprehension explanation needed]",
      subjectName: SubjectName.LANG1,
      topicId: "reading-comprehension",
      subTopicId: "prose",
      difficulty: "medium",
    },
    // ... Q32-Q90 Language I (English) questions to be added from PDF
    
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
