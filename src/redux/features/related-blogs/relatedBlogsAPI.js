import axios from "../../../utils/axios";

export const fetchRelatedBlogs = async (id, tags) => {
  const query = tags
    .map((tag) => `tags_like=${tag}`)
    .concat([`id_ne=${id}`])
    .join("&");

  const response = await axios.get(`/blogs?${query}`);
  const blogs = await response?.data;

  return blogs;
};

export default { fetchRelatedBlogs };
