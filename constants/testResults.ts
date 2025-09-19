import { SubjectName, MCQ } from '../types';
import { TestConfiguration } from '../components/MockTestConfig';

export interface StoredTestResult {
  id: string;
  config: TestConfiguration;
  questions: MCQ[];
  answers: (number | null)[];
  startTime: Date;
  endTime: Date;
  score: number;
  totalQuestions: number;
  timeSpent: number;
  subjectName: SubjectName;
}

export interface TestAnalytics {
  totalTests: number;
  averageScore: number;
  averageTime: number;
  subjectBreakdown: Record<SubjectName, {
    tests: number;
    averageScore: number;
    improvement: number;
  }>;
  recentTests: StoredTestResult[];
}

class TestResultsStorage {
  private readonly STORAGE_KEY = 'ctet_test_results';
  private readonly ANALYTICS_KEY = 'ctet_test_analytics';

  saveTestResult(result: StoredTestResult): void {
    try {
      const existing = this.getAllTestResults();
      existing.push(result);

      // Keep only last 50 results to prevent storage bloat
      if (existing.length > 50) {
        existing.splice(0, existing.length - 50);
      }

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(existing));
      this.updateAnalytics();
    } catch (error) {
      console.warn('Failed to save test result:', error);
    }
  }

  getAllTestResults(): StoredTestResult[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) return [];

      const results = JSON.parse(stored);
      // Convert date strings back to Date objects
      return results.map((result: any) => ({
        ...result,
        startTime: new Date(result.startTime),
        endTime: new Date(result.endTime),
      }));
    } catch (error) {
      console.warn('Failed to load test results:', error);
      return [];
    }
  }

  getTestResultsBySubject(subjectName: SubjectName): StoredTestResult[] {
    return this.getAllTestResults().filter(result => result.subjectName === subjectName);
  }

  getAnalytics(): TestAnalytics {
    try {
      const stored = localStorage.getItem(this.ANALYTICS_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.warn('Failed to load analytics:', error);
    }

    // Calculate analytics from stored results
    return this.calculateAnalytics();
  }

  private calculateAnalytics(): TestAnalytics {
    const allResults = this.getAllTestResults();

    if (allResults.length === 0) {
      return {
        totalTests: 0,
        averageScore: 0,
        averageTime: 0,
        subjectBreakdown: {} as Record<SubjectName, any>,
        recentTests: [],
      };
    }

    const totalScore = allResults.reduce((sum, result) => sum + result.score, 0);
    const totalTime = allResults.reduce((sum, result) => sum + result.timeSpent, 0);

    const subjectBreakdown = allResults.reduce((acc, result) => {
      const subject = result.subjectName;
      if (!acc[subject]) {
        acc[subject] = {
          tests: 0,
          totalScore: 0,
          scores: [],
        };
      }
      acc[subject].tests++;
      acc[subject].totalScore += result.score;
      acc[subject].scores.push(result.score);
      return acc;
    }, {} as Record<string, { tests: number; totalScore: number; scores: number[] }>);

    // Calculate improvement trends
    const processedSubjectBreakdown = Object.entries(subjectBreakdown).reduce((acc, [subject, data]) => {
      const averageScore = data.totalScore / data.tests;
      const scores = data.scores;
      let improvement = 0;

      if (scores.length >= 2) {
        const firstHalf = scores.slice(0, Math.floor(scores.length / 2));
        const secondHalf = scores.slice(Math.floor(scores.length / 2));

        const firstHalfAvg = firstHalf.reduce((sum, score) => sum + score, 0) / firstHalf.length;
        const secondHalfAvg = secondHalf.reduce((sum, score) => sum + score, 0) / secondHalf.length;

        improvement = ((secondHalfAvg - firstHalfAvg) / firstHalfAvg) * 100;
      }

      acc[subject as SubjectName] = {
        tests: data.tests,
        averageScore,
        improvement,
      };
      return acc;
    }, {} as Record<SubjectName, { tests: number; averageScore: number; improvement: number }>);

    const analytics: TestAnalytics = {
      totalTests: allResults.length,
      averageScore: totalScore / allResults.length,
      averageTime: totalTime / allResults.length,
      subjectBreakdown: processedSubjectBreakdown,
      recentTests: allResults.slice(-5).reverse(), // Last 5 tests, most recent first
    };

    // Cache the analytics
    try {
      localStorage.setItem(this.ANALYTICS_KEY, JSON.stringify(analytics));
    } catch (error) {
      console.warn('Failed to cache analytics:', error);
    }

    return analytics;
  }

  private updateAnalytics(): void {
    // Clear cached analytics to force recalculation
    localStorage.removeItem(this.ANALYTICS_KEY);
  }

  clearAllData(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.ANALYTICS_KEY);
  }

  exportData(): string {
    const data = {
      testResults: this.getAllTestResults(),
      analytics: this.getAnalytics(),
      exportDate: new Date().toISOString(),
    };
    return JSON.stringify(data, null, 2);
  }
}

export const testResultsStorage = new TestResultsStorage();