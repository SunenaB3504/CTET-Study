import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ComponentDemo from '../components/ComponentDemo';

// Mock window.alert
const mockAlert = jest.fn();
global.alert = mockAlert;

describe('ComponentDemo Integration', () => {
  it('renders all UI components correctly', () => {
    render(<ComponentDemo />);

    // Check that main sections are rendered
    expect(screen.getByText('CTET Study App - UI Components Demo')).toBeInTheDocument();
    expect(screen.getByText('Button Variants')).toBeInTheDocument();
    expect(screen.getByText('Input Components')).toBeInTheDocument();
    expect(screen.getByText('Interactive Demo')).toBeInTheDocument();
  });

  it('button variants are displayed and functional', () => {
    render(<ComponentDemo />);

    // Check that all button variants are present
    expect(screen.getByText('Primary Button')).toBeInTheDocument();
    expect(screen.getByText('Secondary Button')).toBeInTheDocument();
    expect(screen.getByText('Outline Button')).toBeInTheDocument();
    expect(screen.getByText('Ghost Button')).toBeInTheDocument();
    expect(screen.getByText('Danger Button')).toBeInTheDocument();
  });

  it('input components are displayed and functional', () => {
    render(<ComponentDemo />);

    // Check that input labels are present
    expect(screen.getByText('Basic Input')).toBeInTheDocument();
    expect(screen.getByText('Input with Error')).toBeInTheDocument();
    expect(screen.getByText('Input with Helper Text')).toBeInTheDocument();
    expect(screen.getByText('Disabled Input')).toBeInTheDocument();
  });

  it('card variants are displayed', () => {
    render(<ComponentDemo />);

    // Check that card titles are present
    expect(screen.getByText('Default Card')).toBeInTheDocument();
    expect(screen.getByText('Elevated Card')).toBeInTheDocument();
    expect(screen.getByText('Outlined Card')).toBeInTheDocument();
  });

  it('modal can be opened and closed', async () => {
    render(<ComponentDemo />);

    // Initially modal should not be visible
    expect(screen.queryByText('Demo Modal')).not.toBeInTheDocument();

    // Click the "Open Modal" button
    const openButton = screen.getByText('Open Modal');
    fireEvent.click(openButton);

    // Modal should now be visible
    await waitFor(() => {
      expect(screen.getByText('Demo Modal')).toBeInTheDocument();
    });

    // Click the close button in modal
    const closeButton = screen.getByLabelText('Close modal');
    fireEvent.click(closeButton);

    // Modal should be closed
    await waitFor(() => {
      expect(screen.queryByText('Demo Modal')).not.toBeInTheDocument();
    });
  });

  it('input value changes are reflected', () => {
    render(<ComponentDemo />);

    // Find the basic input
    const input = screen.getByLabelText('Basic Input');

    // Type in the input
    fireEvent.change(input, { target: { value: 'Hello World' } });

    // Check that the input value is updated
    expect(input).toHaveValue('Hello World');

    // Check that the display shows the updated value
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('async button functionality works', async () => {
    render(<ComponentDemo />);

    // Find the async button
    const asyncButton = screen.getByText('Async Action');

    // Click the button
    fireEvent.click(asyncButton);

    // Button should show loading state
    expect(screen.getByText('Processing...')).toBeInTheDocument();

    // Wait for the async operation to complete
    await waitFor(() => {
      expect(screen.getByText('Async Action')).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  it('modal overlay click closes modal', async () => {
    render(<ComponentDemo />);

    // Open modal
    const openButton = screen.getByText('Open Modal');
    fireEvent.click(openButton);

    await waitFor(() => {
      expect(screen.getByText('Demo Modal')).toBeInTheDocument();
    });

    // Click on the modal overlay (backdrop)
    const modal = screen.getByText('Demo Modal').closest('.fixed');
    fireEvent.click(modal!);

    // Modal should be closed
    await waitFor(() => {
      expect(screen.queryByText('Demo Modal')).not.toBeInTheDocument();
    });
  });

  it('modal content click does not close modal', async () => {
    render(<ComponentDemo />);

    // Open modal
    const openButton = screen.getByText('Open Modal');
    fireEvent.click(openButton);

    await waitFor(() => {
      expect(screen.getByText('Demo Modal')).toBeInTheDocument();
    });

    // Click on modal content (not overlay)
    const modalContent = screen.getByText(/This is a fully functional modal/);
    fireEvent.click(modalContent);

    // Modal should still be open
    expect(screen.getByText('Demo Modal')).toBeInTheDocument();
  });

  it('keyboard navigation works in modal', async () => {
    render(<ComponentDemo />);

    // Open modal
    const openButton = screen.getByText('Open Modal');
    fireEvent.click(openButton);

    await waitFor(() => {
      expect(screen.getByText('Demo Modal')).toBeInTheDocument();
    });

    // Press Escape key
    fireEvent.keyDown(document, { key: 'Escape' });

    // Modal should be closed
    await waitFor(() => {
      expect(screen.queryByText('Demo Modal')).not.toBeInTheDocument();
    });
  });
});