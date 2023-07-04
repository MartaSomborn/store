import {
  AppBar,
  Badge,
  Box,
  Typography,
  Input,
  Button,
  TextField,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  Paper,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavouriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";
import CardContext from "../../context/CardContext";
import FavouriteContext from "../../context/FavouriteContext";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CloseIcon from "@mui/icons-material/Close";

type Anchor = "right";

const Navbar = () => {
  const { addToCard, removeSingle, items } = useContext(CardContext);

  const { addToFavourite, removeSingleFavourite, favouriteItems } =
    useContext(FavouriteContext);

  const [searchValue, setSearchValue] = useState("");
  const ariaLabel = { "aria-label": "description" };

  const [showAddToFavourite, setShowAddToFavourite] = useState(false);

  const handleMouseOver = () => {
    setShowAddToFavourite(true);
  };

  const handleMouseOut = () => {
    setShowAddToFavourite(false);
  };

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

  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);

  const moveToHome = () => {
    navigate("/");
  };

  localStorage.setItem("minPrice", String(minPrice));
  localStorage.setItem("maxPrice", String(maxPrice));

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Biography", "Business", "Computer", "Careers", "Price"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
                onClick={() => navigate("/" + text.toLowerCase())}
              >
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                    fontSize: "20px",
                  }}
                >
                  {text}
                </Typography>
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  //TODO:
  useEffect(() => console.log("Search value", searchValue), []);

  return (
    <AppBar
      sx={{
        background: "white",
        height: "130px",
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
      <IconButton onClick={moveToHome}>
        <HomeIcon sx={{ width: "2em", height: "2em" }} />
      </IconButton>

      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 800 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          value={searchValue}
          placeholder="Search..."
          inputProps={ariaLabel}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {searchValue.length > 0 ? (
          <IconButton onClick={() => setSearchValue("")}>
            <CloseIcon />
          </IconButton>
        ) : (
          ""
        )}
        <Link to={"/search/" + searchValue}>
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={() => setSearchValue("")}
          >
            <SearchIcon />
          </IconButton>
        </Link>
      </Paper>

      <div style={{ display: "flex" }}>
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
                <MenuItem onClick={moveToLogin}>Login</MenuItem>

                <MenuItem>Create an account</MenuItem>

                <MenuItem onClick={handleClose}>Close</MenuItem>
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
            <FavouriteBorderIcon
              onClick={moveToFavourite}
              sx={{ width: "2em", height: "2em" }}
            />
          </IconButton>
        </Badge>

        {(["right"] as const).map((anchor) => (
          <Fragment key={anchor}>
            <IconButton onClick={toggleDrawer(anchor, true)}>
              <MenuBookIcon sx={{ width: "2em", height: "2em" }} />
            </IconButton>
            <Drawer
              sx={{ marginTop: "140px" }}
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </Fragment>
        ))}
      </div>
    </AppBar>
  );
};

export default Navbar;
