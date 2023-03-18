import { ICards } from "@/lib/models/cardsModel";
import { fCardRotate, mouseLive } from "@/lib/service/service";
import { memo, FC } from "react";
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
          <ImageSC
            loader={() => card.image}
            src={card.image}
            alt={card.name}
            width={0}
            height={0}
          />
        </CardPerspectiveSC>
      </CardWrapperSC>
    </>
  );
};

const { ImageSC, CardWrapperSC, CardPerspectiveSC } = useCardStyle();

export default memo(Card);
