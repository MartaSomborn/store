import { Badge, Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState, useContext } from "react";
import IconButton from "@mui/material/IconButton/IconButton";
import CardContext from "./../../context/CardContext";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavouriteContext from "../../context/FavouriteContext";
import { Link } from "react-router-dom";

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

  return (
    <Box
      sx={{
        width: "250px",
        height: "300px",
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
      <Link
        style={{
          textDecoration: "none",
          color: "black",
          display: " flex",
          flexDirection: "row",
          alignItems: "center",
        }}
        to={"product/" + props.product.id}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <div>
            <img
              style={{ maxHeight: "200px", width: "150px" }}
              src={props.product.photo}
            />

            <Typography style={{ textAlign: "center" }}>
              {props.product.name}
            </Typography>
            <Typography style={{ textAlign: "center" }}>
              {props.product.author}
            </Typography>
            <Typography style={{ textAlign: "center" }}>
              {props.product.price}
            </Typography>
          </div>
          {showAddToFavourite && (
            <Button
              size="medium"
              variant="contained"
              sx={{ width: "150px", position: "absolute", bottom: "0" }}
              onClick={() =>
                addToCard(
                  props.product.id,
                  props.product.name,
                  props.product.price
                )
              }
            >
              Add to box
            </Button>
          )}
        </div>
        {showAddToFavourite && (
          <IconButton>
            <FavoriteBorderIcon
              sx={{ width: "2em", height: "2em" }}
              onClick={() =>
                addToFavourite(
                  props.product.id,
                  props.product.name,
                  props.product.price
                )
              }
            />
          </IconButton>
        )}
      </Link>
    </Box>
  );
};

export default ProductItem;
