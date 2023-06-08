import axios from "axios";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container/Container";
import ProductItem from "../main/ProductItem";

const JobsCareers = () => {
  const [products, setProducts] = useState<any[]>([]);

  const url = `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`;

  useEffect(() => {
    axios.get(url).then(
      (response) => {
        const getData = Object.values(response.data);
        console.log("response.data", response.data);
        setProducts([getData]);
        console.log("getData", getData);
        console.log("computer products", products);

        const jobsCareers = getData.filter(
          (item: any) => item.Category === "Job & Careers"
        );
        setProducts(jobsCareers);
        console.log("jobsCareers", jobsCareers);
        console.log("products 2", products);
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

export default JobsCareers;
