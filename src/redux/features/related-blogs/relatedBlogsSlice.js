import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "./relatedBlogsAPI";

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchRelatedBlogs = createAsyncThunk(
  "relatedBlogs/fetchRelatedBlogs",
  async ({ id, tags }) => {
    const blogs = await api.fetchRelatedBlogs(id, tags);
    return blogs;
  }
);

const relatedBlogsSlice = createSlice({
  name: "relatedBlogs",
  initialState,
  reducers: {
    reset: (state) => {
      state.blogs = [];
      state.isLoading = false;
      state.isError = false;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedBlogs.pending, (state) => {
        state.isLoading = true;
        state.blogs = [];
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.blogs = [];
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default relatedBlogsSlice.reducer;
export const { reset } = relatedBlogsSlice.actions;
