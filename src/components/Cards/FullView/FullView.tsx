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
  const { handlerNextCard, handlerClose, card } = useFullView(
    cardIndex,
    setActive,
  );
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
                <span>Тип:</span>
              </ListItemSC>
              {/* <ListItemSC>
              <span>Редкость: </span>
              {cardIndo?.rare}
            </ListItemSC>
            <ListItemSC>
              <span>Набор:</span>
            </ListItemSC>
            <ListItemSC>
              <span>Класс:</span>
            </ListItemSC>
            <ListItemSC>
              <span>Стоймость изготовления: </span>
              {cardIndo?.production} (Золотые)
            </ListItemSC>
            <ListItemSC>
              <span>Кол-во пыли при распылении: </span>
              {cardIndo?.spraying} (Золотые)
            </ListItemSC>
            <ListItemSC>
              <span>Художник: </span>
              {card.artistName}
            </ListItemSC> */}
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
