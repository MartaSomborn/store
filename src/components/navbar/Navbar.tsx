import {
  AppBar,
  Badge,
  Box,
  Typography,
  Input,
  Button,
  TextField,
  Container,
} from "@mui/material";
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
import { Link } from "react-router-dom";

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

  const moveToBiography = () => {
    navigate("/biography");
  };

  const moveToPrice = () => {
    navigate("/price");
  };

  const moveToBusiness = () => {
    navigate("/business");
  };

  const moveToComputerInternet = () => {
    navigate("/computer");
  };

  const moveToJobCareers = () => {
    navigate("/jobcareers");
  };

  localStorage.setItem("minPrice", String(minPrice));
  localStorage.setItem("maxPrice", String(maxPrice));

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
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Placeholder"
          inputProps={ariaLabel}
        />
        <Link to={"/search/" + searchValue}>
          <Button>Search</Button>
        </Link>
      </Box>
      <Box
        sx={{ position: "relative", border: "2px solid red" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Typography
          sx={{ cursor: "pointer", display: "block", color: "black" }}
        >
          Category
        </Typography>

        {showAddToFavourite && (
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              alignItems: "flex-start",
              position: "absolute",
              border: "2px solid black",
              marginLeft: "-30px",
            }}
          >
            <Button onClick={moveToBiography}>Biography</Button>
            <Button onClick={moveToBusiness}>Business</Button>
            <Button onClick={moveToComputerInternet}>Computer&Internet</Button>
            <Button onClick={moveToJobCareers}>Job&Careers</Button>
            <Button onClick={moveToPrice}>Price</Button>
          </Container>
        )}
      </Box>
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
