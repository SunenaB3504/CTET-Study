import React, { useState, useEffect } from 'react';
import { ProgressTrackingService, StudySession, UserProgress } from '../utils/progressTracking';
import { ExperienceLevel } from '../types';
import {
  ClockIcon,
  ChartBarIcon,
  AcademicCapIcon,
  FireIcon,
  CalendarIcon,
  PlayIcon,
  PauseIcon
} from '@heroicons/react/24/solid';

/**
 * Session Analytics Component
 * Provides real-time session tracking and analytics
 * Follows CTET Study App design system and accessibility guidelines
 */

interface SessionAnalyticsProps {
  experienceLevel: ExperienceLevel;
  isActive?: boolean;
  onSessionStart?: () => void;
  onSessionEnd?: () => void;
}

const SessionAnalytics: React.FC<SessionAnalyticsProps> = ({
  experienceLevel,
  isActive = false,
  onSessionStart,
  onSessionEnd
}) => {
  const [currentSession, setCurrentSession] = useState<StudySession | null>(null);
  const [sessionTime, setSessionTime] = useState(0);
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    // Load current session on mount
    const session = ProgressTrackingService.getCurrentSession();
    setCurrentSession(session);

    // Load progress data
    const progressData = ProgressTrackingService.loadProgress();
    setProgress(progressData);

    // Start timer if session is active
    if (session) {
      const startTime = new Date(session.startTime).getTime();
      const interval = setInterval(() => {
        const now = Date.now();
        const elapsed = Math.floor((now - startTime) / 1000); // seconds
        setSessionTime(elapsed);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, []);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartSession = () => {
    const sessionId = ProgressTrackingService.startStudySession();
    if (sessionId) {
      const session = ProgressTrackingService.getCurrentSession();
      setCurrentSession(session);
      setSessionTime(0);
      onSessionStart?.();
    }
  };

  const handleEndSession = () => {
    ProgressTrackingService.endStudySession();
    setCurrentSession(null);
    setSessionTime(0);

    // Reload progress data
    const progressData = ProgressTrackingService.loadProgress();
    setProgress(progressData);

    onSessionEnd?.();
  };

  const getSessionStats = () => {
    if (!progress) return null;

    const today = new Date();
    const todaySessions = progress.studySessions.filter(session => {
      const sessionDate = new Date(session.startTime);
      return sessionDate.toDateString() === today.toDateString();
    });

    const totalTodayTime = todaySessions.reduce((total, session) => total + session.duration, 0);
    const totalTodayQuestions = todaySessions.reduce((total, session) => total + session.questionsAttempted, 0);

    return {
      sessionsToday: todaySessions.length,
      timeToday: totalTodayTime,
      questionsToday: totalTodayQuestions,
      averageSessionTime: todaySessions.length > 0 ? totalTodayTime / todaySessions.length : 0
    };
  };

  const stats = getSessionStats();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Study Session</h2>
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${currentSession ? 'bg-green-500' : 'bg-gray-300'}`}></div>
          <span className="text-sm text-gray-600">
            {currentSession ? 'Active' : 'Inactive'}
          </span>
        </div>
      </div>

      {/* Session Timer */}
      <div className="text-center mb-6">
        <div className="text-4xl font-mono font-bold text-gray-900 mb-2">
          {formatTime(sessionTime)}
        </div>
        <p className="text-sm text-gray-600">Session Time</p>
      </div>

      {/* Session Controls */}
      <div className="flex justify-center mb-6">
        {!currentSession ? (
          <button
            onClick={handleStartSession}
            className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            <PlayIcon className="h-5 w-5 mr-2" />
            Start Session
          </button>
        ) : (
          <button
            onClick={handleEndSession}
            className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
          >
            <PauseIcon className="h-5 w-5 mr-2" />
            End Session
          </button>
        )}
      </div>

      {/* Today's Stats */}
      {stats && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <ClockIcon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">{formatTime(stats.timeToday * 60)}</div>
            <div className="text-sm text-blue-800">Time Today</div>
          </div>

          <div className="text-center p-4 bg-green-50 rounded-lg">
            <AcademicCapIcon className="h-6 w-6 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">{stats.questionsToday}</div>
            <div className="text-sm text-green-800">Questions Today</div>
          </div>
        </div>
      )}

      {/* Session Goals */}
      <div className="space-y-3">
        <h3 className="font-medium text-gray-900">Session Goals</h3>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Target: 30 minutes</span>
            <span>{Math.min(Math.round(sessionTime / 60), 30)}/30 min</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{
                '--progress-width': `${Math.min((sessionTime / 60 / 30) * 100, 100)}%`,
                width: 'var(--progress-width)'
              } as React.CSSProperties}
            ></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Target: 20 questions</span>
            <span>{currentSession?.questionsAttempted || 0}/20 questions</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{
                '--progress-width': `${Math.min(((currentSession?.questionsAttempted || 0) / 20) * 100, 100)}%`,
                width: 'var(--progress-width)'
              } as React.CSSProperties}
            ></div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      {progress && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="font-medium text-gray-900 mb-3">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center">
              <FireIcon className="h-4 w-4 text-orange-500 mr-2" />
              <span>Streak: {progress.currentStreak} days</span>
            </div>
            <div className="flex items-center">
              <ChartBarIcon className="h-4 w-4 text-blue-500 mr-2" />
              <span>Total: {formatTime(progress.totalStudyTime * 60)}</span>
            </div>
            <div className="flex items-center">
              <AcademicCapIcon className="h-4 w-4 text-green-500 mr-2" />
              <span>Accuracy: {progress.totalQuestionsAttempted > 0
                ? Math.round((progress.totalCorrectAnswers / progress.totalQuestionsAttempted) * 100)
                : 0}%</span>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="h-4 w-4 text-purple-500 mr-2" />
              <span>Sessions: {progress.studySessions.length}</span>
            </div>
          </div>
        </div>
      )}

      {/* Session Tips */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-medium text-blue-900 mb-2">💡 Study Tips</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Take short breaks every 25-30 minutes</li>
          <li>• Stay hydrated and maintain good posture</li>
          <li>• Review incorrect answers immediately</li>
          <li>• Track your progress regularly</li>
        </ul>
      </div>
    </div>
  );
};

export default SessionAnalytics;