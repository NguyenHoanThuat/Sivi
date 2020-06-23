import React from "react";
import Slider from "react-slick";

import "./StyledSlideProductMen.scss";
import ImgBestProduct1 from "../../../assets/image/img-slide-best-product-1.jpg";
import ImgBestProduct2 from "../../../assets/image/img-slide-best-product-2.jpg";
import ImgBestProduct3 from "../../../assets/image/img-slide-best-product-3.jpg";
import ImgBestProduct4 from "../../../assets/image/img-slide-best-product-4.jpg";
import ImgBestProduct5 from "../../../assets/image/img-slide-best-product-5.jpg";

export default function SlideBestProduct() {
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
            src={ImgBestProduct1}
            alt=""
          />
        </div>
        <div className="container-slide">
          <img
            className="image-slide-best-product"
            src={ImgBestProduct2}
            alt=""
          />
        </div>
        <div className="container-slide">
          <img
            className="image-slide-best-product"
            src={ImgBestProduct3}
            alt=""
          />
        </div>
        <div className="container-slide">
          <img
            className="image-slide-best-product"
            src={ImgBestProduct4}
            alt=""
          />
        </div>
        <div className="container-slide">
          <img
            className="image-slide-best-product"
            src={ImgBestProduct5}
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}
