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
        <ListItemSC>
          <span>Тип: {cardType?.name}</span>
        </ListItemSC>
        <ListItemSC>
          <span>Редкость: {rare?.name} </span>
        </ListItemSC>
        <ListItemSC>
          <span>Набор: {cardSets?.name}</span>
        </ListItemSC>
        <ListItemSC>
          <span>Класс: {cardClass?.name}</span>
        </ListItemSC>
        <ListItemSC>
          <span>
            Стоймость изготовления: {rare?.craftingCost[0]} /{" "}
            {rare?.craftingCost[1]} (Золотые){" "}
          </span>
        </ListItemSC>
        {rare?.dustValue && (
          <ListItemSC>
            <span>
              Кол-во пыли при распылении: {rare?.dustValue[0]} /{" "}
              {rare?.dustValue[1]} (Золотые)
            </span>
          </ListItemSC>
        )}

        <ListItemSC>
          <span>Художник: </span>
          {card.artistName}
        </ListItemSC>
      </InfoListSC>
    </>
  );
};

const { InfoListSC, ListItemSC } = useInfoListStyle();

export default InfoList;
