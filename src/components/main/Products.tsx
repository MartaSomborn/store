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
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        // height: "100vh",
        minWidth: "90vw",
        marginTop: "200px",
        border: "2 px black solid",
        backgroundColor: "white",
        width: "80%",
        borderRadius: "55px",
        padding: "100px",
        marginBottom: "200px",
      }}
    >
      {products.map((prod) => {
        return <ProductItem product={prod} key={prod.id} />;
      })}
    </Container>
  );
};

export default Products;
