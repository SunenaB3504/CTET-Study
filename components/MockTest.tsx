import React, { useState, useEffect, useCallback } from 'react';
import { MCQ, MockTestResult, QuestionPaper, SubjectName, ContextualTopic } from '../types';
import { ChevronLeftIcon, ChevronRightIcon, ClockIcon } from '@heroicons/react/24/solid';
import TestResult from './TestResult';
import { SUBJECT_DATA } from '../constants/data';

interface MockTestProps {
  paper: QuestionPaper;
  onBackToDashboard: () => void;
  onSelectTopicById: (subjectName: SubjectName, topicId: string) => void;
  setContextualTopic: (topic: ContextualTopic | null) => void;
}

const MockTest: React.FC<MockTestProps> = ({ paper, onBackToDashboard, onSelectTopicById, setContextualTopic }) => {
  const { questions, name } = paper;
  const TOTAL_TIME = questions.length * 60; // 1 minute per question

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [testFinished, setTestFinished] = useState(false);
  const [result, setResult] = useState<MockTestResult | null>(null);

  const finishTest = useCallback(() => {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let unattempted = 0;

    questions.forEach((q, i) => {
      if (answers[i] === null) {
        unattempted++;
      } else if (answers[i] === q.correctAnswerIndex) {
        correctAnswers++;
      } else {
        incorrectAnswers++;
      }
    });

    setResult({
      score: correctAnswers,
      totalQuestions: questions.length,
      correctAnswers,
      incorrectAnswers,
      unattempted,
      timeTaken: TOTAL_TIME - timeLeft,
      answers,
      questions,
    });
    setTestFinished(true);
    setContextualTopic(null);
  }, [answers, questions, timeLeft, TOTAL_TIME, setContextualTopic]);

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

  if (testFinished && result) {
    return <TestResult result={result} onRestart={onBackToDashboard} onSelectTopicById={onSelectTopicById} />;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col h-full">
      <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <div className="flex items-center bg-yellow-100 text-yellow-800 font-bold px-4 py-2 rounded-full">
          <ClockIcon className="h-6 w-6 mr-2" />
          <span>{formatTime(timeLeft)}</span>
        </div>
      </div>

      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg font-semibold text-gray-700 mb-4">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
        <p className="text-xl text-gray-800 mb-6">{currentQuestion.question}</p>
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelectOption(index)}
              className={`w-full text-left p-4 border rounded-lg transition-colors duration-200 flex items-center
                ${
                  answers[currentQuestionIndex] === index
                    ? 'bg-primary border-primary-dark text-white'
                    : 'bg-white hover:bg-gray-100 border-gray-300'
                }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 mt-4 rounded-lg shadow-md flex justify-between items-center">
        <button
          onClick={goToPrev}
          disabled={currentQuestionIndex === 0}
          className="flex items-center bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          <ChevronLeftIcon className="h-5 w-5 mr-1" /> Previous
        </button>
        <button onClick={finishTest} className="bg-danger text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700">
          Submit Test
        </button>
        <button
          onClick={goToNext}
          disabled={currentQuestionIndex === questions.length - 1}
          className="flex items-center bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-dark disabled:opacity-50"
        >
          Next <ChevronRightIcon className="h-5 w-5 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default MockTest;
