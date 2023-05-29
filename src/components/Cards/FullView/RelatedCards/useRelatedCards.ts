import { BlizzardAxios } from "@/lib/http/BlizzAxios";
import { ICards } from "@/lib/models/cardsModel";
import { getCookiesByName } from "@/lib/service/service";
import { useEffect, useState } from "react";

export const useRelatedCards = (id: number[]) => {
  const [RelatedCardsArr, setRelatedCardsArr] = useState<ICards[]>([]);

  const fetchRelatedCards = async () => {
    let ids = "";
    for (let i = 0; i < id.length; i++) {
      ids += `${id[i]},`;
    }
    const res = await BlizzardAxios.get(
      `cards?locale=ru_RU&access_token=${getCookiesByName(
        "token",
      )}&gameMode=battlegrounds&ids=${ids}`,
    ).then((data) => data);
    setRelatedCardsArr(res.data.cards);
  };

  useEffect(() => {
    fetchRelatedCards();
  }, [id]);

  return { RelatedCardsArr };
};
