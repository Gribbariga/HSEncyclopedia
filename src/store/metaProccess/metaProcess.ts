import { NameSpacesStore } from "@/lib/constants/store";
import { StateType } from "@/types/store/state";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {}

const initialState: IInitialState = {};

const AppMeta = createSlice({
  name: "meta",
  initialState,
  reducers: {
    test(state) {},
  },
  extraReducers: (builder) => {},
});

const selectTestState = (state: StateType) => {
  return [NameSpacesStore.Test];
};

export const selectTest = (state: StateType) => {
  return selectTestState(state);
};
export default AppMeta;
