import { Box, Typography } from "@mui/material";
import ProductItem from "../main/ProductItem";
import useFetchFeatured from "../customHook/useEffectFeatured";

const Recommended = () => {
  const url = `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`;

  const feature = "recommended";
  const { products } = useFetchFeatured(url, feature);

  return (
    <Box
      sx={{
        marginTop: "200px",
        backgroundColor: "white",
        width: "80%",
        borderRadius: "55px",
        padding: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ fontFamily: "Montserrat", fontWeight: 500, fontSize: "40px" }}
      >
        Recommended
      </Typography>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {products.map((prod) => {
          return <ProductItem product={prod} key={prod.id} />;
        })}
      </div>
    </Box>
  );
};

export default Recommended;
