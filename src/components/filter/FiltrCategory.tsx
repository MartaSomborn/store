import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Container from "@mui/material/Container/Container";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const FiltrCategory = () => {
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const navigate = useNavigate();

  const moveToBiography = () => {
    navigate("/biography");
  };

  const moveToPrice = () => {
    navigate("/price");
  };

  localStorage.setItem("minPrice", String(minPrice));
  localStorage.setItem("maxPrice", String(maxPrice));

  return (
    <Container sx={{ marginTop: "15%" }}>
      <Button onClick={moveToBiography}>Biography</Button>
      <div>
        <TextField
          id="standard-basic"
          label="Min price"
          variant="standard"
          onChange={(e: any) => {
            setMinPrice(e.target.value);
          }}
          value={minPrice}
        />
        <TextField
          id="standard-basic"
          label="Max price"
          variant="standard"
          onChange={(e: any) => {
            setMaxPrice(e.target.value);
          }}
          value={maxPrice}
        />
        <Button onClick={moveToPrice}>Szukaj wedlug ceny</Button>
      </div>
    </Container>
  );
};

export default FiltrCategory;
