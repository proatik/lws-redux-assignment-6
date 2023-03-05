import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";

const MainLayout = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:blogId" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default MainLayout;
