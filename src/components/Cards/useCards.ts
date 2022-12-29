import { getCookiesByName } from "@/lib/service/service";
import { BlizzardAxios } from "@/lib/http/BlizzAxios";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import {
  addLoadingCards,
  fetchCards,
} from "@/store/cardProccess/asyncThunk/cardsApi";
import { ICards } from "@/lib/models/cardsModel";

export const useCards = () => {
  // const [cards, setCards] = useState<ICards[]>([]);
  const dispatch = useAppDispatch();
  enum Class {
    "Мертвый рыцарь" = 1,
    "Охотник на демонов" = 13,
    "Друид" = 2,
    "Охотник" = 3,
    "Маг" = 4,
    "Паладин" = 5,
    "Жрец" = 6,
    "Разбойник" = 7,
    "Шаман" = 8,
    "Чернокнижник" = 9,
    "Воин" = 10,
    "Общие" = 12,
    lenght = 12,
  }
  const cards = useAppSelector((state) => state.Cards.cards);
  const sort = () => {};
  const throttle = (callee: () => void, timeout: number) => {
    let timer = null;

    return function perform() {
      if (timer) return;

      timer = setTimeout(() => {
        callee();

        clearTimeout(timer);
        timer = null;
      }, timeout);
    };
  };
  const checkPosition = () => {
    console.log(1);
    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;

    const scrolled = window.scrollY;

    const threshold = height - screenHeight / 4;

    const position = scrolled + screenHeight;

    if (position >= threshold) {
      console.log("good");
      addCards();
    }
  };
  const getCards = async () => {
    dispatch(fetchCards({}));
  };
  const addCards = async () => {
    dispatch(addLoadingCards({}));
  };
  useEffect(() => {
    document.addEventListener("scroll", throttle(checkPosition, 250));
    getCards();
    console.log(2);
    // console.log(selector);
    // const a = useAppSelector((state) => state.Cards.cards);
    // setCards();
  }, []);

  return {
    cards,
  };
};
