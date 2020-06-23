import React from "react";
import Slider from "react-slick";

import "./StyledSlideProductMen.scss";
import ImgProductKis1 from "../../../assets/image/slide-kis-1.jpg";
import ImgProductKis2 from "../../../assets/image/slide-kis-2.jpg";
import ImgProductKis3 from "../../../assets/image/slide-kis-3.jpg";
import ImgProductKis4 from "../../../assets/image/img-slide-best-product-1.jpg";
import ImgProductKis5 from "../../../assets/image/img-slide-best-product-2.jpg";
import ImgProductKis6 from "../../../assets/image/img-slide-best-product-3.jpg";

export default function SlideProductKis() {
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
            src={ImgProductKis1}
            alt=""
          />
        </div>
        <div className="container-slide">
          <img
            className="image-slide-best-product"
            src={ImgProductKis2}
            alt=""
          />
        </div>
        <div className="container-slide">
          <img
            className="image-slide-best-product"
            src={ImgProductKis3}
            alt=""
          />
        </div>
        <div className="container-slide">
          <img
            className="image-slide-best-product"
            src={ImgProductKis4}
            alt=""
          />
        </div>
        <div className="container-slide">
          <img
            className="image-slide-best-product"
            src={ImgProductKis5}
            alt=""
          />
        </div>
        <div className="container-slide">
          <img
            className="image-slide-best-product"
            src={ImgProductKis6}
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}
