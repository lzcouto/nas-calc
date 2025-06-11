# Ragnarok Online Damage Calculator

A sophisticated TypeScript/Angular-based damage calculator for Ragnarok Online, featuring comprehensive job class systems, equipment simulation, and advanced damage calculations with Divine Pride API integration.

## 🎯 Overview

This project is a comprehensive damage calculator for the MMORPG Ragnarok Online. It simulates character builds, equipment combinations, and skill damage calculations with mathematical precision. The calculator includes:

- **65+ Job Classes** - Complete implementation of all RO job classes
- **Complex Damage Formulas** - Accurate damage calculations including elemental, size, and race modifiers
- **Equipment System** - Full equipment simulation with cards, enchants, and refining
- **Monster Database** - Extensive monster data for damage testing
- **Divine Pride API Integration** - Real-time game data from Divine Pride database
- **Real-time Calculations** - Dynamic damage updates based on character changes
- **Full English Interface** - Complete English localization for international accessibility

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **Angular CLI** (v16 or higher)
- **Divine Pride API Key** (optional for enhanced features)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd nas-calc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will automatically create a local environment file (`src/environments/environment.local.ts`) with placeholder values.

3. **Configure API Key** (Optional)
   Edit `src/environments/environment.local.ts` and replace the placeholder with your Divine Pride API key:
   ```typescript
   export const environment: EnvironmentModel = {
     production: false,
     divinePrideAPIKey: 'YOUR_ACTUAL_API_KEY_HERE',
     divinePrideAPIHost: 'https://divine-pride.net/api'
   };
   ```

4. **Install Angular CLI globally** (if not already installed)
   ```bash
   npm install -g @angular/cli@16
   ```

### Running the Application

1. **Development Server** (Standard)
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:4200`

2. **Development Server with Local Environment**
   ```bash
   ng serve --configuration=local --host 0.0.0.0 --hmr --port 4200
   ```
   This uses your local API key configuration.

3. **Alternative Development Command**
   ```bash
   npm run start2
   ```
   Standard Angular serve without host binding

4. **Production Build**
   ```bash
   npm run build
   ```

5. **Linting**
   ```bash
   npm run lint
   ```

6. **Testing**
   ```bash
   npm test
   ```

## 🏗️ Project Architecture

### Core Structure

```
src/app/
├── constants/           # Game data constants and mappings
├── domain/             # Core business logic (Monster, Weapon)
├── jobs/               # Character classes (65+ job implementations)
├── models/             # TypeScript interfaces and data models
├── layout/             # UI components and pages
├── api-services/       # Data services and API handlers
└── utils/              # Utility functions and helpers

src/environments/
├── environment.ts       # Development environment (placeholders)
├── environment.prod.ts  # Production environment (placeholders)
├── environment.local.ts # Local environment (your API keys) - Git ignored
└── environment.model.ts # Environment interface definition
```

### Key Components

#### 1. **Job System** (`src/app/jobs/`)
- **Abstract Base Class**: `_character-base.abstract.ts` - Foundation for all job classes
- **Individual Jobs**: 65+ job class implementations (Swordman, Mage, Archer, etc.)
- **Skill Systems**: Attack skills, passive skills, and active buffs
- **ASPD Calculations**: Attack speed calculations per job class

#### 2. **Calculation Engine** (`src/app/layout/pages/ro-calculator/`)
- **`calculator.ts`** - Main calculation orchestrator (1,547 lines)
- **`damage-calculator.ts`** - Core damage computation logic (1,447 lines)
- **`base-state-calculator.ts`** - Character base stats calculations
- **`hp-sp-calculator.ts`** - HP/SP calculations

#### 3. **Game Data** (`src/app/constants/`)
- **Skill Names**: Complete skill database
- **Item Types**: Equipment categorization
- **Element System**: Elemental damage calculations
- **Size Penalties**: Monster size damage modifiers
- **Race Bonuses**: Racial damage bonuses

#### 4. **Data Models** (`src/app/models/`)
- **Character Models**: Stats, equipment, and status
- **Damage Models**: Damage calculation results
- **Item Models**: Equipment and item data structures

## 🎮 Features

### Character System
- **Multi-job Support**: All Ragnarok Online job classes
- **Stat Distribution**: Primary stats (STR, AGI, VIT, INT, DEX, LUK)
- **Trait System**: Advanced trait stats (POW, STA, WIS, SPL, CON, CRT)
- **Job Bonuses**: Automatic job-based stat bonuses

### Equipment System
- **Complete Equipment Slots**: Weapon, armor, accessories, etc.
- **Refining System**: Equipment upgrade simulation
- **Cards & Enchants**: Card slotting and enchantment system
- **Shadow Equipment**: Shadow gear implementation
- **Costume System**: Costume equipment with enchants

### Damage Calculation
- **Physical Damage**: Melee and ranged attack calculations
- **Magical Damage**: Spell damage with MATK formulas
- **Elemental System**: 10 elements with weakness/resistance
- **Size Modifiers**: Small, Medium, Large size penalties
- **Racial Bonuses**: Damage bonuses vs. different races
- **Critical Hits**: Critical rate and damage calculations

### Advanced Features
- **Skill Combinations**: Multi-skill damage scenarios
- **Buff Systems**: Temporary status effects
- **Consumables**: Potion and food effects
- **Monster Database**: Extensive monster data for testing
- **DPS Calculations**: Damage per second analysis

## 📊 Data Files

The project includes extensive game data:

### JSON Data Files (`src/assets/demo/data/`)
- **`item.json`** (8.7MB) - Complete item database
- **`monster.json`** (299KB) - Monster stats and information
- **`hp_sp_table.json`** (286KB) - Character HP/SP tables

### Hardcoded Data (`src/app/constants/`)
- Skill formulas and effects
- Equipment type mappings
- Elemental interaction tables
- Size penalty calculations

## 🔧 Development

### Code Organization

1. **Job Classes** - Each job extends `CharacterBase` abstract class
2. **Damage Engine** - Modular calculation system
3. **UI Components** - Angular components with PrimeNG
4. **Type Safety** - Comprehensive TypeScript interfaces

### Adding New Features

1. **New Job Class**:
   ```typescript
   export class NewJob extends CharacterBase {
     protected readonly CLASS_NAME = ClassName.NewJob;
     protected readonly JobBonusTable = { /* job bonuses */ };
     protected _atkSkillList = [ /* attack skills */ ];
     protected _activeSkillList = [ /* active skills */ ];
     protected _passiveSkillList = [ /* passive skills */ ];
   }
   ```

2. **New Skill**:
   ```typescript
   {
     name: SKILL_NAME.NEW_SKILL,
     label: 'New Skill',
     value: 'newSkill',
     formula: (input) => input.skillLevel * 100,
     canCri: true,
     isMatk: false
   }
   ```

### Testing

The project uses Jasmine/Karma for testing:
```bash
npm test                    # Run all tests
npm run test:divine-pride   # Run Divine Pride API integration tests only
npm run e2e                 # End-to-end tests
```

#### Divine Pride API Testing
The project includes comprehensive integration tests for the Divine Pride API service that make real API calls (no mocking) to verify functionality with actual game data.

## 🌐 Deployment

### GitHub Pages Deployment

The project is configured for GitHub Pages deployment:

```bash
npm run predeploy    # Build for production
npm run deploy       # Deploy to GitHub Pages
```

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your web server
3. Configure server for single-page application (SPA)

## 🛠️ Configuration

### Environment Settings

The application uses a streamlined environment configuration system:

#### Environment Files
- **`environment.ts`** - Development environment with placeholders
- **`environment.prod.ts`** - Production environment with placeholders  
- **`environment.local.ts`** - Local environment (your API keys) - Git ignored
- **`environment.model.ts`** - TypeScript interface for environment structure

#### Environment Structure
```typescript
export interface EnvironmentModel {
  production: boolean;              // Environment mode
  divinePrideAPIKey: string;       // Divine Pride API key
  divinePrideAPIHost: string;      // Divine Pride API host URL
}
```

#### API Configuration
- **Divine Pride API**: Integrated for real-time game data
- **API Host**: `https://divine-pride.net/api`
- **Local Development**: Use `environment.local.ts` for your API keys
- **Security**: API keys are never committed to version control

#### Development Configurations
- **Standard**: Uses `environment.ts` (placeholders)
- **Local**: Uses `environment.local.ts` (your API keys)
- **Production**: Uses `environment.prod.ts` (configured per deployment)

#### Running with Configurations
```bash
# Standard development (no API integration)
npm start

# Local development (with your API keys)
ng serve --configuration=local

# Production build
ng build --configuration=production
```

### Angular Configuration
- **`angular.json`** - Angular workspace configuration with local environment support
- **`tsconfig.json`** - TypeScript configuration
- **`.eslintrc.json`** - ESLint rules for code quality

### Security Notes
- **API Keys**: Never commit real API keys to the repository
- **Local Environment**: `environment.local.ts` is automatically ignored by Git
- **Placeholders**: Template files contain placeholder values for security

## 📋 Dependencies

### Core Dependencies
- **Angular 16** - Main framework
- **PrimeNG** - UI component library
- **RxJS** - Reactive programming
- **Chart.js** - Data visualization

### Development Dependencies
- **TypeScript** - Type-safe JavaScript
- **ESLint** - Code linting
- **Karma/Jasmine** - Testing framework

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -am 'Add new feature'`
5. Push to the branch: `git push origin feature/new-feature`
6. Submit a pull request

## 📝 License

This project is open source. Please check the repository for license details.

## 🔗 Links

- **Live Demo**: https://lzcouto.github.io/nas-calc-host/#/
- **Original Repository**: Check the git remote for original source

---

*This calculator provides accurate damage calculations based on official Ragnarok Online formulas and mechanics. Perfect for theory-crafting, build planning, and damage optimization.*
