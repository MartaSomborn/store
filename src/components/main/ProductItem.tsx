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
        width: "300px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop: "5%",
        // position: "relative",
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Link
        style={{
          textDecoration: "none",
          color: "black",
        }}
        to={"product/" + props.product.id}
      >
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
                fontSize: "30px",
                textAlign: "center",
                padding: "10px 0",
              }}
            >
              {props.product.name}
            </Typography>
            {/* <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 300,
                fontSize: "25px",
                textAlign: "center",
                padding: "10px 0",
              }}
            >
              {props.product.author}
            </Typography> */}
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
          {/* {showAddToFavourite && ( */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              size="medium"
              variant="contained"
              sx={{
                width: "150px",
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize: "15px",
                backgroundColor: "#c75146",
                color: "black",
                "&:hover": {
                  backgroundColor: "#ad2e24",
                },
              }}
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
            {/* )} */}
            <IconButton>
              <FavoriteBorderIcon
                sx={{ width: "1.5em", height: "1.5em" }}
                onClick={() =>
                  addToFavourite(
                    props.product.id,
                    props.product.name,
                    props.product.price
                  )
                }
              />
            </IconButton>
          </div>
        </div>
        {/* {showAddToFavourite && ( */}
        {/* )} */}
      </Link>
    </Box>
  );
};

export default ProductItem;
