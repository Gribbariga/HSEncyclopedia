import { ICards } from "@/lib/models/cardsModel";
import React, { FC } from "react";
import { useInfoListStyle } from "./style";
import { useInfoList } from "./useInfoList";

interface IInfoListProps {
  card: ICards;
}

const InfoList: FC<IInfoListProps> = ({ card }) => {
  const { rare, cardClass, cardType, cardSets } = useInfoList(card);
  return (
    <>
      <InfoListSC>
        {cardType?.name && (
          <ListItemSC>
            <span>Тип: {cardType?.name}</span>
          </ListItemSC>
        )}
        {rare?.name && (
          <ListItemSC>
            <span>Редкость: {rare?.name} </span>
          </ListItemSC>
        )}
        {cardSets?.name && (
          <ListItemSC>
            <span>Набор: {cardSets?.name}</span>
          </ListItemSC>
        )}
        {cardClass?.name && (
          <ListItemSC>
            <span>Класс: {cardClass?.name}</span>
          </ListItemSC>
        )}
        {rare?.craftingCost[0] && (
          <ListItemSC>
            <span>
              Стоймость изготовления: {rare?.craftingCost[0]} /{" "}
              {rare?.craftingCost[1]} (Золотые){" "}
            </span>
          </ListItemSC>
        )}
        {rare?.dustValue[0] && (
          <ListItemSC>
            <span>
              Кол-во пыли при распылении: {rare?.dustValue[0]} /{" "}
              {rare?.dustValue[1]} (Золотые)
            </span>
          </ListItemSC>
        )}
        {card.artistName && (
          <ListItemSC>
            <span>Художник: </span>
            {card.artistName}
          </ListItemSC>
        )}
      </InfoListSC>
    </>
  );
};

const { InfoListSC, ListItemSC } = useInfoListStyle();

export default InfoList;
