import { checkPosition, throttle } from "@/lib/service/service";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import {
  addLoadingBGCards,
  addLoadingCards,
  addLoadingMercCards,
  fetchCards,
} from "@/store/cardProccess/asyncThunk/cardsApi";
import { ICards } from "@/lib/models/cardsModel";

interface IFullViewState {
  isActive: boolean;
  index: number | null;
}
interface IResultCard extends ICards {
  title?: string;
}
export const useCards = (gameMode: "standard" | "bg" | "mercenary") => {
  const dispatch = useAppDispatch();
  const { cards, endCard, loading } = useAppSelector((state) => state.Cards);
  const classes = useAppSelector((state) => state.Meta.allMeta?.classes);
  const [fullView, setFullView] = useState<IFullViewState>({
    isActive: false,
    index: null,
  });

  const titleAdd = () => {
    let result: IResultCard[] = [];
    switch (gameMode) {
      case "standard": {
        for (let i = 0; i < cards.length; i++) {
          const title = classes?.find(
            (item) => item.id === cards[i].classId,
          )?.name;
          result.push({ ...cards[i], title });
        }
        return result;
      }
      case "bg": {
        for (let i = 0; i < cards.length; i++) {
          if (cards[i].battlegrounds?.hero) {
            result.push({ ...cards[i], title: "Герои" });
          } else if (cards[i].battlegrounds?.tier) {
            result.push({
              ...cards[i],
              title: `Тир ${cards[i].battlegrounds?.tier}`,
            });
          }
        }
        return result;
      }
      case "mercenary": {
        result = cards.map((item) => {
          return { ...item, title: "Все карты" };
        });
        return result;
      }
    }
  };
  const currentCard = titleAdd();

  const addCards = async () => {
    switch (gameMode) {
      case "standard": {
        dispatch(addLoadingCards({}));
        break;
      }
      case "bg": {
        dispatch(addLoadingBGCards({}));
        break;
      }
      case "mercenary": {
        dispatch(addLoadingMercCards({}));
        break;
      }
      default: {
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
  }, [checkPosition, endCard, throttle]);

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
