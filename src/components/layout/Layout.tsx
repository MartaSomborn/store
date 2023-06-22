import Announcement from "../announcement/Announcement";
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
        <Promotions />
        <Announcement />
        <Recommended />
        <Products />
      </div>
    </>
  );
};

export default Layout;
