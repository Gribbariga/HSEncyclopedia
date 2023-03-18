import { ICards } from "@/lib/models/cardsModel";
import React, { FC } from "react";
import { useInfoListStyle } from "./style";
import { useInfoList } from "./useInfoList";

interface IInfoListProps {
  card: ICards;
}

const InfoList: FC<IInfoListProps> = ({ card }) => {
  const { infoListData } = useInfoList(card);
  return (
    <>
      <InfoListSC>
        {infoListData.map((item) => {
          if (item.isRender) {
            return (
              <ListItemSC key={item.text}>
                <span>{item.text}</span>
              </ListItemSC>
            );
          }
        })}
      </InfoListSC>
    </>
  );
};

const { InfoListSC, ListItemSC } = useInfoListStyle();

export default InfoList;
