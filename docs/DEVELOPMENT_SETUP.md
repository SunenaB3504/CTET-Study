# CTET Study App - Development Setup Guide

## Prerequisites

Before setting up the development environment, ensure you have the following installed:

### Required Software

- **Node.js**: Version 18.0.0 or higher
- **npm**: Usually comes with Node.js (version 8.0.0 or higher)
- **Git**: For version control
- **Visual Studio Code** (recommended): With TypeScript and React extensions

### System Requirements

- **Operating System**: Windows 10+, macOS 10.15+, or Linux
- **RAM**: Minimum 4GB, recommended 8GB+
- **Storage**: 500MB free space for dependencies and build artifacts

## Installation Steps

### 1. Clone the Repository

```bash
git clone <repository-url>
cd CTET-Study
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies including:

- React 19.1.1
- TypeScript 5.8.2
- Vite 6.2.0
- Tailwind CSS
- Heroicons
- Development tools and type definitions

### 3. Environment Setup

The app currently doesn't require any environment variables for basic functionality. However, if you need to add API integrations in the future:

Create a `.env.local` file in the root directory:

```bash
# Environment variables (if needed in future)
# GEMINI_API_KEY=your_api_key_here
```

### 4. Start Development Server

```bash
npm run dev
```

The development server will start at `http://localhost:5173/`

## Development Workflow

### Project Structure

```
CTET-Study/
├── components/          # React components
├── constants/           # Static data files
├── docs/               # Documentation
├── public/             # Static assets
├── types.ts            # TypeScript definitions
├── vite.config.ts      # Build configuration
└── package.json        # Project configuration
```

### Available Scripts

#### Development

```bash
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run preview      # Preview production build locally
```

#### Code Quality

```bash
npm run type-check   # Run TypeScript type checking (if configured)
npm run lint         # Run ESLint (if configured)
```

### Development Best Practices

#### 1. Code Style

- Use TypeScript with strict mode enabled
- Follow React functional component patterns
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

#### 2. Component Development

```typescript
// Example component structure
interface ComponentProps {
  title: string;
  onAction: () => void;
}

const MyComponent: React.FC<ComponentProps> = ({ title, onAction }) => {
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={onAction}>Action</button>
    </div>
  );
};

export default MyComponent;
```

#### 3. State Management

- Use React hooks (`useState`, `useEffect`) for component state
- Lift state up to parent components when needed
- Consider custom hooks for reusable logic

#### 4. Styling

- Use Tailwind CSS utility classes
- Follow responsive design principles
- Maintain consistent spacing and colors

## IDE Configuration

### Visual Studio Code (Recommended)

#### Essential Extensions

```json
{
  "recommendations": [
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

#### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "typescript.suggest.autoImports": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  }
}
```

### TypeScript Configuration

The project uses strict TypeScript configuration:

- Strict type checking enabled
- Consistent casing enforcement
- ES2022 target with modern features

## Testing

### Current Testing Setup

The project currently uses manual testing. For future expansion:

#### Unit Testing Setup

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

#### Basic Test Structure

```typescript
// Example test file: MyComponent.test.tsx
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders component correctly', () => {
  render(<MyComponent title="Test" onAction={() => {}} />);
  expect(screen.getByText('Test')).toBeInTheDocument();
});
```

## Debugging

### Browser Developer Tools

- Use React Developer Tools extension
- Check Console for errors
- Use Network tab for API calls
- Use Application tab for local storage

### TypeScript Debugging

- Enable source maps in `vite.config.ts`
- Use VS Code debugger with launch configuration
- Check TypeScript errors in Problems panel

### Common Issues

#### 1. Module Resolution Errors

```typescript
// Ensure correct imports
import { SubjectName } from '../types'; // Correct relative path
```

#### 2. Type Errors

```typescript
// Use proper typing
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  // Handle click
};
```

#### 3. Build Errors

- Clear node_modules: `rm -rf node_modules && npm install`
- Check TypeScript version compatibility
- Verify all dependencies are installed

## Contributing Guidelines

### Code Standards

1. **TypeScript**: Use strict typing, avoid `any` type
2. **React**: Use functional components with hooks
3. **Styling**: Use Tailwind CSS classes
4. **Naming**: Use camelCase for variables, PascalCase for components
5. **Documentation**: Add comments for complex logic

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push and create pull request
git push origin feature/new-feature
```

### Pull Request Process

1. Ensure all tests pass
2. Update documentation if needed
3. Follow conventional commit messages
4. Get code review approval

## Performance Optimization

### Development Performance

- Use Fast Refresh for instant updates
- Enable source maps for debugging
- Use React DevTools Profiler

### Production Optimization

- Run `npm run build` to create optimized bundle
- Analyze bundle size with build tools
- Use lazy loading for large components

## Troubleshooting

### Common Development Issues

#### Port Already in Use

```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

#### Node Version Issues

```bash
# Check Node version
node --version

# Use nvm for version management
nvm use 18
```

#### Dependency Conflicts

```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Getting Help

1. Check the documentation in `/docs` folder
2. Review existing issues in the repository
3. Check TypeScript and React documentation
4. Use developer tools for debugging

## Advanced Development

### Custom Scripts

Add custom npm scripts in `package.json`:

```json
{
  "scripts": {
    "analyze": "npx vite-bundle-analyzer",
    "type-check": "tsc --noEmit",
    "format": "prettier --write ."
  }
}
```

### Environment-Specific Configuration

Create multiple environment files:

- `.env.local` - Local development
- `.env.staging` - Staging environment
- `.env.production` - Production environment

### Build Optimization

```typescript
// vite.config.ts optimizations
export default defineConfig({
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
});
```

This setup guide ensures you have a robust development environment for contributing to the CTET Study App effectively.
