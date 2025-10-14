
import React from 'react';
import { SunIcon, HomeIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline';
import { PaperType } from '../types.js';
import { UserPreferencesStorage } from '../utils/experienceLevel.js';

interface HeaderProps {
  onHomeClick?: () => void;
  onChangePaperType?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick, onChangePaperType }) => {
  // Get current paper type
  const userPrefs = UserPreferencesStorage.loadPreferences();
  const currentPaperType = userPrefs?.selectedPaperType;
  
  const paperTypeShortLabel = currentPaperType === PaperType.PAPER_I 
    ? 'Paper I' 
    : currentPaperType === PaperType.PAPER_II 
    ? 'Paper II' 
    : '';

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-md border-b-2 border-blue-800 p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <div className="flex items-center gap-3 text-center sm:text-left mb-2 sm:mb-0">
        <div className="hidden sm:flex w-10 h-10 bg-white bg-opacity-20 rounded-lg items-center justify-center shadow-md backdrop-blur-sm">
          <span className="text-xl">🎓</span>
        </div>
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-md">
          Welcome to your CTET Prep Pal, <span className="text-blue-100 font-extrabold">Sumi!</span>
        </h1>
      </div>
      <div className="flex items-center gap-3 justify-center sm:justify-end">
        {/* Paper Type Switcher */}
        {onChangePaperType && currentPaperType && (
          <button
            aria-label="Change Paper Type"
            onClick={onChangePaperType}
            className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg transition-all duration-200 border-2 border-white border-opacity-30 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 backdrop-blur-sm"
            title={`Currently on ${currentPaperType}. Click to change.`}
          >
            <ArrowPathRoundedSquareIcon className="h-5 w-5" />
            <span className="text-sm font-semibold hidden md:inline">{paperTypeShortLabel}</span>
          </button>
        )}
        
        <button
          aria-label="Open Sidebar"
          onClick={onHomeClick}
          className="p-2 rounded-lg bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 backdrop-blur-sm"
        >
          <HomeIcon className="h-7 w-7 sm:h-6 sm:w-6 text-white hover:text-blue-100 transition-colors duration-200" />
        </button>
        <div className="p-2 rounded-lg bg-amber-400 bg-opacity-90 shadow-sm">
          <SunIcon className="h-7 w-7 sm:h-6 sm:w-6 text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
