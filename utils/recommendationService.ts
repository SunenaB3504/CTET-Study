import { Subject, Topic, QuestionAttempt, ExperienceLevel } from '../types';

export interface RecommendationScore {
  topicId: string;
  subjectName: string;
  topicName: string;
  score: number;
  reason: string;
  priority: 'high' | 'medium' | 'low';
  estimatedDifficulty: 'easy' | 'medium' | 'hard';
  expectedSuccessRate: number;
}

export interface RecommendationResult {
  recommendations: RecommendationScore[];
  weakAreas: string[];
  improvementAreas: string[];
  nextBestActions: string[];
}

export class RecommendationService {
  private static instance: RecommendationService;

  public static getInstance(): RecommendationService {
    if (!RecommendationService.instance) {
      RecommendationService.instance = new RecommendationService();
    }
    return RecommendationService.instance;
  }

  /**
   * Generate personalized recommendations based on user progress
   */
  public generateRecommendations(
    questionAttempts: QuestionAttempt[],
    completedTopics: string[],
    experienceLevel: ExperienceLevel,
    subjects: Subject[]
  ): RecommendationResult {
    const topicPerformance = this.analyzeTopicPerformance(questionAttempts, subjects);
    const weakAreas = this.identifyWeakAreas(topicPerformance);
    const recommendations = this.scoreAndRankTopics(
      topicPerformance,
      weakAreas,
      completedTopics,
      experienceLevel,
      subjects
    );

    const improvementAreas = this.generateImprovementSuggestions(topicPerformance);
    const nextBestActions = this.generateNextBestActions(recommendations, experienceLevel);

    return {
      recommendations: recommendations.slice(0, 5), // Top 5 recommendations
      weakAreas,
      improvementAreas,
      nextBestActions
    };
  }

  /**
   * Analyze performance for each topic
   */
  private analyzeTopicPerformance(
    questionAttempts: QuestionAttempt[],
    subjects: Subject[]
  ): Map<string, { correct: number; total: number; avgTime: number; recentPerformance: number[] }> {
    const topicStats = new Map<string, { correct: number; total: number; avgTime: number; recentPerformance: number[] }>();

    // Group attempts by topic
    const attemptsByTopic = new Map<string, QuestionAttempt[]>();
    questionAttempts.forEach(attempt => {
      if (!attemptsByTopic.has(attempt.topicId)) {
        attemptsByTopic.set(attempt.topicId, []);
      }
      attemptsByTopic.get(attempt.topicId)!.push(attempt);
    });

    // Calculate stats for each topic
    attemptsByTopic.forEach((attempts, topicId) => {
      const correct = attempts.filter(a => a.isCorrect).length;
      const total = attempts.length;
      const avgTime = attempts.reduce((sum, a) => sum + a.timeSpent, 0) / total;

      // Get recent performance (last 10 attempts)
      const recentAttempts = attempts.slice(-10);
      const recentPerformance = recentAttempts.map(a => a.isCorrect ? 1 : 0);

      topicStats.set(topicId, {
        correct,
        total,
        avgTime,
        recentPerformance
      });
    });

    return topicStats;
  }

  /**
   * Identify weak areas based on performance metrics
   */
  private identifyWeakAreas(
    topicPerformance: Map<string, { correct: number; total: number; avgTime: number; recentPerformance: number[] }>
  ): string[] {
    const weakAreas: string[] = [];
    const threshold = 0.7; // 70% success rate threshold

    topicPerformance.forEach((stats, topicId) => {
      const successRate = stats.correct / stats.total;
      const recentSuccessRate = stats.recentPerformance.length > 0
        ? stats.recentPerformance.reduce((a, b) => a + b, 0) / stats.recentPerformance.length
        : successRate;

      // Consider weak if overall or recent performance is below threshold
      if (successRate < threshold || recentSuccessRate < threshold) {
        weakAreas.push(topicId);
      }
    });

    return weakAreas;
  }

  /**
   * Score and rank topics for recommendation
   */
  private scoreAndRankTopics(
    topicPerformance: Map<string, { correct: number; total: number; avgTime: number; recentPerformance: number[] }>,
    weakAreas: string[],
    completedTopics: string[],
    experienceLevel: ExperienceLevel,
    subjects: Subject[]
  ): RecommendationScore[] {
    const recommendations: RecommendationScore[] = [];

    subjects.forEach(subject => {
      subject.topics.forEach(topic => {
        const stats = topicPerformance.get(topic.id);
        let score = 0;
        let reason = '';
        let priority: 'high' | 'medium' | 'low' = 'medium';

        // Base scoring factors
        if (stats) {
          const successRate = stats.correct / stats.total;
          const recentSuccessRate = stats.recentPerformance.length > 0
            ? stats.recentPerformance.reduce((a, b) => a + b, 0) / stats.recentPerformance.length
            : successRate;

          // Prioritize weak areas
          if (weakAreas.includes(topic.id)) {
            score += 30;
            priority = 'high';
            reason = `Weak area - ${Math.round(successRate * 100)}% success rate`;
          } else if (successRate < 0.8) {
            score += 20;
            reason = `Needs improvement - ${Math.round(successRate * 100)}% success rate`;
          } else {
            score += 10;
            reason = `Good foundation - ${Math.round(successRate * 100)}% success rate`;
          }

          // Recent performance bonus/penalty
          if (recentSuccessRate > successRate + 0.1) {
            score += 10;
            reason += ' (improving trend)';
          } else if (recentSuccessRate < successRate - 0.1) {
            score -= 10;
            reason += ' (declining trend)';
          }

          // Time efficiency bonus
          const avgTime = stats.avgTime;
          if (avgTime < 60) { // Fast completion
            score += 5;
          }
        } else {
          // No attempts yet - prioritize based on syllabus importance
          score += 15;
          reason = 'Not attempted yet - recommended for syllabus coverage';
          priority = 'medium';
        }

        // Experience level adjustment
        const experienceMultiplier = this.getExperienceMultiplier(experienceLevel);
        score *= experienceMultiplier;

        // Completion status
        if (completedTopics.includes(topic.id)) {
          score -= 20; // Reduce priority for completed topics
          reason += ' (completed - review recommended)';
        }

        // Topic difficulty consideration
        const estimatedDifficulty = this.estimateTopicDifficulty(topic, stats);
        const expectedSuccessRate = this.calculateExpectedSuccessRate(experienceLevel, estimatedDifficulty, stats);

        recommendations.push({
          topicId: topic.id,
          subjectName: subject.name,
          topicName: topic.name,
          score: Math.max(0, score),
          reason,
          priority,
          estimatedDifficulty,
          expectedSuccessRate
        });
      });
    });

    // Sort by score descending
    return recommendations.sort((a, b) => b.score - a.score);
  }

  /**
   * Get experience level multiplier for scoring
   */
  private getExperienceMultiplier(experienceLevel: ExperienceLevel): number {
    switch (experienceLevel) {
      case 'beginner': return 1.2; // Prioritize foundational topics
      case 'intermediate': return 1.0; // Balanced approach
      case 'advanced': return 0.8; // Focus on advanced topics
      default: return 1.0;
    }
  }

  /**
   * Estimate topic difficulty based on content and user performance
   */
  private estimateTopicDifficulty(
    topic: Topic,
    stats?: { correct: number; total: number; avgTime: number; recentPerformance: number[] }
  ): 'easy' | 'medium' | 'hard' {
    if (!stats || stats.total < 5) {
      // Estimate based on topic content complexity
      const contentLength = topic.notes.length;
      const questionCount = topic.practiceQuestions.length;

      if (contentLength < 1000 && questionCount < 10) return 'easy';
      if (contentLength < 2000 && questionCount < 20) return 'medium';
      return 'hard';
    }

    // Estimate based on performance
    const successRate = stats.correct / stats.total;
    const avgTime = stats.avgTime;

    if (successRate > 0.8 && avgTime < 45) return 'easy';
    if (successRate > 0.6 && avgTime < 90) return 'medium';
    return 'hard';
  }

  /**
   * Calculate expected success rate for a topic
   */
  private calculateExpectedSuccessRate(
    experienceLevel: ExperienceLevel,
    difficulty: 'easy' | 'medium' | 'hard',
    stats?: { correct: number; total: number; avgTime: number; recentPerformance: number[] }
  ): number {
    let baseRate = 0.75; // Default 75% success rate

    // Adjust based on experience level
    switch (experienceLevel) {
      case 'beginner':
        baseRate -= difficulty === 'hard' ? 0.2 : difficulty === 'medium' ? 0.1 : 0;
        break;
      case 'intermediate':
        baseRate += 0.05; // Slight advantage
        break;
      case 'advanced':
        baseRate += difficulty === 'hard' ? 0.1 : 0.15;
        break;
    }

    // Adjust based on recent performance
    if (stats && stats.recentPerformance.length > 0) {
      const recentRate = stats.recentPerformance.reduce((a, b) => a + b, 0) / stats.recentPerformance.length;
      baseRate = (baseRate + recentRate) / 2; // Average with recent performance
    }

    return Math.max(0.3, Math.min(0.95, baseRate)); // Clamp between 30% and 95%
  }

  /**
   * Generate improvement suggestions based on performance analysis
   */
  private generateImprovementSuggestions(
    topicPerformance: Map<string, { correct: number; total: number; avgTime: number; recentPerformance: number[] }>
  ): string[] {
    const suggestions: string[] = [];

    // Analyze time patterns
    const avgTimes = Array.from(topicPerformance.values()).map(s => s.avgTime);
    const overallAvgTime = avgTimes.reduce((a, b) => a + b, 0) / avgTimes.length;

    if (overallAvgTime > 120) {
      suggestions.push('Consider spending more time understanding core concepts before rushing through questions');
    } else if (overallAvgTime < 30) {
      suggestions.push('Try to understand the reasoning behind answers, not just memorize them');
    }

    // Analyze performance patterns
    const successRates = Array.from(topicPerformance.values())
      .filter(s => s.total > 0)
      .map(s => s.correct / s.total);

    if (successRates.length > 0) {
      const avgSuccessRate = successRates.reduce((a, b) => a + b, 0) / successRates.length;

      if (avgSuccessRate < 0.6) {
        suggestions.push('Focus on building foundational knowledge in weak areas before advancing');
      } else if (avgSuccessRate > 0.85) {
        suggestions.push('Great performance! Consider challenging yourself with more difficult questions');
      }
    }

    // Add general suggestions if needed
    if (suggestions.length === 0) {
      suggestions.push('Continue with your current study pattern - you\'re on the right track!');
      suggestions.push('Regular practice across different topics will help maintain balance');
    }

    return suggestions;
  }

  /**
   * Generate next best actions based on recommendations
   */
  private generateNextBestActions(
    recommendations: RecommendationScore[],
    experienceLevel: ExperienceLevel
  ): string[] {
    const actions: string[] = [];

    if (recommendations.length > 0) {
      const topRecommendation = recommendations[0];
      actions.push(`Focus on ${topRecommendation.topicName} in ${topRecommendation.subjectName} - ${topRecommendation.reason}`);

      if (recommendations.length > 1) {
        actions.push(`After completing the above, work on ${recommendations[1].topicName}`);
      }
    }

    // Experience-specific actions
    switch (experienceLevel) {
      case 'beginner':
        actions.push('Start with basic concepts and gradually increase difficulty');
        actions.push('Use practice questions to reinforce understanding');
        break;
      case 'intermediate':
        actions.push('Balance between reviewing weak areas and exploring new topics');
        actions.push('Focus on application-based questions and real scenarios');
        break;
      case 'advanced':
        actions.push('Challenge yourself with complex scenarios and case studies');
        actions.push('Focus on time management and exam strategy');
        break;
    }

    return actions;
  }

  /**
   * Get adaptive difficulty adjustment for a topic
   */
  public getAdaptiveDifficulty(
    topicId: string,
    currentSuccessRate: number,
    experienceLevel: ExperienceLevel
  ): 'easy' | 'medium' | 'hard' {
    const targetSuccessRate = 0.8; // 80% target success rate
    const adjustmentThreshold = 0.1; // 10% adjustment threshold

    let difficulty: 'easy' | 'medium' | 'hard' = 'medium';

    if (currentSuccessRate > targetSuccessRate + adjustmentThreshold) {
      // Too easy - increase difficulty
      difficulty = experienceLevel === 'advanced' ? 'hard' : 'medium';
    } else if (currentSuccessRate < targetSuccessRate - adjustmentThreshold) {
      // Too hard - decrease difficulty
      difficulty = experienceLevel === 'beginner' ? 'easy' : 'medium';
    } else {
      // Just right - maintain current difficulty
      difficulty = 'medium';
    }

    return difficulty;
  }
}