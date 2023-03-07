import { useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchBlog } from "../../redux/features/blog/blogSlice";

import GoHome from "../../components/ui/GoHome";
import DetailedBlog from "../../components/detailed-blog/DetailedBlog";
import RelatedBlogs from "../../components/related-blogs/RelatedBlogs";

const Blog = () => {
  const dispatch = useDispatch();
  const { blogId } = useParams();

  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [blogId]);

  return (
    <Fragment>
      <GoHome />
      <section className="post-page-container">
        <DetailedBlog />
        <RelatedBlogs />
      </section>
    </Fragment>
  );
};

export default Blog;
