import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Button, Container, IconButton, Typography, Box } from "@mui/material";
import Navbar from "../navbar/Navbar";
import CardContext from "./../../context/CardContext";
import FavouriteContext from "../../context/FavouriteContext";
import FavouriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./../../App.css";
import "./Product.css";
import useFetchFeatured from "../customHook/useEffectFeatured";
import ButtonNavigation from "./ButtonNavigation";
import { IProductTypes } from "./ProductItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductPage = () => {
  let { id } = useParams();

  const { addToCard } = useContext(CardContext);
  const { addToFavourite } = useContext(FavouriteContext);

  const url: string = `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`;

  const { products } = useFetchFeatured(url, id);

  return (
    <Container
      sx={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        minWidth: "100vw",
      }}
    >
      <>
        <Navbar />

        <Box
          sx={{
            marginTop: {
              xl: "90%",
              lg: "90%",
              md: "90%",
              sm: "90%",
              xs: "90%",
            },
            // paddingTop: "140px",
            width: {
              xl: "80vw",
              lg: "80vw",
              md: "80vw",
              sm: "90vw",
              xs: "95vw",
            },
          }}
        >
          {products.map((prod: IProductTypes) => {
            return (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                    gap: "20px",
                  }}
                >
                  <img
                    style={{ height: "600px", width: "500px" }}
                    src={prod.photo}
                  />
                  <Box
                    sx={{
                      height: {
                        xl: "400px",
                        lg: "400px",
                        md: "300px",
                        sm: "300px",
                        xs: "300px",
                      },
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
                        fontSize: {
                          xl: "50px",
                          lg: "50px",
                          md: "30px",
                          sm: "30px",
                          xs: "30px",
                        },
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
                        fontSize: {
                          xl: "30px",
                          lg: "30px",
                          md: "20px",
                          sm: "20px",
                          xs: "20px",
                        },
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
                        fontSize: {
                          xl: "30px",
                          lg: "30px",
                          md: "20px",
                          sm: "20px",
                          xs: "20px",
                        },
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
                      }}
                    >
                      <Button
                        className="button-color"
                        size="medium"
                        variant="contained"
                        sx={{
                          width: {
                            xl: "350px",
                            lg: "350px",
                            md: "200px",
                            sm: "200px",
                            xs: "200px",
                          },
                          backgroundColor: "#c75146",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "#ad2e24",
                          },
                        }}
                        onClick={() =>
                          addToCard(prod.id, prod.name, prod.price)
                        }
                      >
                        <Typography
                          sx={{
                            fontFamily: "Montserrat",
                            fontWeight: 500,
                            fontSize: {
                              xl: "20px",
                              lg: "20px",
                              md: "15px",
                              sm: "15px",
                              xs: "15px",
                            },
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
                            addToFavourite(
                              prod.id,
                              prod.photo,
                              prod.name,
                              prod.price
                            )
                          }
                        />
                      </IconButton>
                    </div>
                  </Box>
                </div>
                <ButtonNavigation
                  imgDescription={prod.description}
                  id={prod.id}
                />
              </>
            );
          })}
        </Box>
      </>
      <ToastContainer />
    </Container>
  );
};

export default ProductPage;
