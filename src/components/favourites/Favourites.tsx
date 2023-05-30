import { useContext, useState } from "react";
import FavouriteContext from "../../context/FavouriteContext";
import { Box, Button, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Favourites = () => {
  const { addToFavourite, removeSingleFavourite, favouriteItems } =
    useContext(FavouriteContext);
  const [refresh, setRefresh] = useState(false);

  return (
    <>
      {favouriteItems.length === 0 ? (
        <Typography>"Your box is empty"</Typography>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography>"Your box:"</Typography>
          <div>
            {favouriteItems.map((item: any, index: number) => {
              return (
                <Box key={index + " " + item.id}>
                  <Typography>{item.name}</Typography>
                  <IconButton>
                    <DeleteIcon
                      onClick={() => {
                        removeSingleFavourite(item.id);
                        setRefresh(!refresh);
                      }}
                    >
                      Remove from favourites
                    </DeleteIcon>
                  </IconButton>
                  <Typography>{item.price}</Typography>
                  <Typography>{item.quantity}</Typography>
                </Box>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Favourites;
