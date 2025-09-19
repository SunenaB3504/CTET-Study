import React from 'react';
import { Subject, SubjectName, ContextualTopic } from '../types';
import { SUBJECT_DATA } from '../constants/data';
import { PencilSquareIcon, BookOpenIcon, ChartBarIcon, MagnifyingGlassIcon, CheckCircleIcon, UserIcon, TrophyIcon, LightBulbIcon, CpuChipIcon } from '@heroicons/react/24/solid';

interface SidebarProps {
  onSelectSubject: (subject: Subject) => void;
  onStartMockTest: () => void;
  onShowReadinessTracker: () => void;
  onShowSampleQuestions: () => void;
  onShowGapAnalysis: () => void;
  onShowQualityAssessment: () => void;
  onShowExperienceLevelSelection: () => void;
  onShowProgressDashboard: () => void;
  onShowRecommendationDashboard: () => void;
  onShowLearningInsights: () => void;
  selectedSubjectName?: SubjectName;
  contextualTopic: ContextualTopic | null;
  onSelectTopicById: (subjectName: SubjectName, topicId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  onSelectSubject,
  onStartMockTest,
  onShowReadinessTracker,
  onShowSampleQuestions,
  onShowGapAnalysis,
  onShowQualityAssessment,
  onShowExperienceLevelSelection,
  onShowProgressDashboard,
  onShowRecommendationDashboard,
  onShowLearningInsights,
  selectedSubjectName,
  contextualTopic,
  onSelectTopicById,
}) => {
  const handleLearnMoreClick = () => {
    if (contextualTopic) {
      // Only show confirmation during a mock test, not during study module
      const inTest = !selectedSubjectName;
      if (inTest && window.confirm('This will end your current test and take you to the study notes. Are you sure?')) {
        onSelectTopicById(contextualTopic.subjectName, contextualTopic.topicId);
      } else if (!inTest) {
        onSelectTopicById(contextualTopic.subjectName, contextualTopic.topicId);
      }
    }
  };

  return (
    <aside className="w-64 bg-white shadow-md flex-shrink-0 hidden md:flex flex-col">
      <div className="flex-1">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary">CTET Prep Pal</h2>
        </div>
        <nav className="mt-6">
          <div className="px-6 mb-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Subjects</h3>
          </div>
          <ul>
            {SUBJECT_DATA.map(subject => {
              const isSelected = subject.name === selectedSubjectName;
              return (
                <li key={subject.name}>
                  <a
                    href="#"
                    onClick={e => {
                      e.preventDefault();
                      onSelectSubject(subject);
                    }}
                    className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200 ${
                      isSelected ? 'bg-blue-50 border-r-4 border-primary text-primary font-semibold' : ''
                    }`}
                  >
                    <subject.icon className={`h-6 w-6 mr-3 ${isSelected ? 'text-primary' : 'text-gray-500'}`} />
                    <span>{subject.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="px-6 mt-8 mb-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Assessment</h3>
          </div>
          <button
            onClick={onStartMockTest}
            className="w-full flex items-center px-6 py-3 text-left text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
          >
            <PencilSquareIcon className="h-6 w-6 mr-3 text-gray-500" />
            <span>Full Mock Test</span>
          </button>
          <button
            onClick={onShowSampleQuestions}
            className="w-full flex items-center px-6 py-3 text-left text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
          >
            <BookOpenIcon className="h-6 w-6 mr-3 text-gray-500" />
            <span>Sample Questions</span>
          </button>

          <div className="px-6 mt-8 mb-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Planning</h3>
          </div>
          <button
            onClick={onShowReadinessTracker}
            className="w-full flex items-center px-6 py-3 text-left text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
          >
            <ChartBarIcon className="h-6 w-6 mr-3 text-gray-500" />
            <span>Content Readiness</span>
          </button>
          <button
            onClick={onShowGapAnalysis}
            className="w-full flex items-center px-6 py-3 text-left text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
          >
            <MagnifyingGlassIcon className="h-6 w-6 mr-3 text-gray-500" />
            <span>Gap Analysis</span>
          </button>
          <button
            onClick={onShowQualityAssessment}
            className="w-full flex items-center px-6 py-3 text-left text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
          >
            <CheckCircleIcon className="h-6 w-6 mr-3 text-gray-500" />
            <span>Quality Assessment</span>
          </button>
          <button
            onClick={onShowExperienceLevelSelection}
            className="w-full flex items-center px-6 py-3 text-left text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
          >
            <UserIcon className="h-6 w-6 mr-3 text-gray-500" />
            <span>Experience Level</span>
          </button>
          <button
            onClick={onShowProgressDashboard}
            className="w-full flex items-center px-6 py-3 text-left text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
          >
            <TrophyIcon className="h-6 w-6 mr-3 text-gray-500" />
            <span>Progress Dashboard</span>
          </button>
          <button
            onClick={onShowRecommendationDashboard}
            className="w-full flex items-center px-6 py-3 text-left text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
          >
            <LightBulbIcon className="h-6 w-6 mr-3 text-gray-500" />
            <span>Study Recommendations</span>
          </button>
          <button
            onClick={onShowLearningInsights}
            className="w-full flex items-center px-6 py-3 text-left text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
          >
            <CpuChipIcon className="h-6 w-6 mr-3 text-gray-500" />
            <span>Learning Insights</span>
          </button>
        </nav>
      </div>

      {contextualTopic && (
        <div className="p-4 border-t border-gray-200 mt-auto">
          <div className="px-2 mb-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Contextual Help</h3>
          </div>
          <button
            onClick={handleLearnMoreClick}
            className="w-full flex items-center text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-700 transition-colors duration-200"
          >
            <BookOpenIcon className="h-5 w-5 mr-3 flex-shrink-0" />
            <span className="text-sm font-semibold">
              Learn About: <br />
              {contextualTopic.topicName}
            </span>
          </button>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
