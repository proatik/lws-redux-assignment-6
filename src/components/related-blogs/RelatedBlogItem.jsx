import { Link } from "react-router-dom";

const RelatedBlogItem = ({ blog }) => {
  const { id, image, title, tags, createdAt } = blog || {};

  return (
    <div className="space-y-4 related-post-container">
      <div className="card">
        <Link to={`/blogs/${id}`}>
          <img src={image} className="card-image" alt={title} />
        </Link>
        <div className="p-4">
          <Link
            to={`/blogs/${id}`}
            className="text-lg post-title lws-RelatedPostTitle"
          >
            {title}
          </Link>
          <div className="mb-0 tags">
            {tags?.map((tag) => (
              <span key={tag}> #{tag}</span>
            ))}
          </div>
          <p>{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogItem;
