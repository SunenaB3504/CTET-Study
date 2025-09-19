import React, { useState } from 'react';
import { QuestionPaper, MCQ, SubjectName, EnhancedExplanation } from '../types';
import { QUESTION_PAPERS_DATA } from '../constants/questionPapers';

interface SampleQuestionsProps {
  onBack: () => void;
}

const SampleQuestions: React.FC<SampleQuestionsProps> = ({ onBack }) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectName | 'ALL'>('ALL');
  const [selectedPaper, setSelectedPaper] = useState<string>(QUESTION_PAPERS_DATA[0].id);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 10;

  // Helper function to render explanation
  const renderExplanation = (explanation: string | EnhancedExplanation): React.ReactNode => {
    if (typeof explanation === 'string') {
      return explanation;
    }

    // Handle EnhancedExplanation object
    return (
      <div className="space-y-3">
        <p className="font-medium text-gray-800">{explanation.basic}</p>
        {explanation.theory && (
          <div className="bg-blue-50 p-3 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-1">Theory:</h5>
            <p className="text-blue-700 text-sm">{explanation.theory}</p>
          </div>
        )}
        {explanation.realLifeExample && (
          <div className="bg-green-50 p-3 rounded-lg">
            <h5 className="font-semibold text-green-800 mb-1">Real-life Example:</h5>
            <p className="text-green-700 text-sm">{explanation.realLifeExample}</p>
          </div>
        )}
        {explanation.teachingTip && (
          <div className="bg-purple-50 p-3 rounded-lg">
            <h5 className="font-semibold text-purple-800 mb-1">Teaching Tip:</h5>
            <p className="text-purple-700 text-sm">{explanation.teachingTip}</p>
          </div>
        )}
      </div>
    );
  };

  // Get the selected question paper
  const currentPaper = QUESTION_PAPERS_DATA.find(paper => paper.id === selectedPaper) || QUESTION_PAPERS_DATA[0];

  // Filter questions by subject
  const filteredQuestions = selectedSubject === 'ALL'
    ? currentPaper.questions
    : currentPaper.questions.filter(q => q.subjectName === selectedSubject);

  // Paginate questions
  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);
  const startIndex = (currentPage - 1) * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = filteredQuestions.slice(startIndex, endIndex);

  const subjects = [
    { value: 'ALL' as const, label: 'All Subjects' },
    { value: SubjectName.CDP, label: 'Child Development & Pedagogy' },
    { value: SubjectName.MATH, label: 'Mathematics' },
    { value: SubjectName.EVS, label: 'Environmental Studies' },
    { value: SubjectName.LANG1, label: 'Language I (English)' },
    { value: SubjectName.LANG2, label: 'Language II (Hindi)' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sample Questions</h1>
        <p className="text-gray-600 mb-6">
          Review questions with answers visible for manual verification against the official key. Currently viewing: <strong>{currentPaper.name}</strong>
        </p>

        {/* Paper Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Question Paper:</label>
          <select
            value={selectedPaper}
            onChange={(e) => {
              setSelectedPaper(e.target.value);
              setCurrentPage(1);
              setSelectedSubject('ALL'); // Reset subject filter when changing paper
            }}
            title="Select question paper"
            className="block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            {QUESTION_PAPERS_DATA.map(paper => (
              <option key={paper.id} value={paper.id}>
                {paper.name}
              </option>
            ))}
          </select>
        </div>

        {/* Subject Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Subject:</label>
          <select
            value={selectedSubject}
            onChange={(e) => {
              setSelectedSubject(e.target.value as SubjectName | 'ALL');
              setCurrentPage(1);
            }}
            title="Filter questions by subject"
            className="block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            {subjects.map(subject => (
              <option key={subject.value} value={subject.value}>
                {subject.label}
              </option>
            ))}
          </select>
        </div>

        {/* Pagination Info */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredQuestions.length)} of {filteredQuestions.length} questions
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>
            <span className="px-3 py-1 text-sm border border-gray-300 rounded-md bg-blue-50">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {currentQuestions.map((question, index) => (
          <div key={startIndex + index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Question {startIndex + index + 1}
              </h3>
              <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                {question.subjectName}
              </span>
            </div>

            <p className="text-gray-800 mb-4 leading-relaxed">{question.question}</p>

            <div className="space-y-2 mb-4">
              {question.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className={`p-3 rounded-md border ${
                    optionIndex === question.correctAnswerIndex
                      ? 'bg-green-50 border-green-200 text-green-800'
                      : 'bg-gray-50 border-gray-200 text-gray-700'
                  }`}
                >
                  <span className="font-medium mr-2">
                    {String.fromCharCode(65 + optionIndex)}.
                  </span>
                  {option}
                  {optionIndex === question.correctAnswerIndex && (
                    <span className="ml-2 text-green-600 font-semibold">✓ Correct Answer</span>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <h4 className="text-sm font-semibold text-blue-800 mb-2">Explanation:</h4>
              <div className="text-blue-700 text-sm leading-relaxed">{renderExplanation(question.explanation)}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = Math.max(1, currentPage - 2) + i;
              if (pageNum > totalPages) return null;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-4 py-2 text-sm border rounded-md ${
                    pageNum === currentPage
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SampleQuestions;