import Announcement from "../announcement/Announcement";
import CarouselWrapper from "../carousel/CarouselWrapper";
import Products from "../main/Products";
import Navbar from "../navbar/Navbar";
import Promotions from "../promotions/Promotions";
import Recommended from "../recommended/Recommended";
import "./../../App.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="background_layout">
        <CarouselWrapper />
        <Promotions />
        <Announcement />
        <Recommended />
        <Products />
      </div>
    </>
  );
};

export default Layout;
