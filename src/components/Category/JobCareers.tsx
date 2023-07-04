import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "../main/ProductItem";
import Navbar from "../navbar/Navbar";
import { Box } from "@mui/material";

const JobsCareers = () => {
  const [products, setProducts] = useState<any[]>([]);

  const url = `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`;

  useEffect(() => {
    axios.get(url).then(
      (response) => {
        const getData = Object.values(response.data);
        setProducts([getData]);

        const jobsCareers = getData.filter(
          (item: any) => item.Category === "Job & Careers"
        );
        setProducts(jobsCareers);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "150px",
          background: "#f5ebe0",
        }}
      >
        {products.map((prod) => {
          return <ProductItem product={prod} key={prod.id} />;
        })}
      </Box>
    </>
  );
};

export default JobsCareers;
