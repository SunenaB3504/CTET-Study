import React, { useEffect } from 'react';
import { QuestionPaper, ContextualTopic, PaperType } from '../types.js';
import { ArrowLeftIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { UserPreferencesStorage } from '../utils/experienceLevel.js';

interface MockTestSelectionProps {
  papers: QuestionPaper[];
  onSelectPaper: (paper: QuestionPaper) => void;
  onBack: () => void;
  setContextualTopic: (topic: ContextualTopic | null) => void;
}

const MockTestSelection: React.FC<MockTestSelectionProps> = ({ papers, onSelectPaper, onBack, setContextualTopic }) => {
  useEffect(() => {
    setContextualTopic(null);
  }, [setContextualTopic]);

  // Get user's selected paper type from preferences
  const userPrefs = UserPreferencesStorage.loadPreferences();
  const userPaperType = userPrefs?.selectedPaperType;

  // Filter papers based on user's selected paper type
  const filteredPapers = userPaperType 
    ? papers.filter(p => p.paperType === userPaperType)
    : papers;

  const paperTypeLabel = userPaperType === PaperType.PAPER_I 
    ? 'Paper I (Classes 1-5)' 
    : userPaperType === PaperType.PAPER_II 
    ? 'Paper II (Classes 6-8)'
    : 'All Papers';

  return (
    <div className="animate-fade-in">
      <button onClick={onBack} className="flex items-center text-primary hover:text-primary-dark mb-6 font-semibold">
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back to Dashboard
      </button>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Select a Mock Test</h2>
            <p className="text-gray-600 mt-1">
              Showing {paperTypeLabel} tests - {filteredPapers.length} available
            </p>
          </div>
          {userPaperType && (
            <div className="text-sm text-gray-500 bg-blue-50 px-4 py-2 rounded-lg">
              <strong>Your Selection:</strong> {paperTypeLabel}
            </div>
          )}
        </div>
      </div>

      {/* Display papers */}
      {filteredPapers.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredPapers.map(paper => (
            <div
              key={paper.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between border-l-4 border-primary"
            >
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-slate-800">{paper.name}</h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-semibold">
                    {paper.questions.length} Qs
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-2">{paper.description}</p>
              </div>
              <button
                onClick={() => onSelectPaper(paper)}
                className="mt-6 w-full flex items-center justify-center bg-white text-slate-700 font-bold py-3 px-4 rounded-lg border-2 border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <PencilSquareIcon className="h-5 w-5 mr-2" />
                Start Test
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
          <AcademicCapIcon className="h-16 w-16 mx-auto text-yellow-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            No {userPaperType} Tests Available
          </h3>
          <p className="text-gray-600">
            {userPaperType === PaperType.PAPER_II 
              ? 'Paper II tests (for Classes 6-8) will be added soon.' 
              : 'No tests available for your selected paper type.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default MockTestSelection;

