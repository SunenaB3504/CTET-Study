# Contributing to CTET Study App

Thank you for your interest in contributing to the CTET Study App! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Contribution Types](#contribution-types)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)
- [Pull Request Process](#pull-request-process)
- [Community](#community)

## Code of Conduct

This project follows a code of conduct to ensure a welcoming environment for all contributors. By participating, you agree to:

- Be respectful and inclusive
- Focus on constructive feedback
- Accept responsibility for mistakes
- Show empathy towards other contributors
- Help create a positive community

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 8.0.0 or higher
- Git
- Visual Studio Code (recommended)

### Setup

```bash
# Fork and clone the repository
git clone https://github.com/your-username/CTET-Study.git
cd CTET-Study

# Install dependencies
npm install

# Start development server
npm run dev
```

## Development Workflow

### 1. Choose an Issue

- Check the [Issues](../../issues) tab for open tasks
- Look for issues labeled `good first issue` or `help wanted`
- Comment on the issue to indicate you're working on it

### 2. Create a Branch

```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-number-description
```

### 3. Make Changes

- Follow the coding standards outlined below
- Write clear, concise commit messages
- Test your changes thoroughly

### 4. Commit Changes

```bash
# Stage your changes
git add .

# Commit with a clear message
git commit -m "feat: add new feature description"

# Push to your branch
git push origin feature/your-feature-name
```

### 5. Create Pull Request

- Go to the repository on GitHub
- Click "New Pull Request"
- Fill out the pull request template
- Request review from maintainers

## Contribution Types

### 🐛 Bug Fixes

- Fix reported bugs and issues
- Include steps to reproduce the bug
- Provide test cases that demonstrate the fix

### ✨ New Features

- Discuss new features in Issues before implementation
- Follow existing patterns and architecture
- Include comprehensive tests

### 📚 Content Updates

- Add new study materials and questions
- Update existing content for accuracy
- Improve explanations and examples

### 🎨 UI/UX Improvements

- Enhance user interface design
- Improve accessibility
- Optimize for different screen sizes

### 📖 Documentation

- Improve existing documentation
- Add new guides and tutorials
- Translate documentation

### 🧪 Testing

- Add unit tests and integration tests
- Improve test coverage
- Fix failing tests

## Coding Standards

### TypeScript Guidelines

- Use TypeScript with strict mode enabled
- Avoid `any` type - use proper type definitions
- Use interfaces for object shapes
- Leverage union types and generics where appropriate

```typescript
// ✅ Good
interface User {
  id: number;
  name: string;
  email: string;
}

const handleUser = (user: User): void => {
  // Implementation
};

// ❌ Avoid
const handleUser = (user: any): void => {
  // Implementation
};
```

### React Best Practices

- Use functional components with hooks
- Prefer custom hooks for reusable logic
- Use proper dependency arrays in useEffect
- Implement proper error boundaries

```typescript
// ✅ Good
const MyComponent: React.FC<Props> = ({ data }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    // Effect logic
  }, [dependency]);

  return <div>{/* JSX */}</div>;
};

// ❌ Avoid
const MyComponent = ({ data }) => {
  // Missing type annotations
  // Missing dependency array
};
```

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow consistent naming conventions
- Maintain responsive design principles
- Use CSS custom properties for theme variables

### File Organization

```
components/
├── ui/           # Reusable UI components
├── features/     # Feature-specific components
└── layouts/      # Layout components

constants/
├── data/         # Static data files
└── config/       # Configuration files
```

## Commit Message Convention

Follow conventional commit format:

```bash
type(scope): description

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat: add practice quiz component
fix: resolve timer bug in mock tests
docs: update API documentation
style: format code with prettier
refactor: simplify state management logic
test: add unit tests for user authentication
```

## Testing

### Testing Strategy

- Write unit tests for utility functions
- Write integration tests for components
- Test user interactions and edge cases
- Maintain good test coverage (>80%)

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure

```typescript
// Component test example
import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('handles user interaction', () => {
    render(<MyComponent />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Clicked')).toBeInTheDocument();
  });
});
```

## Documentation

### Documentation Standards

- Use Markdown for all documentation
- Include code examples where appropriate
- Keep documentation up to date with code changes
- Use clear, concise language

### Documentation Structure

```
docs/
├── API_DOCUMENTATION.md     # API and data structures
├── ARCHITECTURE.md          # System architecture
├── DEPLOYMENT.md            # Deployment guide
├── DEVELOPMENT_SETUP.md     # Development setup
├── USER_GUIDE.md           # User guide
├── CONTRIBUTING.md         # This file
└── CHANGELOG.md            # Version history
```

## Pull Request Process

### Before Submitting

- [ ] Code follows the established patterns
- [ ] Tests pass and coverage is maintained
- [ ] Documentation is updated
- [ ] Commit messages follow conventions
- [ ] No linting errors
- [ ] Code is reviewed by at least one other developer

### Pull Request Template

```markdown
## Description

Brief description of the changes made.

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing completed

## Screenshots (if applicable)

Add screenshots of UI changes.

## Checklist

- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
```

### Review Process

1. **Automated Checks**: CI/CD pipeline runs tests and linting
2. **Code Review**: At least one maintainer reviews the code
3. **Approval**: PR is approved and merged
4. **Deployment**: Changes are deployed to staging/production

## Community

### Communication Channels

- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For general questions and discussions
- **Pull Request Comments**: For code review discussions

### Getting Help

- Check existing issues and documentation first
- Use clear, descriptive titles for new issues
- Provide steps to reproduce bugs
- Include relevant code snippets and screenshots

### Recognition

Contributors are recognized through:

- GitHub contributor statistics
- Mention in release notes
- Attribution in documentation

## Additional Resources

### Learning Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)

### Development Tools

- [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/)
- [React Developer Tools](https://react.dev/learn/react-developer-tools)

Thank you for contributing to the CTET Study App! Your efforts help make quality education accessible to aspiring teachers worldwide.
