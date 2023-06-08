import axios from "axios";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container/Container";
import ProductItem from "../main/ProductItem";
const Price = () => {
  const [priceProducts, setPriceProducts] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  let data: any = [];

  const url = `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`;

  async function fetchData() {
    await axios.get(url).then(
      (response) => {
        const getData = Object.values(response.data);
        console.log("response.data", response.data);
        setProducts([...getData]);
        console.log("getData", getData);
        console.log("products useState", products);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // const filterProductsPrice = () => {
  //   const minPrice = localStorage.getItem("minPrice");
  //   const maxPrice = localStorage.getItem("maxPrice");
  //   if (minPrice) {
  //     const minPriceProducts = data[0].filter(
  //       (item: any) => item.price > minPrice
  //     );
  //     console.log("minPriceProducts", minPriceProducts);
  //     console.log("data", data);
  //   }
  //   if (maxPrice) {
  //     const maxPriceProducts = data[0].filter(
  //       (item: any) => item.price < Number(maxPrice)
  //     );
  //     console.log("maxPriceProducts", maxPriceProducts);
  //     console.log("data", data);
  //     // data.push(maxPriceProducts);
  //     setPriceProducts(maxPriceProducts);
  //     console.log("PriceProducts", priceProducts);
  //     data = [];
  //     for (const value of maxPriceProducts) {
  //       data.push(value);
  //     }
  //     console.log("data", data);
  //     localStorage.setItem("data", data);
  //     const priceData = localStorage.getItem("data");
  //     console.log("priceDataLS", priceData);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  //   filterProductsPrice();
  // }, []);

  useEffect(() => {
    fetchData();
    const minPrice = localStorage.getItem("minPrice");
    const maxPrice = localStorage.getItem("maxPrice");
    if (minPrice) {
      const minPriceProducts = products.filter(
        (item: any) => item.price > minPrice
      );
      console.log("minPriceProducts", minPriceProducts);
      console.log("data", data);
    }
    if (maxPrice) {
      const maxPriceProducts = products.filter(
        (item: any) => item.price < Number(maxPrice)
      );
      console.log("maxPriceProducts", maxPriceProducts);
      console.log("data", data);
      // data.push(maxPriceProducts);
      setPriceProducts(maxPriceProducts);
      console.log("productsPrice with max", priceProducts);
      setProducts(maxPriceProducts);
      console.log("products with max", products);
    }
  }, []);

  console.log("data after useEffect", products);
  console.log("productsPrice with max after useEffect", priceProducts);

  return (
    <Container>
      {priceProducts.length !== 0
        ? priceProducts.map((prod: any) => {
            return <ProductItem product={prod} key={prod.id} />;
          })
        : "Tablice pusta"}
    </Container>
  );
};

export default Price;
