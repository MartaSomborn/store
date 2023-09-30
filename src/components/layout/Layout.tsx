import { Box } from "@material-ui/core";
import Announcement from "../announcement/Announcement";
import Products from "../main/Products";
import Navbar from "../navbar/Navbar";
import Promotions from "../promotions/Promotions";
import Recommended from "../recommended/Recommended";
import "./../../App.css";
import CategoryNavbar from "../navbar/CategoryNavbar";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default Layout;
