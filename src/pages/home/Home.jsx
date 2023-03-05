import Sidebar from "../../components/sidebar/SideBar";
import BlogGrid from "../../components/grid/BlogGrid";

const Home = () => {
  return (
    <section className="wrapper">
      <Sidebar />
      <BlogGrid />
    </section>
  );
};

export default Home;
