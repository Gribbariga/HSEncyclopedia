interface IDuels {
  relevant: boolean;
  constructed: boolean;
}

export interface ICards {
  id: number;
  collectible: number;
  slug: string;
  classId: number;
  multiClassIds: number[];
  spellSchoolId?: number;
  cardTypeId: number;
  cardSetId: number;
  rarityId: number;
  artistName: string;
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
}

export interface ICardsModel {
  cards: ICards[];
  cardCount: number;
  pageCount: number;
  page: number;
}
