import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "../main/ProductItem";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Navbar from "../navbar/Navbar";

const Price = () => {
  const [priceProducts, setPriceProducts] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);

  const url = `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`;

  const fetchData = () => {
    axios.get(url).then(
      (response: any) => {
        const getData = Object.values(response.data);
        setProducts([...getData]);
      },
      (error: any) => {
        console.log(error);
      }
    );
  };

  const filterPrice = () => {
    if (products.length > 0) {
      const minPrice = localStorage.getItem("minPrice");
      const maxPrice = localStorage.getItem("maxPrice");
      let maxPriceProducts = [];
      let minPriceProducts = [];
      if (minPrice) {
        minPriceProducts = products.filter(
          (item: any) => item.price > minPrice
        );
        setPriceProducts(minPriceProducts);
      }
      if (maxPrice) {
        maxPriceProducts = products.filter(
          (item: any) => item.price < Number(maxPrice)
        );
        setPriceProducts(maxPriceProducts);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterPrice();
  }, [products]);

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
        <TextField
          id="standard-basic"
          label="Min price"
          variant="standard"
          onChange={(e: any) => {
            setMinPrice(e.target.value);
          }}
          value={minPrice}
        />
        <TextField
          id="standard-basic"
          label="Max price"
          variant="standard"
          onChange={(e: any) => {
            setMaxPrice(e.target.value);
          }}
          value={maxPrice}
        />
        {priceProducts.length !== 0
          ? priceProducts.map((prod: any) => {
              return <ProductItem product={prod} key={prod.id} />;
            })
          : "Tablice pusta"}
      </Box>
    </>
  );
};

export default Price;
