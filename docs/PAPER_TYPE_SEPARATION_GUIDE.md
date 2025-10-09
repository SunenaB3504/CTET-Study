# Paper I and Paper II Separation Guide

## Overview

The CTET Study app now features complete separation between Paper I (Classes 1-5) and Paper II (Classes 6-8). Teachers typically prepare for one paper type, not both, so the app now requires users to select their paper type on first launch.

## Changes Made

### 1. **Paper Type Selection Screen**
- **File**: `components/PaperTypeSelection.tsx`
- **Purpose**: First screen users see when launching the app
- **Features**:
  - Beautiful side-by-side comparison of Paper I and Paper II
  - Shows subject breakdown for each paper
  - Visual indicators (icons, colors) for selected paper type
  - Saves selection to localStorage for future sessions

### 2. **Updated Type System**

#### Added to `types.ts`:
```typescript
export enum PaperType {
  PAPER_I = 'Paper I (Classes 1-5)',
  PAPER_II = 'Paper II (Classes 6-8)',
}

// Added to UserPreferences interface:
selectedPaperType: PaperType | null;
```

### 3. **User Preferences Storage**

#### Updated `utils/experienceLevel.ts`:
- Added `selectedPaperType` to `DEFAULT_USER_PREFERENCES`
- New method: `UserPreferencesStorage.updatePaperType(paperType: PaperType)`
- Saves user's paper choice to localStorage

### 4. **Question Paper Filtering**

#### Updated `components/MockTestSelection.tsx`:
- Automatically filters mock tests based on user's selected paper type
- Shows only relevant tests for Paper I or Paper II
- Displays current selection in the header
- Shows helpful message if no tests are available for the selected paper type

### 5. **App Flow**

#### Updated `App.tsx`:
```typescript
1. On app load → Check localStorage for selectedPaperType
2. If null → Show PaperTypeSelection screen
3. If selected → Proceed to main app with filtered content
```

## User Experience Flow

### First Time Users
1. **Launch app** → See Paper Type Selection screen
2. **Choose Paper I or Paper II** → Selection saved to localStorage
3. **Proceed to dashboard** → All content filtered to selected paper type

### Returning Users
1. **Launch app** → Automatically load saved paper type preference
2. **Go directly to dashboard** → See only relevant content

### Changing Paper Type
Users can change their paper type selection from:
- **Header Button (Recommended)** - Quick access button in top navigation showing current paper type
- **Sidebar → Settings → "Change Paper Type"** - Alternative access method
- Clear browser localStorage to reset (advanced users only)

#### How to Change Paper Type:

**Method 1: Header Button (Fastest)**
1. Look at the **top right** of the screen
2. Click the **Paper I** or **Paper II** button (with ↻ icon)
3. Confirm the action
4. Choose your new paper type

**Method 2: Sidebar**
1. Click on **"Change Paper Type"** in the sidebar (under Settings section)
2. Confirm the action in the dialog box
3. You'll be taken back to the Paper Type Selection screen
4. Choose your new paper type
5. Continue with your preparation

**Note**: Changing paper type will reset your current session but won't delete your saved progress data.

## Subject Breakdown

### Paper I (Classes 1-5)
- Child Development & Pedagogy (30 questions)
- Mathematics (30 questions)
- Environmental Studies (30 questions)
- Language I (30 questions)
- Language II (30 questions)
- **Total**: 150 questions

### Paper II (Classes 6-8)
- Child Development & Pedagogy (30 questions)
- Language I (30 questions)
- Language II (30 questions)
- Mathematics & Science (60 questions) **OR** Social Studies (60 questions)
- **Total**: 150 questions

## Current Status

### ✅ Implemented
- Paper type selection screen
- Type system updates (PaperType enum)
- User preferences storage
- Mock test filtering by paper type
- All 6 existing question papers tagged as Paper I
- **"Change Paper Type" feature in Sidebar settings**
- **Visual indicator showing current paper type in Sidebar**
- **Quick access Paper Type button in Header (top navigation)**
- **Responsive design for mobile and desktop**

### 🔄 In Progress
- Paper II question content (0 tests currently available)

### 📋 Planned
- Create Paper II sample questions
- Subject filtering based on paper type
- Paper-specific study recommendations
- Separate analytics for each paper type

## Developer Notes

### Adding Paper II Questions

1. **Create question file** in `constants/questionPapers/`:
```typescript
import { QuestionPaper, SubjectName, PaperType } from '../../types.js';

export const dec24PaperII: QuestionPaper = {
  id: 'dec-24-ii',
  name: 'December 2024 - Paper II',
  description: 'CTET December 2024 Paper II for Classes 6-8',
  paperType: PaperType.PAPER_II, // Important!
  questions: [
    // Questions with SubjectName.SCIENCE or SubjectName.SOCIAL_STUDIES
  ]
};
```

2. **Export in** `constants/questionPapers/index.ts`:
```typescript
export { dec24PaperII } from './dec-24-ii.js';
```

3. **Add to** `QUESTION_PAPERS_DATA` array

### Filtering Content by Paper Type

To filter content based on user's selected paper type:

```typescript
import { UserPreferencesStorage } from '../utils/experienceLevel.js';

// Get user's paper type
const userPrefs = UserPreferencesStorage.loadPreferences();
const userPaperType = userPrefs?.selectedPaperType;

// Filter data
const filteredPapers = papers.filter(p => p.paperType === userPaperType);
```

### Resetting Paper Type (For Testing)

```typescript
// In browser console:
localStorage.removeItem('ctet_user_preferences');
// Reload page to see Paper Type Selection screen again
```

## Benefits

1. **Focused Learning**: Teachers see only content relevant to their exam
2. **Reduced Confusion**: No mixing of Paper I and Paper II content
3. **Better UX**: Cleaner interface without unnecessary options
4. **Accurate Analytics**: Separate tracking for each paper type
5. **Personalized Experience**: Content tailored to specific exam requirements

## Technical Implementation Details

### State Management
- Paper type stored in localStorage via `UserPreferencesStorage`
- Checked on app mount in `App.tsx`
- Controls entire app flow and content filtering

### Component Hierarchy
```
App.tsx
├── PaperTypeSelection (if no paper type selected)
└── Main App (if paper type selected)
    ├── Sidebar (shows paper type context)
    ├── Header
    └── Content (filtered by paper type)
        ├── MockTestSelection (only shows relevant tests)
        ├── Dashboard
        └── Other components
```

### Data Flow
```
User Selection → UserPreferencesStorage.updatePaperType() 
              → localStorage.setItem('ctet_user_preferences')
              → App state updated
              → All components filter content
```

## Future Enhancements

1. **Settings Page**: Allow users to change paper type
2. **Paper-Specific Subjects**: Show/hide subjects based on paper type
3. **Analytics Separation**: Track performance separately for each paper
4. **Recommendation Engine**: Paper-specific study recommendations
5. **Content Validation**: Ensure all Paper II content uses SCIENCE/SOCIAL_STUDIES subjects

---

**Last Updated**: October 9, 2025  
**Version**: 1.0  
**Status**: Production Ready ✅
