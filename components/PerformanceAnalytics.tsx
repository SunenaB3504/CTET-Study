import React, { useState, useEffect } from 'react';
import { SubjectName } from '../types';
import { testResultsStorage, TestAnalytics, StoredTestResult } from '../constants/testResults';
import {
  ChartBarIcon,
  ClockIcon,
  TrophyIcon,
  BookOpenIcon,
  CalendarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/react/24/solid';

interface PerformanceAnalyticsProps {
  onBack: () => void;
}

const PerformanceAnalytics: React.FC<PerformanceAnalyticsProps> = ({ onBack }) => {
  const [analytics, setAnalytics] = useState<TestAnalytics | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<SubjectName | 'all'>('all');
  const [timeRange, setTimeRange] = useState<'all' | 'week' | 'month'>('all');

  useEffect(() => {
    const data = testResultsStorage.getAnalytics();
    setAnalytics(data);
  }, []);

  if (!analytics) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Loading analytics...</div>
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m ${secs}s`;
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getImprovementColor = (improvement: number) => {
    if (improvement > 0) return 'text-green-600';
    if (improvement < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const getImprovementIcon = (improvement: number) => {
    if (improvement > 0) return <ArrowUpIcon className="h-4 w-4" />;
    if (improvement < 0) return <ArrowDownIcon className="h-4 w-4" />;
    return null;
  };

  return (
    <div className="animate-fade-in max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <ChartBarIcon className="h-8 w-8 text-primary mr-3" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Performance Analytics</h2>
              <p className="text-gray-600">Track your progress and identify improvement areas</p>
            </div>
          </div>
          <button
            onClick={onBack}
            className="text-gray-600 hover:text-gray-800 font-medium"
          >
            ← Back to Dashboard
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">{analytics.totalTests}</div>
            <div className="text-sm text-blue-800 font-medium">Total Tests</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">
              {analytics.averageScore.toFixed(1)}%
            </div>
            <div className="text-sm text-green-800 font-medium">Avg Score</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {formatTime(analytics.averageTime)}
            </div>
            <div className="text-sm text-yellow-800 font-medium">Avg Time</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600">
              {Object.keys(analytics.subjectBreakdown).length}
            </div>
            <div className="text-sm text-purple-800 font-medium">Subjects</div>
          </div>
        </div>
      </div>

      {/* Subject-wise Performance */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <BookOpenIcon className="h-6 w-6 mr-2 text-primary" />
          Subject-wise Performance
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(analytics.subjectBreakdown).map(([subject, data]) => (
            <div key={subject} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">{subject}</h4>
                <div className={`flex items-center text-sm ${getImprovementColor(data.improvement)}`}>
                  {getImprovementIcon(data.improvement)}
                  <span className="ml-1">{Math.abs(data.improvement).toFixed(1)}%</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tests Taken:</span>
                  <span className="font-medium">{data.tests}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Avg Score:</span>
                  <span className={`font-medium ${getScoreColor(data.averageScore, 100)}`}>
                    {data.averageScore.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Improvement:</span>
                  <span className={`font-medium ${getImprovementColor(data.improvement)}`}>
                    {data.improvement > 0 ? '+' : ''}{data.improvement.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Tests */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <CalendarIcon className="h-6 w-6 mr-2 text-primary" />
          Recent Test History
        </h3>

        {analytics.recentTests.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <TrophyIcon className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>No tests taken yet. Start practicing to see your progress!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {analytics.recentTests.map((test, index) => (
              <div key={test.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">
                        {formatDate(test.startTime)}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-gray-800">
                      {test.subjectName}
                    </div>
                  </div>
                  <div className={`text-lg font-bold ${getScoreColor(test.score, test.totalQuestions)}`}>
                    {test.score}/{test.totalQuestions}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Questions:</span>
                    <span className="ml-2 font-medium">{test.totalQuestions}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Time:</span>
                    <span className="ml-2 font-medium">{formatTime(test.timeSpent)}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Score:</span>
                    <span className={`ml-2 font-medium ${getScoreColor(test.score, test.totalQuestions)}`}>
                      {((test.score / test.totalQuestions) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Export Data */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Data Management</h3>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => {
              const data = testResultsStorage.exportData();
              const blob = new Blob([data], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `ctet-analytics-${new Date().toISOString().split('T')[0]}.json`;
              a.click();
              URL.revokeObjectURL(url);
            }}
            className="bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-200"
          >
            Export Data
          </button>
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to clear all test data? This action cannot be undone.')) {
                testResultsStorage.clearAllData();
                setAnalytics(testResultsStorage.getAnalytics());
              }
            }}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-200"
          >
            Clear All Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;