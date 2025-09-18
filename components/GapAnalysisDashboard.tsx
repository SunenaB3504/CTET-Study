import React, { useState, useEffect } from 'react';
import { EnhancedSyllabusTopic, ContentGap, GapAnalysisReport, SubjectName } from '../types';
import { ENHANCED_SYLLABUS_DATA, SyllabusGapAnalyzer, ContentPriorityScorer } from '../constants/syllabusMapping';

/**
 * Gap Analysis Dashboard Component
 *
 * Note: This component uses inline styles for progress bar widths because the widths
 * are dynamically calculated based on coverage percentages. These cannot be replaced
 * with static Tailwind classes as the values are computed at runtime.
 */

interface GapAnalysisDashboardProps {
  existingQuestions: any[];
  onGapSelected?: (gap: ContentGap) => void;
}

const GapAnalysisDashboard: React.FC<GapAnalysisDashboardProps> = ({
  existingQuestions,
  onGapSelected
}) => {
  const [gapAnalysis, setGapAnalysis] = useState<GapAnalysisReport | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<SubjectName | 'all'>('all');
  const [sortBy, setSortBy] = useState<'priority' | 'coverage' | 'gaps'>('priority');

  useEffect(() => {
    const gaps = SyllabusGapAnalyzer.analyzeCoverage(ENHANCED_SYLLABUS_DATA, existingQuestions);

    const subjectBreakdown = Object.values(SubjectName).map(subject => {
      const subjectTopics = ENHANCED_SYLLABUS_DATA.filter((topic: EnhancedSyllabusTopic) => topic.subject === subject);
      const subjectGaps = gaps.filter((gap: ContentGap) =>
        subjectTopics.some((topic: EnhancedSyllabusTopic) => topic.id === gap.topicId)
      );
      const totalCoverage = subjectTopics.reduce((sum: number, topic: EnhancedSyllabusTopic) => sum + topic.coverage, 0) / subjectTopics.length;

      return {
        subject,
        gaps: subjectGaps.length,
        coverage: Math.round(totalCoverage)
      };
    });

    const criticalGaps = gaps.filter((gap: ContentGap) => gap.priority >= 2);

    const recommendations = generateRecommendations(gaps, subjectBreakdown);

    setGapAnalysis({
      totalGaps: gaps.length,
      criticalGaps: criticalGaps.length,
      subjectBreakdown,
      priorityGaps: gaps.slice(0, 10), // Top 10 priority gaps
      recommendations
    });
  }, [existingQuestions]);

  const generateRecommendations = (gaps: ContentGap[], breakdown: any[]): string[] => {
    const recommendations: string[] = [];

    // Find subjects with most gaps
    const worstSubject = breakdown.reduce((worst, current) =>
      current.gaps > worst.gaps ? current : worst
    );

    if (worstSubject.gaps > 0) {
      recommendations.push(`Focus on ${worstSubject.subject} - ${worstSubject.gaps} gaps identified`);
    }

    // Check for critical gaps
    const criticalGaps = gaps.filter((gap: ContentGap) => gap.priority >= 3);
    if (criticalGaps.length > 0) {
      recommendations.push(`Address ${criticalGaps.length} critical gaps immediately`);
    }

    // Coverage recommendations
    const lowCoverageSubjects = breakdown.filter(subject => subject.coverage < 50);
    if (lowCoverageSubjects.length > 0) {
      recommendations.push(`Improve coverage in ${lowCoverageSubjects.map(s => s.subject).join(', ')}`);
    }

    return recommendations;
  };

  const getFilteredTopics = (): EnhancedSyllabusTopic[] => {
    if (selectedSubject === 'all') return ENHANCED_SYLLABUS_DATA;

    return ENHANCED_SYLLABUS_DATA.filter((topic: EnhancedSyllabusTopic) => topic.subject === selectedSubject);
  };

  const getSortedTopics = (topics: EnhancedSyllabusTopic[]): EnhancedSyllabusTopic[] => {
    return [...topics].sort((a, b) => {
      switch (sortBy) {
        case 'priority':
          const aPriority = ContentPriorityScorer.calculatePriority(a, gapAnalysis?.priorityGaps || []);
          const bPriority = ContentPriorityScorer.calculatePriority(b, gapAnalysis?.priorityGaps || []);
          return bPriority - aPriority;
        case 'coverage':
          return a.coverage - b.coverage;
        case 'gaps':
          return b.requiredQuestions - b.questionCount - (a.requiredQuestions - a.questionCount);
        default:
          return 0;
      }
    });
  };

  const getGapStatusColor = (status: string): string => {
    switch (status) {
      case 'missing': return 'bg-red-100 text-red-800';
      case 'partial': return 'bg-yellow-100 text-yellow-800';
      case 'covered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: number): string => {
    if (priority >= 70) return 'bg-red-500';
    if (priority >= 40) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  if (!gapAnalysis) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const filteredTopics = getFilteredTopics();
  const sortedTopics = getSortedTopics(filteredTopics);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Syllabus Gap Analysis Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{gapAnalysis.totalGaps}</div>
            <div className="text-sm text-blue-800">Total Gaps</div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-red-600">{gapAnalysis.criticalGaps}</div>
            <div className="text-sm text-red-800">Critical Gaps</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {Math.round(gapAnalysis.subjectBreakdown.reduce((sum, s) => sum + s.coverage, 0) / gapAnalysis.subjectBreakdown.length)}%
            </div>
            <div className="text-sm text-green-800">Avg Coverage</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">{gapAnalysis.recommendations.length}</div>
            <div className="text-sm text-purple-800">Recommendations</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label htmlFor="subject-select" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <select
              id="subject-select"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value as SubjectName | 'all')}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Select subject to filter topics"
            >
              <option value="all">All Subjects</option>
              {Object.values(SubjectName).map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="sort-select" className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'priority' | 'coverage' | 'gaps')}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Select sorting criteria"
            >
              <option value="priority">Priority</option>
              <option value="coverage">Coverage</option>
              <option value="gaps">Gap Size</option>
            </select>
          </div>
        </div>
      </div>

      {/* Subject Overview */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Subject Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gapAnalysis.subjectBreakdown.map(subject => (
            <div key={subject.subject} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-gray-900">{subject.subject}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGapStatusColor(
                  subject.coverage >= 80 ? 'covered' : subject.coverage >= 50 ? 'partial' : 'missing'
                )}`}>
                  {subject.coverage}%
                </span>
              </div>
              <div className="text-sm text-gray-600">
                {subject.gaps} gaps identified
              </div>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    subject.coverage >= 80 ? 'bg-green-600' :
                    subject.coverage >= 50 ? 'bg-yellow-600' : 'bg-red-600'
                  }`}
                  style={{ '--progress-width': `${Math.min(subject.coverage, 100)}%`, width: 'var(--progress-width)' } as React.CSSProperties}
                  aria-label={`Coverage: ${subject.coverage}%`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Topic Details */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Topic Details</h2>
        <div className="space-y-4">
          {sortedTopics.map(topic => {
            const priorityScore = ContentPriorityScorer.calculatePriority(topic, gapAnalysis.priorityGaps);
            return (
              <div key={topic.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{topic.name}</h3>
                    <p className="text-sm text-gray-600">{topic.subject}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <div className={`w-3 h-3 rounded-full ${getPriorityColor(priorityScore)}`}></div>
                      <span className="text-sm font-medium">{priorityScore}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGapStatusColor(topic.gapStatus)}`}>
                      {topic.gapStatus}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                  <div>
                    <div className="text-sm text-gray-600">Coverage</div>
                    <div className="font-medium">{topic.coverage}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Questions</div>
                    <div className="font-medium">{topic.questionCount}/{topic.requiredQuestions}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Gap</div>
                    <div className="font-medium text-red-600">
                      {topic.requiredQuestions - topic.questionCount}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Priority</div>
                    <div className="font-medium capitalize">{topic.priority}</div>
                  </div>
                </div>

                <div className="bg-gray-200 rounded-full h-2 mb-3">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      topic.coverage >= 80 ? 'bg-green-600' :
                      topic.coverage >= 50 ? 'bg-yellow-600' : 'bg-red-600'
                    }`}
                    style={{ '--progress-width': `${Math.min(topic.coverage, 100)}%`, width: 'var(--progress-width)' } as React.CSSProperties} // Dynamic width for progress bar - cannot use Tailwind for calculated values
                    aria-label={`Coverage: ${topic.coverage}%`}
                  ></div>
                </div>

                <div className="space-y-2">
                  {topic.subtopics.map(subtopic => (
                    <div key={subtopic.id} className="flex justify-between items-center text-sm">
                      <span className="text-gray-700">{subtopic.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-600">{subtopic.questionCount} questions</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${getGapStatusColor(
                          subtopic.coverage >= 80 ? 'covered' : subtopic.coverage >= 30 ? 'partial' : 'missing'
                        )}`}>
                          {subtopic.coverage}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommendations</h2>
        <div className="space-y-3">
          {gapAnalysis.recommendations.map((recommendation, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-blue-600">{index + 1}</span>
              </div>
              <p className="text-gray-700">{recommendation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GapAnalysisDashboard;