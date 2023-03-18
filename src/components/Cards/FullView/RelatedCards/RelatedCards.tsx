import React, { FC } from "react";
import { useStyleRelatedCards } from "./style";
import { useRelatedCards } from "./useRelatedCards";

interface IRelatedCardsProps {
  ids: number[];
}

const RelatedCards: FC<IRelatedCardsProps> = ({ ids }) => {
  const { RelatedCardsArr } = useRelatedCards(ids);
  return (
    <>
      <TitleSC>Связанные карты:</TitleSC>
      <CardsWrapperSC>
        {RelatedCardsArr.map((item) => {
          return (
            <SpanSC key={item.id}>
              {item.name}
              <CardSC>
                <CardImgSC src={item.image} />
              </CardSC>
            </SpanSC>
          );
        })}
      </CardsWrapperSC>
    </>
  );
};

const { SpanSC, CardSC, TitleSC, CardImgSC, CardsWrapperSC } =
  useStyleRelatedCards();

export default React.memo(RelatedCards);
