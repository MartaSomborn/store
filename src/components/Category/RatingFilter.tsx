import { useState, useContext } from "react";
import ProductItem, { IProductTypes } from "../main/ProductItem";
import Navbar from "../navbar/Navbar";
import { Box } from "@mui/material";
import Slider from "@mui/material/Slider";
import { Button, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CategoryContext from "../../context/CategoryContext";
import useFetchDependecies from "../customHook/useFetchDependecies";

const RatingFilter = (props: any) => {
  const [ratingChecked, setRatingChecked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "200px" }}>
      <Box sx={{ display: "flex" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={ratingChecked[5]}
              onClick={() =>
                setRatingChecked((prev) => {
                  return {
                    ...prev,
                    5: !ratingChecked[5],
                    1: false,
                    2: false,
                    4: false,
                    3: false,
                  };
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
              checked={ratingChecked[4]}
              onClick={() =>
                setRatingChecked((prev) => {
                  return {
                    ...prev,
                    4: !ratingChecked[4],
                    1: false,
                    2: false,
                    3: false,
                    5: false,
                  };
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
              checked={ratingChecked[3]}
              onClick={() =>
                setRatingChecked((prev) => {
                  return {
                    ...prev,
                    3: !ratingChecked[3],
                    1: false,
                    2: false,
                    4: false,
                    5: false,
                  };
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
              checked={ratingChecked[2]}
              onClick={() =>
                setRatingChecked((prev) => {
                  return {
                    ...prev,
                    2: !ratingChecked[2],
                    1: false,
                    3: false,
                    4: false,
                    5: false,
                  };
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
              checked={ratingChecked[1]}
              onClick={() =>
                setRatingChecked((prev) => {
                  return {
                    ...prev,
                    1: !ratingChecked[1],
                    3: false,
                    2: false,
                    4: false,
                    5: false,
                  };
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
    </Box>
  );
};

export default RatingFilter;
