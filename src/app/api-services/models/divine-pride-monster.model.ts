export interface DivinePrideMonsterModel {
  id: number;
  name: string;
  description?: string;
  stats: DivinePrideMonsterStats;
  level: number;
  hp: number;
  sp: number;
  baseExp: number;
  jobExp: number;
  mvpExp?: number;
  attack: number;
  attack2: number;
  defense: number;
  magicDefense: number;
  resistance: number;
  magicResistance: number;
  hit: number;
  flee: number;
  attackSpeed: number;
  attackDelay: number;
  walkSpeed: number;
  scale: number;
  race: number;
  element: number;
  elementLevel: number;
  mode: number;
  spawn?: DivinePrideMonsterSpawn[];
  skill?: DivinePrideMonsterSkill[];
}

export interface DivinePrideMonsterStats {
  str: number;
  agi: number;
  vit: number;
  int: number;
  dex: number;
  luk: number;
}

export interface DivinePrideMonsterSpawn {
  mapname: string;
  amount: number;
  respawnTime: number;
}

export interface DivinePrideMonsterSkill {
  skillId: number;
  status: string;
  level: number;
  chance: number;
  casttime: number;
  delay: number;
  interruptable: boolean;
  condition: string | null;
  conditionValue: string | null;
} 