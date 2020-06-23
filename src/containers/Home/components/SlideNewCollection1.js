import React from "react";
import Slider from "react-slick";

import "./SlideNewCollection.scss";
import NewCollection1 from "../../../assets/image/new-collection-1.jpg";
import NewCollection2 from "../../../assets/image/new-collection-2.jpg";
import NewCollection3 from "../../../assets/image/new-collection-3.jpg";
import NewCollection4 from "../../../assets/image/new-collection-4.jpg";
import NewCollection5 from "../../../assets/image/new-collection-5.jpg";
import NewCollection6 from "../../../assets/image/new-collection-6.jpg";

export default function SlideNewCollection1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className="wrapper-new-collection">
      <Slider {...settings}>
        <div className="container-slide">
          <img
            className="image-slide-best-product"
            src={NewCollection1}
            alt=""
          />
        </div>
        <div className="container-slide">
          <img
            className="image-slide-best-product"
            src={NewCollection2}
            alt=""
          />
        </div>
        <div className="container-slide">
          <img
            className="image-slide-best-product"
            src={NewCollection3}
            alt=""
          />
        </div>
        <div className="container-slide">
          <img
            className="image-slide-best-product"
            src={NewCollection4}
            alt=""
          />
        </div>
        <div className="container-slide">
          <img
            className="image-slide-best-product"
            src={NewCollection5}
            alt=""
          />
        </div>
        <div className="container-slide">
          <img
            className="image-slide-best-product"
            src={NewCollection6}
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}
