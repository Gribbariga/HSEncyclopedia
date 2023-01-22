import Modal from "@/components/anyPage/Modal/Modal";
import { ICards } from "@/lib/models/cardsModel";
import { fCardRotate, mouseLive } from "@/lib/service/service";
import React, { FC } from "react";
import ReactDOM from "react-dom";
import { useFullViewStyle } from "./style";
import { useFullView } from "./useFullView";

interface IFullView {
  isActive: boolean;
  cardIndex: number | null;
  setActive: (index: number | null) => void;
}

const FullView: FC<IFullView> = ({ isActive, cardIndex, setActive }) => {
  const {
    cardClass,
    cardSets,
    cardType,
    rare,
    card,
    handlerClose,
    handlerNextCard,
  } = useFullView(cardIndex, setActive, isActive);
  console.log(cardSets);
  return (
    <Modal isActive={isActive} setActive={handlerClose()}>
      {isActive && (
        <WrapperSC>
          <ArrowWrapperSC side="left" onClick={(e) => handlerNextCard(e, -1)}>
            <ArrowImgSC
              isTransform={true}
              src="img/image/cards-page/Arrow.png"
            />
          </ArrowWrapperSC>
          <CardWrapperSC onMouseMove={fCardRotate} onMouseLeave={mouseLive}>
            <CardPerspectiveSC
              onMouseMove={fCardRotate}
              onMouseLeave={mouseLive}>
              <ImageSC src={card.image} />
            </CardPerspectiveSC>
          </CardWrapperSC>
          <RightSizeSC>
            <TitleSC>{card.name}</TitleSC>
            <DescriptionSC>«{card.flavorText}»</DescriptionSC>
            <CardEffectSC>{card.text}</CardEffectSC>
            <ListItemSC>
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
              <ListItemSC></ListItemSC>
            </ListItemSC>
          </RightSizeSC>
          <ArrowWrapperSC side="right" onClick={(e) => handlerNextCard(e, 1)}>
            <ArrowImgSC src="img/image/cards-page/Arrow.png" />
          </ArrowWrapperSC>
        </WrapperSC>
      )}
    </Modal>
  );
};

const {
  ImageSC,
  TitleSC,
  WrapperSC,
  InfoListSC,
  ListItemSC,
  ArrowImgSC,
  RightSizeSC,
  CardEffectSC,
  CardWrapperSC,
  DescriptionSC,
  ArrowWrapperSC,
  CardPerspectiveSC,
} = useFullViewStyle();

export default React.memo(FullView);
