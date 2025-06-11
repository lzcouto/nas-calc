# Changelog

## 0.3.0-BETA

- **Divine Pride Search Feature**: Added comprehensive item search functionality directly in topbar
- Professional UI: Created Divine Pride-style modal with dual icon system (large collection + small title icons)
- Smart Data Extraction: Automatically extracts and organizes stats (Type, ATK/DEF, Weight, Levels, Classes, Effects)
- Advanced Text Processing: Supports Divine Pride color codes with proper blue/gray/white formatting
- LATAM Server Integration: Configured for Latin America server with English language optimization
- Proper Spacing: Automatic tab formatting after colons in descriptions (e.g., 'DEF:     15')
- Error Handling: Graceful API error handling and missing image fallbacks
- Raw JSON View: Expandable accordion showing complete API response for debugging

## 0.2.2-BETA

- **Unused Data Files & Service Cleanup**: Removed unused JSON data files and SummaryService (~10MB reduction)
- Deleted unused JSON files: x.json (10MB), x_presetSummaryMap.json, x_summaryClassSkillMap.json, x_totalSelectedJobMap.json
- Eliminated unused SummaryService: removed service registration, imports, and dead code
- File cleanup: removed qr.jpg QR code image from old donation system
- Retained only essential JSON files: item.json, monster.json, hp_sp_table.json (verified active usage)
- Build verification: confirmed all core functionality preserved with successful compilation

## 0.2.1-BETA

- **Major Cleanup & Unused Feature Removal**: Comprehensive cleanup focusing calculator on core functionality
- Removed unused cloud-based features: authentication system, cloud presets, item ranking, user profiles
- Deleted 18 files including entire modules (auth/, shared-preset/, preset-summary/, user-profile/)
- Simplified codebase: removed JWT authentication, cloud API dependencies, and server-based preset management
- Preserved local preset functionality: localStorage-based saves, preset management dialog, class filtering
- Build optimization: eliminated thousands of lines of unused code while maintaining all core calculator features
- Focus refinement: calculator now purely dedicated to damage calculation with simple local preset management

## 0.2.0-BETA

- **Divine Pride API Service**: Added external API integration for Ragnarok Online game data
- New service endpoints: getSkill(), getMonster(), getItem() with real-time data from Divine Pride API
- Complete TypeScript models for API responses: skills, monsters, and items
- Environment-based API key configuration with support for multiple servers (defaults to bRO)
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