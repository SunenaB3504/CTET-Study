# CTET Study App - Coding Standards & Guidelines

## Overview

This document outlines the coding standards, patterns, and best practices for maintaining code consistency and quality in the CTET Study App.

## 📁 Project Structure

### Directory Organization

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components
│   ├── features/        # Feature-specific components
│   └── shared/          # Shared components
├── constants/           # Static data and configuration
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── types/               # TypeScript type definitions
├── styles/              # Global styles and CSS
└── lib/                 # Third-party library configurations
```

### File Naming Conventions

```typescript
// ✅ Components: PascalCase
Button.tsx;
UserProfile.tsx;
DataTable.tsx;

// ✅ Hooks: camelCase with 'use' prefix
useAuth.ts;
useLocalStorage.ts;
useDebounce.ts;

// ✅ Utilities: camelCase
formatDate.ts;
validateEmail.ts;
generateId.ts;

// ✅ Types: PascalCase with descriptive names
User.ts;
ApiResponse.ts;
ComponentProps.ts;

// ✅ Constants: UPPER_SNAKE_CASE
API_ENDPOINTS.ts;
COLORS.ts;
BREAKPOINTS.ts;
```

## 🔧 TypeScript Standards

### Interface vs Type

```typescript
// ✅ Use interfaces for object shapes
interface User {
  id: string;
  name: string;
  email: string;
}

// ✅ Use types for unions and primitives
type UserRole = 'admin' | 'user' | 'moderator';
type UserId = string | number;

// ✅ Use types for complex unions
type ApiResponse<T> = {
  data: T;
  error?: string;
  loading: boolean;
};
```

### Generic Constraints

```typescript
// ✅ Constrain generics properly
interface SelectProps<T extends { id: string | number; label: string }> {
  options: T[];
  value: T | null;
  onChange: (value: T) => void;
}

// ✅ Use proper constraints
type ComponentProps<T = {}> = T & {
  className?: string;
  children?: React.ReactNode;
};
```

### Type Imports

```typescript
// ✅ Use type-only imports for types
import type { User, UserRole } from './types';
import { createUser } from './api';

// ❌ Don't mix type and value imports
import { User, createUser } from './api';
```

## ⚛️ React Patterns

### Component Structure

```typescript
// ✅ Standard component structure
interface ComponentNameProps {
  title: string;
  onAction: () => void;
  className?: string;
}

const ComponentName = React.forwardRef<HTMLDivElement, ComponentNameProps>(
  ({ title, onAction, className }, ref) => {
    // Hooks at the top
    const [state, setState] = useState(initialValue);

    // Event handlers
    const handleClick = useCallback(() => {
      onAction();
    }, [onAction]);

    // Effects
    useEffect(() => {
      // Side effects
    }, []);

    // Render
    return (
      <div ref={ref} className={cn("base-styles", className)}>
        <h2>{title}</h2>
        <button onClick={handleClick}>Action</button>
      </div>
    );
  }
);

ComponentName.displayName = 'ComponentName';

export default ComponentName;
```

### Custom Hooks

```typescript
// ✅ Custom hook pattern
interface UseToggleReturn {
  value: boolean;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
}

const useToggle = (initialValue = false): UseToggleReturn => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return { value, toggle, setTrue, setFalse };
};
```

### Context Providers

```typescript
// ✅ Context with proper typing
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: 'light' | 'dark';
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme = 'light'
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(initialTheme);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  const value = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// ✅ Custom hook for context consumption
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
```

## 🎨 Styling Patterns

### CSS Modules / Tailwind

```typescript
// ✅ Consistent className patterns with Tailwind
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children
}) => (
  <button
    className={cn(
      // Base styles
      "inline-flex items-center justify-center rounded-lg font-medium transition-colors",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      "disabled:opacity-50 disabled:pointer-events-none",

      // Variant styles
      {
        "bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500": variant === 'primary',
        "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus:ring-primary-500": variant === 'secondary',
        "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-primary-500": variant === 'outline',
      },

      // Size styles
      {
        "px-3 py-1.5 text-sm": size === 'sm',
        "px-4 py-2 text-base": size === 'md',
        "px-6 py-3 text-lg": size === 'lg',
      },

      className
    )}
  >
    {children}
  </button>
);
```

### Utility Functions

```typescript
// ✅ Utility for className merging
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

// ✅ Usage
const Component = ({ className }: { className?: string }) => (
  <div className={cn("base-styles", className)}>
    Content
  </div>
);
```

## 📊 State Management

### Local State Patterns

```typescript
// ✅ Use appropriate state types
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState<boolean>(false);

// ✅ Use functional updates for state based on previous value
const increment = () => {
  setCount(prev => prev + 1);
};

// ✅ Use useReducer for complex state
type CounterState = {
  count: number;
  step: number;
};

type CounterAction =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'SET_STEP'; payload: number };

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + state.step };
    case 'DECREMENT':
      return { ...state, count: state.count - state.step };
    case 'SET_STEP':
      return { ...state, step: action.payload };
    default:
      return state;
  }
};
```

### Data Fetching

```typescript
// ✅ Custom hook for data fetching
interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

const useApi = <T>(url: string): UseApiReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};
```

## 🧪 Testing Standards

### Unit Tests

```typescript
// ✅ Component testing with React Testing Library
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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
});
```

### Custom Hook Testing

```typescript
// ✅ Testing custom hooks
import { renderHook, act } from '@testing-library/react';
import { useToggle } from './useToggle';

describe('useToggle', () => {
  it('starts with initial value', () => {
    const { result } = renderHook(() => useToggle(false));
    expect(result.current.value).toBe(false);
  });

  it('toggles value correctly', () => {
    const { result } = renderHook(() => useToggle(false));

    act(() => {
      result.current.toggle();
    });
    expect(result.current.value).toBe(true);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.value).toBe(false);
  });

  it('setTrue sets value to true', () => {
    const { result } = renderHook(() => useToggle(false));

    act(() => {
      result.current.setTrue();
    });
    expect(result.current.value).toBe(true);
  });
});
```

## 🚀 Performance Guidelines

### Component Optimization

```typescript
// ✅ Memoize expensive components
const ExpensiveComponent = React.memo(({ data, onChange }: Props) => {
  // Expensive rendering logic
  return <div>{/* Complex JSX */}</div>;
});

// ✅ Use useMemo for expensive calculations
const processedData = useMemo(() => {
  return data.map(item => expensiveOperation(item));
}, [data]);

// ✅ Use useCallback for event handlers
const handleClick = useCallback(() => {
  onChange(value);
}, [onChange, value]);
```

### Bundle Optimization

```typescript
// ✅ Dynamic imports for code splitting
const LazyComponent = lazy(() => import('./LazyComponent'));

// ✅ Usage
<Suspense fallback={<LoadingSpinner />}>
  <LazyComponent />
</Suspense>
```

## 📝 Documentation

### Code Comments

```typescript
// ✅ Document complex logic
/**
 * Calculates the user's progress percentage based on completed modules
 * and total available modules. Handles edge cases where total modules is 0.
 */
const calculateProgress = (completed: number, total: number): number => {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
};

// ✅ Document component props and behavior
interface UserCardProps {
  /** The user object containing profile information */
  user: User;
  /** Whether the card is in a loading state */
  loading?: boolean;
  /** Callback fired when the user clicks the edit button */
  onEdit?: (userId: string) => void;
  /** Additional CSS classes to apply */
  className?: string;
}

/**
 * Displays a user's profile information in a card format.
 * Supports loading states and edit functionality.
 */
const UserCard: React.FC<UserCardProps> = ({ user, loading, onEdit, className }) => {
  // Implementation
};
```

### README Files

````markdown
<!-- Component README -->

# Button Component

A reusable button component with multiple variants and sizes.

## Usage

```tsx
import { Button } from './Button';

<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>;
```
````

## Props

| Prop       | Type                                    | Default     | Description                    |
| ---------- | --------------------------------------- | ----------- | ------------------------------ |
| `variant`  | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | Visual style variant           |
| `size`     | `'sm' \| 'md' \| 'lg'`                  | `'md'`      | Size of the button             |
| `disabled` | `boolean`                               | `false`     | Whether the button is disabled |
| `loading`  | `boolean`                               | `false`     | Show loading spinner           |
| `onClick`  | `() => void`                            | -           | Click handler                  |

## Variants

- **Primary**: Main call-to-action button
- **Secondary**: Alternative action button
- **Outline**: Subtle button with border only

````

## 🔄 Code Review Checklist

### General
- [ ] Code follows established patterns and conventions
- [ ] No console.log statements in production code
- [ ] Proper error handling implemented
- [ ] Code is well-documented with comments
- [ ] No unused imports or variables

### TypeScript
- [ ] All variables and functions have proper types
- [ ] No `any` types used (except when necessary)
- [ ] Interfaces are used for object shapes
- [ ] Generic constraints are properly defined

### React
- [ ] Components follow the established structure
- [ ] Hooks are used correctly with proper dependencies
- [ ] No unnecessary re-renders (memo, useMemo, useCallback)
- [ ] Proper key props for list items
- [ ] Accessibility attributes included

### Styling
- [ ] Consistent use of design system classes
- [ ] Responsive design implemented
- [ ] No hardcoded colors or spacing
- [ ] CSS follows BEM or utility-first approach

### Testing
- [ ] Unit tests written for new functionality
- [ ] Edge cases covered in tests
- [ ] Accessibility tested
- [ ] Tests follow established patterns

### Performance
- [ ] No performance anti-patterns
- [ ] Bundle size impact considered
- [ ] Lazy loading implemented where appropriate
- [ ] Images optimized

## 🛠️ Development Tools

### Recommended VS Code Extensions
- ESLint
- Prettier
- TypeScript Importer
- Auto Rename Tag
- Bracket Pair Colorizer
- GitLens
- Todo Tree

### Git Workflow
```bash
# Feature branch workflow
git checkout -b feature/new-component
# Make changes
git add .
git commit -m "feat: add new component with proper typing"
git push origin feature/new-component
# Create pull request
````

### Commit Message Convention

```
type(scope): description

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Code style changes
- refactor: Code refactoring
- test: Testing
- chore: Maintenance

Examples:
- feat(ui): add loading spinner component
- fix(auth): resolve login redirect issue
- docs(api): update endpoint documentation
- refactor(utils): optimize date formatting function
```

This coding standards document ensures consistency, maintainability, and quality across all future developments of the CTET Study App.
