import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavbarLoginIcon = () => {
  const user = localStorage.getItem("name");
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setOpen(!open);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(!open);
  };
  const logOut = () => {
    localStorage.removeItem("name");
  };
  return (
    <Tooltip title="Login">
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
                <Link to={"/"}>
                  <MenuItem onClick={logOut}>Wyloguj się</MenuItem>
                </Link>
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
              <Link to={"/login"}>
                <MenuItem>Login</MenuItem>
              </Link>
              <Link to={"/signup"}>
                <MenuItem>Create an account</MenuItem>
              </Link>
              <MenuItem onClick={handleClose}>Close</MenuItem>
            </Menu>
          )}
        </Box>
      </IconButton>
    </Tooltip>
  );
};

export default NavbarLoginIcon;
