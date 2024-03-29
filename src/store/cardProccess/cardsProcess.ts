import { NameSpacesStore } from "@/lib/constants/store";
import { ICards, ICardsModel } from "@/lib/models/cardsModel";
import { StateType } from "@/types/store/state";
import { Action, current, createSlice } from "@reduxjs/toolkit";
import {
  addLoadingBGCards,
  addLoadingCards,
  addLoadingMercCards,
  fetchBGCards,
  fetchCards,
  fetchMercCards,
} from "./asyncThunk/cardsApi";

interface IFilter {
  class: string;
  manaCost: number[];
  set: string;
  search: string;
  type: string;
  minionType: string;
  spellSchool: string;
  rarity: string;
  keyword: string;
  attack: number[];
  health: number[];
}

export interface ICardsInitialState {
  cards: ICards[];
  page: number;
  limit: number;
  cardCount: number | null;
  pageCount: number | null;
  error: boolean;
  loading: boolean;
  endCard: boolean;
  filterCard: IFilter;
}
interface IFilterAction {
  payload: {
    filterType:
      | "class"
      | "manaCost"
      | "set"
      | "search"
      | "type"
      | "minionType"
      | "spellSchool"
      | "rarity"
      | "keyword"
      | "attack"
      | "health";
    value: string | number[];
  };
}
const initialState: ICardsInitialState = {
  cards: [],
  page: 1,
  limit: 100,
  cardCount: null,
  pageCount: null,
  error: false,
  loading: false,
  endCard: false,
  filterCard: {
    class: "",
    manaCost: [],
    set: "",
    search: "",
    type: "",
    minionType: "",
    spellSchool: "",
    rarity: "",
    keyword: "",
    attack: [],
    health: [],
  },
};
console.log(initialState);

const pending = (state: ICardsInitialState, isAdd = false) => {
  if (!isAdd) {
    state.cards = [];
  }
  state.loading = true;
  state.error = false;
};
const fulfilled = (state: ICardsInitialState, payload: ICardsModel) => {
  state.cardCount = payload.cardCount;
  state.pageCount = payload.pageCount;
  state.page = payload.page + 1;
  state.cards = [...state.cards, ...payload.cards];
  state.loading = false;

  if (payload.cards.length < state.limit) {
    state.endCard = true;
  }
};

const rejected = (state: ICardsInitialState) => {
  state.error = true;
  state.loading = false;
};

const AppCards = createSlice({
  name: "cards",
  initialState,
  reducers: {
    resetCard(state) {
      state.cards = [];
      state.page = 1;
      state.cardCount = null;
      state.pageCount = null;
      state.endCard = false;
    },
    setFilter(state, { payload: { filterType: type, value } }: IFilterAction) {
      const isArrayType =
        type === "manaCost" || type === "attack" || type === "health";

      if (Array.isArray(value) && isArrayType) {
        state.filterCard[type] = value;
      } else if (typeof value === "string" && !isArrayType) {
        state.filterCard[type] = value;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state) => {
      pending(state);
    });
    builder.addCase(fetchCards.fulfilled, (state, { payload }) => {
      fulfilled(state, payload);
    });
    builder.addCase(fetchCards.rejected, (state) => {
      rejected(state);
    });
    builder.addCase(addLoadingCards.pending, (state) => {
      pending(state, true);
    });
    builder.addCase(addLoadingCards.fulfilled, (state, { payload }) => {
      fulfilled(state, payload);
    });
    builder.addCase(addLoadingCards.rejected, (state) => {
      rejected(state);
    });
    builder.addCase(fetchBGCards.pending, (state) => {
      pending(state);
    });
    builder.addCase(fetchBGCards.fulfilled, (state, { payload }) => {
      fulfilled(state, payload);
    });
    builder.addCase(fetchBGCards.rejected, (state) => {
      rejected(state);
    });
    builder.addCase(addLoadingBGCards.pending, (state) => {
      pending(state, true);
    });
    builder.addCase(addLoadingBGCards.fulfilled, (state, { payload }) => {
      fulfilled(state, payload);
    });
    builder.addCase(addLoadingBGCards.rejected, (state) => {
      rejected(state);
    });
    builder.addCase(fetchMercCards.pending, (state, { payload }) => {
      pending(state);
    });
    builder.addCase(fetchMercCards.fulfilled, (state, { payload }) => {
      fulfilled(state, payload);
    });
    builder.addCase(fetchMercCards.rejected, (state, { payload }) => {
      rejected(state);
    });
    builder.addCase(addLoadingMercCards.pending, (state, { payload }) => {
      pending(state, true);
    });
    builder.addCase(addLoadingMercCards.fulfilled, (state, { payload }) => {
      fulfilled(state, payload);
    });
    builder.addCase(addLoadingMercCards.rejected, (state, { payload }) => {
      rejected(state);
    });
  },
});

const selectCardsState = (state: StateType) => {
  return [NameSpacesStore.Cards];
};

export const selectCards = (state: StateType) => {
  return selectCardsState(state);
};
export default AppCards;
