import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('renders label correctly', () => {
    render(<Input label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('renders placeholder correctly', () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
  });

  it('handles value changes', () => {
    const handleChange = jest.fn();
    render(<Input value="test" onChange={handleChange} />);

    const input = screen.getByDisplayValue('test');
    fireEvent.change(input, { target: { value: 'new value' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('displays error message', () => {
    render(<Input error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('displays helper text', () => {
    render(<Input helperText="This is helpful text" />);
    expect(screen.getByText('This is helpful text')).toBeInTheDocument();
  });

  it('applies error styling when error is present', () => {
    render(<Input error="Error message" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-red-500');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Input disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('applies fullWidth class when fullWidth is true', () => {
    render(<Input fullWidth />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('w-full');
  });

  it('generates unique id when not provided', () => {
    render(<Input label="Test" />);
    const input = screen.getByRole('textbox');
    const label = screen.getByText('Test');

    expect(input.id).toBe(label.getAttribute('for'));
    expect(input.id).toMatch(/^input-/);
  });

  it('uses provided id', () => {
    render(<Input label="Test" id="custom-id" />);
    const input = screen.getByRole('textbox');
    const label = screen.getByText('Test');

    expect(input.id).toBe('custom-id');
    expect(label.getAttribute('for')).toBe('custom-id');
  });
});