
import React from 'react';
import { SunIcon, HomeIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
  onHomeClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  return (
    <header className="bg-white shadow-sm p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center sm:text-left mb-2 sm:mb-0">
        Welcome to your CTET Prep Pal, <span className="text-primary">Sumi!</span>
      </h1>
      <div className="flex items-center gap-4 justify-center sm:justify-end">
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
