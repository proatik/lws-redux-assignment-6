import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "./blogsAPI";

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const blogs = await api.fetchBlogs();
  return blogs;
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.blogs = [];
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default blogsSlice.reducer;
