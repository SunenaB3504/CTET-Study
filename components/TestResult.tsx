import React, { useState } from 'react';
import { MockTestResult, SubjectName } from '../types';
import {
  CheckIcon,
  XMarkIcon,
  ChevronDownIcon,
  BookOpenIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid';

interface TestResultProps {
  result: MockTestResult;
  onRestart: () => void;
  onSelectTopicById: (subjectName: SubjectName, topicId: string) => void;
}

const TestResult: React.FC<TestResultProps> = ({ result, onRestart, onSelectTopicById }) => {
  const [showReview, setShowReview] = useState(false);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m ${secs}s`;
  };

  return (
    <div className="animate-fade-in space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-4xl font-bold text-primary mb-2">Test Complete!</h2>
        <p className="text-gray-600 mb-6">Here's your performance summary.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-blue-600">
              {result.score}/{result.totalQuestions}
            </p>
            <p className="text-sm text-blue-800 font-semibold uppercase">Score</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-green-600">{result.correctAnswers}</p>
            <p className="text-sm text-green-800 font-semibold uppercase">Correct</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-red-600">{result.incorrectAnswers}</p>
            <p className="text-sm text-red-800 font-semibold uppercase">Incorrect</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-3xl font-bold text-gray-600">{result.unattempted}</p>
            <p className="text-sm text-gray-800 font-semibold uppercase">Unattempted</p>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-600">
            Time taken: <span className="font-bold text-gray-800">{formatTime(result.timeTaken)}</span>
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onRestart}
            className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors duration-200"
          >
            Back to Dashboard
          </button>
          <button
            onClick={() => setShowReview(!showReview)}
            className="flex items-center bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-300 transition-colors duration-200"
          >
            Review Your Answers{' '}
            <ChevronDownIcon className={`h-5 w-5 ml-2 transition-transform ${showReview ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {showReview && (
        <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Answer Review</h3>
          <div className="space-y-6">
            {result.questions.map((q, index) => {
              const userAnswer = result.answers[index];
              const isCorrect = userAnswer === q.correctAnswerIndex;
              const isUnattempted = userAnswer === null;

              return (
                <div key={index} className="border-b pb-6 last:border-b-0">
                  <p className="text-lg font-semibold text-gray-800 mb-3">
                    {index + 1}. {q.question}
                  </p>
                  <div className="space-y-2">
                    {q.options.map((option, optIndex) => {
                      const isSelected = userAnswer === optIndex;
                      const isCorrectAnswer = q.correctAnswerIndex === optIndex;

                      let stateClasses = 'border-gray-300';
                      if (isCorrectAnswer) {
                        stateClasses = 'border-green-500 bg-green-50';
                      }
                      if (isSelected && !isCorrectAnswer) {
                        stateClasses = 'border-red-500 bg-red-50';
                      }

                      return (
                        <div
                          key={optIndex}
                          className={`p-3 border rounded-md flex items-center text-left ${stateClasses}`}
                        >
                          {isSelected && !isCorrect && (
                            <XCircleIcon className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                          )}
                          {isCorrectAnswer && <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />}
                          <span className="flex-1">{option}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 p-4 rounded-lg bg-gray-50">
                    <p className="text-sm font-semibold text-gray-700">Explanation:</p>
                    <p className="text-sm text-gray-600 mt-1">{q.explanation}</p>
                    <button
                      onClick={() => onSelectTopicById(q.subjectName, q.topicId)}
                      className="mt-3 flex items-center text-sm text-secondary hover:text-primary font-semibold"
                    >
                      <BookOpenIcon className="h-4 w-4 mr-2" />
                      Learn More About This Topic
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestResult;
