import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css";
import useFetch from "../customHook/useFetch";
import { Box } from "@mui/material";
import { IProductTypes } from "../main/ProductItem";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Slider = () => {
  const url: string = `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`;

  const { products } = useFetch(url);
  return (
    <Box
      className="parent"
      sx={{
        marginTop: "130px",
        paddingTop: "150px",
        width: { xl: "80vw", lg: "80vw", md: "80vw", sm: "90vw", xs: "95vw" },
      }}
    >
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {products.map((product: IProductTypes, index: number) => {
          return (
            <div className="slider" key={index}>
              <img src={product.photo} alt="book" />
            </div>
          );
        })}
      </Carousel>
    </Box>
  );
};
export default Slider;
