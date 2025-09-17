import React from 'react';
import { CoverageData } from '../types';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

interface ReadinessTrackerProps {
  data: CoverageData[];
  onBack: () => void;
}

const ReadinessTracker: React.FC<ReadinessTrackerProps> = ({ data, onBack }) => {
  const getBadgeClass = (availability: 'Detailed' | 'Basic' | 'Not Available') => {
    switch (availability) {
      case 'Detailed':
        return 'bg-green-100 text-green-800';
      case 'Basic':
        return 'bg-yellow-100 text-yellow-800';
      case 'Not Available':
        return 'bg-red-100 text-red-800';
    }
  };

  // Helper to structure data for rowspan
  const processedData = data.reduce(
    (acc, current) => {
      let subject = acc.find(s => s.name === current.subjectName);
      if (!subject) {
        subject = { name: current.subjectName, topics: [], rowSpan: 0 };
        acc.push(subject);
      }

      let topic = subject.topics.find(t => t.name === current.topicName);
      if (!topic) {
        topic = { name: current.topicName, subTopics: [], rowSpan: 0 };
        subject.topics.push(topic);
      }

      topic.subTopics.push({
        name: current.subTopicName,
        questionCount: current.questionCount,
        contentAvailable: current.contentAvailable,
      });

      topic.rowSpan += 1;
      subject.rowSpan += 1;

      return acc;
    },
    [] as { name: string; topics: { name: string; subTopics: any[]; rowSpan: number }[]; rowSpan: number }[]
  );

  return (
    <div className="animate-fade-in">
      <button onClick={onBack} className="flex items-center text-primary hover:text-primary-dark mb-6 font-semibold">
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back to Dashboard
      </button>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Content Readiness Tracker</h2>
        <p className="text-gray-600 mb-6">
          An overview of syllabus coverage, question distribution, and content availability.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Topic & Sub-Topic
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Questions in Repo
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Content Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {processedData.map((subject, subjectIndex) =>
                subject.topics.map((topic, topicIndex) =>
                  topic.subTopics.map((subTopic, subTopicIndex) => (
                    <tr key={`${subject.name}-${topic.name}-${subTopic.name}`} className="hover:bg-gray-50">
                      {topicIndex === 0 && subTopicIndex === 0 && (
                        <td
                          className="px-6 py-4 border-b border-gray-200 text-sm font-semibold text-primary"
                          rowSpan={subject.rowSpan}
                        >
                          {subject.name}
                        </td>
                      )}
                      {subTopicIndex === 0 && (
                        <td
                          className="px-6 py-4 border-b border-gray-200 text-sm font-medium text-gray-800"
                          rowSpan={topic.rowSpan}
                        >
                          {topic.name}
                        </td>
                      )}
                      <td className="pl-12 pr-6 py-4 border-b border-gray-200 text-sm text-gray-600">
                        {subTopic.name}
                      </td>
                      <td className="px-6 py-4 border-b border-gray-200 text-sm text-center text-gray-800 font-mono font-bold">
                        {subTopic.questionCount}
                      </td>
                      <td className="px-6 py-4 border-b border-gray-200 text-sm">
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getBadgeClass(subTopic.contentAvailable)}`}
                        >
                          {subTopic.contentAvailable}
                        </span>
                      </td>
                    </tr>
                  ))
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReadinessTracker;
