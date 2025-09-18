import React, { useState, useEffect } from 'react';
import { MCQ, SubjectName, QualityMetrics, ContentValidationReport } from '../types';
import { QualityAssessmentService, GapValidationService } from '../utils/qualityAssessment';
import { ENHANCED_SYLLABUS_DATA } from '../constants/syllabusMapping';

interface QualityAssessmentDashboardProps {
  questions: MCQ[];
  onQualityIssueClick?: (issue: any) => void;
}

const QualityAssessmentDashboard: React.FC<QualityAssessmentDashboardProps> = ({
  questions,
  onQualityIssueClick
}) => {
  const [validationReport, setValidationReport] = useState<ContentValidationReport | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<SubjectName | 'all'>('all');
  const [selectedQualityFilter, setSelectedQualityFilter] = useState<'all' | 'excellent' | 'good' | 'fair' | 'poor'>('all');

  useEffect(() => {
    const report = QualityAssessmentService.generateContentValidationReport(
      questions,
      ENHANCED_SYLLABUS_DATA
    );
    setValidationReport(report);
  }, [questions]);

  const getQualityColor = (score: number): string => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 80) return 'text-blue-600 bg-blue-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getQualityLabel = (score: number): string => {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Good';
    if (score >= 70) return 'Fair';
    return 'Poor';
  };

  const getIssueSeverityColor = (type: string): string => {
    switch (type) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'info': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getFilteredQuestions = (): MCQ[] => {
    let filtered = questions;

    if (selectedSubject !== 'all') {
      filtered = filtered.filter(q => q.subjectName === selectedSubject);
    }

    if (selectedQualityFilter !== 'all' && validationReport) {
      const qualityRanges = {
        excellent: [90, 100],
        good: [80, 89],
        fair: [70, 79],
        poor: [0, 69]
      };

      const [min, max] = qualityRanges[selectedQualityFilter];
      filtered = filtered.filter(q => {
        const metrics = QualityAssessmentService.assessQuestionQuality(q);
        return metrics.overallScore >= min && metrics.overallScore <= max;
      });
    }

    return filtered;
  };

  if (!validationReport) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const filteredQuestions = getFilteredQuestions();

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Quality Assessment Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{validationReport.totalQuestions}</div>
            <div className="text-sm text-blue-800">Total Questions</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{validationReport.validQuestions}</div>
            <div className="text-sm text-green-800">Valid Questions</div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-red-600">{validationReport.invalidQuestions}</div>
            <div className="text-sm text-red-800">Invalid Questions</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">
              {Math.round((validationReport.validQuestions / validationReport.totalQuestions) * 100)}%
            </div>
            <div className="text-sm text-purple-800">Quality Rate</div>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-indigo-600">{validationReport.commonIssues.length}</div>
            <div className="text-sm text-indigo-800">Common Issues</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label htmlFor="subject-filter" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <select
              id="subject-filter"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value as SubjectName | 'all')}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Subjects</option>
              {Object.values(SubjectName).map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="quality-filter" className="block text-sm font-medium text-gray-700 mb-1">Quality Filter</label>
            <select
              id="quality-filter"
              value={selectedQualityFilter}
              onChange={(e) => setSelectedQualityFilter(e.target.value as 'all' | 'excellent' | 'good' | 'fair' | 'poor')}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Quality Levels</option>
              <option value="excellent">Excellent (90-100%)</option>
              <option value="good">Good (80-89%)</option>
              <option value="fair">Fair (70-79%)</option>
              <option value="poor">Poor (0-69%)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Quality Distribution */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quality Distribution</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600">{validationReport.qualityDistribution.excellent}</div>
            <div className="text-sm text-green-800">Excellent</div>
            <div className="text-xs text-green-600 mt-1">
              {Math.round((validationReport.qualityDistribution.excellent / validationReport.totalQuestions) * 100)}%
            </div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">{validationReport.qualityDistribution.good}</div>
            <div className="text-sm text-blue-800">Good</div>
            <div className="text-xs text-blue-600 mt-1">
              {Math.round((validationReport.qualityDistribution.good / validationReport.totalQuestions) * 100)}%
            </div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-3xl font-bold text-yellow-600">{validationReport.qualityDistribution.fair}</div>
            <div className="text-sm text-yellow-800">Fair</div>
            <div className="text-xs text-yellow-600 mt-1">
              {Math.round((validationReport.qualityDistribution.fair / validationReport.totalQuestions) * 100)}%
            </div>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="text-3xl font-bold text-red-600">{validationReport.qualityDistribution.poor}</div>
            <div className="text-sm text-red-800">Poor</div>
            <div className="text-xs text-red-600 mt-1">
              {Math.round((validationReport.qualityDistribution.poor / validationReport.totalQuestions) * 100)}%
            </div>
          </div>
        </div>
      </div>

      {/* Subject Quality Breakdown */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Subject Quality Breakdown</h2>
        <div className="space-y-4">
          {Object.entries(validationReport.subjectBreakdown).map(([subject, metrics]) => (
            <div key={subject} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-medium text-gray-900">{subject}</h3>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getQualityColor(metrics.overallScore)}`}>
                    {getQualityLabel(metrics.overallScore)}
                  </span>
                  <span className="text-sm font-medium">{metrics.overallScore}%</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-3">
                <div className="text-center">
                  <div className="text-sm text-gray-600">Content</div>
                  <div className="font-medium">{metrics.contentQuality}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Structure</div>
                  <div className="font-medium">{metrics.questionStructure}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Answers</div>
                  <div className="font-medium">{metrics.answerQuality}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Alignment</div>
                  <div className="font-medium">{metrics.syllabusAlignment}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Difficulty</div>
                  <div className="font-medium">{metrics.difficultyBalance}%</div>
                </div>
              </div>

              {metrics.issues.length > 0 && (
                <div className="mt-3">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Top Issues:</h4>
                  <div className="space-y-1">
                    {metrics.issues.slice(0, 3).map((issue, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${getIssueSeverityColor(issue.type)}`}>
                          {issue.type}
                        </span>
                        <span className="text-gray-700">{issue.message}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Common Issues */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Most Common Issues</h2>
        <div className="space-y-3">
          {validationReport.commonIssues.map((issue, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-blue-600">{index + 1}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getIssueSeverityColor(issue.type)}`}>
                    {issue.category}
                  </span>
                  <span className="text-sm font-medium text-gray-900 capitalize">{issue.type}</span>
                </div>
                <p className="text-sm text-gray-700">{issue.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Question Details */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Question Details ({filteredQuestions.length} questions)
        </h2>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {filteredQuestions.slice(0, 20).map((question, index) => {
            const metrics = QualityAssessmentService.assessQuestionQuality(question);
            return (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 mb-1">{question.question}</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-600">
                      <span>{question.subjectName}</span>
                      <span>•</span>
                      <span>{question.topicId}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getQualityColor(metrics.overallScore)}`}>
                      {getQualityLabel(metrics.overallScore)}
                    </span>
                    <span className="text-sm font-medium">{metrics.overallScore}%</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-3 text-xs">
                  <div className="text-center">
                    <div className="text-gray-600">Content</div>
                    <div className="font-medium">{metrics.contentQuality}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-600">Structure</div>
                    <div className="font-medium">{metrics.questionStructure}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-600">Answers</div>
                    <div className="font-medium">{metrics.answerQuality}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-600">Alignment</div>
                    <div className="font-medium">{metrics.syllabusAlignment}%</div>
                  </div>
                </div>

                {metrics.issues.length > 0 && (
                  <div className="space-y-1">
                    {metrics.issues.slice(0, 2).map((issue, issueIndex) => (
                      <div key={issueIndex} className="flex items-center space-x-2 text-xs">
                        <span className={`px-1 py-0.5 rounded text-xs ${getIssueSeverityColor(issue.type)}`}>
                          {issue.type}
                        </span>
                        <span className="text-gray-700">{issue.message}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {filteredQuestions.length > 20 && (
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Showing first 20 questions. {filteredQuestions.length - 20} more available.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QualityAssessmentDashboard;