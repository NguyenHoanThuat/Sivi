import React from "react";
import Slider from "react-slick";

import "./SlideBrands.scss";
import ImgBrand1 from "../../../assets/image/brand-1.jpg";
import ImgBrand2 from "../../../assets/image/brand-2.jpg";
import ImgBrand3 from "../../../assets/image/brand-3.jpg";
import ImgBrand4 from "../../../assets/image/brand-4.jpg";
import ImgBrand5 from "../../../assets/image/brand-5.jpg";
import ImgBrand6 from "../../../assets/image/brand-6.jpg";

export default function BrandsSlide() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="wrapper-slide-brand">
        <Slider {...settings} >
          <div className="container-slide">
            <img className="image-slide-brand" src={ImgBrand1} alt="" />
          </div>
          <div className="container-slide">
            <img className="image-slide-brand" src={ImgBrand2} alt="" />
          </div>
          <div className="container-slide">
            <img className="image-slide-brand" src={ImgBrand3} alt="" />
          </div>
          <div className="container-slide">
            <img className="image-slide-brand" src={ImgBrand4} alt="" />
          </div>
          <div className="container-slide">
            <img className="image-slide-brand" src={ImgBrand5} alt="" />
          </div>
          <div className="container-slide">
            <img className="image-slide-brand" src={ImgBrand6} alt="" />
          </div>
          <div className="container-slide">
            <img className="image-slide-brand" src={ImgBrand1} alt="" />
          </div>
          <div className="container-slide">
            <img className="image-slide-brand" src={ImgBrand2} alt="" />
          </div>
          <div className="container-slide">
            <img className="image-slide-brand" src={ImgBrand3} alt="" />
          </div>
          <div className="container-slide">
            <img className="image-slide-brand" src={ImgBrand4} alt="" />
          </div>
          <div className="container-slide">
            <img className="image-slide-brand" src={ImgBrand5} alt="" />
          </div>
          <div className="container-slide">
            <img className="image-slide-brand" src={ImgBrand6} alt="" />
          </div>
        </Slider>
    </div>
  );
}
