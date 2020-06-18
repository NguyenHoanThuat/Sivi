import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide0 from "../../../assets/image/slice1.jpg";
import Slide1 from "../../../assets/image/slice2.jpg";
import Slide2 from "../../../assets/image/slide3.jpg";
import SlideImage from "./SlideImage";

export default function SlideShow() {
  const WrapSlider = styled.div`
    .slick-prev {
      left: 10px;
      z-index: 1;
    }
    .slick-next {
      right: 30px;
    }
    .slick-prev:before,
    .slick-next:before {
      font-size: 40px;
      opacity: 0.2;
    }
    .slick-dots li.slick-active button:before {
      color: white;
    }
    .slick-dots li button:before {
      top: -30px;
      font-size: 10px;
      opacity: 0.25;
      color: white;
    }
  `;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <WrapSlider>
      <Slider {...settings}>
        <SlideImage image={Slide0} />
        <SlideImage image={Slide1} />
        <SlideImage image={Slide2} />
      </Slider>
    </WrapSlider>
  );
}
