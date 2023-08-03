import axios from "axios";
import { useEffect, useState, useContext } from "react";
import ProductItem from "../main/ProductItem";
import Navbar from "../navbar/Navbar";
import { Box } from "@mui/material";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CategoryContext from "../../context/CategoryContext";
import useFetchDependecies from "../customHook/useFetchDependecies";

const CategoryFilter = () => {
  const { declareCategory, category } = useContext(CategoryContext);

  const [productByPrice, setProductsByPrice] = useState<any>([]);

  const [checked, setChecked] = useState(true);

  const [ratingChecked, setRatingChecked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const [filterByRating, setFilterByRating] = useState<any>([]);

  const url = `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`;

  const { products } = useFetchDependecies(url, category);

  function valuetext(value: number) {
    return `${value}°C`;
  }

  const [value, setValue] = useState<number[]>([0, 100]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const filterBooksByPrice = () => {
    console.log("test");
    const minPrice = products.filter((product) => product.price > value[0]);
    const maxPrice = minPrice.filter((product) => product.price < value[1]);
    setProductsByPrice(maxPrice);
    console.log(maxPrice, "maxprice");
  };

  const filterBooksByRating = () => {
    setProductsByPrice([]);
    if (ratingChecked[5] === true) {
      const filterCheckbox = products.filter((prod) => prod.rating >= 4.5);
      setFilterByRating(filterCheckbox);
      console.log(filterCheckbox, "filterCheckbox5");
    }
    if (ratingChecked[4] === true) {
      const filterCheckbox2 = products.filter(
        (prod) => prod.rating >= 3.5 && prod.rating < 4.5
      );
      setFilterByRating(filterCheckbox2);
    }
    if (ratingChecked[3] === true) {
      const filterCheckbox3 = products.filter(
        (prod) => prod.rating >= 2.5 && prod.rating < 3.5
      );
      setFilterByRating(filterCheckbox3);
      console.log(filterCheckbox3, "filterCheckbox3");
    }
    if (ratingChecked[2] === true) {
      const filterCheckbox4 = products.filter(
        (prod) => prod.rating >= 1.5 && prod.rating < 2.5
      );
      setFilterByRating(filterCheckbox4);
    }
    if (ratingChecked[1] === true) {
      const filterCheckbox5 = products.filter(
        (prod) => prod.rating >= 0.5 && prod.rating < 1.5
      );
      setFilterByRating(filterCheckbox5);
      console.log(filterCheckbox5, "filterCheckbox5");
    }
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100vw",
          marginTop: "130px",
          border: "2px solid red",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "150px",
          background: "#f5ebe0",
        }}
      >
        <Box
          sx={{
            width: "700px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "2px solid blue",
            paddingTop: "50px",
          }}
        >
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
          <Box
            sx={{
              width: "300px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Typography>{value[0]}</Typography>
            <Typography>{value[1]}</Typography>
          </Box>
          <Button
            onClick={filterBooksByPrice}
            sx={{
              marginTop: "20px",
              width: "150px",
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "15px",
              backgroundColor: "#c75146",
              color: "white",
              "&:hover": {
                backgroundColor: "#ad2e24",
              },
            }}
          >
            Search
          </Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography>Filter by rating: </Typography>
          <Box sx={{ display: "flex" }}>
            <FormControlLabel
              control={
                <Checkbox
                  onClick={() =>
                    setRatingChecked((prev) => {
                      return { ...prev, 5: !ratingChecked[5] };
                    })
                  }
                />
              }
              label={"5 stars"}
            />
            <Rating
              sx={{
                padding: "10px 0",
              }}
              name="read-only"
              value={5}
              readOnly
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <FormControlLabel
              control={
                <Checkbox
                  onClick={() =>
                    setRatingChecked((prev) => {
                      return { ...prev, 4: !ratingChecked[4] };
                    })
                  }
                />
              }
              label={"4 stars"}
            />
            <Rating
              sx={{
                padding: "10px 0",
              }}
              name="read-only"
              value={4}
              readOnly
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <FormControlLabel
              control={
                <Checkbox
                  onClick={() =>
                    setRatingChecked((prev) => {
                      return { ...prev, 3: !ratingChecked[3] };
                    })
                  }
                />
              }
              label={"3 stars"}
            />
            <Rating
              sx={{
                padding: "10px 0",
              }}
              name="read-only"
              value={3}
              readOnly
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <FormControlLabel
              control={
                <Checkbox
                  onClick={() =>
                    setRatingChecked((prev) => {
                      return { ...prev, 2: !ratingChecked[2] };
                    })
                  }
                />
              }
              label={"2 stars"}
            />
            <Rating
              sx={{
                padding: "10px 0",
              }}
              name="read-only"
              value={2}
              readOnly
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <FormControlLabel
              control={
                <Checkbox
                  onClick={() =>
                    setRatingChecked((prev) => {
                      return { ...prev, 1: !ratingChecked[1] };
                    })
                  }
                />
              }
              label={"1 stars"}
            />
            <Rating
              sx={{
                padding: "10px 0",
              }}
              name="read-only"
              value={1}
              readOnly
            />
          </Box>
          <Button
            onClick={filterBooksByRating}
            sx={{
              marginTop: "20px",
              width: "150px",
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "15px",
              backgroundColor: "#c75146",
              color: "white",
              "&:hover": {
                backgroundColor: "#ad2e24",
              },
            }}
          >
            Filter by Rating
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "150px",
          }}
        >
          {filterByRating.length > 0
            ? filterByRating.map((item: any) => {
                return <ProductItem product={item} key={item.id} />;
              })
            : null}
          {productByPrice.length > 0
            ? productByPrice.map((item: any) => {
                return <ProductItem product={item} key={item.id} />;
              })
            : null}
          {filterByRating.length === 0 && productByPrice.length === 0
            ? products.map((prod) => {
                return <ProductItem product={prod} key={prod.id} />;
              })
            : null}
        </Box>
      </Box>
    </>
  );
};

export default CategoryFilter;
