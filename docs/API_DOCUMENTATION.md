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

The app uses React's built-in state management with `useState` hooks. State is managed at the App component level and passed down through props.

### Data Sources

- **Static Data**: Subject content, topics, and questions are stored in `/constants/` directory
- **User Data**: Test results and progress are stored in component state (can be extended to localStorage/persistence)

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

### Code Splitting

- Components are imported dynamically where appropriate
- Large data files are split by subject

### Memory Management

- Event listeners are properly cleaned up
- Timers are cleared on component unmount
- Large text content is processed efficiently

## Future Extensions

### API Integration Points

- Results persistence
- User authentication
- Progress tracking
- Content updates

### Data Validation

- Input sanitization
- Schema validation for imported data
- Error recovery mechanisms
