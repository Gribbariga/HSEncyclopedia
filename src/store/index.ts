import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@/store/root-reducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
});
