
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
    <header className="bg-gradient-to-r from-white to-blue-50 shadow-md border-b-2 border-blue-100 p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <div className="flex items-center gap-3 text-center sm:text-left mb-2 sm:mb-0">
        <div className="hidden sm:flex w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg items-center justify-center shadow-md">
          <span className="text-xl">🎓</span>
        </div>
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800">
          Welcome to your CTET Prep Pal, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">Sumi!</span>
        </h1>
      </div>
      <div className="flex items-center gap-3 justify-center sm:justify-end">
        {/* Paper Type Switcher */}
        {onChangePaperType && currentPaperType && (
          <button
            aria-label="Change Paper Type"
            onClick={onChangePaperType}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-blue-700 rounded-lg transition-all duration-200 border-2 border-blue-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            title={`Currently on ${currentPaperType}. Click to change.`}
          >
            <ArrowPathRoundedSquareIcon className="h-5 w-5" />
            <span className="text-sm font-semibold hidden md:inline">{paperTypeShortLabel}</span>
          </button>
        )}
        
        <button
          aria-label="Open Sidebar"
          onClick={onHomeClick}
          className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
        >
          <HomeIcon className="h-7 w-7 sm:h-6 sm:w-6 text-blue-600 hover:text-blue-700 transition-colors duration-200" />
        </button>
        <div className="p-2 rounded-lg bg-amber-50">
          <SunIcon className="h-7 w-7 sm:h-6 sm:w-6 text-amber-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
