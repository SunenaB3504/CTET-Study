
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
    <header className="bg-white shadow-sm p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center sm:text-left mb-2 sm:mb-0">
        Welcome to your CTET Prep Pal, <span className="text-primary">Sumi!</span>
      </h1>
      <div className="flex items-center gap-4 justify-center sm:justify-end">
        {/* Paper Type Switcher */}
        {onChangePaperType && currentPaperType && (
          <button
            aria-label="Change Paper Type"
            onClick={onChangePaperType}
            className="flex items-center gap-2 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-primary rounded-lg transition-colors duration-200 border border-blue-200"
            title={`Currently on ${currentPaperType}. Click to change.`}
          >
            <ArrowPathRoundedSquareIcon className="h-5 w-5" />
            <span className="text-sm font-semibold hidden md:inline">{paperTypeShortLabel}</span>
          </button>
        )}
        
        <button
          aria-label="Open Sidebar"
          onClick={onHomeClick}
          className="focus:outline-none"
        >
          <HomeIcon className="h-7 w-7 sm:h-6 sm:w-6 text-primary hover:text-blue-700 transition-colors duration-200" />
        </button>
        <SunIcon className="h-7 w-7 sm:h-6 sm:w-6 text-gray-600" />
      </div>
    </header>
  );
};

export default Header;
