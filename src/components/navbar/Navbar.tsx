import { AppBar, Paper, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton/IconButton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";
import NavbarLoginIcon from "./NavbarLoginIcon";
import NavbarDrawer from "./NavbarDrawer";
import NavbarBasketIcon from "./NavbarBasketIcon";
import NavbarFavoriteIcon from "./NavbarFavoriteIcon";
import { Box, Hidden } from "@material-ui/core";
import MobileSearch from "./MobileSearch";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [openSearch, setOpenSearch] = useState(false);

  const ariaLabel = { "aria-label": "description" };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "130px" }}>
      <AppBar
        sx={{
          background: "white",
          minHeight: "130px",
          maxWidth: "100vw",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          visibility: openSearch ? "hidden" : "visible",
        }}
      >
        <Tooltip title="Home">
          <Link to={"/"}>
            <IconButton>
              <HomeIcon
                sx={{
                  marginLeft: "10px",
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

        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: {
              xl: "flex",
              lg: "flex",
              md: "flex",
              sm: "flex",
              xs: "none",
            },
            alignItems: "center",
            width: {
              xl: "800px",
              lg: "700px",
              md: "500px",
              sm: "200px",
              xs: "none",
            },
          }}
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
          <IconButton
            type="button"
            sx={{
              display: {
                xl: "none",
                lg: "none",
                md: "none",
                sm: "none",
                xs: "flex",
              },
            }}
            aria-label="search"
            onClick={() => setOpenSearch(true)}
          >
            <SearchIcon sx={{ width: "1.5em", height: "1.5em" }} />
          </IconButton>
          <NavbarLoginIcon />
          <NavbarBasketIcon />
          <NavbarFavoriteIcon />
          <NavbarDrawer />
        </div>
      </AppBar>
      {openSearch ? (
        <MobileSearch label={ariaLabel} onOnpenSearch={setOpenSearch} />
      ) : null}
    </Box>
  );
};

export default Navbar;
