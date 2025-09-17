import React, { useEffect } from 'react';
import { Subject, Topic, ContextualTopic } from '../types';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

interface DashboardProps {
  subject: Subject;
  onSelectTopic: (topic: Topic) => void;
  setContextualTopic: (topic: ContextualTopic | null) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ subject, onSelectTopic, setContextualTopic }) => {
  useEffect(() => {
    setContextualTopic(null);
  }, [subject, setContextualTopic]);

  return (
    <div className="animate-fade-in">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex items-center">
        <subject.icon className="h-12 w-12 text-primary mr-4" />
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{subject.name}</h2>
          <p className="text-gray-600">Select a topic to start learning.</p>
        </div>
      </div>

      <div className="space-y-4">
        {subject.topics.map(topic => (
          <div
            key={topic.id}
            onClick={() => onSelectTopic(topic)}
            className="bg-white p-5 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-700">{topic.name}</h3>
              <p className="text-sm text-gray-500 mt-1">Detailed notes and practice questions available.</p>
            </div>
            <ChevronRightIcon className="h-6 w-6 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
