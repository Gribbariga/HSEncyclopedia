import { useAppSelector } from "@/hooks/state";
import { ICards } from "@/lib/models/cardsModel";

export const useInfoList = (card: ICards) => {
  const { rarities, classes, types, sets } =
    useAppSelector((state) => state.Meta.allMeta) || {};
  const rare = rarities?.find((item) => item.id === (card && card.rarityId));
  const cardClass = classes?.find((item) => item.id === (card && card.classId));
  const cardType = types?.find((item) => item.id === (card && card.cardTypeId));
  const cardSets = sets?.find((item) => item.id === (card && card.cardSetId));
  return { rare, cardClass, cardType, cardSets };
};
