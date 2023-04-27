import { useState } from "react";
import ProductItem from "./ProductItem";
import Container from "@mui/material/Container/Container";

const Products = () => {
  const [product, setProduct] = useState([
    { id: 1, name: "Book1", price: "10" },
    { id: 2, name: "Book2", price: "50" },
    { id: 3, name: "Book3", price: "25" },
  ]);
  return (
    <Container
      sx={{
        backgroundColor: "gray",
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        height: "1000px",
        width: "100%",
        marginTop: "10%",
      }}
    >
      {product.map((prod) => {
        return <ProductItem product={prod} key={prod.id} />;
      })}
    </Container>
  );
};

export default Products;
