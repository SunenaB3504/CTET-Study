# Language Requirements for Dec-24 Paper II

## CTET Paper II Language Structure

### Question Distribution by Language:

#### Q1-30: Child Development & Pedagogy
**Language:** English only (with Hindi translation in PDF, but we use English)
**Status:** 19/30 extracted

#### Q31-60: English Language
**Language:** English only
**Status:** 19/30 extracted

#### Q61-90: Hindi Language  
**Language:** **HINDI ONLY** (This section tests Hindi language proficiency)
**Status:** 20/30 extracted
**Special Note:** Need to extract Hindi text, not English translation

#### Q91-120: Mathematics
**Language:** English only (with Hindi translation in PDF, but we use English)
**Status:** 21/30 extracted

#### Q121-150: Social Studies
**Language:** English only (with Hindi translation in PDF, but we use English)
**Status:** 22/30 extracted

## Current Extraction Issue

Our scripts have been extracting **English text only** for all questions, including the Hindi section (Q61-90).

**Problem:** For Q61-90, we need the **Hindi text**, not the English!

## Solution Required

### For Q61-90 (Hindi Section):
- Extract Hindi (Devanagari) text
- Keep Hindi options
- Hindi explanations (or English explanations about Hindi grammar)

### For All Other Questions:
- Extract English text
- Remove Hindi translations
- English options only

Let me create an updated extraction script...
