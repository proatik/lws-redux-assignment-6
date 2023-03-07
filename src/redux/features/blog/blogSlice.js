import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "./blogAPI";

import { fetchRelatedBlogs } from "../related-blogs/relatedBlogsSlice";

const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchBlog = createAsyncThunk(
  "blog/fetchBlog",
  async (id, thunkAPI) => {
    const blogs = await api.fetchBlog(id);
    const tags = await blogs.tags;

    thunkAPI.dispatch(fetchRelatedBlogs({ id, tags }));

    return blogs;
  }
);

export const updateBlog = createAsyncThunk(
  "blog/updateBlog",
  async ({ id, updates }) => {
    const updatedBlog = await api.updateBlog(id, updates);
    return updatedBlog;
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state, action) => {
        state.isLoading = true;
        state.blog = {};
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.blog = {};
        state.isError = true;
        state.error = action.error.message;
      });

    builder.addCase(updateBlog.fulfilled, (state, action) => {
      state.blog = action.payload;
    });
  },
});

export default blogSlice.reducer;
