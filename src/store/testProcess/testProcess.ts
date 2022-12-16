import { NameSpacesStore } from "@/lib/constants/store";
import { StateType } from "@/types/store/state";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  test: string;
}

const initialState: IInitialState = {
  test: "test124",
};

const AppTest = createSlice({
  name: "test",
  initialState,
  reducers: {
    test(state) {
      state.test = "test125";
    },
  },
  extraReducers: (builder) => {},
});

const selectTestState = (state: StateType) => {
  return [NameSpacesStore.Test];
};

export const selectTest = (state: StateType) => {
  return selectTestState(state);
};
export default AppTest;
