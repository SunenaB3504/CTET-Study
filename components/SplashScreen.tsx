import React, { useEffect, useState } from 'react';
import { AcademicCapIcon, BookOpenIcon, ChartBarIcon, SparklesIcon } from '@heroicons/react/24/solid';
import './SplashScreen.css';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(onComplete, 500);
      }, 800);
    }
  }, [progress, onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center splash-background transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-indigo-900/60"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Main Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-900 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <div className="relative bg-blue-900 bg-opacity-40 backdrop-blur-lg rounded-full p-8 border-4 border-blue-900 border-opacity-50 shadow-2xl">
              <AcademicCapIcon className="h-24 w-24 text-blue-900 drop-shadow-2xl" />
            </div>
          </div>
        </div>

        {/* App Title */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-blue-900 mb-4 drop-shadow-2xl animate-fade-in splash-title">
          CTET Prep Pal
        </h1>
        
        {/* Tagline */}
        <p className="text-2xl md:text-3xl text-slate-800 mb-8 font-bold drop-shadow-xl animate-fade-in-delay splash-tagline">
          Your AI-Powered Teaching Excellence Companion
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delay-2">
          <div className="flex items-center gap-2 bg-blue-900 bg-opacity-60 backdrop-blur-md px-6 py-3 rounded-full border-2 border-blue-900 border-opacity-70 shadow-xl">
            <BookOpenIcon className="h-5 w-5 text-white" />
            <span className="text-white font-bold drop-shadow-lg">Comprehensive Study Material</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-900 bg-opacity-60 backdrop-blur-md px-6 py-3 rounded-full border-2 border-blue-900 border-opacity-70 shadow-xl">
            <ChartBarIcon className="h-5 w-5 text-white" />
            <span className="text-white font-bold drop-shadow-lg">Smart Analytics</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-900 bg-opacity-60 backdrop-blur-md px-6 py-3 rounded-full border-2 border-blue-900 border-opacity-70 shadow-xl">
            <SparklesIcon className="h-5 w-5 text-white" />
            <span className="text-white font-bold drop-shadow-lg">AI-Enhanced Learning</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto">
          <div className="bg-blue-900 bg-opacity-50 backdrop-blur-sm rounded-full h-3 overflow-hidden border-2 border-blue-900 border-opacity-70 shadow-inner">
            <div 
              className={`h-full bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 rounded-full transition-all duration-300 ease-out shadow-lg splash-progress-${Math.floor(progress / 10) * 10}`}
            >
              <div className="h-full w-full bg-white opacity-30 animate-shimmer"></div>
            </div>
          </div>
          <p className="text-blue-900 text-sm mt-3 font-bold drop-shadow-lg splash-progress-text">
            {progress < 100 ? 'Preparing your learning experience...' : 'Ready to excel!'}
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-10 text-blue-900 opacity-30">
          <BookOpenIcon className="h-32 w-32 transform -rotate-12 drop-shadow-xl" />
        </div>
        <div className="absolute -bottom-10 -right-10 text-blue-900 opacity-30">
          <AcademicCapIcon className="h-32 w-32 transform rotate-12 drop-shadow-xl" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
