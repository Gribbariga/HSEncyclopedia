import { ICards } from "@/lib/models/cardsModel";
import { fCardRotate, mouseLive } from "@/lib/service/service";
import { memo, FC } from "react";
import FullView from "../FullView/FullView";
import { useCardStyle } from "./style";
import { useCard } from "./useCard";

interface ICard {
  card: ICards;
  index: number;
  gameMode: "standard" | "bg" | "mercenary";
  openFullView: (index: number | null) => void;
}

const Card: FC<ICard> = ({ card, index, gameMode, openFullView }) => {
  const { handlerFullView } = useCard(openFullView);
  return (
    <>
      <CardWrapperSC
        gameMode={gameMode}
        onClick={handlerFullView(index)}
        onMouseMove={fCardRotate}
        onMouseLeave={mouseLive}>
        <CardPerspectiveSC onMouseMove={fCardRotate} onMouseLeave={mouseLive}>
          <ImageSC src={card.image} />
        </CardPerspectiveSC>
      </CardWrapperSC>
    </>
  );
};

const { ImageSC, CardWrapperSC, CardPerspectiveSC } = useCardStyle();

export default memo(Card);
