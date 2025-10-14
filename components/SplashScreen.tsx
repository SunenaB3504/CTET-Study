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
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-300 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Main Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-50 animate-pulse"></div>
            <div className="relative bg-white bg-opacity-20 backdrop-blur-lg rounded-full p-8 border-4 border-white border-opacity-30 shadow-2xl">
              <AcademicCapIcon className="h-24 w-24 text-white drop-shadow-lg" />
            </div>
          </div>
        </div>

        {/* App Title */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl animate-fade-in">
          CTET Prep Pal
        </h1>
        
        {/* Tagline */}
        <p className="text-2xl md:text-3xl text-blue-100 mb-8 font-medium drop-shadow-lg animate-fade-in-delay">
          Your AI-Powered Teaching Excellence Companion
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delay-2">
          <div className="flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-md px-6 py-3 rounded-full border border-white border-opacity-30 shadow-lg">
            <BookOpenIcon className="h-5 w-5 text-white" />
            <span className="text-white font-semibold">Comprehensive Study Material</span>
          </div>
          <div className="flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-md px-6 py-3 rounded-full border border-white border-opacity-30 shadow-lg">
            <ChartBarIcon className="h-5 w-5 text-white" />
            <span className="text-white font-semibold">Smart Analytics</span>
          </div>
          <div className="flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-md px-6 py-3 rounded-full border border-white border-opacity-30 shadow-lg">
            <SparklesIcon className="h-5 w-5 text-white" />
            <span className="text-white font-semibold">AI-Enhanced Learning</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full h-3 overflow-hidden border border-white border-opacity-30 shadow-inner">
            <div 
              className={`h-full bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 rounded-full transition-all duration-300 ease-out shadow-lg splash-progress-${Math.floor(progress / 10) * 10}`}
            >
              <div className="h-full w-full bg-white opacity-30 animate-shimmer"></div>
            </div>
          </div>
          <p className="text-white text-sm mt-3 font-medium drop-shadow">
            {progress < 100 ? 'Preparing your learning experience...' : 'Ready to excel!'}
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-10 text-white opacity-20">
          <BookOpenIcon className="h-32 w-32 transform -rotate-12" />
        </div>
        <div className="absolute -bottom-10 -right-10 text-white opacity-20">
          <AcademicCapIcon className="h-32 w-32 transform rotate-12" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
