import React, { useContext, useEffect, useState } from "react";

import {
  ButtonBack,
  ButtonNext,
  DotGroup,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselContext } from "pure-react-carousel";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import useWindowSize from "./WindowSize";
import ProductItem from "../main/ProductItem";
import axios from "axios";
import styled from "styled-components";

const CarouselSlider = (props: any) => {
  const { setSlideCount, setCurrentSlide } = props;
  const screenWidth = useWindowSize();

  //pure-react-carousel context
  const carouselContext = useContext(CarouselContext);

  const [products, setProducts] = useState<any[]>([]);

  const url = `https://bookstore-ce144-default-rtdb.europe-west1.firebasedatabase.app/Products.json`;

  useEffect(() => {
    axios.get(url).then(
      (response) => {
        const getData = Object.values(response.data);

        setProducts([getData]);

        const promotionsProduct = getData.filter(
          (item: any) => item.promotion === true
        );
        setProducts(promotionsProduct);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  useEffect(() => {
    const updateCarouselSlide = (slideToBeVisible: any) => {
      const { currentSlide, totalSlides, visibleSlides } =
        carouselContext.state;

      setSlideCount(slideToBeVisible);

      //this is a fix to reset currentSlide when screen resizes
      if (
        currentSlide >= totalSlides - visibleSlides ||
        currentSlide >= totalSlides - slideToBeVisible
      ) {
        setCurrentSlide(totalSlides - slideToBeVisible);
      }
    };

    if (screenWidth < 832) {
      updateCarouselSlide(1);
    } else if (screenWidth < 1088) {
      updateCarouselSlide(2);
    }
    //>= 1088
    else {
      updateCarouselSlide(3);
    }
  }, [screenWidth, setSlideCount, setCurrentSlide, carouselContext]);

  return (
    <Wrapper>
      {products.map((prod, index) => {
        return (
          <Slider>
            <Slide index={index} className="slide">
              <ProductItem index={index} product={prod} key={prod.id} />
            </Slide>
          </Slider>
        );
      })}

      {/* <Slider>
        <Slide index={0} className="slide">
          <ProductItem index={0} product={products[0]} key={products[0].id} />
        </Slide>
        <Slide index={1}>
          <ProductItem />
        </Slide>
        <Slide index={2}>
          <ProductItem />
        </Slide>
        <Slide index={3}>
          <ProductItem />
        </Slide>
        <Slide index={4}>
          <ProductItem />
        </Slide>
        <Slide index={5}>
          <ProductItem />
        </Slide> 
      </Slider>  */}

      <div className="controls">
        <ButtonBack className="btn-arrow reverse-arrow">
          <KeyboardArrowRightIcon />
        </ButtonBack>
        <DotGroup className="dot-group" />
        <ButtonNext className="btn-arrow">
          <KeyboardArrowRightIcon />
        </ButtonNext>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .controls {
    display: flex;
    align-items: center;
    justify-content: center;

    .btn-arrow {
      border: none;
      background: none;
      padding: 11px 20px;
    }

    .reverse-arrow {
      transform: rotateY(180deg);
    }

    .dot-group {
      display: flex;
      align-items: center;
      justify-content: center;

      .carousel__dot {
        width: 8px;
        height: 8px;
        border: none;
        border-radius: 50%;
        margin: 0 4px;
        padding: 0;
        background-color: #c3c4ca;
      }

      /* This class is found in DotGroup from pure-react-carousel */
      /* We need to override it to add our styles */
      .carousel__dot--selected {
        width: 16px;
        height: 8px;
        border-radius: 10px;
        background-color: #6267a1;
        transition: background 0.4s ease;
      }
    }
  }
`;

export default CarouselSlider;
