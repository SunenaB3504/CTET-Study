# Prompt: NCF-2023 Project Plan Implementation

This prompt is designed to guide the implementation of the NCF-2023 Comprehensive Guidance feature in the CTET-Study app, ensuring strict adherence to project documentation and robust technical standards.

## Instructions

1. **Review Documentation**
   - Thoroughly read and understand all documentation in the `docs` folder, especially `NCF_2023_Project_Plan.md` and related guidance files.
   - Ensure all code and content strictly follow the documented requirements, objectives, and technical details.

2. **Foundation Enhancement & Execution Tracking**
   - After each major code execution or feature implementation, update `docs/PHASE1_FOUNDATION_ENHANCEMENT_IMPLEMENTATION_PLAN.md` with:
     - What was implemented
     - How it aligns with documentation
     - Any deviations and their justifications
     - Next steps

3. **UI Integration**
   - Integrate all new features and content with the app’s UI as specified in the documentation.
   - Ensure navigation, accessibility, and user experience match the documented plan.

4. **Document Adherence Recheck**
   - After implementation, run a final review to confirm that all code and features adhere to the documentation in the `docs` folder.
   - List any discrepancies and resolve them before finalizing.

5. **Security & Content Validation**
   - Run DOMPurify on all user-facing HTML/Markdown content to prevent XSS and ensure safe rendering.

6. **Strict JSON Format Testing**
   - Run tests to ensure all JSON outputs (if any) strictly adhere to the expected format and schema.

7. **Prompt Confirmation**
   - Save this prompt as `docs/prompt/NCF_2023_Project_Implementation_Prompt.md`.
   - Wait for user confirmation before executing the implementation steps.

---

**Note:**
- Do not begin execution until explicit confirmation is received.
- All actions must be documented and tracked as per the instructions above.
