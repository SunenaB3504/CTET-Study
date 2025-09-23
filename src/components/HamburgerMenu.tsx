import React, { useState } from 'react';

const NAV_ITEMS = [
  { section: 'Subjects', items: [
    'Child Development & Pedagogy',
    'Mathematics',
    'Environmental Studies',
    'Language I (English)',
    'Language II (Hindi)'
  ]},
  { section: 'Assessment', items: [
    'Full Mock Test',
    'Enhanced Mock Test',
    'Sample Questions'
  ]},
  { section: 'Planning', items: [
    'Content Readiness',
    'Gap Analysis',
    'Quality Assessment'
  ]}
];

const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded bg-primary text-white shadow-lg md:hidden"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <span style={{ fontSize: '2rem' }}>☰</span>
      </button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end">
          <nav className="w-72 h-full bg-white shadow-lg p-6 flex flex-col">
            <button
              className="self-end mb-4 p-2 rounded bg-gray-200 text-gray-800"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-6 text-primary">CTET Prep Pal</h2>
            {NAV_ITEMS.map(section => (
              <div key={section.section} className="mb-6">
                <div className="text-xs font-bold text-gray-500 mb-2 uppercase">{section.section}</div>
                <ul className="space-y-2">
                  {section.items.map(item => (
                    <li key={item}>
                      <a href="#" className="block px-2 py-1 rounded hover:bg-primary hover:text-white text-gray-700 font-medium">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
