import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Button, Container, IconButton, Typography } from "@mui/material";
import Navbar from "../navbar/Navbar";
import CardContext from "./../../context/CardContext";
import FavouriteContext from "../../context/FavouriteContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./../../App.css";

const theme = createTheme({
  typography: {
    fontFamily: "Domine serif",
    fontSize: 30,
  },
});

const themeButton = createTheme({
  typography: {
    fontSize: 20,
  },
});

const themeTitle = createTheme({
  typography: {
    fontSize: 50,
    fontWeightBold: 700,
  },
});

const ProductPage = () => {
  let { id } = useParams();

  const [products, setProducts] = useState<any[]>([]);
  const { addToCard } = useContext(CardContext);
  const { addToFavourite } = useContext(FavouriteContext);

  const url = `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`;

  useEffect(() => {
    axios.get(url).then(
      (response) => {
        const getData = Object.values(response.data);

        setProducts([getData]);
        const biographyProduct = getData.filter((item: any) => item.id == id);
        setProducts(biographyProduct);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        height: "1000px",
        minWidth: "90vw",
        marginTop: "10%",
      }}
    >
      <>
        <Navbar />
        <div className="background_layout">
          {products.map((prod: any) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "400px",
                }}
              >
                <img
                  style={{ height: "600px", width: "500px" }}
                  src={prod.photo}
                />
                <div
                  style={{
                    height: "600px",
                    width: "500px",
                    border: "2px solid blue",
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",

                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <ThemeProvider theme={themeTitle}>
                    <Typography
                      style={{
                        textAlign: "center",
                        marginTop: "40px",
                        fontWeight: "700",
                      }}
                    >
                      {prod.name}
                    </Typography>
                  </ThemeProvider>
                  <ThemeProvider theme={theme}>
                    <Typography
                      style={{ textAlign: "center", marginTop: "40px" }}
                    >
                      {prod.author}
                    </Typography>
                    <Typography
                      style={{
                        textAlign: "center",
                        bottom: "120px",
                        position: "absolute",
                      }}
                    >
                      {prod.price + " €"}
                    </Typography>
                  </ThemeProvider>
                  <div
                    style={{
                      display: "flex",
                      gap: "30px",
                      bottom: "20px",
                      position: "absolute",
                    }}
                  >
                    <Button
                      size="medium"
                      variant="contained"
                      sx={{ width: "350px" }}
                      onClick={() => addToCard(prod.id, prod.name, prod.price)}
                    >
                      {" "}
                      <ThemeProvider theme={themeButton}>
                        <Typography>Add to box</Typography>
                      </ThemeProvider>
                    </Button>
                    <IconButton>
                      <FavoriteBorderIcon
                        sx={{ width: "2em", height: "2em" }}
                        onClick={() =>
                          addToFavourite(prod.id, prod.name, prod.price)
                        }
                      />
                    </IconButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    </Container>
  );
};

export default ProductPage;
