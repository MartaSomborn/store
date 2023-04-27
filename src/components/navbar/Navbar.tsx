import { AppBar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const moveToLogin = () => {
    navigate("/login");
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
      }}
    >
      <IconButton>
        <HomeIcon sx={{ width: "2em", height: "2em" }} />
      </IconButton>
      <div>
        <IconButton>
          <PersonIcon
            onClick={moveToLogin}
            sx={{ width: "2em", height: "2em" }}
          />
        </IconButton>
        <IconButton>
          <ShoppingCartIcon sx={{ width: "2em", height: "2em" }} />
        </IconButton>
      </div>
    </AppBar>
  );
};

export default Navbar;
