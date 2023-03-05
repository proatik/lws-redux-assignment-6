import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateBlog } from "../../redux/features/blog/blogSlice";
import { fetchRelatedBlogs } from "../../redux/features/related-blogs/relatedBlogsSlice";

const DetailedBlog = () => {
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blog);

  const { id, title, description, image, tags, likes, isSaved } = blog;

  const handleLike = () => {
    dispatch(updateBlog({ id, updates: { likes: likes + 1 } }));
  };

  const handleSave = () => {
    dispatch(updateBlog({ id, updates: { isSaved: !isSaved } }));
  };

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ id, tags }));
  }, [id, tags]);

  return (
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
  );
};

export default DetailedBlog;
