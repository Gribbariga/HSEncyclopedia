import { configureStore } from "@reduxjs/toolkit";
import { masterReducer, rootReducer } from "@/store/root-reducer";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
  });

export const wrapper = createWrapper(makeStore, {
  serializeState: (state) => JSON.stringify(state),
  deserializeState: (state) => JSON.parse(state),
});
