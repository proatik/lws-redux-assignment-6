import { useSelector } from "react-redux";

import RelatedBlogItem from "./RelatedBlogItem";

const RelatedBlogs = () => {
  const { blogs } = useSelector((state) => state.relatedBlogs);

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
        {blogs.map((blog) => (
          <RelatedBlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </aside>
  );
};

export default RelatedBlogs;
