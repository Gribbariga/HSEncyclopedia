import { BlizzardAxios } from "@/lib/http/BlizzAxios";
import { ICards } from "@/lib/models/cardsModel";
import { getCookiesByName } from "@/lib/service/service";
import { useEffect, useState } from "react";

export const useTriplet = (upgradeId: number) => {
  const [goldCard, setGoldCard] = useState<ICards>();

  const fetchTriplet = async () => {
    const res = await (
      await BlizzardAxios.get(
        `cards?locale=ru_RU&access_token=${getCookiesByName(
          "token",
        )}&gameMode=battlegrounds&ids=${upgradeId}`,
      )
    ).data.cards[0];
    setGoldCard(res);
  };

  useEffect(() => {
    fetchTriplet();
  }, [upgradeId]);

  return { goldCard };
};
