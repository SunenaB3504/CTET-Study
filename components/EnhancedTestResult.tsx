import React, { useState, useMemo } from 'react';
import { MCQ, SubjectName } from '../types';
import { TestConfiguration } from './MockTestConfig';
import {
  CheckIcon,
  XMarkIcon,
  ChevronDownIcon,
  BookOpenIcon,
  CheckCircleIcon,
  XCircleIcon,
  ChartBarIcon,
  ClockIcon,
  TrophyIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
} from '@heroicons/react/24/solid';

interface QuestionResult {
  questionId: string;
  selectedAnswer: number | null;
  correctAnswer: number;
  timeSpent: number;
  topicId: string;
  subjectName: SubjectName;
  timestamp: Date;
}

interface EnhancedTestResultProps {
  config: TestConfiguration;
  questions: MCQ[];
  answers: (number | null)[];
  timeSpent: number;
  questionResults: QuestionResult[];
  onRestart: () => void;
  onSelectTopicById: (subjectName: SubjectName, topicId: string) => void;
}

const EnhancedTestResult: React.FC<EnhancedTestResultProps> = ({
  config,
  questions,
  answers,
  timeSpent,
  questionResults,
  onRestart,
  onSelectTopicById,
}) => {
  const [showReview, setShowReview] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(true);

  const analytics = useMemo(() => {
    const correctAnswers = answers.filter((answer, index) =>
      answer === questions[index].correctAnswerIndex
    ).length;

    const incorrectAnswers = answers.filter((answer, index) =>
      answer !== null && answer !== questions[index].correctAnswerIndex
    ).length;

    const unattempted = answers.filter(answer => answer === null).length;

    const successRate = (correctAnswers / questions.length) * 100;
    const averageTimePerQuestion = timeSpent / questions.length;

    // Topic-wise analysis
    const topicStats = questions.reduce((acc, question, index) => {
      const topicId = question.topicId;
      if (!acc[topicId]) {
        acc[topicId] = { total: 0, correct: 0, name: topicId };
      }
      acc[topicId].total++;
      if (answers[index] === question.correctAnswerIndex) {
        acc[topicId].correct++;
      }
      return acc;
    }, {} as Record<string, { total: number; correct: number; name: string }>);

    // Difficulty analysis
    const difficultyStats = questions.reduce((acc, question, index) => {
      const difficulty = question.difficulty || 'medium';
      if (!acc[difficulty]) {
        acc[difficulty] = { total: 0, correct: 0 };
      }
      acc[difficulty].total++;
      if (answers[index] === question.correctAnswerIndex) {
        acc[difficulty].correct++;
      }
      return acc;
    }, {} as Record<string, { total: number; correct: number }>);

    return {
      correctAnswers,
      incorrectAnswers,
      unattempted,
      successRate,
      averageTimePerQuestion,
      topicStats,
      difficultyStats,
    };
  }, [questions, answers, timeSpent]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m ${secs}s`;
  };

  const getPerformanceColor = (rate: number) => {
    if (rate >= 80) return 'text-green-600';
    if (rate >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getPerformanceMessage = (rate: number) => {
    if (rate >= 80) return 'Excellent performance! 🎉';
    if (rate >= 60) return 'Good job! Keep practicing. 👍';
    return 'Room for improvement. Focus on weak areas. 📚';
  };

  const getImprovementSuggestions = () => {
    const suggestions = [];

    if (analytics.unattempted > 0) {
      suggestions.push('Try to attempt all questions within the time limit');
    }

    const weakTopics = Object.entries(analytics.topicStats)
      .filter(([, stats]) => (stats.correct / stats.total) < 0.6)
      .map(([topicId, stats]) => stats.name);

    if (weakTopics.length > 0) {
      suggestions.push(`Focus on these topics: ${weakTopics.join(', ')}`);
    }

    if (analytics.averageTimePerQuestion > 90) {
      suggestions.push('Work on time management - try to solve questions faster');
    }

    return suggestions;
  };

  return (
    <div className="animate-fade-in space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="flex items-center justify-center mb-4">
          <TrophyIcon className="h-12 w-12 text-primary mr-3" />
          <h2 className="text-4xl font-bold text-primary">Test Complete!</h2>
        </div>
        <p className="text-gray-600 mb-6">{getPerformanceMessage(analytics.successRate)}</p>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className={`text-3xl font-bold ${getPerformanceColor(analytics.successRate)}`}>
              {analytics.successRate.toFixed(1)}%
            </p>
            <p className="text-sm text-blue-800 font-semibold uppercase">Success Rate</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-green-600">{analytics.correctAnswers}</p>
            <p className="text-sm text-green-800 font-semibold uppercase">Correct</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-red-600">{analytics.incorrectAnswers}</p>
            <p className="text-sm text-red-800 font-semibold uppercase">Incorrect</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-3xl font-bold text-gray-600">{analytics.unattempted}</p>
            <p className="text-sm text-gray-800 font-semibold uppercase">Unattempted</p>
          </div>
        </div>

        <div className="text-center mb-8 space-y-2">
          <p className="text-gray-600">
            Time taken: <span className="font-bold text-gray-800">{formatTime(timeSpent)}</span>
          </p>
          <p className="text-gray-600">
            Average time per question: <span className="font-bold text-gray-800">
              {analytics.averageTimePerQuestion.toFixed(1)}s
            </span>
          </p>
        </div>
      </div>

      {/* Analytics Dashboard */}
      {showAnalytics && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center">
              <ChartBarIcon className="h-6 w-6 mr-2 text-primary" />
              Performance Analytics
            </h3>
            <button
              onClick={() => setShowAnalytics(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Hide analytics"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Topic Performance */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Topic-wise Performance</h4>
              <div className="space-y-3">
                {Object.entries(analytics.topicStats).map(([topicId, stats]) => {
                  const rate = (stats.correct / stats.total) * 100;
                  return (
                    <div key={topicId} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">{stats.name}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              rate >= 80 ? 'bg-green-500' :
                              rate >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${Math.min(rate, 100)}%` }}
                          ></div>
                        </div>
                        <span className={`text-sm font-medium ${getPerformanceColor(rate)}`}>
                          {rate.toFixed(0)}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Difficulty Analysis */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Difficulty Analysis</h4>
              <div className="space-y-3">
                {Object.entries(analytics.difficultyStats).map(([difficulty, stats]) => {
                  const rate = (stats.correct / stats.total) * 100;
                  return (
                    <div key={difficulty} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 capitalize">{difficulty}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">
                          {stats.correct}/{stats.total}
                        </span>
                        <span className={`text-sm font-medium ${getPerformanceColor(rate)}`}>
                          {rate.toFixed(0)}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Improvement Suggestions */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start">
              <LightBulbIcon className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
              <div>
                <h5 className="font-semibold text-blue-800 mb-2">Improvement Suggestions</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  {getImprovementSuggestions().map((suggestion, index) => (
                    <li key={index}>• {suggestion}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={onRestart}
            className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors duration-200"
          >
            Back to Dashboard
          </button>
          <button
            onClick={() => setShowAnalytics(!showAnalytics)}
            className="flex items-center bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-300 transition-colors duration-200"
          >
            <ChartBarIcon className="h-5 w-5 mr-2" />
            {showAnalytics ? 'Hide' : 'Show'} Analytics
          </button>
          <button
            onClick={() => setShowReview(!showReview)}
            className="flex items-center bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-300 transition-colors duration-200"
          >
            Review Answers{' '}
            <ChevronDownIcon className={`h-5 w-5 ml-2 transition-transform ${showReview ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Answer Review */}
      {showReview && (
        <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Detailed Answer Review</h3>
          <div className="space-y-6">
            {questions.map((q, index) => {
              const userAnswer = answers[index];
              const isCorrect = userAnswer === q.correctAnswerIndex;
              const isUnattempted = userAnswer === null;

              return (
                <div key={index} className="border-b pb-6 last:border-b-0">
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-lg font-semibold text-gray-800 flex-1">
                      {index + 1}. {q.question}
                    </p>
                    <div className="flex items-center ml-4">
                      {isCorrect && <CheckCircleIcon className="h-6 w-6 text-green-500" />}
                      {!isCorrect && !isUnattempted && <XCircleIcon className="h-6 w-6 text-red-500" />}
                      {isUnattempted && <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500" />}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
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

                  {/* Enhanced Explanation */}
                  <div className="mt-4 p-4 rounded-lg bg-gray-50">
                    {typeof q.explanation === 'object' ? (
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-gray-700 mb-1">Basic Explanation:</h5>
                          <p className="text-sm text-gray-600">{q.explanation.basic}</p>
                        </div>

                        {q.explanation.theory && (
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-1">Theoretical Foundation:</h5>
                            <p className="text-sm text-gray-600">{q.explanation.theory}</p>
                          </div>
                        )}

                        {q.explanation.realLifeExample && (
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-1">Real-Life Example:</h5>
                            <p className="text-sm text-gray-600">{q.explanation.realLifeExample}</p>
                          </div>
                        )}

                        {q.explanation.detailed && (
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-1">Detailed Analysis:</h5>
                            <p className="text-sm text-gray-600">{q.explanation.detailed}</p>
                          </div>
                        )}

                        {q.explanation.teachingTip && (
                          <div className="mt-3 p-3 bg-blue-50 rounded-md border border-blue-200">
                            <h5 className="font-semibold text-blue-800 mb-1 flex items-center">
                              <LightBulbIcon className="h-4 w-4 mr-2" />
                              Teaching Tip:
                            </h5>
                            <p className="text-sm text-blue-700">{q.explanation.teachingTip}</p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm font-semibold text-gray-700">Explanation:</p>
                        <p className="text-sm text-gray-600 mt-1">{q.explanation}</p>
                      </div>
                    )}

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

export default EnhancedTestResult;