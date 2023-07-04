import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "../main/ProductItem";
import Navbar from "../navbar/Navbar";
import { Box, Typography } from "@mui/material";

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

  const searchResults = "Search results: " + bookname;

  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          marginTop: "130px",
          background: "#f5ebe0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "50px",
            textAlign: "center",
            paddingTop: "100px",
            paddingBottom: "40px",
          }}
        >
          {searchResults}
        </Typography>
        <Box sx={{ display: "flex" }}>
          {filteredNameProducts.map((prod: any) => {
            return <ProductItem product={prod} key={prod.id} />;
          })}
        </Box>
      </Box>
    </>
  );
};
export default FilterBooks;
