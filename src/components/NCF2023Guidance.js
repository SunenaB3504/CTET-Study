import React from 'react';
import DOMPurify from 'dompurify';
import { NCF_2023_GUIDANCE } from '../../constants/NCF_2023.js';

const NCF2023Guidance = () => {
  const sanitizedDescription = DOMPurify.sanitize(NCF_2023_GUIDANCE.description);
  return (
    <section
      className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md"
      aria-labelledby="ncf2023-guidance-title"
      tabIndex={0}
    >
      <h1 id="ncf2023-guidance-title" className="text-2xl font-bold mb-4 text-primary">{NCF_2023_GUIDANCE.title}</h1>
      <div
        className="prose prose-blue"
        dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
      />
    </section>
  );
};

export default NCF2023Guidance;
