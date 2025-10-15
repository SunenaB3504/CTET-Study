import React, { useState } from 'react';

// Simple icon components
const BookOpen = () => <span>📖</span>;
const FileText = () => <span>📄</span>;
const Users = () => <span>👥</span>;
const Calculator = () => <span>🧮</span>;
const Beaker = () => <span>🧪</span>;
const Globe = () => <span>🌍</span>;
const Languages = () => <span>🗣️</span>;
const Brain = () => <span>🧠</span>;

interface SyllabusMenuProps {
  onClose: () => void;
}

export const SyllabusMenu: React.FC<SyllabusMenuProps> = ({ onClose }) => {
  const [selectedPaper, setSelectedPaper] = useState<'paper1' | 'paper2' | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const paperOptions = [
    {
      id: 'paper1',
      title: 'Paper I Syllabus',
      subtitle: 'Classes 1-5 (Primary Stage)',
      icon: BookOpen,
      description: 'Complete syllabus for CTET Paper I covering CDP, Mathematics, EVS, and Languages',
      sections: [
        { id: 'cdp1', name: 'Child Development & Pedagogy', icon: Brain, questions: 30 },
        { id: 'math1', name: 'Mathematics', icon: Calculator, questions: 30 },
        { id: 'evs', name: 'Environmental Studies', icon: Globe, questions: 30 },
        { id: 'lang1-1', name: 'Language I (English)', icon: Languages, questions: 30 },
        { id: 'lang2-1', name: 'Language II (Hindi)', icon: Languages, questions: 30 }
      ]
    },
    {
      id: 'paper2',
      title: 'Paper II Syllabus',
      subtitle: 'Classes 6-8 (Elementary Stage)',
      icon: FileText,
      description: 'Complete syllabus for CTET Paper II with Math/Science or Social Studies tracks',
      sections: [
        { id: 'cdp2', name: 'Child Development & Pedagogy', icon: Brain, questions: 30 },
        { id: 'math2', name: 'Mathematics', icon: Calculator, questions: 30 },
        { id: 'science', name: 'Science', icon: Beaker, questions: 30 },
        { id: 'social', name: 'Social Studies/Social Science', icon: Users, questions: 60 },
        { id: 'lang1-2', name: 'Language I (English)', icon: Languages, questions: 30 },
        { id: 'lang2-2', name: 'Language II (Hindi)', icon: Languages, questions: 30 }
      ]
    }
  ];

  const showSyllabusContent = (paperId: string, sectionId?: string) => {
    // This would open the actual syllabus content
    // For now, we'll create a placeholder function
    console.log(`Opening syllabus for ${paperId}${sectionId ? ` - ${sectionId}` : ''}`);
    
    // In a real implementation, this would:
    // 1. Load the markdown content from the syllabus files
    // 2. Display it in a modal or new view
    // 3. Allow navigation between sections
    
    alert(`Syllabus content for ${paperId}${sectionId ? ` - ${sectionId}` : ''} would open here.\\n\\nContent is available in:\\n- syllabus/paper-1-syllabus.md\\n- syllabus/paper-2-syllabus.md`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">CTET Syllabus</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl font-semibold"
          >
            ×
          </button>
        </div>

        {!selectedPaper ? (
          // Paper Selection View
          <div className="space-y-4">
            <p className="text-gray-600 mb-6">
              Choose the CTET paper syllabus you want to explore. Based on official CBSE CTET-2024 Circular.
            </p>
            
            {paperOptions.map((paper) => {
              const IconComponent = paper.icon;
              return (
                <div
                  key={paper.id}
                  onClick={() => setSelectedPaper(paper.id as 'paper1' | 'paper2')}
                  className="border rounded-lg p-6 cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 text-2xl">
                      <IconComponent />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">
                        {paper.title}
                      </h3>
                      <p className="text-blue-600 font-medium mb-2">
                        {paper.subtitle}
                      </p>
                      <p className="text-gray-600 mb-4">
                        {paper.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {paper.sections.map((section) => {
                          const SectionIcon = section.icon;
                          return (
                            <div
                              key={section.id}
                              className="flex items-center space-x-1 bg-gray-100 rounded-full px-3 py-1 text-sm"
                            >
                              <SectionIcon />
                              <span>{section.name}</span>
                              <span className="text-blue-600 font-medium">({section.questions}Q)</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">📋 Official Structure Summary</h4>
              <div className="text-sm text-yellow-700 space-y-1">
                <p><strong>Paper I:</strong> CDP (30) + Math (30) + EVS (30) + Lang I (30) + Lang II (30) = 150 MCQs</p>
                <p><strong>Paper II:</strong> CDP (30) + [Math+Science (60) OR Social Studies (60)] + Lang I (30) + Lang II (30) = 150 MCQs</p>
                <p><strong>Duration:</strong> 2.5 hours each | <strong>Marks:</strong> 150 each | <strong>No negative marking</strong></p>
              </div>
            </div>
          </div>
        ) : (
          // Section View
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <button
                onClick={() => setSelectedPaper(null)}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                ← Back to Papers
              </button>
              <h3 className="text-xl font-semibold">
                {paperOptions.find(p => p.id === selectedPaper)?.title}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => showSyllabusContent(selectedPaper)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                📖 View Complete Syllabus
              </button>
              <button
                onClick={() => showSyllabusContent(selectedPaper)}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                📋 Download PDF Summary
              </button>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Subject-wise Syllabus</h4>
              
              {paperOptions
                .find(p => p.id === selectedPaper)
                ?.sections.map((section) => {
                  const SectionIcon = section.icon;
                  return (
                    <div
                      key={section.id}
                      onClick={() => showSyllabusContent(selectedPaper, section.id)}
                      className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-xl"><SectionIcon /></span>
                          <div>
                            <h5 className="font-medium text-gray-800">{section.name}</h5>
                            <p className="text-sm text-gray-600">{section.questions} Questions</p>
                          </div>
                        </div>
                        <div className="text-blue-600 font-medium">
                          View Details →
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            {selectedPaper === 'paper2' && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">📌 Paper II Track Options</h4>
                <div className="text-sm text-blue-700 space-y-1">
                  <p><strong>Track A:</strong> Math & Science Teachers → Math (30Q) + Science (30Q) = 60Q</p>
                  <p><strong>Track B:</strong> Social Studies Teachers → Social Studies (60Q)</p>
                  <p><strong>Language Teachers:</strong> Can choose either Language I or Language II specialization</p>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-500">
          <p>Source: CTET-2024-Circular.pdf (Official CBSE Document) | Last Updated: December 2024</p>
        </div>
      </div>
    </div>
  );
};