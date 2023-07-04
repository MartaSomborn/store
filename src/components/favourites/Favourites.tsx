import { useContext, useState } from "react";
import FavouriteContext from "../../context/FavouriteContext";
import { Box, Button, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Navbar from "../navbar/Navbar";
import Tooltip from "@mui/material/Tooltip";

const Favourites = () => {
  const { addToFavourite, removeSingleFavourite, favouriteItems } =
    useContext(FavouriteContext);
  const [refresh, setRefresh] = useState(false);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        marginTop: "130px",
        background: "#f5ebe0",
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
            "No favourites selected"
          </Typography>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
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
            "Your box:"
          </Typography>
          <div>
            {favouriteItems.map((item: any, index: number) => {
              return (
                <Box key={index + " " + item.id}>
                  <div
                    style={{
                      width: "300px",
                      display: "flex",
                      // flexDirection: "column",
                      flexWrap: "wrap",
                      alignContent: "center",
                      alignItems: "center",
                      marginTop: "30px",
                    }}
                  >
                    <img
                      style={{
                        height: "300px",
                        width: "200px",
                      }}
                      src={item.photo}
                    />

                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "30px",
                        textAlign: "center",
                        padding: "3px 0",
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
                        padding: "3px 0",
                      }}
                    >
                      {"Price " + item.price + " €"}
                    </Typography>
                    <Tooltip title="Delete from favourites">
                      <IconButton>
                        <DeleteIcon
                          sx={{ width: "1.5rem", height: "1.5rem" }}
                          onClick={() => {
                            removeSingleFavourite(item.id);
                            setRefresh(!refresh);
                          }}
                        ></DeleteIcon>
                      </IconButton>
                    </Tooltip>
                  </div>
                </Box>
              );
            })}
          </div>
        </div>
      )}
    </Box>
  );
};

export default Favourites;
