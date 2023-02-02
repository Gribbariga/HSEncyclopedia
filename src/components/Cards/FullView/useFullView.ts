import { useAppSelector } from "@/hooks/state";
import { useState, useEffect } from "react";

export const useFullView = (
  cardIndex: number | null,
  setActive: (index: number | null) => void,
  isActive: boolean,
) => {
  const [currentIndex, setCurrentIndex] = useState(cardIndex);
  const card = useAppSelector(
    (state) => state.Cards.cards[currentIndex || cardIndex || 0],
  );
  const lenght = useAppSelector((state) => state.Cards.cards.length);

  useEffect(() => {
    setCurrentIndex(cardIndex);
  }, [cardIndex]);
  useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = "hidden";
      document.body.style.marginRight = "15px";
    } else {
      document.body.style.overflowY = "scroll";
      document.body.style.marginRight = "0";
    }
  }, [isActive]);

  const handlerClose = () => {
    return () => setActive(null);
  };
  const handlerNextCard = (
    e: React.MouseEvent<HTMLDivElement>,
    step: number,
  ) => {
    e.stopPropagation();
    setCurrentIndex((prev) => {
      if (prev === null) return prev;
      return prev + step;
    });
  };

  return {
    card,
    handlerClose,
    handlerNextCard,
  };
};
