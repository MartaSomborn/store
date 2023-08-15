import { AppBar, Paper, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton/IconButton";
import { useContext, useEffect, useState } from "react";
import CardContext from "../../context/CardContext";
import FavouriteContext from "../../context/FavouriteContext";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";
import NavbarLoginIcon from "./NavbarLoginIcon";
import NavbarDrawer from "./NavbarDrawer";
import NavbarBasketIcon from "./NavbarBasketIcon";
import NavbarFavoriteIcon from "./NavbarFavoriteIcon";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const ariaLabel = { "aria-label": "description" };

  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);

  localStorage.setItem("minPrice", String(minPrice));
  localStorage.setItem("maxPrice", String(maxPrice));

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
      <Tooltip title="Home">
        <Link to={"/"}>
          <IconButton>
            <HomeIcon sx={{ width: "2em", height: "2em" }} />
          </IconButton>
        </Link>
      </Tooltip>

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
        <NavbarLoginIcon />
        <NavbarBasketIcon />
        <NavbarFavoriteIcon />
        <NavbarDrawer />
      </div>
    </AppBar>
  );
};

export default Navbar;
