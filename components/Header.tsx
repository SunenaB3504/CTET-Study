
import React from 'react';
import { SunIcon, HomeIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
  onHomeClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-xl md:text-2xl font-bold text-gray-800">
        Welcome to your CTET Prep Pal, <span className="text-primary">Sumi!</span>
      </h1>
      <div className="flex items-center gap-4">
        <button
          aria-label="Open Sidebar"
          onClick={onHomeClick}
          className="focus:outline-none"
        >
          <HomeIcon className="h-6 w-6 text-primary hover:text-blue-700 transition-colors duration-200" />
        </button>
        <SunIcon className="h-6 w-6 text-gray-600" />
      </div>
    </header>
  );
};

export default Header;
