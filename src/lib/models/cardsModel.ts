interface IDuels {
  relevant: boolean;
  constructed: boolean;
}

interface IBattlegrounds {
  tier: number;
  hero: boolean;
  quest: boolean;
  reward: boolean;
  upgradeId: number;
  image: string;
  goldImage: string;
}

interface IMercenary {
  collectible: number;
  craftingCost: number;
  default: number;
  faction: null;
  mercId: number;
  rarity: number;
  roleId: number;
  statsByLevel: { health: number; attack: number }[];
}

export interface ICards {
  id: number;
  collectible: number;
  slug: string;
  classId: number | null;
  multiClassIds: number[];
  spellSchoolId?: number;
  cardTypeId: number;
  cardSetId: number;
  rarityId: number;
  artistName: string | null;
  health?: number;
  attack?: number;
  manaCost: number;
  name: string;
  text: string;
  image: string;
  imageGold: string;
  flavorText: string;
  cropImage?: string;
  parentId: number;
  childIds: number[];
  keywordIds?: number[];
  duels?: IDuels;
  copyOfCardId?: number;
  battlegrounds?: IBattlegrounds;
  mercenaryHero?: IMercenary;
}

export interface ICardsModel {
  cards: ICards[];
  cardCount: number;
  pageCount: number;
  page: number;
}
