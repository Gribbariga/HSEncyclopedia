import { NameSpacesStore } from "@/lib/constants/store";
import { ICards } from "@/lib/models/cardsModel";
import { StateType } from "@/types/store/state";
import { createSlice } from "@reduxjs/toolkit";
import { addLoadingCards, fetchCards } from "./asyncThunk/cardsApi";

export interface IInitialState {
  cards: ICards[];
  page: number;
  limit: number;
  cardCount: number | null;
  pageCount: number | null;
  error: boolean;
  loading: boolean;
}

const initialState: IInitialState = {
  cards: [],
  page: 1,
  limit: 250,
  cardCount: null,
  pageCount: null,
  error: false,
  loading: false,
};

const AppCards = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state) => {
      state.cards = [];
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cardCount = action.payload.cardCount;
      state.pageCount = action.payload.pageCount;
      state.page = action.payload.page;
      state.cards = action.payload.cards;
      state.loading = false;
    });
    builder.addCase(fetchCards.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(addLoadingCards.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addLoadingCards.fulfilled, (state, action) => {
      state.page += 1;
      state.cards = [...state.cards, ...action.payload.cards];
      state.loading = false;
    });
    builder.addCase(addLoadingCards.rejected, (state) => {
      state.error = true;
      state.loading = false;
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
