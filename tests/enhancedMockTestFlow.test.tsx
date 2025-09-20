import { render, fireEvent } from '@testing-library/react';
import EnhancedMockTestFlow from '../components/EnhancedMockTestFlow';

describe('EnhancedMockTestFlow End-to-End Flow', () => {
  it('should transition between configuration, testing, and analytics phases', () => {
    const mockOnBackToDashboard = jest.fn();
    const mockOnSelectTopicById = jest.fn();
    const mockSetContextualTopic = jest.fn();

    const { getByText, getByLabelText, queryByText } = render(
      <EnhancedMockTestFlow
        onBackToDashboard={mockOnBackToDashboard}
        onSelectTopicById={mockOnSelectTopicById}
        setContextualTopic={mockSetContextualTopic}
      />
    );

    // Verify initial configuration phase
    expect(getByText('Configure Your Mock Test')).toBeInTheDocument();

    // Simulate selecting a subject
    const subjectButton = getByText('Mathematics'); // Replace with an actual subject name from SUBJECT_DATA
    fireEvent.click(subjectButton);

    // Simulate setting a valid question count
    const questionCountInput = getByLabelText('Select number of questions');
    fireEvent.change(questionCountInput, { target: { value: '10' } });

    // Simulate a valid configuration
    const startTestButton = getByText('Start Mock Test');
    expect(startTestButton).not.toBeDisabled(); // Ensure the button is enabled
    fireEvent.click(startTestButton);

    // Verify testing phase
    expect(queryByText('Configure Your Mock Test')).not.toBeInTheDocument();
    expect(getByText('Mathematics - Mock Test')).toBeInTheDocument();

    // Simulate completing the test
    const submitTestButton = getByText('Submit Test');
    fireEvent.click(submitTestButton);

    // Verify analytics phase
    expect(queryByText('Mock Test')).not.toBeInTheDocument();
    expect(getByText('Performance Analytics')).toBeInTheDocument();
  });
});