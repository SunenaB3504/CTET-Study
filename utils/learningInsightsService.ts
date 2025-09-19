import { ProgressTrackingService } from './progressTracking';
import { SUBJECT_DATA } from '../constants/data';

export interface PerformanceTrend {
  period: string;
  accuracy: number;
  timeSpent: number;
  questionsAnswered: number;
  improvement: number;
}

export interface TopicMastery {
  topicId: string;
  topicName: string;
  masteryLevel: number; // 0-100
  questionsAttempted: number;
  correctAnswers: number;
  averageTime: number;
  lastPracticed: Date;
  strength: 'weak' | 'developing' | 'strong' | 'mastered';
}

export interface StudyPattern {
  pattern: string;
  frequency: number;
  effectiveness: number;
  recommendation: string;
}

export interface ImprovementSuggestion {
  type: 'topic_focus' | 'time_management' | 'study_frequency' | 'difficulty_adjustment';
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  actionableSteps: string[];
  expectedImpact: string;
}

export interface SessionSummary {
  sessionId: string;
  date: Date;
  duration: number;
  questionsAnswered: number;
  accuracy: number;
  topicsCovered: string[];
  strengths: string[];
  areasForImprovement: string[];
}

export interface LearningInsights {
  performanceTrends: PerformanceTrend[];
  topicMastery: TopicMastery[];
  studyPatterns: StudyPattern[];
  improvementSuggestions: ImprovementSuggestion[];
  sessionSummaries: SessionSummary[];
  overallProgress: {
    totalQuestionsAnswered: number;
    overallAccuracy: number;
    averageSessionDuration: number;
    studyStreak: number;
    topicsMastered: number;
  };
}

export class LearningInsightsService {
  /**
   * Generate comprehensive learning insights for the user
   */
  static generateInsights(): LearningInsights {
    const progressData = ProgressTrackingService.loadProgress();
    if (!progressData) {
      return this.getEmptyInsights();
    }

    const sessions = progressData.studySessions || [];

    return {
      performanceTrends: this.analyzePerformanceTrends(sessions),
      topicMastery: this.calculateTopicMastery(progressData),
      studyPatterns: this.identifyStudyPatterns(sessions),
      improvementSuggestions: this.generateImprovementSuggestions(progressData, sessions),
      sessionSummaries: this.generateSessionSummaries(sessions),
      overallProgress: this.calculateOverallProgress(progressData, sessions)
    };
  }

  private static getEmptyInsights(): LearningInsights {
    return {
      performanceTrends: [],
      topicMastery: [],
      studyPatterns: [],
      improvementSuggestions: [],
      sessionSummaries: [],
      overallProgress: {
        totalQuestionsAnswered: 0,
        overallAccuracy: 0,
        averageSessionDuration: 0,
        studyStreak: 0,
        topicsMastered: 0
      }
    };
  }

  /**
   * Analyze performance trends over time
   */
  private static analyzePerformanceTrends(sessions: any[]): PerformanceTrend[] {
    const trends: PerformanceTrend[] = [];
    const periods = this.groupSessionsByPeriod(sessions, 7); // 7-day periods

    periods.forEach((periodSessions, period) => {
      if (periodSessions.length === 0) return;

      const totalQuestions = periodSessions.reduce((sum, s) => sum + s.questionsAnswered, 0);
      const totalCorrect = periodSessions.reduce((sum, s) => sum + s.correctAnswers, 0);
      const totalTime = periodSessions.reduce((sum, s) => sum + s.duration, 0);

      const accuracy = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;
      const avgTime = totalQuestions > 0 ? totalTime / totalQuestions : 0;

      // Calculate improvement from previous period
      const previousPeriod = trends.length > 0 ? trends[trends.length - 1].accuracy : accuracy;
      const improvement = accuracy - previousPeriod;

      trends.push({
        period,
        accuracy: Math.round(accuracy),
        timeSpent: Math.round(totalTime),
        questionsAnswered: totalQuestions,
        improvement: Math.round(improvement * 100) / 100
      });
    });

    return trends;
  }

  /**
   * Calculate mastery levels for each topic
   */
  private static calculateTopicMastery(progressData: any): TopicMastery[] {
    const topicStats: { [key: string]: any } = {};

    // Aggregate data by topic
    Object.entries(progressData.topicProgress || {}).forEach(([topicId, data]: [string, any]) => {
      topicStats[topicId] = {
        topicId,
        topicName: this.getTopicName(topicId),
        questionsAttempted: data.questionsAnswered || 0,
        correctAnswers: data.correctAnswers || 0,
        totalTime: data.timeSpent || 0,
        lastPracticed: new Date(data.lastPracticed || Date.now())
      };
    });

    // Calculate mastery levels
    return Object.values(topicStats).map((stats: any) => {
      const accuracy = stats.questionsAttempted > 0
        ? (stats.correctAnswers / stats.questionsAttempted) * 100
        : 0;

      const averageTime = stats.questionsAttempted > 0
        ? stats.totalTime / stats.questionsAttempted
        : 0;

      // Calculate mastery level based on accuracy and attempts
      let masteryLevel = accuracy;
      if (stats.questionsAttempted < 5) {
        masteryLevel *= 0.7; // Reduce mastery for low attempt count
      }

      const strength = this.determineStrength(masteryLevel, stats.questionsAttempted);

      return {
        ...stats,
        masteryLevel: Math.round(masteryLevel),
        averageTime: Math.round(averageTime),
        strength
      };
    });
  }

  /**
   * Identify study patterns and their effectiveness
   */
  private static identifyStudyPatterns(sessions: any[]): StudyPattern[] {
    const patterns: StudyPattern[] = [];

    // Analyze session timing patterns
    const sessionTimes = sessions.map(s => new Date(s.startTime).getHours());
    const timeDistribution = this.getTimeDistribution(sessionTimes);

    // Most productive time
    const bestTime = Object.entries(timeDistribution)
      .sort(([,a], [,b]) => b - a)[0];

    if (bestTime) {
      patterns.push({
        pattern: `Study sessions at ${bestTime[0]}:00`,
        frequency: bestTime[1] as number,
        effectiveness: this.calculateTimeEffectiveness(bestTime[0] as string, sessions),
        recommendation: `Consider scheduling more study sessions around ${bestTime[0]}:00 when you're most productive`
      });
    }

    // Session length analysis
    const avgDuration = sessions.reduce((sum, s) => sum + s.duration, 0) / sessions.length;
    if (avgDuration < 30) {
      patterns.push({
        pattern: 'Short study sessions',
        frequency: sessions.filter(s => s.duration < 30).length,
        effectiveness: 75,
        recommendation: 'Try longer focused sessions for better retention'
      });
    }

    // Consistency analysis
    const consistency = this.calculateStudyConsistency(sessions);
    patterns.push({
      pattern: 'Study consistency',
      frequency: consistency.frequency,
      effectiveness: consistency.effectiveness,
      recommendation: consistency.recommendation
    });

    return patterns;
  }

  /**
   * Generate personalized improvement suggestions
   */
  private static generateImprovementSuggestions(progressData: any, sessions: any[]): ImprovementSuggestion[] {
    const suggestions: ImprovementSuggestion[] = [];

    // Analyze weak topics
    const weakTopics = this.calculateTopicMastery(progressData)
      .filter(topic => topic.strength === 'weak')
      .sort((a, b) => a.masteryLevel - b.masteryLevel);

    if (weakTopics.length > 0) {
      suggestions.push({
        type: 'topic_focus',
        priority: 'high',
        title: 'Focus on Weak Topics',
        description: `You need improvement in ${weakTopics.length} topic(s)`,
        actionableSteps: [
          `Practice ${weakTopics[0].topicName} questions daily`,
          'Review fundamental concepts in weak areas',
          'Use spaced repetition for better retention'
        ],
        expectedImpact: '15-20% improvement in overall accuracy'
      });
    }

    // Time management analysis
    const avgSessionTime = sessions.reduce((sum, s) => sum + s.duration, 0) / sessions.length;
    if (avgSessionTime > 60) {
      suggestions.push({
        type: 'time_management',
        priority: 'medium',
        title: 'Optimize Study Time',
        description: 'Your study sessions are quite long',
        actionableSteps: [
          'Break long sessions into 45-minute focused intervals',
          'Take 5-minute breaks between topics',
          'Use Pomodoro technique for better concentration'
        ],
        expectedImpact: 'Better retention and reduced fatigue'
      });
    }

    // Study frequency analysis
    const studyFrequency = this.calculateStudyFrequency(sessions);
    if (studyFrequency.daysSinceLastSession > 3) {
      suggestions.push({
        type: 'study_frequency',
        priority: 'high',
        title: 'Increase Study Frequency',
        description: `It's been ${studyFrequency.daysSinceLastSession} days since your last study session`,
        actionableSteps: [
          'Set a daily study goal of 30-45 minutes',
          'Create a consistent study schedule',
          'Use reminders to maintain regularity'
        ],
        expectedImpact: 'Improved knowledge retention and exam readiness'
      });
    }

    // Difficulty adjustment
    const recentAccuracy = this.getRecentAccuracy(sessions);
    if (recentAccuracy > 85) {
      suggestions.push({
        type: 'difficulty_adjustment',
        priority: 'medium',
        title: 'Challenge Yourself',
        description: 'You\'re performing well on current difficulty level',
        actionableSteps: [
          'Try more challenging questions',
          'Focus on hard-level questions in weak topics',
          'Review advanced concepts and applications'
        ],
        expectedImpact: 'Enhanced problem-solving skills'
      });
    }

    return suggestions.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  }

  /**
   * Generate summaries for recent study sessions
   */
  private static generateSessionSummaries(sessions: any[]): SessionSummary[] {
    return sessions.slice(-10).map(session => ({
      sessionId: session.id,
      date: new Date(session.startTime),
      duration: session.duration,
      questionsAnswered: session.questionsAnswered,
      accuracy: session.questionsAnswered > 0
        ? Math.round((session.correctAnswers / session.questionsAnswered) * 100)
        : 0,
      topicsCovered: session.topicsCovered || [],
      strengths: this.identifySessionStrengths(session),
      areasForImprovement: this.identifySessionWeaknesses(session)
    }));
  }

  /**
   * Calculate overall progress metrics
   */
  private static calculateOverallProgress(progressData: any, sessions: any[]) {
    const totalQuestions = sessions.reduce((sum, s) => sum + s.questionsAnswered, 0);
    const totalCorrect = sessions.reduce((sum, s) => sum + s.correctAnswers, 0);
    const totalTime = sessions.reduce((sum, s) => sum + s.duration, 0);

    const overallAccuracy = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;
    const averageSessionDuration = sessions.length > 0 ? totalTime / sessions.length : 0;

    const studyStreak = this.calculateStudyStreak(sessions);
    const topicsMastered = this.calculateTopicMastery(progressData)
      .filter(topic => topic.strength === 'mastered').length;

    return {
      totalQuestionsAnswered: totalQuestions,
      overallAccuracy: Math.round(overallAccuracy),
      averageSessionDuration: Math.round(averageSessionDuration),
      studyStreak,
      topicsMastered
    };
  }

  // Helper methods
  private static groupSessionsByPeriod(sessions: any[], daysPerPeriod: number): Map<string, any[]> {
    const periods = new Map<string, any[]>();

    sessions.forEach(session => {
      const date = new Date(session.startTime);
      const periodStart = new Date(date);
      periodStart.setDate(date.getDate() - (date.getDay() % daysPerPeriod));

      const periodKey = periodStart.toISOString().split('T')[0];
      if (!periods.has(periodKey)) {
        periods.set(periodKey, []);
      }
      periods.get(periodKey)!.push(session);
    });

    return periods;
  }

  private static getTopicName(topicId: string): string {
    // Search through SUBJECT_DATA to find topic name
    for (const subject of SUBJECT_DATA) {
      const topic = subject.topics.find(t => t.id === topicId);
      if (topic) return topic.name;
    }
    return topicId;
  }

  private static determineStrength(masteryLevel: number, attempts: number): 'weak' | 'developing' | 'strong' | 'mastered' {
    if (masteryLevel >= 85 && attempts >= 10) return 'mastered';
    if (masteryLevel >= 70) return 'strong';
    if (masteryLevel >= 50) return 'developing';
    return 'weak';
  }

  private static getTimeDistribution(times: number[]): { [key: string]: number } {
    const distribution: { [key: string]: number } = {};
    times.forEach(hour => {
      const hourStr = hour.toString();
      distribution[hourStr] = (distribution[hourStr] || 0) + 1;
    });
    return distribution;
  }

  private static calculateTimeEffectiveness(hour: string, sessions: any[]): number {
    const hourSessions = sessions.filter(s =>
      new Date(s.startTime).getHours() === parseInt(hour)
    );
    const avgAccuracy = hourSessions.reduce((sum, s) =>
      sum + (s.correctAnswers / s.questionsAnswered * 100), 0
    ) / hourSessions.length;
    return Math.round(avgAccuracy);
  }

  private static calculateStudyConsistency(sessions: any[]) {
    const sortedSessions = sessions.sort((a, b) =>
      new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
    );

    let gaps = 0;
    for (let i = 1; i < sortedSessions.length; i++) {
      const gap = new Date(sortedSessions[i].startTime).getTime() -
                  new Date(sortedSessions[i-1].startTime).getTime();
      if (gap > 24 * 60 * 60 * 1000) gaps++; // More than 1 day gap
    }

    const totalDays = sortedSessions.length > 0 ?
      Math.ceil((Date.now() - new Date(sortedSessions[0].startTime).getTime()) / (24 * 60 * 60 * 1000)) : 1;

    const consistencyRatio = 1 - (gaps / totalDays);

    return {
      frequency: Math.round(consistencyRatio * 100),
      effectiveness: Math.round(consistencyRatio * 100),
      recommendation: consistencyRatio > 0.7
        ? 'Great consistency! Keep it up!'
        : 'Try to study more regularly to build better habits'
    };
  }

  private static calculateStudyFrequency(sessions: any[]) {
    if (sessions.length === 0) return { daysSinceLastSession: 999 };

    const lastSession = new Date(Math.max(...sessions.map(s => new Date(s.startTime).getTime())));
    const daysSince = Math.floor((Date.now() - lastSession.getTime()) / (24 * 60 * 60 * 1000));

    return { daysSinceLastSession: daysSince };
  }

  private static getRecentAccuracy(sessions: any[]): number {
    const recentSessions = sessions.slice(-5); // Last 5 sessions
    if (recentSessions.length === 0) return 0;

    const totalQuestions = recentSessions.reduce((sum, s) => sum + s.questionsAnswered, 0);
    const totalCorrect = recentSessions.reduce((sum, s) => sum + s.correctAnswers, 0);

    return totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;
  }

  private static calculateStudyStreak(sessions: any[]): number {
    if (sessions.length === 0) return 0;

    const sortedSessions = sessions.sort((a, b) =>
      new Date(b.startTime).getTime() - new Date(a.startTime).getTime()
    );

    let streak = 0;
    let currentDate = new Date();

    for (const session of sortedSessions) {
      const sessionDate = new Date(session.startTime);
      const daysDiff = Math.floor((currentDate.getTime() - sessionDate.getTime()) / (24 * 60 * 60 * 1000));

      if (daysDiff <= streak + 1) {
        streak++;
        currentDate = sessionDate;
      } else {
        break;
      }
    }

    return streak;
  }

  private static identifySessionStrengths(session: any): string[] {
    const strengths: string[] = [];
    const accuracy = (session.correctAnswers / session.questionsAnswered) * 100;

    if (accuracy >= 80) strengths.push('High accuracy');
    if (session.duration >= 30) strengths.push('Good session length');
    if (session.questionsAnswered >= 20) strengths.push('Good question volume');

    return strengths;
  }

  private static identifySessionWeaknesses(session: any): string[] {
    const weaknesses: string[] = [];
    const accuracy = (session.correctAnswers / session.questionsAnswered) * 100;

    if (accuracy < 60) weaknesses.push('Low accuracy - review concepts');
    if (session.duration < 15) weaknesses.push('Short session - try longer study periods');
    if (session.questionsAnswered < 10) weaknesses.push('Few questions - increase practice volume');

    return weaknesses;
  }
}