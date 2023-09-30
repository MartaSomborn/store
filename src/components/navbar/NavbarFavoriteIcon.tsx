import { Badge } from "@mui/material";
import IconButton from "@mui/material/IconButton/IconButton";
import FavouriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { useContext } from "react";
import FavouriteContext from "../../context/FavouriteContext";
import Tooltip from "@mui/material/Tooltip";

const NavbarFavoriteIcon = (props: any) => {
  const { favouriteItems } = useContext(FavouriteContext);

  return (
    <Badge badgeContent={favouriteItems.length} color="primary">
      <Tooltip title="Favorites">
        <Link to={"/favourite"}>
          <IconButton>
            <FavouriteBorderIcon
              sx={{
                width: {
                  xl: "2em",
                  lg: "2em",
                  md: "2em",
                  sm: "2em",
                  xs: "1.5em",
                },
                height: "2em",
              }}
            />
          </IconButton>
        </Link>
      </Tooltip>
    </Badge>
  );
};

export default NavbarFavoriteIcon;
