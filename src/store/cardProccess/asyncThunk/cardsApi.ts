import { getCookiesByName } from "@/lib/service/service";
import { BlizzardAxios } from "@/lib/http/BlizzAxios";
import { ICardsModel } from "@/lib/models/cardsModel";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IInitialState } from "../cardsProcess";
import { resourceLimits } from "worker_threads";
import { StateType } from "@/types/store/state";

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

const baseURL = `cards?locale=ru_RU&access_token=`;

export const fetchCards = createAsyncThunk<ICardsModel, IFetchCards>(
  "cards/",
  async () => {
    const sort = "manaCost:asc,name:asc,classes:asc,groupByClass:asc";
    const res = await BlizzardAxios.get(
      `${baseURL}${getCookiesByName(
        "token",
      )}&page=1&class=all&pageSize=250&set=standard&sort=${sort}`,
    );
    return await res.data;
  },
);

export const addLoadingCards = createAsyncThunk<
  ICardsModel,
  IFetchCards,
  { state: StateType }
>("cards/add", async ({}, { getState }) => {
  const { page } = getState().Cards;
  console.log(page);
  console.log(getState(), "api");
  const res = await BlizzardAxios.get(
    `${baseURL}${getCookiesByName("token")}&page=${page}`,
  );
  return await res.data;
});
