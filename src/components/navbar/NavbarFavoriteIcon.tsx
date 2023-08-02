import { Badge } from "@mui/material";
import IconButton from "@mui/material/IconButton/IconButton";
import FavouriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import FavouriteContext from "../../context/FavouriteContext";
import Tooltip from "@mui/material/Tooltip";

const NavbarFavoriteIcon = () => {
  const { removeSingleFavourite, favouriteItems } =
    useContext(FavouriteContext);
  const navigate = useNavigate();

  const moveToFavourite = () => {
    navigate("/favourite");
  };
  return (
    <Badge badgeContent={favouriteItems.length} color="primary">
      <Tooltip title="Favorites">
        <IconButton>
          <FavouriteBorderIcon
            onClick={moveToFavourite}
            sx={{ width: "2em", height: "2em" }}
          />
        </IconButton>
      </Tooltip>
    </Badge>
  );
};

export default NavbarFavoriteIcon;
