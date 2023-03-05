import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortParam: "default",
  filterParam: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeSortParam: (state, action) => {
      state.sortParam = action.payload;
    },
    changeFilterParam: (state, action) => {
      state.filterParam = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { changeSortParam, changeFilterParam } = filterSlice.actions;
