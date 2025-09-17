import { Subject, SubjectName, MCQ } from '../types';
import {
  BookOpenIcon,
  CalculatorIcon,
  GlobeAltIcon,
  LanguageIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';

export const SUBJECT_DATA: Subject[] = [
  {
    name: SubjectName.CDP,
    icon: BookOpenIcon,
    topics: [
      {
        id: 'cdp1',
        name: 'Piaget, Kohlberg, and Vygotsky',
        notes: `
<h3 class="text-xl font-semibold mb-2 text-primary">Foundational Theories of Development</h3>
<p class="mb-4">This section provides a highly detailed analysis of the cornerstone theories of cognitive development by Jean Piaget, moral development by Lawrence Kohlberg, and sociocultural development by Lev Vygotsky. A deep, comparative understanding of these theories is critical for answering analytical and scenario-based questions in the CTET exam.</p>

<!-- Jean Piaget -->
<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-xl font-bold text-primary-dark mb-3">Jean Piaget's Theory of Cognitive Development</h4>
  <p class="mb-3">Piaget's theory posits that children are active learners—"little scientists"—who construct their understanding of the world through interaction. His is a stage theory, meaning development happens in a series of distinct, qualitatively different stages.</p>
  
  <strong class="text-lg">Core Concepts:</strong>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>Schemas:</strong> Mental frameworks that organize information. A baby's schema for a dog might be "four legs, furry, barks."</li>
    <li><strong>Assimilation:</strong> Fitting new information into existing schemas. The baby sees a cat and calls it "dog."</li>
    <li><strong>Accommodation:</strong> Modifying existing schemas to fit new information. The baby learns to create a new "cat" schema, distinct from the "dog" schema.</li>
    <li><strong>Equilibration:</strong> The cognitive balancing of new information with old knowledge. It's the engine of development, moving the child from a state of disequilibrium (cognitive conflict) to equilibrium (understanding).</li>
  </ul>

  <strong class="text-lg">Stages of Cognitive Development:</strong>
  <ol class="list-decimal list-inside ml-4 mb-4 space-y-3">
    <li><strong>Sensorimotor Stage (0-2 years):</strong> Learning through senses and actions. Key achievement is <strong>Object Permanence</strong> (knowing an object exists even when hidden).</li>
    <li><strong>Preoperational Stage (2-7 years):</strong> Characterized by symbolic thought but marked by limitations.
        <ul class="list-disc list-inside ml-6">
            <li><strong>Egocentrism:</strong> Inability to see from another's perspective.</li>
            <li><strong>Centration:</strong> Focusing on only one aspect of a situation (e.g., the height of a glass, but not its width). This leads to a lack of <strong>Conservation</strong>.</li>
            <li><strong>Irreversibility:</strong> Inability to reverse a sequence of events mentally.</li>
        </ul>
    </li>
    <li><strong>Concrete Operational Stage (7-11 years):</strong> Can think logically about concrete things. Masters <strong>Conservation</strong>, <strong>Seriation</strong> (ordering items along a dimension), and <strong>Transitivity</strong>. Thinking is still tied to the physical world.</li>
    <li><strong>Formal Operational Stage (12+ years):</strong> Capable of abstract, hypothetical, and deductive reasoning. Can think about possibilities and philosophical issues.</li>
  </ol>
  
  <div class="mt-4 p-3 bg-yellow-50 rounded-md border border-yellow-200">
    <h5 class="font-bold text-yellow-800">Analyzing Tricky Questions (Piaget):</h5>
    <p class="text-sm text-yellow-700">CTET questions often test the limitations of each stage. For example, a question might describe a child who can't solve a problem because it's abstract. This points to the Concrete Operational stage, as abstract thought is the hallmark of the Formal Operational stage. Differentiating Assimilation (fitting in) from Accommodation (changing) is also a common tricky point.</p>
  </div>
</div>

<!-- Lawrence Kohlberg -->
<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-xl font-bold text-primary-dark mb-3">Lawrence Kohlberg's Stages of Moral Development</h4>
  <p class="mb-3">Kohlberg proposed that moral reasoning develops through a fixed sequence of six stages, grouped into three levels. He used moral dilemmas (like the Heinz dilemma) to assess which stage a person's reasoning was at.</p>
  
  <strong class="text-lg">Levels and Stages:</strong>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>Level 1: Pre-conventional Morality (Self-Interest):</strong>
      <ul class="list-circle list-inside ml-6">
          <li><strong>Stage 1: Obedience and Punishment:</strong> Rules are followed to avoid punishment. "Heinz shouldn't steal because he'll go to jail."</li>
          <li><strong>Stage 2: Individualism and Exchange:</strong> Actions are based on self-interest and "what's in it for me". "Heinz should steal because he needs his wife to live."</li>
      </ul>
    </li>
    <li><strong>Level 2: Conventional Morality (Social Conformity):</strong>
      <ul class="list-circle list-inside ml-6">
          <li><strong>Stage 3: Good Interpersonal Relationships:</strong> Decisions are based on gaining approval from others. "Heinz should steal because his family will think he's a good husband."</li>
          <li><strong>Stage 4: Maintaining Social Order:</strong> Focus on obeying laws and maintaining societal order. "Heinz shouldn't steal because stealing is against the law."</li>
      </ul>
    </li>
    <li><strong>Level 3: Post-conventional Morality (Abstract Principles):</strong>
      <ul class="list-circle list-inside ml-6">
          <li><strong>Stage 5: Social Contract and Individual Rights:</strong> Recognizes that laws are social contracts that can be changed for the greater good.</li>
          <li><strong>Stage 6: Universal Principles:</strong> Moral reasoning is based on universal ethical principles (e.g., justice, human rights). The individual's conscience is the ultimate judge.</li>
      </ul>
    </li>
  </ul>
   <div class="mt-4 p-3 bg-yellow-50 rounded-md border border-yellow-200">
    <h5 class="font-bold text-yellow-800">Analyzing Tricky Questions (Kohlberg):</h5>
    <p class="text-sm text-yellow-700">The key is to focus on the *reasoning* behind the decision, not the decision itself. A person at any stage could argue for or against stealing the drug. Also, be aware of Carol Gilligan's critique that Kohlberg's theory is male-centric and prioritizes a "justice perspective" over a "care perspective," which is a common exam topic.</p>
  </div>
</div>

<!-- Lev Vygotsky -->
<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-xl font-bold text-primary-dark mb-3">Lev Vygotsky's Sociocultural Theory</h4>
  <p class="mb-3">Vygotsky argued that learning is an inherently social process. Cognitive development is driven by social interactions with more knowledgeable individuals within a specific cultural context.</p>
  
  <strong class="text-lg">Core Concepts:</strong>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>More Knowledgeable Other (MKO):</strong> Anyone with a higher understanding than the learner (teacher, peer, computer).</li>
    <li><strong>Zone of Proximal Development (ZPD):</strong> The "sweet spot" for learning. It is the gap between what a learner can do independently and what they can achieve with guidance from an MKO.</li>
    <li><strong>Scaffolding:</strong> The temporary, tailored support provided by the MKO to help the learner cross the ZPD. Examples include hints, prompts, and breaking down a problem.</li>
    <li><strong>Language and Thought:</strong> Vygotsky saw language as the most crucial tool for thought. Children use <strong>private speech</strong> (self-talk) to guide their actions, which eventually becomes internalized as silent <strong>inner speech</strong> (thought).</li>
  </ul>
  <div class="mt-4 p-3 bg-yellow-50 rounded-md border border-yellow-200">
    <h5 class="font-bold text-yellow-800">Analyzing Tricky Questions (Vygotsky vs. Piaget):</h5>
    <p class="text-sm text-yellow-700">A classic CTET question asks you to differentiate between Piaget and Vygotsky. Remember: Piaget saw the child as a "little scientist" exploring the world alone, with development preceding learning. Vygotsky saw the child as an "apprentice" learning through social interaction, where learning pulls development forward. Vygotsky emphasizes culture and language far more than Piaget.</p>
  </div>
</div>
        `,
        practiceQuestions: [
          {
            question:
              "A teacher provides cues and support to a student as needed to help them complete a task they couldn't do alone. This is an example of:",
            options: ['Conservation', 'Scaffolding', 'Egocentrism', 'Object Permanence'],
            correctAnswerIndex: 1,
            explanation:
              "Scaffolding, a key concept in Vygotsky's theory, involves providing temporary support to a learner to help them achieve a task within their Zone of Proximal Development.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-vygotsky',
          },
          {
            question:
              "A young child sees a zebra for the first time and shouts 'Look, a horse!'. According to Piaget, this is an example of:",
            options: ['Accommodation', 'Assimilation', 'Equilibration', 'Object Permanence'],
            correctAnswerIndex: 1,
            explanation:
              "Assimilation is the process of using an existing schema (in this case, the 'horse' schema) to deal with a new object or situation. The child is fitting the new animal into their existing understanding.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-piaget',
          },
        ],
      },
      {
        id: 'cdp2',
        name: 'Inclusive Education & Children with Special Needs',
        notes: `
<h3 class="text-xl font-semibold mb-2 text-primary">Concept of Inclusive Education</h3>
<p class="mb-4">Inclusive education is not just about placing children with disabilities in regular classrooms. It is a philosophy that values diversity and ensures that all students feel a sense of belonging and are provided with the necessary support to learn and participate fully. It is a fundamental principle of the Right to Education (RTE) Act, 2009.</p>

<!-- Diverse Backgrounds -->
<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">1. Addressing Learners from Diverse Backgrounds</h4>
  <p class="mb-3">Diversity includes socio-cultural, linguistic, economic, and gender differences. An inclusive classroom leverages this diversity as a resource for learning.</p>
  <strong class="font-semibold">Strategies for an Inclusive Teacher:</strong>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>Culturally Responsive Pedagogy:</strong> Use teaching materials and examples that reflect the varied cultural backgrounds of students. Avoid stereotypes.</li>
    <li><strong>Multilingualism as a Resource:</strong> Treat students' home languages as a valuable asset, not a barrier. Use it to bridge understanding with the medium of instruction.</li>
    <li><strong>Equitable Opportunities:</strong> Ensure all students have equal access to participate in classroom activities, regardless of their gender or socio-economic background.</li>
  </ul>
</div>

<!-- Learning Difficulties -->
<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">2. Addressing Children with Special Needs (SEN)</h4>
  <p class="mb-3">This involves identifying and providing appropriate support through adaptations and accommodations.</p>
  <strong class="font-semibold">Common Learning Difficulties and Adaptations:</strong>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>Dyslexia (Difficulty with Reading):</strong>
        <br><span class="pl-4"><strong>Strategies:</strong> Multi-sensory teaching (e.g., tracing letters in sand), audiobooks, providing phonetic instruction, allowing extra time.</span></li>
    <li><strong>Dysgraphia (Difficulty with Writing):</strong>
        <br><span class="pl-4"><strong>Strategies:</strong> Providing pencil grips, allowing typed responses, using graph paper for alignment, breaking down writing tasks.</span></li>
    <li><strong>Dyscalculia (Difficulty with Math):</strong>
        <br><span class="pl-4"><strong>Strategies:</strong> Using concrete manipulatives (blocks, beads), visual aids, allowing calculators, relating problems to real-life contexts.</span></li>
    <li><strong>ADHD (Attention Deficit Hyperactivity Disorder):</strong>
        <br><span class="pl-4"><strong>Strategies:</strong> Seating the child away from distractions, giving clear and concise instructions, breaking tasks into smaller chunks, providing frequent positive feedback, and allowing for planned movement breaks.</span></li>
    <li><strong>Autism Spectrum Disorder (ASD):</strong>
        <br><span class="pl-4"><strong>Strategies:</strong> Maintaining a predictable routine (visual schedules), using direct and literal language, providing a quiet space to decompress, being mindful of sensory sensitivities.</span></li>
  </ul>
</div>

<!-- Talented and Creative -->
<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">3. Addressing Gifted, Talented, and Creative Learners</h4>
  <p class="mb-3">Inclusion also means challenging high-ability students to prevent boredom and foster their potential.</p>
  <strong class="font-semibold">Strategies:</strong>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>Enrichment:</strong> Providing more complex and in-depth activities on the same topic, rather than simply giving more work.</li>
    <li><strong>Acceleration:</strong> Allowing students to move through the curriculum at a faster pace or work with higher-level content.</li>
    <li><strong>Encouraging Divergent Thinking:</strong> Posing open-ended problems that have multiple solutions or require creative thinking.</li>
  </ul>
</div>

<div class="mt-6 p-3 bg-yellow-50 rounded-md border border-yellow-200">
  <h5 class="font-bold text-yellow-800">Analyzing Tricky Questions:</h5>
  <p class="text-sm text-yellow-700">CTET questions often focus on the *philosophy* of inclusion. The correct answer is usually the one that involves adapting the *system* for the child, not expecting the child to fit into a rigid system. Avoid options that suggest segregation, labeling, or having lower expectations for any child.</p>
</div>
        `,
        practiceQuestions: [
          {
            question: 'Inclusive Education aims to:',
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
          {
            question:
              'A teacher provides a structured environment, breaks down tasks into smaller steps, and allows for short movement breaks. This approach is most beneficial for a student with:',
            options: ['Dyslexia', 'Dyscalculia', 'ADHD', 'Hearing impairment'],
            correctAnswerIndex: 2,
            explanation:
              'These strategies—structure, breaking down tasks, and allowing for movement—directly address the core challenges of inattention, and hyperactivity associated with ADHD.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-sen',
          },
          {
            question:
              'In an inclusive classroom, providing more challenging and complex tasks for students who have already mastered the current topic is a strategy known as:',
            options: ['Remedial Teaching', 'Enrichment', 'Scaffolding', 'Standardized Assessment'],
            correctAnswerIndex: 1,
            explanation:
              'Enrichment is a key strategy for addressing the needs of talented and gifted students. It involves providing them with opportunities to explore a subject in greater depth and complexity.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-gifted',
          },
        ],
      },
      {
        id: 'cdp3',
        name: 'Learning and Pedagogy',
        notes: `
<h3 class="text-xl font-semibold mb-2 text-primary">Fundamental Processes of Teaching and Learning</h3>
<p class="mb-4">This section covers how children think and learn, the role of motivation and emotion, and the factors influencing learning. It is the core of classroom pedagogy.</p>

<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">How Children Think and Learn</h4>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>Child as a Problem Solver:</strong> Children are naturally curious and actively try to make sense of their world. They form their own theories ("naive theories" or "alternative conceptions") about how things work.</li>
    <li><strong>Understanding 'Errors':</strong> A child's errors are not failures but valuable windows into their thinking process. Effective teaching involves analyzing these errors to understand a child's current conceptions and guide them towards more scientific understanding.</li>
  </ul>
</div>

<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">Cognition & Emotions</h4>
  <p class="mb-3">Cognition (thinking) and emotion are deeply intertwined and cannot be separated.</p>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>Positive Emotions:</strong> Feelings like curiosity, excitement, and a sense of safety enhance learning, memory, and problem-solving.</li>
    <li><strong>Negative Emotions:</strong> Fear, anxiety, and humiliation can inhibit learning by creating a "mental block." A positive and emotionally supportive classroom is essential for effective learning.</li>
  </ul>
</div>

<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">Motivation and Learning</h4>
  <p class="mb-3">Motivation is the force that energizes and directs behavior.</p>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>Intrinsic Motivation:</strong> The desire to perform a task for its own sake (e.g., reading a book for pleasure). This is more sustainable and leads to deeper learning.</li>
    <li><strong>Extrinsic Motivation:</strong> The desire to perform a task to gain an external reward (e.g., getting a good grade, praise) or avoid punishment.</li>
    <li><strong>Fostering Motivation:</strong> A teacher should focus on fostering intrinsic motivation by making learning meaningful, providing choices, and creating challenging but achievable tasks.</li>
  </ul>
</div>

<div class="mt-6 p-3 bg-yellow-50 rounded-md border border-yellow-200">
    <h5 class="font-bold text-yellow-800">Analyzing Tricky Questions:</h5>
    <p class="text-sm text-yellow-700">Questions often ask for the *best* way to motivate students. The answer is almost always related to fostering intrinsic motivation (e.g., arousing curiosity, relating topics to their lives) rather than using extrinsic rewards or punishments. Similarly, questions about errors will favor options that treat mistakes as learning opportunities.</p>
</div>
        `,
        practiceQuestions: [
          {
            question:
              "Viewing a child's mistake as a significant step in the learning process aligns with which pedagogical concept?",
            options: [
              'Rote memorization',
              'Alternative conceptions of learning',
              'Summative assessment',
              'Rewarding correct answers only',
            ],
            correctAnswerIndex: 1,
            explanation:
              "Understanding children's 'errors' as valuable insights into their thinking is a key part of modern pedagogy, falling under the idea of alternative conceptions of learning.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-learning-process',
          },
        ],
      },
      {
        id: 'cdp4',
        name: 'Gender as a Social Construct',
        notes: `
<h3 class="text-xl font-semibold mb-2 text-primary">Understanding Gender in the Educational Context</h3>
<p class="mb-4">This topic is crucial for creating equitable classrooms. It requires understanding the difference between sex (biological) and gender (socially constructed), and how gender roles and biases can impact a child's educational journey.</p>

<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">Core Concepts</h4>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>Gender as a Social Construct:</strong> While sex refers to biological differences, gender refers to the roles, behaviors, activities, and attributes that a given society considers appropriate for men and women. These are learned, not innate.</li>
    <li><strong>Gender Roles:</strong> Societal expectations of how individuals should act based on their gender (e.g., "boys should be tough," "girls should be nurturing").</li>
    <li><strong>Gender Stereotypes:</strong> Oversimplified and often inaccurate beliefs about the characteristics of all members of a particular gender (e.g., "boys are better at math," "girls are not good at sports").</li>
    <li><strong>Gender Bias:</strong> The tendency to prefer one gender over another. In the classroom, this can manifest as a teacher giving more attention to boys in a science class or praising girls more for being neat.</li>
  </ul>
</div>

<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">The Teacher's Role in a Gender-Inclusive Classroom</h4>
  <p class="mb-3">The teacher plays a pivotal role in either reinforcing or challenging gender stereotypes.</p>
  <strong class="font-semibold">Strategies for Educational Practice:</strong>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>Use Gender-Neutral Language:</strong> Use terms like "students," "children," or "everyone" instead of "boys and girls."</li>
    <li><strong>Challenge Stereotypes:</strong> Actively challenge stereotypical comments made by students. Use examples in lessons that defy traditional gender roles (e.g., female scientists, male nurses).</li>
    <li><strong>Provide Equal Opportunities:</strong> Ensure that both boys and girls are encouraged to participate in all classroom activities, from sports to art to science experiments.</li>
    <li><strong>Critical Self-Reflection:</strong> Teachers must continuously examine their own unconscious biases to ensure they are not treating students differently based on gender.</li>
  </ul>
</div>

<div class="mt-6 p-3 bg-yellow-50 rounded-md border border-yellow-200">
    <h5 class="font-bold text-yellow-800">Analyzing Tricky Questions:</h5>
    <p class="text-sm text-yellow-700">CTET questions often present classroom scenarios. The correct answer will always be the one that promotes gender equity and challenges stereotypes. For example, a question might ask what a teacher should do if a boy wants to play with dolls. The correct pedagogical response is to allow it and use it as a teachable moment for the class about how toys are for everyone.</p>
</div>
        `,
        practiceQuestions: [
          {
            question:
              'A teacher who pays more attention to boys than girls during a science experiment is demonstrating:',
            options: ['Inclusive education', 'Progressive education', 'Gender bias', 'Child-centered learning'],
            correctAnswerIndex: 2,
            explanation:
              'Gender bias in education refers to the preferential treatment or stereotyping of students based on their gender, which can negatively impact their learning and development.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-bias',
          },
        ],
      },
    ],
  },
  {
    name: SubjectName.MATH,
    icon: CalculatorIcon,
    topics: [
      {
        id: 'math1',
        name: 'Geometry, Shapes & Solids',
        notes: `
<h3 class="text-xl font-semibold mb-2 text-primary">Geometry Basics</h3>
<p class="mb-4">This section covers fundamental concepts of geometry relevant to the primary stage, focusing on shapes, spatial understanding, and solids around us.</p>
<strong class="text-lg text-primary-dark">Key Concepts:</strong>
<ul class="list-disc list-inside ml-4 mb-4 space-y-2">
  <li><strong>Shapes & Spatial Understanding:</strong> Recognizing and understanding basic 2D (squares, circles, triangles) and 3D shapes.</li>
  <li><strong>Solids Around Us:</strong> Identifying and understanding the properties of three-dimensional objects in the environment like cubes, cylinders, and spheres.</li>
  <li><strong>Properties:</strong> Understanding basic properties like sides, vertices (corners), and faces. For example, a cube has 6 faces, 12 edges, and 8 vertices.</li>
</ul>
        `,
        practiceQuestions: [
          {
            question: 'How many vertices (corners) does a cube have?',
            options: ['4', '6', '8', '12'],
            correctAnswerIndex: 2,
            explanation: 'A cube has 8 vertices (corners), where the edges meet.',
            subjectName: SubjectName.MATH,
            topicId: 'math1',
            subTopicId: 'math1-solids',
          },
        ],
      },
      {
        id: 'math2',
        name: 'Numbers, Measurement & Data Handling',
        notes: `
<h3 class="text-xl font-semibold mb-2 text-primary">Core Mathematical Concepts</h3>
<p class="mb-4">This area covers essential numerical and data-related skills for the primary level.</p>
<strong class="text-lg text-primary-dark">Key Concepts:</strong>
<ul class="list-disc list-inside ml-4 mb-4 space-y-2">
  <li><strong>Numbers:</strong> Operations like Addition, Subtraction, Multiplication, and Division.</li>
  <li><strong>Measurement:</strong> Understanding concepts of length, weight, capacity, and time.</li>
  <li><strong>Volume:</strong> The concept of space occupied by 3D objects.</li>
  <li><strong>Data Handling:</strong> Collecting, organizing, and interpreting simple data.</li>
  <li><strong>Patterns:</strong> Identifying, extending, and creating numerical and geometrical patterns.</li>
  <li><strong>Money:</strong> Understanding currency and solving simple money-related problems.</li>
</ul>
        `,
        practiceQuestions: [
          {
            question: 'If you buy a pen for ₹10 and a notebook for ₹25, how much do you pay in total?',
            options: ['₹30', '₹35', '₹40', '₹15'],
            correctAnswerIndex: 1,
            explanation: 'This is a simple addition problem: ₹10 (pen) + ₹25 (notebook) = ₹35.',
            subjectName: SubjectName.MATH,
            topicId: 'math2',
            subTopicId: 'math2-money',
          },
        ],
      },
      {
        id: 'math3',
        name: 'Pedagogical Issues in Mathematics',
        notes: `
<h3 class="text-xl font-semibold mb-2 text-primary">Teaching Mathematics Effectively (As per NCF 2005)</h3>
<p class="mb-4">This section is critical. It's not about solving math problems, but understanding *how* to teach math. The focus is on developing children's thinking and reasoning abilities, moving away from rote memorization of formulas.</p>

<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">Nature of Mathematics & Logical Thinking</h4>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li>Mathematics is hierarchical in nature; concepts build upon each other.</li>
    <li>It is abstract, yet it has strong connections to the real world.</li>
    <li>The primary aim of teaching mathematics is the 'mathematization of the child's thought process'—helping them to think logically, reason, and solve problems in their own way.</li>
  </ul>
</div>

<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">Place of Mathematics in the Curriculum</h4>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>Language of Mathematics:</strong> Children need to understand the specific vocabulary and symbols of math.</li>
    <li><strong>Community Mathematics:</strong> Connecting classroom math to everyday life (e.g., shopping, measuring, patterns in nature). This makes learning more meaningful.</li>
  </ul>
</div>

<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">Evaluation and Error Analysis</h4>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>Continuous and Comprehensive Evaluation (CCE):</strong> Assessment should be an ongoing part of teaching, not just a test at the end. It includes observations, projects, and discussions.</li>
    <li><strong>Error Analysis:</strong> Children's errors are not random; they are indicative of their thinking. A teacher's role is to analyze these errors to understand the child's misconceptions. For example, a child writing 25 + 35 = 510 shows a misunderstanding of place value.</li>
    <li><strong>Diagnostic and Remedial Teaching:</strong> This involves identifying the specific learning gaps through diagnosis (finding the problem) and then providing targeted teaching to fix those gaps (remedy).</li>
  </ul>
</div>

<div class="mt-6 p-3 bg-yellow-50 rounded-md border border-yellow-200">
  <h5 class="font-bold text-yellow-800">Analyzing Tricky Questions:</h5>
  <p class="text-sm text-yellow-700">Pedagogy questions in math will ask for the *best* teaching approach. The correct answer will almost always be child-centric, constructive, and related to real-world context. Avoid options that promote rote memorization, teacher-centric lectures, or focus only on getting the right answer without understanding the process. For example, if a child makes a mistake, the best action is to understand their thinking, not just to correct the answer.</p>
</div>
        `,
        practiceQuestions: [
          {
            question:
              "Analyzing a student's mistake in a subtraction problem to understand their thought process is an example of:",
            options: ['Summative evaluation', 'Error analysis', 'Community mathematics', 'Rote learning'],
            correctAnswerIndex: 1,
            explanation:
              "Error analysis involves carefully examining a student's mistakes not just to correct them, but to understand the underlying misconception, which is a key aspect of effective math pedagogy.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-error-analysis',
          },
        ],
      },
    ],
  },
  {
    name: SubjectName.EVS,
    icon: GlobeAltIcon,
    topics: [
      {
        id: 'evs1',
        name: 'Family and Friends (Theme)',
        notes: `
<h3 class="text-xl font-semibold mb-2 text-primary">Theme: Family and Friends</h3>
<p class="mb-4">This is one of the six main themes of the EVS syllabus. It explores the immediate social and natural environment of the child through four sub-themes.</p>
<strong class="text-lg text-primary-dark">Sub-themes:</strong>
<ul class="list-disc list-inside ml-4 mb-4 space-y-2">
  <li><strong>Relationships:</strong> Understanding family structures (nuclear, joint) and the roles of family members.</li>
  <li><strong>Work and Play:</strong> Learning about different occupations and the importance of play and recreation.</li>
  <li><strong>Animals:</strong> Knowledge about different types of animals, their habitats, and characteristics.</li>
  <li><strong>Plants:</strong> Basic understanding of plants, their parts, and their uses.</li>
</ul>
        `,
        practiceQuestions: [
          {
            question: "In the context of the EVS syllabus, 'Work and Play' and 'Animals' are considered:",
            options: [
              'Main themes',
              "Sub-themes under 'Family and Friends'",
              'Pedagogical issues',
              'Scientific concepts',
            ],
            correctAnswerIndex: 1,
            explanation:
              "The EVS syllabus is structured around six main themes. 'Family and Friends' is one such theme, and it includes the four sub-themes of Relationships, Work and Play, Animals, and Plants.",
            subjectName: SubjectName.EVS,
            topicId: 'evs1',
            subTopicId: 'evs1-themes',
          },
        ],
      },
      {
        id: 'evs2',
        name: 'Food, Shelter, Water, Travel (Themes)',
        notes: `
<h3 class="text-xl font-semibold mb-2 text-primary">Core EVS Themes</h3>
<p class="mb-4">These themes cover the basic necessities and activities of life, forming a major part of the EVS content.</p>
<strong class="text-lg text-primary-dark">Key Concepts:</strong>
<ul class="list-disc list-inside ml-4 mb-4 space-y-2">
  <li><strong>Food:</strong> Sources of food, different types of food, and healthy eating habits.</li>
  <li><strong>Shelter:</strong> The importance of shelter, different types of houses, and safety.</li>
  <li><strong>Water:</strong> Sources of water, its uses, conservation, and cleanliness.</li>
  <li><strong>Travel:</strong> Different modes of transport and reasons for travel.</li>
  <li><strong>Things We Make and Do:</strong> Human activities, crafts, and processes.</li>
</ul>
        `,
        practiceQuestions: [
          {
            question:
              'Teaching children about water conservation and different sources of water falls under which EVS theme?',
            options: ['Shelter', 'Food', 'Water', 'Travel'],
            correctAnswerIndex: 2,
            explanation:
              "The theme of 'Water' in the EVS syllabus explicitly covers topics like sources, uses, and the importance of conservation.",
            subjectName: SubjectName.EVS,
            topicId: 'evs2',
            subTopicId: 'evs2-water',
          },
        ],
      },
      {
        id: 'evs3',
        name: 'Pedagogical Issues in EVS',
        notes: `
<h3 class="text-xl font-semibold mb-2 text-primary">Teaching Environmental Studies (As per NCF 2005)</h3>
<p class="mb-4">EVS pedagogy emphasizes an integrated, child-centered, and inquiry-based approach. The goal is to connect learning to the child's immediate environment (natural, social, and cultural).</p>

<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">Concept and Significance of EVS</h4>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>Integrated EVS:</strong> At the primary level, EVS is not taught as separate subjects (Science, Social Science). It integrates concepts from all these areas into thematic units that are relevant to the child's life. For example, the theme 'Food' can involve biology (nutrition), social studies (farming), and environmental science (food wastage).</li>
    <li><strong>Learning Principles:</strong> EVS follows principles like moving from 'known to unknown', 'concrete to abstract', and 'local to global'. Learning should always start from the child's own experiences.</li>
  </ul>
</div>

<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">Approaches and Methods</h4>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>Activities & Experimentation:</strong> Learning should be hands-on. Instead of just reading about plants, children should be encouraged to grow a plant and observe it.</li>
    <li><strong>Discussion & Inquiry:</strong> The classroom should be full of questions (posed by both teacher and students), discussions, and debates. This encourages critical thinking.</li>
    <li><strong>CCE in EVS:</strong> Continuous and Comprehensive Evaluation in EVS is not just about testing knowledge. It involves assessing a child's curiosity, participation, and skills of observation and experimentation. Tools like portfolios, anecdotal records, and checklists are used.</li>
  </ul>
</div>

<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">Teaching-Learning Materials (TLMs)</h4>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li>The most important TLM is the child's immediate environment.</li>
    <li>Other aids include textbooks (seen as one of many resources, not the only one), maps, real objects (realia), and community resources (e.g., visiting a post office or a farm).</li>
  </ul>
</div>

<div class="mt-6 p-3 bg-yellow-50 rounded-md border border-yellow-200">
  <h5 class="font-bold text-yellow-800">Analyzing Tricky Questions:</h5>
  <p class="text-sm text-yellow-700">CTET questions on EVS pedagogy will always favor the most active, child-centered, and environmentally-connected option. Look for answers that involve exploration, discussion, and connection to real-life experiences. Reject options that promote rote learning, textbook-centric methods, or providing definitions without context.</p>
</div>
        `,
        practiceQuestions: [
          {
            question: 'An effective EVS classroom should prioritize:',
            options: [
              'Memorizing facts from the textbook',
              'Hands-on activities, discussions, and experimentation',
              'Daily written tests',
              'Teacher-led lectures only',
            ],
            correctAnswerIndex: 1,
            explanation:
              'The pedagogy of EVS strongly recommends an active, inquiry-based approach where children learn by doing, discussing, and experimenting.',
            subjectName: SubjectName.EVS,
            topicId: 'evs3',
            subTopicId: 'evs3-pedagogy',
          },
        ],
      },
    ],
  },
  {
    name: SubjectName.LANG1,
    icon: LanguageIcon,
    topics: [
      {
        id: 'lang1_1',
        name: 'Language Comprehension',
        notes: `
<h3 class="text-xl font-semibold mb-2 text-primary">Reading Comprehension</h3>
<p class="mb-4">This is tested by presenting two unseen passages—one prose (literary, scientific, narrative, or discursive) and one poem. Questions assess comprehension, inference, grammar, and verbal ability based on the texts.</p>
<strong class="text-lg text-primary-dark">Skills Tested:</strong>
<ul class="list-disc list-inside ml-4 mb-4 space-y-2">
  <li><strong>Comprehension:</strong> Understanding the main idea and specific details of the passage.</li>
  <li><strong>Inference:</strong> Drawing logical conclusions based on the information provided in the text.</li>
  <li><strong>Grammar and Verbal Ability:</strong> Identifying grammatical structures, vocabulary, and language usage within the context of the passage.</li>
</ul>
        `,
        practiceQuestions: [
          {
            question: 'Drawing conclusions based on the information given in a passage is known as:',
            options: ['Comprehension', 'Inference', 'Grammar', 'Verbal Ability'],
            correctAnswerIndex: 1,
            explanation:
              'Inference is the skill of reading between the lines and understanding what is implied but not stated directly in the text.',
            subjectName: SubjectName.LANG1,
            topicId: 'lang1_1',
            subTopicId: 'lang1_1-inference',
          },
        ],
      },
      {
        id: 'lang1_2',
        name: 'Pedagogy of Language Development',
        notes: `
<h3 class="text-xl font-semibold mb-2 text-primary">Pedagogy of Language Development (As per NCF 2005)</h3>
<p class="mb-4">This section focuses on the principles of language teaching, emphasizing that language is a tool for communication and making meaning, not just a set of rules to be memorized.</p>

<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">Learning and Acquisition</h4>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>Acquisition:</strong> A subconscious process, similar to how a child picks up their first language. It happens naturally through meaningful interaction in the target language.</li>
    <li><strong>Learning:</strong> A conscious process of knowing about a language, such as learning its grammar rules.</li>
    <li><strong>Key Principle:</strong> Language is best acquired, not just learned. The classroom should provide a rich, comprehensible input for natural acquisition to occur.</li>
  </ul>
</div>

<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">Principles of Language Teaching</h4>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>Role of Listening and Speaking (LSRW):</strong> Language skills are integrated. Oral skills (listening and speaking) form the foundation for literacy skills (reading and writing).</li>
    <li><strong>Role of Grammar:</strong> Grammar should be taught in context, not as isolated rules. The focus should be on how grammar helps in communicating meaning effectively.</li>
    <li><strong>Challenges in a Diverse Classroom:</strong> Multilingualism should be seen as a resource, not a problem. Children's home languages can be used as a tool to help them learn the target language.</li>
  </ul>
</div>

<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">Assessment and Remedial Teaching</h4>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>Evaluation:</strong> Assessment should be continuous (part of the teaching process) and comprehensive (assessing all four skills). It should focus on a child's ability to use language, not just their knowledge of rules. Portfolio assessment is a key tool.</li>
    <li><strong>Remedial Teaching:</strong> This is not re-teaching the same content. It involves diagnosing the specific difficulties a student is facing and providing targeted support to overcome them.</li>
  </ul>
</div>

<div class="mt-6 p-3 bg-yellow-50 rounded-md border border-yellow-200">
  <h5 class="font-bold text-yellow-800">Analyzing Tricky Questions:</h5>
  <p class="text-sm text-yellow-700">Language pedagogy questions favor approaches that are communicative, child-centered, and meaning-focused. The correct answer will involve using language for a real purpose, integrating skills, and seeing the child as an active constructor of meaning. Reject options that emphasize rote memorization of rules, teacher-centric methods, or treating language skills in isolation.</p>
</div>
        `,
        practiceQuestions: [
          {
            question:
              'The belief that grammar should be taught in a meaningful context for communication, rather than as a set of abstract rules, is known as a:',
            options: [
              'Focus on writing skills only',
              'Critical perspective on the role of grammar',
              'Principle of remedial teaching',
              'Challenge of a diverse classroom',
            ],
            correctAnswerIndex: 1,
            explanation:
              'Modern language pedagogy advocates for teaching grammar in context, which is a critical perspective that moves away from rote memorization of rules.',
            subjectName: SubjectName.LANG1,
            topicId: 'lang1_2',
            subTopicId: 'lang1_2-grammar',
          },
        ],
      },
    ],
  },
  {
    name: SubjectName.LANG2,
    icon: ChatBubbleBottomCenterTextIcon,
    topics: [
      {
        id: 'lang2_1',
        name: 'Comprehension (Hindi)',
        notes: `
<h3 class="text-xl font-semibold mb-2 text-primary">अपठित गद्यांश (Unseen Prose)</h3>
<p class="mb-4">इस भाग में दो अपठित गद्य अनुच्छेद (विचारात्मक, साहित्यिक, वर्णनात्मक, या वैज्ञानिक) दिए जाएंगे। प्रश्न बोधगम्यता, व्याकरण, और मौखिक क्षमता पर आधारित होंगे।</p>
<strong class="text-lg text-primary-dark">परीक्षण किए जाने वाले कौशल (Skills Tested):</strong>
<ul class="list-disc list-inside ml-4 mb-4 space-y-2">
  <li><strong>बोधगम्यता (Comprehension):</strong> अनुच्छेद के मुख्य विचार और विशिष्ट विवरणों को समझना।</li>
  <li><strong>व्याकरण और मौखिक क्षमता (Grammar and Verbal Ability):</strong> अनुच्छेद के संदर्भ में व्याकरणिक संरचनाओं, शब्दावली और भाषा के उपयोग की पहचान करना।</li>
</ul>
        `,
        practiceQuestions: [
          {
            question: 'Language II comprehension section includes:',
            options: [
              'One prose and one poem',
              'Two unseen prose passages',
              'Only grammar questions',
              'Only vocabulary questions',
            ],
            correctAnswerIndex: 1,
            explanation:
              'As per the syllabus for Language II, the comprehension section consists of two unseen prose passages, which can be discursive, literary, narrative, or scientific.',
            subjectName: SubjectName.LANG2,
            topicId: 'lang2_1',
            subTopicId: 'lang2_1-comprehension',
          },
        ],
      },
      {
        id: 'lang2_2',
        name: 'Pedagogy of Language Development (Hindi)',
        notes: `
<h3 class="text-xl font-semibold mb-2 text-primary">भाषा विकास का शिक्षाशास्त्र (NCF 2005 के अनुसार)</h3>
<p class="mb-4">यह खंड भाषा शिक्षण के सिद्धांतों पर केंद्रित है, इस बात पर जोर देता है कि भाषा केवल नियमों का एक समूह नहीं, बल्कि संवाद और अर्थ निर्माण का एक उपकरण है।</p>

<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">अधिगम और अर्जन (Learning and Acquisition)</h4>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>अर्जन (Acquisition):</strong> यह एक अवचेतन प्रक्रिया है, जैसे बच्चा अपनी पहली भाषा सीखता है। यह लक्ष्य भाषा में सार्थक बातचीत के माध्यम से स्वाभाविक रूप से होता है।</li>
    <li><strong>अधिगम (Learning):</strong> यह भाषा के बारे में जानने की एक सचेत प्रक्रिया है, जैसे कि उसके व्याकरण के नियमों को सीखना।</li>
    <li><strong>मुख्य सिद्धांत:</strong> भाषा का केवल अधिगम नहीं, बल्कि अर्जन सर्वोत्तम है। कक्षा को प्राकृतिक अर्जन के लिए एक समृद्ध और बोधगम्य परिवेश प्रदान करना चाहिए।</li>
  </ul>
</div>

<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">भाषा शिक्षण के सिद्धांत</h4>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>सुनने और बोलने की भूमिका (LSRW):</strong> भाषा कौशल एकीकृत होते हैं। मौखिक कौशल (सुनना और बोलना) साक्षरता कौशल (पढ़ना और लिखना) की नींव बनाते हैं।</li>
    <li><strong>व्याकरण की भूमिका:</strong> व्याकरण को अलग-थलग नियमों के रूप में नहीं, बल्कि संदर्भ में पढ़ाया जाना चाहिए। इसका उद्देश्य प्रभावी ढंग से संवाद करने में व्याकरण कैसे मदद करता है, इस पर ध्यान केंद्रित करना होना चाहिए।</li>
    <li><strong>विविध कक्षा की चुनौतियाँ:</strong> बहुभाषिकता को एक समस्या के रूप में नहीं, बल्कि एक संसाधन के रूप में देखा जाना चाहिए। बच्चों की घरेलू भाषाओं का उपयोग लक्ष्य भाषा सीखने में मदद के लिए एक उपकरण के रूप में किया जा सकता है।</li>
  </ul>
</div>

<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">मूल्यांकन और उपचारात्मक शिक्षण</h4>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>मूल्यांकन:</strong> मूल्यांकन निरंतर (शिक्षण प्रक्रिया का हिस्सा) और व्यापक (सभी चार कौशलों का आकलन) होना चाहिए। इसे केवल नियमों के ज्ञान के बजाय भाषा का उपयोग करने की बच्चे की क्षमता पर ध्यान केंद्रित करना चाहिए। पोर्टफोलियो मूल्यांकन एक प्रमुख उपकरण है।</li>
    <li><strong>उपचारात्मक शिक्षण:</strong> यह उसी सामग्री को फिर से पढ़ाना नहीं है। इसमें छात्र द्वारा सामना की जा रही विशिष्ट कठिनाइयों का निदान करना और उन अंतरालों को दूर करने के लिए लक्षित सहायता प्रदान करना शामिल है।</li>
  </ul>
</div>

<div class="mt-6 p-3 bg-yellow-50 rounded-md border border-yellow-200">
  <h5 class="font-bold text-yellow-800">जटिल प्रश्नों का विश्लेषण:</h5>
  <p class="text-sm text-yellow-700">भाषा शिक्षाशास्त्र के प्रश्न उन दृष्टिकोणों का समर्थन करते हैं जो संचारी, बाल-केंद्रित और अर्थ-केंद्रित हैं। सही उत्तर में वास्तविक उद्देश्य के लिए भाषा का उपयोग करना, कौशल को एकीकृत करना और बच्चे को अर्थ के एक सक्रिय निर्माता के रूप में देखना शामिल होगा। नियमों को रटने, शिक्षक-केंद्रित तरीकों या भाषा कौशल को अलग-थलग करने पर जोर देने वाले विकल्पों को अस्वीकार करें।</p>
</div>
        `,
        practiceQuestions: [
          {
            question: 'Which of the following is NOT one of the four core language skills (LSRW)?',
            options: ['Listening', 'Speaking', 'Memorizing', 'Writing'],
            correctAnswerIndex: 2,
            explanation:
              'The four core language skills are Listening, Speaking, Reading, and Writing (LSRW). Memorizing can be a learning strategy but is not considered a core communication skill in this framework.',
            subjectName: SubjectName.LANG2,
            topicId: 'lang2_2',
            subTopicId: 'lang2_2-lsrw',
          },
        ],
      },
    ],
  },
];
