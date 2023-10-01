import ProductItem, { IProductTypes } from "./ProductItem";
import Container from "@mui/material/Container/Container";
import useFetch from "../customHook/useFetch";

const Products = () => {
  const url = `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`;
  const { products } = useFetch(url);

  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        minWidth: "90vw",
        marginTop: "100px",
        backgroundColor: "white",
        width: "80%",
        borderRadius: "55px",
        paddingTop: "50px",
        paddingBottom: "20px",
      }}
    >
      {products.map((prod: IProductTypes) => {
        return <ProductItem product={prod} key={prod.id} />;
      })}
    </Container>
  );
};

export default Products;
