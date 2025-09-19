import { ExperienceLevel } from '../types';

/**
 * Progress Tracking Service
 * Implements client-side progress tracking with localStorage persistence
 * Follows CTET Study App coding standards and architecture guidelines
 */

export interface QuestionAttempt {
  questionId: string;
  selectedAnswer: number;
  isCorrect: boolean;
  timeSpent: number; // in seconds
  topicId: string;
  subjectName: string;
  timestamp: Date;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface StudySession {
  sessionId: string;
  startTime: Date;
  endTime?: Date;
  duration: number; // in minutes
  questionsAttempted: number;
  correctAnswers: number;
  topicsCovered: string[];
  experienceLevel: ExperienceLevel;
  sessionType: 'practice' | 'mock_test' | 'topic_review';
}

export interface UserProgress {
  userId: string; // Using browser fingerprint or generated ID
  experienceLevel: ExperienceLevel;
  totalStudyTime: number; // in minutes
  totalQuestionsAttempted: number;
  totalCorrectAnswers: number;
  currentStreak: number; // consecutive study days
  longestStreak: number;
  lastStudyDate: Date;
  completedTopics: string[];
  weakAreas: string[]; // topic IDs with low performance
  questionAttempts: QuestionAttempt[];
  studySessions: StudySession[];
  topicProgress: Record<string, {
    questionsAttempted: number;
    correctAnswers: number;
    averageTime: number;
    lastAttempted: Date;
    masteryLevel: number; // 0-100
  }>;
  subjectProgress: Record<string, {
    totalQuestions: number;
    correctAnswers: number;
    studyTime: number;
    coverage: number; // percentage
  }>;
  achievements: Achievement[];
  preferences: {
    dailyGoal: number; // minutes
    weeklyGoal: number; // minutes
    notificationsEnabled: boolean;
    preferredStudyTime: string; // e.g., "morning", "evening"
  };
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: Date;
  category: 'study' | 'accuracy' | 'streak' | 'completion';
}

/**
 * Progress Tracking Service Class
 * Handles all progress-related operations with localStorage persistence
 */
export class ProgressTrackingService {
  private static readonly STORAGE_KEY = 'ctet_progress_data';
  private static readonly SESSION_KEY = 'ctet_current_session';

  /**
   * Initialize or load user progress data
   */
  static initializeProgress(experienceLevel: ExperienceLevel): UserProgress {
    const existingProgress = this.loadProgress();

    if (existingProgress) {
      // Update experience level if changed
      if (existingProgress.experienceLevel !== experienceLevel) {
        existingProgress.experienceLevel = experienceLevel;
        this.saveProgress(existingProgress);
      }
      return existingProgress;
    }

    // Create new progress data
    const newProgress: UserProgress = {
      userId: this.generateUserId(),
      experienceLevel,
      totalStudyTime: 0,
      totalQuestionsAttempted: 0,
      totalCorrectAnswers: 0,
      currentStreak: 0,
      longestStreak: 0,
      lastStudyDate: new Date(),
      completedTopics: [],
      weakAreas: [],
      questionAttempts: [],
      studySessions: [],
      topicProgress: {},
      subjectProgress: {},
      achievements: [],
      preferences: {
        dailyGoal: 60, // 1 hour default
        weeklyGoal: 420, // 7 hours default
        notificationsEnabled: true,
        preferredStudyTime: 'any'
      }
    };

    this.saveProgress(newProgress);
    return newProgress;
  }

  /**
   * Load progress data from localStorage
   */
  static loadProgress(): UserProgress | null {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) return null;

      const progress: UserProgress = JSON.parse(stored);

      // Convert date strings back to Date objects
      progress.lastStudyDate = new Date(progress.lastStudyDate);
      progress.questionAttempts = progress.questionAttempts.map(attempt => ({
        ...attempt,
        timestamp: new Date(attempt.timestamp)
      }));
      progress.studySessions = progress.studySessions.map(session => ({
        ...session,
        startTime: new Date(session.startTime),
        endTime: session.endTime ? new Date(session.endTime) : undefined
      }));

      // Convert topic progress dates
      Object.keys(progress.topicProgress).forEach(topicId => {
        progress.topicProgress[topicId].lastAttempted =
          new Date(progress.topicProgress[topicId].lastAttempted);
      });

      return progress;
    } catch (error) {
      console.error('Error loading progress data:', error);
      return null;
    }
  }

  /**
   * Save progress data to localStorage
   */
  static saveProgress(progress: UserProgress): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving progress data:', error);
    }
  }

  /**
   * Record a question attempt
   */
  static recordQuestionAttempt(
    questionId: string,
    selectedAnswer: number,
    isCorrect: boolean,
    timeSpent: number,
    topicId: string,
    subjectName: string,
    difficulty: 'easy' | 'medium' | 'hard' = 'medium'
  ): void {
    const progress = this.loadProgress();
    if (!progress) return;

    const attempt: QuestionAttempt = {
      questionId,
      selectedAnswer,
      isCorrect,
      timeSpent,
      topicId,
      subjectName,
      timestamp: new Date(),
      difficulty
    };

    // Add to attempts
    progress.questionAttempts.push(attempt);

    // Update totals
    progress.totalQuestionsAttempted++;
    if (isCorrect) {
      progress.totalCorrectAnswers++;
    }

    // Update topic progress
    if (!progress.topicProgress[topicId]) {
      progress.topicProgress[topicId] = {
        questionsAttempted: 0,
        correctAnswers: 0,
        averageTime: 0,
        lastAttempted: new Date(),
        masteryLevel: 0
      };
    }

    const topicStats = progress.topicProgress[topicId];
    topicStats.questionsAttempted++;
    if (isCorrect) topicStats.correctAnswers++;
    topicStats.lastAttempted = new Date();

    // Calculate new average time
    const totalTime = topicStats.averageTime * (topicStats.questionsAttempted - 1) + timeSpent;
    topicStats.averageTime = totalTime / topicStats.questionsAttempted;

    // Calculate mastery level (based on recent performance)
    const recentAttempts = progress.questionAttempts
      .filter(a => a.topicId === topicId)
      .slice(-10); // Last 10 attempts

    if (recentAttempts.length >= 5) {
      const accuracy = recentAttempts.filter(a => a.isCorrect).length / recentAttempts.length;
      topicStats.masteryLevel = Math.round(accuracy * 100);
    }

    // Update subject progress
    if (!progress.subjectProgress[subjectName]) {
      progress.subjectProgress[subjectName] = {
        totalQuestions: 0,
        correctAnswers: 0,
        studyTime: 0,
        coverage: 0
      };
    }

    const subjectStats = progress.subjectProgress[subjectName];
    subjectStats.totalQuestions++;
    if (isCorrect) subjectStats.correctAnswers++;
    subjectStats.studyTime += timeSpent / 60; // Convert to minutes

    // Update weak areas
    this.updateWeakAreas(progress);

    // Check for achievements
    this.checkAchievements(progress);

    this.saveProgress(progress);
  }

  /**
   * Start a new study session
   */
  static startStudySession(sessionType: 'practice' | 'mock_test' | 'topic_review' = 'practice'): string {
    const progress = this.loadProgress();
    if (!progress) return '';

    const sessionId = this.generateSessionId();
    const session: StudySession = {
      sessionId,
      startTime: new Date(),
      duration: 0,
      questionsAttempted: 0,
      correctAnswers: 0,
      topicsCovered: [],
      experienceLevel: progress.experienceLevel,
      sessionType
    };

    // Save current session
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));

    return sessionId;
  }

  /**
   * End the current study session
   */
  static endStudySession(): void {
    try {
      const sessionData = localStorage.getItem(this.SESSION_KEY);
      if (!sessionData) return;

      const session: StudySession = JSON.parse(sessionData);
      const progress = this.loadProgress();
      if (!progress) return;

      // Calculate duration
      session.endTime = new Date();
      session.duration = Math.round((session.endTime.getTime() - session.startTime.getTime()) / (1000 * 60)); // minutes

      // Add session to progress
      progress.studySessions.push(session);
      progress.totalStudyTime += session.duration;

      // Update streak
      this.updateStreak(progress);

      // Clear current session
      localStorage.removeItem(this.SESSION_KEY);

      this.saveProgress(progress);
    } catch (error) {
      console.error('Error ending study session:', error);
    }
  }

  /**
   * Get current study session
   */
  static getCurrentSession(): StudySession | null {
    try {
      const sessionData = localStorage.getItem(this.SESSION_KEY);
      return sessionData ? JSON.parse(sessionData) : null;
    } catch (error) {
      console.error('Error getting current session:', error);
      return null;
    }
  }

  /**
   * Update weak areas based on performance
   */
  private static updateWeakAreas(progress: UserProgress): void {
    const topicPerformance: Record<string, number> = {};

    // Calculate accuracy for each topic
    Object.keys(progress.topicProgress).forEach(topicId => {
      const stats = progress.topicProgress[topicId];
      if (stats.questionsAttempted >= 5) { // Minimum attempts for analysis
        topicPerformance[topicId] = stats.correctAnswers / stats.questionsAttempted;
      }
    });

    // Identify weak areas (accuracy < 60%)
    progress.weakAreas = Object.entries(topicPerformance)
      .filter(([, accuracy]) => accuracy < 0.6)
      .map(([topicId]) => topicId)
      .slice(0, 5); // Top 5 weak areas
  }

  /**
   * Update study streak
   */
  private static updateStreak(progress: UserProgress): void {
    const today = new Date();
    const lastStudy = new Date(progress.lastStudyDate);
    const daysDiff = Math.floor((today.getTime() - lastStudy.getTime()) / (1000 * 60 * 60 * 24));

    if (daysDiff === 1) {
      // Consecutive day
      progress.currentStreak++;
    } else if (daysDiff > 1) {
      // Streak broken
      progress.currentStreak = 1;
    }

    progress.longestStreak = Math.max(progress.longestStreak, progress.currentStreak);
    progress.lastStudyDate = today;
  }

  /**
   * Check and unlock achievements
   */
  private static checkAchievements(progress: UserProgress): void {
    const achievements = [
      {
        id: 'first_question',
        name: 'First Steps',
        description: 'Answered your first question',
        icon: '🎯',
        condition: () => progress.totalQuestionsAttempted >= 1,
        category: 'study' as const
      },
      {
        id: 'study_streak_7',
        name: 'Week Warrior',
        description: '7-day study streak',
        icon: '🔥',
        condition: () => progress.currentStreak >= 7,
        category: 'streak' as const
      },
      {
        id: 'accuracy_80',
        name: 'Sharp Mind',
        description: '80% overall accuracy',
        icon: '🧠',
        condition: () => progress.totalQuestionsAttempted >= 10 &&
                        (progress.totalCorrectAnswers / progress.totalQuestionsAttempted) >= 0.8,
        category: 'accuracy' as const
      },
      {
        id: 'study_time_60',
        name: 'Dedicated Learner',
        description: '60 minutes total study time',
        icon: '⏰',
        condition: () => progress.totalStudyTime >= 60,
        category: 'study' as const
      }
    ];

    achievements.forEach(achievement => {
      const alreadyUnlocked = progress.achievements.some(a => a.id === achievement.id);
      if (!alreadyUnlocked && achievement.condition()) {
        progress.achievements.push({
          id: achievement.id,
          name: achievement.name,
          description: achievement.description,
          icon: achievement.icon,
          unlockedAt: new Date(),
          category: achievement.category
        });
      }
    });
  }

  /**
   * Get progress analytics
   */
  static getProgressAnalytics(): {
    overallAccuracy: number;
    studyTimeThisWeek: number;
    topicsMastered: number;
    currentGoals: { daily: number; weekly: number };
    recentPerformance: number[];
  } | null {
    const progress = this.loadProgress();
    if (!progress) return null;

    const overallAccuracy = progress.totalQuestionsAttempted > 0
      ? progress.totalCorrectAnswers / progress.totalQuestionsAttempted
      : 0;

    // Calculate study time this week
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const studyTimeThisWeek = progress.studySessions
      .filter(session => session.startTime >= weekAgo)
      .reduce((total, session) => total + session.duration, 0);

    // Count mastered topics (80%+ accuracy, 10+ attempts)
    const topicsMastered = Object.values(progress.topicProgress)
      .filter(stats => stats.questionsAttempted >= 10 && stats.masteryLevel >= 80)
      .length;

    // Recent performance (last 10 questions)
    const recentAttempts = progress.questionAttempts.slice(-10);
    const recentPerformance = recentAttempts.map(attempt => attempt.isCorrect ? 1 : 0);

    return {
      overallAccuracy: Math.round(overallAccuracy * 100),
      studyTimeThisWeek,
      topicsMastered,
      currentGoals: {
        daily: progress.preferences.dailyGoal,
        weekly: progress.preferences.weeklyGoal
      },
      recentPerformance
    };
  }

  /**
   * Generate unique user ID
   */
  private static generateUserId(): string {
    return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  /**
   * Generate unique session ID
   */
  private static generateSessionId(): string {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  /**
   * Clear all progress data (for testing/reset purposes)
   */
  static clearAllProgress(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.SESSION_KEY);
  }
}