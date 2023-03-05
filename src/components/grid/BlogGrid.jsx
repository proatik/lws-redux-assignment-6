import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBlogs } from "../../redux/features/blogs/blogsSlice";

import BlogGridItem from "./BlogGridItem";

const BlogGrid = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);
  const { sortParam, filterParam } = useSelector((state) => state.filter);

  const sortBlogs = (a, b) => {
    if (sortParam === "most_liked") {
      return b.likes - a.likes;
    }
    if (sortParam === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    return 0;
  };

  const filterBlogs = (blog) => {
    return filterParam === "saved" ? blog.isSaved : blog;
  };

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <main className="post-container" id="lws-postContainer">
      {blogs
        .filter(filterBlogs)
        .sort(sortBlogs)
        .map((blog) => (
          <BlogGridItem key={blog.id} blog={blog} />
        ))}
    </main>
  );
};

export default BlogGrid;
