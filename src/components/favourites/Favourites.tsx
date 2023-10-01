import { useContext, useState } from "react";
import FavouriteContext from "../../context/FavouriteContext";
import { Box, Button, Typography } from "@mui/material";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import { IProductTypes } from "../main/ProductItem";
import { ToastContainer } from "react-toastify";

const Favourites = () => {
  const { removeSingleFavourite, favouriteItems } =
    useContext(FavouriteContext);
  const [refresh, setRefresh] = useState(false);

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        marginTop: "130px",
      }}
    >
      <Navbar />
      {favouriteItems.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "100px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "50px",
              textAlign: "center",
              padding: "10px 0",
            }}
          >
            "No favorites selected"
          </Typography>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
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
              padding: "20px 0",
            }}
          >
            Your box:
          </Typography>
          <div>
            {favouriteItems.map((item: IProductTypes, index: number) => {
              return (
                <Box key={index + " " + item.id}>
                  <Box
                    sx={{
                      width: {
                        xl: "80vw",
                        lg: "80vw",
                        md: "80vw",
                        sm: "60vw",
                        xs: "60vw",
                      },
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      flexWrap: "wrap",
                    }}
                  >
                    <Link to={"/product/" + item.id}>
                      <img
                        style={{
                          height: "300px",
                          width: "200px",
                        }}
                        src={item.photo}
                      />
                    </Link>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "wrap",
                        alignContent: "center",
                        alignItems: "center",
                        width: "300px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                          fontSize: "30px",
                          textAlign: "center",
                          padding: "10px 0",
                        }}
                      >
                        {item.name}
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                          fontSize: "20px",
                          textAlign: "center",
                          padding: "10px 0",
                        }}
                      >
                        {"Price " + item.price + " €"}
                      </Typography>
                      <Button
                        size="medium"
                        variant="contained"
                        sx={{
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                          fontSize: "15px",
                          marginTop: "10px",
                          marginBottom: "30px",
                          backgroundColor: "#c75146",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "#ad2e24",
                          },
                        }}
                        onClick={() => {
                          removeSingleFavourite(item.id);
                          setRefresh(!refresh);
                        }}
                      >
                        Delete from favorites
                      </Button>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </div>
        </div>
      )}
      <ToastContainer />
    </Box>
  );
};

export default Favourites;
