import { NameSpacesStore } from "@/lib/constants/store";
import { IAllMeta } from "@/lib/models/metaModel";
import { StateType } from "@/types/store/state";
import { createSlice } from "@reduxjs/toolkit";
import { fetchMeta } from "./asyncThunk/metaProcessApi";

export interface IMetaInitialState {
  allMeta: IAllMeta | null;
  loading: boolean;
  error: boolean;
}

const initialState: IMetaInitialState = {
  allMeta: null,
  loading: false,
  error: false,
};

const AppMeta = createSlice({
  name: "meta",
  initialState,
  reducers: {
    test(state) {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMeta.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMeta.fulfilled, (state, action) => {
      state.loading = false;
      state.allMeta = action.payload;
    });
    builder.addCase(fetchMeta.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
  },
});

const selectTestState = (state: StateType) => {
  return [NameSpacesStore.Test];
};

export const selectTest = (state: StateType) => {
  return selectTestState(state);
};
export default AppMeta;
