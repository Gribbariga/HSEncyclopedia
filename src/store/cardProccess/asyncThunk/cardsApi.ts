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
const baseURL = `cards?locale=ru_RU&access_token=${getCookiesByName("token")}`;

export const fetchCards = createAsyncThunk<
  ICardsModel,
  IFetchCards,
  { state: StateType }
>("cards/", async ({}, { getState }) => {
  const { limit } = getState().Cards;
  const sort = "manaCost:asc,name:asc,classes:asc,groupByClass:asc";
  const res = await BlizzardAxios.get(
    `${baseURL}&page=1&class=all&pageSize=${limit}&set=standard&sort=${sort}`,
  );
  return await res.data;
});

export const addLoadingCards = createAsyncThunk<
  ICardsModel,
  IFetchCards,
  { state: StateType }
>("cards/add", async ({}, { getState }) => {
  const { page, limit } = getState().Cards;
  const sort = "manaCost:asc,name:asc,classes:asc,groupByClass:asc";
  const res = await BlizzardAxios.get(
    `${baseURL}&page=${page}&pageSize=${limit}&set=standard&sort=${sort}`,
  );
  return await res.data;
});

export const fetchBGCards = createAsyncThunk<
  ICardsModel,
  IFetchCards,
  { state: StateType }
>("BGcards/", async ({}, { getState }) => {
  const sort = "tier:asc;name:asc";
  const res = await BlizzardAxios.get(
    `${baseURL}&gameMode=battlegrounds&page=1&pageSize=${250}&sort=${sort}`,
  );

  return res.data;
});

export const addLoadingBGCards = createAsyncThunk<
  ICardsModel,
  IFetchCards,
  { state: StateType }
>("BGcards/add", async ({}, { getState }) => {
  const sort = "tier:asc;name:asc";
  const { page } = getState().Cards;

  const res = await BlizzardAxios.get(
    `${baseURL}&gameMode=battlegrounds&page=${page}&pageSize=${250}&sort=${sort}`,
  );

  return res.data;
});
export const fetchMercCards = createAsyncThunk<
  ICardsModel,
  IFetchCards,
  { state: StateType }
>("MercCards/", async ({}, { getState }) => {
  const sort = "tier:asc;name:asc";
  const res = await BlizzardAxios.get(`${baseURL}&gameMode=mercenaries&page=1`);

  return res.data;
});

export const addLoadingMercCards = createAsyncThunk<
  ICardsModel,
  IFetchCards,
  { state: StateType }
>("MercCards/add", async ({}, { getState }) => {
  const sort = "tier:asc;name:asc";
  const { page } = getState().Cards;

  const res = await BlizzardAxios.get(
    `${baseURL}&gameMode=mercenaries&page=${page}`,
  );

  return res.data;
});
