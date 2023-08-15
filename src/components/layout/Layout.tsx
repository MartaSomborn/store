import Slider from "../carousel/Slider";
import Announcement from "../announcement/Announcement";
// import Carousel from "../carousel/Carousel";
// import CarouselWrapper from "../carousel/CarouselWrapper";
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
        <Slider />
        <Promotions />
        <Announcement />
        <Recommended />
        <Products />
      </div>
    </>
  );
};

export default Layout;
