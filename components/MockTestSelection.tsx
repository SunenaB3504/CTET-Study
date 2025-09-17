import React, { useEffect } from 'react';
import { QuestionPaper, ContextualTopic } from '../types';
import { ArrowLeftIcon, PencilSquareIcon } from '@heroicons/react/24/solid';

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

  return (
    <div className="animate-fade-in">
      <button onClick={onBack} className="flex items-center text-primary hover:text-primary-dark mb-6 font-semibold">
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back to Dashboard
      </button>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Select a Mock Test</h2>
        <p className="text-gray-600 mt-1">Choose a paper to start your practice session.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {papers.map(paper => (
          <div
            key={paper.id}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-700">{paper.name}</h3>
              <p className="text-sm text-gray-500 mt-2">{paper.description}</p>
            </div>
            <button
              onClick={() => onSelectPaper(paper)}
              className="mt-6 w-full flex items-center justify-center bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-200"
            >
              <PencilSquareIcon className="h-5 w-5 mr-2" />
              Start Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockTestSelection;
