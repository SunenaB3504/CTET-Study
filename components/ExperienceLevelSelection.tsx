import React, { useState, useEffect } from 'react';
import { ExperienceLevel, UserPreferences } from '../types';
import { EXPERIENCE_LEVELS, UserPreferencesStorage, AdaptiveContentService } from '../utils/experienceLevel';
import { CheckCircleIcon, ClockIcon, AcademicCapIcon, TagIcon } from '@heroicons/react/24/solid';

interface ExperienceLevelSelectionProps {
  onLevelSelected: (level: ExperienceLevel) => void;
  onComplete: () => void;
  initialLevel?: ExperienceLevel;
}

const ExperienceLevelSelection: React.FC<ExperienceLevelSelectionProps> = ({
  onLevelSelected,
  onComplete,
  initialLevel
}) => {
  const [selectedLevel, setSelectedLevel] = useState<ExperienceLevel>(initialLevel || 'beginner');
  const [currentStep, setCurrentStep] = useState<'selection' | 'confirmation' | 'setup'>('selection');
  const [userPreferences, setUserPreferences] = useState<UserPreferences | null>(null);

  useEffect(() => {
    // Load existing preferences
    const prefs = UserPreferencesStorage.loadPreferences();
    if (prefs) {
      setUserPreferences(prefs);
      setSelectedLevel(prefs.experienceLevel);
    }
  }, []);

  const handleLevelSelect = (level: ExperienceLevel) => {
    setSelectedLevel(level);
    setCurrentStep('confirmation');
  };

  const handleConfirmSelection = () => {
    // Save the selected level
    UserPreferencesStorage.updateExperienceLevel(selectedLevel);

    // Update user preferences
    const updatedPrefs: UserPreferences = {
      experienceLevel: selectedLevel,
      studyGoals: userPreferences?.studyGoals || ['Pass CTET exam'],
      preferredSubjects: userPreferences?.preferredSubjects || [],
      dailyStudyTime: userPreferences?.dailyStudyTime || EXPERIENCE_LEVELS[selectedLevel].recommendedStudyTime,
      notificationsEnabled: userPreferences?.notificationsEnabled ?? true,
      lastUpdated: new Date()
    };

    UserPreferencesStorage.savePreferences(updatedPrefs);
    setUserPreferences(updatedPrefs);

    onLevelSelected(selectedLevel);
    setCurrentStep('setup');
  };

  const handleCompleteSetup = () => {
    onComplete();
  };

  const renderLevelSelection = () => {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Experience Level</h1>
          <p className="text-lg text-gray-600">
            Help us personalize your CTET preparation journey by selecting your current experience level.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {Object.values(EXPERIENCE_LEVELS).map((level) => (
            <div
              key={level.level}
              onClick={() => handleLevelSelect(level.level)}
              className={`relative cursor-pointer rounded-xl border-2 p-6 transition-all duration-200 hover:shadow-lg ${
                selectedLevel === level.level
                  ? 'border-blue-500 bg-blue-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{level.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{level.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{level.description}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <ClockIcon className="h-4 w-4 text-gray-500 mr-2" />
                  <span>{level.recommendedStudyTime} min/day recommended</span>
                </div>

                <div className="flex items-center text-sm">
                  <AcademicCapIcon className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="capitalize">{level.questionComplexity} questions</span>
                </div>

                <div className="flex items-center text-sm">
                  <TagIcon className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="capitalize">{level.contentDepth} content</span>
                </div>
              </div>

              {selectedLevel === level.level && (
                <div className="absolute top-3 right-3">
                  <CheckCircleIcon className="h-6 w-6 text-blue-500" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => handleLevelSelect(selectedLevel)}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Continue with {EXPERIENCE_LEVELS[selectedLevel].name}
          </button>
        </div>
      </div>
    );
  };

  const renderConfirmation = () => {
    const levelConfig = EXPERIENCE_LEVELS[selectedLevel];
    const studyPlan = AdaptiveContentService.getRecommendedStudyPlan(selectedLevel);

    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">{levelConfig.icon}</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Confirm Your Selection</h1>
          <p className="text-lg text-gray-600">
            You've selected <span className="font-semibold text-blue-600">{levelConfig.name}</span> level
          </p>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Personalized Study Plan</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Daily Routine</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Sessions per day:</span>
                  <span className="font-medium">{studyPlan.dailySessions}</span>
                </div>
                <div className="flex justify-between">
                  <span>Session duration:</span>
                  <span className="font-medium">{studyPlan.sessionDuration} minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>Daily study time:</span>
                  <span className="font-medium">{studyPlan.dailySessions * studyPlan.sessionDuration} minutes</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-3">Focus Areas</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                {studyPlan.focusAreas.slice(0, 3).map((area, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What You'll Get</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {levelConfig.features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-700">
                <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setCurrentStep('selection')}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
          >
            Change Selection
          </button>
          <button
            onClick={handleConfirmSelection}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Confirm & Continue
          </button>
        </div>
      </div>
    );
  };

  const renderSetupComplete = () => {
    const levelConfig = EXPERIENCE_LEVELS[selectedLevel];
    const tips = AdaptiveContentService.getPersonalizedTips(selectedLevel);

    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">{levelConfig.icon}</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Setup Complete!</h1>
          <p className="text-lg text-gray-600">
            Your CTET preparation is now personalized for <span className="font-semibold text-blue-600">{levelConfig.name}</span> level
          </p>
        </div>

        <div className="bg-green-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">🎯 Quick Start Tips</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tips.slice(0, 6).map((tip, index) => (
              <div key={index} className="flex items-start text-sm text-gray-700">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-xs font-medium text-green-600">{index + 1}</span>
                </div>
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">📊 Your Progress Tracking</h2>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">0</div>
              <div className="text-sm text-gray-600">Topics Completed</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">0</div>
              <div className="text-sm text-gray-600">Study Streak</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">0h</div>
              <div className="text-sm text-gray-600">Total Study Time</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleCompleteSetup}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Start Learning
          </button>
        </div>
      </div>
    );
  };

  switch (currentStep) {
    case 'selection':
      return renderLevelSelection();
    case 'confirmation':
      return renderConfirmation();
    case 'setup':
      return renderSetupComplete();
    default:
      return renderLevelSelection();
  }
};

export default ExperienceLevelSelection;