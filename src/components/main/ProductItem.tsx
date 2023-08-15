import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState, useContext } from "react";
import IconButton from "@mui/material/IconButton/IconButton";
import CardContext from "./../../context/CardContext";
import FavouriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavouriteContext from "../../context/FavouriteContext";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const ProductItem = (props: any) => {
  const [showAddToFavourite, setShowAddToFavourite] = useState(false);

  const handleMouseOver = () => {
    setShowAddToFavourite(true);
  };

  const handleMouseOut = () => {
    setShowAddToFavourite(false);
  };

  const { addToCard } = useContext(CardContext);
  const { addToFavourite } = useContext(FavouriteContext);

  const value = 2;

  return (
    <Box
      sx={{
        width: "300px",
        height: "640px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop: "5%",
        position: "relative",
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div>
        <Link to={"/product/" + props.product.id}>
          <div>
            <div
              style={{
                width: "220px",
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  height: "300px",
                  width: "200px",
                }}
                src={props.product.photo}
              />

              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  fontSize: "25px",
                  textAlign: "center",
                  padding: "10px 0",
                }}
              >
                {props.product.name}
              </Typography>
              <Rating
                sx={{
                  padding: "10px 0",
                }}
                name="read-only"
                precision={0.5}
                value={props.product.rating}
                readOnly
              />
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  fontSize: "20px",
                  textAlign: "center",
                  padding: "10px 0",
                }}
              >
                {"Price " + props.product.price + " €"}
              </Typography>
            </div>
          </div>
        </Link>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            size="medium"
            variant="contained"
            sx={{
              position: "absolute",
              bottom: "0",
              width: "150px",
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "15px",
              backgroundColor: "#c75146",
              color: "white",
              "&:hover": {
                backgroundColor: "#ad2e24",
              },
            }}
            onClick={() =>
              addToCard(
                props.product.id,
                props.product.photo,
                props.product.name,
                props.product.price
              )
            }
          >
            Add to box
          </Button>

          <IconButton
            sx={{ position: "absolute", bottom: "-5px", right: "25px" }}
          >
            <FavouriteBorderIcon
              sx={{
                width: "1.5em",
                height: "1.5em",
              }}
              onClick={() =>
                addToFavourite(
                  props.product.id,
                  props.product.photo,
                  props.product.name,
                  props.product.price
                )
              }
            />
          </IconButton>
        </div>
      </div>
    </Box>
  );
};

export default ProductItem;
