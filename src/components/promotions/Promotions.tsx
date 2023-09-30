import { Box, Typography } from "@mui/material";
import ProductItem, { IProductTypes } from "../main/ProductItem";
import useFetchFeatured from "../customHook/useEffectFeatured";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../carousel/Slider.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 1218 },
    items: 2,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 1218, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Promotions = () => {
  const url: string = `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`;

  const feature = "promotion";
  const { products } = useFetchFeatured(url, feature);
  return (
    <Box
      className="parent"
      sx={{
        marginTop: "190px",
        backgroundColor: "white",
        borderRadius: "25px",
        paddingTop: "50px",
        paddingBottom: "20px",
        width: { xl: "70vw", lg: "70vw", md: "80vw", sm: "90vw", xs: "95vw" },
        //maxWidth: "1520px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontWeight: 500,
          fontSize: {
            xl: "40px",
            lg: "40px",
            md: "30px",
            sm: "30px",
            xs: "30px",
          },
          textAlign: "center",
          paddingBottom: "10px",
        }}
      >
        Promotions
      </Typography>
      <div style={{ border: "red solid 2px" }}>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
          centerMode={true}
        >
          {products.map((product: IProductTypes, index: number) => {
            return (
              <div className="slider" key={index}>
                <ProductItem product={product} key={product.id} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </Box>
  );
};

export default Promotions;
