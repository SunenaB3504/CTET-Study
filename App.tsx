import React, { useState } from 'react';
import { Subject, Topic, View, QuestionPaper, SubjectName, ContextualTopic, CoverageData, SyllabusSubject, SyllabusTopic, SyllabusSubTopic } from './types.js';
import Sidebar from './components/Sidebar.js';
import Header from './components/Header.js';
import Dashboard from './components/Dashboard.js';
import StudyModule from './components/StudyModule.js';
import MockTest from './components/MockTest.js';
import MockTestSelection from './components/MockTestSelection.js';
import EnhancedMockTestFlow from './components/EnhancedMockTestFlow.js';
import ReadinessTracker from './components/ReadinessTracker.js';
import SampleQuestions from './components/SampleQuestions.js';
import GapAnalysisDashboard from './components/GapAnalysisDashboard.js';
import QualityAssessmentDashboard from './components/QualityAssessmentDashboard.js';
import ExperienceLevelSelection from './components/ExperienceLevelSelection.js';
import ProgressDashboard from './components/ProgressDashboard.js';
import SessionAnalytics from './components/SessionAnalytics.js';
import RecommendationDashboard from './components/RecommendationDashboard.js';
import { LearningInsightsDashboard } from './components/LearningInsightsDashboard.js';
import { SUBJECT_DATA } from './constants/data.js';
import { QUESTION_PAPERS_DATA } from './constants/questionPapers.js';
import { SYLLABUS_DATA } from './constants/syllabus.js';

const generateCoverageData = (subjects: Subject[], papers: QuestionPaper[]): CoverageData[] => {
  const allQuestions = [
    ...papers.flatMap(p => p.questions),
    ...subjects.flatMap(s => s.topics.flatMap(t => t.practiceQuestions)),
  ];
  const coverage: CoverageData[] = [];

  SYLLABUS_DATA.forEach((syllabusSubject: SyllabusSubject) => {
    syllabusSubject.topics.forEach((syllabusTopic: SyllabusTopic) => {
      syllabusTopic.subTopics.forEach((syllabusSubTopic: SyllabusSubTopic) => {
        const questionCount = allQuestions.filter(q => q.subTopicId === syllabusSubTopic.id).length;

        const contentTopic = subjects
          .find(s => s.name === syllabusSubject.name)
          ?.topics.find(t => t.id === syllabusTopic.id);
        let contentAvailable: 'Detailed' | 'Basic' | 'Not Available' = 'Not Available';
        if (contentTopic) {
          contentAvailable = contentTopic.notes.length > 500 ? 'Detailed' : 'Basic';
        }

        coverage.push({
          subjectName: syllabusSubject.name,
          topicName: syllabusTopic.name,
          subTopicName: syllabusSubTopic.name,
          questionCount,
          contentAvailable,
        });
      });
    });
  });

  return coverage;
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(SUBJECT_DATA[0]);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedPaper, setSelectedPaper] = useState<QuestionPaper | null>(null);
  const [currentContextualTopic, setCurrentContextualTopic] = useState<ContextualTopic | null>(null);

  const handleSelectSubject = (subject: Subject) => {
    setSelectedSubject(subject);
    setSelectedTopic(null);
    setCurrentView(View.DASHBOARD);
    setCurrentContextualTopic(null);
  };

  const handleSelectTopic = (topic: Topic) => {
    setSelectedTopic(topic);
    setCurrentView(View.STUDY_MODULE);
  };

  const handleStartMockTest = () => {
    setCurrentView(View.MOCK_TEST_SELECTION);
    setSelectedSubject(null);
    setSelectedTopic(null);
    setCurrentContextualTopic(null);
  };

  const handleStartEnhancedMockTest = () => {
    setCurrentView(View.ENHANCED_MOCK_TEST);
    setSelectedSubject(null);
    setSelectedTopic(null);
    setCurrentContextualTopic(null);
  };

  const handleBackToDashboard = () => {
    setCurrentView(View.DASHBOARD);
    setSelectedTopic(null);
    setSelectedPaper(null);
    if (!selectedSubject) {
      setSelectedSubject(SUBJECT_DATA[0]);
    }
    setCurrentContextualTopic(null);
  };

  const handleSelectPaper = (paper: QuestionPaper) => {
    setSelectedPaper(paper);
    setCurrentView(View.MOCK_TEST);
  };

  const handleSelectTopicById = (subjectName: SubjectName, topicId: string) => {
    const subject = SUBJECT_DATA.find(s => s.name === subjectName);
    if (subject) {
      const topic = subject.topics.find(t => t.id === topicId);
      if (topic) {
        setSelectedSubject(subject);
        setSelectedTopic(topic);
        setCurrentView(View.STUDY_MODULE);
      }
    }
  };

  const handleShowReadinessTracker = () => {
    setCurrentView(View.READINESS_TRACKER);
    setSelectedSubject(null);
    setSelectedTopic(null);
    setCurrentContextualTopic(null);
  };

  const handleShowSampleQuestions = () => {
    setCurrentView(View.SAMPLE_QUESTIONS);
    setSelectedSubject(null);
    setSelectedTopic(null);
    setCurrentContextualTopic(null);
  };

  const handleShowGapAnalysis = () => {
    setCurrentView(View.GAP_ANALYSIS_DASHBOARD);
    setSelectedSubject(null);
    setSelectedTopic(null);
    setCurrentContextualTopic(null);
  };

  const handleShowQualityAssessment = () => {
    setCurrentView(View.QUALITY_ASSESSMENT_DASHBOARD);
    setSelectedSubject(null);
    setSelectedTopic(null);
    setCurrentContextualTopic(null);
  };

  const handleShowExperienceLevelSelection = () => {
    setCurrentView(View.EXPERIENCE_LEVEL_SELECTION);
    setSelectedSubject(null);
    setSelectedTopic(null);
    setCurrentContextualTopic(null);
  };

  const handleShowProgressDashboard = () => {
    setCurrentView(View.PROGRESS_DASHBOARD);
    setSelectedSubject(null);
    setSelectedTopic(null);
    setCurrentContextualTopic(null);
  };

  const handleShowRecommendationDashboard = () => {
    setCurrentView(View.RECOMMENDATION_DASHBOARD);
    setSelectedSubject(null);
    setSelectedTopic(null);
    setCurrentContextualTopic(null);
  };

  const handleShowLearningInsights = () => {
    setCurrentView(View.LEARNING_INSIGHTS);
    setSelectedSubject(null);
    setSelectedTopic(null);
    setCurrentContextualTopic(null);
  };

  const renderContent = () => {
    switch (currentView) {
      case View.DASHBOARD:
        return selectedSubject ? (
          <Dashboard
            subject={selectedSubject}
            onSelectTopic={handleSelectTopic}
            setContextualTopic={setCurrentContextualTopic}
          />
        ) : (
          <div className="text-center p-8">Please select a subject to begin.</div>
        );
      case View.STUDY_MODULE:
        // FIX: Changed `topic={topic}` to `topic={selectedTopic}` as `topic` was not defined.
        return selectedTopic && selectedSubject ? (
          <StudyModule
            subject={selectedSubject}
            topic={selectedTopic}
            onBack={handleBackToDashboard}
            onSelectTopicById={handleSelectTopicById}
            setContextualTopic={setCurrentContextualTopic}
          />
        ) : (
          <div className="text-center p-8">Error: Topic not found.</div>
        );
      case View.MOCK_TEST_SELECTION:
        return (
          <MockTestSelection
            papers={QUESTION_PAPERS_DATA}
            onSelectPaper={handleSelectPaper}
            onBack={handleBackToDashboard}
            setContextualTopic={setCurrentContextualTopic}
          />
        );
      case View.MOCK_TEST:
        return selectedPaper ? (
          <MockTest
            paper={selectedPaper}
            onBackToDashboard={handleBackToDashboard}
            onSelectTopicById={handleSelectTopicById}
            setContextualTopic={setCurrentContextualTopic}
          />
        ) : (
          <div className="text-center p-8">Error: No test paper selected.</div>
        );
      case View.ENHANCED_MOCK_TEST:
        return (
          <EnhancedMockTestFlow
            onBackToDashboard={handleBackToDashboard}
            onSelectTopicById={handleSelectTopicById}
            setContextualTopic={setCurrentContextualTopic}
          />
        );
      case View.READINESS_TRACKER:
        return (
          <ReadinessTracker
            data={generateCoverageData(SUBJECT_DATA, QUESTION_PAPERS_DATA)}
            onBack={handleBackToDashboard}
          />
        );
      case View.SAMPLE_QUESTIONS:
        return (
          <SampleQuestions
            onBack={handleBackToDashboard}
          />
        );
      case View.GAP_ANALYSIS_DASHBOARD:
        return (
          <GapAnalysisDashboard
            existingQuestions={[
              ...QUESTION_PAPERS_DATA.flatMap((p: QuestionPaper) => p.questions),
              ...SUBJECT_DATA.flatMap((s: Subject) => s.topics.flatMap((t: Topic) => t.practiceQuestions)),
            ]}
            onGapSelected={(gap) => {
              // Handle gap selection - could navigate to content creation
              console.log('Gap selected:', gap);
            }}
          />
        );
      case View.QUALITY_ASSESSMENT_DASHBOARD:
        return (
          <QualityAssessmentDashboard
            questions={[
              ...QUESTION_PAPERS_DATA.flatMap((p: QuestionPaper) => p.questions),
              ...SUBJECT_DATA.flatMap((s: Subject) => s.topics.flatMap((t: Topic) => t.practiceQuestions)),
            ]}
            onQualityIssueClick={(issue) => {
              // Handle quality issue selection
              console.log('Quality issue selected:', issue);
            }}
          />
        );
      case View.EXPERIENCE_LEVEL_SELECTION:
        return (
          <ExperienceLevelSelection
            onLevelSelected={(level) => {
              console.log('Experience level selected:', level);
              // Could navigate to dashboard or show personalized content
            }}
            onComplete={() => {
              // Navigate back to dashboard after setup
              setCurrentView(View.DASHBOARD);
              if (!selectedSubject) {
                setSelectedSubject(SUBJECT_DATA[0]);
              }
            }}
          />
        );
      case View.PROGRESS_DASHBOARD:
        return (
          <ProgressDashboard
            experienceLevel={selectedSubject ? 'intermediate' : 'beginner'} // Default fallback
            onClose={() => setCurrentView(View.DASHBOARD)}
          />
        );
      case View.RECOMMENDATION_DASHBOARD:
        return (
          <RecommendationDashboard
            experienceLevel={selectedSubject ? 'intermediate' : 'beginner'} // Default fallback
            onClose={() => setCurrentView(View.DASHBOARD)}
            onSelectTopic={(subjectName, topicId) => {
              // Find the subject and topic, then navigate to study module
              const subject = SUBJECT_DATA.find(s => s.name === subjectName);
              if (subject) {
                const topic = subject.topics.find(t => t.id === topicId);
                if (topic) {
                  setSelectedSubject(subject);
                  setSelectedTopic(topic);
                  setCurrentView(View.STUDY_MODULE);
                }
              }
            }}
          />
        );
      case View.LEARNING_INSIGHTS:
        return (
          <LearningInsightsDashboard
            onNavigateToTopic={(topicId) => {
              // Find the subject and topic, then navigate to study module
              for (const subject of SUBJECT_DATA) {
                const topic = subject.topics.find(t => t.id === topicId);
                if (topic) {
                  setSelectedSubject(subject);
                  setSelectedTopic(topic);
                  setCurrentView(View.STUDY_MODULE);
                  break;
                }
              }
            }}
          />
        );
      default:
        return selectedSubject ? (
          <Dashboard
            subject={selectedSubject}
            onSelectTopic={handleSelectTopic}
            setContextualTopic={setCurrentContextualTopic}
          />
        ) : (
          <div className="text-center p-8">Welcome! Please select a subject.</div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Sidebar
        onSelectSubject={handleSelectSubject}
        onStartMockTest={handleStartMockTest}
        onStartEnhancedMockTest={handleStartEnhancedMockTest}
        onShowReadinessTracker={handleShowReadinessTracker}
        onShowSampleQuestions={handleShowSampleQuestions}
        onShowGapAnalysis={handleShowGapAnalysis}
        onShowQualityAssessment={handleShowQualityAssessment}
        onShowExperienceLevelSelection={handleShowExperienceLevelSelection}
        onShowProgressDashboard={handleShowProgressDashboard}
        onShowRecommendationDashboard={handleShowRecommendationDashboard}
        onShowLearningInsights={handleShowLearningInsights}
        selectedSubjectName={selectedSubject?.name}
        contextualTopic={currentContextualTopic}
        onSelectTopicById={handleSelectTopicById}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-8">{renderContent()}</main>
      </div>
    </div>
  );
};

export default App;
