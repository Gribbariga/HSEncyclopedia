import { combineReducers } from "redux";
import { NameSpacesStore } from "../lib/constants/store";
import AppCards from "./cardProccess/cardsProcess";
import AppTest from "./testProcess/testProcess";

export const rootReducer = combineReducers({
  [NameSpacesStore.Test]: AppTest.reducer,
  [NameSpacesStore.Cards]: AppCards.reducer,
});
