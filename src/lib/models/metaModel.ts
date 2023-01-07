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
