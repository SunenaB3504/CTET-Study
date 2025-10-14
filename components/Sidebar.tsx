import React from 'react';
import { Subject, SubjectName, ContextualTopic, PaperType } from '../types.js';
import { SUBJECT_DATA } from '../constants/data.js';
import { PencilSquareIcon, BookOpenIcon, ChartBarIcon, MagnifyingGlassIcon, CheckCircleIcon, UserIcon, TrophyIcon, LightBulbIcon, CpuChipIcon, ArrowPathIcon } from '@heroicons/react/24/solid';
import { UserPreferencesStorage } from '../utils/experienceLevel.js';

interface SidebarProps {
  onSelectSubject: (subject: Subject) => void;
  onStartMockTest: () => void;
  onStartEnhancedMockTest: () => void;
  onShowReadinessTracker: () => void;
  onShowSampleQuestions: () => void;
  onShowGapAnalysis: () => void;
  onShowQualityAssessment: () => void;
  onShowExperienceLevelSelection: () => void;
  onShowProgressDashboard: () => void;
  onShowRecommendationDashboard: () => void;
  onShowLearningInsights: () => void;
  onChangePaperType?: () => void;
  selectedSubjectName?: SubjectName;
  contextualTopic: ContextualTopic | null;
  onSelectTopicById: (subjectName: SubjectName, topicId: string) => void;
  style?: React.CSSProperties;
}

const Sidebar: React.FC<SidebarProps> = ({
  onSelectSubject,
  onStartMockTest,
  onStartEnhancedMockTest,
  onShowReadinessTracker,
  onShowSampleQuestions,
  onShowGapAnalysis,
  onShowQualityAssessment,
  onShowExperienceLevelSelection,
  onShowProgressDashboard,
  onShowRecommendationDashboard,
  onShowLearningInsights,
  onChangePaperType,
  selectedSubjectName,
  contextualTopic,
  onSelectTopicById,
  style,
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

  // Get current paper type
  const userPrefs = UserPreferencesStorage.loadPreferences();
  const currentPaperType = userPrefs?.selectedPaperType;
  const paperTypeLabel = currentPaperType === PaperType.PAPER_I 
    ? 'Paper I (Classes 1-5)' 
    : currentPaperType === PaperType.PAPER_II 
    ? 'Paper II (Classes 6-8)' 
    : 'Not Selected';

  return (
    <aside className="w-64 bg-white shadow-lg border-r border-slate-200 flex-shrink-0 hidden md:flex flex-col" style={style}>
      <div className="flex-1">
        <div className="p-6 bg-gradient-to-br from-blue-600 to-blue-700">
          <h2 className="text-2xl font-bold text-white">CTET Prep Pal</h2>
          {currentPaperType && (
            <div className="mt-2 text-xs text-blue-100 bg-blue-500 bg-opacity-30 px-2 py-1 rounded">
              📚 {paperTypeLabel}
            </div>
          )}
        </div>
        <nav className="mt-6">
          <div className="px-6 mb-4">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Subjects</h3>
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
                    className={`flex items-center px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors duration-200 ${
                      isSelected ? 'bg-blue-50 border-r-4 border-blue-600 text-blue-700 font-semibold' : ''
                    }`}
                  >
                    <subject.icon className={`h-6 w-6 mr-3 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span>{subject.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="px-6 mt-8 mb-4">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Assessment</h3>
          </div>
          <button
            onClick={onStartMockTest}
            className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors duration-200"
          >
            <PencilSquareIcon className="h-6 w-6 mr-3 text-slate-400" />
            <span>Full Mock Test</span>
          </button>
          <button
            onClick={onStartEnhancedMockTest}
            className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors duration-200"
          >
            <TrophyIcon className="h-6 w-6 mr-3 text-slate-400" />
            <span>Enhanced Mock Test</span>
          </button>
          <button
            onClick={onShowSampleQuestions}
            className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors duration-200"
          >
            <BookOpenIcon className="h-6 w-6 mr-3 text-slate-400" />
            <span>Sample Questions</span>
          </button>

          <div className="px-6 mt-8 mb-4">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Planning</h3>
          </div>
          <button
            onClick={onShowReadinessTracker}
            className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors duration-200"
          >
            <ChartBarIcon className="h-6 w-6 mr-3 text-slate-400" />
            <span>Content Readiness</span>
          </button>
          <button
            onClick={onShowGapAnalysis}
            className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors duration-200"
          >
            <MagnifyingGlassIcon className="h-6 w-6 mr-3 text-slate-400" />
            <span>Gap Analysis</span>
          </button>
          <button
            onClick={onShowQualityAssessment}
            className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors duration-200"
          >
            <CheckCircleIcon className="h-6 w-6 mr-3 text-slate-400" />
            <span>Quality Assessment</span>
          </button>
          <button
            onClick={onShowExperienceLevelSelection}
            className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors duration-200"
          >
            <UserIcon className="h-6 w-6 mr-3 text-slate-400" />
            <span>Experience Level</span>
          </button>
          <button
            onClick={onShowProgressDashboard}
            className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors duration-200"
          >
            <TrophyIcon className="h-6 w-6 mr-3 text-slate-400" />
            <span>Progress Dashboard</span>
          </button>
          <button
            onClick={onShowRecommendationDashboard}
            className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors duration-200"
          >
            <LightBulbIcon className="h-6 w-6 mr-3 text-slate-400" />
            <span>Study Recommendations</span>
          </button>
          <button
            onClick={onShowLearningInsights}
            className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors duration-200"
          >
            <CpuChipIcon className="h-6 w-6 mr-3 text-slate-400" />
            <span>Learning Insights</span>
          </button>

          {onChangePaperType && (
            <>
              <div className="px-6 mt-8 mb-4">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Settings</h3>
              </div>
              <button
                onClick={onChangePaperType}
                className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors duration-200"
              >
                <ArrowPathIcon className="h-6 w-6 mr-3 text-slate-400" />
                <span>Change Paper Type</span>
              </button>
            </>
          )}
        </nav>
      </div>

      {contextualTopic && (
        <div className="p-4 border-t border-slate-200 mt-auto bg-slate-50">
          <div className="px-2 mb-4">
            <h3 className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Contextual Help</h3>
          </div>
          <button
            onClick={handleLearnMoreClick}
            className="w-full flex items-center text-left p-3 bg-blue-100 hover:bg-blue-200 rounded-lg text-blue-700 transition-colors duration-200 shadow-sm"
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
