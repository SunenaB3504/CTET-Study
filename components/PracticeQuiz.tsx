import React, { useState } from 'react';
import { MCQ, SubjectName, EnhancedExplanation } from '../types.js';
import { CheckCircleIcon, XCircleIcon, BookOpenIcon } from '@heroicons/react/24/solid';

interface PracticeQuizProps {
  questions: MCQ[];
  onSelectTopicById: (subjectName: SubjectName, topicId: string) => void;
}

const PracticeQuiz: React.FC<PracticeQuizProps> = ({ questions, onSelectTopicById }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  // Helper function to shuffle an array
  const shuffleArray = (array: MCQ[]): MCQ[] => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  // Store shuffled questions in state so shuffling only happens once
  const [limitedQuestions, setLimitedQuestions] = useState<MCQ[]>([]);

  React.useEffect(() => {
    const ensureMinimumQuestions = (questions: MCQ[]): MCQ[] => {
      if (questions.length >= 10) return shuffleArray(questions);
      const additionalQuestions = [...questions];
      while (additionalQuestions.length < 10) {
        additionalQuestions.push(...questions);
      }
      return shuffleArray(additionalQuestions.slice(0, 10));
    };
    setLimitedQuestions(ensureMinimumQuestions(questions));
    setCurrentQuestionIndex(0);
    setIsQuizCompleted(false);
    setCompletedQuestions([]);
    setSelectedOption(null);
    setIsAnswered(false);
  }, [questions]);

  const currentQuestion = limitedQuestions[currentQuestionIndex];

  if (!limitedQuestions || limitedQuestions.length === 0) {
    return null;
  }

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
    const nextIndex = currentQuestionIndex + 1;
    setCompletedQuestions((prev) => [...prev, currentQuestionIndex]);

    if (completedQuestions.length + 1 === limitedQuestions.length) {
      setIsQuizCompleted(true);
      return;
    }

    setCurrentQuestionIndex(nextIndex % limitedQuestions.length);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const isCorrect = selectedOption === currentQuestion.correctAnswerIndex;

  if (isQuizCompleted) {
    return (
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Quiz Completed</h3>
        <p className="text-lg text-gray-700">You have answered all the questions in this quiz. Great job!</p>
      </div>
    );
  }

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

export default PracticeQuiz;
