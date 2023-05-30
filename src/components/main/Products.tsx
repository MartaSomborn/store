import { useEffect, useLayoutEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Container from "@mui/material/Container/Container";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);

  const url = `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`;

  useEffect(() => {
    axios.get(url).then(
      (response) => {
        const getData = Object.values(response.data);
        setProducts(getData);
        console.log("martas products", products);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <Container
      sx={{
        backgroundColor: "#e2e4e5", //"#006eaa",
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        height: "1000px",
        minWidth: "90vw",
        marginTop: "10%",
      }}
    >
      {products.map((prod) => {
        return <ProductItem product={prod} key={prod.id} />;
      })}
    </Container>
  );
};

export default Products;
