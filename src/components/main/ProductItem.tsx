import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState, useContext } from "react";
import IconButton from "@mui/material/IconButton/IconButton";
import CardContext from "./../../context/CardContext";
import FavouriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavouriteContext from "../../context/FavouriteContext";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

export interface IProductTypes {
  Category: string;
  announcement: boolean;
  author: string;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: number;
  promotion: boolean;
  rating: number;
  recommended: boolean;
}

interface IPropsTypes {
  product: IProductTypes;
  key: number;
}

const ProductItem: React.FC<IPropsTypes> = ({ product, key }) => {
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
      key={key}
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
        <Link to={"/product/" + product.id}>
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
                src={product.photo}
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
                {product.name}
              </Typography>
              <Rating
                sx={{
                  padding: "10px 0",
                }}
                name="read-only"
                precision={0.5}
                value={product.rating}
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
                {"Price " + product.price + " €"}
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
              addToCard(product.id, product.photo, product.name, product.price)
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
                  product.id,
                  product.photo,
                  product.name,
                  product.price
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
