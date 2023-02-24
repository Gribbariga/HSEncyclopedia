import { StringLiteral } from "typescript";

export interface ISets {
  id: number;
  name: string;
  slug: string;
  aliasSetIds?: number[];
  type: string;
  collectibleCount: number;
  collectibleRevealedCount: number;
  nonCollectibleCount: number;
  nonCollectibleRevealedCount: number;
}

export interface ISetGroups {
  slug: string;
  year?: number;
  svg?: string | null;
  cardSets: string[];
  name: string;
  standard?: boolean;
  icon?: string;
}

export interface ITypes {
  slug: string;
  id: number;
  name: string;
  gameModes: number[];
}

export interface IRarities {
  slud: string;
  id: number;
  craftingCost: number[] | null[];
  dustValue: number[] | null[];
  name: string;
}

export interface IClasses {
  slug: string;
  id: number;
  name: string;
  cardId?: number;
  heroPowerCardId?: number;
  alternateGeroCardIds?: number[];
}

export interface IMinionTypes {
  slug: string;
  id: number;
  name: string;
  gameModes: number[];
}

export interface IGameMode {
  slug: string;
  id: number;
  name: string;
}

export interface ISpellSchools {
  slug: string;
  id: number;
  name: string;
}

export interface IMercenaryRoles {
  slug: string;
  id: number;
  name: string;
}

export interface IKeywords {
  id: number;
  slug: string;
  name: string;
  refText: string;
  text: string;
  gameModes: number[];
}

export interface ICardBackCategories {
  slug: string;
  id: number;
  name: string;
}

export interface IAllMeta {
  sets: ISets[];
  setGroups: ISetGroups[];
  gameModes: IGameMode[];
  arenaIds: number[];
  types: ITypes[];
  rarities: IRarities[];
  classes: IClasses[];
  minionTypes: IMinionTypes[];
  spellSchools: ISpellSchools[];
  keywords: IKeywords[];
  filterableFields: string[];
  numericFields: string[];
  cardBackCategories: ICardBackCategories[];
}
