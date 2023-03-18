import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { AnyAction, CombinedState, combineReducers } from "redux";
import { NameSpacesStore } from "../lib/constants/store";
import AppCards, { ICardsInitialState } from "./cardProccess/cardsProcess";
import AppMeta, { IMetaInitialState } from "./metaProccess/metaProcess";
import AppTest, { ITestInitialState } from "./testProcess/testProcess";

export const rootReducer = combineReducers({
  [NameSpacesStore.Test]: AppTest.reducer,
  [NameSpacesStore.Cards]: AppCards.reducer,
  [NameSpacesStore.Meta]: AppMeta.reducer,
});

export const masterReducer = (
  state:
    | {
        Test: ITestInitialState;
        Cards: ICardsInitialState;
        Meta: IMetaInitialState;
      }
    | undefined,
  action: AnyAction,
) => {
  if (action.type === HYDRATE) {
    let endCard = false;
    if (action.payload.Cards.length < 150) {
      endCard = true;
    }
    const nextState = {
      ...state,
      [NameSpacesStore.Cards]: {
        cards: action.payload.Cards.cards,
        page: action.payload.Cards.page,
        limit: 100,
        cardCount: action.payload.Cards.cardCount,
        pageCount: action.payload.Cards.pageCount,
        error: false,
        loading: false,
        endCard: endCard,
      },
      [NameSpacesStore.Test]: {
        test: "test124",
      },
      [NameSpacesStore.Meta]: {
        allMeta: action.payload.Meta.allMeta,
        loading: false,
        error: false,
      },
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};
