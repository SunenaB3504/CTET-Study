import React from 'react';
import { Subject, SubjectName, ContextualTopic, PaperType } from '../types.js';
import { SUBJECT_DATA } from '../constants/data.js';
import { PencilSquareIcon, BookOpenIcon, ChartBarIcon, MagnifyingGlassIcon, CheckCircleIcon, UserIcon, TrophyIcon, LightBulbIcon, CpuChipIcon, ArrowPathIcon, CalculatorIcon, GlobeAltIcon, LanguageIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid';
import { UserPreferencesStorage } from '../utils/experienceLevel.js';

interface SubjectDisplay {
  name: SubjectName;
  icon: any;
  displayName: string;
  questionRange: string;
  track: string;
}

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
  onShowSyllabus: () => void;
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
  onShowSyllabus,
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

  // Get subjects based on paper type
  const getSubjectDisplay = (): SubjectDisplay[] => {
    if (currentPaperType === PaperType.PAPER_II) {
      // For Paper II, show the track structure with instructions
      return [
        { 
          name: SubjectName.CDP, 
          icon: BookOpenIcon, 
          displayName: 'Part I: Child Development & Pedagogy',
          questionRange: 'Q1-30',
          track: 'Common Track (Required)'
        },
        { 
          name: SubjectName.MATH, 
          icon: CalculatorIcon, 
          displayName: 'Part II: Science & Mathematics (Track A)',
          questionRange: 'Q31-90 (Math: Q31-60, Science: Q61-90)',
          track: 'Choose Track A OR Track B'
        },
        { 
          name: SubjectName.SOCIAL_STUDIES, 
          icon: GlobeAltIcon, 
          displayName: 'Part III: Social Studies (Track B)',
          questionRange: 'Q31-90 (Alternative to Track A)',
          track: 'Choose Track A OR Track B'
        },
        { 
          name: SubjectName.LANG1, 
          icon: LanguageIcon, 
          displayName: 'Part IV: Language I (English)',
          questionRange: 'Q91-120',
          track: 'Common Track (Required)'
        },
        { 
          name: SubjectName.LANG2, 
          icon: ChatBubbleBottomCenterTextIcon, 
          displayName: 'Part V: Language II (Hindi)',
          questionRange: 'Q121-150',
          track: 'Common Track (Required)'
        }
      ];
    }
    // For Paper I, return the regular SUBJECT_DATA structure
    return SUBJECT_DATA.map(subject => ({
      name: subject.name,
      icon: subject.icon,
      displayName: subject.name,
      questionRange: '',
      track: ''
    }));
  };

  const subjectDisplay = getSubjectDisplay();
  const paperTypeLabel = currentPaperType === PaperType.PAPER_I 
    ? 'Paper I (Classes 1-5)' 
    : currentPaperType === PaperType.PAPER_II 
    ? 'Paper II (Classes 6-8) - Track A Implementation' 
    : 'Not Selected';

  return (
    <aside className="w-64 bg-white shadow-lg border-r border-slate-200 flex-shrink-0 hidden md:flex flex-col" style={style}>
      <div className="flex-1">
        <div className="p-6 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 shadow-inner">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 bg-white bg-opacity-25 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-2xl">🎓</span>
            </div>
            <h2 className="text-xl font-bold text-slate-800 drop-shadow-md">CTET Prep Pal</h2>
          </div>
          {currentPaperType && (
            <div className="mt-3 text-sm text-slate-700 bg-white bg-opacity-25 px-3 py-2 rounded-lg backdrop-blur-sm border border-white border-opacity-40 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-base">📚</span>
                <span className="font-semibold drop-shadow">{paperTypeLabel}</span>
              </div>
              {currentPaperType === PaperType.PAPER_II && (
                <div className="mt-2 text-xs text-slate-600 bg-white bg-opacity-30 px-2 py-1 rounded">
                  <strong>Structure:</strong> Common Tracks (Parts I, IV, V) + Choose Track A OR Track B
                </div>
              )}
            </div>
          )}
        </div>
        <nav className="mt-6">
          <div className="px-6 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-blue-500 rounded"></div>
              <h3 className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Subjects</h3>
            </div>
          </div>
          <ul>
            {subjectDisplay.map((subject: SubjectDisplay) => {
              const isSelected = subject.name === selectedSubjectName;
              const actualSubject = SUBJECT_DATA.find(s => s.name === subject.name);
              return (
                <li key={subject.name}>
                  <a
                    href="#"
                    onClick={e => {
                      e.preventDefault();
                      if (actualSubject) {
                        onSelectSubject(actualSubject);
                      }
                    }}
                    className={`flex flex-col px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors duration-200 ${
                      isSelected ? 'bg-blue-50 border-r-4 border-blue-600 text-blue-700 font-semibold' : ''
                    }`}
                  >
                    <div className="flex items-center w-full">
                      <subject.icon className={`h-6 w-6 mr-3 flex-shrink-0 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{subject.displayName}</div>
                        {subject.questionRange && (
                          <div className="text-xs text-slate-500 mt-1">
                            {subject.questionRange} • {subject.track}
                          </div>
                        )}
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="px-6 mt-8 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-emerald-500 rounded"></div>
              <h3 className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Assessment</h3>
            </div>
          </div>
          <button
            onClick={onStartMockTest}
            className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200 group"
          >
            <PencilSquareIcon className="h-6 w-6 mr-3 text-emerald-500 group-hover:text-emerald-600" />
            <span>Full Mock Test</span>
          </button>
          <button
            onClick={onStartEnhancedMockTest}
            className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200 group"
          >
            <TrophyIcon className="h-6 w-6 mr-3 text-emerald-500 group-hover:text-emerald-600" />
            <span>Enhanced Mock Test</span>
          </button>
          <button
            onClick={onShowSampleQuestions}
            className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200 group"
          >
            <BookOpenIcon className="h-6 w-6 mr-3 text-emerald-500 group-hover:text-emerald-600" />
            <span>Sample Questions</span>
          </button>
          <button
            onClick={onShowSyllabus}
            className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200 group"
          >
            <BookOpenIcon className="h-6 w-6 mr-3 text-emerald-500 group-hover:text-emerald-600" />
            <span>📋 Official Syllabus</span>
          </button>

          <div className="px-6 mt-8 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-amber-500 rounded"></div>
              <h3 className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Planning</h3>
            </div>
          </div>
          <button
            onClick={onShowReadinessTracker}
            className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-all duration-200 group"
          >
            <ChartBarIcon className="h-6 w-6 mr-3 text-amber-500 group-hover:text-amber-600" />
            <span>Content Readiness</span>
          </button>
          <button
            onClick={onShowGapAnalysis}
            className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-all duration-200 group"
          >
            <MagnifyingGlassIcon className="h-6 w-6 mr-3 text-amber-500 group-hover:text-amber-600" />
            <span>Gap Analysis</span>
          </button>
          <button
            onClick={onShowQualityAssessment}
            className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-all duration-200 group"
          >
            <CheckCircleIcon className="h-6 w-6 mr-3 text-amber-500 group-hover:text-amber-600" />
            <span>Quality Assessment</span>
          </button>
          <button
            onClick={onShowExperienceLevelSelection}
            className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200 group"
          >
            <UserIcon className="h-6 w-6 mr-3 text-indigo-500 group-hover:text-indigo-600" />
            <span>Experience Level</span>
          </button>
          <button
            onClick={onShowProgressDashboard}
            className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-purple-50 hover:text-purple-700 transition-all duration-200 group"
          >
            <TrophyIcon className="h-6 w-6 mr-3 text-purple-500 group-hover:text-purple-600" />
            <span>Progress Dashboard</span>
          </button>
          <button
            onClick={onShowRecommendationDashboard}
            className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-yellow-50 hover:text-yellow-700 transition-all duration-200 group"
          >
            <LightBulbIcon className="h-6 w-6 mr-3 text-yellow-500 group-hover:text-yellow-600" />
            <span>Study Recommendations</span>
          </button>
          <button
            onClick={onShowLearningInsights}
            className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-cyan-50 hover:text-cyan-700 transition-all duration-200 group"
          >
            <CpuChipIcon className="h-6 w-6 mr-3 text-cyan-500 group-hover:text-cyan-600" />
            <span>Learning Insights</span>
          </button>

          {onChangePaperType && (
            <>
              <div className="px-6 mt-8 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-purple-500 rounded"></div>
                  <h3 className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Settings</h3>
                </div>
              </div>
              <button
                onClick={onChangePaperType}
                className="w-full flex items-center px-6 py-3 text-left text-slate-700 hover:bg-purple-50 hover:text-purple-700 transition-all duration-200 group"
              >
                <ArrowPathIcon className="h-6 w-6 mr-3 text-purple-500 group-hover:text-purple-600" />
                <span>Change Paper Type</span>
              </button>
            </>
          )}
        </nav>
      </div>

      {contextualTopic && (
        <div className="p-4 border-t-2 border-blue-200 mt-auto bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="px-2 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-blue-500 rounded"></div>
              <h3 className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Contextual Help</h3>
            </div>
          </div>
          <button
            onClick={handleLearnMoreClick}
            className="w-full flex items-center text-left p-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg text-slate-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
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
