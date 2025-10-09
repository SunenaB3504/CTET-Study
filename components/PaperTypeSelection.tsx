import React from 'react';
import { PaperType } from '../types.js';
import { BookOpenIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface PaperTypeSelectionProps {
  selectedPaperType: PaperType | null;
  onSelectPaperType: (paperType: PaperType) => void;
}

const PaperTypeSelection: React.FC<PaperTypeSelectionProps> = ({
  selectedPaperType,
  onSelectPaperType,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to CTET Preparation
          </h1>
          <p className="text-lg text-gray-600">
            Choose which paper you're preparing for to get started
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Paper I Card */}
          <button
            onClick={() => onSelectPaperType(PaperType.PAPER_I)}
            className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
              selectedPaperType === PaperType.PAPER_I
                ? 'ring-4 ring-primary ring-offset-4'
                : ''
            }`}
          >
            <div className="flex justify-between items-start mb-6">
              <BookOpenIcon className="h-16 w-16 text-primary" />
              {selectedPaperType === PaperType.PAPER_I && (
                <CheckCircleIcon className="h-8 w-8 text-green-500" />
              )}
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-3">Paper I</h2>
            <p className="text-lg text-gray-600 mb-6">
              For Classes 1-5 Teachers
            </p>

            <div className="text-left space-y-3 mb-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <strong>Child Development & Pedagogy</strong> - 30 questions
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <strong>Mathematics</strong> - 30 questions
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <strong>Environmental Studies</strong> - 30 questions
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <strong>Language I</strong> - 30 questions
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <strong>Language II</strong> - 30 questions
                </p>
              </div>
            </div>

            <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-4">
              <strong>Total:</strong> 150 questions | 150 marks | 2.5 hours
            </div>

            <div className="mt-6">
              <span
                className={`inline-block px-4 py-2 rounded-full font-semibold ${
                  selectedPaperType === PaperType.PAPER_I
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {selectedPaperType === PaperType.PAPER_I ? 'Selected' : 'Select Paper I'}
              </span>
            </div>
          </button>

          {/* Paper II Card */}
          <button
            onClick={() => onSelectPaperType(PaperType.PAPER_II)}
            className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
              selectedPaperType === PaperType.PAPER_II
                ? 'ring-4 ring-primary ring-offset-4'
                : ''
            }`}
          >
            <div className="flex justify-between items-start mb-6">
              <AcademicCapIcon className="h-16 w-16 text-primary" />
              {selectedPaperType === PaperType.PAPER_II && (
                <CheckCircleIcon className="h-8 w-8 text-green-500" />
              )}
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-3">Paper II</h2>
            <p className="text-lg text-gray-600 mb-6">
              For Classes 6-8 Teachers
            </p>

            <div className="text-left space-y-3 mb-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <strong>Child Development & Pedagogy</strong> - 30 questions
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <strong>Language I</strong> - 30 questions
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <strong>Language II</strong> - 30 questions
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <strong>Mathematics & Science</strong> - 60 questions
                  <br />
                  <span className="text-sm text-gray-500 ml-6">OR</span>
                  <br />
                  <strong className="ml-6">Social Studies</strong> - 60 questions
                </p>
              </div>
            </div>

            <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-4">
              <strong>Total:</strong> 150 questions | 150 marks | 2.5 hours
            </div>

            <div className="mt-6">
              <span
                className={`inline-block px-4 py-2 rounded-full font-semibold ${
                  selectedPaperType === PaperType.PAPER_II
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {selectedPaperType === PaperType.PAPER_II ? 'Selected' : 'Select Paper II'}
              </span>
            </div>
          </button>
        </div>

        {selectedPaperType && (
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">
              You can change your paper selection anytime from the settings
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaperTypeSelection;
