import { combineReducers } from "redux";
import { NameSpacesStore } from "../lib/constants/store";
import AppTest from "./testProcess/testProcess";

export const rootReducer = combineReducers({
  [NameSpacesStore.Test]: AppTest.reducer,
});
