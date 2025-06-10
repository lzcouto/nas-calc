export interface DivinePrideSkillModel {
  globalization: DivinePrideSkillGlobalization[];
  id: number;
}

export interface DivinePrideSkillGlobalization {
  name: string;
  description: string;
  server: number;
  language: number;
} 