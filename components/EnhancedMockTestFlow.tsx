import React, { useState, useEffect } from 'react';
import { SubjectName, ContextualTopic, MCQ } from '../types';
import { SUBJECT_DATA } from '../constants/data';
import MockTestConfig, { TestConfiguration } from './MockTestConfig';
import EnhancedMockTest from './EnhancedMockTest';
import PerformanceAnalytics from './PerformanceAnalytics';
import { testResultsStorage, StoredTestResult } from '../constants/testResults';

interface EnhancedMockTestFlowProps {
  onBackToDashboard: () => void;
  onSelectTopicById: (subjectName: SubjectName, topicId: string) => void;
  setContextualTopic: (topic: ContextualTopic | null) => void;
}

type TestFlowState = 'config' | 'testing' | 'analytics';

const EnhancedMockTestFlow: React.FC<EnhancedMockTestFlowProps> = ({
  onBackToDashboard,
  onSelectTopicById,
  setContextualTopic,
}) => {
  const [currentState, setCurrentState] = useState<TestFlowState>('config');
  const [testConfig, setTestConfig] = useState<TestConfiguration | null>(null);
  const [selectedQuestions, setSelectedQuestions] = useState<MCQ[]>([]);

  // Generate questions based on configuration
  const generateQuestions = (config: TestConfiguration): MCQ[] => {
    const subjectData = SUBJECT_DATA.find(s => s.name === config.subject);
    if (!subjectData) return [];

    let availableQuestions: MCQ[] = [];

    if (config.topics && config.topics.length > 0) {
      // Filter by specific topics
      availableQuestions = config.topics.flatMap(topicId => {
        const topic = subjectData.topics.find(t => t.id === topicId);
        return topic?.practiceQuestions || [];
      });
    } else {
      // Use all topics
      availableQuestions = subjectData.topics.flatMap(topic => topic.practiceQuestions);
    }

    // Filter by difficulty if specified
    if (config.difficulty !== 'mixed') {
      availableQuestions = availableQuestions.filter(q =>
        q.difficulty === config.difficulty || !q.difficulty
      );
    }

    // Shuffle and limit questions
    const shuffled = [...availableQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, config.questionCount);
  };

  const handleStartTest = (config: TestConfiguration) => {
    const questions = generateQuestions(config);
    setTestConfig(config);
    setSelectedQuestions(questions);
    setCurrentState('testing');
  };

  const handleTestComplete = (
    answers: (number | null)[],
    timeSpent: number
  ) => {
    if (!testConfig) return;

    // Calculate score
    const correctAnswers = answers.filter((answer, index) =>
      answer === selectedQuestions[index].correctAnswerIndex
    ).length;

    // Save test result
    const testResult: StoredTestResult = {
      id: `test_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      config: testConfig,
      questions: selectedQuestions,
      answers,
      startTime: new Date(Date.now() - timeSpent * 1000),
      endTime: new Date(),
      score: correctAnswers,
      totalQuestions: selectedQuestions.length,
      timeSpent,
      subjectName: testConfig.subject,
    };

    testResultsStorage.saveTestResult(testResult);
    setCurrentState('analytics');
  };

  const handleBackToConfig = () => {
    setCurrentState('config');
    setTestConfig(null);
    setSelectedQuestions([]);
  };

  const handleViewAnalytics = () => {
    setCurrentState('analytics');
  };

  const handleBackToDashboard = () => {
    onBackToDashboard();
  };

  // Render based on current state
  switch (currentState) {
    case 'config':
      return (
        <MockTestConfig
          onStartTest={handleStartTest}
          onBack={handleBackToDashboard}
        />
      );

    case 'testing':
      return testConfig ? (
        <EnhancedMockTest
          config={testConfig}
          questions={selectedQuestions}
          onBackToDashboard={handleBackToConfig}
          onTestComplete={handleTestComplete}
          onSelectTopicById={onSelectTopicById}
          setContextualTopic={setContextualTopic}
        />
      ) : null;

    case 'analytics':
      return (
        <PerformanceAnalytics
          onBack={handleBackToConfig}
        />
      );

    default:
      return null;
  }
};

export default EnhancedMockTestFlow;