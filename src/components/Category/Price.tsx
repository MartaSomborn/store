import axios from "axios";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container/Container";
import ProductItem from "../main/ProductItem";
import TextField from "@mui/material/TextField";

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

  // localStorage.setItem("minPrice", String(minPrice));
  // localStorage.setItem("maxPrice", String(maxPrice));

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
      <Container>
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
      </Container>
    </>
  );
};

export default Price;
