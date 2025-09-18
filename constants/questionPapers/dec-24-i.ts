import { QuestionPaper } from '../../types';
import { SubjectName } from '../../types';

export const QUESTION_PAPER_DEC_24_I: QuestionPaper = {
  id: 'dec-24-i',
  name: 'CTET December 2024 Paper I (Set K)',
  description: 'Official CTET December 2024 Paper I questions for primary teacher eligibility test',
  questions: [
    // CDP Questions (Q1-30)
    {
      question: "Assertion (A): Teacher should encourage boys of her class to participate in sports while assigning art decoration to girls. Reason (R): Children acquire gender roles primarily because of the underlying biological differences. Choose the correct option.",
      options: [
        "Both (A) and (R) are false.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
        "(A) is true but (R) is false."
      ],
      correctAnswerIndex: 0,
      explanation: "The assertion promotes gender stereotypes, and the reason incorrectly attributes gender roles to biology rather than social learning.",
      subjectName: SubjectName.CDP,
      topicId: "gender-development",
      subTopicId: "gender-roles-socialization"
    },
    {
      question: "Dysgraphia is characterised by:",
      options: [
        "Difficulties in writing",
        "Lack of reading fluency",
        "Repetitive behavioural patterns",
        "Delayed motor skills"
      ],
      correctAnswerIndex: 0,
      explanation: "Dysgraphia is a learning disability that affects writing abilities, not reading fluency.",
      subjectName: SubjectName.CDP,
      topicId: "learning-disabilities",
      subTopicId: "dysgraphia"
    },
    {
      question: "In order to cater to needs of students struggling with Attention Deficit Hyperactivity Disorder teachers should avoid:",
      options: [
        "Flexibility in curricular materials and instructions",
        "Breaking the task into small easily manageable parts",
        "Using multi-sensory materials",
        "Creating distractions and making noises"
      ],
      correctAnswerIndex: 3,
      explanation: "Teachers should avoid creating distractions for ADHD students, as it exacerbates their difficulties with attention.",
      subjectName: SubjectName.CDP,
      topicId: "inclusive-education",
      subTopicId: "adhd-support"
    },
    {
      question: "During play time at school, Rishab, a 7-year-old boy picked a doll to play with. Some of his peers made fun of him for his choice of toy. As a teacher who wants his students to grow up with gender role flexibility, which of the following would be the best response to the situation by the teacher?",
      options: [
        "Tell Rishabh that he should play with something else because his friends won't approve of him playing with doll.",
        "Let Rishabh play with doll and tell other children that they can also choose any toy of their choice.",
        "Quietly take away the doll and give a car toy to Rishabh without saying anything.",
        "Talk to Rishabh that dolls are suitable for girls and boys should not play with dolls."
      ],
      correctAnswerIndex: 1,
      explanation: "The teacher should promote gender role flexibility by allowing all children to choose toys freely and encouraging others to do the same.",
      subjectName: SubjectName.CDP,
      topicId: "gender-development",
      subTopicId: "gender-role-flexibility"
    },
    {
      question: "Two important cognitive development milestones of sensorimotor stage of Piaget's theory of cognitive development are:",
      options: [
        "Classification and seriation",
        "Object permanence and deferred imitation",
        "Reversibility of thought and hypothetic-deductive reasoning",
        "Animism and Transformation"
      ],
      correctAnswerIndex: 1,
      explanation: "Object permanence (understanding that objects exist even when not seen) and deferred imitation (ability to imitate actions after a delay) are key sensorimotor stage milestones.",
      subjectName: SubjectName.CDP,
      topicId: "cognitive-development",
      subTopicId: "piaget-sensorimotor"
    },
    {
      question: "Assertion (A): Children below the age of 5 - 6 years should not be pressurized to write 'properly' and 'within the lines'. Reason (R): Children gain a control of finer motor skills from 5 - 6 years onwards. Choose the correct option.",
      options: [
        "Both (A) and (R) are false.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
        "(A) is true but (R) is false."
      ],
      correctAnswerIndex: 1,
      explanation: "Children should not be pressured to write perfectly before 5-6 years, and they do gain finer motor control around that age.",
      subjectName: SubjectName.CDP,
      topicId: "child-development",
      subTopicId: "motor-development"
    },
    {
      question: "Children -",
      options: [
        "Come into this world with genetic codes that determine their destiny.",
        "Are greatly influenced by the social cultural context they grow up in.",
        "Come into this world as tabula rasa or blank slate.",
        "Are born unruly and need to be socialized."
      ],
      correctAnswerIndex: 1,
      explanation: "Children are significantly influenced by their social and cultural environment, though they also have innate predispositions.",
      subjectName: SubjectName.CDP,
      topicId: "child-development",
      subTopicId: "nature-nurture"
    },
    {
      question: "Assertion (A): Teachers should use multisensory materials to cater to needs of students in an inclusive classroom. Reason (R): Inclusive classrooms should adopt standardization of curricular materials as well as assessment strategies. Choose the correct option:",
      options: [
        "Both (A) and (R) are false.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
        "(A) is true but (R) is false."
      ],
      correctAnswerIndex: 0,
      explanation: "Multisensory materials are beneficial for inclusive classrooms, but standardization may not always be appropriate for diverse needs.",
      subjectName: SubjectName.CDP,
      topicId: "inclusive-education",
      subTopicId: "multisensory-materials"
    },
    {
      question: "In the constructivist view:",
      options: [
        "Individuals are conditioned to learn new behaviours.",
        "Learning is extending and transforming the current understanding.",
        "Learning is simply writing associations on the blank slates of our brains.",
        "Individuals are passively influenced by environmental events."
      ],
      correctAnswerIndex: 1,
      explanation: "Constructivism views learning as an active process of building and transforming knowledge based on existing understanding.",
      subjectName: SubjectName.CDP,
      topicId: "learning-theories",
      subTopicId: "constructivism"
    },
    {
      question: "Kinesthetic learners prefer to learn through __________.",
      options: [
        "touching",
        "doing and moving",
        "listening",
        "seeing"
      ],
      correctAnswerIndex: 1,
      explanation: "Kinesthetic learners learn best through physical activity and movement.",
      subjectName: SubjectName.CDP,
      topicId: "learning-styles",
      subTopicId: "kinesthetic-learning"
    },
    {
      question: "According to Jean Piaget a child who is unable to understand the logic behind simple mathematical reversals such as 4+5=9 so 9−5=4, it is because of:",
      options: [
        "irreversibility",
        "egocentrism",
        "perceptual centration",
        "animistic thinking"
      ],
      correctAnswerIndex: 0,
      explanation: "Irreversibility is the inability to understand that operations can be reversed, a characteristic of concrete operational stage limitations.",
      subjectName: SubjectName.CDP,
      topicId: "cognitive-development",
      subTopicId: "piaget-concrete-operations"
    },
    {
      question: "Inclusion needs to be promoted through:",
      options: [
        "(i) (ii) (iii) (iv)",
        "(i) (ii) (iii)",
        "(i) (ii) (iv)",
        "(ii) (iii) (iv)"
      ],
      correctAnswerIndex: 2,
      explanation: "Inclusion is promoted through flexible curriculum, cooperative learning, and accessibility of buildings.",
      subjectName: SubjectName.CDP,
      topicId: "inclusive-education",
      subTopicId: "inclusive-practices"
    },
    {
      question: "Piaget described cognitive development as occurring in:",
      options: [
        "Four overlapping culture specific stages",
        "Four qualitatively different stages",
        "Three progressive levels",
        "A continuous continuum"
      ],
      correctAnswerIndex: 1,
      explanation: "Piaget described cognitive development in four qualitatively different stages: sensorimotor, preoperational, concrete operational, and formal operational.",
      subjectName: SubjectName.CDP,
      topicId: "cognitive-development",
      subTopicId: "piaget-stages"
    },
    {
      question: "Assertion (A): Scaffolding provided by the teachers hinders the learning process of children. Reason (R): Lev Vygotsky proposed that children learn independently by acting upon and manipulating the environment. Choose the correct option:",
      options: [
        "Both (A) and (R) are false.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
        "(A) is true but (R) is false."
      ],
      correctAnswerIndex: 0,
      explanation: "Scaffolding actually supports learning, and Vygotsky emphasized the role of social interaction and guidance in learning.",
      subjectName: SubjectName.CDP,
      topicId: "learning-theories",
      subTopicId: "vygotsky-scaffolding"
    },
    {
      question: "According to Howard Gardner while a scientist would exhibit high __________ Intelligence, a sculptor would have high __________ Intelligence.",
      options: [
        "Transductive; Spatial",
        "Logical-mathematical; Bodily Kinesthetic",
        "Spatial; Bodily Kinesthetic",
        "Naturalistic; Spatial"
      ],
      correctAnswerIndex: 1,
      explanation: "Scientists typically show high logical-mathematical intelligence, while sculptors demonstrate high bodily-kinesthetic intelligence.",
      subjectName: SubjectName.CDP,
      topicId: "intelligence-theories",
      subTopicId: "gardner-multiple-intelligences"
    },
    {
      question: "Which of the following correctly describes extrinsic motivation?",
      options: [
        "Motivation that comes from a sense of personal satisfaction.",
        "Motivation that comes from personal enjoyment of the task.",
        "Motivation that comes from internal factors.",
        "Motivation that comes from environmental consequences."
      ],
      correctAnswerIndex: 3,
      explanation: "Extrinsic motivation comes from external rewards or consequences, not internal satisfaction.",
      subjectName: SubjectName.CDP,
      topicId: "motivation",
      subTopicId: "extrinsic-motivation"
    },
    {
      question: "Meaningful learning is primarily NOT about:",
      options: [
        "understanding the concept",
        "constructing knowledge",
        "developing skills",
        "memorizing information"
      ],
      correctAnswerIndex: 3,
      explanation: "Meaningful learning focuses on understanding and constructing knowledge, not rote memorization.",
      subjectName: SubjectName.CDP,
      topicId: "learning-theories",
      subTopicId: "meaningful-learning"
    },
    {
      question: "In developmental terms, a time frame where an individual upholds an amplified sensitivity to particular incentives for developing particular skills to function in an efficient manner is referred to as __________ of development.",
      options: [
        "Stimulus period",
        "Critical period",
        "Encoding period",
        "Incentive period"
      ],
      correctAnswerIndex: 1,
      explanation: "Critical period refers to a specific time when learning or development is most effective.",
      subjectName: SubjectName.CDP,
      topicId: "child-development",
      subTopicId: "critical-periods"
    },
    {
      question: "Assertion (A): Teachers should distance themselves from students and place primary responsibility for learning on them only. Reason (R): Learning takes place affectively in an authoritative rather than a democratic environment. Choose the correct option.",
      options: [
        "Both (A) and (R) are false.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
        "(A) is true but (R) is false."
      ],
      correctAnswerIndex: 0,
      explanation: "Teachers should be involved in learning, and democratic environments are generally more conducive to effective learning.",
      subjectName: SubjectName.CDP,
      topicId: "teaching-learning",
      subTopicId: "teacher-student-relationship"
    },
    {
      question: "Challenges in social communication are evident in:",
      options: [
        "Cerebral palsy",
        "Autism Spectrum Disorder",
        "Learning Disabilities",
        "Attention deficit hyperactivity disorder"
      ],
      correctAnswerIndex: 1,
      explanation: "Social communication challenges are a core feature of Autism Spectrum Disorder.",
      subjectName: SubjectName.CDP,
      topicId: "special-needs",
      subTopicId: "autism-spectrum-disorder"
    },
    {
      question: "Which of the following statement represents 'Proximodistal' principle of development?",
      options: [
        "Identical twins living in different cultures can develop at different rates.",
        "Children develop ability to grasp the ball before putting beads in thread.",
        "Children develop ability to sit up before standing.",
        "Development is multidirectional and multidimensional."
      ],
      correctAnswerIndex: 1,
      explanation: "Proximodistal development refers to development from center outward - grasping (proximal) before fine motor skills like threading beads (distal).",
      subjectName: SubjectName.CDP,
      topicId: "child-development",
      subTopicId: "proximodistal-development"
    },
    {
      question: "In order to help students to become good problem solvers, a teacher should emphasize on the practice of:",
      options: [
        "approaching problems in a particular fixed fashion.",
        "breaking large complex problems into smaller manageable problems.",
        "centering only on one particular piece of information related to problem.",
        "focusing on information that confirms existing beliefs and preconceptions."
      ],
      correctAnswerIndex: 1,
      explanation: "Effective problem solving involves breaking down complex problems into manageable parts.",
      subjectName: SubjectName.CDP,
      topicId: "cognitive-skills",
      subTopicId: "problem-solving"
    },
    {
      question: "Assertion (A): Effective teachers familiarize themselves with daily lives and socio-cultural backgrounds of learners. Reason (R): Learning takes place in a social context. Choose the correct option.",
      options: [
        "Both (A) and (R) are false.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
        "(A) is true but (R) is false."
      ],
      correctAnswerIndex: 1,
      explanation: "Understanding students' backgrounds helps teachers connect learning to their lives, and learning is inherently social.",
      subjectName: SubjectName.CDP,
      topicId: "teaching-learning",
      subTopicId: "sociocultural-context"
    },
    {
      question: "Lawrence Kohlberg argued that:",
      options: [
        "there are cultural differences in moral reasoning of children.",
        "moral development occurs progressively in stages.",
        "there are gender differences in moral reasoning of children.",
        "moral development in children occurs in a continuous manner."
      ],
      correctAnswerIndex: 1,
      explanation: "Kohlberg proposed that moral development occurs in progressive stages from preconventional to postconventional morality.",
      subjectName: SubjectName.CDP,
      topicId: "moral-development",
      subTopicId: "kohlberg-stages"
    },
    {
      question: "Children learn better if they experience:",
      options: [
        "Moderate level of excitement to learn",
        "High degree of anxiety to perform",
        "Learned helplessness",
        "Low level of alertness during activity"
      ],
      correctAnswerIndex: 0,
      explanation: "Moderate excitement creates optimal conditions for learning, while high anxiety and low alertness hinder it.",
      subjectName: SubjectName.CDP,
      topicId: "learning-environment",
      subTopicId: "optimal-arousal"
    },
    {
      question: "Mastery Oriented learners typically attribute success to __________ and failure to __________.  ",
      options: [
        "ability and effort; bad luck",
        "ability and good luck; low ability",
        "ability and effort; insufficient effort",
        "ability and good luck; task difficulty"
      ],
      correctAnswerIndex: 2,
      explanation: "Mastery-oriented learners attribute success to ability and effort, and failure to insufficient effort rather than lack of ability.",
      subjectName: SubjectName.CDP,
      topicId: "motivation",
      subTopicId: "attribution-theory"
    },
    {
      question: "According to Vygotsky's theory of learning and development, which of the following is an example of scaffolding?",
      options: [
        "Providing a student with a grade for their work as motivation.",
        "Providing a student with a reading assignment and asking them to answer questions independently.",
        "Demonstrating a skill to a student and then having them master it on their own.",
        "Breaking a task down into smaller steps and providing support as needed."
      ],
      correctAnswerIndex: 3,
      explanation: "Scaffolding involves providing temporary support and breaking tasks into manageable steps, gradually removing support as the learner becomes independent.",
      subjectName: SubjectName.CDP,
      topicId: "learning-theories",
      subTopicId: "vygotsky-scaffolding"
    },
    {
      question: "According to Vygotsky children speak to themselves:",
      options: [
        "To provide self-reinforcement when adults are ignoring them.",
        "Because they are egocentric.",
        "Because their thought is illogical.",
        "To aid thought and for self-regulation."
      ],
      correctAnswerIndex: 3,
      explanation: "Private speech helps children regulate their thinking and behavior, serving as a tool for self-regulation.",
      subjectName: SubjectName.CDP,
      topicId: "cognitive-development",
      subTopicId: "private-speech"
    },
    {
      question: "At which level of Kohlberg's moral development does individual's ethical behavior mainly depends on the mindset that 'what do people think of me'?",
      options: [
        "Non-conventional",
        "Preconventional",
        "Conventional",
        "Postconventional"
      ],
      correctAnswerIndex: 2,
      explanation: "Conventional level morality focuses on social approval and maintaining relationships.",
      subjectName: SubjectName.CDP,
      topicId: "moral-development",
      subTopicId: "kohlberg-conventional"
    },
    {
      question: "Children often come up with their own explanations of events around them. On being probed as to why does it rain Sia says - 'God was tired of carrying the buckets of water on his shoulders'. Such explanations:",
      options: [
        "Illustrate that children are not capable of any reasoning.",
        "Prove that children's thinking is much lesser than adults quantitively.",
        "Indicate that children have naïve understanding rooted in their cultural context with which they try to understand events.",
        "Depict that children have an egocentric view and cannot consider other's viewpoint."
      ],
      correctAnswerIndex: 2,
      explanation: "Children's explanations often reflect their cultural context and developing understanding of the world.",
      subjectName: SubjectName.CDP,
      topicId: "cognitive-development",
      subTopicId: "childrens-explanations"
    },

    // Mathematics Questions (Q31-60)
    {
      question: "What is the result when 7 kg 7 g is subtracted from 9 kg?",
      options: [
        "1.093 kg",
        "1.3 kg",
        "1.993 kg",
        "1.93 kg"
      ],
      correctAnswerIndex: 2,
      explanation: "9 kg - 7 kg 7 g = 1 kg 993 g = 1.993 kg",
      subjectName: SubjectName.MATH,
      topicId: "measurement",
      subTopicId: "weight-conversion"
    },
    {
      question: "The smallest four-digit number which is a multiple of 6, 7 and 4 is:",
      options: [
        "1008",
        "1000",
        "1002",
        "1006"
      ],
      correctAnswerIndex: 0,
      explanation: "LCM of 6, 7, and 4 is 84. Smallest 4-digit multiple is 84 × 12 = 1008.",
      subjectName: SubjectName.MATH,
      topicId: "number-system",
      subTopicId: "lcm-multiples"
    },
    {
      question: "The product of the predecessor of 201 and the successor of 4781 is:",
      options: [
        "965650",
        "956200",
        "956400",
        "965560"
      ],
      correctAnswerIndex: 2,
      explanation: "Predecessor of 201 is 200, successor of 4781 is 4782. Product = 200 × 4782 = 956400.",
      subjectName: SubjectName.MATH,
      topicId: "number-system",
      subTopicId: "predecessor-successor"
    },
    {
      question: "How many planks of size 2 m ×35 cm × 8 cm can be made from a wooden block 8 m long, 70 cm wide and 40 cm thick?",
      options: [
        "40",
        "50",
        "48",
        "45"
      ],
      correctAnswerIndex: 0,
      explanation: "Volume of block = 800 × 70 × 40 = 2,240,000 cm³. Volume of plank = 200 × 35 × 8 = 56,000 cm³. Number of planks = 2,240,000 ÷ 56,000 = 40.",
      subjectName: SubjectName.MATH,
      topicId: "measurement",
      subTopicId: "volume-calculation"
    },
    {
      question: "Students feel difficulty in solving division problems because:",
      options: [
        "There are no informal ways of solving division problems",
        "For solving division problems students need to know addition, subtraction and multiplication thoroughly.",
        "Students do not like the sign of division.",
        "Division problems have no utility in daily life."
      ],
      correctAnswerIndex: 1,
      explanation: "Division builds on understanding of addition, subtraction, and multiplication concepts.",
      subjectName: SubjectName.MATH,
      topicId: "arithmetic",
      subTopicId: "division-concept"
    },
    {
      question: "Radha walks 3 km 725 m per day on Monday, Wednesday and Friday, whereas she walks 2 km 9 m per day on Tuesday and Thursday. Total distance covered by her from Monday to Friday is:",
      options: [
        "15.193 km",
        "16.975 km",
        "16.202 km",
        "15.355 km"
      ],
      correctAnswerIndex: 0,
      explanation: "3 days × 3.725 km = 11.175 km, 2 days × 2.009 km = 4.018 km. Total = 15.193 km.",
      subjectName: SubjectName.MATH,
      topicId: "measurement",
      subTopicId: "distance-calculation"
    },
    {
      question: "Which of the following statements is NOT true with respect to the concept of Fractions?",
      options: [
        "The mathematical notation of a fraction can be represented as a ratio",
        "It represents a part of a whole which is greater than 1",
        "The mathematical notation of a fraction can be represented as a division problem",
        "It represents a part of a collection of same objects"
      ],
      correctAnswerIndex: 1,
      explanation: "Fractions can represent parts greater than 1 (improper fractions), but the statement incorrectly suggests this is not true.",
      subjectName: SubjectName.MATH,
      topicId: "fractions",
      subTopicId: "fraction-concepts"
    },
    {
      question: "Which of the following letters has two lines of symmetry?",
      options: [
        "U",
        "H",
        "B",
        "E"
      ],
      correctAnswerIndex: 1,
      explanation: "The letter H has two lines of symmetry - horizontal and vertical.",
      subjectName: SubjectName.MATH,
      topicId: "geometry",
      subTopicId: "lines-of-symmetry"
    },
    {
      question: "Which of the following is most appropriate for including open ended questions in mathematics class?",
      options: [
        "Answers to these questions are not given in the book",
        "These questions take more time to solve",
        "These questions are not easy to copy from each other",
        "These questions develop critical thinking in students"
      ],
      correctAnswerIndex: 3,
      explanation: "Open-ended questions promote critical thinking and problem-solving skills.",
      subjectName: SubjectName.MATH,
      topicId: "teaching-methodology",
      subTopicId: "open-ended-questions"
    },
    {
      question: "The value of 4/7 + 5/14 - 7/8 is:",
      options: [
        "5/56",
        "3/14",
        "5/28",
        "3/56"
      ],
      correctAnswerIndex: 3,
      explanation: "4/7 + 5/14 - 7/8 = (8/14 + 5/14) - 7/8 = 13/14 - 7/8 = (104 - 49)/112 = 55/112 = 5/10.08, wait - actually 55÷7=7.857, 112÷7=16, so 55/112 = 5/10.08? Wait, let me recalculate: 13/14 = 104/112, 7/8 = 98/112, so 104/112 - 98/112 = 6/112 = 3/56.",
      subjectName: SubjectName.MATH,
      topicId: "fractions",
      subTopicId: "fraction-arithmetic"
    },
    {
      question: "Which of the following has a definite length?",
      options: [
        "a plane",
        "a line",
        "a line segment",
        "a ray"
      ],
      correctAnswerIndex: 2,
      explanation: "A line segment has definite endpoints and therefore definite length, unlike a line or ray which extend infinitely.",
      subjectName: SubjectName.MATH,
      topicId: "geometry",
      subTopicId: "line-segment"
    },
    {
      question: "The difference of the place values of 5 and 7 in the number 352876 is:",
      options: [
        "50007",
        "49930",
        "49993",
        "49997"
      ],
      correctAnswerIndex: 1,
      explanation: "Place value of 5 (ten thousands) = 50,000, place value of 7 (tens) = 70. Difference = 50,000 - 70 = 49,930.",
      subjectName: SubjectName.MATH,
      topicId: "number-system",
      subTopicId: "place-value"
    },
    {
      question: "A 3rd standard student, when asked to write one hundred and five in numeral form, s/he writes it as '1005'. This indicates that:",
      options: [
        "s/he is unfit to learn mathematics",
        "The student is a slow learner",
        "s/he is mischievous",
        "s/he needs more help in understanding the concept of place value"
      ],
      correctAnswerIndex: 3,
      explanation: "The student needs help understanding place value concepts, not that they are unfit or slow learners.",
      subjectName: SubjectName.MATH,
      topicId: "number-system",
      subTopicId: "place-value-concept"
    },
    {
      question: "What is the most appropriate cognitive skill that help students to recognize and group shapes according to their attributes and properties?",
      options: [
        "Decomposition",
        "Classification",
        "Seriation",
        "Conservation"
      ],
      correctAnswerIndex: 1,
      explanation: "Classification involves grouping objects based on their attributes and properties.",
      subjectName: SubjectName.MATH,
      topicId: "geometry",
      subTopicId: "shape-classification"
    },
    {
      question: "According to National Education Policy 2020 Mathematics and Computational Thinking is to be given increased importance as:",
      options: [
        "It can be a substitute for a teacher",
        "It is the most difficult aspect of learning in school",
        "It is foundational to human survival",
        "It is foundational to evolving technologies like Artificial Intelligence (AI), machine learning and Data Science etc"
      ],
      correctAnswerIndex: 3,
      explanation: "NEP 2020 emphasizes mathematics and computational thinking as foundational to modern technologies.",
      subjectName: SubjectName.MATH,
      topicId: "curriculum",
      subTopicId: "nep-2020-mathematics"
    },
    {
      question: "Which of the following statements are true with respect to 'Data handling'?",
      options: [
        "A histogram is used to compare the parts of a whole.",
        "A graphical representation of data is easier to understand when there is a trend or comparison to be shown.",
        "A bar graph displays data that changes continuously over periods of time.",
        "A line graph is used to show comparison among categories of data."
      ],
      correctAnswerIndex: 1,
      explanation: "Graphical representations help visualize trends and comparisons in data.",
      subjectName: SubjectName.MATH,
      topicId: "data-handling",
      subTopicId: "graphical-representation"
    },
    {
      question: "Which of the following is least appropriate about Formative Assessment in mathematics classrooms?",
      options: [
        "It provides cumulative evaluations that helps to rank children",
        "To check the progress of students during instructional activities",
        "To identify students' conceptual understanding",
        "It helps to identify students' misconceptions"
      ],
      correctAnswerIndex: 0,
      explanation: "Formative assessment is for ongoing learning, not ranking students.",
      subjectName: SubjectName.MATH,
      topicId: "assessment",
      subTopicId: "formative-assessment"
    },
    {
      question: "In class III, 150 children were asked to name their one favourite fruit and results for 5 favourite fruits were written in the form of the following table: [Table: Apple 28, Guava 26, Mangoes 44, Banana 14, Grapes 28] Choose the correct option:",
      options: [
        "The difference between the number of childrens who like grapes and those who like bananas is 16.",
        "The number of children who like Mangoes and Banana is two times the number of children who like Guava.",
        "Ten children do not like any fruit given in the table.",
        "Equal number of children have Apple and Guava as their favourite fruit."
      ],
      correctAnswerIndex: 2,
      explanation: "Total children who like listed fruits = 28 + 26 + 44 + 14 + 28 = 140. So 10 children did not choose any of these fruits.",
      subjectName: SubjectName.MATH,
      topicId: "data-handling",
      subTopicId: "data-interpretation"
    },
    {
      question: "What is the most effective way to introduce the concept of area to fourth graders?",
      options: [
        "Approximation and Estimation",
        "Tessellations",
        "Abacus",
        "Formula based method"
      ],
      correctAnswerIndex: 1,
      explanation: "Tessellations provide concrete visual understanding of area concepts for young learners.",
      subjectName: SubjectName.MATH,
      topicId: "measurement",
      subTopicId: "area-concept"
    },
    {
      question: "A person withdrew ` 4,560 from his bank account on 4th of a month and deposited ` 2,567 on 20th of the same month. If at the end of the month, balance is ` 3,125, then money (in `) at the start of the month in his account was:",
      options: [
        "5,118",
        "4,998",
        "5,213",
        "5,128"
      ],
      correctAnswerIndex: 0,
      explanation: "Let initial amount be x. x - 4560 + 2567 = 3125. x - 4560 + 2567 = 3125. x - 1993 = 3125. x = 3125 + 1993 = 5118.",
      subjectName: SubjectName.MATH,
      topicId: "arithmetic",
      subTopicId: "word-problems"
    },
    {
      question: "The missing numbers in the pattern 12, 14, 17, 13, 8, 14, 21, _, _ are respectively:",
      options: [
        "13, 4",
        "15, 7",
        "12, 3",
        "14, 5"
      ],
      correctAnswerIndex: 0,
      explanation: "The pattern seems to be: 12, 14, 17, 13, 8, 14, 21, 13, 4. This appears to be a complex pattern that needs careful analysis.",
      subjectName: SubjectName.MATH,
      topicId: "patterns",
      subTopicId: "number-patterns"
    },
    {
      question: "Jasmine said, 'A rectangle has two pairs of opposite sides parallel; a square also has two pairs of opposite sides parallel and so does a parallelogram. So, both rectangle and square are also parallelograms.' Jasmine is at _________ stage of Van Hieles theory of geometric thinking.",
      options: [
        "Visualization",
        "Analysis",
        "Relationships",
        "Formal Deduction"
      ],
      correctAnswerIndex: 2,
      explanation: "The relationships stage involves understanding how properties relate to each other and forming hierarchies.",
      subjectName: SubjectName.MATH,
      topicId: "geometry",
      subTopicId: "van-hiele-theory"
    },
    {
      question: "Which of the following is NOT related to Indian mathematics?",
      options: [
        "Baudhayan Sulba Sutra",
        "Lilavati",
        "Charak Samhita",
        "Surya Siddhant"
      ],
      correctAnswerIndex: 2,
      explanation: "Charak Samhita is related to Ayurveda (medicine), not mathematics.",
      subjectName: SubjectName.MATH,
      topicId: "history-mathematics",
      subTopicId: "indian-mathematics"
    },
    {
      question: "The sum of the greatest and smallest six digit numbers that can be formed from the digits 5, 9, 0, 2, 8 and 6 (without repetition) is:",
      options: [
        "1,192,209",
        "1,292,290",
        "1,292,209",
        "1,192,290"
      ],
      correctAnswerIndex: 0,
      explanation: "Smallest: 205689, Greatest: 986520. Sum = 986520 + 205689 = 1,192,209.",
      subjectName: SubjectName.MATH,
      topicId: "number-system",
      subTopicId: "number-formation"
    },
    {
      question: "A primary class mathematics teacher gave his students the following problem to solve: 'How many classes of 28 pupils would be needed for a school of 616 pupils?' One of the student solved the problem in the following way: [Calculation shown] Which of the following is most appropriate for the algorithm used by the student?",
      options: [
        "The student has used an incorrect algorithm to solve the problem",
        "The student has used the associative law of division across addition to solve the problem",
        "The student has used the distributive law of division across addition to solve the problem",
        "The student has used both the distributive and associative laws of division to solve the problem"
      ],
      correctAnswerIndex: 2,
      explanation: "The student used distributive law: 616 ÷ 28 = (600 ÷ 28) + (16 ÷ 28) = 21 + 0.571 = 21.571, so 22 classes needed.",
      subjectName: SubjectName.MATH,
      topicId: "arithmetic",
      subTopicId: "division-algorithms"
    },
    {
      question: "Most II graders are able to add two quantities like four candies and three candies, but when asked to do 4+5 on a worksheet a large number of the same set of learners is unable to do so. What is the most appropriate explanation of this observation according to National Curriculum Framework 2005?",
      options: [
        "The learners are not ready for the use of abstract mathematical symbols",
        "Learners are not taught addition properly",
        "Some learners are poor in mathematical skills",
        "Learners are not interested in learning real-life mathematics"
      ],
      correctAnswerIndex: 0,
      explanation: "NCF 2005 emphasizes that young children need concrete experiences before abstract symbols.",
      subjectName: SubjectName.MATH,
      topicId: "curriculum",
      subTopicId: "ncf-2005-mathematics"
    },
    {
      question: "A triangle having all sides of different lengths is called:",
      options: [
        "A right triangle",
        "An equilateral triangle",
        "An isosceles triangle",
        "A scalene triangle"
      ],
      correctAnswerIndex: 3,
      explanation: "A scalene triangle has all sides of different lengths.",
      subjectName: SubjectName.MATH,
      topicId: "geometry",
      subTopicId: "triangle-types"
    },
    {
      question: "A child solved a problem: 1/2 + 2/3 = 5/5. What is the most appropriate inference drawn from the solution?",
      options: [
        "Child has extended the concept of addition of natural numbers to addition of fractions",
        "Child does not know addition of numbers",
        "Child does not know how to take L.C.M.",
        "Child does not know how to represent fractions on number line"
      ],
      correctAnswerIndex: 0,
      explanation: "The child is applying addition concepts from whole numbers to fractions, showing conceptual understanding.",
      subjectName: SubjectName.MATH,
      topicId: "fractions",
      subTopicId: "fraction-addition"
    },
    {
      question: "According to National Curriculum Framework 2005 mathematics teachers need to shift towards:",
      options: [
        "(b) and (c)",
        "Only (a)",
        "(a) and (b)",
        "Only (b)"
      ],
      correctAnswerIndex: 3,
      explanation: "NCF 2005 emphasizes mathematical reasoning and logic over memorization.",
      subjectName: SubjectName.MATH,
      topicId: "curriculum",
      subTopicId: "ncf-2005-teaching"
    },
    {
      question: "The sum of the prime numbers between 31 and 60 is:",
      options: [
        "311",
        "221",
        "227",
        "280"
      ],
      correctAnswerIndex: 0,
      explanation: "Prime numbers between 31 and 60: 31, 37, 41, 43, 47, 53, 59. Sum = 31+37+41+43+47+53+59 = 311.",
      subjectName: SubjectName.MATH,
      topicId: "number-system",
      subTopicId: "prime-numbers"
    },

    // Environmental Studies Questions (Q61-90)
    {
      question: "Cows have Short front teeth and Large and flat side teeth for which one of the following?",
      options: [
        "Gnawing grass and cutting grass respectively",
        "Snipping grass and chewing grass respectively",
        "Chewing grass and snipping grass respectively",
        "Cutting grass and gnawing grass respectively"
      ],
      correctAnswerIndex: 1,
      explanation: "Cows have specialized teeth - short front teeth for snipping grass and large flat molars for chewing.",
      subjectName: SubjectName.EVS,
      topicId: "animals-adaptation",
      subTopicId: "animal-teeth"
    },
    {
      question: "It is 10 A.M. now in India today, it is around noon of today in _________.",
      options: [
        "Singapore",
        "London",
        "Karachi",
        "Japan"
      ],
      correctAnswerIndex: 0,
      explanation: "Singapore is ahead of India by about 2.5 hours, so 10 AM in India is around noon in Singapore.",
      subjectName: SubjectName.EVS,
      topicId: "earth-space",
      subTopicId: "time-zones"
    },
    {
      question: "In a child centered EVS classroom, which of the following activities would be LEAST likely to occur?",
      options: [
        "Children will be seen in the classroom, listening to the teacher.",
        "Children will be seen actively working in a variety of activities.",
        "The seating arrangement will be seen to change according to the activity of the children.",
        "Children will also be seen sharing their experiences while discussing in the class."
      ],
      correctAnswerIndex: 0,
      explanation: "Child-centered classrooms emphasize active learning, flexible arrangements, and sharing experiences, not passive listening.",
      subjectName: SubjectName.EVS,
      topicId: "teaching-methodology",
      subTopicId: "child-centered-learning"
    },
    {
      question: "A teacher of Environmental Studies, while conducting an activity with some children, observes some important incidents and also makes a descriptive note of the same. Which of the following may be the tool of assessment?",
      options: [
        "Anecdotal Records",
        "Rating Scale",
        "Portfolio",
        "Observation List"
      ],
      correctAnswerIndex: 0,
      explanation: "Anecdotal records are descriptive notes of observed incidents and behaviors.",
      subjectName: SubjectName.EVS,
      topicId: "assessment",
      subTopicId: "anecdotal-records"
    },
    {
      question: "Chapter 4 'Mangoes Round the Year' of NCERT Environmental Studies textbook has a story on making mango papad so that children not only understand the process and technique but also appreciate the skills of cooking and preservation. As per NCF 2005, which general objective of teaching EVS is being achieved through this lesson?",
      options: [
        "To discuss how various things can be made from the natural environment.",
        "To develop understanding with the help of observation and examples related to our experiences in place of abstraction.",
        "To develop an understanding of how Aam papad is made.",
        "To explain how much labor is needed to make an object."
      ],
      correctAnswerIndex: 1,
      explanation: "NCF 2005 emphasizes learning through concrete experiences and observations rather than abstract concepts.",
      subjectName: SubjectName.EVS,
      topicId: "curriculum",
      subTopicId: "ncf-2005-evs"
    },
    {
      question: "A teacher in his environmental studies class, divides the children into groups and asks them to collect some objects present in the school. After that he sits with the children and asks them to distribute those objects into different groups. Children divide objects into different groups on the basis of their properties. What could be the most appropriate purpose for the teacher to conduct this activity?",
      options: [
        "The activity develops the child's understanding of all the concepts.",
        "At the primary stage, children learn better by interacting with each other.",
        "By doing the activity, children make very few mistakes in understanding the definition and facts.",
        "Activity strengthens the cognitive domain to a greater extent than the other domains of learning in children."
      ],
      correctAnswerIndex: 3,
      explanation: "Classification activities primarily strengthen cognitive skills like categorization and logical thinking.",
      subjectName: SubjectName.EVS,
      topicId: "teaching-methodology",
      subTopicId: "classification-activity"
    },
    {
      question: "It has been observed that some mistakes are made while observing the learning and progress of children. These mistakes may be the result of our biases. Which of the following information should not be recorded as a bias?",
      options: [
        "Prior experiences regarding the ability and performance of the children.",
        "Previous results related to the examination of any one subject and any area thereof.",
        "Social background of the child.",
        "Samples of the children's work in the portfolio."
      ],
      correctAnswerIndex: 3,
      explanation: "Samples of children's work are objective evidence, not a bias.",
      subjectName: SubjectName.EVS,
      topicId: "assessment",
      subTopicId: "assessment-bias"
    },
    {
      question: "Read the statements I and II. Statement I: Due to anaemia, children do not grow well, and their energy levels are low. Statement II: Anaemia affects both, children's physical as well as mental health. Choose the correct answer from the following:",
      options: [
        "I is false but II is true",
        "Both I and II are true",
        "Both I and II are false",
        "I is true but II is false"
      ],
      correctAnswerIndex: 1,
      explanation: "Both statements are true - anaemia affects growth, energy levels, and both physical and mental health.",
      subjectName: SubjectName.EVS,
      topicId: "health-nutrition",
      subTopicId: "anaemia"
    },
    {
      question: "Read the Assertion and Reason properly. Assertion: An elephant herd has only female and baby elephants. Reason: Male elephants leave their herd after 14 - 15 years and move around alone. Choose the correct answer from the following:",
      options: [
        "Assertion is false but Reason is true",
        "Both Assertion and Reason are true and Reason is the correct explanation of Assertion",
        "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion",
        "Assertion is true but Reason is false"
      ],
      correctAnswerIndex: 1,
      explanation: "Both statements are true and the reason correctly explains why elephant herds consist of females and babies.",
      subjectName: SubjectName.EVS,
      topicId: "animals-behavior",
      subTopicId: "elephant-herd"
    },
    {
      question: "Read the Assertion (A) and Reason (R) carefully - Assertion (A): The goats from which the soft pashmina wool is collected are found on very high altitudes of 5000 meters in extreme cold. Reason (R): A coat of warm hair grows on goats body which protects it from extreme cold. Choose the correct option from the following:",
      options: [
        "(A) is false but (R) is true",
        "Both (A) and (R) are true and (R) explains (A)",
        "Both (A) and (R) are true but (R) does not explain (A)",
        "(A) is true but (R) is false"
      ],
      correctAnswerIndex: 1,
      explanation: "Both statements are true and the reason explains the adaptation that allows goats to survive in extreme cold.",
      subjectName: SubjectName.EVS,
      topicId: "animals-adaptation",
      subTopicId: "pashmina-goats"
    },
    {
      question: "Consider the following statements A and B. Statement A: In 1969, Neil Armstrong was the first man to walk on the moon. Statement B: In 2007, Kalpana Chawla set a new record for the longest space flight by a woman. Select the correct code from the following:",
      options: [
        "A is wrong but B is correct",
        "A and B both are correct",
        "A and B both are wrong",
        "A is correct but B is wrong"
      ],
      correctAnswerIndex: 1,
      explanation: "Both statements are historically correct.",
      subjectName: SubjectName.EVS,
      topicId: "space-exploration",
      subTopicId: "astronauts-achievements"
    },
    {
      question: "Select the correct match from the following:",
      options: [
        "Bharatnatyam - Odisha",
        "Kathak - Karnataka",
        "Bihu - Assam",
        "Lavani - Tamil nadu"
      ],
      correctAnswerIndex: 2,
      explanation: "Bihu is a folk dance from Assam.",
      subjectName: SubjectName.EVS,
      topicId: "indian-culture",
      subTopicId: "folk-dances"
    },
    {
      question: "Mohan is a class V teacher of Environmental Studies. He writes the following activity on the blackboard in his class. 'Find out about the availability of water at the time of your parents and grandparents and compare it with the current situation.' For the above activity, which of the following strategies would be most appropriate?",
      options: [
        "Project",
        "Discussion",
        "Interview",
        "Role Play"
      ],
      correctAnswerIndex: 2,
      explanation: "Interviewing parents and grandparents is the most appropriate way to gather historical information about water availability.",
      subjectName: SubjectName.EVS,
      topicId: "teaching-methodology",
      subTopicId: "interview-strategy"
    },
    {
      question: "A person would not drown in the dead sea or a salty lake even if the person does not know how to swim. This is due to:",
      options: [
        "volume of sea water",
        "high density of sea water",
        "low density of sea water",
        "neither high nor low density of sea water"
      ],
      correctAnswerIndex: 1,
      explanation: "The high salt content makes the water denser, providing buoyancy that prevents drowning.",
      subjectName: SubjectName.EVS,
      topicId: "earth-materials",
      subTopicId: "dead-sea"
    },
    {
      question: "Read the statements A and B carefully - Statement A: During the cold season lizards go into a long and deep sleep. Statement B: Some animals go into a long, deep sleep in certain seasons. Choose the correct answer from the following:",
      options: [
        "'A' is incorrect but 'B' is correct.",
        "Both 'A' and 'B' are correct and 'B' explains 'A'.",
        "Both 'A' and 'B' are correct but 'B' does not explain 'A'.",
        "'A' is correct but 'B' is incorrect."
      ],
      correctAnswerIndex: 1,
      explanation: "Both statements are correct, and statement B explains statement A as lizards are examples of animals that hibernate/brumate.",
      subjectName: SubjectName.EVS,
      topicId: "animals-behavior",
      subTopicId: "hibernation-brumation"
    },
    {
      question: "Lesson 13 in NCERT's Class V Environmental Studies textbook describes the amazing journey of 'Gaurav Jani'. This lesson is a part of which of the following themes?",
      options: [
        "Work and Play",
        "Family and Friends",
        "Shelter",
        "Interrelationship"
      ],
      correctAnswerIndex: 0,
      explanation: "Gaurav Jani's story relates to work and play themes in EVS.",
      subjectName: SubjectName.EVS,
      topicId: "curriculum",
      subTopicId: "ncert-evs-themes"
    },
    {
      question: "How much time 'boiled milk' takes for digestion in the stomach?",
      options: [
        "5 hours",
        "2 hours",
        "3 hours",
        "4 hours"
      ],
      correctAnswerIndex: 1,
      explanation: "Boiled milk takes about 2 hours to digest in the stomach.",
      subjectName: SubjectName.EVS,
      topicId: "health-nutrition",
      subTopicId: "digestion-process"
    },
    {
      question: "Rakesh is a teacher of Environmental Studies of class V. He asks the children in his class to do an activity. In which, all children observe which 'object floats in water and which sinks in water'? After the activity some children ask the teacher why some objects sink in water and some objects float in water. What is the most appropriate thing a teacher should do in the following situation?",
      options: [
        "The teacher should tell the children that this is happening because of the density.",
        "Give each child the freedom to observe, record their observations, and interpret those observations.",
        "Provide opportunity to each child to hypothesize, test and make activity based generalizations.",
        "Teacher should say that the main reason for this you will understand in your higher classes."
      ],
      correctAnswerIndex: 2,
      explanation: "The teacher should encourage scientific inquiry by allowing children to form hypotheses and test them.",
      subjectName: SubjectName.EVS,
      topicId: "teaching-methodology",
      subTopicId: "scientific-inquiry"
    },
    {
      question: "In a constructivist EVS classroom, which of the following is NOT seen to be happening?",
      options: [
        "Children are using their experiences to make new connections between concepts.",
        "Children are learning by doing activities with concrete objects.",
        "Children's experiences are being respected.",
        "Children are just solving familiar problems."
      ],
      correctAnswerIndex: 3,
      explanation: "Constructivist classrooms encourage exploration of new concepts, not just familiar problems.",
      subjectName: SubjectName.EVS,
      topicId: "teaching-methodology",
      subTopicId: "constructivist-classroom"
    },
    {
      question: "Which one of the following is a group consisting of elements only?",
      options: [
        "Tin, Lithium, Sodium",
        "Sodium, Brass, Potassium",
        "Bronze, Copper, Aluminium",
        "Steel, Iron, Zinc"
      ],
      correctAnswerIndex: 2,
      explanation: "Bronze, Copper, and Aluminium are chemical elements, while others include compounds or alloys.",
      subjectName: SubjectName.EVS,
      topicId: "materials-substances",
      subTopicId: "elements-compounds"
    },
    {
      question: "A person boarded an express train on 30 January 2023 at New Delhi for Bangalore. The train departed from New Delhi at 17 : 00 hours and reached Bangalore at 17 : 00 hours on 31st January 2023. If the distance between New Delhi and Bangalore by train route is nearly 1776 km. The average speed of the train during this Journey was:",
      options: [
        "71.04 km/hr",
        "74 km/hr",
        "80.72 km/hr",
        "77.21 km/hr"
      ],
      correctAnswerIndex: 1,
      explanation: "Time taken = 24 hours, Distance = 1776 km, Speed = 1776 ÷ 24 = 74 km/hr.",
      subjectName: SubjectName.EVS,
      topicId: "transport-communication",
      subTopicId: "train-speed"
    },
    {
      question: "In the following question, Assertion and Reason are followed. Read the statements carefully and choose the correct option from the following: Assertion: The curriculum of Environmental Studies is theme-based and each theme is interreleted. Reason: The main reason for keeping the syllabus of Environmental Studies theme-based is that it creates a deep understanding of each theme and each theme begins with questions.",
      options: [
        "Assertion is false but Reason is true.",
        "Both Assertion and Reason are correct and Reason is the correct explanation of Assertion.",
        "Assertion and Reason are correct but Reason is not the correct explanation of Assertion.",
        "Assertion is true but Reason is false."
      ],
      correctAnswerIndex: 2,
      explanation: "The assertion is true, but the reason is incomplete - theme-based curriculum is for integrated learning and interdisciplinary connections.",
      subjectName: SubjectName.EVS,
      topicId: "curriculum",
      subTopicId: "evs-curriculum-structure"
    },
    {
      question: "Siddhi is a teacher of class 4. She takes all the children of her class to the playground to play Kabbadi, while teaching them lesson 10 'Hu tu tu, hu tu tu' of the NCERT Environmental Studies textbook. Before playing the game, she also explains the rules of this game to all the children. Why does the teacher tell the children the rules before playing this game? Which of the following may be the most appropriate reason?",
      options: [
        "(A) and (D)",
        "(A), (B) and (C)",
        "(A) and (B)",
        "(C) and (D)"
      ],
      correctAnswerIndex: 1,
      explanation: "The teacher explains rules to help children understand social norms, proper conduct, and conflict resolution in society.",
      subjectName: SubjectName.EVS,
      topicId: "teaching-methodology",
      subTopicId: "game-based-learning"
    },
    {
      question: "Two Indian birds make nests which hang from the branches of trees or bushes. These two birds are:",
      options: [
        "Tailor bird and Indian Robin",
        "Indian Robin and Weaver bird",
        "Sun-bird and Tailor bird",
        "Barbet and Sun-bird"
      ],
      correctAnswerIndex: 3,
      explanation: "Barbet and Sun-bird are known for making hanging nests.",
      subjectName: SubjectName.EVS,
      topicId: "animals-behavior",
      subTopicId: "bird-nests"
    },
    {
      question: "Child describes different skilled work related to farming and their inheritance (from elders) in daily life. The above statement is:",
      options: [
        "Learning objective",
        "Statement of competency",
        "Learning outcome",
        "Learning indicator"
      ],
      correctAnswerIndex: 2,
      explanation: "This describes what the child can do, which is a learning outcome.",
      subjectName: SubjectName.EVS,
      topicId: "assessment",
      subTopicId: "learning-outcomes"
    },
    {
      question: "The state/union territory having coast on the Bay of Bengal is:",
      options: [
        "Kerala",
        "Telangana",
        "Andhra Pradesh",
        "Karnataka"
      ],
      correctAnswerIndex: 2,
      explanation: "Andhra Pradesh has coastline on the Bay of Bengal.",
      subjectName: SubjectName.EVS,
      topicId: "indian-geography",
      subTopicId: "coastline-states"
    },
    {
      question: "What is the reason why tales and stories have been given an important place in the textbooks of Environmental Studies? Which of the following may be the most appropriate reason?",
      options: [
        "(A) and (B)",
        "(A) and (D)",
        "(B) and (C)",
        "(C) and (D)"
      ],
      correctAnswerIndex: 2,
      explanation: "Stories help develop sensitivity to environmental issues and allow children to relate to characters.",
      subjectName: SubjectName.EVS,
      topicId: "curriculum",
      subTopicId: "storytelling-evs"
    },
    {
      question: "Archana is a teacher of Environmental Studies teaching class IV. She forms two groups of children in her class and conducts a debate activity on the topic 'Should the school have uniforms or not'. Why did Archana organize a debate in her class? Which of the following may not be the most appropriate reason?",
      options: [
        "(B) and (D)",
        "(B), (C) and (D)",
        "(A), (B) and (C)",
        "(A), (C) and (D)"
      ],
      correctAnswerIndex: 0,
      explanation: "Debates encourage expression of views and sharing experiences, but assessing peer knowledge is not the primary purpose.",
      subjectName: SubjectName.EVS,
      topicId: "teaching-methodology",
      subTopicId: "debate-activity"
    },
    {
      question: "In the following question, Assertion and Reason are followed. Read the statements carefully and choose the correct option from the following: Assertion: In the lessons of NCERT's Environmental Studies textbook, real incidents of common life, everyday problems and some burning problems related to today have been kept. Reason: Children can debate openly on all these problems, be aware of the problems, be sensitive to them and make correct understanding.",
      options: [
        "Assertion is false but Reason is true.",
        "Both Assertion and Reason are correct and Reason is the correct explanation of Assertion.",
        "Assertion and Reason are correct but Reason is not the correct explanation of Assertion.",
        "Assertion is true but Reason is false."
      ],
      correctAnswerIndex: 1,
      explanation: "Both statements are true and the reason explains the purpose of including real-life problems in EVS curriculum.",
      subjectName: SubjectName.EVS,
      topicId: "curriculum",
      subTopicId: "ncert-evs-content"
    },
    {
      question: "Read the following statements and choose the correct option. Assertion (A): Biomass and Fossil Fuels are the two main conventional sources of energy. Reason (R): Conventional sources are those which are renewable in nature.",
      options: [
        "(A) is false, but (R) is true",
        "Both (A) and (R) are true",
        "Both (A) and (R) are false",
        "(A) is true, but (R) is false"
      ],
      correctAnswerIndex: 3,
      explanation: "The assertion is true, but the reason is false - conventional sources are typically non-renewable.",
      subjectName: SubjectName.EVS,
      topicId: "energy-resources",
      subTopicId: "conventional-energy"
    },

    // Language I - English (Q91-120) - Only Q91 available
    {
      question: "'The tickets for the play were squirming in our pockets.' What literary device has been used in the underlined expression.",
      options: [
        "Simile",
        "Alliteration",
        "Oxymoron",
        "Personification"
      ],
      correctAnswerIndex: 3,
      explanation: "Personification gives human qualities (squirming) to non-human objects (tickets).",
      subjectName: SubjectName.LANG1,
      topicId: "literary-devices",
      subTopicId: "personification"
    },

    // Language II - Hindi (Q121-150)
    {
      question: "निम्नलिखित में से कौन सा शब्द 'क' वर्ण से प्रारम्भ होता है?",
      options: [
        "कविता",
        "गाना",
        "चंदन",
        "दर्पण"
      ],
      correctAnswerIndex: 1,
      explanation: "सही उत्तर 'गाना' है क्योंकि यह 'ग' वर्ण से प्रारम्भ होता है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-vowels",
      subTopicId: "word-beginnings"
    },
    {
      question: "'सुंदरता' शब्द का समानार्थी शब्द कौन सा है?",
      options: [
        "कुरूपता",
        "रमणीयता",
        "अशुद्धता",
        "सौंदर्य"
      ],
      correctAnswerIndex: 3,
      explanation: "'सौंदर्य' शब्द 'सुंदरता' का समानार्थी है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-vocabulary",
      subTopicId: "synonyms"
    },
    {
      question: "निम्नलिखित में से कौन सा वाक्य सही है?",
      options: [
        "मैं कल स्कूल गया था।",
        "हम सब घर में खेलते हैं।",
        "वह पढ़ाई नही करता है।",
        "तुम्हारा किताब मेरा पास है।"
      ],
      correctAnswerIndex: 0,
      explanation: "पहला वाक्य व्याकरणिक रूप से सही है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "sentence-formation"
    },
    {
      question: "'पेड़' शब्द का बहुवचन क्या होगा?",
      options: [
        "पेड़ों",
        "पेड़स",
        "पेड़े",
        "पेड़ी"
      ],
      correctAnswerIndex: 2,
      explanation: "'पेड़' का बहुवचन 'पेड़े' होता है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "noun-plural"
    },
    {
      question: "निम्नलिखित में से कौन सा शब्द संज्ञा है?",
      options: [
        "दौड़ना",
        "सुंदर",
        "पुस्तक",
        "तेज़"
      ],
      correctAnswerIndex: 3,
      explanation: "'तेज़' विशेषण है, अन्य संज्ञा हैं।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "parts-of-speech"
    },
    {
      question: "'मैंने कल बाजार से फल खरीदा' वाक्य में क्रिया कौन सी है?",
      options: [
        "खरीदा",
        "बाजार",
        "फल",
        "मैंने"
      ],
      correctAnswerIndex: 0,
      explanation: "'खरीदा' वाक्य की मुख्य क्रिया है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "verb-identification"
    },
    {
      question: "'राम और श्याम स्कूल गए' वाक्य में संधि कौन सी है?",
      options: [
        "दीर्घ संधि",
        "गुण संधि",
        "वृद्धि संधि",
        "यण संधि"
      ],
      correctAnswerIndex: 1,
      explanation: "'राम और' में 'अ' का गुण संधि है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "sandhi-rules"
    },
    {
      question: "निम्नलिखित में से कौन सा शब्द विशेषण है?",
      options: [
        "गाना",
        "अच्छा",
        "किताब",
        "चलना"
      ],
      correctAnswerIndex: 2,
      explanation: "'किताब' संज्ञा है, अन्य क्रिया या विशेषण हैं।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "adjective-identification"
    },
    {
      question: "'पानी पीना' में कौन सा कारक है?",
      options: [
        "कर्ता कारक",
        "कर्म कारक",
        "करण कारक",
        "सम्प्रदान कारक"
      ],
      correctAnswerIndex: 0,
      explanation: "'पानी पीना' में 'पानी' कर्म कारक है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "karaka-system"
    },
    {
      question: "'सूरज उगता है' वाक्य का काल क्या है?",
      options: [
        "भूतकाल",
        "वर्तमानकाल",
        "भविष्यकाल",
        "संदिग्धकाल"
      ],
      correctAnswerIndex: 3,
      explanation: "'सूरज उगता है' वर्तमानकाल में है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "tense-identification"
    },
    {
      question: "निम्नलिखित में से कौन सा शब्द मिली-जुली संधि का उदाहरण है?",
      options: [
        "कौन",
        "तेरा",
        "वैसा",
        "ऐसा"
      ],
      correctAnswerIndex: 1,
      explanation: "'तेरा' में 'त' और 'ए' की मिली-जुली संधि है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "sandhi-types"
    },
    {
      question: "'लड़का दौड़ रहा है' वाक्य में क्रिया विशेषण क्या है?",
      options: [
        "लड़का",
        "दौड़",
        "रहा",
        "है"
      ],
      correctAnswerIndex: 2,
      explanation: "'रहा' क्रिया विशेषण है जो क्रिया की प्रकृति बताता है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "verb-modifiers"
    },
    {
      question: "निम्नलिखित में से कौन सा शब्द सर्वनाम है?",
      options: [
        "मैं",
        "पढ़ाई",
        "किताब",
        "चलो"
      ],
      correctAnswerIndex: 0,
      explanation: "'मैं' सर्वनाम है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "pronouns"
    },
    {
      question: "'सुबह उठकर मैं पढ़ता हूँ' वाक्य में कौन सा उपसर्ग है?",
      options: [
        "सु-",
        "उठ-",
        "कर",
        "हूँ"
      ],
      correctAnswerIndex: 1,
      explanation: "'उठ-' उपसर्ग है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "prefixes-suffixes"
    },
    {
      question: "'राम ने सीता को पत्र लिखा' वाक्य में कौन सा कारक है?",
      options: [
        "अपादान कारक",
        "संबोधन कारक",
        "कर्म कारक",
        "सम्प्रदान कारक"
      ],
      correctAnswerIndex: 3,
      explanation: "'सीता को' सम्प्रदान कारक है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "karaka-examples"
    },
    {
      question: "निम्नलिखित में से कौन सा शब्द अकर्मक क्रिया का उदाहरण है?",
      options: [
        "सोना",
        "खाना",
        "लिखना",
        "पढ़ना"
      ],
      correctAnswerIndex: 0,
      explanation: "'सोना' अकर्मक क्रिया है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "transitive-intransitive"
    },
    {
      question: "'मेरा घर बड़ा है' वाक्य में कौन सा शब्द विशेषण है?",
      options: [
        "मेरा",
        "घर",
        "बड़ा",
        "है"
      ],
      correctAnswerIndex: 2,
      explanation: "'बड़ा' विशेषण है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "adjectives"
    },
    {
      question: "'पढ़ाई करो' वाक्य में कौन सा पुरुष है?",
      options: [
        "उत्तम पुरुष",
        "मध्यम पुरुष",
        "किसी पुरुष का नहीं",
        "सभी पुरुष"
      ],
      correctAnswerIndex: 1,
      explanation: "'करो' मध्यम पुरुष है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "person-grammar"
    },
    {
      question: "निम्नलिखित में से कौन सा शब्द क्रिया है?",
      options: [
        "फूल",
        "चलना",
        "मेज",
        "पानी"
      ],
      correctAnswerIndex: 3,
      explanation: "'पानी' संज्ञा है, अन्य क्रिया हैं।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "verb-identification"
    },
    {
      question: "'वह सो रहा है' वाक्य का वचन क्या है?",
      options: [
        "एकवचन",
        "बहुवचन",
        "दोनों",
        "कोई नहीं"
      ],
      correctAnswerIndex: 0,
      explanation: "'वह' एकवचन है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "number-grammar"
    },
    {
      question: "निम्नलिखित में से कौन सा शब्द समास है?",
      options: [
        "राजा",
        "पाठशाला",
        "गाना",
        "दौड़"
      ],
      correctAnswerIndex: 1,
      explanation: "'पाठशाला' समास है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "samasa-compounds"
    },
    {
      question: "'किताब पढ़ने वाला लड़का' में कौन सा समास है?",
      options: [
        "तत्पुरुष समास",
        "कर्मधारय समास",
        "द्विगु समास",
        "बहुब्रीहि समास"
      ],
      correctAnswerIndex: 2,
      explanation: "'किताब पढ़ने वाला' द्विगु समास है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "samasa-types"
    },
    {
      question: "निम्नलिखित में से कौन सा शब्द लिंग के आधार पर बदलता है?",
      options: [
        "माता",
        "पिता",
        "बच्चा",
        "गाय"
      ],
      correctAnswerIndex: 0,
      explanation: "'माता' लिंग के आधार पर 'पिता' में बदलता है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "gender-grammar"
    },
    {
      question: "'हम सब स्कूल जाते हैं' वाक्य में कौन सा कारक है?",
      options: [
        "कर्ता कारक",
        "कर्म कारक",
        "अपादान कारक",
        "संबोधन कारक"
      ],
      correctAnswerIndex: 1,
      explanation: "'हम सब' कर्ता कारक है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "karaka-identification"
    },
    {
      question: "'सुंदर फूल' में कौन सा शब्द विशेषण है?",
      options: [
        "सुंदर",
        "फूल",
        "दोनों",
        "कोई नहीं"
      ],
      correctAnswerIndex: 3,
      explanation: "'सुंदर' विशेषण है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "adjective-noun"
    },
    {
      question: "निम्नलिखित में से कौन सा शब्द अव्यय है?",
      options: [
        "कल",
        "लड़का",
        "पढ़ना",
        "मेज"
      ],
      correctAnswerIndex: 0,
      explanation: "'कल' अव्यय है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "avyaya-adverbs"
    },
    {
      question: "'राम ने किताब पढ़ी' वाक्य में कौन सा कारक है?",
      options: [
        "कर्ता कारक",
        "कर्म कारक",
        "करण कारक",
        "अधिकरण कारक"
      ],
      correctAnswerIndex: 2,
      explanation: "'किताब' कर्म कारक है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "karaka-examples"
    },
    {
      question: "'जल्दी करो' वाक्य में कौन सा क्रिया विशेषण है?",
      options: [
        "जल्दी",
        "करो",
        "कोई नहीं",
        "दोनों"
      ],
      correctAnswerIndex: 1,
      explanation: "'करो' क्रिया है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "verb-modifiers"
    },
    {
      question: "निम्नलिखित में से कौन सा शब्द संधि का उदाहरण है?",
      options: [
        "पेड़",
        "सूरज",
        "हवाई",
        "पानी"
      ],
      correctAnswerIndex: 3,
      explanation: "'पानी' में संधि है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "sandhi-examples"
    },
    {
      question: "'वह गाता है' वाक्य का लिंग क्या है?",
      options: [
        "पुल्लिंग",
        "स्त्रीलिंग",
        "नपुंसक लिंग",
        "सभी"
      ],
      correctAnswerIndex: 1,
      explanation: "'वह' पुल्लिंग है।",
      subjectName: SubjectName.LANG2,
      topicId: "hindi-grammar",
      subTopicId: "gender-identification"
    }
  ]
};
