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
      <div
        style={{
          paddingBottom: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Promotions />
        <Announcement />
        <Recommended />
        <Products />
      </div>
    </>
  );
};

export default Layout;
