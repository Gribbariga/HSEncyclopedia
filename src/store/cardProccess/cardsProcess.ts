import { NameSpacesStore } from "@/lib/constants/store";
import { ICards } from "@/lib/models/cardsModel";
import { StateType } from "@/types/store/state";
import { createSlice } from "@reduxjs/toolkit";
import {
  addLoadingBGCards,
  addLoadingCards,
  fetchBGCards,
  fetchCards,
} from "./asyncThunk/cardsApi";

export interface IInitialState {
  cards: ICards[];
  page: number;
  limit: number;
  cardCount: number | null;
  pageCount: number | null;
  error: boolean;
  loading: boolean;
  endCard: boolean;
}

const initialState: IInitialState = {
  cards: [],
  page: 1,
  limit: 250,
  cardCount: null,
  pageCount: null,
  error: false,
  loading: false,
  endCard: false,
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state) => {
      state.cards = [];
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchCards.fulfilled, (state, { payload }) => {
      state.cardCount = payload.cardCount;
      state.pageCount = payload.pageCount;
      state.page = payload.page + 1;
      state.cards = payload.cards;
      state.loading = false;
      if (payload.cards.length < state.limit) {
        state.endCard = true;
      }
    });
    builder.addCase(fetchCards.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(addLoadingCards.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addLoadingCards.fulfilled, (state, { payload }) => {
      state.page += 1;
      state.cards = [...state.cards, ...payload.cards];
      state.loading = false;
      if (payload.cards.length < state.limit) {
        state.endCard = true;
      }
    });
    builder.addCase(addLoadingCards.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(fetchBGCards.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.cards = [];
    });
    builder.addCase(fetchBGCards.fulfilled, (state, { payload }) => {
      state.cards = payload.cards;
      state.cardCount = payload.cardCount;
      state.pageCount = payload.pageCount;
      state.page += 1;
      state.loading = false;
    });
    builder.addCase(fetchBGCards.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(addLoadingBGCards.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(addLoadingBGCards.fulfilled, (state, { payload }) => {
      state.cards = [...state.cards, ...payload.cards];
      state.page += 1;
      if (payload.cards.length < state.limit) {
        state.endCard = true;
      }
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
