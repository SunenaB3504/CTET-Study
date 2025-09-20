import { render, fireEvent } from '@testing-library/react';
import MockTestConfig from '../components/MockTestConfig';
import { SUBJECT_DATA } from '../constants/data';

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
    expect(questionRange).toHaveAttribute('max', SUBJECT_DATA[0].topics.reduce((sum, topic) => sum + topic.practiceQuestions.length, 0).toString());
  });
});