import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState, useContext } from "react";
import IconButton from "@mui/material/IconButton/IconButton";
import CardContext from "./../../context/CardContext";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductItem = (props: any) => {
  //console.log(props);

  const [showAddToFavourite, setShowAddToFavourite] = useState(false);

  const handleMouseOver = () => {
    setShowAddToFavourite(true);
  };

  const handleMouseOut = () => {
    setShowAddToFavourite(false);
  };

  const { addToCard, removeSingle, items } = useContext(CardContext);

  // console.log("items", items);

  return (
    // Box is like div
    <Box
      sx={{
        width: "200px",
        height: "200px",
        border: "2px solid black",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginTop: "20%",
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        <Typography>{props.product.name}</Typography>
        <Typography>{props.product.price}</Typography>
        <Button
          onClick={() =>
            addToCard(props.product.id, props.product.name, props.product.price)
          }
        >
          Add to box
        </Button>
      </div>
      {showAddToFavourite && (
        <IconButton>
          <FavoriteBorderIcon sx={{ width: "2em", height: "2em" }} />
        </IconButton>
      )}
    </Box>
  );
};

export default ProductItem;
