import { checkPosition, throttle } from "@/lib/service/service";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import {
  addLoadingCards,
  fetchBGCards,
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
export const useCards = (gameMode: "standard" | "bg" | "mercenary") => {
  const dispatch = useAppDispatch();
  const { cards, endCard, loading } = useAppSelector((state) => state.Cards);
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
  const getCards = async () => {
    console.log(gameMode);
    switch (gameMode) {
      case "standard": {
        dispatch(fetchCards({}));
        break;
      }
      case "bg": {
        dispatch(fetchBGCards({}));
        break;
      }
      case "mercenary": {
        break;
      }
      default: {
        console.log(gameMode === "bg");
        dispatch(fetchCards({}));
      }
    }
  };
  const addCards = async () => {
    console.log(gameMode);
    switch (gameMode) {
      case "standard": {
        console.log(2);
        dispatch(addLoadingCards({}));
        break;
      }
      case "bg": {
        console.log(1);
        dispatch(fetchBGCards({}));
        break;
      }
      case "mercenary": {
        break;
      }
      default: {
        console.log(2);
        dispatch(fetchCards({}));
      }
    }
  };

  useEffect(() => {
    const infinityScroll = throttle(
      () => checkPosition(3000, endCard, addCards),
      1000,
    );
    document.addEventListener("scroll", infinityScroll);
    return () => {
      document.removeEventListener("scroll", infinityScroll);
    };
  }, [checkPosition, throttle]);
  useEffect(() => {
    console.log(gameMode);
    getCards();
  }, []);

  const handlerClick = (index: number | null) => {
    setFullView((prev) => ({ isActive: !prev?.isActive, index: index }));
  };

  return {
    cards,
    classes,
    loading,
    fullView,
    currentCard,
    handlerClick,
  };
};
