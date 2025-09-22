import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MockTestConfig from '../components/MockTestConfig.js';
import { SUBJECT_DATA } from '../constants/data.js';

describe('MockTestConfig Filtering Logic', () => {
  it('should update maxQuestions based on selected subject and topics', () => {
    const mockOnStartTest = jest.fn();
    const mockOnBack = jest.fn();

    const { getByLabelText, getByText } = render(
      <MockTestConfig onStartTest={mockOnStartTest} onBack={mockOnBack} />
    );

    // Simulate selecting a subject
    const subjectButton = getByText(SUBJECT_DATA[0].name);
    fireEvent.click(subjectButton);

    // Verify maxQuestions updates
    const questionRange = getByLabelText('Select number of questions');
    expect(questionRange).toHaveAttribute('max', SUBJECT_DATA[0].topics.reduce((sum: number, topic: { practiceQuestions: any[] }) => sum + topic.practiceQuestions.length, 0).toString());
  });
});