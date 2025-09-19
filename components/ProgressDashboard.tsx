import React, { useState, useEffect } from 'react';
import { ProgressTrackingService, UserProgress, StudySession } from '../utils/progressTracking';
import { ExperienceLevel } from '../types';
import {
  ChartBarIcon,
  ClockIcon,
  TrophyIcon,
  FireIcon,
  AcademicCapIcon,
  CalendarIcon,
  TagIcon
} from '@heroicons/react/24/solid';

/**
 * Progress Dashboard Component
 * Displays comprehensive progress analytics and insights
 * Follows CTET Study App design system and accessibility guidelines
 */

interface ProgressDashboardProps {
  experienceLevel: ExperienceLevel;
  onClose?: () => void;
}

const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  experienceLevel,
  onClose
}) => {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [analytics, setAnalytics] = useState<any>(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState<'week' | 'month' | 'all'>('week');

  useEffect(() => {
    loadProgressData();
  }, [experienceLevel]);

  const loadProgressData = () => {
    const progressData = ProgressTrackingService.initializeProgress(experienceLevel);
    const analyticsData = ProgressTrackingService.getProgressAnalytics();

    setProgress(progressData);
    setAnalytics(analyticsData);
  };

  if (!progress || !analytics) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const formatTime = (minutes: number): string => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  const getAccuracyColor = (accuracy: number): string => {
    if (accuracy >= 80) return 'text-green-600';
    if (accuracy >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStreakColor = (streak: number): string => {
    if (streak >= 7) return 'text-orange-500';
    if (streak >= 3) return 'text-blue-500';
    return 'text-gray-500';
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Your Progress Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Track your CTET preparation journey and achievements
            </p>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close dashboard"
            >
              ✕
            </button>
          )}
        </div>

        {/* Timeframe Selector */}
        <div className="flex space-x-2 mb-6">
          {[
            { key: 'week', label: 'This Week' },
            { key: 'month', label: 'This Month' },
            { key: 'all', label: 'All Time' }
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setSelectedTimeframe(key as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedTimeframe === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <AcademicCapIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Overall Accuracy</p>
              <p className={`text-2xl font-bold ${getAccuracyColor(analytics.overallAccuracy)}`}>
                {analytics.overallAccuracy}%
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <ClockIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Study Time</p>
              <p className="text-2xl font-bold text-green-600">
                {formatTime(progress.totalStudyTime)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="p-3 bg-orange-100 rounded-lg">
              <FireIcon className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Current Streak</p>
              <p className={`text-2xl font-bold ${getStreakColor(progress.currentStreak)}`}>
                {progress.currentStreak} days
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <TrophyIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Achievements</p>
              <p className="text-2xl font-bold text-purple-600">
                {progress.achievements.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Study Goals & Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Study Goals</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Daily Goal</span>
                <span>{formatTime(analytics.studyTimeThisWeek)} / {formatTime(analytics.currentGoals.daily * 7)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{
                    '--progress-width': `${Math.min((analytics.studyTimeThisWeek / (analytics.currentGoals.daily * 7)) * 100, 100)}%`,
                    width: 'var(--progress-width)'
                  } as React.CSSProperties}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Weekly Goal</span>
                <span>{formatTime(analytics.studyTimeThisWeek)} / {formatTime(analytics.currentGoals.weekly)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full transition-all duration-300"
                  style={{
                    '--progress-width': `${Math.min((analytics.studyTimeThisWeek / analytics.currentGoals.weekly) * 100, 100)}%`,
                    width: 'var(--progress-width)'
                  } as React.CSSProperties}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Performance</h2>
          <div className="flex items-center space-x-2 mb-4">
            {analytics.recentPerformance.map((result: number, index: number) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  result ? 'bg-green-500' : 'bg-red-500'
                }`}
                title={result ? 'Correct' : 'Incorrect'}
              ></div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">
              {analytics.recentPerformance.filter((r: number) => r).length}/{analytics.recentPerformance.length}
            </p>
            <p className="text-sm text-gray-600">Last 10 questions</p>
          </div>
        </div>
      </div>

      {/* Topic Performance */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Topic Performance</h2>
        <div className="space-y-4">
          {Object.entries(progress.topicProgress)
            .filter(([, stats]) => stats.questionsAttempted >= 3)
            .sort(([, a], [, b]) => b.masteryLevel - a.masteryLevel)
            .slice(0, 8)
            .map(([topicId, stats]) => (
              <div key={topicId} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{topicId}</h3>
                  <p className="text-sm text-gray-600">
                    {stats.correctAnswers}/{stats.questionsAttempted} correct • {Math.round(stats.averageTime)}s avg
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className={`text-lg font-bold ${getAccuracyColor(stats.masteryLevel)}`}>
                      {stats.masteryLevel}%
                    </div>
                    <div className="text-xs text-gray-500">Mastery</div>
                  </div>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{
                        '--progress-width': `${stats.masteryLevel}%`,
                        width: 'var(--progress-width)'
                      } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Achievements</h2>
        {progress.achievements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {progress.achievements.map((achievement) => (
              <div key={achievement.id} className="flex items-center p-4 border border-gray-200 rounded-lg">
                <div className="text-2xl mr-3">{achievement.icon}</div>
                <div>
                  <h3 className="font-medium text-gray-900">{achievement.name}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Unlocked {new Date(achievement.unlockedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <TrophyIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No achievements yet. Keep studying to unlock your first achievement!</p>
          </div>
        )}
      </div>

      {/* Study Sessions History */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Study Sessions</h2>
        <div className="space-y-3">
          {progress.studySessions
            .sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime())
            .slice(0, 5)
            .map((session) => (
              <div key={session.sessionId} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <CalendarIcon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 capitalize">{session.sessionType.replace('_', ' ')}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(session.startTime).toLocaleDateString()} • {session.duration} minutes
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">
                    {session.correctAnswers}/{session.questionsAttempted} correct
                  </p>
                  <p className="text-xs text-gray-500">
                    {session.topicsCovered.length} topics covered
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={loadProgressData}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Refresh Data
        </button>
        <button
          onClick={() => ProgressTrackingService.clearAllProgress()}
          className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
        >
          Reset Progress
        </button>
      </div>
    </div>
  );
};

export default ProgressDashboard;