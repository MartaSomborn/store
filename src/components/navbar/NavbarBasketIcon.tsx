import { Badge } from "@mui/material";
import IconButton from "@mui/material/IconButton/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CardContext from "../../context/CardContext";
import Tooltip from "@mui/material/Tooltip";

const NavbarBasketIcon = () => {
  const { items } = useContext(CardContext);
  const navigate = useNavigate();

  const moveToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Badge badgeContent={items.length} color="primary">
      <Tooltip title="Shopping basket">
        <IconButton>
          <ShoppingCartIcon
            onClick={moveToCheckout}
            sx={{ width: "2em", height: "2em" }}
          />
        </IconButton>
      </Tooltip>
    </Badge>
  );
};
export default NavbarBasketIcon;
