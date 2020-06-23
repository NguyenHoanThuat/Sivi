import React from "react";
import Slider from "react-slick";

import "./StyledSlideProductMen.scss";
import ImgProductWomen1 from "../../../assets/image/slide-women-1.jpg";
import ImgProductWomen2 from "../../../assets/image/slide-women-2.jpg";
import ImgProductWomen3 from "../../../assets/image/img-slide-best-product-1.jpg";
import ImgProductWomen4 from "../../../assets/image/img-slide-best-product-2.jpg";
import ImgProductWomen5 from "../../../assets/image/img-product-item-7.jpg";

export default function SlideProductWomen() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className="wrapper-slide-best-product">
      <Slider {...settings}>
        <div className="container-slide">
          <img
            className="image-slide-best-product"
            src={ImgProductWomen1}
            alt=""
          />
        </div>
        <div className="container-slide">
          <img
            className="image-slide-best-product"
            src={ImgProductWomen2}
            alt=""
          />
        </div>
        <div className="container-slide">
          <img
            className="image-slide-best-product"
            src={ImgProductWomen3}
            alt=""
          />
        </div>
        <div className="container-slide">
          <img
            className="image-slide-best-product"
            src={ImgProductWomen4}
            alt=""
          />
        </div>
        <div className="container-slide">
          <img
            className="image-slide-best-product"
            src={ImgProductWomen5}
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}
