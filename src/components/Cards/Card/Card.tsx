import { ICards } from "@/lib/models/cardsModel";
import { fCardRotate, mouseLive } from "@/lib/service/service";
import { memo, FC } from "react";
import FullView from "./FullView/FullView";
import { useCardStyle } from "./style";
import { useCard } from "./useCard";

interface ICard {
  card: ICards;
}

const Card: FC<ICard> = ({ card }) => {
  const { isFullView, handlerClick } = useCard();
  return (
    <>
      <CardWrapperSC
        onClick={handlerClick}
        onMouseMove={fCardRotate}
        onMouseLeave={mouseLive}>
        <CardPerspectiveSC onMouseMove={fCardRotate} onMouseLeave={mouseLive}>
          <ImageSC src={card.image} />
        </CardPerspectiveSC>
      </CardWrapperSC>
      <FullView card={card} active={isFullView} setActive={handlerClick} />
    </>
  );
};

const { ImageSC, CardWrapperSC, CardPerspectiveSC } = useCardStyle();

export default memo(Card);
