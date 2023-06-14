import { getCookiesByName } from "@/lib/service/service";
import { BlizzardAxios } from "@/lib/http/BlizzAxios";
import { ICardsModel } from "@/lib/models/cardsModel";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICardsInitialState } from "../cardsProcess";
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

interface IArgsApi {
  token?: string;
  customLimit?: number;
}

const baseURL = `cards?locale=ru_RU&access_token=${
  getCookiesByName("token") || ""
}`;
console.log(getCookiesByName("token"));
export const fetchCards = createAsyncThunk<
  ICardsModel,
  IArgsApi,
  { state: StateType }
>("cards/", async ({ token, customLimit }, { getState }) => {
  const { limit, filterCard } = getState().Cards;
  const sort = "manaCost:asc,name:asc,classes:asc,groupByClass:asc";
  const res = await BlizzardAxios.get(
    `${baseURL}${token || ""}&page=1&class=${filterCard.class}&pageSize=${
      customLimit || limit
    }&set=${filterCard.set}&sort=${sort}${
      filterCard.search && `&textFilter=${filterCard.search}`
    }`,
  );

  return await res.data;
});

export const addLoadingCards = createAsyncThunk<
  ICardsModel,
  IArgsApi,
  { state: StateType }
>("cards/add", async ({ customLimit, token }, { getState }) => {
  console.log(baseURL);
  const { page, limit, filterCard } = getState().Cards;
  const sort = "manaCost:asc,name:asc,classes:asc,groupByClass:asc";
  const res = await BlizzardAxios.get(
    `${baseURL}&page=${page}&pageSize=${customLimit || limit}&class=${
      filterCard.class
    }&set=${filterCard.set}&sort=${sort}${
      filterCard.search && `&textFilter=${filterCard.search}`
    }`,
  );
  return await res.data;
});

export const fetchBGCards = createAsyncThunk<
  ICardsModel,
  IArgsApi,
  { state: StateType }
>("BGcards/", async ({ token, customLimit }, { getState }) => {
  const sort = "tier:asc;name:asc";
  const { limit } = getState().Cards;
  const res = await BlizzardAxios.get(
    `${baseURL}${token || ""}&gameMode=battlegrounds&page=1&pageSize=${
      customLimit || limit
    }&sort=${sort}`,
  );
  return res.data;
});

export const addLoadingBGCards = createAsyncThunk<
  ICardsModel,
  IArgsApi,
  { state: StateType }
>("BGcards/add", async ({ customLimit, token }, { getState }) => {
  const sort = "tier:asc;name:asc";
  const { page } = getState().Cards;
  const { limit } = getState().Cards;
  const res = await BlizzardAxios.get(
    `${baseURL}&gameMode=battlegrounds&page=${page}&pageSize=${
      customLimit || limit
    }&sort=${sort}`,
  );

  return res.data;
});
export const fetchMercCards = createAsyncThunk<
  ICardsModel,
  IArgsApi,
  { state: StateType }
>("MercCards/", async ({ customLimit, token }, { getState }) => {
  const sort = "tier:asc;name:asc";

  const res = await BlizzardAxios.get(
    `${baseURL}${token || ""}&gameMode=mercenaries&page=1`,
  );
  return res.data;
});

export const addLoadingMercCards = createAsyncThunk<
  ICardsModel,
  IArgsApi,
  { state: StateType }
>("MercCards/add", async ({ customLimit, token }, { getState }) => {
  const sort = "tier:asc;name:asc";
  const { page } = getState().Cards;

  const res = await BlizzardAxios.get(
    `${baseURL}&gameMode=mercenaries&page=${page}`,
  );

  return res.data;
});
