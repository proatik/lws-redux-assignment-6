import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateBlog } from "../../redux/features/blog/blogSlice";
import { reset } from "../../redux/features/related-blogs/relatedBlogsSlice";

import Message from "../ui/Message";

const DetailedBlog = () => {
  const dispatch = useDispatch();
  const { isLoading, blog, isError, error } = useSelector(
    (state) => state.blog
  );

  const { id, title, description, image, tags, likes, isSaved } = blog || {};

  const handleLike = () => {
    dispatch(updateBlog({ id, updates: { likes: likes + 1 } }));
  };

  const handleSave = () => {
    dispatch(updateBlog({ id, updates: { isSaved: !isSaved } }));
  };

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, []);

  return (
    <Fragment>
      {isLoading && <Message>Loading...</Message>}
      {isError && <Message>{error}</Message>}

      {!isLoading && isError && !Object.keys(blog).length && (
        <Message> No Blog Found</Message>
      )}

      {!isLoading && !isError && (
        <main className="post">
          <img
            src={image}
            alt={title}
            className="w-full rounded-md"
            id="lws-megaThumb"
          />
          <div>
            <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
              {title}
            </h1>
            <div className="tags" id="lws-singleTags">
              {tags?.map((tag) => (
                <span key={tag}> #{tag}</span>
              ))}
            </div>
            <div className="btn-group">
              <button
                className="like-btn"
                id="lws-singleLinks"
                onClick={handleLike}
              >
                <i className="fa-regular fa-thumbs-up" /> {likes}
              </button>
              <button
                onClick={handleSave}
                id="lws-singleSavedBtn"
                className={`save-btn ${isSaved && "active"}`}
              >
                <i className="fa-regular fa-bookmark" /> Saved
              </button>
            </div>
            <div className="mt-6">
              <p>{description}</p>
            </div>
          </div>
        </main>
      )}
    </Fragment>
  );
};

export default DetailedBlog;
