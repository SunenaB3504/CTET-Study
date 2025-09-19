import React, { useState, useEffect } from 'react';
import { SubjectName, MCQ } from '../types';
import { SUBJECT_DATA } from '../constants/data';
import { PlayIcon, Cog6ToothIcon, ClockIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';

interface MockTestConfigProps {
  onStartTest: (config: TestConfiguration) => void;
  onBack: () => void;
}

export interface TestConfiguration {
  subject: SubjectName;
  questionCount: number;
  difficulty: 'mixed' | 'easy' | 'medium' | 'hard';
  timeLimit?: number; // minutes
  topics?: string[]; // specific topics to include
}

const MockTestConfig: React.FC<MockTestConfigProps> = ({ onStartTest, onBack }) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectName | null>(null);
  const [questionCount, setQuestionCount] = useState<number>(25);
  const [difficulty, setDifficulty] = useState<'mixed' | 'easy' | 'medium' | 'hard'>('mixed');
  const [timeLimit, setTimeLimit] = useState<number | null>(null);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [availableQuestions, setAvailableQuestions] = useState<MCQ[]>([]);

  // Update available questions when subject changes
  useEffect(() => {
    if (selectedSubject) {
      const subjectData = SUBJECT_DATA.find(s => s.name === selectedSubject);
      if (subjectData) {
        const allQuestions = subjectData.topics.flatMap(topic => topic.practiceQuestions);
        setAvailableQuestions(allQuestions);
        setSelectedTopics([]); // Reset topic selection
      }
    } else {
      setAvailableQuestions([]);
      setSelectedTopics([]);
    }
  }, [selectedSubject]);

  const getSubjectTopics = () => {
    if (!selectedSubject) return [];
    const subjectData = SUBJECT_DATA.find(s => s.name === selectedSubject);
    return subjectData?.topics || [];
  };

  const getMaxQuestions = () => {
    if (selectedTopics.length > 0) {
      return selectedTopics.reduce((total, topicId) => {
        const topic = getSubjectTopics().find(t => t.id === topicId);
        return total + (topic?.practiceQuestions.length || 0);
      }, 0);
    }
    return availableQuestions.length;
  };

  const handleTopicToggle = (topicId: string) => {
    setSelectedTopics(prev =>
      prev.includes(topicId)
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  const handleStartTest = () => {
    if (!selectedSubject) return;

    const config: TestConfiguration = {
      subject: selectedSubject,
      questionCount: Math.min(questionCount, getMaxQuestions()),
      difficulty,
      timeLimit: timeLimit || undefined,
      topics: selectedTopics.length > 0 ? selectedTopics : undefined,
    };

    onStartTest(config);
  };

  const maxQuestions = getMaxQuestions();
  const isValidConfig = selectedSubject && maxQuestions >= questionCount;

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center">
            <Cog6ToothIcon className="h-8 w-8 mr-3 text-primary" />
            Configure Your Mock Test
          </h2>
          <button
            onClick={onBack}
            className="text-gray-600 hover:text-gray-800 font-medium"
          >
            ← Back to Dashboard
          </button>
        </div>
        <p className="text-gray-600">Customize your test experience with advanced filtering options</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Subject Selection */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <QuestionMarkCircleIcon className="h-6 w-6 mr-2 text-primary" />
            Select Subject
          </h3>
          <div className="space-y-3">
            {SUBJECT_DATA.map(subject => (
              <button
                key={subject.name}
                onClick={() => setSelectedSubject(subject.name)}
                className={`w-full text-left p-4 border rounded-lg transition-all duration-200 flex items-center ${
                  selectedSubject === subject.name
                    ? 'bg-primary border-primary-dark text-white'
                    : 'bg-white hover:bg-gray-50 border-gray-300 hover:border-primary'
                }`}
              >
                <subject.icon className={`h-6 w-6 mr-3 ${
                  selectedSubject === subject.name ? 'text-white' : 'text-primary'
                }`} />
                <div>
                  <div className="font-medium">{subject.name}</div>
                  <div className={`text-sm ${
                    selectedSubject === subject.name ? 'text-white/80' : 'text-gray-500'
                  }`}>
                    {subject.topics.length} topics available
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Test Configuration */}
        <div className="space-y-6">
          {/* Question Count */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Number of Questions</h3>
            <div className="space-y-3">
              <input
                type="range"
                min="5"
                max={maxQuestions || 50}
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                disabled={!selectedSubject}
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>5 questions</span>
                <span className="font-semibold text-primary">{questionCount} questions</span>
                <span>{maxQuestions || 50} questions</span>
              </div>
              {selectedSubject && (
                <p className="text-xs text-gray-500">
                  Available: {maxQuestions} questions in selected topics
                </p>
              )}
            </div>
          </div>

          {/* Difficulty Level */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Difficulty Level</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: 'mixed', label: 'Mixed', color: 'bg-gray-100 text-gray-800' },
                { value: 'easy', label: 'Easy', color: 'bg-green-100 text-green-800' },
                { value: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-800' },
                { value: 'hard', label: 'Hard', color: 'bg-red-100 text-red-800' },
              ].map(({ value, label, color }) => (
                <button
                  key={value}
                  onClick={() => setDifficulty(value as any)}
                  className={`p-3 rounded-lg font-medium transition-all duration-200 ${
                    difficulty === value
                      ? `${color} ring-2 ring-primary`
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }`}
                  disabled={!selectedSubject}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Time Limit */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <ClockIcon className="h-5 w-5 mr-2 text-primary" />
              Time Limit (Optional)
            </h3>
            <div className="flex items-center space-x-3">
              <label htmlFor="timeLimit" className="sr-only">Time Limit (minutes)</label>
              <input
                id="timeLimit"
                type="number"
                min="5"
                max="180"
                value={timeLimit || ''}
                onChange={(e) => setTimeLimit(e.target.value ? Number(e.target.value) : null)}
                placeholder="No limit"
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={!selectedSubject}
              />
              <span className="text-gray-600">minutes</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Leave empty for no time limit. Recommended: 1 minute per question.
            </p>
          </div>
        </div>
      </div>

      {/* Topic Selection */}
      {selectedSubject && getSubjectTopics().length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Specific Topics (Optional)</h3>
          <p className="text-sm text-gray-600 mb-4">
            Choose specific topics to focus on, or leave unselected to include all topics.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {getSubjectTopics().map(topic => (
              <button
                key={topic.id}
                onClick={() => handleTopicToggle(topic.id)}
                className={`p-3 text-left border rounded-lg transition-all duration-200 ${
                  selectedTopics.includes(topic.id)
                    ? 'bg-primary border-primary-dark text-white'
                    : 'bg-gray-50 hover:bg-gray-100 border-gray-300 text-gray-700'
                }`}
              >
                <div className="font-medium">{topic.name}</div>
                <div className={`text-sm ${
                  selectedTopics.includes(topic.id) ? 'text-white/80' : 'text-gray-500'
                }`}>
                  {topic.practiceQuestions.length} questions
                </div>
              </button>
            ))}
          </div>
          {selectedTopics.length > 0 && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                Selected {selectedTopics.length} topic(s) with {maxQuestions} total questions available.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Start Test Button */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Ready to Start?</h3>
            <p className="text-gray-600">
              {selectedSubject
                ? `${questionCount} questions from ${selectedSubject}${selectedTopics.length > 0 ? ` (${selectedTopics.length} topics)` : ''}`
                : 'Please select a subject to continue'
              }
            </p>
          </div>
          <button
            onClick={handleStartTest}
            disabled={!isValidConfig}
            className={`flex items-center px-8 py-4 rounded-lg font-bold text-white transition-all duration-200 ${
              isValidConfig
                ? 'bg-primary hover:bg-primary-dark shadow-lg hover:shadow-xl'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            <PlayIcon className="h-6 w-6 mr-3" />
            Start Mock Test
          </button>
        </div>
        {!isValidConfig && selectedSubject && (
          <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-800">
              Not enough questions available. Please reduce the question count or select more topics.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MockTestConfig;