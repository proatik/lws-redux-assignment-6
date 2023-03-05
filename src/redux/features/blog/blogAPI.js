import axios from "../../../utils/axios";

const fetchBlog = async (id) => {
  const response = await axios.get(`/blogs/${id}`);
  const blog = await response?.data;

  return blog;
};

const updateBlog = async (id, updates) => {
  const response = await axios.patch(`/blogs/${id}`, { ...updates });
  const updatedBlog = await response?.data;

  return updatedBlog;
};

export default { fetchBlog, updateBlog };
