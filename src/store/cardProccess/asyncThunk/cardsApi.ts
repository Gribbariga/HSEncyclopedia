import { getCookiesByName } from "@/lib/service/service";
import { BlizzardAxios } from "@/lib/http/BlizzAxios";
import { ICardsModel } from "@/lib/models/cardsModel";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface IFetchCards {
  locale?: string;
  set?: string;
  class?: string;
  manaCost?: number;
  attack?: number;
  health?: number;
  collectible?: number;
  rarity?: string;
  type?: string;
  minionType?: string;
  keyword?: string;
  textFilter?: string;
  gameMode?: string;
  spellSchool?: string;
  page?: number;
  pageSize?: number;
  sort?: string;
  order?: string;
}

export const fetchCards = createAsyncThunk<ICardsModel, IFetchCards>(
  "cards/",
  async ({ page }) => {
    const res = await BlizzardAxios.get(
      `cards?locale=ru_RU&access_token=${getCookiesByName("token")}`,
    );
    return await res.data;
  },
);
