import { MCQ, EnhancedSyllabusTopic, ContentGap, SubjectName } from '../types';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

// Quality assessment interfaces
export interface QualityMetrics {
  overallScore: number;
  contentQuality: number;
  questionStructure: number;
  answerQuality: number;
  syllabusAlignment: number;
  difficultyBalance: number;
  issues: QualityIssue[];
}

export interface QualityIssue {
  type: 'critical' | 'warning' | 'info';
  category: 'content' | 'structure' | 'alignment' | 'difficulty';
  message: string;
  suggestion?: string;
}

export interface ValidationResult {
  isValid: boolean;
  score: number;
  metrics: QualityMetrics;
  recommendations: string[];
}

export interface ContentValidationReport {
  totalQuestions: number;
  validQuestions: number;
  invalidQuestions: number;
  qualityDistribution: {
    excellent: number;
    good: number;
    fair: number;
    poor: number;
  };
  commonIssues: QualityIssue[];
  subjectBreakdown: Record<SubjectName, QualityMetrics>;
}

// Quality assessment service
export class QualityAssessmentService {
  private static readonly DOM_PURIFY_CONFIG = {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'u', 'br', 'p'],
    ALLOWED_ATTR: [],
    ALLOW_DATA_ATTR: false
  };

  /**
   * Assess the quality of a single MCQ question
   */
  static assessQuestionQuality(question: MCQ, syllabusContext?: EnhancedSyllabusTopic): QualityMetrics {
    const issues: QualityIssue[] = [];

    // Content quality assessment
    const contentScore = this.assessContentQuality(question, issues);

    // Question structure assessment
    const structureScore = this.assessQuestionStructure(question, issues);

    // Answer quality assessment
    const answerScore = this.assessAnswerQuality(question, issues);

    // Syllabus alignment assessment
    const alignmentScore = this.assessSyllabusAlignment(question, issues, syllabusContext);

    // Difficulty balance assessment
    const difficultyScore = this.assessDifficultyBalance(question, issues);

    // Calculate overall score
    const overallScore = Math.round(
      (contentScore * 0.25) +
      (structureScore * 0.20) +
      (answerScore * 0.25) +
      (alignmentScore * 0.20) +
      (difficultyScore * 0.10)
    );

    return {
      overallScore,
      contentQuality: contentScore,
      questionStructure: structureScore,
      answerQuality: answerScore,
      syllabusAlignment: alignmentScore,
      difficultyBalance: difficultyScore,
      issues
    };
  }

  /**
   * Assess content quality of the question
   */
  private static assessContentQuality(question: MCQ, issues: QualityIssue[]): number {
    let score = 100;

    // Check for sanitized content
    const sanitizedQuestion = DOMPurify.sanitize(question.question, this.DOM_PURIFY_CONFIG);
    if (sanitizedQuestion !== question.question) {
      score -= 20;
      issues.push({
        type: 'warning',
        category: 'content',
        message: 'Question contains potentially unsafe HTML content',
        suggestion: 'Use plain text or properly sanitized HTML'
      });
    }

    // Check question length
    if (question.question.length < 20) {
      score -= 15;
      issues.push({
        type: 'warning',
        category: 'content',
        message: 'Question is too short',
        suggestion: 'Make the question more descriptive and clear'
      });
    } else if (question.question.length > 300) {
      score -= 10;
      issues.push({
        type: 'info',
        category: 'content',
        message: 'Question is very long',
        suggestion: 'Consider breaking down complex questions'
      });
    }

    // Check for proper grammar and clarity
    const clarityIssues = this.checkClarity(question.question);
    score -= clarityIssues.length * 5;
    issues.push(...clarityIssues);

    return Math.max(0, score);
  }

  /**
   * Assess question structure
   */
  private static assessQuestionStructure(question: MCQ, issues: QualityIssue[]): number {
    let score = 100;

    // Check number of options
    if (question.options.length !== 4) {
      score -= 30;
      issues.push({
        type: 'critical',
        category: 'structure',
        message: 'Question must have exactly 4 options',
        suggestion: 'Add or remove options to have exactly 4 choices'
      });
    }

    // Check for duplicate options
    const uniqueOptions = new Set(question.options.map(opt => opt.toLowerCase().trim()));
    if (uniqueOptions.size !== question.options.length) {
      score -= 25;
      issues.push({
        type: 'critical',
        category: 'structure',
        message: 'Duplicate options found',
        suggestion: 'Ensure all options are unique'
      });
    }

    // Check option lengths
    const shortOptions = question.options.filter(opt => opt.trim().length < 5);
    if (shortOptions.length > 0) {
      score -= 10;
      issues.push({
        type: 'warning',
        category: 'structure',
        message: 'Some options are too short',
        suggestion: 'Make all options more descriptive'
      });
    }

    // Check for proper question format
    if (!question.question.includes('?') && !question.question.includes('?')) {
      score -= 15;
      issues.push({
        type: 'warning',
        category: 'structure',
        message: 'Question should end with a question mark',
        suggestion: 'Add a question mark at the end'
      });
    }

    return Math.max(0, score);
  }

  /**
   * Assess answer quality
   */
  private static assessAnswerQuality(question: MCQ, issues: QualityIssue[]): number {
    let score = 100;

    // Check correct answer index
    if (question.correctAnswerIndex < 0 || question.correctAnswerIndex >= question.options.length) {
      score -= 50;
      issues.push({
        type: 'critical',
        category: 'structure',
        message: 'Invalid correct answer index',
        suggestion: 'Correct answer index must be between 0 and 3'
      });
    }

    // Check explanation quality
    if (!question.explanation || question.explanation.trim().length < 20) {
      score -= 25;
      issues.push({
        type: 'warning',
        category: 'content',
        message: 'Explanation is too short or missing',
        suggestion: 'Provide a detailed explanation for the correct answer'
      });
    } else if (question.explanation.length > 500) {
      score -= 10;
      issues.push({
        type: 'info',
        category: 'content',
        message: 'Explanation is very long',
        suggestion: 'Consider making the explanation more concise'
      });
    }

    // Check if explanation mentions the correct answer
    const correctOption = question.options[question.correctAnswerIndex];
    if (question.explanation && !question.explanation.toLowerCase().includes(correctOption.toLowerCase().substring(0, 10))) {
      score -= 15;
      issues.push({
        type: 'warning',
        category: 'content',
        message: 'Explanation should reference the correct answer',
        suggestion: 'Include the correct option in the explanation'
      });
    }

    return Math.max(0, score);
  }

  /**
   * Assess syllabus alignment
   */
  private static assessSyllabusAlignment(question: MCQ, issues: QualityIssue[], syllabusContext?: EnhancedSyllabusTopic): number {
    if (!syllabusContext) {
      issues.push({
        type: 'info',
        category: 'alignment',
        message: 'Cannot verify syllabus alignment without context',
        suggestion: 'Provide syllabus context for better validation'
      });
      return 50; // Neutral score when context is missing
    }

    let score = 100;

    // Check if topicId exists in syllabus
    const topicExists = syllabusContext.subtopics.some(sub => sub.id === question.topicId);
    if (!topicExists) {
      score -= 40;
      issues.push({
        type: 'critical',
        category: 'alignment',
        message: 'Question topic does not exist in syllabus',
        suggestion: 'Ensure topicId matches a valid syllabus topic'
      });
    }

    // Check if subTopicId exists
    const subtopicExists = syllabusContext.subtopics.some(sub => sub.id === question.subTopicId);
    if (!subtopicExists) {
      score -= 30;
      issues.push({
        type: 'critical',
        category: 'alignment',
        message: 'Question subtopic does not exist in syllabus',
        suggestion: 'Ensure subTopicId matches a valid syllabus subtopic'
      });
    }

    // Check subject alignment
    if (question.subjectName !== syllabusContext.subject) {
      score -= 50;
      issues.push({
        type: 'critical',
        category: 'alignment',
        message: 'Question subject does not match syllabus subject',
        suggestion: 'Ensure subjectName matches the syllabus subject'
      });
    }

    return Math.max(0, score);
  }

  /**
   * Assess difficulty balance
   */
  private static assessDifficultyBalance(question: MCQ, issues: QualityIssue[]): number {
    // This is a simplified assessment - in a real system, this would use ML models
    // or statistical analysis of question performance data

    let score = 85; // Base score assuming balanced difficulty

    // Check for overly complex language
    const complexWords = this.countComplexWords(question.question);
    if (complexWords > 5) {
      score -= 10;
      issues.push({
        type: 'info',
        category: 'difficulty',
        message: 'Question contains complex vocabulary',
        suggestion: 'Consider simplifying language for better accessibility'
      });
    }

    // Check option complexity balance
    const optionLengths = question.options.map(opt => opt.length);
    const lengthVariance = this.calculateVariance(optionLengths);
    if (lengthVariance > 1000) {
      score -= 5;
      issues.push({
        type: 'info',
        category: 'difficulty',
        message: 'Options have inconsistent lengths',
        suggestion: 'Make option lengths more consistent'
      });
    }

    return Math.max(0, score);
  }

  /**
   * Validate a batch of questions
   */
  static validateQuestionBatch(questions: MCQ[], syllabusData?: EnhancedSyllabusTopic[]): ValidationResult {
    const results = questions.map(q => {
      const syllabusContext = syllabusData?.find(s => s.subject === q.subjectName);
      return this.assessQuestionQuality(q, syllabusContext);
    });

    const averageScore = results.reduce((sum, r) => sum + r.overallScore, 0) / results.length;
    const allIssues = results.flatMap(r => r.issues);

    const isValid = averageScore >= 70 && !results.some(r =>
      r.issues.some(issue => issue.type === 'critical')
    );

    const recommendations = this.generateRecommendations(results, allIssues);

    return {
      isValid,
      score: Math.round(averageScore),
      metrics: {
        overallScore: Math.round(averageScore),
        contentQuality: Math.round(results.reduce((sum, r) => sum + r.contentQuality, 0) / results.length),
        questionStructure: Math.round(results.reduce((sum, r) => sum + r.questionStructure, 0) / results.length),
        answerQuality: Math.round(results.reduce((sum, r) => sum + r.answerQuality, 0) / results.length),
        syllabusAlignment: Math.round(results.reduce((sum, r) => sum + r.syllabusAlignment, 0) / results.length),
        difficultyBalance: Math.round(results.reduce((sum, r) => sum + r.difficultyBalance, 0) / results.length),
        issues: allIssues.slice(0, 10) // Top 10 issues
      },
      recommendations
    };
  }

  /**
   * Generate content validation report
   */
  static generateContentValidationReport(questions: MCQ[], syllabusData: EnhancedSyllabusTopic[]): ContentValidationReport {
    const validationResults = questions.map(q => {
      const syllabusContext = syllabusData.find(s => s.subject === q.subjectName);
      return {
        question: q,
        metrics: this.assessQuestionQuality(q, syllabusContext)
      };
    });

    const validQuestions = validationResults.filter(r => r.metrics.overallScore >= 70).length;
    const invalidQuestions = questions.length - validQuestions;

    const qualityDistribution = {
      excellent: validationResults.filter(r => r.metrics.overallScore >= 90).length,
      good: validationResults.filter(r => r.metrics.overallScore >= 80 && r.metrics.overallScore < 90).length,
      fair: validationResults.filter(r => r.metrics.overallScore >= 70 && r.metrics.overallScore < 80).length,
      poor: validationResults.filter(r => r.metrics.overallScore < 70).length
    };

    const allIssues = validationResults.flatMap(r => r.metrics.issues);
    const commonIssues = this.getMostCommonIssues(allIssues);

    const subjectBreakdown = Object.values(SubjectName).reduce((acc, subject) => {
      const subjectQuestions = validationResults.filter(r => r.question.subjectName === subject);
      if (subjectQuestions.length > 0) {
        acc[subject] = {
          overallScore: Math.round(subjectQuestions.reduce((sum, r) => sum + r.metrics.overallScore, 0) / subjectQuestions.length),
          contentQuality: Math.round(subjectQuestions.reduce((sum, r) => sum + r.metrics.contentQuality, 0) / subjectQuestions.length),
          questionStructure: Math.round(subjectQuestions.reduce((sum, r) => sum + r.metrics.questionStructure, 0) / subjectQuestions.length),
          answerQuality: Math.round(subjectQuestions.reduce((sum, r) => sum + r.metrics.answerQuality, 0) / subjectQuestions.length),
          syllabusAlignment: Math.round(subjectQuestions.reduce((sum, r) => sum + r.metrics.syllabusAlignment, 0) / subjectQuestions.length),
          difficultyBalance: Math.round(subjectQuestions.reduce((sum, r) => sum + r.metrics.difficultyBalance, 0) / subjectQuestions.length),
          issues: subjectQuestions.flatMap(r => r.metrics.issues).slice(0, 5)
        };
      }
      return acc;
    }, {} as Record<SubjectName, QualityMetrics>);

    return {
      totalQuestions: questions.length,
      validQuestions,
      invalidQuestions,
      qualityDistribution,
      commonIssues,
      subjectBreakdown
    };
  }

  // Helper methods
  private static checkClarity(text: string): QualityIssue[] {
    const issues: QualityIssue[] = [];

    // Check for multiple questions in one
    if ((text.match(/\?/g) || []).length > 1) {
      issues.push({
        type: 'warning',
        category: 'content',
        message: 'Question contains multiple questions',
        suggestion: 'Split into separate questions'
      });
    }

    // Check for unclear pronouns
    const unclearPronouns = ['it', 'this', 'that', 'these', 'those'];
    const words = text.toLowerCase().split(/\s+/);
    const pronounCount = words.filter(word => unclearPronouns.includes(word)).length;
    if (pronounCount > 2) {
      issues.push({
        type: 'info',
        category: 'content',
        message: 'Question uses unclear pronouns',
        suggestion: 'Be more specific about what pronouns refer to'
      });
    }

    return issues;
  }

  private static countComplexWords(text: string): number {
    const words = text.split(/\s+/);
    const complexWords = ['pedagogical', 'cognitive', 'developmental', 'assessment', 'curriculum', 'methodology'];
    return words.filter(word => complexWords.some(complex => word.toLowerCase().includes(complex))).length;
  }

  private static calculateVariance(numbers: number[]): number {
    const mean = numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
    const squaredDiffs = numbers.map(n => Math.pow(n - mean, 2));
    return squaredDiffs.reduce((sum, sq) => sum + sq, 0) / numbers.length;
  }

  private static generateRecommendations(results: QualityMetrics[], allIssues: QualityIssue[]): string[] {
    const recommendations: string[] = [];

    const criticalIssues = allIssues.filter(issue => issue.type === 'critical');
    if (criticalIssues.length > 0) {
      recommendations.push(`Fix ${criticalIssues.length} critical issues before publishing`);
    }

    const avgScore = results.reduce((sum, r) => sum + r.overallScore, 0) / results.length;
    if (avgScore < 70) {
      recommendations.push('Overall quality needs improvement - focus on structure and content');
    }

    const structureIssues = allIssues.filter(issue => issue.category === 'structure');
    if (structureIssues.length > results.length * 0.3) {
      recommendations.push('Many questions have structural issues - review question format guidelines');
    }

    const alignmentIssues = allIssues.filter(issue => issue.category === 'alignment');
    if (alignmentIssues.length > results.length * 0.2) {
      recommendations.push('Syllabus alignment issues detected - verify topic and subtopic mappings');
    }

    return recommendations;
  }

  private static getMostCommonIssues(issues: QualityIssue[]): QualityIssue[] {
    const issueCount = issues.reduce((acc, issue) => {
      const key = `${issue.category}:${issue.message}`;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(issueCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([key, count]) => {
        const [category, message] = key.split(':');
        return {
          type: 'info' as const,
          category: category as any,
          message: `${message} (${count} occurrences)`
        };
      });
  }
}

// Gap validation utilities
export class GapValidationService {
  /**
   * Validate if a gap has been properly filled
   */
  static validateGapFill(gap: ContentGap, newQuestions: MCQ[]): boolean {
    const relevantQuestions = newQuestions.filter(q =>
      q.topicId === gap.topicId && q.subTopicId === gap.subtopicId
    );

    // Validate question quality
    const qualityResults = relevantQuestions.map(q =>
      QualityAssessmentService.assessQuestionQuality(q)
    );

    const avgQuality = qualityResults.reduce((sum, r) => sum + r.overallScore, 0) / qualityResults.length;

    // Check if we have enough quality questions
    return relevantQuestions.length >= gap.requiredQuestions && avgQuality >= 70;
  }

  /**
   * Validate content coverage for a syllabus topic
   */
  static validateTopicCoverage(topic: EnhancedSyllabusTopic, questions: MCQ[]): {
    isAdequate: boolean;
    coverage: number;
    issues: string[];
  } {
    const topicQuestions = questions.filter(q => q.topicId === topic.id);
    const coverage = topic.requiredQuestions > 0 ?
      Math.min(100, (topicQuestions.length / topic.requiredQuestions) * 100) : 100;

    const issues: string[] = [];

    if (topicQuestions.length < topic.requiredQuestions) {
      issues.push(`Missing ${topic.requiredQuestions - topicQuestions.length} questions`);
    }

    // Check quality distribution
    const qualityResults = topicQuestions.map(q =>
      QualityAssessmentService.assessQuestionQuality(q, topic)
    );

    const poorQuality = qualityResults.filter(r => r.overallScore < 60).length;
    if (poorQuality > 0) {
      issues.push(`${poorQuality} questions have poor quality`);
    }

    const criticalIssues = qualityResults.flatMap(r => r.issues)
      .filter(issue => issue.type === 'critical').length;
    if (criticalIssues > 0) {
      issues.push(`${criticalIssues} critical quality issues found`);
    }

    return {
      isAdequate: coverage >= 80 && poorQuality === 0 && criticalIssues === 0,
      coverage: Math.round(coverage),
      issues
    };
  }
}