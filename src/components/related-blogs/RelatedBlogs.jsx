import { useSelector } from "react-redux";

import Message from "../ui/Message";
import RelatedBlogItem from "./RelatedBlogItem";

const RelatedBlogs = () => {
  const { isLoading, blogs, isError, error } = useSelector(
    (state) => state.relatedBlogs
  );

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
        {isLoading && <Message>Loading...</Message>}
        {isError && <Message>{error}</Message>}

        {!isLoading && !isError && !blogs.length && (
          <Message> No Related Blog Found</Message>
        )}

        {!isLoading &&
          !isError &&
          blogs.map((blog) => <RelatedBlogItem key={blog.id} blog={blog} />)}
      </div>
    </aside>
  );
};

export default RelatedBlogs;
