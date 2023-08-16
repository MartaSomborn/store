import { Box, Typography } from "@mui/material";
import ProductItem, { IProductTypes } from "../main/ProductItem";
import useFetchFeatured from "../customHook/useEffectFeatured";

const Announcement = () => {
  const url = `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`;
  const feature = "announcement";
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
      }}
    >
      <Typography
        sx={{ fontFamily: "Montserrat", fontWeight: 500, fontSize: "40px" }}
      >
        Announcements
      </Typography>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {products.map((prod: IProductTypes) => {
          return <ProductItem product={prod} key={prod.id} />;
        })}
      </div>
    </Box>
  );
};

export default Announcement;
