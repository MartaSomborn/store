import axios from "axios";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container/Container";
import ProductItem from "../main/ProductItem";

const Biography = () => {
  const [products, setProducts] = useState<any[]>([]);

  const url = `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`;

  useEffect(() => {
    axios.get(url).then(
      (response) => {
        const getData = Object.values(response.data);

        setProducts([getData]);

        const biographyProduct = getData.filter(
          (item: any) => item.Category === "Biography"
        );
        setProducts(biographyProduct);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <Container>
      {products.map((prod) => {
        return <ProductItem product={prod} key={prod.id} />;
      })}
    </Container>
  );
};

export default Biography;
