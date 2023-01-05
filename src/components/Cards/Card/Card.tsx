import { memo, FC } from "react";
import FullView from "./FullView/FullView";
import { useCardStyle } from "./style";
import { useCard } from "./useCard";

interface ICard {
  img: string;
}

const Card: FC<ICard> = ({ img }) => {
  const { CardMouseLive, isFullView, handlerClick, fCardRotate } = useCard();
  return (
    <>
      <CardWrapperSC
        onClick={handlerClick}
        onMouseMove={fCardRotate}
        onMouseLeave={CardMouseLive}>
        <CardPerspectiveSC
          onMouseMove={fCardRotate}
          onMouseLeave={CardMouseLive}>
          <ImageSC src={img} />
        </CardPerspectiveSC>
      </CardWrapperSC>
      {isFullView && <FullView active={isFullView} setActive={handlerClick} />}
    </>
  );
};

const { ImageSC, CardWrapperSC, CardPerspectiveSC } = useCardStyle();

export default memo(Card);
