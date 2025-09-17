# CTET Study App - Implementation Guide

## Overview

This guide provides practical steps for implementing UI/UX uniformity and code consistency in the CTET Study App development process.

## 🚀 Quick Start Setup

### 1. Install Development Dependencies

```bash
npm install --save-dev \
  eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin \
  eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh \
  prettier eslint-config-prettier eslint-plugin-prettier \
  husky lint-staged @testing-library/react @testing-library/jest-dom \
  @testing-library/user-event jest-environment-jsdom \
  @storybook/react @storybook/addon-essentials @storybook/addon-interactions \
  cypress cypress-real-events tailwind-merge clsx \
  @playwright/test axe-playwright
```

### 2. Update package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "cypress": "cypress open",
    "cypress:run": "cypress run",
    "prepare": "husky install"
  }
}
```

### 3. Configure Husky for Pre-commit Hooks

```bash
# Initialize husky
npx husky install

# Create pre-commit hook
echo '#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint
npm run format
npm run test' > .husky/pre-commit

# Make it executable
chmod +x .husky/pre-commit
```

### 4. Create Jest Configuration

```javascript
// jest.config.js
export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
  moduleNameMapping: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/main.tsx',
    '!src/vite-env.d.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
```

### 5. Create Test Setup File

```typescript
// src/test/setup.ts
import '@testing-library/jest-dom';

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {
    return null;
  }
  disconnect() {
    return null;
  }
  unobserve() {
    return null;
  }
};
```

## 🧩 Component Development Workflow

### Step 1: Plan Your Component

```typescript
// 1. Define the component interface
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

// 2. Plan the component structure
// - Base styles
// - Variant styles
// - Size styles
// - State styles (hover, focus, disabled)
// - Responsive behavior
```

### Step 2: Create the Component

```typescript
// components/ui/Button.tsx
import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    fullWidth = false,
    className,
    children,
    onClick,
    ...props
  }, ref) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) return;
      onClick?.(event);
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        onClick={handleClick}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-lg font-medium',
          'transition-colors duration-200 ease-in-out',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none',

          // Variant styles
          {
            'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500':
              variant === 'primary',
            'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus:ring-primary-500':
              variant === 'secondary',
            'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-primary-500':
              variant === 'outline',
            'text-gray-700 hover:bg-gray-50 focus:ring-primary-500':
              variant === 'ghost',
          },

          // Size styles
          {
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-4 py-2 text-base': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },

          // Full width
          {
            'w-full': fullWidth,
          },

          className
        )}
        {...props}
      >
        {loading && (
          <LoadingSpinner className="mr-2" size="sm" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
```

### Step 3: Create Utility Functions

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// lib/constants.ts
export const COLORS = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
  success: {
    500: '#10b981',
    600: '#059669',
  },
  error: {
    500: '#ef4444',
    600: '#dc2626',
  },
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
```

### Step 4: Write Tests

```typescript
// components/ui/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies correct variant classes', () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByText('Primary');

    expect(button).toHaveClass('bg-primary-500');
    expect(button).toHaveClass('text-white');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText('Disabled');

    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50');
  });

  it('shows loading spinner when loading is true', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByText('Loading')).toBeInTheDocument();
    // Add more specific loading spinner tests
  });
});
```

### Step 5: Create Storybook Stories

```typescript
// components/ui/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants and sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
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

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading Button',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
  parameters: {
    layout: 'padded',
  },
};
```

### Step 6: Add Accessibility Testing

```typescript
// components/ui/Button.a11y.test.tsx
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './Button';

expect.extend(toHaveNoViolations);

describe('Button Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Button>Accessible Button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should be keyboard accessible', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Keyboard Button</Button>);

    const button = screen.getByText('Keyboard Button');

    // Test keyboard navigation
    button.focus();
    expect(button).toHaveFocus();

    // Test keyboard activation
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## 🔄 Development Workflow

### Daily Development Process

```bash
# 1. Start development server
npm run dev

# 2. Create feature branch
git checkout -b feature/new-component

# 3. Make changes following standards
# - Write component with proper TypeScript
# - Add tests
# - Update documentation
# - Follow design system

# 4. Run quality checks
npm run lint
npm run format
npm run test

# 5. Commit with conventional format
git add .
git commit -m "feat: add button component with variants"

# 6. Push and create PR
git push origin feature/new-component
```

### Code Review Process

```markdown
## Pull Request Template

### Description

Brief description of the changes made.

### Type of Change

- [ ] Bug fix (non-breaking change)
- [ ] New feature (non-breaking change)
- [ ] Breaking change
- [ ] Documentation update

### Checklist

- [ ] My code follows the project's coding standards
- [ ] I have added tests for new functionality
- [ ] All tests pass
- [ ] I have updated documentation
- [ ] My changes don't break existing functionality
- [ ] I have tested accessibility
- [ ] I have tested responsive design

### Screenshots (if applicable)

Add screenshots of UI changes.

### Additional Notes

Any additional information or context.
```

## 📊 Quality Metrics

### Code Coverage Goals

```json
{
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    }
  }
}
```

### Performance Budget

```javascript
// vite.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@heroicons/react'],
        },
      },
    },
  },
  // Performance budget
  build: {
    chunkSizeWarningLimit: 600,
  },
};
```

## 🚀 Deployment Pipeline

### CI/CD Configuration

```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Check formatting
        run: npm run format:check

      - name: Run tests
        run: npm run test:coverage

      - name: Build application
        run: npm run build

      - name: Run accessibility tests
        run: npm run test:a11y

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to production
        run: echo "Deploy to production"
```

## 📈 Monitoring and Analytics

### Performance Monitoring

```typescript
// lib/performance.ts
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

// Usage
measurePerformance('Component Render', () => {
  // Component rendering logic
});
```

### Error Tracking

```typescript
// lib/errorTracking.ts
export const logError = (error: Error, context?: Record<string, any>) => {
  console.error('Error occurred:', {
    message: error.message,
    stack: error.stack,
    context,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
  });

  // In production, send to error tracking service
  if (process.env.NODE_ENV === 'production') {
    // Send to Sentry, LogRocket, etc.
  }
};
```

## 🎯 Best Practices Summary

### Do's ✅

- Follow TypeScript strict mode
- Use the established design system
- Write comprehensive tests
- Document components and APIs
- Use semantic HTML and ARIA attributes
- Follow accessibility guidelines
- Keep components small and focused
- Use proper error boundaries
- Implement proper loading states
- Follow the established file structure

### Don'ts ❌

- Don't use `any` type
- Don't hardcode colors or spacing
- Don't skip tests for new features
- Don't ignore linting errors
- Don't create large, monolithic components
- Don't forget responsive design
- Don't neglect accessibility
- Don't skip code reviews
- Don't commit directly to main branch
- Don't ignore performance considerations

This implementation guide provides a comprehensive roadmap for maintaining UI/UX uniformity and code consistency in the CTET Study App development process.
