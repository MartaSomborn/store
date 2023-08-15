import { Box, Typography } from "@mui/material";
import ProductItem from "../main/ProductItem";
import useFetchFeatured from "../customHook/useEffectFeatured";

const Promotions = () => {
  const url = `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`;

  const feature = "promotion";
  const { products } = useFetchFeatured(url, feature);

  return (
    <Box
      sx={{
        marginTop: "200px",
        backgroundColor: "white",
        width: { xl: "80vw", lg: "80vw", md: "80vw", sm: "90vw", xs: "95vw" },
        borderRadius: "55px",
        padding: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Typography
        sx={{ fontFamily: "Montserrat", fontWeight: 500, fontSize: "40px" }}
      >
        Promotions
      </Typography>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {products.map((prod) => {
          return <ProductItem product={prod} key={prod.id} />;
        })}
      </div>
    </Box>
  );
};

export default Promotions;
