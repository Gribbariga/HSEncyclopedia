import { NameSpacesStore } from "@/lib/constants/store";
import { ICards } from "@/lib/models/cardsModel";
import { StateType } from "@/types/store/state";
import { createSlice } from "@reduxjs/toolkit";
import { fetchCards } from "./asyncThunk/cardsApi";

interface IInitialState {
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
      state.loading = true;
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
