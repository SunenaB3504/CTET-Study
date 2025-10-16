import { PaperType } from '../../../types.js';

export const metadata = {
  id: 'jul-24-ii',
  name: 'CTET July 2024 - Paper II',
  description: 'July 2024 Paper II - Complete question paper with comprehensive coverage across all subjects',
  paperType: PaperType.PAPER_II,
  year: 2024,
  month: 'July',
  duration: 150,
  totalMarks: 150,
  passingMarks: 90,
  instructions: `
    <h3>Instructions:</h3>
    <ul>
      <li>Total Questions: 150</li>
      <li>Total Marks: 150 (1 mark each)</li>
      <li>Duration: 2 hours 30 minutes</li>
      <li>No negative marking</li>
      <li>Sections: CDP (Q1-30), Mathematics (Q31-60), Science (Q61-90), Language I (Q91-120), Language II (Q121-150)</li>
    </ul>
  `,
  subjects: [
    { name: 'Child Development & Pedagogy', questionCount: 30, range: '1-30' },
    { name: 'Mathematics', questionCount: 30, range: '31-60' },
    { name: 'Science', questionCount: 30, range: '61-90' },
    { name: 'Language I - English', questionCount: 30, range: '91-120' },
    { name: 'Language II - Hindi', questionCount: 30, range: '121-150' }
  ]
};
