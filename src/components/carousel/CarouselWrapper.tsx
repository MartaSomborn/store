import React, { useState } from "react";
import { CarouselProvider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CarouselSlider from "./CarouselSlider";

const CarouselWrapper = () => {
  //no of slide to be visible
  const [slideCount, setSlideCount] = useState(2);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <CarouselProvider
      visibleSlides={slideCount}
      totalSlides={6}
      step={1}
      currentSlide={currentSlide}
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      isIntrinsicHeight={true}
    >
      <CarouselSlider
        setSlideCount={setSlideCount}
        setCurrentSlide={setCurrentSlide}
      />
    </CarouselProvider>
  );
};

export default CarouselWrapper;
