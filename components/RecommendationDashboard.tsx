import React, { useState, useEffect } from 'react';
import { Subject, ExperienceLevel } from '../types';
import { RecommendationService, RecommendationResult, RecommendationScore } from '../utils/recommendationService';
import { ProgressTrackingService } from '../utils/progressTracking';
import { SUBJECT_DATA } from '../constants/data';
import { LightBulbIcon, ChartBarIcon, ClockIcon, TagIcon, ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { TrophyIcon, ExclamationTriangleIcon, SparklesIcon } from '@heroicons/react/24/solid';

interface RecommendationDashboardProps {
  experienceLevel: ExperienceLevel;
  onClose: () => void;
  onSelectTopic?: (subjectName: string, topicId: string) => void;
}

const RecommendationDashboard: React.FC<RecommendationDashboardProps> = ({
  experienceLevel,
  onClose,
  onSelectTopic
}) => {
  const [recommendations, setRecommendations] = useState<RecommendationResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedRecommendation, setSelectedRecommendation] = useState<RecommendationScore | null>(null);

  useEffect(() => {
    loadRecommendations();
  }, [experienceLevel]);

  const loadRecommendations = async () => {
    try {
      setLoading(true);
      const progressService = ProgressTrackingService;
      const userProgress = progressService.loadProgress();
      const recommendationService = RecommendationService.getInstance();

      if (!userProgress) {
        // Initialize progress if it doesn't exist
        const initializedProgress = progressService.initializeProgress(experienceLevel);
        const result = recommendationService.generateRecommendations(
          initializedProgress.questionAttempts.map(attempt => ({
            ...attempt,
            subjectName: attempt.subjectName as any // Type assertion for compatibility
          })),
          initializedProgress.completedTopics,
          experienceLevel,
          SUBJECT_DATA
        );
        setRecommendations(result);
        return;
      }

      const result = recommendationService.generateRecommendations(
        userProgress.questionAttempts.map(attempt => ({
          ...attempt,
          subjectName: attempt.subjectName as any // Type assertion for compatibility
        })),
        userProgress.completedTopics,
        experienceLevel,
        SUBJECT_DATA
      );

      setRecommendations(result);
    } catch (error) {
      console.error('Error loading recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPriorityColor = (priority: 'high' | 'medium' | 'low') => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  const getDifficultyColor = (difficulty: 'easy' | 'medium' | 'hard') => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
    }
  };

  const getSuccessRateColor = (rate: number) => {
    if (rate >= 0.8) return 'text-green-600';
    if (rate >= 0.6) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Analyzing your progress...</p>
        </div>
      </div>
    );
  }

  if (!recommendations) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ExclamationTriangleIcon className="h-12 w-12 text-gray-400 mx-auto" />
          <p className="mt-4 text-gray-600">Unable to load recommendations</p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <LightBulbIcon className="h-8 w-8 text-primary mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Personalized Recommendations</h1>
                <p className="text-sm text-gray-600">AI-powered study suggestions based on your progress</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Recommendations */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center mb-6">
                <TrophyIcon className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">Recommended Topics</h2>
              </div>

              <div className="space-y-4">
                {recommendations.recommendations.map((rec, index) => (
                  <div
                    key={rec.topicId}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setSelectedRecommendation(rec)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="text-lg font-medium text-gray-900 mr-3">
                            {index + 1}. {rec.topicName}
                          </span>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(rec.priority)}`}>
                            {rec.priority.toUpperCase()}
                          </span>
                        </div>

                        <p className="text-sm text-gray-600 mb-2">{rec.subjectName}</p>
                        <p className="text-sm text-gray-700 mb-3">{rec.reason}</p>

                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center">
                            <ChartBarIcon className="h-4 w-4 text-gray-400 mr-1" />
                            <span className={`font-medium ${getSuccessRateColor(rec.expectedSuccessRate)}`}>
                              {Math.round(rec.expectedSuccessRate * 100)}% expected success
                            </span>
                          </div>
                          <div className="flex items-center">
                            <TagIcon className="h-4 w-4 text-gray-400 mr-1" />
                            <span className={`px-2 py-1 text-xs rounded ${getDifficultyColor(rec.estimatedDifficulty)}`}>
                              {rec.estimatedDifficulty}
                            </span>
                          </div>
                        </div>
                      </div>

                      <ArrowRightIcon className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>

              {recommendations.recommendations.length === 0 && (
                <div className="text-center py-8">
                  <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <p className="text-gray-600">Great job! You're performing well across all topics.</p>
                  <p className="text-sm text-gray-500 mt-2">Keep up the good work!</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weak Areas */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center mb-4">
                <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Areas for Improvement</h3>
              </div>

              {recommendations.weakAreas.length > 0 ? (
                <ul className="space-y-2">
                  {recommendations.weakAreas.slice(0, 3).map((area, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {area}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-600">No significant weak areas identified. Keep it up!</p>
              )}
            </div>

            {/* Improvement Suggestions */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center mb-4">
                <SparklesIcon className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Study Tips</h3>
              </div>

              <ul className="space-y-3">
                {recommendations.improvementAreas.map((suggestion, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>

            {/* Next Best Actions */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center mb-4">
                <ClockIcon className="h-5 w-5 text-green-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Next Steps</h3>
              </div>

              <ul className="space-y-3">
                {recommendations.nextBestActions.map((action, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendation Detail Modal */}
      {selectedRecommendation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {selectedRecommendation.topicName}
            </h3>

            <div className="space-y-4 mb-6">
              <div>
                <span className="text-sm font-medium text-gray-500">Subject:</span>
                <p className="text-gray-900">{selectedRecommendation.subjectName}</p>
              </div>

              <div>
                <span className="text-sm font-medium text-gray-500">Why recommended:</span>
                <p className="text-gray-900">{selectedRecommendation.reason}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-medium text-gray-500">Difficulty:</span>
                  <p className={`text-sm font-medium ${getDifficultyColor(selectedRecommendation.estimatedDifficulty)}`}>
                    {selectedRecommendation.estimatedDifficulty}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Expected Success:</span>
                  <p className={`text-sm font-medium ${getSuccessRateColor(selectedRecommendation.expectedSuccessRate)}`}>
                    {Math.round(selectedRecommendation.expectedSuccessRate * 100)}%
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => {
                  if (onSelectTopic) {
                    onSelectTopic(selectedRecommendation.subjectName, selectedRecommendation.topicId);
                    onClose();
                  }
                }}
                className="flex-1 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark font-medium"
              >
                Start Studying
              </button>
              <button
                onClick={() => setSelectedRecommendation(null)}
                className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendationDashboard;