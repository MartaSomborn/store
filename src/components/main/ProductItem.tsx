import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { TypeFormatFlags } from "typescript";

const ProductItem = (props: any) => {
  console.log(props);
  return (
    // Box is like div
    <Box sx={{ width: "200px", height: "200px", border: "2px solid black" }}>
      <Typography>{props.product.name}</Typography>
      <Typography>{props.product.price}</Typography>
    </Box>
  );
};

export default ProductItem;
