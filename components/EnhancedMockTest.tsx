import React, { useState, useEffect, useCallback } from 'react';
import { MCQ, SubjectName, ContextualTopic } from '../types';
import { SUBJECT_DATA } from '../constants/data';
import { ChevronLeftIcon, ChevronRightIcon, ClockIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import EnhancedTestResult from './EnhancedTestResult';
import { TestConfiguration } from './MockTestConfig';

interface EnhancedMockTestProps {
  config: TestConfiguration;
  questions: MCQ[];
  onBackToDashboard: () => void;
  onTestComplete: (answers: (number | null)[], timeSpent: number) => void;
  onSelectTopicById: (subjectName: SubjectName, topicId: string) => void;
  setContextualTopic: (topic: ContextualTopic | null) => void;
}

interface QuestionResult {
  questionId: string;
  selectedAnswer: number | null;
  correctAnswer: number;
  timeSpent: number;
  topicId: string;
  subjectName: SubjectName;
  timestamp: Date;
}

const EnhancedMockTest: React.FC<EnhancedMockTestProps> = ({
  config,
  questions,
  onBackToDashboard,
  onTestComplete,
  onSelectTopicById,
  setContextualTopic,
}) => {
  const TOTAL_TIME = config.timeLimit ? config.timeLimit * 60 : questions.length * 60;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [testFinished, setTestFinished] = useState(false);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [questionResults, setQuestionResults] = useState<QuestionResult[]>([]);

  const finishTest = useCallback(() => {
    const endTime = Date.now();
    const finalQuestionResults = questions.map((q, i) => ({
      questionId: `${q.subjectName}-${q.topicId}-${i}`,
      selectedAnswer: answers[i],
      correctAnswer: q.correctAnswerIndex,
      timeSpent: i === currentQuestionIndex
        ? (endTime - questionStartTime) / 1000
        : 0, // This would need to be tracked per question
      topicId: q.topicId,
      subjectName: q.subjectName,
      timestamp: new Date(),
    }));

    setQuestionResults(finalQuestionResults);
    setTestFinished(true);
    setContextualTopic(null);
    onTestComplete(answers, TOTAL_TIME - timeLeft);
  }, [answers, questions, currentQuestionIndex, questionStartTime, TOTAL_TIME, timeLeft, setContextualTopic, onTestComplete]);

  useEffect(() => {
    if (testFinished) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          finishTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [testFinished, finishTest]);

  useEffect(() => {
    const currentQuestion = questions[currentQuestionIndex];
    const subject = SUBJECT_DATA.find(s => s.name === currentQuestion.subjectName);
    const topic = subject?.topics.find(t => t.id === currentQuestion.topicId);
    if (topic) {
      setContextualTopic({
        subjectName: currentQuestion.subjectName,
        topicId: currentQuestion.topicId,
        topicName: topic.name,
      });
    }
    setQuestionStartTime(Date.now());
    return () => {
      if (testFinished) {
        setContextualTopic(null);
      }
    };
  }, [currentQuestionIndex, questions, setContextualTopic, testFinished]);

  const handleSelectOption = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const goToNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgressColor = () => {
    const progress = (currentQuestionIndex + 1) / questions.length;
    if (progress < 0.3) return 'bg-red-500';
    if (progress < 0.7) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  if (testFinished) {
    return (
      <EnhancedTestResult
        config={config}
        questions={questions}
        answers={answers}
        timeSpent={TOTAL_TIME - timeLeft}
        questionResults={questionResults}
        onRestart={onBackToDashboard}
        onSelectTopicById={onSelectTopicById}
      />
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const answeredCount = answers.filter(a => a !== null).length;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-gray-800">
            {config.subject} - Mock Test
          </h2>
          <div className="flex items-center bg-yellow-100 text-yellow-800 font-bold px-4 py-2 rounded-full">
            <ClockIcon className="h-5 w-5 mr-2" />
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
          <div
            className={`h-3 rounded-full transition-all duration-300 ${getProgressColor()}`}
            // eslint-disable-next-line react/style-prop-object
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>

        <div className="flex justify-between text-sm text-gray-600">
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
          <span>{answeredCount} answered</span>
        </div>
      </div>

      {/* Question Display */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <QuestionMarkCircleIcon className="h-6 w-6 text-primary mr-2" />
            <span className="text-sm font-medium text-gray-600">
              {currentQuestion.subjectName} • {currentQuestion.topicId}
            </span>
          </div>

          <p className="text-xl text-gray-800 mb-6 leading-relaxed">
            {currentQuestion.question}
          </p>
        </div>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelectOption(index)}
              className={`w-full text-left p-4 border-2 rounded-lg transition-all duration-200 flex items-center hover:shadow-md ${
                answers[currentQuestionIndex] === index
                  ? 'bg-primary border-primary-dark text-white shadow-lg'
                  : 'bg-white hover:bg-gray-50 border-gray-300 hover:border-primary'
              }`}
            >
              <span className="flex-1">{option}</span>
              {answers[currentQuestionIndex] === index && (
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Question Navigation Dots */}
        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestionIndex(index)}
              className={`w-8 h-8 rounded-full text-xs font-medium transition-all duration-200 ${
                index === currentQuestionIndex
                  ? 'bg-primary text-white'
                  : answers[index] !== null
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white p-4 mt-4 rounded-lg shadow-md flex justify-between items-center">
        <button
          onClick={goToPrev}
          disabled={currentQuestionIndex === 0}
          className="flex items-center bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ChevronLeftIcon className="h-5 w-5 mr-2" /> Previous
        </button>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setAnswers(prev => {
              const newAnswers = [...prev];
              newAnswers[currentQuestionIndex] = null;
              return newAnswers;
            })}
            className="text-gray-600 hover:text-gray-800 font-medium text-sm"
          >
            Clear Answer
          </button>

          <button
            onClick={finishTest}
            className="bg-danger text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-all duration-200"
          >
            Submit Test
          </button>
        </div>

        <button
          onClick={goToNext}
          disabled={currentQuestionIndex === questions.length - 1}
          className="flex items-center bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          Next <ChevronRightIcon className="h-5 w-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default EnhancedMockTest;