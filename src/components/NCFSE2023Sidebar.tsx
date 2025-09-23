import React from 'react';
import DOMPurify from 'dompurify';

const guidance = {
  sidebarTitle: 'NCFSE-2023 Teacher Guidance',
  video: {
    title: "NCF 2023: A Teacher's Guide",
    src: 'constants/media/NCF_2023__A_Teacher_s_Guide.mp4'
  },
  sections: [
    {
      title: 'Curriculum Structure & Stages',
      content: 'The NCFSE-2023 follows a 5+3+3+4 design: Foundational (3–8 yrs, play-based, two languages), Preparatory (8–11 yrs, activity/discovery-based), Middle (11–14 yrs, three languages, science, social science, vocational), Secondary (14–18 yrs, multidisciplinary, choice-based).'
    },
    {
      title: 'Curricular Areas',
      content: 'Languages (multilingualism), Mathematics (conceptual, problem solving), Science (inquiry-based), Social Science (integrated, thematic), Art Education, Physical Education, Vocational Education, Interdisciplinary Areas.'
    },
    {
      title: 'Pedagogy',
      content: 'Experiential, inquiry-driven, discussion-based, project-based, arts/sports/activity-based, reduced content load, focus on core essentials.'
    },
    {
      title: 'Assessment',
      content: 'Competency-based, formative and summative, flexible board exams, focus on understanding not rote memorization.'
    },
    {
      title: 'Values & School Culture',
      content: 'Ethical, moral, democratic, epistemic values; positive work ethic, curiosity, pride and rootedness in India. School culture should be inclusive, nurturing, safe, supportive of teachers, and engage community/family.'
    }
  ]
};

const NCFSE2023Sidebar: React.FC = () => {
  return (
    <aside className="w-80 bg-gray-50 border-r p-6 h-full overflow-y-auto" aria-label="NCFSE-2023 Teacher Guidance Sidebar">
      <h2 className="text-xl font-bold mb-4 text-primary">{guidance.sidebarTitle}</h2>
      <video controls className="mb-6 w-full rounded shadow" src={guidance.video.src} title={guidance.video.title} />
      {guidance.sections.map((section, idx) => (
        <section key={idx} className="mb-5">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">{section.title}</h3>
          <div className="prose prose-blue" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section.content) }} />
        </section>
      ))}
    </aside>
  );
};

export default NCFSE2023Sidebar;
