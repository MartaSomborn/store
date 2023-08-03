import ProductItem from "./ProductItem";
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
        marginTop: "200px",
        border: "2 px black solid",
        backgroundColor: "white",
        width: "80%",
        borderRadius: "55px",
        padding: "100px",
        marginBottom: "200px",
      }}
    >
      {products.map((prod) => {
        return <ProductItem product={prod} key={prod.id} />;
      })}
    </Container>
  );
};

export default Products;
