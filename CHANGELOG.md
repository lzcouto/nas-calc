# Changelog

## 0.2.0-BETA

- **Divine Pride API Service**: Added external API integration for Ragnarok Online game data
- New service endpoints: getSkill(), getMonster(), getItem() with real-time data from Divine Pride API
- Complete TypeScript models for API responses: skills, monsters, and items
- Environment-based API key configuration with support for multiple servers (defaults to latamRO)
- Comprehensive integration tests with real API calls (no mocking) using actual game data
- Custom test script: 'npm run test:divine-pride' for isolated API testing

## 0.1.5-BETA

- Complete Thai text elimination: comprehensive cleanup removing all remaining Thai text from calculator interface
- UI text translation: accuracy/penetration labels, monster location names, skill descriptions, and system messages
- Enhanced English consistency: standardized terminology across all calculator components and battle summaries
- Code comment translation: converted Thai developer comments to English for better maintainability

## 0.1.4-BETA

- Navbar clean-up: moved References button to footer, repositioned version to right side
- Updated website title to 'Ragnarok Online LATAM Calculator'
- Icon consistency fix: standardized all topbar icons to 1.25rem size with CSS rules
- Converted home button from tab menu to regular button for consistency
- Enhanced footer: added References functionality while preserving attribution layout
- Code optimization: removed unused tab properties, reduced bundle size by 11.73 kB

## 0.1.3-BETA

- Major navbar redesign: moved Calculator to far left as home icon only, removed green selection bar
- Improved spacing between search icon and Items text, enhanced Settings cogwheel sizing
- Made footer text 'NITROBLISSERINO ATTACK SQUAD @ ROLA' bold and italic
- Complete Thai text translation: penetration labels, skill names, reference titles, and author names
- CSS cleanup: removed problematic border styling causing visual issues

## 0.1.2-BETA

- Fixed topbar right-side positioning by moving Calculator, Items, and Settings buttons to layout-topbar-menu container

## 0.1.1-BETA

- Fixed topbar right-side elements positioning to ensure they align all the way to the right edge

## 0.1.0-BETA

- Initial beta release
- Removed support functionality
- Reset version to 0.0.1-BETA
- Reorganized topbar layout: Version/Bell/References on left, Calculator/Items/Settings on right
- Updated footer attribution to 'NITROBLISSERINO ATTACK SQUAD @ ROLA' with Tong Calc credit