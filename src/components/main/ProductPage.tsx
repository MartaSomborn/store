import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Button, Container, IconButton, Typography } from "@mui/material";
import Navbar from "../navbar/Navbar";
import CardContext from "./../../context/CardContext";
import FavouriteContext from "../../context/FavouriteContext";
import FavouriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./../../App.css";
import "./Product.css";

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
        height: "100vh",
        minWidth: "100vw",
        background: "#f5ebe0",
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
                  gap: "200px",
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
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",

                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: 500,
                      fontSize: "60px",
                      textAlign: "center",
                      padding: "10px 0",
                    }}
                  >
                    {prod.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: 500,
                      fontSize: "30px",
                      textAlign: "center",
                      padding: "10px 0",
                    }}
                  >
                    {prod.author}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: 500,
                      fontSize: "30px",
                      textAlign: "center",
                      padding: "10px 0",
                    }}
                  >
                    {"Price " + prod.price + " €"}
                  </Typography>

                  <div
                    style={{
                      display: "flex",
                      gap: "30px",
                      paddingTop: "15px",
                      // top: "320px",
                      // position: "absolute",
                    }}
                  >
                    <Button
                      className="button-color"
                      size="medium"
                      variant="contained"
                      sx={{
                        width: "350px",
                        backgroundColor: "#c75146",
                        color: "black",
                        "&:hover": {
                          backgroundColor: "#ad2e24",
                        },
                      }}
                      onClick={() => addToCard(prod.id, prod.name, prod.price)}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                          fontSize: "20px",
                          textAlign: "center",
                        }}
                      >
                        Add to box
                      </Typography>
                    </Button>
                    <IconButton>
                      <FavouriteBorderIcon
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
