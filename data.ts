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
          {
            question: "According to Piaget, during which stage do children develop object permanence?",
            options: ['Sensorimotor', 'Preoperational', 'Concrete Operational', 'Formal Operational'],
            correctAnswerIndex: 0,
            explanation: "Object permanence is achieved during the Sensorimotor stage (0-2 years), where children understand that objects continue to exist even when they cannot be seen.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-piaget',
          },
          {
            question: "Which Piagetian stage is characterized by egocentrism and lack of conservation?",
            options: ['Sensorimotor', 'Preoperational', 'Concrete Operational', 'Formal Operational'],
            correctAnswerIndex: 1,
            explanation: "The Preoperational stage (2-7 years) is marked by egocentrism (inability to see from another's perspective) and lack of conservation (inability to understand that quantity remains the same despite changes in appearance).",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-piaget',
          },
          {
            question: "In Kohlberg's theory, which level focuses on social conformity and maintaining social order?",
            options: ['Pre-conventional', 'Conventional', 'Post-conventional', 'Pre-moral'],
            correctAnswerIndex: 1,
            explanation: "The Conventional level in Kohlberg's theory includes stages 3 and 4, where moral reasoning is based on gaining approval from others and maintaining social order.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-kohlberg',
          },
          {
            question: "Vygotsky's concept of the Zone of Proximal Development (ZPD) refers to:",
            options: ['What a child can do alone', 'What a child can do with guidance', 'What a child cannot learn', 'The final stage of development'],
            correctAnswerIndex: 1,
            explanation: "The Zone of Proximal Development is the gap between what a learner can do independently and what they can achieve with guidance from a more knowledgeable other.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-vygotsky',
          },
          {
            question: "According to Piaget, conservation is typically achieved during which stage?",
            options: ['Sensorimotor', 'Preoperational', 'Concrete Operational', 'Formal Operational'],
            correctAnswerIndex: 2,
            explanation: "Conservation (understanding that quantity remains the same despite changes in appearance) is achieved during the Concrete Operational stage (7-11 years).",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-piaget',
          },
          {
            question: "Which of the following is a limitation of Piaget's theory?",
            options: ['It ignores social interaction', 'It overestimates young children\'s abilities', 'It focuses only on physical development', 'It ignores cultural differences'],
            correctAnswerIndex: 3,
            explanation: "Piaget's theory has been criticized for not adequately considering cultural differences in cognitive development and for underestimating the role of social interaction.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-piaget',
          },
          {
            question: "In Kohlberg's Heinz dilemma, a person at Stage 1 would argue:",
            options: ['Heinz should steal because stealing is wrong', 'Heinz should steal because he needs the medicine', 'Heinz should not steal because laws must be obeyed', 'Heinz should not steal because it violates human rights'],
            correctAnswerIndex: 0,
            explanation: "At Stage 1 (Obedience and Punishment), the reasoning focuses on avoiding punishment rather than the consequences of the action.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-kohlberg',
          },
          {
            question: "Vygotsky emphasized the role of language in cognitive development. Which term describes self-talk that guides behavior?",
            options: ['Inner speech', 'Private speech', 'Social speech', 'Public speech'],
            correctAnswerIndex: 1,
            explanation: "Private speech refers to self-talk that children use to guide their actions and thinking, which eventually becomes internalized as inner speech.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-vygotsky',
          },
          {
            question: "According to Piaget, which cognitive process involves modifying existing schemas to fit new information?",
            options: ['Assimilation', 'Accommodation', 'Equilibration', 'Adaptation'],
            correctAnswerIndex: 1,
            explanation: {
              basic: "Accommodation involves changing existing schemas to incorporate new information that doesn't fit the current understanding.",
              theory: "Piaget's theory of cognitive development emphasizes that children actively construct knowledge through the processes of assimilation and accommodation. Accommodation represents the cognitive restructuring that occurs when new experiences challenge existing mental frameworks, aligning with NCF 2005's emphasis on constructivist learning.",
              realLifeExample: "A child who has only seen domestic cats encounters a lion at the zoo. Initially, they might call it a 'big cat,' but through accommodation, they modify their 'cat' schema to distinguish between domestic cats and wild big cats like lions.",
              detailed: "In Piaget's framework, accommodation is crucial for cognitive growth as it allows children to adapt their understanding to new realities. This process often creates cognitive disequilibrium, which motivates the child to reorganize their mental structures. Teachers can facilitate accommodation by introducing experiences that challenge students' existing conceptions, such as hands-on experiments that contradict their initial hypotheses.",
              teachingTip: "Present students with discrepant events or counterintuitive demonstrations to trigger accommodation. For example, show how water appears to change volume when poured between differently shaped containers to challenge their conservation concepts."
            },
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-piaget',
            difficulty: 'medium',
            ncfReference: 'NCF 2005 - Learning and Knowledge',
            keywords: ['piaget', 'accommodation', 'cognitive development', 'schemas']
          },
          {
            question: "Kohlberg's Stage 6 is characterized by moral reasoning based on:",
            options: ['Personal gain', 'Social approval', 'Universal ethical principles', 'Obeying authority'],
            correctAnswerIndex: 2,
            explanation: {
              basic: "Stage 6 (Universal Principles) involves moral reasoning based on universal ethical principles and conscience, rather than societal norms or laws.",
              theory: "Kohlberg's post-conventional level represents the highest stage of moral development, where individuals internalize universal ethical principles that transcend specific societal rules. This aligns with NCF 2005's emphasis on developing values and ethical reasoning in children.",
              realLifeExample: "A teacher refuses to follow a school policy that discriminates against certain students, arguing that it violates fundamental human rights principles, even if it means risking their job. This demonstrates Stage 6 reasoning based on universal ethical principles rather than institutional rules.",
              detailed: "Stage 6 represents the pinnacle of moral development where individuals follow self-chosen ethical principles that apply universally to all people. These principles are abstract and may conflict with existing laws or social norms. In educational contexts, teachers at this stage prioritize justice, human dignity, and equality over maintaining social order or following rules that perpetuate injustice.",
              teachingTip: "Encourage students to discuss moral dilemmas that pit societal rules against universal human rights. Use examples like historical civil rights movements to illustrate how Stage 6 reasoning leads to challenging unjust systems."
            },
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-kohlberg',
            difficulty: 'hard',
            ncfReference: 'NCF 2005 - Values and Ethics',
            keywords: ['kohlberg', 'moral development', 'universal principles', 'ethics']
          },
          {
            question: "Which Vygotskian concept refers to a more knowledgeable person providing support to a learner?",
            options: ['Scaffolding', 'Zone of Proximal Development', 'Cultural tools', 'Inner speech'],
            correctAnswerIndex: 0,
            explanation: {
              basic: "Scaffolding refers to the temporary support provided by a more knowledgeable other to help a learner achieve a task within their ZPD.",
              theory: "Vygotsky's scaffolding concept is central to his sociocultural theory, emphasizing that cognitive development occurs through social interaction. The MKO (More Knowledgeable Other) provides structured support that is gradually withdrawn as the learner becomes more competent, aligning with NCF 2005's constructivist approach to learning.",
              realLifeExample: "A teacher works with a student struggling to solve a math word problem. Initially, the teacher asks guiding questions like 'What information do you have?' and 'What operation might help?' As the student gains confidence, the teacher reduces the hints until the student can solve similar problems independently.",
              detailed: "Scaffolding involves providing the right level of support at the right time. Effective scaffolds include: modeling the process, asking strategic questions, providing hints, offering partial solutions, and using visual aids. The goal is to bridge the gap between what the learner can do alone and what they can achieve with guidance, gradually transferring responsibility to the learner.",
              teachingTip: "Start with maximum support and gradually reduce it. Use the 'I do, we do, you do' model: first demonstrate the skill, then guide students through it together, finally have them practice independently."
            },
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-vygotsky',
            difficulty: 'medium',
            ncfReference: 'NCF 2005 - Social Context of Learning',
            keywords: ['vygotsky', 'scaffolding', 'zpd', 'guided learning']
          },
          {
            question: "Piaget's theory is considered constructivist because it emphasizes that children:",
            options: ['Are passive recipients of knowledge', 'Actively construct their understanding', 'Learn only through imitation', 'Are born with innate knowledge'],
            correctAnswerIndex: 1,
            explanation: "Piaget's theory is constructivist, positing that children actively construct their understanding of the world through interaction with their environment.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-piaget',
          },
          {
            question: "Which Kohlberg stage would likely argue that 'rules are rules and must be followed'?",
            options: ['Stage 1', 'Stage 2', 'Stage 4', 'Stage 6'],
            correctAnswerIndex: 2,
            explanation: "Stage 4 (Maintaining Social Order) emphasizes obeying laws and maintaining social order, often with the reasoning that 'rules are rules.'",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-kohlberg',
          },
          {
            question: "Vygotsky's theory differs from Piaget's in emphasizing:",
            options: ['Individual exploration', 'Social interaction and culture', 'Biological maturation', 'Stage-like development'],
            correctAnswerIndex: 1,
            explanation: "Vygotsky emphasized the crucial role of social interaction, language, and cultural tools in cognitive development, unlike Piaget who focused more on individual exploration.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-vygotsky',
          },
          {
            question: "During Piaget's Formal Operational stage, children can:",
            options: ['Think abstractly and hypothetically', 'Only think about concrete objects', 'Understand object permanence', 'Overcome egocentrism'],
            correctAnswerIndex: 0,
            explanation: "The Formal Operational stage (12+ years) is characterized by the ability to think abstractly, hypothetically, and about possibilities.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-piaget',
          },
          {
            question: "Carol Gilligan critiqued Kohlberg's theory for being:",
            options: ['Too focused on justice', 'Male-centric and ignoring care perspective', 'Too complex for children', 'Not applicable to real-life dilemmas'],
            correctAnswerIndex: 1,
            explanation: "Gilligan argued that Kohlberg's theory was male-centric, prioritizing a 'justice perspective' while ignoring the 'care perspective' that is often more prominent in female moral reasoning.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-kohlberg',
          },
          {
            question: "Which concept from Vygotsky emphasizes that cognitive development is mediated by cultural tools?",
            options: ['Scaffolding', 'Zone of Proximal Development', 'Cultural mediation', 'Private speech'],
            correctAnswerIndex: 2,
            explanation: "Vygotsky emphasized that cognitive development is mediated by cultural tools like language, symbols, and artifacts that are passed down through generations.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-vygotsky',
          },
          {
            question: "Piaget's concept of equilibration refers to:",
            options: ['Balancing new information with existing knowledge', 'Maintaining cognitive stability', 'Ignoring contradictory information', 'Focusing only on assimilation'],
            correctAnswerIndex: 0,
            explanation: "Equilibration is the cognitive process of balancing new information with existing knowledge, moving from disequilibrium to equilibrium.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-piaget',
          },
          {
            question: "In Kohlberg's theory, the Pre-conventional level is characterized by:",
            options: ['Self-interest and avoiding punishment', 'Social conformity', 'Universal principles', 'Abstract moral reasoning'],
            correctAnswerIndex: 0,
            explanation: "The Pre-conventional level (Stages 1-2) is characterized by self-interest, avoiding punishment, and simple exchanges based on personal gain.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-kohlberg',
          },
          {
            question: "Vygotsky believed that language plays a crucial role in:",
            options: ['Inhibiting cognitive development', 'Mediating and facilitating cognitive development', 'Replacing action-based learning', 'Isolating the child from social interaction'],
            correctAnswerIndex: 1,
            explanation: "Vygotsky saw language as a crucial tool that mediates cognitive development, allowing children to internalize social interactions and cultural knowledge.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-vygotsky',
          },
          {
            question: "Which Piagetian limitation is most evident in young children's inability to understand conservation?",
            options: ['Lack of logical thinking', 'Egocentrism', 'Irreversibility', 'Centration'],
            correctAnswerIndex: 3,
            explanation: "Centration (focusing on only one aspect of a situation) prevents children from understanding conservation, as they focus on changes in appearance rather than overall quantity.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-piaget',
          },
          {
            question: "Kohlberg's Post-conventional level includes reasoning based on:",
            options: ['Personal relationships', 'Social contracts and individual rights', 'Universal human rights', 'Both B and C'],
            correctAnswerIndex: 3,
            explanation: "The Post-conventional level includes Stage 5 (Social Contract) and Stage 6 (Universal Principles), both involving reasoning beyond societal norms.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-kohlberg',
          },
          {
            question: "According to Vygotsky, which type of speech guides children's actions and eventually becomes internalized?",
            options: ['Social speech', 'Public speech', 'Private speech', 'Formal speech'],
            correctAnswerIndex: 2,
            explanation: "Private speech is the self-talk that children use to guide their actions and thinking, which gradually becomes internalized as silent inner speech.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-vygotsky',
          },
          {
            question: "Piaget's stages are considered universal because they:",
            options: ['Occur at the same ages for all children', 'Follow a fixed sequence regardless of culture', 'Are biologically determined', 'All of the above'],
            correctAnswerIndex: 1,
            explanation: "Piaget believed that the sequence of stages is universal and follows a fixed order, though the ages at which children reach each stage can vary.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-piaget',
          },
          {
            question: "Which Kohlberg stage would most likely argue for civil disobedience in an unjust situation?",
            options: ['Stage 3', 'Stage 4', 'Stage 5', 'Stage 6'],
            correctAnswerIndex: 2,
            explanation: "Stage 5 (Social Contract) recognizes that laws are social contracts that can be changed for the greater good, allowing for civil disobedience in unjust situations.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-kohlberg',
          },
          {
            question: "Vygotsky's theory is often called 'sociocultural' because it emphasizes:",
            options: ['Individual cognitive processes', 'The role of society and culture in development', 'Biological maturation', 'Stage-like progression'],
            correctAnswerIndex: 1,
            explanation: "Vygotsky's theory is called sociocultural because it emphasizes how social interaction and cultural tools shape cognitive development.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-vygotsky',
          },
          {
            question: "During Piaget's Concrete Operational stage, children master:",
            options: ['Abstract reasoning', 'Conservation and seriation', 'Object permanence', 'Symbolic thought'],
            correctAnswerIndex: 1,
            explanation: "The Concrete Operational stage is characterized by mastery of conservation, seriation, transitivity, and other logical operations with concrete objects.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-piaget',
          },
          {
            question: "Kohlberg's theory has been criticized for:",
            options: ['Being too focused on moral reasoning', 'Not considering real-life moral dilemmas', 'Being culturally biased toward Western values', 'All of the above'],
            correctAnswerIndex: 2,
            explanation: "Kohlberg's theory has been criticized for being culturally biased, as it reflects Western individualistic values and may not apply universally across cultures.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-kohlberg',
          },
          {
            question: "Which Vygotskian concept explains how children learn through interaction with more capable peers or adults?",
            options: ['Assimilation', 'Scaffolding', 'Equilibration', 'Accommodation'],
            correctAnswerIndex: 1,
            explanation: "Scaffolding refers to the supportive interactions that more knowledgeable others provide to help children achieve tasks within their Zone of Proximal Development.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-vygotsky',
          },
          {
            question: "Piaget believed that cognitive development is driven by:",
            options: ['Social interaction', 'Biological maturation and experience', 'Cultural transmission', 'Direct instruction'],
            correctAnswerIndex: 1,
            explanation: "Piaget emphasized that cognitive development results from the interaction between biological maturation and physical/social experiences.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-piaget',
          },
          {
            question: "In Kohlberg's Heinz dilemma, someone at Stage 3 would argue:",
            options: ['Heinz should steal because he loves his wife', 'Heinz should not steal because stealing is illegal', 'Heinz should steal because it\'s his duty', 'Heinz should not steal because it violates universal rights'],
            correctAnswerIndex: 0,
            explanation: "Stage 3 (Good Interpersonal Relationships) focuses on maintaining relationships and gaining approval, so the reasoning would center on preserving the marital relationship.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-kohlberg',
          },
          {
            question: "Vygotsky's concept of cultural tools includes:",
            options: ['Only language', 'Language, symbols, and artifacts', 'Only biological factors', 'Only individual experiences'],
            correctAnswerIndex: 1,
            explanation: "Cultural tools in Vygotsky's theory include language, symbols, writing systems, and other artifacts that mediate cognitive development.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-vygotsky',
          },
          {
            question: "Which Piagetian concept explains why young children cannot understand that the amount of water remains the same when poured into a different shaped container?",
            options: ['Assimilation', 'Accommodation', 'Centration', 'Equilibration'],
            correctAnswerIndex: 2,
            explanation: "Centration causes children to focus on only one dimension (like height) and ignore others (like width), preventing understanding of conservation.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-piaget',
          },
          {
            question: "Kohlberg's Stage 2 is characterized by moral reasoning based on:",
            options: ['Avoiding punishment', 'Fair exchanges and self-interest', 'Social approval', 'Universal principles'],
            correctAnswerIndex: 1,
            explanation: "Stage 2 (Individualism and Exchange) involves moral reasoning based on fair exchanges and self-interest ('What's in it for me?').",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-kohlberg',
          },
          {
            question: "According to Vygotsky, cognitive development occurs first:",
            options: ['Individually, then socially', 'Socially, then individually', 'Simultaneously in both domains', 'Only through biological maturation'],
            correctAnswerIndex: 1,
            explanation: "Vygotsky believed that cognitive development occurs first on the social level (through interaction) and then becomes internalized at the individual level.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-vygotsky',
          },
          {
            question: "Piaget's theory has been most influential in:",
            options: ['Educational psychology', 'Clinical psychology', 'Developmental biology', 'Social psychology'],
            correctAnswerIndex: 0,
            explanation: "Piaget's theory has had the greatest impact on educational psychology, influencing how we understand children's cognitive development and learning.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-piaget',
          },
          {
            question: "Which Kohlberg stage represents the highest level of moral development?",
            options: ['Stage 4', 'Stage 5', 'Stage 6', 'Stage 3'],
            correctAnswerIndex: 2,
            explanation: "Stage 6 (Universal Principles) represents the highest level of moral development, where reasoning is based on universal ethical principles.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-kohlberg',
          },
          {
            question: "Vygotsky's theory emphasizes that learning:",
            options: ['Precedes development', 'Follows development', 'Is independent of development', 'Replaces development'],
            correctAnswerIndex: 0,
            explanation: "Vygotsky believed that learning pulls development forward, creating the Zone of Proximal Development and enabling higher levels of cognitive functioning.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp1',
            subTopicId: 'cdp1-vygotsky',
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
            explanation: {
              basic: 'The core principle of inclusive education is to create a single, supportive educational system where all learners, including those with special needs, are welcomed and taught together in regular classrooms.',
              theory: 'Inclusive education is rooted in the social model of disability and human rights principles. It rejects the medical model that views disability as an individual deficit requiring segregation. NCF 2005 and RTE Act 2009 mandate inclusive education as a fundamental right, emphasizing that diversity in the classroom is a resource for learning rather than a problem to be solved.',
              realLifeExample: 'A classroom includes students with different abilities: one with dyslexia who uses text-to-speech software, another who is gifted and helps peers, a student from a rural background who brings unique perspectives, and typically developing students who learn empathy and collaboration skills from their diverse classmates.',
              detailed: 'Inclusive education involves: (1) Zero reject - no child is denied admission, (2) Zero exclusion - no child is excluded from any activity, (3) Individualized support - adaptations and accommodations based on need, (4) Peer support - fostering positive relationships among all students, (5) Community involvement - engaging families and local resources.',
              teachingTip: 'Start by assessing the needs of all students, then differentiate instruction using Universal Design for Learning (UDL) principles. Create flexible groupings, provide multiple means of engagement and expression, and celebrate the unique contributions each student brings to the learning community.'
            },
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-concept',
            difficulty: 'easy',
            ncfReference: 'NCF 2005 - Inclusive Education',
            keywords: ['inclusive education', 'diversity', 'special needs', 'equality']
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
          {
            question: 'Which of the following is NOT a characteristic of inclusive education?',
            options: [
              'All students learn in the same classroom',
              'Curriculum is adapted to meet diverse needs',
              'Students with disabilities are segregated',
              'Teachers receive training in differentiated instruction'
            ],
            correctAnswerIndex: 2,
            explanation: 'Inclusive education specifically aims to avoid segregation and ensure all students learn together in the same environment with appropriate support.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-concept',
          },
          {
            question: 'A child with visual impairment would benefit most from:',
            options: [
              'Braille materials and tactile learning aids',
              'Verbal instructions only',
              'Visual demonstrations',
              'Group activities requiring sight'
            ],
            correctAnswerIndex: 0,
            explanation: 'Students with visual impairments benefit from Braille materials, tactile learning aids, and other sensory modalities to access curriculum content.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-sen',
          },
          {
            question: 'The term "differentiated instruction" in inclusive education refers to:',
            options: [
              'Teaching all students the same content at the same pace',
              'Adapting teaching methods to meet diverse learning needs',
              'Focusing only on advanced students',
              'Using only one teaching strategy'
            ],
            correctAnswerIndex: 1,
            explanation: 'Differentiated instruction involves modifying content, process, and products to meet the diverse learning needs of all students in an inclusive classroom.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-concept',
          },
          {
            question: 'Which learning disability primarily affects reading skills?',
            options: ['Dyscalculia', 'Dysgraphia', 'Dyslexia', 'Dyspraxia'],
            correctAnswerIndex: 2,
            explanation: 'Dyslexia is a specific learning disability that primarily affects reading and related language skills.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-sen',
          },
          {
            question: 'In inclusive education, "Universal Design for Learning" (UDL) emphasizes:',
            options: [
              'One-size-fits-all instruction',
              'Multiple means of engagement, representation, and action/expression',
              'Focusing only on students with disabilities',
              'Using traditional teaching methods only'
            ],
            correctAnswerIndex: 1,
            explanation: 'UDL provides multiple pathways for learning by offering various ways to engage with content, represent information, and express understanding.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-concept',
          },
          {
            question: 'A student with hearing impairment would benefit from:',
            options: [
              'Seating at the back of the classroom',
              'Visual aids and sign language interpreters',
              'Loud verbal instructions only',
              'Group discussions without visual support'
            ],
            correctAnswerIndex: 1,
            explanation: 'Students with hearing impairments benefit from visual aids, sign language interpreters, captioned materials, and preferential seating.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-sen',
          },
          {
            question: 'The Right to Education (RTE) Act, 2009 mandates:',
            options: [
              'Separate schools for children with disabilities',
              'Free and compulsory education for all children aged 6-14',
              'Education only for children from privileged backgrounds',
              'Optional education for children with special needs'
            ],
            correctAnswerIndex: 1,
            explanation: 'The RTE Act ensures free and compulsory education for all children aged 6-14 years, including children with disabilities, in inclusive settings.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-concept',
          },
          {
            question: 'Which of the following is a strategy for supporting gifted learners?',
            options: [
              'Giving them more of the same work',
              'Providing opportunities for independent research projects',
              'Reducing their participation in class activities',
              'Focusing only on basic skills'
            ],
            correctAnswerIndex: 1,
            explanation: 'Gifted learners benefit from enrichment activities like independent research, advanced projects, and opportunities to explore topics in depth.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-gifted',
          },
          {
            question: 'A child with cerebral palsy might need:',
            options: [
              'Adapted seating and mobility aids',
              'Only verbal instructions',
              'Competitive sports activities',
              'Extended writing assignments'
            ],
            correctAnswerIndex: 0,
            explanation: 'Students with cerebral palsy often need adapted seating, mobility aids, and modifications to participate fully in classroom activities.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-sen',
          },
          {
            question: 'Cultural responsiveness in inclusive education involves:',
            options: [
              'Ignoring students\' cultural backgrounds',
              'Using culturally relevant materials and examples',
              'Teaching only the dominant culture',
              'Avoiding multicultural content'
            ],
            correctAnswerIndex: 1,
            explanation: 'Cultural responsiveness involves incorporating students\' cultural backgrounds, experiences, and perspectives into teaching and learning.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-diverse',
          },
          {
            question: 'The term "learning disability" refers to:',
            options: [
              'A physical disability',
              'Difficulties in acquiring and using listening, speaking, reading, writing, reasoning, or mathematical abilities',
              'Behavioral problems',
              'Sensory impairments'
            ],
            correctAnswerIndex: 1,
            explanation: 'Learning disabilities affect the acquisition and use of listening, speaking, reading, writing, reasoning, or mathematical abilities.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-sen',
          },
          {
            question: 'In inclusive education, peer tutoring can help:',
            options: [
              'Only advanced students',
              'Both tutors and tutees learn through collaboration',
              'Create competition among students',
              'Isolate struggling students'
            ],
            correctAnswerIndex: 1,
            explanation: 'Peer tutoring benefits both the tutor (reinforces learning) and the tutee (receives support) while promoting positive social interactions.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-concept',
          },
          {
            question: 'Which is an example of a sensory processing disorder?',
            options: [
              'Difficulty with reading',
              'Over- or under-reactivity to sensory stimuli',
              'Problems with motor coordination',
              'Challenges with social interaction'
            ],
            correctAnswerIndex: 1,
            explanation: 'Sensory processing disorders involve difficulties processing sensory information, leading to over- or under-reactivity to sensory stimuli.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-sen',
          },
          {
            question: 'The concept of "least restrictive environment" means:',
            options: [
              'Students with disabilities should be in separate classrooms',
              'Students should be educated in the most inclusive setting possible',
              'All students should be in the same classroom regardless of needs',
              'Special education should be eliminated'
            ],
            correctAnswerIndex: 1,
            explanation: 'The least restrictive environment ensures students with disabilities are educated in the most inclusive setting where they can succeed with appropriate support.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-concept',
          },
          {
            question: 'A student who is gifted in mathematics might benefit from:',
            options: [
              'Simplified math problems',
              'Advanced mathematical concepts and competitions',
              'Reduced math instruction',
              'Basic counting activities'
            ],
            correctAnswerIndex: 1,
            explanation: 'Gifted students in mathematics benefit from advanced concepts, challenging problems, and opportunities to participate in mathematical competitions or projects.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-gifted',
          },
          {
            question: 'Which of the following supports linguistic diversity in inclusive classrooms?',
            options: [
              'Using only English for all instruction',
              'Translanguaging and bilingual support',
              'Discouraging home language use',
              'Ignoring multilingual students'
            ],
            correctAnswerIndex: 1,
            explanation: 'Supporting linguistic diversity involves using translanguaging, providing bilingual support, and valuing students\' home languages as resources.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-diverse',
          },
          {
            question: 'Individualized Education Program (IEP) is designed for:',
            options: [
              'All students in regular classrooms',
              'Students with identified special educational needs',
              'Only gifted students',
              'Teachers only'
            ],
            correctAnswerIndex: 1,
            explanation: 'An IEP is a personalized plan developed for students with special educational needs to address their unique learning requirements.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-sen',
          },
          {
            question: 'Inclusive education promotes:',
            options: [
              'Homogeneous grouping of students',
              'Heterogeneous classrooms with diverse learners',
              'Ability-based segregation',
              'Competition among students'
            ],
            correctAnswerIndex: 1,
            explanation: 'Inclusive education promotes heterogeneous classrooms where students of diverse abilities, backgrounds, and needs learn together.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-concept',
          },
          {
            question: 'A student with autism spectrum disorder might benefit from:',
            options: [
              'Unpredictable daily routines',
              'Visual schedules and structured environments',
              'Constant changes in routine',
              'Overwhelming sensory stimulation'
            ],
            correctAnswerIndex: 1,
            explanation: 'Students with ASD often benefit from visual schedules, structured environments, and predictable routines to reduce anxiety and support learning.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-sen',
          },
          {
            question: 'The term "response to intervention" (RTI) refers to:',
            options: [
              'Punishing students for poor performance',
              'Providing tiered levels of support based on student needs',
              'Ignoring struggling students',
              'Focusing only on advanced students'
            ],
            correctAnswerIndex: 1,
            explanation: 'RTI provides increasingly intensive levels of academic and behavioral support to help struggling students succeed.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-concept',
          },
          {
            question: 'For gifted learners, acceleration means:',
            options: [
              'Slowing down their learning pace',
              'Allowing them to progress through curriculum faster',
              'Giving them easier work',
              'Reducing their academic load'
            ],
            correctAnswerIndex: 1,
            explanation: 'Acceleration allows gifted students to move through the curriculum at a faster pace or work with more advanced content.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-gifted',
          },
          {
            question: 'Socio-economic diversity in inclusive classrooms can be addressed by:',
            options: [
              'Ignoring economic differences',
              'Providing free school meals and uniform assistance',
              'Segregating students by economic status',
              'Focusing only on academic achievement'
            ],
            correctAnswerIndex: 1,
            explanation: 'Addressing socio-economic diversity involves providing support like free meals, uniforms, and educational materials to ensure all students can participate fully.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-diverse',
          },
          {
            question: 'Which disability primarily affects mathematical reasoning and problem-solving?',
            options: ['Dyslexia', 'Dyscalculia', 'Dysgraphia', 'Dyspraxia'],
            correctAnswerIndex: 1,
            explanation: 'Dyscalculia is a specific learning disability that affects mathematical reasoning, number sense, and problem-solving abilities.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-sen',
          },
          {
            question: 'Cooperative learning in inclusive classrooms helps:',
            options: [
              'Create competition among students',
              'Promote peer support and collaborative problem-solving',
              'Isolate struggling students',
              'Focus on individual achievement only'
            ],
            correctAnswerIndex: 1,
            explanation: 'Cooperative learning promotes peer support, collaborative problem-solving, and positive interdependence among diverse learners.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-concept',
          },
          {
            question: 'A student identified as twice-exceptional has:',
            options: [
              'Only learning disabilities',
              'Both giftedness and learning disabilities',
              'Only gifted abilities',
              'Neither giftedness nor disabilities'
            ],
            correctAnswerIndex: 1,
            explanation: 'Twice-exceptional students have both gifted abilities in some areas and learning disabilities in others, requiring specialized support.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-gifted',
          },
          {
            question: 'Gender diversity in inclusive education involves:',
            options: [
              'Treating boys and girls identically',
              'Challenging gender stereotypes and promoting equity',
              'Reinforcing traditional gender roles',
              'Ignoring gender differences'
            ],
            correctAnswerIndex: 1,
            explanation: 'Gender diversity involves challenging stereotypes, promoting equity, and ensuring both boys and girls have equal opportunities and expectations.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-diverse',
          },
          {
            question: 'Assistive technology for students with disabilities includes:',
            options: [
              'Only computers',
              'Screen readers, hearing aids, wheelchairs, and adaptive switches',
              'Traditional textbooks only',
              'No special equipment'
            ],
            correctAnswerIndex: 1,
            explanation: 'Assistive technology includes a wide range of devices and software that help students with disabilities access curriculum and participate in learning.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-sen',
          },
          {
            question: 'The philosophy of inclusive education is based on:',
            options: [
              'Human rights and social justice',
              'Economic efficiency',
              'Academic competition',
              'Administrative convenience'
            ],
            correctAnswerIndex: 0,
            explanation: 'Inclusive education is based on principles of human rights, social justice, and the belief that all children have the right to education in their community.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-concept',
          },
          {
            question: 'For creative learners, inclusive classrooms should provide:',
            options: [
              'Only structured, rule-based activities',
              'Opportunities for artistic expression and divergent thinking',
              'Limited creative outlets',
              'Focus on convergent thinking only'
            ],
            correctAnswerIndex: 1,
            explanation: 'Creative learners benefit from opportunities to express themselves artistically and engage in divergent thinking activities.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-gifted',
          },
          {
            question: 'Multilingual education in inclusive settings involves:',
            options: [
              'Using only the dominant language',
              'Supporting multiple languages and bilingual development',
              'Discouraging home language maintenance',
              'Focusing on language replacement'
            ],
            correctAnswerIndex: 1,
            explanation: 'Multilingual education supports the development of multiple languages and recognizes the value of maintaining home languages while learning additional ones.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-diverse',
          },
          {
            question: 'Students with intellectual disabilities benefit from:',
            options: [
              'Abstract, complex concepts only',
              'Concrete materials and hands-on learning experiences',
              'Advanced academic content',
              'Independent work without support'
            ],
            correctAnswerIndex: 1,
            explanation: 'Students with intellectual disabilities often benefit from concrete materials, hands-on experiences, and simplified but meaningful learning activities.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-sen',
          },
          {
            question: 'Inclusive assessment practices involve:',
            options: [
              'Using only standardized tests',
              'Multiple assessment methods adapted to student needs',
              'Focusing only on written tests',
              'Ignoring individual differences'
            ],
            correctAnswerIndex: 1,
            explanation: 'Inclusive assessment uses various methods (oral, practical, observational) and adapts assessments to meet diverse student needs.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-concept',
          },
          {
            question: 'Gifted students who are underachieving may need:',
            options: [
              'Easier work to build confidence',
              'Counseling and interest-based learning opportunities',
              'Reduced academic expectations',
              'Separation from peers'
            ],
            correctAnswerIndex: 1,
            explanation: 'Underachieving gifted students often need counseling, interest-based learning, and strategies to address motivation and emotional factors.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-gifted',
          },
          {
            question: 'Religious diversity in inclusive education requires:',
            options: [
              'Ignoring religious differences',
              'Respecting various religious practices and holidays',
              'Promoting only one religion',
              'Avoiding religious discussions'
            ],
            correctAnswerIndex: 1,
            explanation: 'Religious diversity involves respecting different religious practices, accommodating religious holidays, and creating an inclusive environment for all faiths.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-diverse',
          },
          {
            question: 'The Individuals with Disabilities Education Act (IDEA) emphasizes:',
            options: [
              'Separate education for students with disabilities',
              'Education in the least restrictive environment',
              'Elimination of special education services',
              'Focus on medical treatment over education'
            ],
            correctAnswerIndex: 1,
            explanation: 'IDEA emphasizes educating students with disabilities in the least restrictive environment with appropriate support and accommodations.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-sen',
          },
          {
            question: 'Inclusive classrooms promote social skills development by:',
            options: [
              'Keeping students in homogeneous groups',
              'Encouraging interactions among diverse peers',
              'Minimizing social interactions',
              'Focusing only on academic skills'
            ],
            correctAnswerIndex: 1,
            explanation: 'Inclusive classrooms promote social skills through interactions among diverse peers, fostering understanding, empathy, and cooperation.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-concept',
          },
          {
            question: 'Students with emotional and behavioral disorders may need:',
            options: [
              'Punitive disciplinary approaches',
              'Positive behavioral supports and counseling',
              'Isolation from peers',
              'Reduced academic expectations only'
            ],
            correctAnswerIndex: 1,
            explanation: 'Students with emotional and behavioral disorders benefit from positive behavioral supports, counseling, and strategies to develop self-regulation skills.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-sen',
          },
          {
            question: 'The concept of "equity pedagogy" in inclusive education means:',
            options: [
              'Treating all students exactly the same',
              'Teaching in ways that respond to student diversity',
              'Focusing only on high-achieving students',
              'Using standardized approaches for all'
            ],
            correctAnswerIndex: 1,
            explanation: 'Equity pedagogy involves teaching methods that actively respond to and build upon student diversity, backgrounds, and learning needs.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-concept',
          },
          {
            question: 'Creative learners often demonstrate:',
            options: [
              'Conformity to rules and procedures',
              'Original thinking and novel problem-solving approaches',
              'Preference for routine activities',
              'Avoidance of imaginative tasks'
            ],
            correctAnswerIndex: 1,
            explanation: 'Creative learners typically show original thinking, novel approaches to problems, and a preference for imaginative and innovative activities.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-gifted',
          },
          {
            question: 'Inclusive education for students from rural backgrounds involves:',
            options: [
              'Ignoring rural-urban differences',
              'Connecting curriculum to rural contexts and experiences',
              'Focusing only on urban examples',
              'Discouraging rural students\' participation'
            ],
            correctAnswerIndex: 1,
            explanation: 'Inclusive education for rural students involves connecting curriculum content to their rural contexts, experiences, and cultural backgrounds.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-diverse',
          },
          {
            question: 'The term "accommodation" in special education refers to:',
            options: [
              'Changing the curriculum completely',
              'Modifying how students access and demonstrate learning',
              'Lowering academic standards',
              'Providing separate education'
            ],
            correctAnswerIndex: 1,
            explanation: 'Accommodations modify how students access curriculum and demonstrate learning without changing the content or standards.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-sen',
          },
          {
            question: 'Inclusive education benefits typically developing students by:',
            options: [
              'Reducing their learning opportunities',
              'Promoting empathy, understanding, and social skills',
              'Creating competition for resources',
              'Limiting peer interactions'
            ],
            correctAnswerIndex: 1,
            explanation: 'Typically developing students benefit from inclusive education through increased empathy, better social skills, and positive attitudes toward diversity.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-concept',
          },
          {
            question: 'Students with speech and language disorders benefit from:',
            options: [
              'Silent reading activities only',
              'Augmentative and alternative communication systems',
              'Extended writing assignments',
              'Group presentations without support'
            ],
            correctAnswerIndex: 1,
            explanation: 'Students with speech and language disorders benefit from augmentative and alternative communication systems, speech therapy, and supportive communication strategies.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-sen',
          },
          {
            question: 'The concept of "multiple intelligences" in inclusive education suggests:',
            options: [
              'All students have the same intelligence profile',
              'Students have different strengths and ways of learning',
              'Only academic intelligence matters',
              'Intelligence is fixed and unchangeable'
            ],
            correctAnswerIndex: 1,
            explanation: 'Multiple intelligences theory recognizes that students have different strengths and preferred ways of learning, informing differentiated instruction.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-concept',
          },
          {
            question: 'Gifted students in the arts might be identified by:',
            options: [
              'High mathematical test scores only',
              'Exceptional creativity, originality, and artistic expression',
              'Conformity to artistic standards',
              'Preference for realistic rather than abstract art'
            ],
            correctAnswerIndex: 1,
            explanation: 'Gifted students in the arts demonstrate exceptional creativity, originality in expression, and advanced artistic abilities.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-gifted',
          },
          {
            question: 'Inclusive education addresses caste-based discrimination by:',
            options: [
              'Ignoring caste differences',
              'Promoting equality and challenging caste-based stereotypes',
              'Reinforcing caste hierarchies',
              'Segregating students by caste'
            ],
            correctAnswerIndex: 1,
            explanation: 'Inclusive education addresses caste discrimination by promoting equality, challenging stereotypes, and creating an environment of respect for all.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-diverse',
          },
          {
            question: 'The term "modification" in special education refers to:',
            options: [
              'Minor adjustments to teaching methods',
              'Changing the curriculum content or standards',
              'Providing extra time for assignments',
              'Using different assessment formats'
            ],
            correctAnswerIndex: 1,
            explanation: 'Modifications involve changing the curriculum content, expectations, or standards to meet the individual needs of students with disabilities.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-sen',
          },
          {
            question: 'Inclusive classrooms foster positive attitudes toward diversity by:',
            options: [
              'Minimizing contact between diverse students',
              'Encouraging collaborative activities among diverse groups',
              'Focusing on individual work only',
              'Emphasizing differences over similarities'
            ],
            correctAnswerIndex: 1,
            explanation: 'Inclusive classrooms foster positive attitudes through collaborative activities that bring together students from diverse backgrounds and abilities.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp2',
            subTopicId: 'cdp2-concept',
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
          {
            question: "According to NCF 2005, the primary aim of teaching mathematics is:",
            options: [
              'Rote memorization of formulas',
              'Mathematization of the child\'s thought process',
              'Competition in mathematical Olympiads',
              'Focus on calculation speed only'
            ],
            correctAnswerIndex: 1,
            explanation: "NCF 2005 emphasizes developing logical thinking and reasoning abilities rather than rote memorization, focusing on 'mathematization of the child's thought process'.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-ncf',
          },
          {
            question: "Which of the following best describes 'community mathematics'?",
            options: [
              'Mathematics taught only in schools',
              'Connecting classroom math to everyday life situations',
              'Advanced mathematical concepts for experts',
              'Mathematics without real-world applications'
            ],
            correctAnswerIndex: 1,
            explanation: "Community mathematics involves connecting mathematical concepts to real-life situations like shopping, measuring, and patterns in nature to make learning meaningful.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-community',
          },
          {
            question: "Continuous and Comprehensive Evaluation (CCE) in mathematics includes:",
            options: [
              'Only written tests at the end of the term',
              'Observations, projects, and discussions throughout the year',
              'Only multiple choice questions',
              'Competition-based rankings only'
            ],
            correctAnswerIndex: 1,
            explanation: "CCE is an ongoing assessment process that includes various methods like observations, projects, discussions, and practical activities, not just end-of-term tests.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-cce',
          },
          {
            question: "A child writes 25 + 35 = 510. This error indicates misunderstanding of:",
            options: ['Addition concept', 'Place value', 'Number recognition', 'Counting'],
            correctAnswerIndex: 1,
            explanation: "The error 25 + 35 = 510 shows a misunderstanding of place value, where the child is adding digits without considering their positional value.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-error-analysis',
          },
          {
            question: "Diagnostic teaching in mathematics involves:",
            options: [
              'Teaching the same content repeatedly',
              'Identifying specific learning gaps and providing targeted support',
              'Focusing only on advanced students',
              'Ignoring individual differences'
            ],
            correctAnswerIndex: 1,
            explanation: "Diagnostic teaching involves identifying specific learning difficulties and providing targeted remedial support to address those particular gaps.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-diagnostic',
          },
          {
            question: "The hierarchical nature of mathematics means:",
            options: [
              'All concepts are equally important',
              'Concepts build upon each other sequentially',
              'Advanced concepts should be taught first',
              'Basic concepts are not necessary'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematics is hierarchical - basic concepts like number sense form the foundation for more complex concepts like algebra and geometry.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-hierarchy',
          },
          {
            question: "Which approach best promotes mathematical communication in the classroom?",
            options: [
              'Students working silently on problems',
              'Group discussions about problem-solving strategies',
              'Only the teacher explaining solutions',
              'Memorizing standard procedures'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical communication is fostered through discussions where students explain their thinking, justify their solutions, and learn from peers.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-communication',
          },
          {
            question: "Concrete materials in mathematics teaching help children:",
            options: [
              'Memorize formulas faster',
              'Move from concrete to abstract understanding',
              'Skip basic concepts',
              'Focus only on written work'
            ],
            correctAnswerIndex: 1,
            explanation: "Concrete materials (manipulatives) help children understand abstract mathematical concepts by providing tangible representations before moving to symbolic representations.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-concrete',
          },
          {
            question: "Assessment for learning in mathematics involves:",
            options: [
              'Only grading final answers',
              'Using assessment to guide teaching and learning',
              'Comparing students with each other',
              'Focusing only on speed of calculation'
            ],
            correctAnswerIndex: 1,
            explanation: "Assessment for learning uses ongoing assessment to understand student understanding and adjust teaching strategies accordingly.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-assessment',
          },
          {
            question: "A constructivist approach to teaching mathematics emphasizes:",
            options: [
              'Direct instruction of procedures',
              'Students constructing their own understanding',
              'Rote memorization of facts',
              'Competition among students'
            ],
            correctAnswerIndex: 1,
            explanation: "Constructivism emphasizes that students actively construct their mathematical understanding through experiences and reflection, rather than passively receiving information.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-constructivist',
          },
          {
            question: "Problem-solving in mathematics should focus on:",
            options: [
              'Getting the correct answer quickly',
              'Developing thinking processes and strategies',
              'Memorizing formulas',
              'Competition for grades'
            ],
            correctAnswerIndex: 1,
            explanation: "Problem-solving should develop students' thinking processes, reasoning abilities, and multiple solution strategies, not just finding correct answers.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-problem-solving',
          },
          {
            question: "Mathematical vocabulary development includes teaching:",
            options: [
              'Only technical terms like algorithm',
              'Everyday words used in mathematical contexts',
              'Only symbols and notations',
              'Foreign language terms'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical vocabulary includes both technical terms and everyday words used in specific mathematical contexts, like 'difference' in subtraction.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-vocabulary',
          },
          {
            question: "Real-world connections in mathematics help students:",
            options: [
              'Memorize procedures better',
              'See the relevance and application of mathematics',
              'Focus only on abstract concepts',
              'Avoid practical applications'
            ],
            correctAnswerIndex: 1,
            explanation: "Connecting mathematics to real-world situations helps students understand its relevance and motivates learning by showing practical applications.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-real-world',
          },
          {
            question: "Formative assessment in mathematics includes:",
            options: [
              'Only end-of-chapter tests',
              'Ongoing feedback during learning activities',
              'Final examination only',
              'Ranking students'
            ],
            correctAnswerIndex: 1,
            explanation: "Formative assessment provides ongoing feedback during the learning process to help students improve and guide teaching decisions.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-formative',
          },
          {
            question: "Differentiated instruction in mathematics means:",
            options: [
              'Teaching the same content to all students',
              'Adapting teaching to meet diverse learning needs',
              'Focusing only on advanced students',
              'Using only one teaching method'
            ],
            correctAnswerIndex: 1,
            explanation: "Differentiated instruction involves adapting content, process, and products to meet the diverse learning needs and readiness levels of students.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-differentiated',
          },
          {
            question: "Mathematical reasoning involves:",
            options: [
              'Memorizing procedures',
              'Justifying solutions with logical arguments',
              'Getting answers quickly',
              'Following rules without understanding'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical reasoning requires students to justify their solutions with logical arguments and explain their thinking processes.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-reasoning',
          },
          {
            question: "The 'language of mathematics' includes:",
            options: [
              'Only written symbols',
              'Verbal explanations and representations',
              'Only numerical calculations',
              'Foreign languages only'
            ],
            correctAnswerIndex: 1,
            explanation: "The language of mathematics includes verbal explanations, symbolic representations, visual representations, and various forms of mathematical communication.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-language',
          },
          {
            question: "Portfolio assessment in mathematics can include:",
            options: [
              'Only test scores',
              'Student work samples, reflections, and problem-solving processes',
              'Only final grades',
              'Only teacher evaluations'
            ],
            correctAnswerIndex: 1,
            explanation: "Portfolio assessment includes a collection of student work samples, reflections on learning, and documentation of problem-solving processes over time.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-portfolio',
          },
          {
            question: "Inquiry-based learning in mathematics involves:",
            options: [
              'Direct instruction of procedures',
              'Students exploring mathematical concepts through questions',
              'Memorization of facts',
              'Teacher-centered explanations'
            ],
            correctAnswerIndex: 1,
            explanation: "Inquiry-based learning encourages students to explore mathematical concepts through questioning, investigation, and discovery.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-inquiry',
          },
          {
            question: "Mathematical modeling involves:",
            options: [
              'Only drawing diagrams',
              'Using mathematics to represent real-world situations',
              'Memorizing formulas',
              'Abstract calculations only'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical modeling involves creating mathematical representations of real-world situations to solve problems and make predictions.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-modeling',
          },
          {
            question: "Assessment of mathematical processes includes evaluating:",
            options: [
              'Only final answers',
              'Problem-solving strategies and thinking processes',
              'Only calculation speed',
              'Only memorization ability'
            ],
            correctAnswerIndex: 1,
            explanation: "Assessment of mathematical processes evaluates students' problem-solving strategies, reasoning, and thinking processes, not just final answers.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-process',
          },
          {
            question: "Technology integration in mathematics teaching can:",
            options: [
              'Replace all traditional methods',
              'Enhance understanding through visualization and exploration',
              'Only be used for testing',
              'Replace teacher instruction'
            ],
            correctAnswerIndex: 1,
            explanation: "Technology can enhance mathematical understanding by providing visualization tools, interactive explorations, and multiple representations of concepts.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-technology',
          },
          {
            question: "Metacognition in mathematics involves:",
            options: [
              'Memorizing procedures',
              'Thinking about one\'s own thinking and learning processes',
              'Following rules blindly',
              'Quick calculations'
            ],
            correctAnswerIndex: 1,
            explanation: "Metacognition involves students thinking about their own thinking processes, monitoring their understanding, and adjusting their learning strategies.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-metacognition',
          },
          {
            question: "Collaborative learning in mathematics helps students develop:",
            options: [
              'Only individual skills',
              'Shared problem-solving strategies and mathematical communication',
              'Competition without learning',
              'Isolation from peers'
            ],
            correctAnswerIndex: 1,
            explanation: "Collaborative learning allows students to share different problem-solving approaches, explain their thinking, and learn from diverse perspectives.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-collaborative',
          },
          {
            question: "The concept of 'multiple representations' in mathematics means:",
            options: [
              'Using only one method to solve problems',
              'Representing concepts in various forms (numerical, graphical, symbolic)',
              'Using complex notations only',
              'Avoiding visual representations'
            ],
            correctAnswerIndex: 1,
            explanation: "Multiple representations involve showing mathematical concepts through various forms like numerical, graphical, symbolic, and verbal representations.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-representations',
          },
          {
            question: "Remedial teaching in mathematics should:",
            options: [
              'Repeat the same content',
              'Address specific learning difficulties identified through diagnosis',
              'Focus only on weak students',
              'Use punishment for mistakes'
            ],
            correctAnswerIndex: 1,
            explanation: "Remedial teaching involves diagnosing specific learning difficulties and providing targeted support to address those particular challenges.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-remedial',
          },
          {
            question: "Mathematical anxiety can be reduced by:",
            options: [
              'Emphasizing competition',
              'Creating a supportive learning environment',
              'Focusing only on difficult problems',
              'Using punishment for mistakes'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical anxiety can be reduced by creating a supportive environment where mistakes are viewed as learning opportunities and students feel safe to take risks.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-anxiety',
          },
          {
            question: "The 'zone of proximal development' in mathematics teaching refers to:",
            options: [
              'What students can do alone',
              'The gap between what students can do alone and with guidance',
              'What students cannot learn',
              'Only advanced concepts'
            ],
            correctAnswerIndex: 1,
            explanation: "The zone of proximal development is the difference between what a learner can do without help and what they can achieve with guidance from a more knowledgeable other.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-zpd',
          },
          {
            question: "Scaffolded instruction in mathematics involves:",
            options: [
              'Removing all support immediately',
              'Providing temporary support that is gradually reduced',
              'Giving complete solutions',
              'Working independently only'
            ],
            correctAnswerIndex: 1,
            explanation: "Scaffolded instruction provides temporary support structures that are gradually removed as students become more competent and independent.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-scaffolding',
          },
          {
            question: "Cultural contexts in mathematics teaching involve:",
            options: [
              'Ignoring cultural differences',
              'Connecting mathematical concepts to students\' cultural backgrounds',
              'Using only Western mathematics',
              'Avoiding real-world examples'
            ],
            correctAnswerIndex: 1,
            explanation: "Cultural contexts involve connecting mathematical concepts to students' cultural backgrounds and experiences to make learning more relevant and meaningful.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-cultural',
          },
          {
            question: "Formative assessment data should be used to:",
            options: [
              'Only assign grades',
              'Inform teaching decisions and provide feedback',
              'Compare students',
              'Punish poor performance'
            ],
            correctAnswerIndex: 1,
            explanation: "Formative assessment data should inform teaching decisions, provide timely feedback to students, and guide instructional adjustments.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-formative-data',
          },
          {
            question: "Mathematical discourse in the classroom includes:",
            options: [
              'Silent work only',
              'Students explaining their thinking and justifying solutions',
              'Only teacher explanations',
              'Memorizing definitions'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse involves students engaging in mathematical conversations, explaining their thinking, and justifying their solutions to develop deeper understanding.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-discourse',
          },
          {
            question: "The 'concrete-semiconcrete-abstract' sequence in teaching mathematics:",
            options: [
              'Skips concrete materials',
              'Moves from tangible objects to symbolic representations',
              'Starts with abstract concepts',
              'Avoids hands-on activities'
            ],
            correctAnswerIndex: 1,
            explanation: "The concrete-semiconcrete-abstract sequence starts with concrete manipulatives, moves to semiconcrete representations, and finally to abstract symbols.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-csa',
          },
          {
            question: "Adaptive teaching in mathematics means:",
            options: [
              'Using the same method for all students',
              'Adjusting instruction based on student responses',
              'Focusing only on advanced students',
              'Ignoring individual differences'
            ],
            correctAnswerIndex: 1,
            explanation: "Adaptive teaching involves continuously adjusting instruction based on student responses, understanding, and learning needs.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-adaptive',
          },
          {
            question: "Mathematical proof at the primary level involves:",
            options: [
              'Formal mathematical proofs only',
              'Justification of solutions using reasoning and examples',
              'Memorizing proof techniques',
              'Avoiding explanations'
            ],
            correctAnswerIndex: 1,
            explanation: "At the primary level, mathematical proof involves justifying solutions using reasoning, examples, and explanations appropriate to the developmental level.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-proof',
          },
          {
            question: "The role of mistakes in mathematics learning is to:",
            options: [
              'Punish students',
              'Serve as opportunities for learning and understanding misconceptions',
              'Discourage students',
              'Focus only on correct answers'
            ],
            correctAnswerIndex: 1,
            explanation: "Mistakes in mathematics learning provide valuable opportunities to identify misconceptions and guide students toward deeper understanding.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-mistakes',
          },
          {
            question: "Interdisciplinary connections in mathematics involve:",
            options: [
              'Teaching subjects in isolation',
              'Connecting mathematics with other subjects like science and art',
              'Focusing only on mathematical procedures',
              'Avoiding real-world applications'
            ],
            correctAnswerIndex: 1,
            explanation: "Interdisciplinary connections help students see the relevance of mathematics by linking it with other subjects and real-world applications.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-interdisciplinary',
          },
          {
            question: "Assessment literacy in mathematics teaching means:",
            options: [
              'Only knowing how to grade papers',
              'Understanding how to use assessment to improve learning',
              'Focusing only on summative assessment',
              'Ignoring assessment data'
            ],
            correctAnswerIndex: 1,
            explanation: "Assessment literacy involves understanding various assessment methods and using assessment data to improve teaching and student learning.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-literacy',
          },
          {
            question: "The 'growth mindset' in mathematics teaching emphasizes:",
            options: [
              'Fixed ability in mathematics',
              'Effort and strategies can improve mathematical ability',
              'Only innate talent matters',
              'Avoiding challenging problems'
            ],
            correctAnswerIndex: 1,
            explanation: "Growth mindset emphasizes that mathematical ability can be developed through effort, effective strategies, and persistence.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-growth-mindset',
          },
          {
            question: "Mathematical games and puzzles help students develop:",
            options: [
              'Only memorization skills',
              'Problem-solving strategies and logical thinking',
              'Competition without learning',
              'Avoiding mathematical thinking'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical games and puzzles develop problem-solving strategies, logical thinking, spatial reasoning, and make learning enjoyable.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-games',
          },
          {
            question: "Reflective practice in mathematics teaching involves:",
            options: [
              'Following routines without thinking',
              'Teachers reflecting on their teaching and student learning',
              'Ignoring teaching effectiveness',
              'Focusing only on content delivery'
            ],
            correctAnswerIndex: 1,
            explanation: "Reflective practice involves teachers regularly reflecting on their teaching methods, student responses, and adjusting their approach to improve learning.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-reflective',
          },
          {
            question: "The 'product vs process' debate in mathematics assessment focuses on:",
            options: [
              'Only final answers matter',
              'Evaluating both final answers and problem-solving processes',
              'Ignoring the thinking process',
              'Only the speed of completion'
            ],
            correctAnswerIndex: 1,
            explanation: "The product vs process debate emphasizes evaluating both the final mathematical answer and the thinking processes used to arrive at the solution.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-product-process',
          },
          {
            question: "Universal Design for Learning (UDL) in mathematics means:",
            options: [
              'One-size-fits-all instruction',
              'Providing multiple means of engagement, representation, and action/expression',
              'Focusing only on students with disabilities',
              'Using only traditional methods'
            ],
            correctAnswerIndex: 1,
            explanation: "UDL provides multiple pathways for learning by offering various ways to engage with content, represent information, and express understanding.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-udl',
          },
          {
            question: "Mathematical journaling involves students:",
            options: [
              'Only copying notes',
              'Writing about their mathematical thinking and problem-solving processes',
              'Memorizing definitions',
              'Avoiding written work'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical journaling encourages students to write about their thinking processes, explain their solutions, and reflect on their mathematical understanding.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-journaling',
          },
          {
            question: "The 'spiral curriculum' in mathematics means:",
            options: [
              'Teaching topics only once',
              'Revisiting concepts at increasing levels of complexity',
              'Avoiding review of previous learning',
              'Focusing only on new topics'
            ],
            correctAnswerIndex: 1,
            explanation: "The spiral curriculum revisits mathematical concepts at increasing levels of complexity and sophistication over multiple years.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-spiral',
          },
          {
            question: "Ethnomathematics involves:",
            options: [
              'Ignoring cultural contexts',
              'Recognizing mathematical practices in different cultures',
              'Using only Western mathematics',
              'Avoiding cultural connections'
            ],
            correctAnswerIndex: 1,
            explanation: "Ethnomathematics recognizes and values the mathematical practices, patterns, and knowledge embedded in different cultural contexts and traditions.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-ethnomathematics',
          },
          {
            question: "Response to Intervention (RTI) in mathematics:",
            options: [
              'Punishes struggling students',
              'Provides tiered levels of support based on student needs',
              'Ignores learning difficulties',
              'Focuses only on advanced students'
            ],
            correctAnswerIndex: 1,
            explanation: "RTI provides increasingly intensive levels of academic and behavioral support to help struggling students succeed, with early intervention and progress monitoring.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-rti',
          },
          {
            question: "Mathematical habits of mind include:",
            options: [
              'Memorizing procedures only',
              'Curiosity, perseverance, and seeking patterns',
              'Following rules blindly',
              'Avoiding challenging problems'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical habits of mind include curiosity about patterns, perseverance in problem-solving, seeking efficient strategies, and mathematical communication.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-habits',
          },
          {
            question: "The 'rule of four' in mathematics teaching means:",
            options: [
              'Only four rules to learn',
              'Representing concepts numerically, graphically, symbolically, and verbally',
              'Four steps to solve any problem',
              'Only four topics to teach'
            ],
            correctAnswerIndex: 1,
            explanation: "The rule of four suggests representing mathematical concepts in four ways: numerical, graphical, symbolic (algebraic), and verbal (written/oral explanations).",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-rule-four',
          },
          {
            question: "Project-based learning in mathematics involves:",
            options: [
              'Individual worksheet completion',
              'Students working on extended mathematical investigations',
              'Memorizing formulas',
              'Multiple choice testing only'
            ],
            correctAnswerIndex: 1,
            explanation: "Project-based learning engages students in extended mathematical investigations that require applying mathematical concepts to real-world problems.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-project-based',
          },
          {
            question: "Mathematical argumentation involves:",
            options: [
              'Stating opinions without evidence',
              'Providing logical reasons and evidence for mathematical claims',
              'Memorizing proofs',
              'Avoiding explanations'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical argumentation requires students to provide logical reasons, evidence, and justifications for their mathematical claims and solutions.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-argumentation',
          },
          {
            question: "The 'didactic contract' in mathematics teaching refers to:",
            options: [
              'Teacher-student agreements on behavior',
              'Unspoken expectations about roles in mathematics learning',
              'Legal contracts for teaching',
              'Payment agreements'
            ],
            correctAnswerIndex: 1,
            explanation: "The didactic contract refers to the implicit expectations and roles that teachers and students have about how mathematics should be taught and learned.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-didactic',
          },
          {
            question: "Mathematical empowerment means:",
            options: [
              'Making students feel helpless',
              'Enabling students to use mathematics confidently in their lives',
              'Focusing only on academic success',
              'Avoiding real-world applications'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment involves helping students develop confidence in using mathematics to understand and navigate their world effectively.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-empowerment',
          },
          {
            question: "The 'reform mathematics' approach emphasizes:",
            options: [
              'Traditional algorithms only',
              'Understanding concepts and problem-solving processes',
              'Memorization of procedures',
              'Speed of calculation'
            ],
            correctAnswerIndex: 1,
            explanation: "Reform mathematics emphasizes conceptual understanding, problem-solving processes, mathematical communication, and connecting mathematics to real-world applications.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-reform',
          },
          {
            question: "Mathematical identity development involves:",
            options: [
              'Labeling students as mathematical or not',
              'Helping students see themselves as capable mathematical thinkers',
              'Focusing only on grades',
              'Comparing students mathematically'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical identity development helps students see themselves as capable mathematical thinkers who can engage with and make sense of mathematics.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-identity',
          },
          {
            question: "The 'zone of actual development' refers to:",
            options: [
              'What students can learn with help',
              'What students can do independently right now',
              'What students cannot learn',
              'Only advanced concepts'
            ],
            correctAnswerIndex: 1,
            explanation: "The zone of actual development refers to what a learner can accomplish independently without assistance from others.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-zad',
          },
          {
            question: "Mathematical autobiography involves students:",
            options: [
              'Writing their life stories',
              'Reflecting on their mathematical experiences and beliefs',
              'Memorizing mathematical facts',
              'Writing fiction stories'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical autobiography encourages students to reflect on their past experiences with mathematics, their beliefs about mathematics, and their mathematical identity.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-autobiography',
          },
          {
            question: "The 'funnel approach' in mathematics teaching:",
            options: [
              'Starts with complex problems',
              'Begins with concrete examples and moves to abstract concepts',
              'Avoids concrete materials',
              'Focuses only on abstract thinking'
            ],
            correctAnswerIndex: 1,
            explanation: "The funnel approach starts with concrete, familiar examples and gradually moves toward more abstract and generalized mathematical concepts.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-funnel',
          },
          {
            question: "Mathematical noticing involves:",
            options: [
              'Ignoring patterns and relationships',
              'Attending to patterns, relationships, and mathematical structure',
              'Focusing only on procedures',
              'Avoiding mathematical thinking'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing involves paying attention to patterns, relationships, and mathematical structures in problems and solutions.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-noticing',
          },
          {
            question: "The 'productive struggle' in mathematics learning means:",
            options: [
              'Making learning frustrating',
              'Encouraging appropriate levels of challenge and persistence',
              'Avoiding difficult problems',
              'Giving up when problems are hard'
            ],
            correctAnswerIndex: 1,
            explanation: "Productive struggle involves providing appropriately challenging problems that encourage persistence and deeper mathematical thinking without causing frustration.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-productive-struggle',
          },
          {
            question: "Mathematical agency means:",
            options: [
              'Teachers making all decisions',
              'Students having ownership of their mathematical learning',
              'Following rules blindly',
              'Avoiding mathematical choices'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency involves students having ownership of their learning, making choices about strategies, and taking responsibility for their mathematical understanding.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-agency',
          },
          {
            question: "The 'launch-explore-discuss' lesson structure involves:",
            options: [
              'Only teacher explanations',
              'Launching the problem, student exploration, and class discussion',
              'Avoiding student exploration',
              'Only individual work'
            ],
            correctAnswerIndex: 1,
            explanation: "The launch-explore-discuss structure involves the teacher launching a problem, students exploring individually or in groups, and then whole-class discussion.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-launch-explore',
          },
          {
            question: "Mathematical sensemaking involves:",
            options: [
              'Accepting procedures without understanding',
              'Making sense of mathematical ideas and procedures',
              'Memorizing without comprehension',
              'Avoiding explanations'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sensemaking involves students actively working to understand mathematical ideas, make connections, and see the logic behind procedures.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-sensemaking',
          },
          {
            question: "The 'gradual release of responsibility' model involves:",
            options: [
              'Students working independently from the start',
              'Moving from teacher-directed to student-independent learning',
              'Teachers maintaining control throughout',
              'Avoiding student independence'
            ],
            correctAnswerIndex: 1,
            explanation: "The gradual release of responsibility model moves from teacher modeling (I do), to guided practice (we do), to independent practice (you do).",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-gradual-release',
          },
          {
            question: "Mathematical discourse norms include:",
            options: [
              'Working silently',
              'Explaining thinking, justifying solutions, and critiquing reasoning',
              'Avoiding mathematical conversations',
              'Accepting all answers without question'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse norms encourage students to explain their thinking, justify their solutions, and respectfully critique and question each other's reasoning.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-discourse-norms',
          },
          {
            question: "The 'notice and wonder' routine in mathematics involves:",
            options: [
              'Ignoring mathematical features',
              'Students noticing patterns and wondering about mathematical relationships',
              'Avoiding curiosity',
              'Focusing only on procedures'
            ],
            correctAnswerIndex: 1,
            explanation: "The notice and wonder routine encourages students to observe mathematical features and ask questions about patterns and relationships.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-notice-wonder',
          },
          {
            question: "Mathematical precision involves:",
            options: [
              'Approximate answers only',
              'Using mathematical language accurately and appropriately',
              'Avoiding specific terminology',
              'Ignoring mathematical conventions'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical precision involves using mathematical language accurately, following conventions, and communicating ideas with appropriate specificity.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-precision',
          },
          {
            question: "The 'number talk' routine helps students develop:",
            options: [
              'Only calculation speed',
              'Number sense, flexibility with strategies, and mathematical communication',
              'Memorization of procedures',
              'Avoiding mental math'
            ],
            correctAnswerIndex: 1,
            explanation: "Number talks help students develop number sense, flexibility in using different strategies, and the ability to communicate their mathematical thinking.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-number-talk',
          },
          {
            question: "Mathematical perseverance means:",
            options: [
              'Giving up when problems are difficult',
              'Sticking with challenging problems and trying different approaches',
              'Using only one strategy',
              'Avoiding difficult problems'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical perseverance involves persisting with challenging problems, trying different approaches, and viewing difficulties as opportunities to learn.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-perseverance',
          },
          {
            question: "The 'estimate and check' strategy helps students:",
            options: [
              'Avoid calculations',
              'Develop number sense and reasonableness of answers',
              'Skip verification',
              'Focus only on exact answers'
            ],
            correctAnswerIndex: 1,
            explanation: "The estimate and check strategy helps students develop number sense by making reasonable estimates and then checking their actual calculations against those estimates.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-estimate-check',
          },
          {
            question: "Mathematical modeling cycles involve:",
            options: [
              'Only creating models',
              'Formulating problems, creating models, solving, and interpreting results',
              'Avoiding real-world connections',
              'Focusing only on calculations'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical modeling cycles involve formulating real-world problems mathematically, creating and using models, solving, and interpreting results in context.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-modeling-cycle',
          },
          {
            question: "The 'think-pair-share' strategy promotes:",
            options: [
              'Individual work only',
              'Individual thinking, paired discussion, and sharing with the class',
              'Avoiding discussion',
              'Group work without thinking'
            ],
            correctAnswerIndex: 1,
            explanation: "Think-pair-share involves students first thinking individually, then discussing with a partner, and finally sharing their thinking with the larger group.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-think-pair-share',
          },
          {
            question: "Mathematical creativity involves:",
            options: [
              'Following procedures exactly',
              'Generating novel approaches and seeing patterns in new ways',
              'Memorizing standard methods',
              'Avoiding original thinking'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical creativity involves generating novel approaches to problems, seeing patterns in new ways, and making unexpected connections.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-creativity',
          },
          {
            question: "The 'what if' questions in mathematics help students:",
            options: [
              'Avoid deeper thinking',
              'Explore variations and develop mathematical reasoning',
              'Focus only on given problems',
              'Memorize procedures'
            ],
            correctAnswerIndex: 1,
            explanation: "What if questions encourage students to explore variations of problems, develop conjectures, and deepen their mathematical reasoning.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-what-if',
          },
          {
            question: "Mathematical equity involves:",
            options: [
              'Treating all students the same way',
              'Ensuring all students have access to high-quality mathematics learning',
              'Focusing only on high-achieving students',
              'Ignoring individual differences'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical equity involves ensuring all students have access to high-quality mathematics learning while respecting and responding to their diverse needs and backgrounds.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-equity',
          },
          {
            question: "The 'chalk talk' strategy involves:",
            options: [
              'Only teacher writing',
              'Students writing their thinking on the board for others to see',
              'Avoiding written communication',
              'Silent work only'
            ],
            correctAnswerIndex: 1,
            explanation: "Chalk talk involves students writing their mathematical thinking, questions, or ideas on the board, creating a visible record of their collective thinking.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-chalk-talk',
          },
          {
            question: "Mathematical wonder involves:",
            options: [
              'Accepting procedures without question',
              'Being curious about mathematical patterns and relationships',
              'Avoiding exploration',
              'Focusing only on answers'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical wonder involves cultivating curiosity about patterns, relationships, and the beauty of mathematical ideas.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-wonder',
          },
          {
            question: "The 'consolidation phase' in mathematics lessons involves:",
            options: [
              'Starting new topics',
              'Synthesizing learning and making connections',
              'Avoiding reflection',
              'Individual work only'
            ],
            correctAnswerIndex: 1,
            explanation: "The consolidation phase involves synthesizing what was learned, making connections between concepts, and reflecting on the mathematical ideas explored.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-consolidation',
          },
          {
            question: "Mathematical authority involves:",
            options: [
              'Teachers having all the answers',
              'Students developing their own mathematical authority through reasoning',
              'Blindly accepting teacher explanations',
              'Avoiding student thinking'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority involves students developing confidence in their own mathematical reasoning and not relying solely on external authority.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-authority',
          },
          {
            question: "The 'problem posing' approach involves:",
            options: [
              'Only solving given problems',
              'Students creating their own mathematical problems',
              'Avoiding problem creation',
              'Focusing only on standard problems'
            ],
            correctAnswerIndex: 1,
            explanation: "Problem posing involves students creating their own mathematical problems, which helps deepen their understanding and creativity.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-problem-posing',
          },
          {
            question: "Mathematical fluency involves:",
            options: [
              'Only speed of calculation',
              'Efficient, accurate, and flexible use of mathematical procedures',
              'Memorization without understanding',
              'Following procedures rigidly'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical fluency involves efficient, accurate, and flexible use of procedures, with understanding of when and how to use them.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-fluency',
          },
          {
            question: "The 'lesson study' approach involves:",
            options: [
              'Individual teacher planning',
              'Collaborative planning, teaching, and analysis of lessons',
              'Avoiding collaboration',
              'Working in isolation'
            ],
            correctAnswerIndex: 1,
            explanation: "Lesson study involves teachers collaboratively planning a lesson, one teaching it while others observe, and then analyzing the lesson together to improve practice.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-lesson-study',
          },
          {
            question: "Mathematical disposition involves:",
            options: [
              'Attitudes toward mathematics',
              'Only ability in mathematics',
              'Avoiding mathematical thinking',
              'Focusing only on procedures'
            ],
            correctAnswerIndex: 0,
            explanation: "Mathematical disposition refers to students' attitudes, beliefs, and habits of mind related to mathematics learning and problem-solving.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-disposition',
          },
          {
            question: "The 'anticipatory set' in mathematics lessons:",
            options: [
              'Introduces unrelated topics',
              'Engages students and connects to prior knowledge',
              'Avoids connections to previous learning',
              'Focuses only on new content'
            ],
            correctAnswerIndex: 1,
            explanation: "The anticipatory set engages students at the beginning of a lesson and helps connect new learning to their prior knowledge and experiences.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-anticipatory',
          },
          {
            question: "Mathematical coherence means:",
            options: [
              'Teaching isolated topics',
              'Connecting mathematical ideas within and across lessons',
              'Avoiding connections between concepts',
              'Focusing on one topic at a time'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical coherence involves connecting mathematical ideas within lessons and across the curriculum to help students see the interconnected nature of mathematics.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-coherence',
          },
          {
            question: "The 'entry point' approach in mathematics:",
            options: [
              'Has only one way to enter a topic',
              'Provides multiple entry points based on student readiness',
              'Avoids differentiation',
              'Focuses only on advanced students'
            ],
            correctAnswerIndex: 1,
            explanation: "The entry point approach provides multiple ways for students to engage with mathematical content based on their current understanding and readiness levels.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-entry-point',
          },
          {
            question: "Mathematical confidence develops through:",
            options: [
              'Avoiding challenges',
              'Success with appropriately challenging tasks and positive experiences',
              'Only easy problems',
              'Competition and comparison'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical confidence develops through experiencing success with appropriately challenging tasks and having positive mathematical experiences.",
            subjectName: SubjectName.CDP,
            topicId: 'cdp3',
            subTopicId: 'cdp3-confidence',
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
          // Expanded cdp4 practiceQuestions (40+)
          {
            question: 'A teacher who pays more attention to boys than girls during a science experiment is demonstrating:',
            options: ['Inclusive education', 'Progressive education', 'Gender bias', 'Child-centered learning'],
            correctAnswerIndex: 2,
            explanation: 'Gender bias in education refers to the preferential treatment or stereotyping of students based on their gender, which can negatively impact their learning and development.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-bias',
          },
          {
            question: 'Which of the following best describes gender as a social construct?',
            options: ['Biological differences', 'Societal roles and expectations', 'Genetic inheritance', 'Physical attributes only'],
            correctAnswerIndex: 1,
            explanation: 'Gender as a social construct refers to the roles, behaviors, and expectations that society assigns to individuals based on their perceived gender, not biological differences.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-construct',
          },
          {
            question: 'A teacher encourages both boys and girls to participate in sports and science activities. This is an example of:',
            options: ['Gender bias', 'Gender equity', 'Gender stereotyping', 'Segregation'],
            correctAnswerIndex: 1,
            explanation: 'Gender equity in education means providing equal opportunities and encouragement to all students, regardless of gender.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-equity',
          },
          {
            question: 'Which classroom practice helps challenge gender stereotypes?',
            options: ['Assigning boys to science and girls to art', 'Using gender-neutral language', 'Encouraging only boys in math', 'Praising girls for neatness only'],
            correctAnswerIndex: 1,
            explanation: 'Using gender-neutral language and providing equal opportunities helps challenge and break down gender stereotypes in the classroom.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-stereotypes',
          },
          {
            question: 'What is a common effect of gender bias in education?',
            options: ['Improved learning for all', 'Reduced self-esteem for affected students', 'Equal participation', 'No impact'],
            correctAnswerIndex: 1,
            explanation: 'Gender bias can reduce self-esteem and limit participation for students who are not favored, impacting their academic and personal development.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-bias',
          },
          {
            question: 'A teacher notices that girls are less likely to volunteer for leadership roles. What should the teacher do?',
            options: ['Ignore the issue', 'Encourage and support girls to take leadership roles', 'Assign all leadership roles to boys', 'Discourage leadership activities'],
            correctAnswerIndex: 1,
            explanation: 'Teachers should actively encourage and support girls to take on leadership roles to promote gender equity and confidence.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-equity',
          },
          {
            question: 'Which statement reflects a gender stereotype?',
            options: ['Girls are better at language, boys are better at math', 'All children can excel in any subject', 'Interests are not determined by gender', 'Abilities depend on individual effort'],
            correctAnswerIndex: 0,
            explanation: 'The statement reflects a gender stereotype by attributing abilities to gender rather than individual differences.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-stereotypes',
          },
          {
            question: 'How can teachers promote gender inclusivity in classroom discussions?',
            options: ['Call on boys more often', 'Ensure equal participation from all genders', 'Focus only on girls', 'Avoid group work'],
            correctAnswerIndex: 1,
            explanation: 'Ensuring equal participation from all genders in classroom discussions promotes inclusivity and challenges bias.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-inclusivity',
          },
          {
            question: 'A student says, "Boys don’t cry." How should a teacher respond?',
            options: ['Agree with the student', 'Challenge the stereotype and discuss emotions', 'Ignore the comment', 'Discourage emotional expression'],
            correctAnswerIndex: 1,
            explanation: 'Teachers should challenge stereotypes and discuss that emotions are natural for everyone, regardless of gender.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-stereotypes',
          },
          {
            question: 'Which of the following is NOT a strategy for a gender-inclusive classroom?',
            options: ['Using gender-neutral language', 'Encouraging all students equally', 'Reinforcing traditional gender roles', 'Challenging stereotypes'],
            correctAnswerIndex: 2,
            explanation: 'Reinforcing traditional gender roles is not a strategy for gender inclusivity; instead, teachers should challenge stereotypes and encourage all students.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-inclusivity',
          },
          {
            question: 'What is the difference between sex and gender?',
            options: ['Sex is biological, gender is socially constructed', 'Both are biological', 'Both are social constructs', 'No difference'],
            correctAnswerIndex: 0,
            explanation: 'Sex refers to biological differences, while gender refers to societal roles, behaviors, and expectations.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-construct',
          },
          {
            question: 'A teacher uses examples of female scientists and male nurses in lessons. This practice helps:',
            options: ['Reinforce stereotypes', 'Challenge gender roles', 'Limit student aspirations', 'Promote bias'],
            correctAnswerIndex: 1,
            explanation: 'Using diverse examples challenges traditional gender roles and expands students’ understanding of possibilities.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-stereotypes',
          },
          {
            question: 'Which policy supports gender equity in schools?',
            options: ['Segregation by gender', 'Equal access to resources and opportunities', 'Preference for boys in STEM', 'Limiting girls’ participation'],
            correctAnswerIndex: 1,
            explanation: 'Policies that ensure equal access to resources and opportunities for all genders support gender equity in schools.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-equity',
          },
          {
            question: 'A teacher reflects on their own unconscious biases. This is an example of:',
            options: ['Critical self-reflection', 'Gender bias', 'Stereotyping', 'Segregation'],
            correctAnswerIndex: 0,
            explanation: 'Critical self-reflection helps teachers identify and address their own biases, promoting a more equitable classroom.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-reflection',
          },
          {
            question: 'Which of the following is a gender stereotype?',
            options: ['Girls are not good at sports', 'All children can play sports', 'Sports ability is individual', 'Effort determines success'],
            correctAnswerIndex: 0,
            explanation: 'The statement is a gender stereotype that limits opportunities and expectations based on gender.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-stereotypes',
          },
          {
            question: 'How can curriculum materials promote gender inclusivity?',
            options: ['Include diverse role models', 'Focus only on male achievements', 'Ignore gender issues', 'Reinforce stereotypes'],
            correctAnswerIndex: 0,
            explanation: 'Including diverse role models in curriculum materials helps promote gender inclusivity and challenges stereotypes.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-inclusivity',
          },
          {
            question: 'A teacher assigns classroom chores equally to boys and girls. This practice:',
            options: ['Promotes gender equity', 'Reinforces bias', 'Limits opportunities', 'Segregates students'],
            correctAnswerIndex: 0,
            explanation: 'Assigning chores equally promotes gender equity and challenges traditional gender roles.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-equity',
          },
          {
            question: 'Which of the following is NOT a gender stereotype?',
            options: ['Boys are better at math', 'Girls are better at language', 'All students can excel in any subject', 'Girls are not good at sports'],
            correctAnswerIndex: 2,
            explanation: 'The statement “All students can excel in any subject” does not reflect a gender stereotype and promotes equity.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-stereotypes',
          },
          {
            question: 'A teacher encourages students to question stereotypes. This approach:',
            options: ['Promotes critical thinking', 'Reinforces bias', 'Discourages discussion', 'Limits learning'],
            correctAnswerIndex: 0,
            explanation: 'Encouraging students to question stereotypes promotes critical thinking and helps break down harmful beliefs.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-critical-thinking',
          },
          {
            question: 'What is the impact of gender bias on classroom participation?',
            options: ['Equal participation', 'Reduced participation for some students', 'No impact', 'Improved learning for all'],
            correctAnswerIndex: 1,
            explanation: 'Gender bias can reduce participation and engagement for students who are not favored, affecting their learning outcomes.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-bias',
          },
          {
            question: 'A teacher uses only male examples in science lessons. This practice:',
            options: ['Promotes inclusivity', 'Reinforces gender bias', 'Challenges stereotypes', 'Encourages equity'],
            correctAnswerIndex: 1,
            explanation: 'Using only male examples reinforces gender bias and limits students’ understanding of diverse contributions.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-bias',
          },
          {
            question: 'Which classroom activity supports gender inclusivity?',
            options: ['Group work with mixed genders', 'Segregated activities', 'Assigning roles by gender', 'Ignoring gender issues'],
            correctAnswerIndex: 0,
            explanation: 'Group work with mixed genders supports inclusivity and helps students learn to collaborate across differences.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-inclusivity',
          },
          {
            question: 'A teacher challenges the statement "Girls are not good at math." This response:',
            options: ['Reinforces stereotypes', 'Promotes equity and challenges bias', 'Discourages learning', 'Limits opportunities'],
            correctAnswerIndex: 1,
            explanation: 'Challenging such statements promotes equity and helps break down harmful stereotypes.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-equity',
          },
          {
            question: 'What is the role of teachers in addressing gender bias?',
            options: ['Ignore bias', 'Actively challenge bias and promote equity', 'Reinforce stereotypes', 'Limit opportunities'],
            correctAnswerIndex: 1,
            explanation: 'Teachers should actively challenge bias and promote equity to create an inclusive learning environment.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-bias',
          },
          {
            question: 'A teacher encourages boys to participate in dance and girls in science. This approach:',
            options: ['Challenges stereotypes', 'Reinforces traditional roles', 'Limits opportunities', 'Promotes bias'],
            correctAnswerIndex: 0,
            explanation: 'Encouraging all students to participate in diverse activities challenges stereotypes and promotes equity.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-equity',
          },
          {
            question: 'Which of the following is a sign of gender bias in classroom management?',
            options: ['Equal discipline for all', 'More leniency for boys', 'Consistent expectations', 'Encouragement for all'],
            correctAnswerIndex: 1,
            explanation: 'More leniency for boys is a sign of gender bias and can create unequal standards in classroom management.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-bias',
          },
          {
            question: 'A teacher uses stories featuring strong female and male characters. This strategy:',
            options: ['Promotes gender inclusivity', 'Reinforces stereotypes', 'Limits imagination', 'Discourages participation'],
            correctAnswerIndex: 0,
            explanation: 'Using stories with diverse characters promotes gender inclusivity and helps students see a range of possibilities.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-inclusivity',
          },
          {
            question: 'What is the impact of challenging gender stereotypes in education?',
            options: ['Limits learning', 'Promotes equity and broadens opportunities', 'Discourages participation', 'Reinforces bias'],
            correctAnswerIndex: 1,
            explanation: 'Challenging gender stereotypes promotes equity and broadens opportunities for all students.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-equity',
          },
          {
            question: 'A teacher encourages students to reflect on their own beliefs about gender. This activity:',
            options: ['Promotes self-awareness and critical thinking', 'Reinforces stereotypes', 'Limits discussion', 'Discourages reflection'],
            correctAnswerIndex: 0,
            explanation: 'Encouraging reflection promotes self-awareness and critical thinking about gender issues.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-reflection',
          },
          {
            question: 'Which of the following is a benefit of gender-inclusive education?',
            options: ['Improved academic outcomes for all', 'Increased bias', 'Limited opportunities', 'Reinforced stereotypes'],
            correctAnswerIndex: 0,
            explanation: 'Gender-inclusive education improves academic outcomes and creates a more equitable learning environment for all students.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-inclusivity',
          },
          {
            question: 'A teacher models respect for all genders in classroom interactions. This behavior:',
            options: ['Promotes inclusivity and respect', 'Reinforces bias', 'Limits participation', 'Discourages equity'],
            correctAnswerIndex: 0,
            explanation: 'Modeling respect for all genders promotes inclusivity and sets a positive example for students.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-inclusivity',
          },
          {
            question: 'What is the teacher’s role in promoting gender equity?',
            options: ['Ignore gender issues', 'Actively promote equity and challenge bias', 'Reinforce stereotypes', 'Limit opportunities'],
            correctAnswerIndex: 1,
            explanation: 'Teachers play a key role in promoting gender equity by challenging bias and providing equal opportunities for all students.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-equity',
          },
          {
            question: 'A teacher provides equal feedback and encouragement to all students. This approach:',
            options: ['Promotes equity and confidence', 'Reinforces bias', 'Limits learning', 'Discourages participation'],
            correctAnswerIndex: 0,
            explanation: 'Providing equal feedback and encouragement promotes equity and helps build confidence in all students.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-equity',
          },
          {
            question: 'Which of the following classroom practices should be avoided to promote gender equity?',
            options: ['Assigning tasks based on gender', 'Encouraging all students equally', 'Using diverse examples', 'Challenging stereotypes'],
            correctAnswerIndex: 0,
            explanation: 'Assigning tasks based on gender reinforces stereotypes and should be avoided to promote equity.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-stereotypes',
          },
          {
            question: 'A teacher organizes a classroom debate on gender roles. This activity:',
            options: ['Promotes critical thinking and discussion', 'Reinforces bias', 'Limits participation', 'Discourages equity'],
            correctAnswerIndex: 0,
            explanation: 'Organizing debates on gender roles promotes critical thinking and helps students understand diverse perspectives.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-critical-thinking',
          },
          {
            question: 'What is the impact of using gender-neutral language in the classroom?',
            options: ['Promotes inclusivity', 'Reinforces stereotypes', 'Limits communication', 'Discourages equity'],
            correctAnswerIndex: 0,
            explanation: 'Using gender-neutral language promotes inclusivity and helps all students feel valued.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-inclusivity',
          },
          {
            question: 'A teacher encourages students to pursue interests regardless of gender. This approach:',
            options: ['Promotes equity and broadens opportunities', 'Limits learning', 'Reinforces bias', 'Discourages participation'],
            correctAnswerIndex: 0,
            explanation: 'Encouraging students to pursue interests regardless of gender promotes equity and broadens opportunities for all.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-equity',
          },
          {
            question: 'Which of the following is a classroom strategy to address gender bias?',
            options: ['Critical self-reflection', 'Assigning tasks by gender', 'Ignoring bias', 'Reinforcing stereotypes'],
            correctAnswerIndex: 0,
            explanation: 'Critical self-reflection helps teachers identify and address their own biases, promoting a more equitable classroom.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-reflection',
          },
          {
            question: 'A teacher provides opportunities for all students to lead group activities. This practice:',
            options: ['Promotes equity and leadership skills', 'Limits opportunities', 'Reinforces bias', 'Discourages participation'],
            correctAnswerIndex: 0,
            explanation: 'Providing leadership opportunities to all students promotes equity and helps develop leadership skills.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-equity',
          },
          {
            question: 'What is the effect of challenging gender stereotypes on student aspirations?',
            options: ['Broadens aspirations and opportunities', 'Limits learning', 'Reinforces bias', 'Discourages participation'],
            correctAnswerIndex: 0,
            explanation: 'Challenging gender stereotypes broadens student aspirations and opportunities, allowing all students to pursue their interests.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-equity',
          },
          {
            question: 'A teacher encourages students to share their experiences related to gender roles. This activity:',
            options: ['Promotes discussion and understanding', 'Limits participation', 'Reinforces bias', 'Discourages equity'],
            correctAnswerIndex: 0,
            explanation: 'Encouraging students to share experiences promotes discussion and understanding of gender roles and issues.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-inclusivity',
          },
          {
            question: 'Which of the following is a sign of gender equity in classroom assessment?',
            options: ['Fair and unbiased evaluation for all', 'Preference for boys', 'Preference for girls', 'Ignoring assessment'],
            correctAnswerIndex: 0,
            explanation: 'Fair and unbiased evaluation for all students is a sign of gender equity in classroom assessment.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-equity',
          },
          {
            question: 'A teacher challenges students to think critically about media portrayals of gender. This activity:',
            options: ['Promotes media literacy and critical thinking', 'Reinforces bias', 'Limits discussion', 'Discourages equity'],
            correctAnswerIndex: 0,
            explanation: 'Promoting media literacy and critical thinking helps students analyze and question media portrayals of gender.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-critical-thinking',
          },
          {
            question: 'What is the impact of teacher expectations on student achievement across genders?',
            options: ['Can influence achievement and confidence', 'No impact', 'Limits learning', 'Discourages participation'],
            correctAnswerIndex: 0,
            explanation: 'Teacher expectations can significantly influence student achievement and confidence across genders.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-equity',
          },
          {
            question: 'A teacher provides resources that reflect diverse gender identities. This approach:',
            options: ['Promotes inclusivity and respect', 'Reinforces bias', 'Limits learning', 'Discourages equity'],
            correctAnswerIndex: 0,
            explanation: 'Providing resources that reflect diverse gender identities promotes inclusivity and respect for all students.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-inclusivity',
          },
          {
            question: 'Which of the following is a classroom strategy to promote gender equity?',
            options: ['Encourage all students to participate in all activities', 'Assign tasks by gender', 'Ignore gender issues', 'Reinforce stereotypes'],
            correctAnswerIndex: 0,
            explanation: 'Encouraging all students to participate in all activities promotes gender equity and challenges stereotypes.',
            subjectName: SubjectName.CDP,
            topicId: 'cdp4',
            subTopicId: 'cdp4-equity',
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
    <li><strong>Error Analysis:</strong> Children's errors are not random; they are indicative of their thinking. A teacher's role is to analyze these errors to understand a child's misconceptions. For example, a child writing 25 + 35 = 510 shows a misunderstanding of place value.</li>
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
          {
            question: "The primary aim of teaching mathematics according to NCF 2005 is:",
            options: [
              'Rote memorization of formulas',
              'Mathematization of the child\'s thought process',
              'Competition in mathematical Olympiads',
              'Focus on calculation speed only'
            ],
            correctAnswerIndex: 1,
            explanation: "NCF 2005 emphasizes developing logical thinking and reasoning abilities rather than rote memorization, focusing on 'mathematization of the child's thought process'.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-nature',
          },
          {
            question: "Which of the following best describes 'community mathematics'?",
            options: [
              'Mathematics taught only in schools',
              'Connecting classroom math to everyday life situations',
              'Advanced mathematical concepts for experts',
              'Mathematics without real-world applications'
            ],
            correctAnswerIndex: 1,
            explanation: "Community mathematics involves connecting mathematical concepts to real-life situations like shopping, measuring, and patterns in nature to make learning meaningful.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-community',
          },
          {
            question: "Continuous and Comprehensive Evaluation (CCE) in mathematics includes:",
            options: [
              'Only written tests at the end of the term',
              'Observations, projects, and discussions throughout the year',
              'Only multiple choice questions',
              'Competition-based rankings only'
            ],
            correctAnswerIndex: 1,
            explanation: "CCE is an ongoing assessment process that includes various methods like observations, projects, discussions, and practical activities, not just end-of-term tests.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-cce',
          },
          {
            question: "A child writes 25 + 35 = 510. This error indicates misunderstanding of:",
            options: ['Addition concept', 'Place value', 'Number recognition', 'Counting'],
            correctAnswerIndex: 1,
            explanation: "The error 25 + 35 = 510 shows a misunderstanding of place value, where the child is adding digits without considering their positional value.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-error-analysis',
          },
          {
            question: "Diagnostic teaching in mathematics involves:",
            options: [
              'Teaching the same content repeatedly',
              'Identifying specific learning gaps and providing targeted support',
              'Focusing only on advanced students',
              'Ignoring individual differences'
            ],
            correctAnswerIndex: 1,
            explanation: "Diagnostic teaching involves identifying specific learning difficulties and providing targeted remedial support to address those particular gaps.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-diagnostic',
          },
          {
            question: "The hierarchical nature of mathematics means:",
            options: [
              'All concepts are equally important',
              'Concepts build upon each other sequentially',
              'Advanced concepts should be taught first',
              'Basic concepts are not necessary'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematics is hierarchical - basic concepts like number sense form the foundation for more complex concepts like algebra and geometry.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-hierarchy',
          },
          {
            question: "Which approach best promotes mathematical communication in the classroom?",
            options: [
              'Students working silently on problems',
              'Group discussions about problem-solving strategies',
              'Only the teacher explaining solutions',
              'Memorizing standard procedures'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical communication is fostered through discussions where students explain their thinking, justify their solutions, and learn from peers.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-communication',
          },
          {
            question: "Concrete materials in mathematics teaching help children:",
            options: [
              'Memorize formulas faster',
              'Move from concrete to abstract understanding',
              'Skip basic concepts',
              'Focus only on written work'
            ],
            correctAnswerIndex: 1,
            explanation: "Concrete materials (manipulatives) help children understand abstract mathematical concepts by providing tangible representations before moving to symbolic representations.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-concrete',
          },
          {
            question: "Assessment for learning in mathematics involves:",
            options: [
              'Only grading final answers',
              'Using assessment to guide teaching and learning',
              'Comparing students with each other',
              'Focusing only on speed of calculation'
            ],
            correctAnswerIndex: 1,
            explanation: "Assessment for learning uses ongoing assessment to understand student understanding and adjust teaching strategies accordingly.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-assessment',
          },
          {
            question: "A constructivist approach to teaching mathematics emphasizes:",
            options: [
              'Direct instruction of procedures',
              'Students constructing their own understanding',
              'Rote memorization of facts',
              'Competition among students'
            ],
            correctAnswerIndex: 1,
            explanation: "Constructivism emphasizes that students actively construct their mathematical understanding through experiences and reflection, rather than passively receiving information.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-constructivist',
          },
          {
            question: "Problem-solving in mathematics should focus on:",
            options: [
              'Getting the correct answer quickly',
              'Developing thinking processes and strategies',
              'Memorizing formulas',
              'Competition for grades'
            ],
            correctAnswerIndex: 1,
            explanation: "Problem-solving should develop students' thinking processes, reasoning abilities, and multiple solution strategies, not just finding correct answers.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-problem-solving',
          },
          {
            question: "Mathematical vocabulary development includes teaching:",
            options: [
              'Only technical terms like algorithm',
              'Everyday words used in mathematical contexts',
              'Only symbols and notations',
              'Foreign language terms'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical vocabulary includes both technical terms and everyday words used in specific mathematical contexts, like 'difference' in subtraction.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-vocabulary',
          },
          {
            question: "Real-world connections in mathematics help students:",
            options: [
              'Memorize procedures better',
              'See the relevance and application of mathematics',
              'Focus only on abstract concepts',
              'Avoid practical applications'
            ],
            correctAnswerIndex: 1,
            explanation: "Connecting mathematics to real-world situations helps students understand its relevance and motivates learning by showing practical applications.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-real-world',
          },
          {
            question: "Formative assessment in mathematics includes:",
            options: [
              'Only end-of-chapter tests',
              'Ongoing feedback during learning activities',
              'Final examination only',
              'Ranking students'
            ],
            correctAnswerIndex: 1,
            explanation: "Formative assessment provides ongoing feedback during the learning process to help students improve and guide teaching decisions.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-formative',
          },
          {
            question: "Differentiated instruction in mathematics means:",
            options: [
              'Teaching the same content to all students',
              'Adapting teaching to meet diverse learning needs',
              'Focusing only on advanced students',
              'Using only one teaching method'
            ],
            correctAnswerIndex: 1,
            explanation: "Differentiated instruction involves adapting content, process, and products to meet the diverse learning needs and readiness levels of students.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-differentiated',
          },
          {
            question: "Mathematical reasoning involves:",
            options: [
              'Memorizing procedures',
              'Justifying solutions with logical arguments',
              'Getting answers quickly',
              'Following rules without understanding'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical reasoning requires students to justify their solutions with logical arguments and explain their thinking processes.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-reasoning',
          },
          {
            question: "The 'language of mathematics' includes:",
            options: [
              'Only written symbols',
              'Verbal explanations and representations',
              'Only numerical calculations',
              'Foreign languages only'
            ],
            correctAnswerIndex: 1,
            explanation: "The language of mathematics includes verbal explanations, symbolic representations, visual representations, and various forms of mathematical communication.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-language',
          },
          {
            question: "Portfolio assessment in mathematics can include:",
            options: [
              'Only test scores',
              'Student work samples, reflections, and problem-solving processes',
              'Only final grades',
              'Only teacher evaluations'
            ],
            correctAnswerIndex: 1,
            explanation: "Portfolio assessment includes a collection of student work samples, reflections on learning, and documentation of problem-solving processes over time.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-portfolio',
          },
          {
            question: "Inquiry-based learning in mathematics involves:",
            options: [
              'Direct instruction of procedures',
              'Students exploring mathematical concepts through questions',
              'Memorization of facts',
              'Teacher-centered explanations'
            ],
            correctAnswerIndex: 1,
            explanation: "Inquiry-based learning encourages students to explore mathematical concepts through questioning, investigation, and discovery.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-inquiry',
          },
          {
            question: "Mathematical modeling involves:",
            options: [
              'Only drawing diagrams',
              'Using mathematics to represent real-world situations',
              'Memorizing formulas',
              'Abstract calculations only'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical modeling involves creating mathematical representations of real-world situations to solve problems and make predictions.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-modeling',
          },
          {
            question: "Assessment of mathematical processes includes evaluating:",
            options: [
              'Only final answers',
              'Problem-solving strategies and thinking processes',
              'Only calculation speed',
              'Only memorization ability'
            ],
            correctAnswerIndex: 1,
            explanation: "Assessment of mathematical processes evaluates students' problem-solving strategies, reasoning, and thinking processes, not just final answers.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-process',
          },
          {
            question: "Technology integration in mathematics teaching can:",
            options: [
              'Replace all traditional methods',
              'Enhance understanding through visualization and exploration',
              'Only be used for testing',
              'Replace teacher instruction'
            ],
            correctAnswerIndex: 1,
            explanation: "Technology can enhance mathematical understanding by providing visualization tools, interactive explorations, and multiple representations of concepts.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-technology',
          },
          {
            question: "Metacognition in mathematics involves:",
            options: [
              'Memorizing procedures',
              'Thinking about one\'s own thinking and learning processes',
              'Following rules blindly',
              'Quick calculations'
            ],
            correctAnswerIndex: 1,
            explanation: "Metacognition involves students thinking about their own thinking processes, monitoring their understanding, and adjusting their learning strategies.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-metacognition',
          },
          {
            question: "Collaborative learning in mathematics helps students:",
            options: [
              'Compete with each other',
              'Share problem-solving strategies and learn from peers',
              'Work in isolation',
              'Focus only on individual achievement'
            ],
            correctAnswerIndex: 1,
            explanation: "Collaborative learning allows students to share different problem-solving approaches, explain their thinking, and learn from diverse perspectives.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-collaborative',
          },
          {
            question: "The concept of 'multiple representations' in mathematics means:",
            options: [
              'Using only one method to solve problems',
              'Representing concepts in various forms (numerical, graphical, symbolic)',
              'Using complex notations only',
              'Avoiding visual representations'
            ],
            correctAnswerIndex: 1,
            explanation: "Multiple representations involve showing mathematical concepts through various forms like numerical, graphical, symbolic, and verbal representations.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-representations',
          },
          {
            question: "Remedial teaching in mathematics should:",
            options: [
              'Repeat the same content',
              'Address specific learning difficulties identified through diagnosis',
              'Focus only on weak students',
              'Use punishment for mistakes'
            ],
            correctAnswerIndex: 1,
            explanation: "Remedial teaching involves diagnosing specific learning difficulties and providing targeted support to address those particular challenges.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-remedial',
          },
          {
            question: "Mathematical anxiety can be reduced by:",
            options: [
              'Emphasizing competition',
              'Creating a supportive learning environment',
              'Focusing only on difficult problems',
              'Using punishment for mistakes'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical anxiety can be reduced by creating a supportive environment where mistakes are viewed as learning opportunities and students feel safe to take risks.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-anxiety',
          },
          {
            question: "The 'zone of proximal development' in mathematics teaching refers to:",
            options: [
              'What students can do independently',
              'The gap between what students can do alone and with guidance',
              'Only advanced mathematical concepts',
              'What students cannot learn'
            ],
            correctAnswerIndex: 1,
            explanation: "The zone of proximal development is the difference between what a learner can do without help and what they can achieve with guidance from a more knowledgeable other.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-zpd',
          },
          {
            question: "Scaffolded instruction in mathematics involves:",
            options: [
              'Removing all support immediately',
              'Providing temporary support that is gradually reduced',
              'Giving complete solutions',
              'Working independently only'
            ],
            correctAnswerIndex: 1,
            explanation: "Scaffolded instruction provides temporary support structures that are gradually removed as students become more competent and independent.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-scaffolding',
          },
          {
            question: "Cultural contexts in mathematics teaching involve:",
            options: [
              'Ignoring cultural differences',
              'Connecting mathematical concepts to students\' cultural backgrounds',
              'Using only Western mathematics',
              'Avoiding real-world examples'
            ],
            correctAnswerIndex: 1,
            explanation: "Cultural contexts involve connecting mathematical concepts to students' cultural backgrounds and experiences to make learning more relevant and meaningful.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-cultural',
          },
          {
            question: "Formative assessment data should be used to:",
            options: [
              'Only assign grades',
              'Inform teaching decisions and provide feedback',
              'Compare students',
              'Punish poor performance'
            ],
            correctAnswerIndex: 1,
            explanation: "Formative assessment data should inform teaching decisions, provide timely feedback to students, and guide instructional adjustments.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-formative-data',
          },
          {
            question: "Mathematical discourse in the classroom includes:",
            options: [
              'Silent work only',
              'Students explaining their thinking and justifying solutions',
              'Only teacher explanations',
              'Memorizing definitions'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse involves students engaging in mathematical conversations, explaining their thinking, and justifying their solutions to develop deeper understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse',
          },
          {
            question: "The 'concrete-semiconcrete-abstract' sequence in teaching mathematics:",
            options: [
              'Skips concrete materials',
              'Moves from tangible objects to symbolic representations',
              'Starts with abstract concepts',
              'Avoids hands-on activities'
            ],
            correctAnswerIndex: 1,
            explanation: "The concrete-semiconcrete-abstract sequence starts with concrete manipulatives, moves to semiconcrete representations, and finally to abstract symbols.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-csa',
          },
          {
            question: "Adaptive teaching in mathematics means:",
            options: [
              'Using the same method for all students',
              'Adjusting instruction based on student responses',
              'Focusing only on advanced students',
              'Ignoring individual differences'
            ],
            correctAnswerIndex: 1,
            explanation: "Adaptive teaching involves continuously adjusting instruction based on student responses, understanding, and learning needs.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-adaptive',
          },
          {
            question: "Mathematical proof at the primary level involves:",
            options: [
              'Formal mathematical proofs only',
              'Justification of solutions using reasoning and examples',
              'Memorizing proof techniques',
              'Avoiding explanations'
            ],
            correctAnswerIndex: 1,
            explanation: "At the primary level, mathematical proof involves justifying solutions using reasoning, examples, and explanations appropriate to the developmental level.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-proof',
          },
          {
            question: "The role of mistakes in mathematics learning is to:",
            options: [
              'Punish students',
              'Serve as opportunities for learning and understanding misconceptions',
              'Discourage students',
              'Focus only on correct answers'
            ],
            correctAnswerIndex: 1,
            explanation: "Mistakes in mathematics learning provide valuable opportunities to identify misconceptions and guide students toward deeper understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-mistakes',
          },
          {
            question: "Interdisciplinary connections in mathematics involve:",
            options: [
              'Teaching subjects in isolation',
              'Connecting mathematics with other subjects like science and art',
              'Focusing only on mathematical procedures',
              'Avoiding real-world applications'
            ],
            correctAnswerIndex: 1,
            explanation: "Interdisciplinary connections help students see the relevance of mathematics by linking it with other subjects and real-world applications.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-interdisciplinary',
          },
          {
            question: "Assessment literacy in mathematics teaching means:",
            options: [
              'Only knowing how to grade papers',
              'Understanding how to use assessment to improve learning',
              'Focusing only on summative assessment',
              'Ignoring assessment data'
            ],
            correctAnswerIndex: 1,
            explanation: "Assessment literacy involves understanding various assessment methods and using assessment data to improve teaching and student learning.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-literacy',
          },
          {
            question: "The 'growth mindset' in mathematics teaching emphasizes:",
            options: [
              'Fixed ability in mathematics',
              'Effort and strategies can improve mathematical ability',
              'Only innate talent matters',
              'Avoiding challenging problems'
            ],
            correctAnswerIndex: 1,
            explanation: "Growth mindset emphasizes that mathematical ability can be developed through effort, effective strategies, and persistence.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-growth-mindset',
          },
          {
            question: "Mathematical games and puzzles help students develop:",
            options: [
              'Only memorization skills',
              'Problem-solving strategies and logical thinking',
              'Competition without learning',
              'Avoiding mathematical thinking'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical games and puzzles develop problem-solving strategies, logical thinking, spatial reasoning, and make learning enjoyable.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-games',
          },
          {
            question: "Reflective practice in mathematics teaching involves:",
            options: [
              'Following routines without thinking',
              'Teachers reflecting on their teaching and student learning',
              'Ignoring teaching effectiveness',
              'Focusing only on content delivery'
            ],
            correctAnswerIndex: 1,
            explanation: "Reflective practice involves teachers regularly reflecting on their teaching methods, student responses, and adjusting their approach to improve learning.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-reflective',
          },
          {
            question: "The 'product vs process' debate in mathematics assessment focuses on:",
            options: [
              'Only final answers matter',
              'Evaluating both final answers and problem-solving processes',
              'Ignoring the thinking process',
              'Only the speed of completion'
            ],
            correctAnswerIndex: 1,
            explanation: "The product vs process debate emphasizes evaluating both the final mathematical answer and the thinking processes used to arrive at the solution.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-product-process',
          },
          {
            question: "Universal Design for Learning (UDL) in mathematics means:",
            options: [
              'One-size-fits-all instruction',
              'Providing multiple means of engagement, representation, and action/expression',
              'Focusing only on advanced students',
              'Using only traditional methods'
            ],
            correctAnswerIndex: 1,
            explanation: "UDL provides multiple pathways for learning by offering various ways to engage with content, represent information, and express understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-udl',
          },
          {
            question: "Mathematical journaling involves students:",
            options: [
              'Only copying notes',
              'Writing about their mathematical thinking and problem-solving processes',
              'Memorizing definitions',
              'Avoiding written work'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical journaling encourages students to write about their thinking processes, explain their solutions, and reflect on their mathematical understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-journaling',
          },
          {
            question: "The 'spiral curriculum' in mathematics means:",
            options: [
              'Teaching topics only once',
              'Revisiting concepts at increasing levels of complexity',
              'Avoiding review of previous learning',
              'Focusing only on new topics'
            ],
            correctAnswerIndex: 1,
            explanation: "The spiral curriculum revisits mathematical concepts at increasing levels of complexity and sophistication over multiple years.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-spiral',
          },
          {
            question: "Ethnomathematics involves:",
            options: [
              'Ignoring cultural contexts',
              'Recognizing mathematical practices in different cultures',
              'Using only Western mathematics',
              'Avoiding cultural connections'
            ],
            correctAnswerIndex: 1,
            explanation: "Ethnomathematics recognizes and values the mathematical practices, patterns, and knowledge embedded in different cultural contexts and traditions.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-ethnomathematics',
          },
          {
            question: "Response to Intervention (RTI) in mathematics:",
            options: [
              'Punishes struggling students',
              'Provides tiered levels of support based on student needs',
              'Ignores learning difficulties',
              'Focuses only on advanced students'
            ],
            correctAnswerIndex: 1,
            explanation: "RTI provides increasingly intensive levels of support (tiers) to help struggling students succeed, with early intervention and progress monitoring.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-rti',
          },
          {
            question: "Mathematical habits of mind include:",
            options: [
              'Memorizing procedures only',
              'Curiosity, perseverance, and seeking patterns',
              'Following rules blindly',
              'Avoiding challenging problems'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical habits of mind include curiosity about patterns, perseverance in problem-solving, seeking efficient strategies, and mathematical communication.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-habits',
          },
          {
            question: "The 'rule of four' in mathematics teaching means:",
            options: [
              'Only four rules to learn',
              'Representing concepts numerically, graphically, symbolically, and verbally',
              'Four steps to solve any problem',
              'Only four topics to teach'
            ],
            correctAnswerIndex: 1,
            explanation: "The rule of four suggests representing mathematical concepts in four ways: numerical, graphical, symbolic (algebraic), and verbal (written/oral explanations).",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-rule-four',
          },
          {
            question: "Project-based learning in mathematics involves:",
            options: [
              'Individual worksheet completion',
              'Students working on extended mathematical investigations',
              'Memorizing formulas',
              'Multiple choice testing only'
            ],
            correctAnswerIndex: 1,
            explanation: "Project-based learning engages students in extended mathematical investigations that require applying mathematical concepts to real-world problems.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-project-based',
          },
          {
            question: "Mathematical argumentation involves:",
            options: [
              'Stating opinions without evidence',
              'Providing logical reasons and evidence for mathematical claims',
              'Memorizing proofs',
              'Avoiding explanations'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical argumentation requires students to provide logical reasons, evidence, and justifications for their mathematical claims and solutions.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-argumentation',
          },
          {
            question: "The 'didactic contract' in mathematics teaching refers to:",
            options: [
              'Teacher-student agreements on behavior',
              'Unspoken expectations about roles in mathematics learning',
              'Legal contracts for teaching',
              'Payment agreements'
            ],
            correctAnswerIndex: 1,
            explanation: "The didactic contract refers to the implicit expectations and roles that teachers and students have about how mathematics should be taught and learned.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-didactic',
          },
          {
            question: "Mathematical empowerment means:",
            options: [
              'Making students feel helpless',
              'Enabling students to use mathematics confidently in their lives',
              'Focusing only on academic success',
              'Avoiding real-world applications'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment involves helping students develop confidence in using mathematics to understand and navigate their world effectively.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment',
          },
          {
            question: "The 'reform mathematics' approach emphasizes:",
            options: [
              'Traditional algorithms only',
              'Understanding concepts and problem-solving processes',
              'Memorization of procedures',
              'Speed of calculation'
            ],
            correctAnswerIndex: 1,
            explanation: "Reform mathematics emphasizes conceptual understanding, problem-solving processes, mathematical communication, and connecting mathematics to real-world applications.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-reform',
          },
          {
            question: "Mathematical identity development involves:",
            options: [
              'Labeling students as mathematical or not',
              'Helping students see themselves as capable mathematical thinkers',
              'Focusing only on grades',
              'Comparing students mathematically'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical identity development helps students see themselves as capable mathematical thinkers who can engage with and make sense of mathematics.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-identity',
          },
          {
            question: "The 'zone of actual development' refers to:",
            options: [
              'What students can learn with help',
              'What students can do independently right now',
              'What students cannot learn',
              'Only advanced concepts'
            ],
            correctAnswerIndex: 1,
            explanation: "The zone of actual development refers to what a learner can accomplish independently without assistance from others.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-zad',
          },
          {
            question: "Mathematical autobiography involves students:",
            options: [
              'Writing their life stories',
              'Reflecting on their mathematical experiences and beliefs',
              'Memorizing mathematical facts',
              'Writing fiction stories'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical autobiography encourages students to reflect on their past experiences with mathematics, their beliefs about mathematics, and their mathematical identity.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-autobiography',
          },
          {
            question: "The 'funnel approach' in mathematics teaching:",
            options: [
              'Starts with complex problems',
              'Begins with concrete examples and moves to abstract concepts',
              'Avoids concrete materials',
              'Focuses only on abstract thinking'
            ],
            correctAnswerIndex: 1,
            explanation: "The funnel approach starts with concrete, familiar examples and gradually moves toward more abstract and generalized mathematical concepts.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-funnel',
          },
          {
            question: "Mathematical noticing involves:",
            options: [
              'Ignoring patterns and relationships',
              'Attending to patterns, relationships, and mathematical structure',
              'Focusing only on procedures',
              'Avoiding mathematical thinking'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing involves paying attention to patterns, relationships, and mathematical structures in problems and solutions.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing',
          },
          {
            question: "The 'productive struggle' in mathematics learning means:",
            options: [
              'Making learning frustrating',
              'Encouraging appropriate levels of challenge and persistence',
              'Avoiding difficult problems',
              'Giving up when problems are hard'
            ],
            correctAnswerIndex: 1,
            explanation: "Productive struggle involves providing appropriately challenging problems that encourage persistence and deeper mathematical thinking without causing frustration.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-productive-struggle',
          },
          {
            question: "Mathematical agency means:",
            options: [
              'Teachers making all decisions',
              'Students having ownership of their mathematical learning',
              'Following rules blindly',
              'Avoiding mathematical choices'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency involves students having ownership of their learning, making choices about strategies, and taking responsibility for their mathematical understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency',
          },
          {
            question: "The 'launch-explore-discuss' lesson structure involves:",
            options: [
              'Only teacher explanations',
              'Launching the problem, student exploration, and class discussion',
              'Avoiding student exploration',
              'Only individual work'
            ],
            correctAnswerIndex: 1,
            explanation: "The launch-explore-discuss structure involves the teacher launching a problem, students exploring individually or in groups, and then whole-class discussion.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-launch-explore',
          },
          {
            question: "Mathematical sensemaking involves:",
            options: [
              'Accepting procedures without understanding',
              'Making sense of mathematical ideas and procedures',
              'Memorizing without comprehension',
              'Avoiding explanations'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sensemaking involves students actively working to understand mathematical ideas, make connections, and see the logic behind procedures.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sensemaking',
          },
          {
            question: "The 'gradual release of responsibility' model involves:",
            options: [
              'Students working independently from the start',
              'Moving from teacher-directed to student-independent learning',
              'Teachers maintaining control throughout',
              'Avoiding student independence'
            ],
            correctAnswerIndex: 1,
            explanation: "The gradual release of responsibility model moves from teacher modeling (I do), to guided practice (we do), to independent practice (you do).",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-gradual-release',
          },
          {
            question: "Mathematical discourse norms include:",
            options: [
              'Working silently',
              'Explaining thinking, justifying solutions, and critiquing reasoning',
              'Avoiding mathematical conversations',
              'Accepting all answers without question'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse norms encourage students to explain their thinking, justify their solutions, and respectfully critique and question each other's reasoning.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-norms',
          },
          {
            question: "The 'notice and wonder' routine in mathematics involves:",
            options: [
              'Ignoring mathematical features',
              'Students noticing patterns and wondering about mathematical relationships',
              'Avoiding curiosity',
              'Focusing only on procedures'
            ],
            correctAnswerIndex: 1,
            explanation: "The notice and wonder routine encourages students to observe mathematical features and ask questions about patterns and relationships.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-notice-wonder',
          },
          {
            question: "Mathematical precision involves:",
            options: [
              'Approximate answers only',
              'Using mathematical language accurately and appropriately',
              'Avoiding specific terminology',
              'Ignoring mathematical conventions'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical precision involves using mathematical language accurately, following conventions, and communicating ideas with appropriate specificity.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-precision',
          },
          {
            question: "The 'number talk' routine helps students develop:",
            options: [
              'Only calculation speed',
              'Number sense, flexibility with strategies, and mathematical communication',
              'Memorization of procedures',
              'Avoiding mental math'
            ],
            correctAnswerIndex: 1,
            explanation: "Number talks help students develop number sense, flexibility in using different strategies, and the ability to communicate their mathematical thinking.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-number-talk',
          },
          {
            question: "Mathematical perseverance means:",
            options: [
              'Giving up when problems are difficult',
              'Sticking with challenging problems and trying different approaches',
              'Using only one strategy',
              'Avoiding difficult problems'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical perseverance involves persisting with challenging problems, trying different approaches, and viewing difficulties as opportunities to learn.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-perseverance',
          },
          {
            question: "The 'estimate and check' strategy helps students:",
            options: [
              'Avoid calculations',
              'Develop number sense and reasonableness of answers',
              'Skip verification',
              'Focus only on exact answers'
            ],
            correctAnswerIndex: 1,
            explanation: "The estimate and check strategy helps students develop number sense by making reasonable estimates and then checking their actual calculations against those estimates.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-estimate-check',
          },
          {
            question: "Mathematical modeling cycles involve:",
            options: [
              'Only creating models',
              'Formulating problems, creating models, solving, and interpreting results',
              'Avoiding real-world connections',
              'Focusing only on calculations'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical modeling cycles involve formulating real-world problems mathematically, creating and using models, solving, and interpreting results in context.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-modeling-cycle',
          },
          {
            question: "The 'think-pair-share' strategy promotes:",
            options: [
              'Individual work only',
              'Individual thinking, paired discussion, and sharing with the class',
              'Avoiding discussion',
              'Group work without thinking'
            ],
            correctAnswerIndex: 1,
            explanation: "Think-pair-share involves students first thinking individually, then discussing with a partner, and finally sharing their thinking with the larger group.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-think-pair-share',
          },
          {
            question: "Mathematical creativity involves:",
            options: [
              'Following procedures exactly',
              'Generating novel approaches and seeing patterns in new ways',
              'Memorizing standard methods',
              'Avoiding original thinking'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical creativity involves generating novel approaches to problems, seeing patterns in new ways, and making unexpected connections.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-creativity',
          },
          {
            question: "The 'what if' questions in mathematics help students:",
            options: [
              'Avoid deeper thinking',
              'Explore variations and develop mathematical reasoning',
              'Focus only on given problems',
              'Memorize procedures'
            ],
            correctAnswerIndex: 1,
            explanation: "What if questions encourage students to explore variations of problems, develop conjectures, and deepen their mathematical reasoning.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-what-if',
          },
          {
            question: "Mathematical equity involves:",
            options: [
              'Treating all students the same way',
              'Ensuring all students have access to high-quality mathematics learning',
              'Focusing only on advanced students',
              'Ignoring individual differences'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical equity involves ensuring all students have access to high-quality mathematics learning while respecting and responding to their diverse needs and backgrounds.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-equity',
          },
          {
            question: "The 'chalk talk' strategy involves:",
            options: [
              'Only teacher writing',
              'Students writing their thinking on the board for others to see',
              'Avoiding written communication',
              'Silent work only'
            ],
            correctAnswerIndex: 1,
            explanation: "Chalk talk involves students writing their mathematical thinking, questions, or ideas on the board, creating a visible record of their collective thinking.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-chalk-talk',
          },
          {
            question: "Mathematical wonder involves:",
            options: [
              'Accepting procedures without question',
              'Being curious about mathematical patterns and relationships',
              'Avoiding exploration',
              'Focusing only on answers'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical wonder involves cultivating curiosity about patterns, relationships, and the beauty of mathematical ideas.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-wonder',
          },
          {
            question: "The 'consolidation phase' in mathematics lessons involves:",
            options: [
              'Starting new topics',
              'Synthesizing learning and making connections',
              'Avoiding reflection',
              'Individual work only'
            ],
            correctAnswerIndex: 1,
            explanation: "The consolidation phase involves synthesizing what was learned, making connections between concepts, and reflecting on the mathematical ideas explored.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-consolidation',
          },
          {
            question: "Mathematical authority involves:",
            options: [
              'Teachers having all the answers',
              'Students developing their own mathematical authority through reasoning',
              'Blindly accepting teacher explanations',
              'Avoiding student thinking'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority involves students developing confidence in their own mathematical reasoning and not relying solely on external authority.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority',
          },
          {
            question: "The 'problem posing' approach involves:",
            options: [
              'Only solving given problems',
              'Students creating their own mathematical problems',
              'Avoiding problem creation',
              'Focusing only on standard problems'
            ],
            correctAnswerIndex: 1,
            explanation: "Problem posing involves students creating their own mathematical problems, which helps deepen their understanding and creativity.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-problem-posing',
          },
          {
            question: "Mathematical fluency involves:",
            options: [
              'Only speed of calculation',
              'Efficient, accurate, and flexible use of mathematical procedures',
              'Memorization without understanding',
              'Following procedures rigidly'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical fluency involves efficient, accurate, and flexible use of procedures, with understanding of when and how to use them.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-fluency',
          },
          {
            question: "The 'lesson study' approach involves:",
            options: [
              'Individual teacher planning',
              'Collaborative planning, teaching, and analysis of lessons',
              'Avoiding collaboration',
              'Working in isolation'
            ],
            correctAnswerIndex: 1,
            explanation: "Lesson study involves teachers collaboratively planning a lesson, one teaching it while others observe, and then analyzing the lesson together to improve practice.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-lesson-study',
          },
          {
            question: "Mathematical disposition involves:",
            options: [
              'Attitudes toward mathematics',
              'Only ability in mathematics',
              'Avoiding mathematical thinking',
              'Focusing only on procedures'
            ],
            correctAnswerIndex: 0,
            explanation: "Mathematical disposition refers to students' attitudes, beliefs, and habits of mind related to mathematics learning and problem-solving.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-disposition',
          },
          {
            question: "The 'anticipatory set' in mathematics lessons:",
            options: [
              'Introduces unrelated topics',
              'Engages students and connects to prior knowledge',
              'Avoids connections to previous learning',
              'Focuses only on new content'
            ],
            correctAnswerIndex: 1,
            explanation: "The anticipatory set engages students at the beginning of a lesson and helps connect new learning to their prior knowledge and experiences.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-anticipatory',
          },
          {
            question: "Mathematical coherence means:",
            options: [
              'Teaching isolated topics',
              'Connecting mathematical ideas within and across lessons',
              'Avoiding connections between concepts',
              'Focusing on one topic at a time'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical coherence involves connecting mathematical ideas within lessons and across the curriculum to help students see the interconnected nature of mathematics.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-coherence',
          },
          {
            question: "The 'entry point' approach in mathematics:",
            options: [
              'Has only one way to enter a topic',
              'Provides multiple entry points based on student readiness',
              'Avoids differentiation',
              'Focuses only on advanced students'
            ],
            correctAnswerIndex: 1,
            explanation: "The entry point approach provides multiple ways for students to engage with mathematical content based on their current understanding and readiness levels.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-entry-point',
          },
          {
            question: "Mathematical confidence develops through:",
            options: [
              'Avoiding challenges',
              'Success with appropriately challenging tasks and positive experiences',
              'Only easy problems',
              'Competition and comparison'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical confidence develops through experiencing success with appropriately challenging tasks and having positive mathematical experiences.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-confidence',
          },
          {
            question: "The 'rehearsal phase' in mathematics teaching:",
            options: [
              'Only practicing procedures',
              'Students practicing and consolidating understanding',
              'Avoiding practice',
              'Focusing only on new learning'
            ],
            correctAnswerIndex: 1,
            explanation: "The rehearsal phase involves students practicing mathematical concepts and skills to consolidate their understanding and develop fluency.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-rehearsal',
          },
          {
            question: "Mathematical integrity involves:",
            options: [
              'Accepting incorrect procedures',
              'Ensuring mathematical accuracy and honesty',
              'Avoiding verification',
              'Ignoring mistakes'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical integrity involves maintaining accuracy, honesty in representing work, and ensuring that mathematical claims are justified and correct.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-integrity',
          },
          {
            question: "The 'closure' phase of mathematics lessons should:",
            options: [
              'End abruptly',
              'Summarize key learning and connect to future learning',
              'Avoid reflection',
              'Focus only on unfinished work'
            ],
            correctAnswerIndex: 1,
            explanation: "The closure phase summarizes key learning points, provides a sense of accomplishment, and connects the lesson to future learning.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-closure',
          },
          {
            question: "Mathematical elegance involves:",
            options: [
              'Complicated solutions only',
              'Simple, efficient, and insightful solutions',
              'Avoiding simplicity',
              'Complex procedures'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical elegance involves finding simple, efficient, and insightful solutions that reveal the underlying beauty and structure of mathematics.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-elegance',
          },
          {
            question: "The 'advance organizer' in mathematics teaching:",
            options: [
              'Complicates learning',
              'Provides a framework for organizing new information',
              'Avoids structure',
              'Focuses only on details'
            ],
            correctAnswerIndex: 1,
            explanation: "An advance organizer provides a conceptual framework that helps students organize and make sense of new mathematical information.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-advance-organizer',
          },
          {
            question: "Mathematical resilience means:",
            options: [
              'Giving up when stuck',
              'Bouncing back from setbacks and persisting with problems',
              'Avoiding difficult problems',
              'Focusing only on success'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical resilience involves bouncing back from setbacks, viewing mistakes as learning opportunities, and persisting with challenging problems.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-resilience',
          },
          {
            question: "The 'generative learning' model in mathematics:",
            options: [
              'Focuses only on memorization',
              'Encourages students to generate their own knowledge and connections',
              'Avoids student generation',
              'Teacher-centered knowledge transmission'
            ],
            correctAnswerIndex: 1,
            explanation: "Generative learning encourages students to actively generate their own knowledge, make connections, and construct understanding rather than passively receiving information.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-generative',
          },
          {
            question: "Mathematical authenticity involves:",
            options: [
              'Using artificial problems',
              'Using real-world contexts and genuine mathematical challenges',
              'Avoiding real-world connections',
              'Focusing only on textbook problems'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authenticity involves using real-world contexts and genuine mathematical challenges that reflect how mathematics is used in authentic situations.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authenticity',
          },
          {
            question: "The 'cognitive apprenticeship' model in mathematics involves:",
            options: [
              'Students working alone',
              'Modeling expert thinking processes and gradually releasing responsibility',
              'Avoiding modeling',
              'Focusing only on procedures'
            ],
            correctAnswerIndex: 1,
            explanation: "Cognitive apprenticeship involves teachers modeling expert thinking processes and gradually transferring responsibility to students as they develop expertise.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-apprenticeship',
          },
          {
            question: "Mathematical empowerment through:",
            options: [
              'Teacher control',
              'Students having ownership of their mathematical learning journey',
              'Avoiding student agency',
              'Focusing only on correct answers'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment involves students having ownership of their learning journey, making choices, and developing confidence in their mathematical abilities.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-2',
          },
          {
            question: "The 'lesson synthesis' phase involves:",
            options: [
              'Starting new topics',
              'Students synthesizing their learning and articulating key understandings',
              'Avoiding reflection',
              'Individual work only'
            ],
            correctAnswerIndex: 1,
            explanation: "Lesson synthesis involves students bringing together their learning, articulating key understandings, and making connections between concepts.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-synthesis',
          },
          {
            question: "Mathematical curiosity can be fostered by:",
            options: [
              'Providing all answers',
              'Asking open-ended questions and encouraging exploration',
              'Avoiding questions',
              'Focusing only on procedures'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical curiosity is fostered by asking open-ended questions, encouraging exploration, and creating opportunities for students to wonder about mathematical relationships.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-curiosity',
          },
          {
            question: "The 'mathematical practices' framework emphasizes:",
            options: [
              'Only content knowledge',
              'Process standards like reasoning, problem-solving, and communication',
              'Avoiding processes',
              'Focusing only on answers'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical practices framework emphasizes process standards such as reasoning quantitatively, constructing viable arguments, and attending to precision.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-practices',
          },
          {
            question: "Mathematical transfer involves:",
            options: [
              'Isolated learning',
              'Applying mathematical knowledge to new situations',
              'Avoiding new applications',
              'Focusing only on taught content'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical transfer involves students applying their mathematical knowledge and skills to new and unfamiliar situations.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-transfer',
          },
          {
            question: "The 'productive disposition' toward mathematics includes:",
            options: [
              'Viewing mathematics as a collection of unrelated facts',
              'Seeing mathematics as sensible, useful, and worthwhile',
              'Avoiding mathematical connections',
              'Focusing only on procedures'
            ],
            correctAnswerIndex: 1,
            explanation: "A productive disposition toward mathematics involves seeing mathematics as sensible, useful, and worthwhile, with connections between concepts and applications.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-disposition-2',
          },
          {
            question: "Mathematical justification involves:",
            options: [
              'Stating answers without explanation',
              'Providing mathematical reasons for solutions and claims',
              'Avoiding explanations',
              'Memorizing without understanding'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical justification involves providing mathematical reasons, evidence, and logical arguments to support solutions and mathematical claims.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-justification',
          },
          {
            question: "The 'lesson warmup' in mathematics should:",
            options: [
              'Be unrelated to the lesson',
              'Activate prior knowledge and connect to new learning',
              'Avoid connections to previous learning',
              'Focus only on review'
            ],
            correctAnswerIndex: 1,
            explanation: "The lesson warmup activates students' prior knowledge and helps make connections to the new mathematical content being introduced.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-warmup',
          },
          {
            question: "Mathematical generalization involves:",
            options: [
              'Focusing only on specific cases',
              'Recognizing patterns and creating general rules or formulas',
              'Avoiding patterns',
              'Memorizing individual cases'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical generalization involves recognizing patterns in specific cases and creating general rules, formulas, or principles that apply more broadly.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-generalization',
          },
          {
            question: "The 'mathematical community' in the classroom involves:",
            options: [
              'Individual work only',
              'Students participating in mathematical conversations and sharing ideas',
              'Avoiding discussion',
              'Competition among students'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical community involves students engaging in mathematical conversations, sharing ideas, and learning from each other's thinking.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-community-2',
          },
          {
            question: "Mathematical visualization involves:",
            options: [
              'Avoiding diagrams and pictures',
              'Using visual representations to understand mathematical concepts',
              'Focusing only on symbolic representations',
              'Ignoring visual thinking'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical visualization involves using diagrams, graphs, pictures, and other visual representations to understand and communicate mathematical ideas.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-visualization',
          },
          {
            question: "The 'consolidation activity' in mathematics lessons:",
            options: [
              'Introduces new content',
              'Helps students organize and solidify their understanding',
              'Avoids review',
              'Focuses only on practice'
            ],
            correctAnswerIndex: 1,
            explanation: "Consolidation activities help students organize their thinking, solidify their understanding, and make connections between mathematical ideas.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-consolidation-2',
          },
          {
            question: "Mathematical metacognition involves:",
            options: [
              'Unconscious thinking',
              'Thinking about one\'s own mathematical thinking processes',
              'Avoiding reflection',
              'Following procedures blindly'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical metacognition involves students thinking about their own thinking processes, monitoring their understanding, and adjusting their strategies.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-metacognition-2',
          },
          {
            question: "The 'mathematical task analysis' involves:",
            options: [
              'Solving problems quickly',
              'Analyzing the mathematical demands and potential of tasks',
              'Avoiding task analysis',
              'Focusing only on answers'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical task analysis involves examining the mathematical demands of tasks, their potential for developing understanding, and how they might be modified.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-task-analysis',
          },
          {
            question: "Mathematical discourse communities develop when:",
            options: [
              'Students work silently',
              'Students engage in mathematical conversations with shared norms',
              'Avoiding discussion',
              'Focusing only on individual work'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse communities develop when students engage in mathematical conversations that follow shared norms of explanation, justification, and respectful critique.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-community',
          },
          {
            question: "The 'mathematical autobiography' assignment helps students:",
            options: [
              'Write fiction stories',
              'Reflect on their relationship with mathematics and learning experiences',
              'Avoid self-reflection',
              'Focus only on current abilities'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical autobiography assignments help students reflect on their past experiences with mathematics, their beliefs about learning mathematics, and their mathematical identity.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-autobiography-2',
          },
          {
            question: "Mathematical empowerment manifests as:",
            options: [
              'Dependence on teachers',
              'Students taking ownership of their mathematical learning',
              'Avoiding mathematical challenges',
              'Focusing only on easy problems'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment manifests as students taking ownership of their learning, making mathematical choices, and developing confidence in their abilities.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-3',
          },
          {
            question: "The 'lesson debrief' in mathematics teaching involves:",
            options: [
              'Criticizing student work',
              'Reflecting on what worked and what could be improved',
              'Avoiding reflection',
              'Focusing only on successes'
            ],
            correctAnswerIndex: 1,
            explanation: "Lesson debrief involves teachers and students reflecting on the lesson, discussing what worked well, and identifying areas for improvement.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-debrief',
          },
          {
            question: "Mathematical sense-making involves:",
            options: [
              'Accepting procedures without understanding',
              'Actively working to make sense of mathematical ideas',
              'Avoiding deep understanding',
              'Focusing only on memorization'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making involves students actively working to understand mathematical ideas, make connections, and see the logic behind procedures and concepts.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making',
          },
          {
            question: "The 'mathematical story' approach involves:",
            options: [
              'Avoiding narratives',
              'Using stories to introduce and develop mathematical concepts',
              'Focusing only on abstract concepts',
              'Ignoring real-world connections'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical story approach uses narratives and story contexts to introduce, develop, and make mathematical concepts more accessible and meaningful.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story',
          },
          {
            question: "Mathematical authority distribution means:",
            options: [
              'Only teachers have mathematical authority',
              'Sharing mathematical authority between teachers and students',
              'Students having no authority',
              'Avoiding student input'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority distribution involves sharing authority between teachers and students, with students developing their own mathematical authority through reasoning and justification.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-2',
          },
          {
            question: "The 'mathematical dilemma' approach involves:",
            options: [
              'Presenting problems with single solutions',
              'Presenting situations that require mathematical decision-making',
              'Avoiding decision-making',
              'Focusing only on calculations'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical dilemma approach presents situations that require students to make mathematical decisions, weigh options, and justify their choices.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-dilemma',
          },
          {
            question: "Mathematical resilience building involves:",
            options: [
              'Protecting students from all challenges',
              'Teaching strategies for overcoming mathematical setbacks',
              'Avoiding difficult problems',
              'Focusing only on success'
            ],
            correctAnswerIndex: 1,
            explanation: "Building mathematical resilience involves teaching students strategies for overcoming setbacks, persisting with challenging problems, and viewing difficulties as opportunities to learn.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-resilience-2',
          },
          {
            question: "The 'mathematical conversation' protocol includes:",
            options: [
              'Working silently',
              'Taking turns explaining thinking and asking questions',
              'Avoiding questions',
              'Focusing only on answers'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical conversation protocols involve students taking turns to explain their thinking, ask questions, and build on each other's ideas.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-conversation',
          },
          {
            question: "Mathematical empowerment assessment involves:",
            options: [
              'Only testing computational skills',
              'Evaluating students\' confidence and ownership of their learning',
              'Ignoring student agency',
              'Focusing only on grades'
            ],
            correctAnswerIndex: 1,
            explanation: "Assessing mathematical empowerment involves evaluating students' confidence in their mathematical abilities, ownership of their learning, and willingness to engage with mathematical challenges.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-assessment',
          },
          {
            question: "The 'mathematical noticing routine' helps students:",
            options: [
              'Ignore mathematical features',
              'Develop attention to mathematical patterns and relationships',
              'Avoid pattern recognition',
              'Focus only on procedures'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical noticing routine helps students develop their ability to attend to and articulate mathematical patterns, relationships, and structural features.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-routine',
          },
          {
            question: "Mathematical discourse facilitation involves:",
            options: [
              'Controlling all conversation',
              'Creating conditions for productive mathematical discussions',
              'Avoiding student talk',
              'Focusing only on teacher explanations'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation involves creating the conditions, norms, and structures that support productive mathematical discussions among students.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation',
          },
          {
            question: "The 'mathematical thinking protocol' includes:",
            options: [
              'Only stating answers',
              'Describing thinking, providing evidence, and making connections',
              'Avoiding explanations',
              'Focusing only on procedures'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking protocols involve students describing their thinking processes, providing evidence for their claims, and making connections between ideas.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-protocol',
          },
          {
            question: "Mathematical agency development involves:",
            options: [
              'Students having no choices',
              'Students making decisions about their mathematical learning',
              'Avoiding student decision-making',
              'Focusing only on teacher directions'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency development involves students making decisions about strategies, representations, and approaches to their mathematical learning.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-2',
          },
          {
            question: "The 'mathematical story circle' involves:",
            options: [
              'Reading stories without mathematics',
              'Students creating and sharing mathematical stories',
              'Avoiding narrative elements',
              'Focusing only on calculations'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical story circle involves students creating and sharing mathematical stories that connect narrative elements with mathematical concepts.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle',
          },
          {
            question: "Mathematical authority negotiation means:",
            options: [
              'Teachers maintaining absolute authority',
              'Students and teachers collaboratively determining mathematical validity',
              'Avoiding discussion of validity',
              'Focusing only on teacher judgments'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation involves students and teachers collaboratively determining what counts as valid mathematical reasoning and solutions.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation',
          },
          {
            question: "The 'mathematical sense-making framework' includes:",
            options: [
              'Accepting without understanding',
              'Exploring, questioning, and justifying mathematical ideas',
              'Avoiding exploration',
              'Focusing only on memorization'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical sense-making framework involves students actively exploring mathematical ideas, asking questions, and justifying their understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-framework',
          },
          {
            question: "Mathematical empowerment indicators include:",
            options: [
              'Dependence on external validation',
              'Students initiating mathematical discussions and investigations',
              'Avoiding mathematical engagement',
              'Focusing only on assigned work'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment indicators include students initiating mathematical discussions, pursuing their own investigations, and taking ownership of their learning.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-indicators',
          },
          {
            question: "The 'mathematical discourse continuum' ranges from:",
            options: [
              'Silent work to collaborative discussion',
              'Only individual thinking',
              'Avoiding all communication',
              'Focusing only on answers'
            ],
            correctAnswerIndex: 0,
            explanation: "The mathematical discourse continuum ranges from silent individual work to collaborative discussions where students share, question, and build on each other's mathematical ideas.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-continuum',
          },
          {
            question: "Mathematical noticing as assessment involves:",
            options: [
              'Testing only final answers',
              'Observing students\' attention to mathematical features during activities',
              'Avoiding observation',
              'Focusing only on written work'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing as assessment involves observing and documenting how students attend to mathematical patterns, relationships, and structural features during activities.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-assessment',
          },
          {
            question: "The 'mathematical thinking interview' involves:",
            options: [
              'Testing computational speed',
              'In-depth conversations about students\' mathematical understanding',
              'Avoiding conversation',
              'Focusing only on correct answers'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking interviews involve in-depth conversations where students explain their mathematical understanding, reasoning, and problem-solving processes.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-interview',
          },
          {
            question: "Mathematical agency enactment involves:",
            options: [
              'Following all teacher directions',
              'Students making and justifying mathematical choices',
              'Avoiding decision-making',
              'Focusing only on procedures'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency enactment involves students actively making mathematical choices and justifying their decisions based on mathematical reasoning.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-enactment',
          },
          {
            question: "The 'mathematical story workshop' involves:",
            options: [
              'Reading pre-written stories',
              'Students creating mathematical narratives and stories',
              'Avoiding creative elements',
              'Focusing only on facts'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical story workshop involves students creating their own mathematical narratives and stories that incorporate mathematical concepts and relationships.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-workshop',
          },
          {
            question: "Mathematical authority distribution assessment involves:",
            options: [
              'Only teacher evaluations',
              'Evaluating how authority is shared in mathematical discussions',
              'Avoiding assessment of discussions',
              'Focusing only on individual work'
            ],
            correctAnswerIndex: 1,
            explanation: "Assessing mathematical authority distribution involves evaluating how mathematical authority is shared between teachers and students during discussions and problem-solving.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-distribution',
          },
          {
            question: "The 'mathematical sense-making interview' focuses on:",
            options: [
              'Testing memorization',
              'Understanding students\' sense-making processes and strategies',
              'Avoiding process understanding',
              'Focusing only on products'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical sense-making interview focuses on understanding the processes and strategies students use to make sense of mathematical ideas and problems.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-interview',
          },
          {
            question: "Mathematical empowerment trajectories involve:",
            options: [
              'Static levels of engagement',
              'Students progressing from dependence to independence in their mathematical thinking',
              'Avoiding progression',
              'Focusing only on basic skills'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment trajectories involve students progressing from dependence on others to independence in their mathematical thinking and decision-making.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-trajectories',
          },
          {
            question: "The 'mathematical discourse observation protocol' includes:",
            options: [
              'Only counting words spoken',
              'Analyzing the quality and nature of mathematical discussions',
              'Avoiding analysis',
              'Focusing only on participation'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical discourse observation protocol involves analyzing the quality, nature, and characteristics of mathematical discussions in the classroom.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-observation',
          },
          {
            question: "Mathematical noticing development involves:",
            options: [
              'Teaching students what to notice',
              'Students learning to notice mathematical features independently',
              'Avoiding noticing skills',
              'Focusing only on teacher-directed noticing'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing development involves helping students learn to independently notice and articulate important mathematical features, patterns, and relationships.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-development',
          },
          {
            question: "The 'mathematical thinking profile' includes:",
            options: [
              'Only test scores',
              'A comprehensive view of students\' mathematical thinking dispositions and abilities',
              'Avoiding thinking assessment',
              'Focusing only on computational skills'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical thinking profile provides a comprehensive view of students' mathematical thinking dispositions, problem-solving abilities, and conceptual understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-profile',
          },
          {
            question: "Mathematical agency indicators include:",
            options: [
              'Passive acceptance of methods',
              'Students questioning, choosing strategies, and justifying decisions',
              'Avoiding decision-making',
              'Following procedures blindly'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency indicators include students questioning standard approaches, choosing their own strategies, and justifying their mathematical decisions.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-indicators',
          },
          {
            question: "The 'mathematical story circle protocol' involves:",
            options: [
              'Reading stories silently',
              'Students sharing mathematical stories and responding thoughtfully',
              'Avoiding sharing',
              'Focusing only on listening'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical story circle protocol involves students sharing their mathematical stories and responding thoughtfully to each other's narratives and mathematical ideas.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-protocol',
          },
          {
            question: "Mathematical authority negotiation practices include:",
            options: [
              'Teachers making all judgments',
              'Students participating in determining mathematical validity',
              'Avoiding student participation',
              'Focusing only on teacher authority'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation practices involve students actively participating in discussions about what constitutes valid mathematical reasoning and solutions.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-practices',
          },
          {
            question: "The 'mathematical sense-making framework assessment' evaluates:",
            options: [
              'Only final answers',
              'Students\' ability to explore, question, and justify mathematical ideas',
              'Avoiding process evaluation',
              'Focusing only on memorization'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical sense-making framework assessment evaluates students' ability to actively explore mathematical ideas, ask questions, and provide justifications for their understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-assessment',
          },
          {
            question: "Mathematical empowerment portfolios include:",
            options: [
              'Only test scores and grades',
              'Evidence of student-initiated mathematical work and reflections',
              'Avoiding student work samples',
              'Focusing only on teacher-assigned work'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment portfolios include evidence of student-initiated mathematical investigations, projects, and reflections on their mathematical learning journey.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-portfolios',
          },
          {
            question: "The 'mathematical discourse participation framework' considers:",
            options: [
              'Only speaking frequency',
              'Quality of contributions and respect for diverse ideas',
              'Avoiding quality assessment',
              'Focusing only on quantity'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical discourse participation framework considers both the quality of mathematical contributions and the respect shown for diverse mathematical ideas and approaches.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-participation',
          },
          {
            question: "Mathematical noticing as pedagogy involves:",
            options: [
              'Teachers doing all the noticing',
              'Teachers modeling noticing and helping students develop noticing skills',
              'Avoiding noticing instruction',
              'Focusing only on content delivery'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing as pedagogy involves teachers explicitly modeling noticing strategies and helping students develop their own mathematical noticing abilities.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-pedagogy',
          },
          {
            question: "The 'mathematical thinking continuum' helps teachers:",
            options: [
              'Categorize students permanently',
              'Understand students\' current thinking and plan next steps',
              'Avoid progression planning',
              'Focus only on current abilities'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical thinking continuum helps teachers understand students' current levels of mathematical thinking and plan appropriate next steps for development.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-continuum',
          },
          {
            question: "Mathematical agency observation focuses on:",
            options: [
              'Only correct answers',
              'How students make mathematical choices and take ownership',
              'Avoiding choice observation',
              'Focusing only on compliance'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency observation focuses on how students make mathematical choices, take ownership of their learning, and demonstrate independence in their mathematical thinking.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-observation',
          },
          {
            question: "The 'mathematical story workshop assessment' evaluates:",
            options: [
              'Only writing mechanics',
              'Mathematical understanding conveyed through narrative',
              'Avoiding mathematical content',
              'Focusing only on story quality'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical story workshop assessment evaluates how well students convey mathematical understanding and concepts through their narrative creations.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-workshop-assessment',
          },
          {
            question: "Mathematical authority distribution patterns show:",
            options: [
              'Fixed authority structures',
              'How authority shifts between teachers and students during activities',
              'Avoiding authority shifts',
              'Focusing only on teacher authority'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority distribution patterns show how authority dynamically shifts between teachers and students during different phases of mathematical activities.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-patterns',
          },
          {
            question: "The 'mathematical sense-making trajectory' tracks:",
            options: [
              'Only final understanding',
              'Development of sense-making strategies over time',
              'Avoiding development tracking',
              'Focusing only on current performance'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical sense-making trajectory tracks how students develop and refine their sense-making strategies and approaches over time.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-trajectory',
          },
          {
            question: "Mathematical empowerment conferences involve:",
            options: [
              'Only teacher presentations',
              'Students presenting their mathematical work and reflecting on their learning',
              'Avoiding student presentations',
              'Focusing only on teacher feedback'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment conferences involve students presenting their mathematical work, explaining their thinking, and reflecting on their learning process.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-conferences',
          },
          {
            question: "The 'mathematical discourse development framework' supports:",
            options: [
              'Maintaining current discourse levels',
              'Progression from basic to sophisticated mathematical discussions',
              'Avoiding discourse development',
              'Focusing only on basic communication'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical discourse development framework supports students progressing from basic mathematical communication to sophisticated discussions involving justification and critique.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-development',
          },
          {
            question: "Mathematical noticing as formative assessment involves:",
            options: [
              'Only end-of-unit tests',
              'Ongoing observation of students\' noticing during regular activities',
              'Avoiding ongoing assessment',
              'Focusing only on summative assessment'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing as formative assessment involves ongoing observation and documentation of students' noticing abilities during regular classroom activities.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-formative',
          },
          {
            question: "The 'mathematical thinking conference' protocol includes:",
            options: [
              'Only teacher questioning',
              'Structured conversations about students\' mathematical thinking',
              'Avoiding structured conversations',
              'Focusing only on answers'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical thinking conference protocol involves structured, focused conversations between teachers and students about specific aspects of mathematical thinking.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-conference',
          },
          {
            question: "Mathematical agency facilitation involves:",
            options: [
              'Making all decisions for students',
              'Creating opportunities for students to make mathematical choices',
              'Avoiding student choices',
              'Focusing only on teacher decisions'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation involves teachers creating classroom conditions and structures that enable students to make meaningful mathematical choices and decisions.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation',
          },
          {
            question: "The 'mathematical story circle facilitation' requires:",
            options: [
              'Teacher control of all discussion',
              'Teachers guiding productive sharing and discussion of mathematical stories',
              'Avoiding guidance',
              'Focusing only on individual work'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation involves teachers guiding the sharing process to ensure productive discussions and connections between students' mathematical stories.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation',
          },
          {
            question: "Mathematical authority negotiation facilitation involves:",
            options: [
              'Teachers maintaining absolute authority',
              'Teachers creating spaces for students to participate in validity discussions',
              'Avoiding validity discussions',
              'Focusing only on teacher judgments'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation involves teachers creating classroom spaces where students can actively participate in discussions about mathematical validity and justification.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation',
          },
          {
            question: "The 'mathematical sense-making facilitation framework' includes:",
            options: [
              'Providing all answers',
              'Asking probing questions and providing strategic support',
              'Avoiding questions',
              'Focusing only on direct instruction'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical sense-making facilitation framework involves asking probing questions, providing strategic support, and creating opportunities for students to develop their own understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation',
          },
          {
            question: "Mathematical empowerment facilitation involves:",
            options: [
              'Maintaining student dependence',
              'Gradually transferring ownership and responsibility to students',
              'Avoiding responsibility transfer',
              'Focusing only on teacher control'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation involves gradually transferring ownership and responsibility for mathematical learning from teachers to students.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation',
          },
          {
            question: "The 'mathematical discourse facilitation continuum' ranges from:",
            options: [
              'Teacher control to student independence',
              'No facilitation to expert facilitation',
              'Avoiding facilitation',
              'Focusing only on basic management'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical discourse facilitation continuum ranges from providing no facilitation to expertly facilitating rich mathematical discussions that develop students' thinking.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-continuum',
          },
          {
            question: "Mathematical noticing facilitation involves:",
            options: [
              'Pointing out everything to students',
              'Modeling noticing strategies and gradually releasing responsibility',
              'Avoiding modeling',
              'Focusing only on content coverage'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation involves teachers modeling effective noticing strategies and gradually releasing responsibility to students as they develop their own noticing abilities.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation',
          },
          {
            question: "The 'mathematical thinking facilitation protocol' includes:",
            options: [
              'Only providing answers',
              'Listening attentively and asking purposeful questions',
              'Avoiding listening',
              'Focusing only on corrections'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical thinking facilitation protocol involves listening attentively to students' thinking and asking purposeful questions to deepen their understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation',
          },
          {
            question: "Mathematical agency facilitation strategies include:",
            options: [
              'Making all choices for students',
              'Offering choice in strategies, representations, and solution methods',
              'Avoiding choice opportunities',
              'Focusing only on single methods'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation strategies involve offering students choices in strategies, representations, and solution methods to develop their ownership of mathematical learning.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-strategies',
          },
          {
            question: "The 'mathematical story circle facilitation strategies' include:",
            options: [
              'Controlling all contributions',
              'Establishing norms for sharing and establishing connections between stories',
              'Avoiding norms',
              'Focusing only on individual stories'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation strategies involve establishing norms for sharing and helping students make connections between different mathematical stories and ideas.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-strategies',
          },
          {
            question: "Mathematical authority negotiation facilitation requires:",
            options: [
              'Maintaining teacher authority',
              'Creating opportunities for students to question and justify mathematical claims',
              'Avoiding questioning',
              'Focusing only on acceptance'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation requires creating classroom opportunities where students can question mathematical claims and engage in discussions about validity.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-requires',
          },
          {
            question: "The 'mathematical sense-making facilitation approach' emphasizes:",
            options: [
              'Direct instruction only',
              'Supporting students\' own sense-making processes',
              'Avoiding student processes',
              'Focusing only on teacher explanations'
            ],
            correctAnswerIndex: 1,
            explanation: "The mathematical sense-making facilitation approach emphasizes supporting and enhancing students' own sense-making processes rather than providing direct instruction.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-approach',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Maintaining dependence',
              'Encouraging student-initiated questions and investigations',
              'Avoiding student initiation',
              'Focusing only on assigned tasks'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques include encouraging students to initiate their own questions, investigations, and mathematical explorations.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-techniques',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Minimizing student talk',
              'Using wait time, revoicing, and pressing for justification',
              'Avoiding techniques',
              'Focusing only on speed'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques include using wait time for thinking, revoicing student ideas, and pressing for mathematical justification and reasoning.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-techniques',
          },
          {
            question: "Mathematical noticing facilitation techniques involve:",
            options: [
              'Doing all noticing for students',
              'Asking \'What do you notice?\' and \'What does that tell you mathematically?\'',
              'Avoiding noticing questions',
              'Focusing only on procedures'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking purposeful questions like 'What do you notice?' and 'What does that tell you mathematically?' to develop students' noticing abilities.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-techniques',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Providing immediate answers',
              'Asking \'How did you think about that?\' and \'Can you explain your reasoning?\'',
              'Avoiding thinking questions',
              'Focusing only on answers'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'How did you think about that?' and 'Can you explain your reasoning?' to make thinking visible.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-techniques',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Prescribing all methods',
              'Asking \'What strategy would you like to try?\' and \'How would you like to show your work?\'',
              'Avoiding choice questions',
              'Focusing only on single approaches'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What strategy would you like to try?' and 'How would you like to show your work?' to promote student choice.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-techniques',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Controlling all responses',
              'Asking \'How does this connect to your story?\' and \'What mathematical ideas do you see here?\'',
              'Avoiding connection questions',
              'Focusing only on individual stories'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'How does this connect to your story?' and 'What mathematical ideas do you see here?' to build connections.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-techniques',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all claims',
              'Asking \'Does that make sense mathematically?\' and \'How could we check this?\'',
              'Avoiding validity questions',
              'Focusing only on agreement'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'Does that make sense mathematically?' and 'How could we check this?' to engage students in validity discussions.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-techniques',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing complete solutions',
              'Asking \'What do you understand so far?\' and \'What questions do you have?\'',
              'Avoiding understanding questions',
              'Focusing only on completion'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What do you understand so far?' and 'What questions do you have?' to support sense-making processes.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-techniques',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Doing all the work for students',
              'Asking \'What do you want to investigate?\' and \'How can you find out?\'',
              'Avoiding investigation questions',
              'Focusing only on assigned work'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What do you want to investigate?' and 'How can you find out?' to encourage student-initiated learning.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Ending discussions quickly',
              'Asking \'Who would like to add to that?\' and \'Do you agree or disagree, and why?\'',
              'Avoiding follow-up questions',
              'Focusing only on initial responses'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'Who would like to add to that?' and 'Do you agree or disagree, and why?' to deepen discussions.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Pointing out everything',
              'Asking \'What patterns do you see?\' and \'How are these related?\'',
              'Avoiding pattern questions',
              'Focusing only on differences'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What patterns do you see?' and 'How are these related?' to develop students' noticing abilities.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting first responses',
              'Asking \'Can you say more about that?\' and \'What would happen if...?\'',
              'Avoiding elaboration questions',
              'Focusing only on correct answers'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'Can you say more about that?' and 'What would happen if...?' to deepen mathematical thinking.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Choosing all methods for students',
              'Asking \'Which tool would help?\' and \'What do you think comes next?\'',
              'Avoiding choice questions',
              'Focusing only on teacher choices'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'Which tool would help?' and 'What do you think comes next?' to promote student decision-making.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Reading all stories aloud',
              'Asking \'What surprised you?\' and \'How does this change your thinking?\'',
              'Avoiding reflection questions',
              'Focusing only on story content'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'What surprised you?' and 'How does this change your thinking?' to encourage reflection and connection-making.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all explanations',
              'Asking \'What evidence supports this?\' and \'How do we know this is true?\'',
              'Avoiding evidence questions',
              'Focusing only on agreement'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What evidence supports this?' and 'How do we know this is true?' to engage students in validity discussions.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing all explanations',
              'Asking \'What does this remind you of?\' and \'How does this connect to what we did before?\'',
              'Avoiding connection questions',
              'Focusing only on new content'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What does this remind you of?' and 'How does this connect to what we did before?' to build connections.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Assigning all work',
              'Asking \'What interests you about this?\' and \'How would you like to explore this?\'',
              'Avoiding interest questions',
              'Focusing only on requirements'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What interests you about this?' and 'How would you like to explore this?' to tap into student interests.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-2',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Moving quickly through responses',
              'Asking \'Can you give an example?\' and \'How is this different from...?\'',
              'Avoiding comparison questions',
              'Focusing only on similarities'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'Can you give an example?' and 'How is this different from...?' to deepen understanding and make connections.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-2',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Highlighting everything',
              'Asking \'What stays the same?\' and \'What changes?\'',
              'Avoiding change questions',
              'Focusing only on constants'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What stays the same?' and 'What changes?' to help students notice important mathematical features.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-2',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting brief responses',
              'Asking \'Why do you think that?\' and \'What made you choose that strategy?\'',
              'Avoiding reasoning questions',
              'Focusing only on methods'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'Why do you think that?' and 'What made you choose that strategy?' to uncover reasoning.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-2',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Directing all actions',
              'Asking \'What would you do differently?\' and \'How could you check your work?\'',
              'Avoiding reflection questions',
              'Focusing only on completion'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What would you do differently?' and 'How could you check your work?' to encourage ownership and self-monitoring.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-2',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Ending discussions early',
              'Asking \'What new questions does this raise?\' and \'How has your thinking changed?\'',
              'Avoiding new questions',
              'Focusing only on current understanding'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'What new questions does this raise?' and 'How has your thinking changed?' to extend thinking.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-2',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all approaches',
              'Asking \'Is there another way to think about this?\' and \'What would convince you?\'',
              'Avoiding alternative questions',
              'Focusing only on single approaches'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'Is there another way to think about this?' and 'What would convince you?' to explore multiple perspectives.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-2',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing immediate help',
              'Asking \'What do you already know that might help?\' and \'What have you tried so far?\'',
              'Avoiding prior knowledge questions',
              'Focusing only on new information'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What do you already know that might help?' and 'What have you tried so far?' to leverage existing understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-2',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Providing all solutions',
              'Asking \'What do you wonder about?\' and \'How might you find out?\'',
              'Avoiding wonder questions',
              'Focusing only on known content'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What do you wonder about?' and 'How might you find out?' to spark curiosity and initiative.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-3',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Accepting all contributions equally',
              'Asking \'How does this relate to our earlier discussion?\' and \'What evidence do you have?\'',
              'Avoiding connection questions',
              'Focusing only on current ideas'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'How does this relate to our earlier discussion?' and 'What evidence do you have?' to build coherent discussions.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-3',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Pointing out all features',
              'Asking \'What do you notice about the numbers?\' and \'What do you notice about the shapes?\'',
              'Avoiding specific noticing',
              'Focusing only on general observations'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking specific questions like 'What do you notice about the numbers?' and 'What do you notice about the shapes?' to focus attention.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-3',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting all explanations',
              'Asking \'How did you get started?\' and \'What would happen if you changed this?\'',
              'Avoiding process questions',
              'Focusing only on endpoints'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'How did you get started?' and 'What would happen if you changed this?' to explore thinking processes.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-3',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Making all decisions',
              'Asking \'What tools do you want to use?\' and \'How will you know when you\'re done?\'',
              'Avoiding tool questions',
              'Focusing only on teacher choices'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What tools do you want to use?' and 'How will you know when you're done?' to promote student decision-making.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-3',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Reading all responses',
              'Asking \'Whose story is similar to yours?\' and \'How are they different?\'',
              'Avoiding comparison questions',
              'Focusing only on individual stories'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'Whose story is similar to yours?' and 'How are they different?' to encourage comparison and connection-making.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-3',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting first answers',
              'Asking \'What would prove this wrong?\' and \'How certain are you?\'',
              'Avoiding certainty questions',
              'Focusing only on agreement'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What would prove this wrong?' and 'How certain are you?' to encourage critical thinking about validity.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-3',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing complete explanations',
              'Asking \'What would you expect to happen?\' and \'Does this match your expectation?\'',
              'Avoiding expectation questions',
              'Focusing only on results'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What would you expect to happen?' and 'Does this match your expectation?' to develop prediction and verification skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-3',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Assigning all investigations',
              'Asking \'What question would you like to explore?\' and \'How will you share your findings?\'',
              'Avoiding exploration questions',
              'Focusing only on assigned questions'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What question would you like to explore?' and 'How will you share your findings?' to encourage student-initiated investigations.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-4',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Accepting all responses',
              'Asking \'What do others think about that?\' and \'How might we combine these ideas?\'',
              'Avoiding synthesis questions',
              'Focusing only on individual responses'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'What do others think about that?' and 'How might we combine these ideas?' to build collective understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-4',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Noticing everything equally',
              'Asking \'What seems important here?\' and \'Why do you think that matters?\'',
              'Avoiding importance questions',
              'Focusing only on obvious features'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What seems important here?' and 'Why do you think that matters?' to develop selective attention to key mathematical features.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-4',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting surface-level responses',
              'Asking \'What are you assuming?\' and \'How does this connect to the problem?\'',
              'Avoiding assumption questions',
              'Focusing only on procedures'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'What are you assuming?' and 'How does this connect to the problem?' to deepen understanding of thinking processes.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-4',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Directing all student actions',
              'Asking \'What success would look like?\' and \'How will you measure your progress?\'',
              'Avoiding success questions',
              'Focusing only on completion'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What success would look like?' and 'How will you measure your progress?' to help students set their own goals.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-4',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Ending after each story',
              'Asking \'How could we continue this story?\' and \'What might happen next mathematically?\'',
              'Avoiding extension questions',
              'Focusing only on completed stories'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'How could we continue this story?' and 'What might happen next mathematically?' to extend mathematical thinking.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-4',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all claims equally',
              'Asking \'What criteria would make this convincing?\' and \'How might we test this?\'',
              'Avoiding criteria questions',
              'Focusing only on acceptance'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What criteria would make this convincing?' and 'How might we test this?' to establish standards for mathematical validity.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-4',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing all interpretations',
              'Asking \'What does this represent?\' and \'How does this model the situation?\'',
              'Avoiding representation questions',
              'Focusing only on calculations'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What does this represent?' and 'How does this model the situation?' to connect representations to meaning.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-4',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Providing all directions',
              'Asking \'What challenges interest you?\' and \'How might you overcome them?\'',
              'Avoiding challenge questions',
              'Focusing only on easy tasks'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What challenges interest you?' and 'How might you overcome them?' to encourage engagement with appropriate challenges.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-5',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Accepting all explanations',
              'Asking \'What would strengthen this argument?\' and \'How does this compare to other solutions?\'',
              'Avoiding argument questions',
              'Focusing only on agreement'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'What would strengthen this argument?' and 'How does this compare to other solutions?' to develop mathematical argumentation.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-5',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Noticing everything simultaneously',
              'Asking \'What catches your attention?\' and \'What makes you think that?\'',
              'Avoiding attention questions',
              'Focusing only on obvious features'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What catches your attention?' and 'What makes you think that?' to develop focused attention to mathematical features.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-5',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting all approaches',
              'Asking \'What would be a different way?\' and \'Why might that work?\'',
              'Avoiding alternative questions',
              'Focusing only on one approach'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'What would be a different way?' and 'Why might that work?' to encourage flexible thinking.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-5',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Making all choices for students',
              'Asking \'What resources would help?\' and \'Who might assist you?\'',
              'Avoiding resource questions',
              'Focusing only on independent work'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What resources would help?' and 'Who might assist you?' to help students access appropriate support.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-5',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Reading all stories silently',
              'Asking \'What pattern do you see across stories?\' and \'How do these stories connect?\'',
              'Avoiding pattern questions',
              'Focusing only on individual elements'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'What pattern do you see across stories?' and 'How do these stories connect?' to identify collective patterns.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-5',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all perspectives',
              'Asking \'What makes this mathematically sound?\' and \'How do we know this is reliable?\'',
              'Avoiding soundness questions',
              'Focusing only on opinions'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What makes this mathematically sound?' and 'How do we know this is reliable?' to establish mathematical criteria.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-5',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing all meanings',
              'Asking \'What does this mean in the context?\' and \'How does this apply here?\'',
              'Avoiding context questions',
              'Focusing only on isolated meanings'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What does this mean in the context?' and 'How does this apply here?' to connect mathematics to situations.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-5',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Assigning all projects',
              'Asking \'What would you like to create?\' and \'How will you present your thinking?\'',
              'Avoiding creation questions',
              'Focusing only on consumption'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What would you like to create?' and 'How will you present your thinking?' to encourage mathematical production.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-6',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Ending discussions abruptly',
              'Asking \'What have we learned?\' and \'How can we apply this?\'',
              'Avoiding application questions',
              'Focusing only on discussion'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'What have we learned?' and 'How can we apply this?' to synthesize and apply learning.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-6',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Noticing everything equally',
              'Asking \'What seems significant?\' and \'What might be the most important feature?\'',
              'Avoiding significance questions',
              'Focusing only on quantity'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What seems significant?' and 'What might be the most important feature?' to develop prioritization skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-6',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting all final answers',
              'Asking \'How confident are you?\' and \'What would make you more certain?\'',
              'Avoiding confidence questions',
              'Focusing only on answers'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'How confident are you?' and 'What would make you more certain?' to develop metacognitive awareness.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-6',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Planning everything for students',
              'Asking \'What is your timeline?\' and \'How will you track your progress?\'',
              'Avoiding planning questions',
              'Focusing only on completion'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What is your timeline?' and 'How will you track your progress?' to develop self-management skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-6',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Ending after each sharing',
              'Asking \'What themes emerge?\' and \'How do these stories inform our understanding?\'',
              'Avoiding theme questions',
              'Focusing only on individual stories'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'What themes emerge?' and 'How do these stories inform our understanding?' to identify collective insights.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-6',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all claims without question',
              'Asking \'What standards should we use?\' and \'How do we evaluate quality?\'',
              'Avoiding standard questions',
              'Focusing only on acceptance'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What standards should we use?' and 'How do we evaluate quality?' to establish evaluation criteria.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-6',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing all connections',
              'Asking \'How does this relate to your experience?\' and \'What real-world examples come to mind?\'',
              'Avoiding experience questions',
              'Focusing only on abstract concepts'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'How does this relate to your experience?' and 'What real-world examples come to mind?' to connect to personal experience.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-6',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Providing all feedback',
              'Asking \'What feedback do you have for yourself?\' and \'How will you improve?\'',
              'Avoiding self-feedback questions',
              'Focusing only on teacher feedback'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What feedback do you have for yourself?' and 'How will you improve?' to develop self-assessment skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-7',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Accepting all final statements',
              'Asking \'What conclusions can we draw?\' and \'How might we extend this thinking?\'',
              'Avoiding conclusion questions',
              'Focusing only on current thinking'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'What conclusions can we draw?' and 'How might we extend this thinking?' to develop synthesis and extension skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-7',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Noticing everything at once',
              'Asking \'What is most surprising?\' and \'What seems counterintuitive?\'',
              'Avoiding surprise questions',
              'Focusing only on expected features'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What is most surprising?' and 'What seems counterintuitive?' to develop attention to unexpected mathematical features.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-7',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting all solution paths',
              'Asking \'What if we tried this differently?\' and \'How does this compare to other methods?\'',
              'Avoiding comparison questions',
              'Focusing only on one method'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'What if we tried this differently?' and 'How does this compare to other methods?' to encourage methodological flexibility.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-7',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Making all decisions for students',
              'Asking \'What criteria will you use?\' and \'How will you evaluate your success?\'',
              'Avoiding criteria questions',
              'Focusing only on teacher evaluation'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What criteria will you use?' and 'How will you evaluate your success?' to develop self-evaluation skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-7',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Reading all stories verbatim',
              'Asking \'What new understandings emerge?\' and \'How has our thinking evolved?\'',
              'Avoiding evolution questions',
              'Focusing only on initial thinking'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'What new understandings emerge?' and 'How has our thinking evolved?' to track collective learning progression.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-7',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all mathematical claims',
              'Asking \'What makes this mathematically valid?\' and \'How can we verify this?\'',
              'Avoiding validity questions',
              'Focusing only on acceptance'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What makes this mathematically valid?' and 'How can we verify this?' to establish mathematical validity criteria.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-7',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing all interpretations',
              'Asking \'What might this represent?\' and \'How could this be useful?\'',
              'Avoiding utility questions',
              'Focusing only on representation'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What might this represent?' and 'How could this be useful?' to explore applications and interpretations.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-7',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Assigning all reflection tasks',
              'Asking \'What challenged you?\' and \'What did you learn about yourself?\'',
              'Avoiding challenge questions',
              'Focusing only on content learning'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What challenged you?' and 'What did you learn about yourself?' to develop metacognitive awareness of personal growth.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-8',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Ending discussions without synthesis',
              'Asking \'How can we build on this?\' and \'What remains to be explored?\'',
              'Avoiding building questions',
              'Focusing only on completed discussions'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'How can we build on this?' and 'What remains to be explored?' to extend and deepen mathematical conversations.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-8',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Noticing everything equally',
              'Asking \'What seems most powerful?\' and \'What might have the greatest impact?\'',
              'Avoiding power questions',
              'Focusing only on obvious features'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What seems most powerful?' and 'What might have the greatest impact?' to develop discernment of significant mathematical features.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-8',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting all thinking processes',
              'Asking \'What assumptions are you making?\' and \'How might those assumptions affect your result?\'',
              'Avoiding assumption questions',
              'Focusing only on results'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'What assumptions are you making?' and 'How might those assumptions affect your result?' to develop critical thinking about underlying assumptions.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-8',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Planning all aspects for students',
              'Asking \'What support do you need?\' and \'How will you seek help when needed?\'',
              'Avoiding support questions',
              'Focusing only on independence'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What support do you need?' and 'How will you seek help when needed?' to develop help-seeking and resource utilization skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-8',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Ending after each story',
              'Asking \'What collective insights emerge?\' and \'How do these stories inform our mathematics?\'',
              'Avoiding collective questions',
              'Focusing only on individual insights'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'What collective insights emerge?' and 'How do these stories inform our mathematics?' to develop shared mathematical understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-8',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all mathematical arguments',
              'Asking \'What makes this mathematically convincing?\' and \'How could we strengthen this argument?\'',
              'Avoiding convincing questions',
              'Focusing only on acceptance'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What makes this mathematically convincing?' and 'How could we strengthen this argument?' to develop argumentation skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-8',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing all explanations',
              'Asking \'What does this suggest?\' and \'What might this imply?\'',
              'Avoiding implication questions',
              'Focusing only on explicit information'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What does this suggest?' and 'What might this imply?' to develop inferential thinking skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-8',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Assigning all goals',
              'Asking \'What are your mathematical goals?\' and \'How will you achieve them?\'',
              'Avoiding goal questions',
              'Focusing only on assigned goals'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What are your mathematical goals?' and 'How will you achieve them?' to develop goal-setting and planning skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-9',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Accepting all final thoughts',
              'Asking \'What key ideas emerge?\' and \'How can we organize our thinking?\'',
              'Avoiding organization questions',
              'Focusing only on individual ideas'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'What key ideas emerge?' and 'How can we organize our thinking?' to develop synthesis and organization skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-9',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Noticing everything simultaneously',
              'Asking \'What seems most essential?\' and \'What cannot be ignored?\'',
              'Avoiding essential questions',
              'Focusing only on optional features'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What seems most essential?' and 'What cannot be ignored?' to develop prioritization of critical mathematical features.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-9',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting all solution methods',
              'Asking \'What alternative approaches exist?\' and \'How do they compare?\'',
              'Avoiding alternative questions',
              'Focusing only on preferred methods'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'What alternative approaches exist?' and 'How do they compare?' to develop comparative thinking skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-9',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Evaluating all work for students',
              'Asking \'How will you know you\'re successful?\' and \'What evidence will show your progress?\'',
              'Avoiding evidence questions',
              'Focusing only on teacher evaluation'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'How will you know you're successful?' and 'What evidence will show your progress?' to develop self-assessment criteria.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-9',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Reading all stories without reflection',
              'Asking \'What patterns connect these stories?\' and \'How do they inform our mathematics?\'',
              'Avoiding connection questions',
              'Focusing only on story elements'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'What patterns connect these stories?' and 'How do they inform our mathematics?' to develop pattern recognition across narratives.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-9',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all mathematical reasoning',
              'Asking \'What makes this mathematically rigorous?\' and \'How can we ensure accuracy?\'',
              'Avoiding rigor questions',
              'Focusing only on completion'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What makes this mathematically rigorous?' and 'How can we ensure accuracy?' to establish standards for mathematical precision.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-9',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing all interpretations',
              'Asking \'What might this mean?\' and \'How does this fit together?\'',
              'Avoiding meaning questions',
              'Focusing only on parts'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What might this mean?' and 'How does this fit together?' to develop holistic understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-9',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Assigning all reflection activities',
              'Asking \'What have you learned about mathematics?\' and \'How has your thinking changed?\'',
              'Avoiding learning questions',
              'Focusing only on content mastery'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What have you learned about mathematics?' and 'How has your thinking changed?' to develop awareness of personal mathematical growth.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-10',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Ending discussions without summary',
              'Asking \'What are the main takeaways?\' and \'How can we apply this learning?\'',
              'Avoiding takeaway questions',
              'Focusing only on discussion process'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'What are the main takeaways?' and 'How can we apply this learning?' to consolidate and apply collective learning.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-10',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Noticing everything equally',
              'Asking \'What stands out?\' and \'What might be most significant?\'',
              'Avoiding significance questions',
              'Focusing only on quantity'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What stands out?' and 'What might be most significant?' to develop selective attention to important mathematical features.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-10',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting all initial thoughts',
              'Asking \'How does this connect to what you know?\' and \'What does this remind you of?\'',
              'Avoiding connection questions',
              'Focusing only on new information'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'How does this connect to what you know?' and 'What does this remind you of?' to activate prior knowledge and make connections.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-10',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Making all decisions for students',
              'Asking \'What do you want to focus on?\' and \'How will you demonstrate your understanding?\'',
              'Avoiding focus questions',
              'Focusing only on teacher-directed activities'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What do you want to focus on?' and 'How will you demonstrate your understanding?' to encourage student-directed learning.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-10',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Reading all stories without analysis',
              'Asking \'What mathematical themes emerge?\' and \'How do these stories enhance our understanding?\'',
              'Avoiding theme questions',
              'Focusing only on narrative elements'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'What mathematical themes emerge?' and 'How do these stories enhance our understanding?' to identify mathematical concepts within narratives.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-10',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all mathematical claims',
              'Asking \'What evidence supports this?\' and \'How reliable is this evidence?\'',
              'Avoiding evidence questions',
              'Focusing only on agreement'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What evidence supports this?' and 'How reliable is this evidence?' to evaluate the quality of mathematical justification.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-10',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing all explanations',
              'Asking \'What does this tell us?\' and \'How can we use this information?\'',
              'Avoiding utility questions',
              'Focusing only on observation'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What does this tell us?' and 'How can we use this information?' to develop interpretation and application skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-10',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Assigning all challenges',
              'Asking \'What challenge would you like to tackle?\' and \'How will you approach it?\'',
              'Avoiding challenge questions',
              'Focusing only on easy tasks'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What challenge would you like to tackle?' and 'How will you approach it?' to encourage ownership of challenging mathematical tasks.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-11',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Accepting all responses without question',
              'Asking \'How does this build on previous ideas?\' and \'What new directions does this suggest?\'',
              'Avoiding building questions',
              'Focusing only on current responses'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'How does this build on previous ideas?' and 'What new directions does this suggest?' to develop cumulative mathematical understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-11',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Noticing everything at once',
              'Asking \'What seems crucial?\' and \'What might be key to understanding?\'',
              'Avoiding crucial questions',
              'Focusing only on peripheral features'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What seems crucial?' and 'What might be key to understanding?' to develop focus on essential mathematical elements.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-11',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting all solution approaches',
              'Asking \'What other ways could this be solved?\' and \'How do different methods compare?\'',
              'Avoiding comparison questions',
              'Focusing only on one correct method'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'What other ways could this be solved?' and 'How do different methods compare?' to develop flexibility in mathematical thinking.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-11',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Planning all learning activities',
              'Asking \'What would you like to explore?\' and \'How will you document your findings?\'',
              'Avoiding exploration questions',
              'Focusing only on assigned activities'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What would you like to explore?' and 'How will you document your findings?' to encourage student-initiated mathematical inquiry.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-11',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Reading all stories silently',
              'Asking \'What mathematical connections do you see?\' and \'How do these stories illustrate mathematical concepts?\'',
              'Avoiding connection questions',
              'Focusing only on narrative quality'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'What mathematical connections do you see?' and 'How do these stories illustrate mathematical concepts?' to highlight mathematical relationships within stories.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-11',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all mathematical arguments',
              'Asking \'What makes this mathematically sound?\' and \'How can we validate this?\'',
              'Avoiding validation questions',
              'Focusing only on agreement'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What makes this mathematically sound?' and 'How can we validate this?' to establish criteria for mathematical validity.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-11',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing all interpretations',
              'Asking \'What patterns emerge?\' and \'How do these patterns help us understand?\'',
              'Avoiding pattern questions',
              'Focusing only on individual elements'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What patterns emerge?' and 'How do these patterns help us understand?' to develop pattern recognition and interpretation skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-11',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Assigning all learning goals',
              'Asking \'What do you want to achieve?\' and \'How will you know when you\'ve achieved it?\'',
              'Avoiding achievement questions',
              'Focusing only on assigned goals'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What do you want to achieve?' and 'How will you know when you've achieved it?' to develop self-determined learning goals.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-12',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Ending discussions without reflection',
              'Asking \'What have we accomplished?\' and \'What questions remain?\'',
              'Avoiding accomplishment questions',
              'Focusing only on process'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'What have we accomplished?' and 'What questions remain?' to reflect on progress and identify future directions.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-12',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Noticing everything equally',
              'Asking \'What seems foundational?\' and \'What builds upon what?\'',
              'Avoiding foundational questions',
              'Focusing only on advanced features'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What seems foundational?' and 'What builds upon what?' to develop understanding of mathematical structure and hierarchy.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-12',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting all initial approaches',
              'Asking \'What if we changed this?\' and \'How would that affect the outcome?\'',
              'Avoiding change questions',
              'Focusing only on original approaches'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'What if we changed this?' and 'How would that affect the outcome?' to develop experimentation and prediction skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-12',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Evaluating all work for students',
              'Asking \'What standards will you use?\' and \'How will you ensure quality?\'',
              'Avoiding standard questions',
              'Focusing only on teacher standards'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What standards will you use?' and 'How will you ensure quality?' to develop self-assessment and quality control skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-12',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Reading all stories without connection',
              'Asking \'How do these stories relate mathematically?\' and \'What mathematical principles do they illustrate?\'',
              'Avoiding mathematical questions',
              'Focusing only on story elements'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'How do these stories relate mathematically?' and 'What mathematical principles do they illustrate?' to connect narratives to mathematical concepts.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-12',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all mathematical reasoning',
              'Asking \'What makes this mathematically justified?\' and \'How can we verify the reasoning?\'',
              'Avoiding justification questions',
              'Focusing only on results'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What makes this mathematically justified?' and 'How can we verify the reasoning?' to evaluate the quality of mathematical justification.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-12',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing all explanations',
              'Asking \'What does this suggest about the mathematics?\' and \'How does this fit into the bigger picture?\'',
              'Avoiding suggestion questions',
              'Focusing only on details'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What does this suggest about the mathematics?' and 'How does this fit into the bigger picture?' to develop broader mathematical understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-12',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Assigning all reflection tasks',
              'Asking \'What have you discovered?\' and \'How has this changed your thinking?\'',
              'Avoiding discovery questions',
              'Focusing only on assigned learning'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What have you discovered?' and 'How has this changed your thinking?' to encourage reflection on personal mathematical discoveries.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-13',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Accepting all final conclusions',
              'Asking \'What evidence supports this conclusion?\' and \'How might we test this further?\'',
              'Avoiding evidence questions',
              'Focusing only on agreement'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'What evidence supports this conclusion?' and 'How might we test this further?' to develop evidence-based mathematical argumentation.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-13',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Noticing everything simultaneously',
              'Asking \'What seems most relevant?\' and \'What might be most useful to remember?\'',
              'Avoiding relevance questions',
              'Focusing only on interesting features'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What seems most relevant?' and 'What might be most useful to remember?' to develop selective attention to important mathematical features.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-13',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting all solution strategies',
              'Asking \'What would happen if...?\' and \'How could we modify this approach?\'',
              'Avoiding modification questions',
              'Focusing only on original strategies'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'What would happen if...?' and 'How could we modify this approach?' to develop adaptive thinking and problem-solving flexibility.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-13',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Making all decisions for students',
              'Asking \'What do you think is important?\' and \'How will you prioritize your work?\'',
              'Avoiding importance questions',
              'Focusing only on teacher priorities'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What do you think is important?' and 'How will you prioritize your work?' to develop decision-making and prioritization skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-13',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Reading all stories without analysis',
              'Asking \'What mathematical ideas are revealed?\' and \'How do these stories deepen our understanding?\'',
              'Avoiding mathematical questions',
              'Focusing only on narrative elements'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'What mathematical ideas are revealed?' and 'How do these stories deepen our understanding?' to uncover mathematical concepts within narratives.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-13',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all mathematical claims',
              'Asking \'What criteria should we apply?\' and \'How do we determine mathematical correctness?\'',
              'Avoiding criteria questions',
              'Focusing only on teacher judgment'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What criteria should we apply?' and 'How do we determine mathematical correctness?' to establish shared standards for mathematical validity.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-13',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing all interpretations',
              'Asking \'What might this mean?\' and \'How can we make sense of this?\'',
              'Avoiding meaning questions',
              'Focusing only on procedures'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What might this mean?' and 'How can we make sense of this?' to develop interpretation and comprehension skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-13',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Assigning all challenges',
              'Asking \'What would challenge you?\' and \'How will you overcome it?\'',
              'Avoiding challenge questions',
              'Focusing only on comfort zones'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What would challenge you?' and 'How will you overcome it?' to encourage growth through appropriate challenges.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-14',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Ending discussions without consolidation',
              'Asking \'What key insights have emerged?\' and \'How can we summarize our learning?\'',
              'Avoiding insight questions',
              'Focusing only on individual contributions'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'What key insights have emerged?' and 'How can we summarize our learning?' to consolidate collective mathematical understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-14',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Noticing everything equally',
              'Asking \'What seems most important?\' and \'What might have the greatest mathematical significance?\'',
              'Avoiding importance questions',
              'Focusing only on obvious features'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What seems most important?' and 'What might have the greatest mathematical significance?' to develop discernment of mathematically significant features.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-14',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting all initial solutions',
              'Asking \'How else could we approach this?\' and \'What different strategies could we try?\'',
              'Avoiding strategy questions',
              'Focusing only on one correct approach'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'How else could we approach this?' and 'What different strategies could we try?' to develop strategic flexibility in problem-solving.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-14',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Planning all aspects of learning',
              'Asking \'What would you like to investigate?\' and \'How will you go about it?\'',
              'Avoiding investigation questions',
              'Focusing only on assigned tasks'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What would you like to investigate?' and 'How will you go about it?' to encourage student-initiated mathematical exploration.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-14',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Reading all stories without reflection',
              'Asking \'What mathematical principles emerge?\' and \'How do these stories illustrate mathematical concepts?\'',
              'Avoiding principle questions',
              'Focusing only on story quality'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'What mathematical principles emerge?' and 'How do these stories illustrate mathematical concepts?' to identify underlying mathematical principles in narratives.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-14',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all mathematical arguments',
              'Asking \'What makes this mathematically robust?\' and \'How can we strengthen this mathematically?\'',
              'Avoiding robustness questions',
              'Focusing only on completion'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What makes this mathematically robust?' and 'How can we strengthen this mathematically?' to develop rigorous mathematical thinking.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-14',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing all explanations',
              'Asking \'What does this tell us about mathematics?\' and \'How does this connect to other mathematical ideas?\'',
              'Avoiding connection questions',
              'Focusing only on isolated concepts'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What does this tell us about mathematics?' and 'How does this connect to other mathematical ideas?' to develop connected mathematical understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-14',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Assigning all learning activities',
              'Asking \'What interests you mathematically?\' and \'How can you pursue that interest?\'',
              'Avoiding interest questions',
              'Focusing only on required content'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What interests you mathematically?' and 'How can you pursue that interest?' to tap into student mathematical interests and passions.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-15',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Accepting all responses without building',
              'Asking \'How does this connect to what we\'ve discussed?\' and \'What new questions arise?\'',
              'Avoiding connection questions',
              'Focusing only on current responses'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'How does this connect to what we've discussed?' and 'What new questions arise?' to build cumulative mathematical understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-15',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Noticing everything at once',
              'Asking \'What stands out mathematically?\' and \'What might be most noteworthy?\'',
              'Avoiding noteworthy questions',
              'Focusing only on routine features'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What stands out mathematically?' and 'What might be most noteworthy?' to develop attention to remarkable mathematical features.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-15',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting all solution methods',
              'Asking \'What alternative perspectives exist?\' and \'How do they enrich our understanding?\'',
              'Avoiding perspective questions',
              'Focusing only on one viewpoint'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'What alternative perspectives exist?' and 'How do they enrich our understanding?' to develop multi-perspective mathematical thinking.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-15',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Making all choices for students',
              'Asking \'What would you like to explore further?\' and \'How will you extend your learning?\'',
              'Avoiding extension questions',
              'Focusing only on basic requirements'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What would you like to explore further?' and 'How will you extend your learning?' to encourage self-directed mathematical extension.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-15',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Reading all stories without mathematical focus',
              'Asking \'What mathematical relationships appear?\' and \'How do these stories reveal mathematical structures?\'',
              'Avoiding relationship questions',
              'Focusing only on narrative elements'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'What mathematical relationships appear?' and 'How do these stories reveal mathematical structures?' to uncover mathematical structures within stories.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-15',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all mathematical claims',
              'Asking \'What makes this mathematically defensible?\' and \'How can we justify this mathematically?\'',
              'Avoiding justification questions',
              'Focusing only on agreement'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What makes this mathematically defensible?' and 'How can we justify this mathematically?' to develop mathematical justification skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-15',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing all interpretations',
              'Asking \'What does this suggest?\' and \'How can we interpret this mathematically?\'',
              'Avoiding interpretation questions',
              'Focusing only on literal meanings'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What does this suggest?' and 'How can we interpret this mathematically?' to develop mathematical interpretation skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-15',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Assigning all projects',
              'Asking \'What would you like to create mathematically?\' and \'How will you share your creation?\'',
              'Avoiding creation questions',
              'Focusing only on consumption'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What would you like to create mathematically?' and 'How will you share your creation?' to encourage mathematical production and sharing.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-16',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Ending discussions without synthesis',
              'Asking \'What patterns do we see?\' and \'How can we generalize from these?\'',
              'Avoiding pattern questions',
              'Focusing only on specific cases'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'What patterns do we see?' and 'How can we generalize from these?' to develop pattern recognition and generalization skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-16',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Noticing everything equally',
              'Asking \'What seems most mathematically interesting?\' and \'What might be worth investigating further?\'',
              'Avoiding interesting questions',
              'Focusing only on required content'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What seems most mathematically interesting?' and 'What might be worth investigating further?' to spark mathematical curiosity and investigation.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-16',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting all initial approaches',
              'Asking \'What would change if...?\' and \'How would that affect our solution?\'',
              'Avoiding change questions',
              'Focusing only on static problems'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'What would change if...?' and 'How would that affect our solution?' to develop dynamic thinking about mathematical relationships.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-16',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Planning all student activities',
              'Asking \'What question interests you?\' and \'How will you find an answer?\'',
              'Avoiding question questions',
              'Focusing only on provided questions'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What question interests you?' and 'How will you find an answer?' to encourage student-generated mathematical inquiry.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-16',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Reading all stories without analysis',
              'Asking \'What mathematical ideas are embedded?\' and \'How do these stories demonstrate mathematical thinking?\'',
              'Avoiding embedded questions',
              'Focusing only on surface elements'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'What mathematical ideas are embedded?' and 'How do these stories demonstrate mathematical thinking?' to uncover embedded mathematical concepts.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-16',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all mathematical reasoning',
              'Asking \'What makes this mathematically reliable?\' and \'How can we ensure mathematical accuracy?\'',
              'Avoiding reliability questions',
              'Focusing only on speed'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What makes this mathematically reliable?' and 'How can we ensure mathematical accuracy?' to establish standards for mathematical reliability.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-16',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing all explanations',
              'Asking \'What does this represent?\' and \'How can we understand this better?\'',
              'Avoiding representation questions',
              'Focusing only on procedures'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What does this represent?' and 'How can we understand this better?' to develop deeper mathematical understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-16',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Assigning all learning tasks',
              'Asking \'What would you like to learn more about?\' and \'How will you pursue that learning?\'',
              'Avoiding learning questions',
              'Focusing only on taught content'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What would you like to learn more about?' and 'How will you pursue that learning?' to encourage self-directed mathematical learning.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-17',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Accepting all responses without challenge',
              'Asking \'How does this compare to other approaches?\' and \'What makes one approach better?\'',
              'Avoiding comparison questions',
              'Focusing only on individual methods'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'How does this compare to other approaches?' and 'What makes one approach better?' to develop comparative analysis skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-17',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Noticing everything at once',
              'Asking \'What seems most mathematically significant?\' and \'What might have broader implications?\'',
              'Avoiding significance questions',
              'Focusing only on immediate features'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What seems most mathematically significant?' and 'What might have broader implications?' to develop understanding of mathematical significance and implications.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-17',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting all solution paths',
              'Asking \'What would happen with different numbers?\' and \'How does the pattern change?\'',
              'Avoiding pattern questions',
              'Focusing only on specific cases'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'What would happen with different numbers?' and 'How does the pattern change?' to develop generalization and pattern analysis skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-17',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Making all decisions for students',
              'Asking \'What would you like to change?\' and \'How will you implement that change?\'',
              'Avoiding change questions',
              'Focusing only on maintaining status quo'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What would you like to change?' and 'How will you implement that change?' to encourage student-initiated mathematical modifications and improvements.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-17',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Reading all stories without mathematical analysis',
              'Asking \'What mathematical concepts are illustrated?\' and \'How do these stories make mathematics visible?\'',
              'Avoiding concept questions',
              'Focusing only on narrative quality'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'What mathematical concepts are illustrated?' and 'How do these stories make mathematics visible?' to highlight mathematical concepts within narratives.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-17',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all mathematical arguments',
              'Asking \'What makes this mathematically valid?\' and \'How can we verify this claim?\'',
              'Avoiding validity questions',
              'Focusing only on agreement'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What makes this mathematically valid?' and 'How can we verify this claim?' to establish mathematical validity through verification.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-17',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing all interpretations',
              'Asking \'What does this mean in this context?\' and \'How does this apply to other situations?\'',
              'Avoiding context questions',
              'Focusing only on isolated meanings'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What does this mean in this context?' and 'How does this apply to other situations?' to develop contextual understanding and transfer skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-17',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Assigning all activities',
              'Asking \'What would you like to teach others?\' and \'How will you explain it?\'',
              'Avoiding teaching questions',
              'Focusing only on learning'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What would you like to teach others?' and 'How will you explain it?' to encourage mathematical teaching and explanation skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-18',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Ending discussions without reflection',
              'Asking \'What have we learned together?\' and \'How can we apply this beyond this problem?\'',
              'Avoiding application questions',
              'Focusing only on the current problem'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'What have we learned together?' and 'How can we apply this beyond this problem?' to develop collective learning and transfer skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-18',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Noticing everything equally',
              'Asking \'What seems most mathematically powerful?\' and \'What might transform our understanding?\'',
              'Avoiding power questions',
              'Focusing only on basic features'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What seems most mathematically powerful?' and 'What might transform our understanding?' to identify features that can fundamentally change mathematical understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-18',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting all initial solutions',
              'Asking \'What if we looked at this differently?\' and \'How would that change our approach?\'',
              'Avoiding different questions',
              'Focusing only on first approaches'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'What if we looked at this differently?' and 'How would that change our approach?' to encourage perspective shifts and alternative thinking.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-18',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Planning all student work',
              'Asking \'What would you like to investigate next?\' and \'How will you design your investigation?\'',
              'Avoiding investigation questions',
              'Focusing only on assigned investigations'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What would you like to investigate next?' and 'How will you design your investigation?' to encourage student-designed mathematical investigations.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-18',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Reading all stories without mathematical connection',
              'Asking \'What mathematical structures appear?\' and \'How do these stories reveal mathematical patterns?\'',
              'Avoiding structure questions',
              'Focusing only on narrative elements'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'What mathematical structures appear?' and 'How do these stories reveal mathematical patterns?' to identify mathematical structures within stories.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-18',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all mathematical claims',
              'Asking \'What makes this mathematically convincing?\' and \'How can we test this mathematically?\'',
              'Avoiding convincing questions',
              'Focusing only on agreement'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What makes this mathematically convincing?' and 'How can we test this mathematically?' to develop mathematical testing and validation skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-18',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing all explanations',
              'Asking \'What does this suggest about the problem?\' and \'How can we make this clearer?\'',
              'Avoiding suggestion questions',
              'Focusing only on confusion'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What does this suggest about the problem?' and 'How can we make this clearer?' to develop clarity and deeper problem understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-18',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Assigning all presentations',
              'Asking \'What would you like to present?\' and \'How will you make it understandable to others?\'',
              'Avoiding presentation questions',
              'Focusing only on teacher presentations'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What would you like to present?' and 'How will you make it understandable to others?' to develop mathematical communication and presentation skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-19',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Accepting all final statements',
              'Asking \'What connections do we see?\' and \'How can we build a more complete picture?\'',
              'Avoiding connection questions',
              'Focusing only on isolated ideas'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'What connections do we see?' and 'How can we build a more complete picture?' to develop synthesis and integration skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-19',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Noticing everything simultaneously',
              'Asking \'What seems most mathematically elegant?\' and \'What might be most mathematically beautiful?\'',
              'Avoiding elegance questions',
              'Focusing only on utility'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What seems most mathematically elegant?' and 'What might be most mathematically beautiful?' to develop appreciation for mathematical elegance and beauty.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-19',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting all solution methods',
              'Asking \'What would happen if we generalized this?\' and \'How could we extend this pattern?\'',
              'Avoiding generalization questions',
              'Focusing only on specific cases'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'What would happen if we generalized this?' and 'How could we extend this pattern?' to develop generalization and extension skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-19',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Making all choices for students',
              'Asking \'What would you like to explore deeply?\' and \'How will you deepen your understanding?\'',
              'Avoiding depth questions',
              'Focusing only on surface learning'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What would you like to explore deeply?' and 'How will you deepen your understanding?' to encourage deep mathematical exploration.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-19',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Reading all stories without analysis',
              'Asking \'What mathematical generalizations emerge?\' and \'How do these stories illustrate mathematical principles?\'',
              'Avoiding generalization questions',
              'Focusing only on specific stories'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'What mathematical generalizations emerge?' and 'How do these stories illustrate mathematical principles?' to identify mathematical generalizations within narratives.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-19',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all mathematical reasoning',
              'Asking \'What makes this mathematically certain?\' and \'How can we increase our confidence?\'',
              'Avoiding certainty questions',
              'Focusing only on doubt'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What makes this mathematically certain?' and 'How can we increase our confidence?' to develop mathematical certainty and confidence-building skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-19',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing all interpretations',
              'Asking \'What does this reveal?\' and \'How does this change our understanding?\'',
              'Avoiding revelation questions',
              'Focusing only on known information'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What does this reveal?' and 'How does this change our understanding?' to develop insight and understanding transformation skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-19',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Assigning all research tasks',
              'Asking \'What question would you like to research?\' and \'How will you find answers?\'',
              'Avoiding research questions',
              'Focusing only on provided information'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What question would you like to research?' and 'How will you find answers?' to encourage mathematical research and inquiry skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-20',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Ending discussions without consolidation',
              'Asking \'What key ideas have we developed?\' and \'How can we organize our thinking?\'',
              'Avoiding organization questions',
              'Focusing only on individual ideas'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'What key ideas have we developed?' and 'How can we organize our thinking?' to consolidate and organize collective mathematical thinking.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-20',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Noticing everything equally',
              'Asking \'What seems most mathematically profound?\' and \'What might have deep implications?\'',
              'Avoiding profound questions',
              'Focusing only on surface features'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What seems most mathematically profound?' and 'What might have deep implications?' to identify features with deep mathematical significance.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-20',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting all initial approaches',
              'Asking \'What would happen if we abstracted this?\' and \'How could we represent this more generally?\'',
              'Avoiding abstraction questions',
              'Focusing only on concrete cases'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'What would happen if we abstracted this?' and 'How could we represent this more generally?' to develop abstraction and generalization skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-20',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Planning all student projects',
              'Asking \'What would you like to create?\' and \'How will you bring your idea to life?\'',
              'Avoiding creation questions',
              'Focusing only on consumption'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What would you like to create?' and 'How will you bring your idea to life?' to encourage mathematical creation and implementation.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-20',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Reading all stories without reflection',
              'Asking \'What mathematical wisdom emerges?\' and \'How do these stories inform mathematical understanding?\'',
              'Avoiding wisdom questions',
              'Focusing only on story elements'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'What mathematical wisdom emerges?' and 'How do these stories inform mathematical understanding?' to extract mathematical wisdom from narratives.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-20',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all mathematical arguments',
              'Asking \'What makes this mathematically irrefutable?\' and \'How can we prove this beyond doubt?\'',
              'Avoiding irrefutable questions',
              'Focusing only on doubt'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What makes this mathematically irrefutable?' and 'How can we prove this beyond doubt?' to develop rigorous mathematical proof and validation skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-20',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing all explanations',
              'Asking \'What does this illuminate?\' and \'How does this shed light on the mathematics?\'',
              'Avoiding illumination questions',
              'Focusing only on darkness'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What does this illuminate?' and 'How does this shed light on the mathematics?' to develop illumination and clarity in mathematical understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-20',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Assigning all leadership roles',
              'Asking \'What would you like to lead?\' and \'How will you guide others?\'',
              'Avoiding leadership questions',
              'Focusing only on following'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What would you like to lead?' and 'How will you guide others?' to develop mathematical leadership and guidance skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-21',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Accepting all responses without synthesis',
              'Asking \'What overarching themes emerge?\' and \'How can we weave these together?\'',
              'Avoiding theme questions',
              'Focusing only on individual responses'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'What overarching themes emerge?' and 'How can we weave these together?' to develop synthesis and thematic understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-21',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Noticing everything at once',
              'Asking \'What seems most mathematically fundamental?\' and \'What might be at the core of this?\'',
              'Avoiding fundamental questions',
              'Focusing only on peripheral features'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What seems most mathematically fundamental?' and 'What might be at the core of this?' to identify core mathematical concepts and principles.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-21',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting all solution approaches',
              'Asking \'What if we thought about this meta-mathematically?\' and \'How does this connect to mathematical thinking itself?\'',
              'Avoiding meta questions',
              'Focusing only on content'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'What if we thought about this meta-mathematically?' and 'How does this connect to mathematical thinking itself?' to develop meta-mathematical thinking.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-21',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Making all decisions for students',
              'Asking \'What would you like to innovate?\' and \'How will you implement your innovation?\'',
              'Avoiding innovation questions',
              'Focusing only on traditional approaches'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What would you like to innovate?' and 'How will you implement your innovation?' to encourage mathematical innovation and implementation.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-21',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Reading all stories without deep analysis',
              'Asking \'What mathematical truths are revealed?\' and \'How do these stories uncover mathematical realities?\'',
              'Avoiding truth questions',
              'Focusing only on fictional elements'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'What mathematical truths are revealed?' and 'How do these stories uncover mathematical realities?' to uncover mathematical truths within narratives.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-21',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all mathematical claims',
              'Asking \'What makes this mathematically unimpeachable?\' and \'How can we establish mathematical authority?\'',
              'Avoiding unimpeachable questions',
              'Focusing only on doubt'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What makes this mathematically unimpeachable?' and 'How can we establish mathematical authority?' to develop mathematical authority and validation skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-21',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing all interpretations',
              'Asking \'What does this clarify?\' and \'How does this bring clarity to our understanding?\'',
              'Avoiding clarity questions',
              'Focusing only on confusion'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What does this clarify?' and 'How does this bring clarity to our understanding?' to develop clarity and understanding in mathematical contexts.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-21',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Assigning all expert roles',
              'Asking \'What would you like to become an expert in?\' and \'How will you develop your expertise?\'',
              'Avoiding expertise questions',
              'Focusing only on novice levels'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What would you like to become an expert in?' and 'How will you develop your expertise?' to encourage mathematical expertise development.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-22',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Ending discussions without integration',
              'Asking \'What unity do we see?\' and \'How can we integrate these perspectives?\'',
              'Avoiding unity questions',
              'Focusing only on differences'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'What unity do we see?' and 'How can we integrate these perspectives?' to develop integration and unification skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-22',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Noticing everything equally',
              'Asking \'What seems most mathematically essential?\' and \'What cannot be mathematically ignored?\'',
              'Avoiding essential questions',
              'Focusing only on optional features'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What seems most mathematically essential?' and 'What cannot be mathematically ignored?' to identify essential mathematical features.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-22',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting all thinking processes',
              'Asking \'What would happen if we thought about this philosophically?\' and \'How does this connect to the nature of mathematics?\'',
              'Avoiding philosophical questions',
              'Focusing only on procedural thinking'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'What would happen if we thought about this philosophically?' and 'How does this connect to the nature of mathematics?' to develop philosophical mathematical thinking.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-22',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Planning all student initiatives',
              'Asking \'What would you like to transform?\' and \'How will you bring about that transformation?\'',
              'Avoiding transformation questions',
              'Focusing only on maintenance'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What would you like to transform?' and 'How will you bring about that transformation?' to encourage mathematical transformation and change.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-22',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Reading all stories without deep mathematical analysis',
              'Asking \'What mathematical universals appear?\' and \'How do these stories reveal mathematical constants?\'',
              'Avoiding universal questions',
              'Focusing only on specific instances'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'What mathematical universals appear?' and 'How do these stories reveal mathematical constants?' to identify mathematical universals within narratives.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-22',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all mathematical reasoning',
              'Asking \'What makes this mathematically incontrovertible?\' and \'How can we establish mathematical certainty?\'',
              'Avoiding incontrovertible questions',
              'Focusing only on uncertainty'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What makes this mathematically incontrovertible?' and 'How can we establish mathematical certainty?' to develop mathematical certainty and validation skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-22',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing all explanations',
              'Asking \'What does this resolve?\' and \'How does this resolve our mathematical questions?\'',
              'Avoiding resolution questions',
              'Focusing only on problems'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What does this resolve?' and 'How does this resolve our mathematical questions?' to develop resolution and problem-solving skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-22',
          },
          {
            question: "Mathematical empowerment facilitation techniques include:",
            options: [
              'Assigning all visionary roles',
              'Asking \'What mathematical future would you like to create?\' and \'How will you contribute to that future?\'',
              'Avoiding future questions',
              'Focusing only on present learning'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical empowerment facilitation techniques involve asking questions like 'What mathematical future would you like to create?' and 'How will you contribute to that future?' to encourage mathematical vision and contribution.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-empowerment-facilitation-techniques-23',
          },
          {
            question: "The 'mathematical discourse facilitation techniques' include:",
            options: [
              'Accepting all final conclusions',
              'Asking \'What coherence do we see?\' and \'How can we create a coherent mathematical narrative?\'',
              'Avoiding coherence questions',
              'Focusing only on fragmented ideas'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical discourse facilitation techniques involve asking questions like 'What coherence do we see?' and 'How can we create a coherent mathematical narrative?' to develop coherence and narrative skills.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-discourse-facilitation-techniques-23',
          },
          {
            question: "Mathematical noticing facilitation techniques include:",
            options: [
              'Noticing everything at once',
              'Asking \'What seems most mathematically foundational?\' and \'What might be the mathematical bedrock?\'',
              'Avoiding foundational questions',
              'Focusing only on advanced features'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical noticing facilitation techniques involve asking questions like 'What seems most mathematically foundational?' and 'What might be the mathematical bedrock?' to identify foundational mathematical concepts.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-noticing-facilitation-techniques-23',
          },
          {
            question: "The 'mathematical thinking facilitation techniques' include:",
            options: [
              'Accepting all solution methods',
              'Asking \'What would happen if we thought about this transcendentally?\' and \'How does this connect to ultimate mathematical truths?\'',
              'Avoiding transcendental questions',
              'Focusing only on immediate applications'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical thinking facilitation techniques involve asking questions like 'What would happen if we thought about this transcendentally?' and 'How does this connect to ultimate mathematical truths?' to develop transcendental mathematical thinking.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-thinking-facilitation-techniques-23',
          },
          {
            question: "Mathematical agency facilitation techniques include:",
            options: [
              'Making all decisions for students',
              'Asking \'What would you like to revolutionize?\' and \'How will you bring about mathematical revolution?\'',
              'Avoiding revolution questions',
              'Focusing only on incremental changes'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical agency facilitation techniques involve asking questions like 'What would you like to revolutionize?' and 'How will you bring about mathematical revolution?' to encourage mathematical revolution and transformation.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-agency-facilitation-techniques-23',
          },
          {
            question: "The 'mathematical story circle facilitation techniques' include:",
            options: [
              'Reading all stories without ultimate analysis',
              'Asking \'What mathematical enlightenment emerges?\' and \'How do these stories lead to mathematical awakening?\'',
              'Avoiding enlightenment questions',
              'Focusing only on surface learning'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical story circle facilitation techniques involve asking questions like 'What mathematical enlightenment emerges?' and 'How do these stories lead to mathematical awakening?' to achieve mathematical enlightenment through narratives.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-story-circle-facilitation-techniques-23',
          },
          {
            question: "Mathematical authority negotiation facilitation techniques include:",
            options: [
              'Accepting all mathematical arguments',
              'Asking \'What makes this mathematically unassailable?\' and \'How can we achieve mathematical invincibility?\'',
              'Avoiding unassailable questions',
              'Focusing only on vulnerability'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical authority negotiation facilitation techniques involve asking questions like 'What makes this mathematically unassailable?' and 'How can we achieve mathematical invincibility?' to develop unassailable mathematical authority.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-authority-negotiation-facilitation-techniques-23',
          },
          {
            question: "The 'mathematical sense-making facilitation techniques' include:",
            options: [
              'Providing all interpretations',
              'Asking \'What does this consummate?\' and \'How does this achieve mathematical completion?\'',
              'Avoiding consummation questions',
              'Focusing only on incompleteness'
            ],
            correctAnswerIndex: 1,
            explanation: "Mathematical sense-making facilitation techniques involve asking questions like 'What does this consummate?' and 'How does this achieve mathematical completion?' to develop completion and consummation in mathematical understanding.",
            subjectName: SubjectName.MATH,
            topicId: 'math3',
            subTopicId: 'math3-sense-making-facilitation-techniques-23',
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
<h3 class="text-xl font-semibold mb-2 text-primary">Pedagogy of Language Development (As per NCF 2005)</h3>
<p class="mb-4">This section focuses on the principles of language teaching, emphasizing that language is not just a set of rules, but a tool for communication and meaning-making.</p>

<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">Learning and Acquisition</h4>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>Acquisition:</strong> This is an unconscious process, like how a child learns their first language. It happens naturally through meaningful interaction in the target language.</li>
    <li><strong>Learning:</strong> This is a conscious process of knowing about language, such as learning its grammar rules.</li>
    <li><strong>Key Principle:</strong> Language acquisition, not just learning, is optimal. The classroom should provide a rich and comprehensible environment for natural acquisition.</li>
  </ul>
</div>

<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">Principles of Language Teaching</h4>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>Role of LSRW:</strong> Language skills are integrated. Oral skills (listening and speaking) form the foundation for literacy skills (reading and writing).</li>
    <li><strong>Role of Grammar:</strong> Grammar should not be taught as isolated rules, but in context. The focus should be on how grammar helps in communicating effectively.</li>
    <li><strong>Diverse Classroom Challenges:</strong> Multilingualism should be seen as a resource, not a problem. Children's home languages can be used as a tool to help learn the target language.</li>
  </ul>
</div>

<div class="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
  <h4 class="text-lg font-bold text-primary-dark mb-3">Assessment and Remedial Teaching</h4>
  <ul class="list-disc list-inside ml-4 mb-4 space-y-2">
    <li><strong>Assessment:</strong> Assessment should be continuous (part of the teaching process) and comprehensive (assessment of all four skills). It should focus on the child's ability to use language rather than just knowledge of rules. Portfolio assessment is a key tool.</li>
    <li><strong>Remedial Teaching:</strong> This is not just re-teaching the same material. It involves diagnosing specific difficulties faced by the student and providing targeted support to bridge those gaps.</li>
  </ul>
</div>

<div class="mt-6 p-3 bg-yellow-50 rounded-md border border-yellow-200">
  <h5 class="font-bold text-yellow-800">Analyzing Tricky Questions:</h5>
  <p class="text-sm text-yellow-700">Language pedagogy questions support approaches that are communicative, child-centric, and meaning-centric. The correct answer will include using language for real purposes, integrating skills, and viewing the child as an active meaning-maker. Reject options that emphasize rote memorization, teacher-centric methods, or isolating language skills.</p>
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
