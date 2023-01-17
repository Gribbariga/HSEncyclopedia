import { getCookiesByName } from "@/lib/service/service";
import { BlizzardAxios } from "@/lib/http/BlizzAxios";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import {
  addLoadingCards,
  fetchCards,
} from "@/store/cardProccess/asyncThunk/cardsApi";
import { ICards } from "@/lib/models/cardsModel";

export const useCards = () => {
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
  const endCards = useAppSelector((state) => state.Cards.endCard);
  const sort = () => {};
  const throttle = useCallback((callee: () => void, timeout: number) => {
    let timer: NodeJS.Timeout | null;

    return function perform() {
      if (timer) return;

      timer = setTimeout(() => {
        callee();
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
      }, timeout);
    };
  }, []);
  const checkPosition = useCallback(() => {
    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;

    const scrolled = window.scrollY;

    const threshold = height - screenHeight / 4;

    const position = scrolled + screenHeight;

    if (position >= threshold - 8000) {
      if (!endCards) {
        addCards();
      }
    }
  }, [endCards]);
  const getCards = async () => {
    dispatch(fetchCards({}));
  };
  const addCards = async () => {
    dispatch(addLoadingCards({}));
  };
  useEffect(() => {
    const infinityScroll = throttle(checkPosition, 1000);
    document.addEventListener("scroll", infinityScroll);
    return () => {
      document.removeEventListener("scroll", infinityScroll);
    };
  }, [checkPosition, throttle]);
  useEffect(() => {
    getCards();
  }, []);

  return {
    cards,
  };
};
