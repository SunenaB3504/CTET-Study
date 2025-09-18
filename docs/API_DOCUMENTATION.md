# CTET Study App - API Documentation

## Overview

This document provides comprehensive documentation for the CTET Study App's data structures, interfaces, and component APIs.

## Core Data Types

### SubjectName Enum

```typescript
enum SubjectName {
  CDP = 'Child Development & Pedagogy',
  MATH = 'Mathematics',
  EVS = 'Environmental Studies',
  LANG1 = 'Language I (English)',
  LANG2 = 'Language II (Hindi)',
}
```

### View Enum

```typescript
enum View {
  DASHBOARD,
  STUDY_MODULE,
  MOCK_TEST_SELECTION,
  MOCK_TEST,
  READINESS_TRACKER,
}
```

## Interface Definitions

### MCQ (Multiple Choice Question)

```typescript
interface MCQ {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  subjectName: SubjectName;
  topicId: string;
  subTopicId: string;
}
```

### Topic

```typescript
interface Topic {
  id: string;
  name: string;
  notes: string;
  practiceQuestions: MCQ[];
}
```

### Subject

```typescript
interface Subject {
  name: SubjectName;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  topics: Topic[];
}
```

### QuestionPaper

```typescript
interface QuestionPaper {
  id: string;
  name: string;
  description: string;
  questions: MCQ[];
}
```

### MockTestResult

```typescript
interface MockTestResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unattempted: number;
  timeTaken: number; // in seconds
  answers: (number | null)[];
  questions: MCQ[];
}
```

### ContextualTopic

```typescript
interface ContextualTopic {
  subjectName: SubjectName;
  topicId: string;
  topicName: string;
}
```

## Component APIs

### App Component

Main application component that manages global state and routing.

**Props:** None
**State:**

- `currentView`: Current active view
- `selectedSubject`: Currently selected subject
- `selectedTopic`: Currently selected topic
- `selectedPaper`: Currently selected question paper
- `currentContextualTopic`: Current contextual topic for sidebar

### Sidebar Component

Navigation sidebar with subject selection and contextual help.

**Props:**

```typescript
interface SidebarProps {
  onSelectSubject: (subject: Subject) => void;
  onStartMockTest: () => void;
  onShowReadinessTracker: () => void;
  selectedSubjectName?: SubjectName;
  contextualTopic: ContextualTopic | null;
  onSelectTopicById: (subjectName: SubjectName, topicId: string) => void;
}
```

### Dashboard Component

Subject dashboard showing available topics.

**Props:**

```typescript
interface DashboardProps {
  subject: Subject;
  onSelectTopic: (topic: Topic) => void;
  setContextualTopic: (topic: ContextualTopic | null) => void;
}
```

### StudyModule Component

Detailed study content with notes and practice questions.

**Props:**

```typescript
interface StudyModuleProps {
  subject: Subject;
  topic: Topic;
  onBack: () => void;
  onSelectTopicById: (subjectName: SubjectName, topicId: string) => void;
  setContextualTopic: (topic: ContextualTopic | null) => void;
}
```

### MockTest Component

Timed mock test interface.

**Props:**

```typescript
interface MockTestProps {
  paper: QuestionPaper;
  onBackToDashboard: () => void;
  onSelectTopicById: (subjectName: SubjectName, topicId: string) => void;
  setContextualTopic: (topic: ContextualTopic | null) => void;
}
```

### PracticeQuiz Component

Interactive practice quiz component.

**Props:**

```typescript
interface PracticeQuizProps {
  questions: MCQ[];
  onSelectTopicById: (subjectName: SubjectName, topicId: string) => void;
}
```

### TTSControls Component

Text-to-speech controls for accessibility.

**Props:**

```typescript
interface TTSControlsProps {
  textToSpeak: string;
}
```

## Data Flow

### State Management

The app uses React's built-in state management with `useState` hooks. State is managed at the App component level and passed down through props. User preferences and session progress can be optionally stored in localStorage for persistence across browser sessions.

### Data Sources

- **Static Data**: Subject content, topics, and questions are stored in `/constants/` directory
- **User Data**: Test results and progress are stored in component state and optionally in localStorage
- **Client-Side Processing**: All analytics and personalization logic runs client-side without backend dependencies

## Error Handling

### Component Error Boundaries

Components include error handling for:

- Missing data
- Invalid props
- Network errors (when applicable)

### Type Safety

- Full TypeScript implementation with strict mode enabled
- Comprehensive interface definitions
- Runtime type checking where necessary

## Performance Considerations

### Static Hosting Optimization

- Components are imported dynamically where appropriate
- Large data files are split by subject for efficient loading
- CDN-ready build outputs for global distribution
- No server-side processing or database queries

### Client-Side Performance

- Event listeners are properly cleaned up
- Timers are cleared on component unmount
- Large text content is processed efficiently
- LocalStorage operations are optimized for performance

### Bundle Optimization

- Tree-shaking removes unused code
- Code splitting by routes and features
- Compressed assets for faster loading
- Minimal runtime dependencies

## Future Extensions

### Client-Side Enhancements

- Enhanced localStorage management for user preferences
- Advanced rule-based adaptive learning algorithms
- Offline content synchronization capabilities
- Cross-device preference syncing (same browser/device)

### Content Expansion

- Additional question papers and study materials
- Multimedia content integration (videos, interactive diagrams)
- Multi-language support for regional users
- Content update mechanisms through app refreshes

### Performance Optimizations

- Progressive Web App (PWA) features for better mobile experience
- Advanced caching strategies for faster loading
- Bundle optimization for reduced file sizes
- Service worker implementation for offline functionality
