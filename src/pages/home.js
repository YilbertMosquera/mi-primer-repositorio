import Aside from "../components/aside";
import Contents from "../components/content";
import Footer from "../components/footer";
import Header from "../components/header";
import Menu from "../components/menu";

let Home = () => {
  return (
    <>
      <Header />
      <Menu />
      <div className="container mt-5">
        <div className="row">
          <Aside/>
          <Contents />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
