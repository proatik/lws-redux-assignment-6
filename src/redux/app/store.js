import { configureStore } from "@reduxjs/toolkit";

import blogReducer from "../features/blog/blogSlice";
import blogsReducer from "../features/blogs/blogsSlice";
import filterReducer from "../features/filter/filterSlice";
import relatedBlogsReducer from "../features/related-blogs/relatedBlogsSlice";

const store = configureStore({
  reducer: {
    blog: blogReducer,
    blogs: blogsReducer,
    filter: filterReducer,
    relatedBlogs: relatedBlogsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat();
  },
});

export default store;
