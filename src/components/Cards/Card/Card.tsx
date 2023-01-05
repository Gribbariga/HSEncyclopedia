import { memo, FC } from "react";
import { useCardStyle } from "./style";
import { useCard } from "./useCard";

interface ICard {
  img: string;
}

const Card: FC<ICard> = ({ img }) => {
  const { CardMouseLive, fCardRotate } = useCard();
  return (
    <CardWrapperSC onMouseMove={fCardRotate} onMouseLeave={CardMouseLive}>
      <CardPerspectiveSC onMouseMove={fCardRotate} onMouseLeave={CardMouseLive}>
        <ImageSC src={img} />
      </CardPerspectiveSC>
    </CardWrapperSC>
  );
};

const { ImageSC, CardWrapperSC, CardPerspectiveSC } = useCardStyle();

export default memo(Card);
