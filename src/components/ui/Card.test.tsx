import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders title correctly', () => {
    render(<Card title="Card Title">Content</Card>);
    expect(screen.getByText('Card Title')).toBeInTheDocument();
  });

  it('renders subtitle correctly', () => {
    render(<Card title="Title" subtitle="Card Subtitle">Content</Card>);
    expect(screen.getByText('Card Subtitle')).toBeInTheDocument();
  });

  it('renders header action', () => {
    render(
      <Card title="Title" headerAction={<button>Action</button>}>
        Content
      </Card>
    );
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('applies default variant styles', () => {
    render(<Card>Content</Card>);
    const card = screen.getByText('Content').parentElement;
    expect(card).toHaveClass('shadow-sm', 'border', 'border-gray-200');
  });

  it('applies elevated variant styles', () => {
    render(<Card variant="elevated">Content</Card>);
    const card = screen.getByText('Content').parentElement;
    expect(card).toHaveClass('shadow-lg', 'border', 'border-gray-200');
  });

  it('applies outlined variant styles', () => {
    render(<Card variant="outlined">Content</Card>);
    const card = screen.getByText('Content').parentElement;
    expect(card).toHaveClass('border-2', 'border-gray-200');
  });

  it('applies filled variant styles', () => {
    render(<Card variant="filled">Content</Card>);
    const card = screen.getByText('Content').parentElement;
    expect(card).toHaveClass('bg-gray-50', 'border', 'border-gray-200');
  });

  it('applies default padding (md)', () => {
    render(<Card>Content</Card>);
    const contentDiv = document.querySelector('.p-4');
    expect(contentDiv).toBeInTheDocument();
  });

  it('applies small padding', () => {
    render(<Card padding="sm">Content</Card>);
    const contentDiv = document.querySelector('.p-3');
    expect(contentDiv).toBeInTheDocument();
  });

  it('applies large padding', () => {
    render(<Card padding="lg">Content</Card>);
    const contentDiv = document.querySelector('.p-6');
    expect(contentDiv).toBeInTheDocument();
  });

  it('applies no padding', () => {
    render(<Card padding="none">Content</Card>);
    const contentDiv = document.querySelector('.p-0');
    expect(contentDiv).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Card className="custom-class">Content</Card>);
    const card = screen.getByText('Content').parentElement;
    expect(card).toHaveClass('custom-class');
  });

  it('applies header padding based on card padding', () => {
    render(<Card title="Title" padding="lg">Content</Card>);
    const headerDiv = screen.getByText('Title').parentElement?.parentElement;
    expect(headerDiv).toHaveClass('px-6', 'py-4');
  });

  it('renders without header when no title, subtitle, or headerAction', () => {
    render(<Card>Content</Card>);
    const card = screen.getByText('Content').parentElement;
    const headerDiv = card?.querySelector('div:first-child');
    // If there's no header, the first child should be the content div
    expect(headerDiv).toHaveClass('p-4');
  });

  it('forwards additional props to the root element', () => {
    render(<Card data-testid="custom-card">Content</Card>);
    expect(screen.getByTestId('custom-card')).toBeInTheDocument();
  });
});