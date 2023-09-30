import { AppBar, Paper, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import IconButton from "@mui/material/IconButton/IconButton";

import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Box } from "@material-ui/core";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const MobileSearch = (props: any) => {
  const { ariaLabel, onOnpenSearch } = props;

  const [searchValue, setSearchValue] = useState("");
  return (
    <Box
      component={"div"}
      style={{
        width: "100vw",
        minHeight: "10vh",
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          alignItems: "center",
          width: "80vw",
          minHeight: "50px",
          zIndex: 10,
          display: "flex",
          justifyItems: "center",
        }}
      >
        <ArrowBackIosIcon
          sx={{ position: "absolute", top: "10%", left: "3%", color: "black" }}
          onClick={() => onOnpenSearch((prev: any) => !prev)}
        />
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
    </Box>
  );
};

export default MobileSearch;
