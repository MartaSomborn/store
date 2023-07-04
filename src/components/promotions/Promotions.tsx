import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "../main/ProductItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Promotions = () => {
  const [products, setProducts] = useState<any[]>([]);

  const url = `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`;

  useEffect(() => {
    axios.get(url).then(
      (response) => {
        const getData = Object.values(response.data);

        setProducts([getData]);

        const promotionsProduct = getData.filter(
          (item: any) => item.promotion === true
        );
        setProducts(promotionsProduct);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <Box
      sx={{
        marginTop: "200px",
        backgroundColor: "white",
        width: "80%",
        borderRadius: "55px",
        padding: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Typography
        sx={{ fontFamily: "Montserrat", fontWeight: 500, fontSize: "60px" }}
      >
        Promotions
      </Typography>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {products.map((prod) => {
          return <ProductItem product={prod} key={prod.id} />;
        })}
      </div>
    </Box>
  );
};

export default Promotions;
