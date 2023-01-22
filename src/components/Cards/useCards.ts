import { checkPosition, throttle } from "@/lib/service/service";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import {
  addLoadingCards,
  fetchCards,
} from "@/store/cardProccess/asyncThunk/cardsApi";
import { ICards } from "@/lib/models/cardsModel";

interface IFullViewState {
  isActive: boolean;
  index: number | null;
}
interface IResultCard extends ICards {
  isEndCards?: boolean;
}
export const useCards = () => {
  const dispatch = useAppDispatch();
  const { cards, endCard } = useAppSelector((state) => state.Cards);
  const classes = useAppSelector((state) => state.Meta.allMeta?.classes);
  const [fullView, setFullView] = useState<IFullViewState>({
    isActive: false,
    index: null,
  });

  const sort = () => {
    let result: IResultCard[] = [];
    for (let i = 0; i < cards.length; i++) {
      if (i !== cards.length - 1 && cards[i].classId !== cards[i + 1].classId) {
        result.push({ ...cards[i], isEndCards: true });
      } else {
        result.push(cards[i]);
      }
    }
    return result;
  };
  const currentCard = sort();
  console.log(currentCard);
  const getCards = async () => {
    dispatch(fetchCards({}));
  };
  const addCards = async () => {
    dispatch(addLoadingCards({}));
  };

  useEffect(() => {
    const infinityScroll = throttle(
      () => checkPosition(8000, endCard, addCards),
      1000,
    );
    document.addEventListener("scroll", infinityScroll);
    return () => {
      document.removeEventListener("scroll", infinityScroll);
    };
  }, [checkPosition, throttle]);
  useEffect(() => {
    getCards();
  }, []);

  const handlerClick = (index: number | null) => {
    setFullView((prev) => ({ isActive: !prev?.isActive, index: index }));
  };

  return {
    cards,
    classes,
    fullView,
    currentCard,
    handlerClick,
  };
};
