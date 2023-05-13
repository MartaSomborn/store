import { useEffect, useLayoutEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Container from "@mui/material/Container/Container";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);

  const url = `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`;

  // async function fetch() {
  //   const res: any = await axios.get(url).then(
  //     (response) => {
  //       setProduct(response.data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  //   //  setProducts(res);
  //   console.log("products", products);
  // }

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
    // fetch();
  }, []);

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
      {products.map((prod) => {
        return <ProductItem product={prod} key={prod.id} />;
      })}
    </Container>
  );
};

export default Products;
