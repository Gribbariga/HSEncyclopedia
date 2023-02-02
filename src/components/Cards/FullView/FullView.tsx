import Modal from "@/components/anyPage/Modal/Modal";
import { ICards } from "@/lib/models/cardsModel";
import { fCardRotate, mouseLive } from "@/lib/service/service";
import React, { FC } from "react";
import ReactDOM from "react-dom";
import InfoList from "./InfoList/InfoList";
import KeyWords from "./KeyWords/KeyWords";
import { useFullViewStyle } from "./style";
import { useFullView } from "./useFullView";

interface IFullView {
  isActive: boolean;
  cardIndex: number | null;
  setActive: (index: number | null) => void;
}

const FullView: FC<IFullView> = ({ isActive, cardIndex, setActive }) => {
  const { card, handlerClose, handlerNextCard } = useFullView(
    cardIndex,
    setActive,
    isActive,
  );
  return (
    <Modal isActive={isActive} setActive={handlerClose()}>
      {isActive && (
        <WrapperSC>
          <ArrowWrapperSC side="left" onClick={(e) => handlerNextCard(e, -1)}>
            <ArrowImgSC
              isTransform={true}
              src="/img/image/cards-page/Arrow.png"
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
            <CardEffectSC dangerouslySetInnerHTML={{ __html: card.text }} />
            <InfoList card={card} />
            {card.keywordIds && <KeyWords keyWordsIds={card.keywordIds} />}
          </RightSizeSC>
          <ArrowWrapperSC side="right" onClick={(e) => handlerNextCard(e, 1)}>
            <ArrowImgSC src="/img/image/cards-page/Arrow.png" />
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
  ArrowImgSC,
  RightSizeSC,
  CardEffectSC,
  CardWrapperSC,
  DescriptionSC,
  ArrowWrapperSC,
  CardPerspectiveSC,
} = useFullViewStyle();

export default React.memo(FullView);
