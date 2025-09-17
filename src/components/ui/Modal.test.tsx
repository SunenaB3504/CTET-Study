import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    children: <div>Modal content</div>,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders when isOpen is true', () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(<Modal {...defaultProps} isOpen={false} />);
    expect(screen.queryByText('Modal content')).not.toBeInTheDocument();
  });

  it('renders title correctly', () => {
    render(<Modal {...defaultProps} title="Modal Title" />);
    expect(screen.getByText('Modal Title')).toBeInTheDocument();
  });

  it('renders description correctly', () => {
    render(<Modal {...defaultProps} title="Title" description="Modal description" />);
    expect(screen.getByText('Modal description')).toBeInTheDocument();
  });

  it('shows close button by default', () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByLabelText('Close modal')).toBeInTheDocument();
  });

  it('hides close button when showCloseButton is false', () => {
    render(<Modal {...defaultProps} showCloseButton={false} />);
    expect(screen.queryByLabelText('Close modal')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    render(<Modal {...defaultProps} />);
    const closeButton = screen.getByLabelText('Close modal');
    fireEvent.click(closeButton);
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when overlay is clicked', () => {
    render(<Modal {...defaultProps} />);
    // Click on the overlay container (not the backdrop)
    const overlay = document.querySelector('.fixed.inset-0.z-50');
    fireEvent.click(overlay!);
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when modal content is clicked', () => {
    render(<Modal {...defaultProps} />);
    const modalContent = screen.getByText('Modal content');
    fireEvent.click(modalContent);
    expect(defaultProps.onClose).not.toHaveBeenCalled();
  });

  it('does not call onClose on overlay click when closeOnOverlayClick is false', () => {
    render(<Modal {...defaultProps} closeOnOverlayClick={false} />);
    const overlay = document.querySelector('.fixed.inset-0.z-50');
    fireEvent.click(overlay!);
    expect(defaultProps.onClose).not.toHaveBeenCalled();
  });

  it('calls onClose when Escape key is pressed', () => {
    render(<Modal {...defaultProps} />);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose on Escape when closeOnEscape is false', () => {
    render(<Modal {...defaultProps} closeOnEscape={false} />);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(defaultProps.onClose).not.toHaveBeenCalled();
  });

  it('applies small size styles', () => {
    render(<Modal {...defaultProps} size="sm" />);
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveClass('max-w-sm');
  });

  it('applies medium size styles by default', () => {
    render(<Modal {...defaultProps} />);
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveClass('max-w-md');
  });

  it('applies large size styles', () => {
    render(<Modal {...defaultProps} size="lg" />);
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveClass('max-w-lg');
  });

  it('applies extra large size styles', () => {
    render(<Modal {...defaultProps} size="xl" />);
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveClass('max-w-2xl');
  });

  it('applies full size styles', () => {
    render(<Modal {...defaultProps} size="full" />);
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveClass('max-w-full', 'h-full', 'max-h-full');
  });

  it('has correct ARIA attributes when title is provided', () => {
    render(<Modal {...defaultProps} title="Test Title" />);
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveAttribute('aria-labelledby', 'modal-title');
    expect(modal).toHaveAttribute('aria-modal', 'true');
  });

  it('has correct ARIA attributes when description is provided', () => {
    render(<Modal {...defaultProps} title="Title" description="Description" />);
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveAttribute('aria-describedby', 'modal-description');
  });

  it('locks body scroll when open', () => {
    render(<Modal {...defaultProps} />);
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('restores body scroll when closed', () => {
    const { rerender } = render(<Modal {...defaultProps} />);
    rerender(<Modal {...defaultProps} isOpen={false} />);
    expect(document.body.style.overflow).toBe('unset');
  });

  it('cleans up body scroll on unmount', () => {
    const { unmount } = render(<Modal {...defaultProps} />);
    unmount();
    expect(document.body.style.overflow).toBe('unset');
  });

  it('has correct base classes', () => {
    render(<Modal {...defaultProps} />);
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveClass(
      'relative',
      'bg-white',
      'rounded-lg',
      'shadow-xl',
      'max-h-[90vh]',
      'overflow-auto'
    );
  });
});