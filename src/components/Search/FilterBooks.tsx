import axios from "axios";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Container from "@mui/material/Container/Container";
import ProductItem from "../main/ProductItem";

const FilterBooks = () => {
  const [filteredNameProducts, setFilteredNameProducts] = useState<any>([]);
  let { bookname } = useParams();
  console.log("useParams", bookname);

  const url = `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`;
  const fetchData = () => {
    axios.get(url).then(
      (response) => {
        const getData = Object.values(response.data);
        setFilteredNameProducts([...getData]);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (filteredNameProducts.length > 0) {
      console.log("filteredNameProducts", filteredNameProducts);
      const getTheName = filteredNameProducts.filter((item: any) =>
        item.name.toLowerCase().includes(bookname?.toLowerCase())
      );

      console.log("getTheName", getTheName);
      setFilteredNameProducts(getTheName);
    }
  }, [filteredNameProducts]);

  return (
    <Container>
      {filteredNameProducts.map((prod: any) => {
        return <ProductItem product={prod} key={prod.id} />;
      })}
    </Container>
  );
};
export default FilterBooks;
