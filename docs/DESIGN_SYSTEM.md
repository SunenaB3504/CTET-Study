# CTET Study App - Design System & UI Guidelines

## Overview

This document defines the design system, component patterns, and UI/UX guidelines for maintaining consistency across the CTET Study App.

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--primary-50: #eff6ff;
--primary-100: #dbeafe;
--primary-500: #3b82f6; /* Main blue */
--primary-600: #2563eb;
--primary-700: #1d4ed8;

/* Success Colors */
--success-500: #10b981;
--success-600: #059669;

/* Error Colors */
--error-500: #ef4444;
--error-600: #dc2626;

/* Warning Colors */
--warning-500: #f59e0b;
--warning-600: #d97706;

/* Neutral Colors */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-800: #1f2937;
--gray-900: #111827;
```

### Typography Scale

```css
/* Font Sizes */
--text-xs: 0.75rem; /* 12px */
--text-sm: 0.875rem; /* 14px */
--text-base: 1rem; /* 16px */
--text-lg: 1.125rem; /* 18px */
--text-xl: 1.25rem; /* 20px */
--text-2xl: 1.5rem; /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem; /* 36px */

/* Font Weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Spacing Scale

```css
/* Spacing Units (4px base) */
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem; /* 8px */
--space-3: 0.75rem; /* 12px */
--space-4: 1rem; /* 16px */
--space-5: 1.25rem; /* 20px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
--space-10: 2.5rem; /* 40px */
--space-12: 3rem; /* 48px */
--space-16: 4rem; /* 64px */
```

## 🧩 Component Patterns

### Button Variants

```typescript
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
```

### Card Component

```typescript
interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
}
```

### Form Components

```typescript
interface InputProps {
  label: string;
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

interface SelectProps {
  label: string;
  options: Array<{ value: string; label: string }>;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}
```

## 📱 Layout Patterns

### Page Layout

```typescript
// Standard page structure
<PageLayout>
  <Header />
  <Sidebar />
  <MainContent>
    <PageHeader title="Page Title" subtitle="Page description" />
    <ContentGrid>
      {/* Page content */}
    </ContentGrid>
  </MainContent>
</PageLayout>
```

### Grid System

```css
/* Responsive grid classes */
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }

/* Responsive breakpoints */
@media (min-width: 640px) { .sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (min-width: 768px) { .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
@media (min-width: 1024px) { .lg\\:grid-cols-4 { grid-template-columns: repeat(4, 1fr)); } }
```

## 🎯 Interaction Patterns

### Loading States

```typescript
// Consistent loading patterns
const LoadingSpinner = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => (
  <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-primary-500
    ${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-8 h-8' : 'w-6 h-6'}`} />
);

const SkeletonLoader = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
);
```

### Error Handling

```typescript
interface ErrorStateProps {
  title: string;
  message: string;
  onRetry?: () => void;
  showRetry?: boolean;
}

const ErrorState = ({ title, message, onRetry, showRetry = true }: ErrorStateProps) => (
  <div className="text-center py-12">
    <div className="text-error-500 mb-4">
      <ExclamationCircleIcon className="w-12 h-12 mx-auto" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{message}</p>
    {showRetry && onRetry && (
      <Button variant="primary" onClick={onRetry}>
        Try Again
      </Button>
    )}
  </div>
);
```

## 📋 Code Standards

### Component Structure

```typescript
// ✅ Good: Clear component structure
interface ComponentNameProps {
  // Props definition
}

const ComponentName: React.FC<ComponentNameProps> = ({
  prop1,
  prop2,
  className
}) => {
  // Hooks at the top
  const [state, setState] = useState(initialValue);

  // Event handlers
  const handleEvent = () => {
    // Implementation
  };

  // Effects
  useEffect(() => {
    // Side effects
  }, [dependencies]);

  // Render
  return (
    <div className={cn("base-classes", className)}>
      {/* JSX */}
    </div>
  );
};

export default ComponentName;
```

### File Naming Convention

```
components/
├── ui/                    # Reusable UI components
│   ├── Button.tsx        # ComponentName.tsx
│   ├── Card.tsx
│   └── Input.tsx
├── layout/               # Layout components
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   └── PageLayout.tsx
├── features/             # Feature-specific components
│   ├── Dashboard.tsx
│   ├── StudyModule.tsx
│   └── MockTest.tsx
└── shared/               # Shared utilities
    ├── hooks/
    ├── utils/
    └── types/
```

### CSS Class Naming

```typescript
// ✅ Good: Consistent className patterns
const Component = ({ variant, size, className }: Props) => (
  <div className={cn(
    // Base styles
    "rounded-lg border",
    // Variant styles
    {
      "bg-primary-500 text-white border-primary-500": variant === "primary",
      "bg-white text-gray-900 border-gray-300": variant === "secondary",
    },
    // Size styles
    {
      "px-3 py-1.5 text-sm": size === "sm",
      "px-4 py-2 text-base": size === "md",
      "px-6 py-3 text-lg": size === "lg",
    },
    // Custom classes
    className
  )}>
    Content
  </div>
);
```

## 🧪 Testing Guidelines

### Component Testing

```typescript
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies correct variant styles', () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByText('Primary');
    expect(button).toHaveClass('bg-primary-500');
  });
});
```

### Accessibility Testing

```typescript
// Accessibility test example
it('is accessible', async () => {
  const { container } = render(<Button>Accessible Button</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## 🔧 Development Workflow

### Pre-commit Hooks

```bash
# .husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint
npm run format
npm run test
```

### CI/CD Pipeline

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      - run: npm test
```

## 📚 Documentation Standards

### Component Documentation

```typescript
/**
 * Button component for user interactions
 *
 * @param variant - Visual style variant
 * @param size - Size of the button
 * @param disabled - Whether the button is disabled
 * @param loading - Show loading spinner
 * @param fullWidth - Make button full width
 * @param children - Button content
 * @param onClick - Click handler
 *
 * @example
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Click me
 * </Button>
 */
interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
```

### Storybook Integration

```typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};
```

## 🚀 Future Enhancements

### Planned Improvements

1. **Design Tokens**: CSS custom properties for theming
2. **Component Library**: Published npm package for reuse
3. **Theme System**: Light/dark mode support
4. **Internationalization**: Multi-language support
5. **Performance Monitoring**: Bundle size and runtime performance tracking

This design system ensures consistency, maintainability, and scalability across all future developments of the CTET Study App.
