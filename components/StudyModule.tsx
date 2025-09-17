import React, { useEffect } from 'react';
import { Subject, Topic, MCQ, SubjectName, ContextualTopic } from '../types';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import PracticeQuiz from './PracticeQuiz';
import TTSControls from './TTSControls';

interface StudyModuleProps {
  subject: Subject;
  topic: Topic;
  onBack: () => void;
  onSelectTopicById: (subjectName: SubjectName, topicId: string) => void;
  setContextualTopic: (topic: ContextualTopic | null) => void;
}

const StudyModule: React.FC<StudyModuleProps> = ({ subject, topic, onBack, onSelectTopicById, setContextualTopic }) => {
  useEffect(() => {
    setContextualTopic({
      subjectName: subject.name,
      topicId: topic.id,
      topicName: topic.name,
    });
    return () => setContextualTopic(null);
  }, [subject, topic, setContextualTopic]);

  return (
    <div className="animate-fade-in">
      <button onClick={onBack} className="flex items-center text-primary hover:text-primary-dark mb-6 font-semibold">
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back to {subject.name}
      </button>

      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{topic.name}</h2>
        <p className="text-gray-500 mb-6">Subject: {subject.name}</p>

        <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: topic.notes }} />

        <div className="mt-8 p-4 bg-blue-50 border-l-4 border-primary rounded-r-lg">
          <TTSControls textToSpeak={topic.notes.replace(/<[^>]*>?/gm, '')} />
        </div>
      </div>

      <div className="mt-8">
        <PracticeQuiz questions={topic.practiceQuestions} onSelectTopicById={onSelectTopicById} />
      </div>
    </div>
  );
};

export default StudyModule;
