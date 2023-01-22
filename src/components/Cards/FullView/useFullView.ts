import { useAppSelector } from "@/hooks/state";
import { useState, useEffect } from "react";

export const useFullView = (
  cardIndex: number | null,
  setActive: (index: number | null) => void,
) => {
  const [currentIndex, setCurrentIndex] = useState(cardIndex);
  const card = useAppSelector(
    (state) => state.Cards.cards[currentIndex || cardIndex || 0],
  );
  const lenght = useAppSelector((state) => state.Cards.cards.length);

  useEffect(() => {
    setCurrentIndex(cardIndex);
  }, [cardIndex]);

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
      console.log(prev + step);
      return prev + step;
    });
  };

  return { handlerNextCard, card, handlerClose };
};
