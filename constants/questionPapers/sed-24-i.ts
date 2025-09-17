import { QuestionPaper, SubjectName } from '../../types';

export const QUESTION_PAPER_SED_24_I: QuestionPaper = {
  id: 'sed-24-i',
  name: 'CTET Paper - Dec 2024',
  description: 'Official past paper with 150 questions.',
  questions: [
    // CDP (30 Questions)
    
    {      question: 'Dysgraphia is characterised by :',
      options: [
        'Difficulties in writing',
        'Lack of reading fluency',
        'Repetitive behavioural patterns',
        'Delayed motor skills',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Dysgraphia is a learning disability that affects writing abilities. It can manifest as difficulties with spelling, poor handwriting, and trouble putting thoughts on paper.',
      subjectName: SubjectName.CDP,
      topicId: 'cdp2',
      subTopicId: 'cdp2-sen',
    },
    
    {      question: "Two important cognitive development milestones of sensorimotor stage of Piaget's theory are :",
      options: [
        'Classification and seriation',
        'Object permanence and deferred imitation',
        'Reversibility of thought and hypothetic-deductive reasoning',
        'Animism and Transformation',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Object permanence (understanding that objects continue to exist even when they cannot be seen) and deferred imitation (the ability to reproduce a previously witnessed action at a later time) are key achievements of the sensorimotor stage.',
      subjectName: SubjectName.CDP,
      topicId: 'cdp1',
      subTopicId: 'cdp1-piaget',
    },
    
    {      question: 'In the constructivist view, learning is:',
      options: [
        'Conditioned to new behaviours',
        'Extending and transforming the current understanding',
        'Simply writing associations on blank slates',
        'Passively influenced by environmental events',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Constructivism posits that learners actively construct knowledge by building upon and modifying their existing understanding. It is a process of extending and transforming what they already know.',
      subjectName: SubjectName.CDP,
      topicId: 'cdp4',
      subTopicId: 'cdp4-constructs',
    },
    
    {      question: 'Which of the following is not a characteristic of a well-formulated critical thinking question?',
      options: [
        'It is open-ended and allows for multiple answers.',
        'It is based primarily on factual information.',
        'It requires analysis and evaluation of information.',
        'It promotes higher-level thinking and problem-solving skills.',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Critical thinking questions go beyond simple fact recall. They are designed to encourage analysis, evaluation, and synthesis. A question based only on factual information is a recall question, not a critical thinking one.',
      subjectName: SubjectName.CDP,
      topicId: 'cdp4',
      subTopicId: 'cdp4-critical-perspective',
    },
    
    {      question: 'Which one of the following statements is true about the role of heredity and environment?',
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
    
    {      question: 'Which one of the following is an emotion?',
      options: ['Fear', 'Memory', 'Attention', 'Stimulus'],
      correctAnswerIndex: 0,
      explanation:
        'Fear is a basic human emotion. Memory, attention, and stimulus are cognitive concepts or processes, not emotions.',
      subjectName: SubjectName.CDP,
      topicId: 'cdp3',
      subTopicId: 'cdp3-emotion',
    },
    
    {      question: 'Inclusive Education aims to:',
      options: [
        'Create separate schools for children with special needs',
        'Ensure that all children, regardless of background or ability, learn together in the same school',
        'Focus only on gifted and talented students',
        'Provide education only to students from disadvantaged backgrounds',
      ],
      correctAnswerIndex: 1,
      explanation:
        'The core principle of inclusive education is to create a single, supportive educational system where all learners, including those with special needs, are welcomed and taught together in regular classrooms.',
      subjectName: SubjectName.CDP,
      topicId: 'cdp2',
      subTopicId: 'cdp2-concept',
    },
    
    {      question: 'A teacher who pays more attention to boys than girls during a science experiment is demonstrating:',
      options: ['Inclusive education', 'Progressive education', 'Gender bias', 'Child-centered learning'],
      correctAnswerIndex: 2,
      explanation:
        'Gender bias in education refers to the preferential treatment or stereotyping of students based on their gender, which can negatively impact their learning and development.',
      subjectName: SubjectName.CDP,
      topicId: 'cdp4',
      subTopicId: 'cdp4-bias',
    },
    
    {      question: 'Which one of the following aptly defines relationship between cognition and emotion ?',
      options: [
        'Cognition and emotion are two independent systems.',
        'Emotion and cognition are interdependent on each other.',
        'Cognition influences emotions but reverse is not true.',
        'Emotions influence cognition but reverse is not true.',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Modern cognitive science shows that emotion and cognition are deeply intertwined and mutually influential. They are not separate systems but are interdependent.',
      subjectName: SubjectName.CDP,
      topicId: 'cdp3',
      subTopicId: 'cdp3-emotion',
    },
    
    {      question: 'Language development in primary classes is facilitated when:',
      options: [
        'teachers use concrete examples to refer to abstract concepts.',
        'teachers stress upon and enforce the use of formal language.',
        'teachers ignore and dismiss the mother tongue of the children.',
        'teachers begin from signs and symbols rather than concrete objects.',
      ],
      correctAnswerIndex: 0,
      explanation:
        "Children in primary classes are typically in Piaget's concrete operational stage. They learn best when abstract ideas are connected to concrete, real-world examples they can understand.",
      subjectName: SubjectName.CDP,
      topicId: 'cdp3',
      subTopicId: 'cdp3-learning-process',
    },
    
    {      question: 'Which one of the following correctly describes intrinsic motivation ?',
      options: [
        'Motivation that comes from external rewards',
        'Motivation that comes from personal enjoyment of the task',
        'Motivation that comes from competition with others',
        'Motivation that comes from a fear of punishment',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Intrinsic motivation is the drive to engage in a behavior because it is personally rewarding. The enjoyment of the task itself is the primary motivator.',
      subjectName: SubjectName.CDP,
      topicId: 'cdp3',
      subTopicId: 'cdp3-motivation',
    },
    
    {      question: 'According to Lev Vygotsky, children regulate their own behaviour through the :',
      options: [
        'Processes of adaptation',
        'Use of inner speech',
        'Process of equilibration',
        'Use of self-reinforcement',
      ],
      correctAnswerIndex: 1,
      explanation:
        "Vygotsky proposed that children use 'private speech' or 'inner speech' (talking to themselves) to plan, guide, and regulate their own behavior and thinking.",
      subjectName: SubjectName.CDP,
      topicId: 'cdp1',
      subTopicId: 'cdp1-vygotsky',
    },
    
    {      question: 'Repetitive and ritualistic behaviour is an identifying characteristic of :',
      options: [
        'Autism Spectrum Disorder',
        'Learning Disabilities',
        'Attention Deficit Hyperactivity Disorder',
        'Cerebral palsy',
      ],
      correctAnswerIndex: 0,
      explanation:
        'A preference for routines, repetitive movements, and ritualistic behaviors are hallmark characteristics of Autism Spectrum Disorder (ASD).',
      subjectName: SubjectName.CDP,
      topicId: 'cdp2',
      subTopicId: 'cdp2-sen',
    },
    
    {      question: 'Which one of the following statements about development is correct ?',
      options: [
        'Development is a discontinuous process.',
        'Development occurs in a spiral manner, not linear.',
        'Development proceeds from specific to general.',
        'Different aspects of development are independent to each other.',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Development is often described as spiral, not linear. Children may revisit certain skills and concepts at more advanced levels as they mature, rather than progressing in a straight line.',
      subjectName: SubjectName.CDP,
      topicId: 'cdp1',
      subTopicId: 'cdp1-foundations',
    },
    
    {      question: 'As per Jean Piaget, pre-operational stage is characterized by abilities to perform :',
      options: [
        'Classification and seriation',
        'Conservation and abstract thinking',
        'Imitation and reversibility',
        'Symbolic play and animism',
      ],
      correctAnswerIndex: 3,
      explanation:
        'The pre-operational stage is marked by the development of symbolic thought, which manifests as symbolic play (using one object to represent another) and animism (attributing lifelike qualities to inanimate objects).',
      subjectName: SubjectName.CDP,
      topicId: 'cdp1',
      subTopicId: 'cdp1-piaget',
    },
    
    {      question: 'Which one of the following is correct in context of gifted children ?',
      options: [
        'Gifted children are free from risk of learning disability.',
        'Gifted children certainly excel in all areas academic, social and emotional.',
        'Gifted students are always happy, popular and well adjusted.',
        'Gifted students learn at comparatively advanced pace than other students.',
      ],
      correctAnswerIndex: 3,
      explanation:
        'The primary characteristic of giftedness in an academic context is the ability to learn and process information at a faster pace than their peers.',
      subjectName: SubjectName.CDP,
      topicId: 'cdp2',
      subTopicId: 'cdp2-gifted',
    },
    
    {      question: 'What is the primary purpose of asking critical thinking questions ?',
      options: [
        'To enable students to develop procedural knowledge.',
        "To assess students' knowledge and understanding skills.",
        'To promote higher-level thinking and problem-solving skills.',
        'To encourage students to memorize information.',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Critical thinking questions are specifically designed to move beyond recall and comprehension, encouraging students to analyze, evaluate, synthesize, and solve complex problems.',
      subjectName: SubjectName.CDP,
      topicId: 'cdp4',
      subTopicId: 'cdp4-critical-perspective',
    },
    // Mathematics (30 questions)
    
    {      question: 'One crore is :',
      options: ['ten million', 'one million', 'one billion', 'hundred million'],
      correctAnswerIndex: 0,
      explanation:
        'In the Indian numbering system, 1 Crore is equal to 10 million in the international numbering system.',
      subjectName: SubjectName.MATH,
      topicId: 'math2',
      subTopicId: 'math2-numbers',
    },
    
    {      question: 'Which of the following statements is correct ?',
      options: [
        '1 is a prime number',
        '1 is a composite number',
        '1 is both, a prime and a composite number',
        '1 is neither prime nor a composite number',
      ],
      correctAnswerIndex: 3,
      explanation:
        'By definition, a prime number has exactly two distinct positive divisors, and a composite number has more than two. The number 1 has only one positive divisor (itself), so it fits into neither category.',
      subjectName: SubjectName.MATH,
      topicId: 'math2',
      subTopicId: 'math2-numbers',
    },
    
    {      question: 'The value of 25.3×5-35÷5-3×18.5 is :',
      options: ['283.05', '64.0', '95.0', '-26.5'],
      correctAnswerIndex: 1,
      explanation:
        'Following BODMAS/PEMDAS: 1. Division: 35 ÷ 5 = 7. 2. Multiplication: 25.3 × 5 = 126.5 and 3 × 18.5 = 55.5. 3. Subtraction: 126.5 - 7 - 55.5 = 119.5 - 55.5 = 64.0.',
      subjectName: SubjectName.MATH,
      topicId: 'math2',
      subTopicId: 'math2-numbers',
    },
    
    {      question: 'The number of degrees in 2 2/3 right angles is :',
      options: ['210', '285', '240', '330'],
      correctAnswerIndex: 2,
      explanation: 'A right angle is 90 degrees. 2 2/3 can be written as 8/3. So, (8/3) * 90 = 8 * 30 = 240 degrees.',
      subjectName: SubjectName.MATH,
      topicId: 'math1',
      subTopicId: 'math1-geometry',
    },
    
    {      question: 'Which one of the following costs least ?',
      options: [
        '75 packets of ₹ 750 each',
        '750 packets of ₹ 7.50 each',
        '7.5 dozen items of ₹ 750 each item',
        '75 dozen items of ₹ 7.50 each item',
      ],
      correctAnswerIndex: 3,
      explanation:
        '1: 75*750=56250. 2: 750*7.5=5625. 3: 7.5*12*750=67500. 4: 75*12*7.5 = 6750. The least cost is ₹6750, which corresponds to option 4.',
      subjectName: SubjectName.MATH,
      topicId: 'math2',
      subTopicId: 'math2-money',
    },
    
    {      question: 'Which of the following is a desirable teaching-learning practice in the context of Mathematics?',
      options: [
        'Open ended questions should be avoided to prevent confusion.',
        'Intuitive understanding of concepts should be encouraged.',
        'Open book tests should be avoided.',
        'Students should be told to follow the prescribed steps of solving problems.',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Effective mathematics teaching encourages students to develop an intuitive feel for concepts, rather than just memorizing procedures. This aligns with a constructivist approach.',
      subjectName: SubjectName.MATH,
      topicId: 'math3',
      subTopicId: 'math3-pedagogy',
    },
    
    {      question: 'Which of the following is least appropriate about Formative Assessment in mathematics classrooms?',
      options: [
        'It provides cumulative evaluations that helps to rank children',
        'To check the progress of students during instructional activities',
        "To identify students' conceptual understanding",
        "It helps to identify students' misconceptions",
      ],
      correctAnswerIndex: 0,
      explanation:
        'Formative assessment is for learning; its goal is to provide ongoing feedback to improve teaching and learning. Ranking children is a function of summative assessment, which is an assessment of learning.',
      subjectName: SubjectName.MATH,
      topicId: 'math3',
      subTopicId: 'math3-evaluation',
    },
    
    {      question: 'A triangle having all sides of different lengths is called :',
      options: ['A right triangle', 'An equilateral triangle', 'An isosceles triangle', 'A scalene triangle'],
      correctAnswerIndex: 3,
      explanation:
        'A scalene triangle is a triangle in which all three sides have different lengths, and all three angles have different measures.',
      subjectName: SubjectName.MATH,
      topicId: 'math1',
      subTopicId: 'math1-shapes',
    },
    
    {      question: 'The sum of the prime numbers between 31 and 60 is :',
      options: ['311', '221', '227', '280'],
      correctAnswerIndex: 2,
      explanation:
        'Prime numbers between 31 and 60 are 31, 37, 41, 43, 47, 53, 59. Their sum is 31+37+41+43+47+53+59 = 311.',
      subjectName: SubjectName.MATH,
      topicId: 'math2',
      subTopicId: 'math2-numbers',
    },
    
    {      question: 'Which of the following is NOT related to Indian mathematics ?',
      options: ['Baudhayan Sulba Sutra', 'Lilavati', 'Charak Samhita', 'Surya Siddhant'],
      correctAnswerIndex: 2,
      explanation:
        'Baudhayan Sulba Sutra, Lilavati (by Bhaskara II), and Surya Siddhanta are all ancient Indian texts related to mathematics and astronomy. Charak Samhita is a foundational text on Ayurveda (ancient Indian medicine).',
      subjectName: SubjectName.MATH,
      topicId: 'math3',
      subTopicId: 'math3-community',
    },
    
    {      question: 'The missing number (?) in the following : 43, 47, 53, 59, ?, 67, 71, 73 is :',
      options: ['61', '60', '63', '65'],
      correctAnswerIndex: 0,
      explanation:
        'The sequence consists of consecutive prime numbers starting from 43. The prime number after 59 is 61.',
      subjectName: SubjectName.MATH,
      topicId: 'math2',
      subTopicId: 'math2-patterns',
    },
    
    {      question: "Which of the following is not true about 'multiplicity of approaches' in teaching mathematics ?",
      options: [
        'Very often, there are many ways of solving a problem.',
        'It hampers the learning of child as it leads to confusion.',
        'Offering such a choice allows children to explore and use the approach that is most natural and easy for them.',
        'It is crucial for liberating school mathematics from the tyranny of the one correct answer.',
      ],
      correctAnswerIndex: 1,
      explanation:
        "Encouraging multiple approaches is a cornerstone of good mathematics pedagogy. It promotes flexible thinking and deeper understanding. The idea that it 'hampers learning' is incorrect.",
      subjectName: SubjectName.MATH,
      topicId: 'math3',
      subTopicId: 'math3-pedagogy',
    },
    
    {      question: 'Which of the following letters has no line of symmetry ?',
      options: ['L', 'A', 'M', 'X'],
      correctAnswerIndex: 0,
      explanation:
        "The letter 'L' has no line of symmetry. 'A' and 'M' have a vertical line of symmetry, and 'X' has both vertical and horizontal lines of symmetry.",
      subjectName: SubjectName.MATH,
      topicId: 'math1',
      subTopicId: 'math1-shapes',
    },
    
    {      question: 'If (7 * 2) × (123) = 92496, then value of * is :',
      options: ['2', '1', '4', '5'],
      correctAnswerIndex: 3,
      explanation: '92496 / 123 = 752. So (7 * 2) must be 752. The missing digit is 5.',
      subjectName: SubjectName.MATH,
      topicId: 'math2',
      subTopicId: 'math2-numbers',
    },
    
    {      question: 'Which of the following is true for word problems in school mathematics ?',
      options: [
        'Word problems refer to exercises where the child formalises the situation into a form where a specific mathematical technique can be applied.',
        'Word problems are not examples of mathematical modelling.',
        'Word problems are important in secondary classes only.',
        'Word problems focus more on procedural knowledge in mathematics.',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Word problems are designed to help students apply mathematical techniques to real-world or simulated situations, requiring them to formalize the problem.',
      subjectName: SubjectName.MATH,
      topicId: 'math3',
      subTopicId: 'math3-pedagogy',
    },
    
    {      question: 'Which of the following is the most important aspect of teaching of mathematics at primary level ?',
      options: [
        "Making mathematics part of children's life experiences.",
        'Developing rigour in calculations.',
        'Preparing for higher education and employment.',
        'Promoting and preparing for technology.',
      ],
      correctAnswerIndex: 0,
      explanation:
        "According to NCF-2005, the primary goal of mathematics education is the mathematization of the child's thought processes, which is best achieved by connecting mathematics to their real-life experiences.",
      subjectName: SubjectName.MATH,
      topicId: 'math3',
      subTopicId: 'math3-curriculum',
    },
    
    {      question: 'Which of the following activities is most likely to develop spatial reasoning among students ?',
      options: [
        'Identifying patterns in a number-chart',
        'Solving Sudoku puzzles',
        'Identifying tessellating figures',
        'Drawing bar graphs to represent data',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Tessellations (tiling patterns) directly involve understanding how shapes fit together in space, which is the essence of spatial reasoning. Sudoku and number charts are more about logical/numerical reasoning, and bar graphs are data representation.',
      subjectName: SubjectName.MATH,
      topicId: 'math1',
      subTopicId: 'math1-spatial',
    },
    
    {      question: 'Which of the following statements is NOT correct with regard to nature of mathematics?',
      options: [
        'Argumentation skill is important in construction of mathematical knowledge.',
        'Mathematical concepts are hierarchical in nature.',
        'Primary level mathematics is concrete and does not require abstraction.',
        'Mathematics uses special vocabulary to communicate ideas precisely.',
      ],
      correctAnswerIndex: 2,
      explanation:
        "While primary level mathematics should start with concrete materials, it inherently involves moving towards abstraction (e.g., the concept of the number '3' is abstract). Stating it does not require abstraction is incorrect.",
      subjectName: SubjectName.MATH,
      topicId: 'math3',
      subTopicId: 'math3-nature',
    },
    
    {      question: "In which of the following statements, number 'three' is used in ordinal sense ?",
      options: [
        'I live on the third floor of this building.',
        'This house has three rooms.',
        'All groups have three team members.',
        'This box contains many sets of three pencils.',
      ],
      correctAnswerIndex: 0,
      explanation:
        "An ordinal number indicates position or order (first, second, third). 'Third floor' indicates a position. The other options use 'three' as a cardinal number (indicating quantity).",
      subjectName: SubjectName.MATH,
      topicId: 'math2',
      subTopicId: 'math2-numbers',
    },
    
    {      question: 'Identify the correct statement.',
      options: [
        'If two figures have same area, their perimeters are equal.',
        'If two figures have same perimeter, their areas are equal.',
        'The units of perimeter and area are same.',
        'The shape of figure determines the perimeter.',
      ],
      correctAnswerIndex: 3,
      explanation:
        'The perimeter is the boundary of a shape. Therefore, the shape itself defines the length of its perimeter. The other statements are incorrect (e.g., a 2x6 rectangle and a 4x4 square have different perimeters but same area).',
      subjectName: SubjectName.MATH,
      topicId: 'math1',
      subTopicId: 'math1-measurement',
    },
    // EVS (30 questions)
    
    {      question: 'Which one/are of the following mountains is/are considered to be volcanic in origin ?',
      options: ['Mt. Kilimanjaro and Fujiyama', 'Mt. Kilimanjaro and The Alps', 'Fujiyama and The Alps', 'The Alps'],
      correctAnswerIndex: 0,
      explanation:
        'Mount Kilimanjaro in Tanzania and Mount Fuji (Fujiyama) in Japan are both classic examples of stratovolcanoes.',
      subjectName: SubjectName.EVS,
      topicId: 'evs2',
      subTopicId: 'evs2-shelter',
    },
    
    {      question: 'It is 7.30 P.M. in India today. It is 2 P.M. of the same day in:',
      options: ['London', 'Japan', 'Dhaka', 'Karachi'],
      correctAnswerIndex: 0,
      explanation:
        "India's time zone (IST) is GMT+5:30. 7:30 PM in India is 14:00 GMT (2 PM). London operates on GMT (or GMT+1 during summer time), making it the correct answer.",
      subjectName: SubjectName.EVS,
      topicId: 'evs2',
      subTopicId: 'evs2-travel',
    },
    
    {      question: 'The territorial states of Haryana are :',
      options: [
        'Himachal Pradesh, Rajasthan, Uttar Pradesh',
        'Uttar Pradesh, Uttarakhand, Madhya Pradesh',
        'Himachal Pradesh, Punjab, Bihar',
        'Bihar, Punjab, Uttar Pradesh',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Haryana shares its borders with Himachal Pradesh to the north, Rajasthan to the west and south, and Uttar Pradesh to the east.',
      subjectName: SubjectName.EVS,
      topicId: 'evs2',
      subTopicId: 'evs2-geography',
    },
    // Mathematics (Additional Questions 51-60)
    
    {      question: 'The value of (2 + √3)² is:',
      options: [
        '7 + 4√3',
        '7 + 2√3', 
        '4 + 2√3',
        '4 + 4√3'
      ],
      correctAnswerIndex: 0,
      explanation: 'Using the identity (a + b)² = a² + 2ab + b², we get (2)² + 2(2)(√3) + (√3)² = 4 + 4√3 + 3 = 7 + 4√3.',
      subjectName: SubjectName.MATH,
      topicId: 'math1',
      subTopicId: 'math1-algebra',
    },
    
    {      question: 'If the mean of 5 numbers is 20, then the sum of the numbers is:',
      options: [
        '100',
        '80',
        '120',
        '60'
      ],
      correctAnswerIndex: 0,
      explanation: 'Mean = Sum of numbers / Number of numbers. So 20 = Sum / 5, therefore Sum = 20 × 5 = 100.',
      subjectName: SubjectName.MATH,
      topicId: 'math1',
      subTopicId: 'math1-statistics',
    },
    
    {      question: 'The area of a circle with radius 7 cm is:',
      options: [
        '154 cm²',
        '44 cm²',
        '154π cm²',
        '44π cm²'
      ],
      correctAnswerIndex: 0,
      explanation: 'Area of circle = πr² = π(7)² = 49π cm². Since π ≈ 3.14, area ≈ 154 cm².',
      subjectName: SubjectName.MATH,
      topicId: 'math2',
      subTopicId: 'math2-geometry',
    },
    
    {      question: 'If x + 1/x = 3, then x³ + 1/x³ = ?',
      options: [
        '18',
        '27',
        '36',
        '9'
      ],
      correctAnswerIndex: 0,
      explanation: 'Given x + 1/x = 3. Cube both sides: (x + 1/x)³ = 27. So x³ + 3x(1/x)(x + 1/x) + 1/x³ = 27. x³ + 3(x + 1/x) + 1/x³ = 27. x³ + 3(3) + 1/x³ = 27. x³ + 1/x³ = 18.',
      subjectName: SubjectName.MATH,
      topicId: 'math1',
      subTopicId: 'math1-algebra',
    },
    
    {      question: 'The probability of rolling a 6 on a fair die is:',
      options: [
        '1/6',
        '1/2',
        '1/3',
        '1/4'
      ],
      correctAnswerIndex: 0,
      explanation: 'A fair die has 6 faces, each equally likely. Probability of rolling a 6 = 1/6.',
      subjectName: SubjectName.MATH,
      topicId: 'math1',
      subTopicId: 'math1-probability',
    },
    
    {      question: 'The sum of interior angles of a triangle is:',
      options: [
        '180°',
        '360°',
        '90°',
        '270°'
      ],
      correctAnswerIndex: 0,
      explanation: 'The sum of interior angles of any triangle is always 180°.',
      subjectName: SubjectName.MATH,
      topicId: 'math2',
      subTopicId: 'math2-geometry',
    },
    
    {      question: 'If log₁₀(2) = 0.3010, then log₁₀(200) = ?',
      options: [
        '2.3010',
        '3.3010',
        '1.3010',
        '0.3010'
      ],
      correctAnswerIndex: 0,
      explanation: 'log₁₀(200) = log₁₀(2 × 10²) = log₁₀(2) + log₁₀(10²) = 0.3010 + 2 = 2.3010.',
      subjectName: SubjectName.MATH,
      topicId: 'math1',
      subTopicId: 'math1-algebra',
    },
    
    {      question: 'The median of 1, 3, 5, 7, 9 is:',
      options: [
        '5',
        '4',
        '6',
        '3'
      ],
      correctAnswerIndex: 0,
      explanation: 'For odd number of observations, median is the middle value. Here, the middle value is 5.',
      subjectName: SubjectName.MATH,
      topicId: 'math1',
      subTopicId: 'math1-statistics',
    },
    
    {      question: 'The value of sin 30° is:',
      options: [
        '1/2',
        '√3/2',
        '1',
        '0'
      ],
      correctAnswerIndex: 0,
      explanation: 'sin 30° = 1/2.',
      subjectName: SubjectName.MATH,
      topicId: 'math1',
      subTopicId: 'math1-trigonometry',
    },
    
    {      question: 'If a coin is tossed twice, the probability of getting at least one head is:',
      options: [
        '1/4',
        '1/2',
        '3/4',
        '1'
      ],
      correctAnswerIndex: 2,
      explanation: 'Total outcomes: HH, HT, TH, TT. Favorable outcomes: HH, HT, TH (3 outcomes). Probability = 3/4.',
      subjectName: SubjectName.MATH,
      topicId: 'math1',
      subTopicId: 'math1-probability',
    },
    // EVS (Additional Questions 71-90)
    
    {      question: 'Which of the following is NOT a greenhouse gas?',
      options: [
        'Carbon dioxide',
        'Methane',
        'Oxygen',
        'Water vapor'
      ],
      correctAnswerIndex: 2,
      explanation: 'Oxygen is not a greenhouse gas. Greenhouse gases include CO₂, methane, water vapor, and others that trap heat in the atmosphere.',
      subjectName: SubjectName.EVS,
      topicId: 'evs3',
      subTopicId: 'evs3-environment',
    },
    
    {      question: 'The process by which plants make their own food is called:',
      options: [
        'Photosynthesis',
        'Respiration',
        'Transpiration',
        'Digestion'
      ],
      correctAnswerIndex: 0,
      explanation: 'Photosynthesis is the process by which green plants use sunlight, water, and carbon dioxide to make their own food.',
      subjectName: SubjectName.EVS,
      topicId: 'evs1',
      subTopicId: 'evs1-plants',
    },
    
    {      question: 'Which planet is known as the Red Planet?',
      options: [
        'Venus',
        'Mars',
        'Jupiter',
        'Saturn'
      ],
      correctAnswerIndex: 1,
      explanation: 'Mars is known as the Red Planet due to its reddish appearance caused by iron oxide on its surface.',
      subjectName: SubjectName.EVS,
      topicId: 'evs2',
      subTopicId: 'evs2-space',
    },
    
    {      question: 'The largest mammal in the world is:',
      options: [
        'African Elephant',
        'Blue Whale',
        'Giraffe',
        'Polar Bear'
      ],
      correctAnswerIndex: 1,
      explanation: 'The Blue Whale is the largest mammal in the world, weighing up to 200 tons.',
      subjectName: SubjectName.EVS,
      topicId: 'evs1',
      subTopicId: 'evs1-animals',
    },
    
    {      question: 'Which of the following is a renewable source of energy?',
      options: [
        'Coal',
        'Natural Gas',
        'Solar Energy',
        'Petroleum'
      ],
      correctAnswerIndex: 2,
      explanation: 'Solar energy is renewable as it comes from the sun and will not run out.',
      subjectName: SubjectName.EVS,
      topicId: 'evs3',
      subTopicId: 'evs3-energy',
    },
    
    {      question: 'The process of water changing into vapor is called:',
      options: [
        'Condensation',
        'Evaporation',
        'Precipitation',
        'Filtration'
      ],
      correctAnswerIndex: 1,
      explanation: 'Evaporation is the process where liquid water changes into water vapor.',
      subjectName: SubjectName.EVS,
      topicId: 'evs3',
      subTopicId: 'evs3-water',
    },
    
    {      question: 'Which organ in the human body is responsible for pumping blood?',
      options: [
        'Lungs',
        'Liver',
        'Heart',
        'Kidneys'
      ],
      correctAnswerIndex: 2,
      explanation: 'The heart is responsible for pumping blood throughout the body.',
      subjectName: SubjectName.EVS,
      topicId: 'evs1',
      subTopicId: 'evs1-humanbody',
    },
    
    {      question: 'The study of weather is called:',
      options: [
        'Geology',
        'Meteorology',
        'Astronomy',
        'Biology'
      ],
      correctAnswerIndex: 1,
      explanation: 'Meteorology is the scientific study of the atmosphere and weather phenomena.',
      subjectName: SubjectName.EVS,
      topicId: 'evs2',
      subTopicId: 'evs2-weather',
    },
    
    {      question: 'Which of the following is NOT a type of rock?',
      options: [
        'Igneous',
        'Sedimentary',
        'Metamorphic',
        'Volcanic'
      ],
      correctAnswerIndex: 3,
      explanation: 'Volcanic is not a main type of rock. The three main types are igneous, sedimentary, and metamorphic.',
      subjectName: SubjectName.EVS,
      topicId: 'evs2',
      subTopicId: 'evs2-earth',
    },
    
    {      question: 'The process by which plants release water vapor is called:',
      options: [
        'Photosynthesis',
        'Transpiration',
        'Respiration',
        'Pollination'
      ],
      correctAnswerIndex: 1,
      explanation: 'Transpiration is the process by which plants release water vapor through their leaves.',
      subjectName: SubjectName.EVS,
      topicId: 'evs1',
      subTopicId: 'evs1-plants',
    },
    
    {      question: 'Which gas do plants absorb during photosynthesis?',
      options: [
        'Oxygen',
        'Carbon dioxide',
        'Nitrogen',
        'Hydrogen'
      ],
      correctAnswerIndex: 1,
      explanation: 'Plants absorb carbon dioxide during photosynthesis to make food.',
      subjectName: SubjectName.EVS,
      topicId: 'evs1',
      subTopicId: 'evs1-plants',
    },
    
    {      question: 'The Earth\'s natural satellite is:',
      options: [
        'Venus',
        'Mars',
        'Moon',
        'Sun'
      ],
      correctAnswerIndex: 2,
      explanation: 'The Moon is Earth\'s natural satellite.',
      subjectName: SubjectName.EVS,
      topicId: 'evs2',
      subTopicId: 'evs2-space',
    },
    
    {      question: 'Which of the following animals is a mammal?',
      options: [
        'Snake',
        'Frog',
        'Whale',
        'Crocodile'
      ],
      correctAnswerIndex: 2,
      explanation: 'Whales are mammals that breathe air and give birth to live young.',
      subjectName: SubjectName.EVS,
      topicId: 'evs1',
      subTopicId: 'evs1-animals',
    },
    
    {      question: 'The process of converting seawater into freshwater is called:',
      options: [
        'Filtration',
        'Distillation',
        'Desalination',
        'Purification'
      ],
      correctAnswerIndex: 2,
      explanation: 'Desalination is the process of removing salt from seawater to make it drinkable.',
      subjectName: SubjectName.EVS,
      topicId: 'evs3',
      subTopicId: 'evs3-water',
    },
    
    {      question: 'Which of the following is a conductor of electricity?',
      options: [
        'Plastic',
        'Rubber',
        'Copper',
        'Wood'
      ],
      correctAnswerIndex: 2,
      explanation: 'Copper is a good conductor of electricity.',
      subjectName: SubjectName.EVS,
      topicId: 'evs3',
      subTopicId: 'evs3-materials',
    },
    
    {      question: 'The largest ocean in the world is:',
      options: [
        'Atlantic Ocean',
        'Indian Ocean',
        'Arctic Ocean',
        'Pacific Ocean'
      ],
      correctAnswerIndex: 3,
      explanation: 'The Pacific Ocean is the largest ocean in the world.',
      subjectName: SubjectName.EVS,
      topicId: 'evs2',
      subTopicId: 'evs2-geography',
    },
    
    {      question: 'Which vitamin is produced when skin is exposed to sunlight?',
      options: [
        'Vitamin A',
        'Vitamin B',
        'Vitamin C',
        'Vitamin D'
      ],
      correctAnswerIndex: 3,
      explanation: 'Vitamin D is produced in the skin when exposed to sunlight.',
      subjectName: SubjectName.EVS,
      topicId: 'evs1',
      subTopicId: 'evs1-humanbody',
    },
    
    {      question: 'The study of fossils is called:',
      options: [
        'Paleontology',
        'Archaeology',
        'Anthropology',
        'Geology'
      ],
      correctAnswerIndex: 0,
      explanation: 'Paleontology is the study of fossils and ancient life forms.',
      subjectName: SubjectName.EVS,
      topicId: 'evs2',
      subTopicId: 'evs2-earth',
    },
    
    {      question: 'Which of the following is a biodegradable material?',
      options: [
        'Plastic bag',
        'Paper',
        'Metal can',
        'Glass bottle'
      ],
      correctAnswerIndex: 1,
      explanation: 'Paper is biodegradable as it can be broken down by microorganisms.',
      subjectName: SubjectName.EVS,
      topicId: 'evs3',
      subTopicId: 'evs3-environment',
    },
    
    {      question: 'The process of breathing in oxygen and breathing out carbon dioxide is called:',
      options: [
        'Photosynthesis',
        'Respiration',
        'Transpiration',
        'Digestion'
      ],
      correctAnswerIndex: 1,
      explanation: 'Respiration is the process where organisms take in oxygen and release carbon dioxide.',
      subjectName: SubjectName.EVS,
      topicId: 'evs1',
      subTopicId: 'evs1-humanbody',
    },
    // Language I (English) - Additional Questions 91-120
    
    {      question: 'Choose the correct synonym for "benevolent":',
      options: [
        'Kind',
        'Cruel',
        'Angry',
        'Sad'
      ],
      correctAnswerIndex: 0,
      explanation: 'Benevolent means kind and well-meaning.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-vocab',
      subTopicId: 'lang1-vocab-synonyms',
    },
    
    {      question: 'Identify the correct sentence:',
      options: [
        'He go to school every day.',
        'He goes to school every day.',
        'He going to school every day.',
        'He gone to school every day.'
      ],
      correctAnswerIndex: 1,
      explanation: 'The correct present simple tense form is "goes".',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-grammar',
      subTopicId: 'lang1-grammar-tenses',
    },
    
    {      question: 'What is the plural of "child"?',
      options: [
        'Childs',
        'Children',
        'Childes',
        'Childrens'
      ],
      correctAnswerIndex: 1,
      explanation: 'The plural of "child" is "children".',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-grammar',
      subTopicId: 'lang1-grammar-plurals',
    },
    
    {      question: 'Choose the correct antonym for "brave":',
      options: [
        'Cowardly',
        'Strong',
        'Happy',
        'Fast'
      ],
      correctAnswerIndex: 0,
      explanation: 'The antonym of "brave" is "cowardly".',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-vocab',
      subTopicId: 'lang1-vocab-antonyms',
    },
    
    {      question: 'Which word is a noun in this sentence: "The quick brown fox jumps over the lazy dog."?',
      options: [
        'Quick',
        'Brown',
        'Jumps',
        'Fox'
      ],
      correctAnswerIndex: 3,
      explanation: '"Fox" is a noun as it names a person, place, thing, or idea.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-grammar',
      subTopicId: 'lang1-grammar-parts',
    },
    
    {      question: 'Complete the idiom: "It\'s raining cats and _____"',
      options: [
        'dogs',
        'frogs',
        'birds',
        'fish'
      ],
      correctAnswerIndex: 0,
      explanation: 'The complete idiom is "raining cats and dogs", meaning raining heavily.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-vocab',
      subTopicId: 'lang1-vocab-idioms',
    },
    
    {      question: 'Choose the correct preposition: "The book is _____ the table."',
      options: [
        'in',
        'on',
        'at',
        'with'
      ],
      correctAnswerIndex: 1,
      explanation: '"On" is the correct preposition when something is on top of a surface.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-grammar',
      subTopicId: 'lang1-grammar-prepositions',
    },
    
    {      question: 'What type of word is "quickly"?',
      options: [
        'Noun',
        'Verb',
        'Adverb',
        'Adjective'
      ],
      correctAnswerIndex: 2,
      explanation: '"Quickly" is an adverb as it modifies a verb, adjective, or other adverb.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-grammar',
      subTopicId: 'lang1-grammar-parts',
    },
    
    {      question: 'Choose the correct spelling:',
      options: [
        'Recieve',
        'Receive',
        'Receeve',
        'Recive'
      ],
      correctAnswerIndex: 1,
      explanation: 'The correct spelling is "receive".',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-vocab',
      subTopicId: 'lang1-vocab-spelling',
    },
    
    {      question: 'Identify the subject in this sentence: "The teacher teaches English."',
      options: [
        'Teaches',
        'English',
        'The teacher',
        'Teacher'
      ],
      correctAnswerIndex: 2,
      explanation: 'The subject is "the teacher" as it performs the action.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-grammar',
      subTopicId: 'lang1-grammar-sentencestructure',
    },
    
    {      question: 'What does "ubiquitous" mean?',
      options: [
        'Rare',
        'Present everywhere',
        'Very small',
        'Very large'
      ],
      correctAnswerIndex: 1,
      explanation: 'Ubiquitous means present or found everywhere.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-vocab',
      subTopicId: 'lang1-vocab-meaning',
    },
    
    {      question: 'Choose the correct form: "She _____ to the store yesterday."',
      options: [
        'go',
        'goes',
        'went',
        'going'
      ],
      correctAnswerIndex: 2,
      explanation: '"Went" is the correct past tense form of "go".',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-grammar',
      subTopicId: 'lang1-grammar-tenses',
    },
    
    {      question: 'Which word is a pronoun?',
      options: [
        'Run',
        'Quick',
        'He',
        'Beautiful'
      ],
      correctAnswerIndex: 2,
      explanation: '"He" is a pronoun as it replaces a noun.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-grammar',
      subTopicId: 'lang1-grammar-parts',
    },
    
    {      question: 'Complete the proverb: "A stitch in time _____"',
      options: [
        'saves nine',
        'saves ten',
        'saves eight',
        'saves seven'
      ],
      correctAnswerIndex: 0,
      explanation: 'The complete proverb is "A stitch in time saves nine", meaning timely action prevents bigger problems.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-vocab',
      subTopicId: 'lang1-vocab-proverbs',
    },
    
    {      question: 'Choose the correct article: "_____ elephant is a large animal."',
      options: [
        'A',
        'An',
        'The',
        'No article'
      ],
      correctAnswerIndex: 1,
      explanation: '"An" is used before words starting with a vowel sound.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-grammar',
      subTopicId: 'lang1-grammar-articles',
    },
    
    {      question: 'What is the past participle of "eat"?',
      options: [
        'Ate',
        'Eaten',
        'Eating',
        'Eats'
      ],
      correctAnswerIndex: 1,
      explanation: '"Eaten" is the past participle form of "eat".',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-grammar',
      subTopicId: 'lang1-grammar-tenses',
    },
    
    {      question: 'Choose the correct synonym for "enormous":',
      options: [
        'Tiny',
        'Huge',
        'Small',
        'Little'
      ],
      correctAnswerIndex: 1,
      explanation: '"Huge" is a synonym for "enormous".',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-vocab',
      subTopicId: 'lang1-vocab-synonyms',
    },
    
    {      question: 'Identify the correct sentence structure:',
      options: [
        'Subject + Verb + Object',
        'Object + Subject + Verb',
        'Verb + Subject + Object',
        'Subject + Object + Verb'
      ],
      correctAnswerIndex: 0,
      explanation: 'The standard English sentence structure is Subject + Verb + Object.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-grammar',
      subTopicId: 'lang1-grammar-sentencestructure',
    },
    
    {      question: 'What does "ephemeral" mean?',
      options: [
        'Permanent',
        'Lasting a short time',
        'Very old',
        'Very new'
      ],
      correctAnswerIndex: 1,
      explanation: 'Ephemeral means lasting for a very short time.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-vocab',
      subTopicId: 'lang1-vocab-meaning',
    },
    
    {      question: 'Choose the correct homophone: "I will _____ the book tomorrow."',
      options: [
        'right',
        'write',
        'rite',
        'wright'
      ],
      correctAnswerIndex: 1,
      explanation: '"Write" means to put words on paper.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-vocab',
      subTopicId: 'lang1-vocab-homophones',
    },
    
    {      question: 'Which sentence uses correct punctuation?',
      options: [
        'Where are you going',
        'Where are you going?',
        'Where are you going.',
        'Where are you going!'
      ],
      correctAnswerIndex: 1,
      explanation: 'A question mark is used at the end of a question.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-grammar',
      subTopicId: 'lang1-grammar-punctuation',
    },
    
    {      question: 'What type of figurative language is this: "The stars danced in the sky."?',
      options: [
        'Simile',
        'Metaphor',
        'Personification',
        'Hyperbole'
      ],
      correctAnswerIndex: 2,
      explanation: 'Personification gives human qualities to non-human things.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-literature',
      subTopicId: 'lang1-literature-figurativelanguage',
    },
    
    {      question: 'Choose the correct comparative form: "This book is _____ than that one."',
      options: [
        'good',
        'better',
        'best',
        'well'
      ],
      correctAnswerIndex: 1,
      explanation: '"Better" is the comparative form of "good".',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-grammar',
      subTopicId: 'lang1-grammar-comparison',
    },
    
    {      question: 'What is the meaning of "altruistic"?',
      options: [
        'Selfish',
        'Selfless',
        'Angry',
        'Happy'
      ],
      correctAnswerIndex: 1,
      explanation: 'Altruistic means showing concern for others without expecting anything in return.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-vocab',
      subTopicId: 'lang1-vocab-meaning',
    },
    
    {      question: 'Identify the correct passive voice: "The cake _____ by Mary."',
      options: [
        'ate',
        'eats',
        'was eaten',
        'eating'
      ],
      correctAnswerIndex: 2,
      explanation: '"Was eaten" is the passive form of the verb.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-grammar',
      subTopicId: 'lang1-grammar-voice',
    },
    
    {      question: 'Choose the correct collective noun: "A _____ of lions"',
      options: [
        'pack',
        'pride',
        'herd',
        'flock'
      ],
      correctAnswerIndex: 1,
      explanation: '"Pride" is the collective noun for lions.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-vocab',
      subTopicId: 'lang1-vocab-collectivenouns',
    },
    
    {      question: 'What is the superlative form of "bad"?',
      options: [
        'Badder',
        'Bad',
        'Worse',
        'Worst'
      ],
      correctAnswerIndex: 3,
      explanation: '"Worst" is the superlative form of "bad".',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-grammar',
      subTopicId: 'lang1-grammar-comparison',
    },
    
    {      question: 'Complete the analogy: Book is to Library as Painting is to _____',
      options: [
        'Museum',
        'School',
        'Hospital',
        'Market'
      ],
      correctAnswerIndex: 0,
      explanation: 'A library stores books, just as a museum stores paintings.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-vocab',
      subTopicId: 'lang1-vocab-analogies',
    },
    
    {      question: 'Which word has a silent letter?',
      options: [
        'Cat',
        'Dog',
        'Knife',
        'Run'
      ],
      correctAnswerIndex: 2,
      explanation: 'The "k" in "knife" is silent.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-vocab',
      subTopicId: 'lang1-vocab-spelling',
    },
    
    {      question: 'Choose the correct conjunction: "I like tea _____ coffee."',
      options: [
        'but',
        'and',
        'or',
        'so'
      ],
      correctAnswerIndex: 1,
      explanation: '"And" is used to connect similar ideas.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-grammar',
      subTopicId: 'lang1-grammar-conjunctions',
    },
    
    {      question: 'What does "gregarious" mean?',
      options: [
        'Shy',
        'Sociable',
        'Angry',
        'Tired'
      ],
      correctAnswerIndex: 1,
      explanation: 'Gregarious means fond of company and sociable.',
      subjectName: SubjectName.LANG1,
      topicId: 'lang1-vocab',
      subTopicId: 'lang1-vocab-meaning',
    },
    // Language II (Hindi) - Additional Questions 121-150
    
    {      question: 'निम्नलिखित में से कौन सा शब्द "पानी" का पर्यायवाची है?',
      options: [
        'जल',
        'आग',
        'हवा',
        'मिट्टी'
      ],
      correctAnswerIndex: 0,
      explanation: '"जल" पानी का पर्यायवाची है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-vocab',
      subTopicId: 'lang2-vocab-synonyms',
    },
    
    {      question: 'सही वाक्य चुनें:',
      options: [
        'वह स्कूल जाता हैं',
        'वह स्कूल जाता है',
        'वह स्कूल जाता हूँ',
        'वह स्कूल जाता हो'
      ],
      correctAnswerIndex: 1,
      explanation: 'सही वाक्य "वह स्कूल जाता है" है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-grammar',
      subTopicId: 'lang2-grammar-tenses',
    },
    
    {      question: '"लड़का" का बहुवचन क्या है?',
      options: [
        'लड़के',
        'लड़कों',
        'लड़कियों',
        'लड़कें'
      ],
      correctAnswerIndex: 0,
      explanation: '"लड़का" का बहुवचन "लड़के" है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-grammar',
      subTopicId: 'lang2-grammar-plurals',
    },
    
    {      question: '"बहादुर" का विलोम शब्द चुनें:',
      options: [
        'कायर',
        'बलवान',
        'खुश',
        'तेज'
      ],
      correctAnswerIndex: 0,
      explanation: '"बहादुर" का विलोम "कायर" है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-vocab',
      subTopicId: 'lang2-vocab-antonyms',
    },
    
    {      question: 'इस वाक्य में कौन सा शब्द संज्ञा है: "तेज भूरी लोमड़ी आलसी कुत्ते के ऊपर से कूदती है।"',
      options: [
        'तेज',
        'भूरी',
        'कूदती',
        'लोमड़ी'
      ],
      correctAnswerIndex: 3,
      explanation: '"लोमड़ी" एक संज्ञा है क्योंकि यह व्यक्ति, स्थान, वस्तु या विचार का नाम है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-grammar',
      subTopicId: 'lang2-grammar-parts',
    },
    
    {      question: 'लोकोक्ति को पूरा करें: "जल्दी सोए जल्दी _____"',
      options: [
        'उठे',
        'खाए',
        'पीए',
        'दौड़े'
      ],
      correctAnswerIndex: 0,
      explanation: 'पूर्ण लोकोक्ति "जल्दी सोए जल्दी उठे" है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-vocab',
      subTopicId: 'lang2-vocab-proverbs',
    },
    
    {      question: 'सही संबंधबोधक चुनें: "किताब _____ मेज पर है।"',
      options: [
        'में',
        'पर',
        'से',
        'को'
      ],
      correctAnswerIndex: 1,
      explanation: '"पर" का प्रयोग तब होता है जब कोई वस्तु सतह पर रखी हो।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-grammar',
      subTopicId: 'lang2-grammar-prepositions',
    },
    
    {      question: '"तेजी से" किस प्रकार का शब्द है?',
      options: [
        'संज्ञा',
        'क्रिया',
        'क्रियाविशेषण',
        'विशेषण'
      ],
      correctAnswerIndex: 2,
      explanation: '"तेजी से" एक क्रियाविशेषण है क्योंकि यह क्रिया, विशेषण या अन्य क्रियाविशेषण को संशोधित करता है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-grammar',
      subTopicId: 'lang2-grammar-parts',
    },
    
    {      question: 'सही वर्तनी चुनें:',
      options: [
        'प्राप्त',
        'प्राप्त',
        'प्राप्त',
        'प्राप्त'
      ],
      correctAnswerIndex: 0,
      explanation: 'सही वर्तनी "प्राप्त" है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-vocab',
      subTopicId: 'lang2-vocab-spelling',
    },
    
    {      question: 'इस वाक्य में कर्ता पहचानें: "शिक्षक अंग्रेजी पढ़ाते हैं।"',
      options: [
        'पढ़ाते',
        'अंग्रेजी',
        'शिक्षक',
        'हैं'
      ],
      correctAnswerIndex: 2,
      explanation: 'कर्ता "शिक्षक" है क्योंकि वह क्रिया करता है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-grammar',
      subTopicId: 'lang2-grammar-sentencestructure',
    },
    
    {      question: '"सर्वव्यापी" का क्या अर्थ है?',
      options: [
        'दुर्लभ',
        'सर्वत्र उपस्थित',
        'बहुत छोटा',
        'बहुत बड़ा'
      ],
      correctAnswerIndex: 1,
      explanation: 'सर्वव्यापी का अर्थ है सर्वत्र उपस्थित।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-vocab',
      subTopicId: 'lang2-vocab-meaning',
    },
    
    {      question: 'सही रूप चुनें: "वह कल बाजार _____।"',
      options: [
        'गया',
        'जाता',
        'जाएगा',
        'जा रहा'
      ],
      correctAnswerIndex: 0,
      explanation: '"गया" "जाना" की सही भूतकाल रूप है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-grammar',
      subTopicId: 'lang2-grammar-tenses',
    },
    
    {      question: 'कौन सा शब्द सर्वनाम है?',
      options: [
        'दौड़ो',
        'तेज',
        'वह',
        'सुंदर'
      ],
      correctAnswerIndex: 2,
      explanation: '"वह" एक सर्वनाम है क्योंकि यह संज्ञा की जगह लेता है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-grammar',
      subTopicId: 'lang2-grammar-parts',
    },
    
    {      question: 'मुहावरा पूरा करें: "एक साथ कई _____"',
      options: [
        'हाथी',
        'बाघ',
        'सियार',
        'तोते'
      ],
      correctAnswerIndex: 0,
      explanation: 'पूर्ण मुहावरा "एक साथ कई हाथी" है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-vocab',
      subTopicId: 'lang2-vocab-idioms',
    },
    
    {      question: 'सही निश्चयवाचक चुनें: "_____ हाथी एक बड़ा जानवर है।"',
      options: [
        'एक',
        'एक',
        'वह',
        'कोई नहीं'
      ],
      correctAnswerIndex: 0,
      explanation: '"एक" का प्रयोग अनिश्चित संज्ञा से पहले होता है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-grammar',
      subTopicId: 'lang2-grammar-articles',
    },
    
    {      question: '"खाना" का भूतकालिक विशेषण क्या है?',
      options: [
        'खाया',
        'खाया गया',
        'खा रहा',
        'खाता'
      ],
      correctAnswerIndex: 1,
      explanation: '"खाया गया" "खाना" का भूतकालिक विशेषण रूप है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-grammar',
      subTopicId: 'lang2-grammar-tenses',
    },
    
    {      question: '"विशाल" का पर्यायवाची चुनें:',
      options: [
        'छोटा',
        'बड़ा',
        'काला',
        'सफेद'
      ],
      correctAnswerIndex: 1,
      explanation: '"बड़ा" "विशाल" का पर्यायवाची है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-vocab',
      subTopicId: 'lang2-vocab-synonyms',
    },
    
    {      question: 'सही वाक्य संरचना पहचानें:',
      options: [
        'कर्ता + क्रिया + कर्म',
        'कर्म + कर्ता + क्रिया',
        'क्रिया + कर्ता + कर्म',
        'कर्ता + कर्म + क्रिया'
      ],
      correctAnswerIndex: 0,
      explanation: 'हिंदी की मानक वाक्य संरचना कर्ता + क्रिया + कर्म है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-grammar',
      subTopicId: 'lang2-grammar-sentencestructure',
    },
    
    {      question: '"क्षणिक" का क्या अर्थ है?',
      options: [
        'स्थायी',
        'कम समय तक चलने वाला',
        'बहुत पुराना',
        'बहुत नया'
      ],
      correctAnswerIndex: 1,
      explanation: 'क्षणिक का अर्थ है कम समय तक चलने वाला।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-vocab',
      subTopicId: 'lang2-vocab-meaning',
    },
    
    {      question: 'सही समानार्थी शब्द चुनें: "मैं कल किताब _____।"',
      options: [
        'लिखूँगा',
        'लिखूँगा',
        'लिखूँगा',
        'लिखूँगा'
      ],
      correctAnswerIndex: 0,
      explanation: '"लिखूँगा" लिखने का भविष्यकाल रूप है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-vocab',
      subTopicId: 'lang2-vocab-homophones',
    },
    
    {      question: 'कौन सा वाक्य सही विराम चिह्न का प्रयोग करता है?',
      options: [
        'तुम कहाँ जा रहे हो',
        'तुम कहाँ जा रहे हो?',
        'तुम कहाँ जा रहे हो।',
        'तुम कहाँ जा रहे हो!'
      ],
      correctAnswerIndex: 1,
      explanation: 'प्रश्न चिह्न का प्रयोग प्रश्न के अंत में होता है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-grammar',
      subTopicId: 'lang2-grammar-punctuation',
    },
    
    {      question: 'यह कौन सा अलंकार है: "तारे आसमान में नाच रहे हैं।"',
      options: [
        'उपमा',
        'रूपक',
        'मानवीकरण',
        'अतिशयोक्ति'
      ],
      correctAnswerIndex: 2,
      explanation: 'मानवीकरण में निर्जीव वस्तुओं को मानवीय गुण दिए जाते हैं।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-literature',
      subTopicId: 'lang2-literature-figurativelanguage',
    },
    
    {      question: 'सही तुलनात्मक रूप चुनें: "यह किताब उससे _____ है।"',
      options: [
        'अच्छा',
        'अच्छी',
        'बेहतर',
        'सबसे अच्छा'
      ],
      correctAnswerIndex: 2,
      explanation: '"बेहतर" "अच्छा" का तुलनात्मक रूप है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-grammar',
      subTopicId: 'lang2-grammar-comparison',
    },
    
    {      question: '"परार्थवादी" का क्या अर्थ है?',
      options: [
        'स्वार्थी',
        'अपरार्थी',
        'गुस्सैल',
        'खुश'
      ],
      correctAnswerIndex: 1,
      explanation: 'परार्थवादी का अर्थ है दूसरों की भलाई के लिए कार्य करने वाला।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-vocab',
      subTopicId: 'lang2-vocab-meaning',
    },
    
    {      question: 'सही कर्मवाच्य रूप पहचानें: "केक मैरी द्वारा _____ गया।"',
      options: [
        'खाया',
        'खाता',
        'खाया गया',
        'खा रहा'
      ],
      correctAnswerIndex: 2,
      explanation: '"खाया गया" क्रिया का कर्मवाच्य रूप है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-grammar',
      subTopicId: 'lang2-grammar-voice',
    },
    
    {      question: 'सही समूहवाचक संज्ञा चुनें: "सिंहों का _____।"',
      options: [
        'झुंड',
        'गौरव',
        'समूह',
        'दल'
      ],
      correctAnswerIndex: 1,
      explanation: '"गौरव" सिंहों के लिए समूहवाचक संज्ञा है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-vocab',
      subTopicId: 'lang2-vocab-collectivenouns',
    },
    
    {      question: '"बुरा" का उत्कृष्ट रूप क्या है?',
      options: [
        'बुरा',
        'बदतर',
        'सबसे बुरा',
        'बुरे'
      ],
      correctAnswerIndex: 2,
      explanation: '"सबसे बुरा" "बुरा" का उत्कृष्ट रूप है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-grammar',
      subTopicId: 'lang2-grammar-comparison',
    },
    
    {      question: 'सादृश्य पूरा करें: किताब : पुस्तकालय :: चित्र : _____',
      options: [
        'संग्रहालय',
        'स्कूल',
        'अस्पताल',
        'बाजार'
      ],
      correctAnswerIndex: 0,
      explanation: 'पुस्तकालय किताबों का भंडार है जैसे संग्रहालय चित्रों का भंडार है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-vocab',
      subTopicId: 'lang2-vocab-analogies',
    },
    
    {      question: 'कौन सा शब्द मौन अक्षर वाला है?',
      options: [
        'कुत्ता',
        'बिल्ली',
        'चाकू',
        'दौड़ो'
      ],
      correctAnswerIndex: 2,
      explanation: '"चाकू" में "क" मौन अक्षर है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-vocab',
      subTopicId: 'lang2-vocab-spelling',
    },
    
    {      question: 'सही संयोजक चुनें: "मैं चाय _____ कॉफी पसंद करता हूँ।"',
      options: [
        'पर',
        'और',
        'या',
        'इसलिए'
      ],
      correctAnswerIndex: 1,
      explanation: '"और" का प्रयोग समान विचारों को जोड़ने के लिए होता है।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-grammar',
      subTopicId: 'lang2-grammar-conjunctions',
    },
    
    {      question: '"मिलनसार" का क्या अर्थ है?',
      options: [
        'शर्मीला',
        'मिलनसार',
        'गुस्सैल',
        'थक गया'
      ],
      correctAnswerIndex: 1,
      explanation: 'मिलनसार का अर्थ है लोगों के साथ मिलने वाला।',
      subjectName: SubjectName.LANG2,
      topicId: 'lang2-vocab',
      subTopicId: 'lang2-vocab-meaning',
    },
  ],
};
