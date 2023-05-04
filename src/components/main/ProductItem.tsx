import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import IconButton from "@mui/material/IconButton/IconButton";

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
        <Button>Add to box</Button>
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
