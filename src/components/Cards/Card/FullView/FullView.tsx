import Modal from "@/components/anyPage/Modal/Modal";
import { ICards } from "@/lib/models/cardsModel";
import { fCardRotate, mouseLive } from "@/lib/service/service";
import React, { FC } from "react";
import ReactDOM from "react-dom";
import { useFullViewStyle } from "./style";
import { useFullView } from "./useFullView";

interface IFullView {
  active: boolean;
  card: ICards;
  setActive: () => void;
}

const FullView: FC<IFullView> = ({ active, card, setActive }) => {
  const { cardIndo } = useFullView(card.rarityId);
  return (
    <Modal active={active} setActive={setActive}>
      <WrapperSC>
        <CardWrapperSC onMouseMove={fCardRotate} onMouseLeave={mouseLive}>
          <CardPerspectiveSC onMouseMove={fCardRotate} onMouseLeave={mouseLive}>
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
            <ListItemSC>
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
            </ListItemSC>
            <ListItemSC></ListItemSC>
          </ListItemSC>
        </RightSizeSC>
      </WrapperSC>
    </Modal>
  );
};

const {
  ImageSC,
  TitleSC,
  WrapperSC,
  InfoListSC,
  ListItemSC,
  RightSizeSC,
  CardEffectSC,
  CardWrapperSC,
  DescriptionSC,
  CardPerspectiveSC,
} = useFullViewStyle();

export default React.memo(FullView);
