import { ExperienceLevel, ExperienceLevelConfig, UserPreferences, AdaptiveContentFilter, SubjectName } from '../types';

// Experience level configurations
export const EXPERIENCE_LEVELS: Record<ExperienceLevel, ExperienceLevelConfig> = {
  beginner: {
    level: 'beginner',
    name: 'Beginner',
    description: 'New to CTET preparation with basic teaching concepts',
    icon: '🌱',
    questionComplexity: 'basic',
    contentDepth: 'overview',
    recommendedStudyTime: 30,
    features: [
      'Simplified explanations',
      'Basic concept introductions',
      'Step-by-step guidance',
      'Practice with easy questions',
      'Progress tracking',
      'Encouraging feedback'
    ]
  },
  intermediate: {
    level: 'intermediate',
    name: 'Intermediate',
    description: 'Some teaching experience with moderate CTET knowledge',
    icon: '📚',
    questionComplexity: 'moderate',
    contentDepth: 'detailed',
    recommendedStudyTime: 45,
    features: [
      'In-depth concept explanations',
      'Application-based questions',
      'Case study discussions',
      'Comparative analysis',
      'Time management tips',
      'Strategy guidance'
    ]
  },
  advanced: {
    level: 'advanced',
    name: 'Advanced',
    description: 'Experienced in teaching with strong CTET foundation',
    icon: '🎯',
    questionComplexity: 'advanced',
    contentDepth: 'comprehensive',
    recommendedStudyTime: 60,
    features: [
      'Advanced pedagogical concepts',
      'Complex scenario analysis',
      'Research-based insights',
      'Critical thinking exercises',
      'Expert-level questions',
      'Performance analytics'
    ]
  }
};

// Default user preferences
export const DEFAULT_USER_PREFERENCES: UserPreferences = {
  experienceLevel: 'beginner',
  studyGoals: ['Pass CTET exam', 'Improve teaching skills'],
  preferredSubjects: [],
  dailyStudyTime: 60,
  notificationsEnabled: true,
  lastUpdated: new Date()
};

// Local storage utilities
export class UserPreferencesStorage {
  private static readonly STORAGE_KEY = 'ctet_user_preferences';

  static savePreferences(preferences: UserPreferences): void {
    try {
      const dataToStore = {
        ...preferences,
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(dataToStore));
    } catch (error) {
      console.error('Failed to save user preferences:', error);
    }
  }

  static loadPreferences(): UserPreferences | null {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) return null;

      const parsed = JSON.parse(stored);
      // Convert lastUpdated back to Date object
      if (parsed.lastUpdated) {
        parsed.lastUpdated = new Date(parsed.lastUpdated);
      }
      return parsed as UserPreferences;
    } catch (error) {
      console.error('Failed to load user preferences:', error);
      return null;
    }
  }

  static updateExperienceLevel(level: ExperienceLevel): void {
    const currentPrefs = this.loadPreferences() || DEFAULT_USER_PREFERENCES;
    const updatedPrefs: UserPreferences = {
      ...currentPrefs,
      experienceLevel: level,
      lastUpdated: new Date()
    };
    this.savePreferences(updatedPrefs);
  }

  static clearPreferences(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear user preferences:', error);
    }
  }
}

// Adaptive content filtering utilities
export class AdaptiveContentService {
  static createContentFilter(experienceLevel: ExperienceLevel, preferences?: UserPreferences): AdaptiveContentFilter {
    const levelConfig = EXPERIENCE_LEVELS[experienceLevel];

    // Base filter configuration
    const filter: AdaptiveContentFilter = {
      experienceLevel,
      subjectFilters: {
        [SubjectName.CDP]: true,
        [SubjectName.MATH]: true,
        [SubjectName.EVS]: true,
        [SubjectName.LANG1]: true,
        [SubjectName.LANG2]: true
      },
      difficultyFilters: {
        easy: true,
        medium: true,
        hard: true
      },
      topicPriorities: {}
    };

    // Adjust filters based on experience level
    switch (experienceLevel) {
      case 'beginner':
        filter.difficultyFilters.hard = false; // Hide advanced questions
        break;
      case 'intermediate':
        // Show all difficulties but prioritize medium
        break;
      case 'advanced':
        // Show all content, no restrictions
        break;
    }

    // Apply user preferences if available
    if (preferences) {
      // Update subject filters based on preferences
      if (preferences.preferredSubjects.length > 0) {
        Object.keys(filter.subjectFilters).forEach(subject => {
          filter.subjectFilters[subject as SubjectName] =
            preferences.preferredSubjects.includes(subject as SubjectName);
        });
      }
    }

    return filter;
  }

  static getRecommendedStudyPlan(experienceLevel: ExperienceLevel): {
    dailySessions: number;
    sessionDuration: number;
    weeklyGoals: string[];
    focusAreas: string[];
  } {
    const levelConfig = EXPERIENCE_LEVELS[experienceLevel];

    const basePlan = {
      sessionDuration: levelConfig.recommendedStudyTime,
      weeklyGoals: [] as string[],
      focusAreas: [] as string[]
    };

    switch (experienceLevel) {
      case 'beginner':
        return {
          ...basePlan,
          dailySessions: 2,
          weeklyGoals: [
            'Complete 1 full mock test',
            'Review 3 basic concepts daily',
            'Practice 20 easy questions',
            'Watch 2 educational videos'
          ],
          focusAreas: [
            'Basic teaching concepts',
            'Question pattern recognition',
            'Time management basics',
            'Confidence building'
          ]
        };
      case 'intermediate':
        return {
          ...basePlan,
          dailySessions: 3,
          weeklyGoals: [
            'Complete 2 full mock tests',
            'Master 5 key topics',
            'Practice 50 mixed questions',
            'Analyze 3 case studies'
          ],
          focusAreas: [
            'Application of concepts',
            'Advanced question solving',
            'Strategy optimization',
            'Weak area identification'
          ]
        };
      case 'advanced':
        return {
          ...basePlan,
          dailySessions: 4,
          weeklyGoals: [
            'Complete 3 full mock tests',
            'Master all syllabus topics',
            'Practice 100+ questions daily',
            'Research current education trends'
          ],
          focusAreas: [
            'Expert-level problem solving',
            'Research-based teaching methods',
            'Performance optimization',
            'Competitive exam strategies'
          ]
        };
    }
  }

  static getPersonalizedTips(experienceLevel: ExperienceLevel, performanceData?: any): string[] {
    const tips: string[] = [];

    switch (experienceLevel) {
      case 'beginner':
        tips.push(
          'Start with basic concepts and gradually move to complex topics',
          'Focus on understanding rather than memorization',
          'Take regular breaks during study sessions',
          'Practice with easy questions first to build confidence',
          'Review your mistakes thoroughly',
          'Use mnemonic devices for better retention'
        );
        break;
      case 'intermediate':
        tips.push(
          'Apply concepts to real teaching scenarios',
          'Focus on time management during practice tests',
          'Analyze question patterns and trends',
          'Work on weak areas identified in mock tests',
          'Discuss complex topics with peers or mentors',
          'Maintain a study streak for consistency'
        );
        break;
      case 'advanced':
        tips.push(
          'Focus on accuracy over speed in final preparation',
          'Analyze previous year question papers deeply',
          'Practice with time pressure to simulate exam conditions',
          'Review and update your preparation strategy weekly',
          'Stay updated with latest education policies',
          'Mentor others to reinforce your own learning'
        );
        break;
    }

    return tips;
  }
}

// Progress tracking utilities
export class ProgressTracker {
  private static readonly PROGRESS_KEY = 'ctet_progress_data';

  static saveProgress(progressData: {
    experienceLevel: ExperienceLevel;
    completedTopics: string[];
    masteredConcepts: string[];
    weakAreas: string[];
    studyStreak: number;
    totalStudyTime: number;
    lastStudyDate: Date;
  }): void {
    try {
      const dataToStore = {
        ...progressData,
        lastStudyDate: progressData.lastStudyDate.toISOString()
      };
      localStorage.setItem(this.PROGRESS_KEY, JSON.stringify(dataToStore));
    } catch (error) {
      console.error('Failed to save progress:', error);
    }
  }

  static loadProgress(): any | null {
    try {
      const stored = localStorage.getItem(this.PROGRESS_KEY);
      if (!stored) return null;

      const parsed = JSON.parse(stored);
      if (parsed.lastStudyDate) {
        parsed.lastStudyDate = new Date(parsed.lastStudyDate);
      }
      return parsed;
    } catch (error) {
      console.error('Failed to load progress:', error);
      return null;
    }
  }

  static updateStudySession(sessionData: {
    duration: number;
    topicsCovered: string[];
    questionsAttempted: number;
    correctAnswers: number;
  }): void {
    const currentProgress = this.loadProgress() || {
      experienceLevel: 'beginner',
      completedTopics: [],
      masteredConcepts: [],
      weakAreas: [],
      studyStreak: 0,
      totalStudyTime: 0,
      lastStudyDate: new Date()
    };

    const updatedProgress = {
      ...currentProgress,
      totalStudyTime: currentProgress.totalStudyTime + sessionData.duration,
      completedTopics: [...new Set([...currentProgress.completedTopics, ...sessionData.topicsCovered])],
      lastStudyDate: new Date()
    };

    // Update study streak
    const today = new Date().toDateString();
    const lastStudy = currentProgress.lastStudyDate.toDateString();

    if (today === lastStudy) {
      // Already studied today, maintain streak
    } else if (new Date(today).getTime() - new Date(lastStudy).getTime() === 24 * 60 * 60 * 1000) {
      // Studied yesterday, increment streak
      updatedProgress.studyStreak = currentProgress.studyStreak + 1;
    } else {
      // Streak broken, reset to 1
      updatedProgress.studyStreak = 1;
    }

    this.saveProgress(updatedProgress);
  }
}