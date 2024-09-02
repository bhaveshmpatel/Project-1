import React from "react";
import "./Slide.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  // Settings for react-slick
  const settings = {
    slidesToShow: slidesToShow,
    slidesToScroll: arrowsScroll,
    infinite: true,
    arrows: true, // Shows navigation arrows
    dots: true,   // Shows pagination dots (optional)
  };

  return (
    <div className="slide">
      <div className="container">
        <Slider {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
