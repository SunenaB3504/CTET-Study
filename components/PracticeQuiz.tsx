import React, { useState } from 'react';
import { MCQ, SubjectName } from '../types';
import { CheckCircleIcon, XCircleIcon, BookOpenIcon } from '@heroicons/react/24/solid';

interface PracticeQuizProps {
  questions: MCQ[];
  onSelectTopicById: (subjectName: SubjectName, topicId: string) => void;
}

const PracticeQuiz: React.FC<PracticeQuizProps> = ({ questions, onSelectTopicById }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

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

  if (!questions || questions.length === 0) {
    return null;
  }

  const currentQuestion = questions[currentQuestionIndex];
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
        {currentQuestion.options.map((option, index) => {
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
              <p className="mt-1 text-gray-700">{currentQuestion.explanation}</p>
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
      <div className="mt-6 text-right">
        <button
          onClick={handleNextQuestion}
          className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-200"
        >
          {isAnswered ? 'Next Question' : 'Skip'}
        </button>
      </div>
    </div>
  );
};

export default PracticeQuiz;
