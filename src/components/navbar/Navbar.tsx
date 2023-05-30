import { AppBar, Badge, Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import CardContext from "../../context/CardContext";
import FavouriteContext from "../../context/FavouriteContext";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const { addToCard, removeSingle, items } = useContext(CardContext);

  const { addToFavourite, removeSingleFavourite, favouriteItems } =
    useContext(FavouriteContext);

  const user = localStorage.getItem("name");

  const navigate = useNavigate();

  const moveToLogin = () => {
    navigate("/login");
  };

  const moveToCheckout = () => {
    navigate("/checkout");
  };

  const moveToFavourite = () => {
    navigate("/favourite");
  };

  const handleClick = (event: any) => {
    setOpen(!open);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(!open);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const [open, setOpen] = useState(false);

  const logOut = () => {
    localStorage.removeItem("name");
    navigate("/");
  };

  return (
    <AppBar
      sx={{
        background: "white",
        height: "10%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
    >
      <IconButton>
        <HomeIcon sx={{ width: "2em", height: "2em" }} />
      </IconButton>
      <div>
        <IconButton>
          <Box sx={{ flexDirection: "column" }}>
            <PersonIcon
              onClick={handleClick}
              sx={{ width: "2em", height: "2em" }}
            />
            {user ? (
              <Box>
                <Typography>{user}</Typography>
                <Menu
                  anchorEl={anchorEl}
                  id="basic-menu"
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={logOut}>Wyloguj się</MenuItem>

                  <MenuItem onClick={handleClose}>Zamknij</MenuItem>
                </Menu>
              </Box>
            ) : (
              <Menu
                anchorEl={anchorEl}
                id="basic-menu"
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={moveToLogin}>Zaloguj się</MenuItem>

                <MenuItem>Załóż konto</MenuItem>

                <MenuItem onClick={handleClose}>Zamknij</MenuItem>
              </Menu>
            )}
          </Box>
        </IconButton>
        <Badge badgeContent={items.length} color="primary">
          <IconButton>
            <ShoppingCartIcon
              onClick={moveToCheckout}
              sx={{ width: "2em", height: "2em" }}
            />
          </IconButton>
        </Badge>
        <Badge badgeContent={favouriteItems.length} color="primary">
          <IconButton>
            <FavoriteBorderIcon
              onClick={moveToFavourite}
              sx={{ width: "2em", height: "2em" }}
            />
          </IconButton>
        </Badge>
      </div>
    </AppBar>
  );
};

export default Navbar;
