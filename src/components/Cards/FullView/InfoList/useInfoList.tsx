import { useAppSelector } from "@/hooks/state";
import { ICards } from "@/lib/models/cardsModel";

export const useInfoList = (card: ICards) => {
  const { rarities, classes, minionTypes, types, sets } =
    useAppSelector((state) => state.Meta.allMeta) || {};

  const rare = rarities?.find((item) => item.id === card.rarityId);
  const cardClass = classes?.find((item) => item.id === card.classId);
  const cardType = types?.find((item) => item.id === card.cardTypeId);
  const cardSets = sets?.find((item) => item.id === card.cardSetId);
  const minionType = minionTypes?.find((item) => item.id === card.minionTypeId);
  console.log(rare?.craftingCost);
  const infoListData = [
    { text: `Тип: ${cardType?.name}`, isRender: cardType?.name || false },
    { text: `Редкость: ${rare?.name}`, isRender: rare?.name || false },
    { text: `Набор: ${cardSets?.name}`, isRender: cardSets?.name || false },
    { text: `Класс: ${cardClass?.name}`, isRender: cardClass?.name || false },
    {
      text: `Тип существа: ${minionType?.name}`,
      isRender: minionType?.name || false,
    },
    {
      text: `Стоймость изготовления: ${rare?.craftingCost[0]} /
    ${rare?.craftingCost[1]} (Золотые)`,
      isRender: rare?.craftingCost[0] || false,
    },
    {
      text: `Кол-во пыли при распылении: ${rare?.dustValue[0]} /
    ${rare?.dustValue[1]} (Золотые)`,
      isRender: rare?.craftingCost[0] || false,
    },
    {
      text: `Художник: ${card.artistName}`,
      isRender: card.artistName || false,
    },
  ];

  return { infoListData };
};
