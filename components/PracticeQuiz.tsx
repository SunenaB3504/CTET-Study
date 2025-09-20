import React, { useState } from 'react';
import { MCQ, SubjectName, EnhancedExplanation } from '../types';
import { CheckCircleIcon, XCircleIcon, BookOpenIcon } from '@heroicons/react/24/solid';

interface PracticeQuizProps {
  questions: MCQ[];
  onSelectTopicById: (subjectName: SubjectName, topicId: string) => void;
}

const PracticeQuiz: React.FC<PracticeQuizProps> = ({ questions, onSelectTopicById }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Helper function to render explanation
  const renderExplanation = (explanation: string | EnhancedExplanation): React.ReactNode => {
    if (typeof explanation === 'string') {
      return explanation;
    }

    // Handle EnhancedExplanation object
    return (
      <div className="space-y-3">
        <p className="font-medium text-gray-800">{explanation.basic}</p>
        {explanation.theory && (
          <div className="bg-blue-50 p-3 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-1">Theory:</h5>
            <p className="text-blue-700 text-sm">{explanation.theory}</p>
          </div>
        )}
        {explanation.realLifeExample && (
          <div className="bg-green-50 p-3 rounded-lg">
            <h5 className="font-semibold text-green-800 mb-1">Real-life Example:</h5>
            <p className="text-green-700 text-sm">{explanation.realLifeExample}</p>
          </div>
        )}
        {explanation.teachingTip && (
          <div className="bg-purple-50 p-3 rounded-lg">
            <h5 className="font-semibold text-purple-800 mb-1">Teaching Tip:</h5>
            <p className="text-purple-700 text-sm">{explanation.teachingTip}</p>
          </div>
        )}
      </div>
    );
  };

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prev => (prev + 1) % questions.length);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const combinedQuestions: MCQ[] = [...questions, ...additionalQuestions];
  const limitedQuestions = combinedQuestions.slice(0, 10);
  const currentQuestion = limitedQuestions[currentQuestionIndex];

  if (!limitedQuestions || limitedQuestions.length === 0) {
    return null;
  }

  const isCorrect = selectedOption === currentQuestion.correctAnswerIndex;

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Practice Quiz</h3>
      <div className="mb-4">
        <p className="text-lg text-gray-700">
          {currentQuestionIndex + 1}. {currentQuestion.question}
        </p>
      </div>
      <div className="space-y-3">
        {currentQuestion.options.map((option: string, index: number) => {
          const isSelected = selectedOption === index;
          const isCorrectAnswer = index === currentQuestion.correctAnswerIndex;

          let buttonClass = 'bg-white hover:bg-gray-100 border-gray-300';
          if (isAnswered) {
            if (isCorrectAnswer) {
              buttonClass = 'bg-green-100 border-green-500 text-green-800';
            } else if (isSelected && !isCorrectAnswer) {
              buttonClass = 'bg-red-100 border-red-500 text-red-800';
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              disabled={isAnswered}
              className={`w-full text-left p-4 border rounded-lg transition-colors duration-200 flex items-center ${buttonClass}`}
            >
              <span className="font-medium">{option}</span>
            </button>
          );
        })}
      </div>
      {isAnswered && (
        <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
          <div className="flex items-start">
            {isCorrect ? (
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
            ) : (
              <XCircleIcon className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
            )}
            <div>
              <h4 className={`text-lg font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </h4>
              <div className="mt-1 text-gray-700">{renderExplanation(currentQuestion.explanation)}</div>
              <button
                onClick={() => onSelectTopicById(currentQuestion.subjectName, currentQuestion.topicId)}
                className="mt-4 flex items-center text-sm text-secondary hover:text-primary font-semibold"
              >
                <BookOpenIcon className="h-4 w-4 mr-2" />
                Learn More About This Topic
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="mt-6">
        {isAnswered && (
          <button
            onClick={handleNextQuestion}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

const additionalQuestions: MCQ[] = [
  {
    question: "What is the term for mental frameworks that organize information, according to Piaget?",
    options: ["Schemas", "Assimilation", "Accommodation", "Equilibration"],
    correctAnswerIndex: 0,
    explanation: "Schemas are mental frameworks that help organize information.",
    subjectName: SubjectName.CDP,
    topicId: "cdp1",
    subTopicId: "cdp1.1",
  },
  {
    question: "Which stage in Piaget's theory is characterized by symbolic thought but limitations like egocentrism?",
    options: ["Sensorimotor", "Preoperational", "Concrete Operational", "Formal Operational"],
    correctAnswerIndex: 1,
    explanation: "The Preoperational stage is marked by symbolic thought and limitations like egocentrism.",
    subjectName: SubjectName.CDP,
    topicId: "cdp1",
    subTopicId: "cdp1.2",
  },
  {
    question: "What is the hallmark of the Formal Operational stage in Piaget's theory?",
    options: ["Egocentrism", "Abstract reasoning", "Object permanence", "Centration"],
    correctAnswerIndex: 1,
    explanation: "Abstract reasoning is the hallmark of the Formal Operational stage.",
    subjectName: SubjectName.CDP,
    topicId: "cdp1",
    subTopicId: "cdp1.3",
  },
  {
    question: "In Kohlberg's theory, which stage focuses on obeying laws to maintain social order?",
    options: ["Stage 1", "Stage 2", "Stage 3", "Stage 4"],
    correctAnswerIndex: 3,
    explanation: "Stage 4 focuses on maintaining social order by obeying laws.",
    subjectName: SubjectName.CDP,
    topicId: "cdp1",
    subTopicId: "cdp1.4",
  },
  {
    question: "What is the 'Zone of Proximal Development' in Vygotsky's theory?",
    options: ["The gap between what a learner can do independently and with guidance", "The stage of abstract reasoning", "The process of assimilation", "The use of schemas"],
    correctAnswerIndex: 0,
    explanation: "The ZPD is the gap between what a learner can do independently and with guidance.",
    subjectName: SubjectName.CDP,
    topicId: "cdp1",
    subTopicId: "cdp1.5",
  },
  {
    question: "According to Vygotsky, what is the role of 'More Knowledgeable Other' (MKO)?",
    options: ["To provide scaffolding", "To develop schemas", "To encourage egocentrism", "To maintain social order"],
    correctAnswerIndex: 0,
    explanation: "The MKO provides scaffolding to help learners cross the ZPD.",
    subjectName: SubjectName.CDP,
    topicId: "cdp1",
    subTopicId: "cdp1.6",
  },
  {
    question: "Which of the following is a critique of Kohlberg's theory?",
    options: ["It is male-centric", "It ignores schemas", "It lacks stages", "It does not address social order"],
    correctAnswerIndex: 0,
    explanation: "Kohlberg's theory is critiqued for being male-centric and prioritizing justice over care.",
    subjectName: SubjectName.CDP,
    topicId: "cdp1",
    subTopicId: "cdp1.7",
  },
  {
    question: "What is 'scaffolding' in Vygotsky's theory?",
    options: ["Temporary support to help learners", "A stage of moral development", "A schema for organizing information", "A critique of Piaget's theory"],
    correctAnswerIndex: 0,
    explanation: "Scaffolding is temporary support provided to help learners cross the ZPD.",
    subjectName: SubjectName.CDP,
    topicId: "cdp1",
    subTopicId: "cdp1.8",
  },
  {
    question: "Which stage in Kohlberg's theory involves reasoning based on universal ethical principles?",
    options: ["Stage 4", "Stage 5", "Stage 6", "Stage 3"],
    correctAnswerIndex: 2,
    explanation: "Stage 6 involves reasoning based on universal ethical principles.",
    subjectName: SubjectName.CDP,
    topicId: "cdp1",
    subTopicId: "cdp1.9",
  },
  {
    question: "What is the key difference between Piaget and Vygotsky's theories?",
    options: ["Piaget emphasizes social interaction, while Vygotsky focuses on stages", "Piaget focuses on individual exploration, while Vygotsky emphasizes social interaction", "Piaget ignores schemas, while Vygotsky emphasizes them", "Piaget and Vygotsky have identical theories"],
    correctAnswerIndex: 1,
    explanation: "Piaget focuses on individual exploration, while Vygotsky emphasizes social interaction.",
    subjectName: SubjectName.CDP,
    topicId: "cdp1",
    subTopicId: "cdp1.10",
  }
];

export default PracticeQuiz;
