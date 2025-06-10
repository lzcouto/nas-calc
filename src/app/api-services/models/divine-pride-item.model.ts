export interface DivinePrideItemModel {
  classNum: number;
  sets: any[];
  soldBy: any[];
  id: number;
  name: string;
  description: string;
  slots: number;
  setname: string | null;
  itemTypeId: number;
  itemSubTypeId: number;
  itemSummonInfoContainedIn: DivinePrideItemSummonInfo[];
  itemSummonInfoContains: DivinePrideItemSummonInfo[];
  attack: number | null;
  defense: number | null;
  weight: number;
  requiredLevel: number | null;
  limitLevel: number | null;
  itemLevel: number | null;
  job: number;
  compositionPos: number | null;
  attribute: number | null;
  location: string | null;
}

export interface DivinePrideItemSummonInfo {
  Type: number;
  sourceId: number;
  sourceName: string;
  targetId: number;
  targetName: string;
  count: number;
  totalOfSource: number;
  summonType: string | null;
  chance: number;
} 