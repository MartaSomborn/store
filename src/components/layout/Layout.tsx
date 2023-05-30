import FiltrCategory from "../filter/FiltrCategory";
import Products from "../main/Products";
import Navbar from "../navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <FiltrCategory />
      <Products />
    </div>
  );
};

export default Layout;
