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

### Step 3: Implement Changes & User Confirmation
- **Code Changes**: Make the requested modifications
- **Testing**: Verify changes work correctly (`npm run build` to check compilation)
- **Cleanup**: Remove any orphaned code, unused imports, or assets
- **Verification**: Ensure no linter errors or compilation issues
- **🔄 USER CONFIRMATION REQUIRED**: Present changes to user and request explicit confirmation
  - Clearly describe what was implemented
  - Ask user to test the functionality
  - Wait for explicit "OK" or approval before proceeding
  - If not satisfactory, iterate and fix issues before continuing
- **⏸️ WORKFLOW PAUSE**: Do not proceed to documentation steps until user confirms changes work as expected

### Step 4: Update Memory Bank
- **Document Changes**: Add a "Recent Changes" section to `.cursor/.memorybank`
- **Update Relevant Sections**: Modify existing sections (Architecture, Removed Features, etc.)
- **Version Updates**: Note any version changes or significant modifications
- **Architecture Notes**: Update if architectural patterns change

### Step 5: Version Bump (Semantic Versioning for Websites)
- **Check Current Version**: Look at the latest version in `CHANGELOG.md`
- **Determine Scope**: Assess the change impact using website-adapted semantic versioning:
  - **MAJOR (X.0.0)**: Complete UI/UX redesigns, breaking calculation changes, major architecture changes, removal of core features
  - **MINOR (0.X.0)**: New features, significant UI improvements, new job classes/calculations, enhanced functionality
  - **PATCH (0.0.X)**: Bug fixes, cosmetic changes, small UI adjustments, data updates, documentation updates
- **Update Version**: Increment appropriate version number in both changelog locations
- **Beta/Pre-release**: Maintain `-BETA` suffix during active development phase

### Step 6: Update Changelog (Sync Bell Dialog & CHANGELOG.md)
- **Bell Dialog**: Add changelog entry to `updates` array in `src/app/layout/app.topbar.component.ts`
- **CHANGELOG.md**: Add matching entry to root `CHANGELOG.md` file with new version number
- **Sync Requirement**: Ensure both changelog sources contain identical information and version numbers
- **Format**: Use consistent bullet points and descriptions across both locations
- **User Communication**: Bell dialog provides immediate user notifications of changes

### Step 7: Create Feature Documentation
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

### Step 8: Update README (If Necessary)
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
- [ ] Version bumped according to semantic versioning rules (check scope: MAJOR/MINOR/PATCH)
- [ ] Changelog updated in both locations (topbar component and CHANGELOG.md) with new version
- [ ] Bell dialog and CHANGELOG.md entries are synchronized with matching version numbers
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

## Semantic Versioning Rules for RO Calculator

### Website-Adapted Versioning (Based on Semantic Versioning 2.0.0)

Given a version number **MAJOR.MINOR.PATCH**, increment the:

#### **MAJOR version (X.0.0)** when you make:
- **Complete UI/UX Redesigns**: Fundamental changes to user workflows or interface paradigms
- **Breaking Calculation Changes**: Modified damage formulas or calculation methods that affect existing results
- **Major Architecture Changes**: Changes that affect user data compatibility or saved presets
- **Core Feature Removal**: Removing major functionality that users depend on (job classes, calculation types)
- **API Breaking Changes**: Changes to data structures or interfaces that break compatibility

#### **MINOR version (0.X.0)** when you add:
- **New Major Features**: New job classes, calculation types, or significant functionality
- **Significant UI Improvements**: Major layout reorganizations, new UI sections, enhanced workflows
- **New Calculation Capabilities**: Additional damage types, monster interactions, or skill systems
- **Enhanced User Experience**: Features that improve usability without breaking existing workflows
- **Backend Improvements**: New capabilities or performance enhancements that add functionality

#### **PATCH version (0.0.X)** when you make:
- **Bug Fixes**: Corrections to existing functionality without adding new features
- **Cosmetic Changes**: Small UI adjustments, color schemes, positioning fixes
- **Data Updates**: Adding new items, monsters, skills, or updating existing game data
- **Performance Improvements**: Optimizations that don't change functionality
- **Documentation Updates**: README, feature docs, or inline documentation changes
- **Code Cleanup**: Refactoring, linting fixes, or code organization improvements

#### **Pre-release Labels**:
- **-BETA**: Active development phase with potential breaking changes
- **-RC**: Release candidate, feature-complete but needs testing
- **-ALPHA**: Early development with incomplete features

### Version Bump Examples:
- `0.0.1-BETA` → `0.1.0-BETA`: Topbar reorganization (MINOR - significant UI improvement)
- `0.1.0-BETA` → `0.1.1-BETA`: Fixed button positioning (PATCH - cosmetic fix)
- `0.1.1-BETA` → `1.0.0`: Complete calculator redesign (MAJOR - fundamental workflow change)
- `1.0.0` → `1.1.0`: Added new job class support (MINOR - new functionality)

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