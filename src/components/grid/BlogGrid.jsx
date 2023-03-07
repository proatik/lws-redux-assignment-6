import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBlogs } from "../../redux/features/blogs/blogsSlice";

import Message from "../ui/Message";
import BlogGridItem from "./BlogGridItem";

const BlogGrid = () => {
  const dispatch = useDispatch();
  const { isLoading, blogs, isError, error } = useSelector(
    (state) => state.blogs
  );
  const { sortParam, filterParam } = useSelector((state) => state.filter);

  const sortBlogs = (a, b) => {
    switch (sortParam) {
      case "most_liked":
        return b.likes - a.likes;
      case "newest":
        return new Date(b.createdAt) - new Date(a.createdAt);
      default:
        return 0;
    }
  };

  const filterBlogs = (blog) => {
    return filterParam === "saved" ? blog.isSaved : blog;
  };

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <main className="post-container" id="lws-postContainer">
      {isLoading && <Message>Loading...</Message>}
      {isError && <Message>{error}</Message>}

      {!isLoading && !isError && blogs.length === 0 && (
        <Message>No Blog Found</Message>
      )}

      {!isLoading &&
        !isError &&
        blogs
          .filter(filterBlogs)
          .sort(sortBlogs)
          .map((blog) => <BlogGridItem key={blog.id} blog={blog} />)}
    </main>
  );
};

export default BlogGrid;
