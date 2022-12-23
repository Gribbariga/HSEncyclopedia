import { getCookiesByName } from "@/lib/service/service";
import { BlizzardAxios } from "@/lib/http/BlizzAxios";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { fetchCards } from "@/store/cardProccess/asyncThunk/cardsApi";
import { ICards } from "@/lib/models/cardsModel";

export const useCards = () => {
  // const [cards, setCards] = useState<ICards[]>([]);
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.Cards.cards);
  const getCards = async () => {
    dispatch(fetchCards({}));
  };
  useEffect(() => {
    getCards();
    // console.log(selector);
    // const a = useAppSelector((state) => state.Cards.cards);

    // setCards();
  }, []);

  return {
    cards,
  };
};
