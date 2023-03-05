import axios from "../../../utils/axios";

export const fetchBlogs = async () => {
  const response = await axios.get("/blogs");
  const blogs = await response?.data;

  return blogs;
};

export default { fetchBlogs };
