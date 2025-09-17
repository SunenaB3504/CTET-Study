import React from 'react';
import { SunIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-xl md:text-2xl font-bold text-gray-800">
        Welcome to your CTET Prep Pal, <span className="text-primary">Sumi!</span>
      </h1>
      <div>
        <SunIcon className="h-6 w-6 text-gray-600" />
      </div>
    </header>
  );
};

export default Header;
