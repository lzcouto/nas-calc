# Feature Development Workflow Prompt

## Context Setup

You are working on the Ragnarok Online Damage Calculator project. Before implementing any feature requests, always follow this structured workflow to ensure consistency, proper documentation, and maintainability.

## Workflow Steps

### Step 1: Review Memory Bank
- **Action**: Read `@.cursor/.memorybank` to understand current project state
- **Purpose**: Get context on project architecture, recent changes, and existing features
- **Check**: Look for related functionality that might be affected by the requested change

### Step 2: Analyze Request
- **Understand**: What exactly is being requested?
- **Scope**: What files/components will be affected?
- **Impact**: How does this change affect existing functionality?
- **Dependencies**: Are there related features that need consideration?

### Step 3: Implement Changes
- **Code Changes**: Make the requested modifications
- **Testing**: Verify changes work correctly (`npm run build` to check compilation)
- **Cleanup**: Remove any orphaned code, unused imports, or assets
- **Verification**: Ensure no linter errors or compilation issues

### Step 4: Update Memory Bank
- **Document Changes**: Add a "Recent Changes" section to `.cursor/.memorybank`
- **Update Relevant Sections**: Modify existing sections (Architecture, Removed Features, etc.)
- **Version Updates**: Note any version changes or significant modifications
- **Architecture Notes**: Update if architectural patterns change

### Step 5: Create Feature Documentation
- **Create**: New `.md` file in `/features` folder with descriptive name
- **Include**: 
  - Overview of changes made
  - Files modified with specific details
  - Code snippets showing before/after (where relevant)
  - Impact assessment
  - Preserved functionality
  - Future considerations
  - Technical learnings from implementation
- **Format**: Follow existing feature documentation style

### Step 6: Update README (If Necessary)
- **Evaluate**: Does the change affect installation, usage, or project description?
- **Update**: Modify `README.md` if the feature impacts:
  - Installation instructions
  - Usage guidelines
  - Feature descriptions
  - System requirements
  - Configuration steps
- **Skip**: If change is internal and doesn't affect user-facing documentation

## Documentation Template

When creating feature documentation, use this structure:

```markdown
# [Feature Name] - [Brief Description]

**Date:** [Month Year]  
**Changes By:** [Source of Request]  
**Scope:** [Areas Affected]

## Overview
[Brief description of what was changed and why]

## Changes Made

### [Component/Area 1]
- **File:** `path/to/file`
- **Changes:** [Description of changes]
- **Code:** [Before/after snippets if relevant]

### [Component/Area 2]
[Repeat for each major change area]

## Files Modified
1. **`file1.ext`** - [Description of changes]
2. **`file2.ext`** - [Description of changes]

## Impact Assessment

### Positive Changes
- [List benefits and improvements]

### Code Metrics
- **Lines Added/Removed:** [Numbers]
- **Components Affected:** [Count and description]
- **Build Status:** [Verification results]

## Preserved Functionality
- [List what remains unchanged]

## Future Considerations
- [Maintenance notes]
- [Potential next steps]

## Technical Learnings
- [Key patterns or approaches discovered]
- [Integration challenges and solutions]
- [Best practices identified]

## Summary
[Checklist of completed tasks with ✅ checkmarks]
```

## Quality Checklist

Before completing any feature work, verify:

- [ ] Memory bank reviewed for context
- [ ] All requested changes implemented
- [ ] Code compiles successfully (`npm run build`)
- [ ] No linter errors introduced
- [ ] Memory bank updated with recent changes
- [ ] Feature documentation created in `/features` folder
- [ ] Documentation follows established format
- [ ] All files affected are documented
- [ ] Impact assessment completed
- [ ] Future considerations noted
- [ ] Technical learnings documented
- [ ] README.md updated if necessary

## Commands to Remember

```bash
# Build verification
npm run build

# Search for code references
# Use grep_search tool for finding specific code patterns

# File operations
# Use read_file, edit_file, search_replace as needed
```

## Project-Specific Notes

### Key Files to Always Consider
- `.cursor/.memorybank` - Project context and history
- `package.json` - Version and dependencies
- `src/app/layout/app.topbar.component.*` - Header functionality
- `src/app/layout/pages/ro-calculator/` - Core calculator logic
- `features/*.md` - Feature documentation history
- `README.md` - User-facing documentation

### Common Change Patterns
1. **UI Changes** - Update both `.html` template and `.ts` component
2. **Feature Removal** - Check for orphaned assets, imports, routes
3. **Version Updates** - Update both package.json and internal version tracking
4. **Documentation** - Always update memory bank and create feature summary
5. **Component Communication** - Use Angular services for cross-component interactions
6. **Fixed-Position Elements** - Consider topbar integration for better UX

### Build and Verification
- Always run `npm run build` to verify changes
- Check for TypeScript compilation errors
- Look for linter warnings that need addressing
- Verify no broken references to removed functionality
- **Avoid `npm start`** during implementation - user may be following changes in browser

### Angular-Specific Patterns Learned
- **Service Communication**: Use Subject/Observable pattern for component communication
- **ViewChild Integration**: Proper parent-child component interaction patterns
- **PrimeNG Integration**: Tooltip and styling best practices
- **Layout Services**: Central communication hub for layout-related interactions
- **Template References**: Use #templateVar for accessing child components

## Example Usage

**User Request:** "Move the item search functionality to the top bar, and the settings cogwheel for scale and colors of the website to the top bar, all the way to the right."

**Workflow Application:**
1. ✅ Read `.cursor/.memorybank` for context on current UI structure
2. ✅ Identify affected files: topbar, item-search, config components, layout service
3. ✅ Implement UI reorganization with proper component communication
4. ✅ Remove fixed-position elements and add topbar integration
5. ✅ Verify build success with `npm run build`
6. ✅ Update memory bank with architectural changes
7. ✅ Create `features/topbar-ui-reorganization.md` with comprehensive documentation
8. ✅ Evaluate README.md (no updates needed - internal UI change)

## Key Learnings from Recent Iterations

### UI/UX Improvements
- **Fixed-Position Elements**: Generally better to integrate into topbar for consistency
- **Component Communication**: Angular services with Subject/Observable work well for cross-component triggers
- **User Experience**: Consolidating controls in predictable locations improves usability

### Technical Patterns
- **ViewChild Pattern**: Effective for parent component triggering child component methods
- **Service Architecture**: Layout service as central hub scales well for multiple feature integrations
- **PrimeNG Integration**: Tooltips and button styling integrate seamlessly with existing patterns

This workflow ensures consistency, maintainability, and proper documentation for all feature changes in the Ragnarok Online Damage Calculator project. 