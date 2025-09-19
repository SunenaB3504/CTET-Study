import React, { useState, useEffect } from 'react';
import { LearningInsightsService, LearningInsights, TopicMastery, ImprovementSuggestion, SessionSummary } from '../utils/learningInsightsService';
import { ChartBarIcon, ArrowTrendingUpIcon, BookOpenIcon, LightBulbIcon, ClockIcon, TagIcon, AcademicCapIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

interface LearningInsightsDashboardProps {
  onNavigateToTopic?: (topicId: string) => void;
}

export const LearningInsightsDashboard: React.FC<LearningInsightsDashboardProps> = ({
  onNavigateToTopic
}) => {
  const [insights, setInsights] = useState<LearningInsights | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'topics' | 'sessions' | 'suggestions'>('overview');

  useEffect(() => {
    loadInsights();
  }, []);

  const loadInsights = async () => {
    try {
      const insightsData = LearningInsightsService.generateInsights();
      setInsights(insightsData);
    } catch (error) {
      console.error('Error loading insights:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!insights) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <BookOpenIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No Data Available</h3>
          <p className="mt-1 text-sm text-gray-500">Start studying to see your learning insights!</p>
        </div>
      </div>
    );
  }

  const getStrengthColor = (strength: string) => {
    switch (strength) {
      case 'mastered': return 'text-green-600 bg-green-100';
      case 'strong': return 'text-blue-600 bg-blue-100';
      case 'developing': return 'text-yellow-600 bg-yellow-100';
      case 'weak': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-200 bg-red-50';
      case 'medium': return 'border-yellow-200 bg-yellow-50';
      case 'low': return 'border-blue-200 bg-blue-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Learning Insights</h1>
          <p className="mt-2 text-gray-600">Track your progress and get personalized recommendations</p>
        </div>

        {/* Overall Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <TagIcon className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Overall Accuracy</p>
                <p className="text-2xl font-bold text-gray-900">{insights.overallProgress.overallAccuracy}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <AcademicCapIcon className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Topics Mastered</p>
                <p className="text-2xl font-bold text-gray-900">{insights.overallProgress.topicsMastered}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <ClockIcon className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Study Streak</p>
                <p className="text-2xl font-bold text-gray-900">{insights.overallProgress.studyStreak} days</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <BookOpenIcon className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Questions Answered</p>
                <p className="text-2xl font-bold text-gray-900">{insights.overallProgress.totalQuestionsAnswered}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview', icon: ChartBarIcon },
                { id: 'topics', label: 'Topic Mastery', icon: AcademicCapIcon },
                { id: 'sessions', label: 'Study Sessions', icon: ClockIcon },
                { id: 'suggestions', label: 'Suggestions', icon: LightBulbIcon }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Performance Trends */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <ArrowTrendingUpIcon className="h-5 w-5 mr-2 text-blue-600" />
                  Performance Trends
                </h3>
                {insights.performanceTrends.length > 0 ? (
                  <div className="space-y-3">
                    {insights.performanceTrends.slice(-5).map((trend, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{trend.period}</p>
                          <p className="text-xs text-gray-500">{trend.questionsAnswered} questions</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">{trend.accuracy}%</p>
                          <p className={`text-xs ${trend.improvement >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {trend.improvement >= 0 ? '+' : ''}{trend.improvement}%
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">No performance data available yet.</p>
                )}
              </div>

              {/* Study Patterns */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2 text-purple-600" />
                  Study Patterns
                </h3>
                {insights.studyPatterns.length > 0 ? (
                  <div className="space-y-3">
                    {insights.studyPatterns.map((pattern, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded">
                        <p className="text-sm font-medium text-gray-900">{pattern.pattern}</p>
                        <p className="text-xs text-gray-600 mt-1">{pattern.recommendation}</p>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${pattern.effectiveness}%` }} // eslint-disable-line
                            ></div>
                          </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">No study pattern data available yet.</p>
                )}
              </div>
            </div>
          )}

          {activeTab === 'topics' && (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <AcademicCapIcon className="h-5 w-5 mr-2 text-green-600" />
                  Topic Mastery Levels
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                {insights.topicMastery.map((topic, index) => (
                  <div key={index} className="px-6 py-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h4 className="text-sm font-medium text-gray-900">{topic.topicName}</h4>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStrengthColor(topic.strength)}`}>
                            {topic.strength}
                          </span>
                        </div>
                        <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                          <span>{topic.questionsAttempted} attempts</span>
                          <span>{topic.correctAnswers} correct</span>
                          <span>{topic.averageTime}s avg time</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${topic.masteryLevel}%` }} // eslint-disable-line
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900 w-12 text-right">
                            {topic.masteryLevel}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'sessions' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <ClockIcon className="h-5 w-5 mr-2 text-purple-600" />
                Recent Study Sessions
              </h3>
              {insights.sessionSummaries.map((session, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">
                        {session.date.toLocaleDateString()} - {session.duration} minutes
                      </h4>
                      <p className="text-xs text-gray-500">
                        {session.questionsAnswered} questions • {session.accuracy}% accuracy
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex flex-wrap gap-1">
                        {session.topicsCovered.map((topic, idx) => (
                          <span key={idx} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-medium text-gray-900 mb-2">Strengths</h5>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {session.strengths.map((strength, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-900 mb-2">Areas for Improvement</h5>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {session.areasForImprovement.map((area, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                            {area}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'suggestions' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <LightBulbIcon className="h-5 w-5 mr-2 text-yellow-600" />
                Improvement Suggestions
              </h3>
              {insights.improvementSuggestions.map((suggestion, index) => (
                <div key={index} className={`rounded-lg shadow p-6 border-l-4 ${getPriorityColor(suggestion.priority)}`}>
                  <div className="flex items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="text-sm font-medium text-gray-900">{suggestion.title}</h4>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          suggestion.priority === 'high' ? 'bg-red-100 text-red-800' :
                          suggestion.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {suggestion.priority} priority
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{suggestion.description}</p>
                      <div>
                        <h5 className="text-xs font-medium text-gray-900 mb-2">Actionable Steps:</h5>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {suggestion.actionableSteps.map((step, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-xs text-gray-500 mt-3">
                        <strong>Expected Impact:</strong> {suggestion.expectedImpact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {insights.improvementSuggestions.length === 0 && (
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <LightBulbIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No Suggestions Available</h3>
                  <p className="mt-1 text-sm text-gray-500">Keep studying to get personalized recommendations!</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};