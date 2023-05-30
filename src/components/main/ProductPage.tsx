import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import axios from "axios";
import ProductItem from "./ProductItem";
import { Container, Typography } from "@mui/material";
import { devNull } from "os";

const ProductPage = () => {
  let { id } = useParams();

  const [products, setProducts] = useState<any[]>([]);
  const [myProducts, setMyProducts] = useState<any[] | null>([]);
  const [product, setProduct] = useState<any[]>([]);

  //   const url = `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`;

  //   useEffect(() => {
  //     axios.get(url).then(
  //       (response) => {
  //         const getData = Object.values(response.data);
  //         setProducts(getData);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   }, []);

  //   useEffect(() => {
  //     if (products) {
  //       const existItem = products.filter((prod) => prod.id === id);
  //       console.log("existItem", existItem);

  //       //   setProducts(existItem);
  //     }
  //   }, [products]);

  //   console.log("products", products);

  // async function fetch() {
  //   const res = await axios.get(
  //     `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`
  //   );

  //   setProducts([res.data]);

  //   console.log("ProdPage", products);
  // }

  // useEffect(() => {
  //   fetch();
  // }, []);

  // useEffect(
  //   () => {
  //     setMyProducts(products.length > 0 ? Object.values(products[0]) : null);

  //     console.log("myProduct", myProducts);

  //     if (myProducts) {
  //       const arr = myProducts.filter((product: any) => product.id == id);

  //       console.log("arr", arr);

  //       const product = arr[0];

  //       setProducts([product]);

  //       console.log(product);
  //     }
  //   }
  //   //[products]
  // );

  const url = `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`;

  useEffect(() => {
    axios.get(url).then(
      (response) => {
        const getData = Object.values(response.data);
        console.log("response.data", response.data);
        setProducts([getData]);
        console.log("getData", getData);
        console.log("biography products", products);
        const biographyProduct = getData.filter((item: any) => item.id == id);
        setProducts(biographyProduct);
        console.log("biographyProduct", biographyProduct);
        console.log("products 2", products);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  console.log("products", products);

  return (
    <Container
      sx={{
        backgroundColor: "gray",
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        height: "1000px",
        minWidth: "90vw",
        marginTop: "10%",
      }}
    >
      {products
        ? products.map((prod) => {
            return <ProductItem product={prod} key={prod.id} />;
          })
        : null}
    </Container>
  );
};

export default ProductPage;
