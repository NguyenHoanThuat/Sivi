import React, { useState } from "react";

import "./newSlide.scss";
import ImgSlideSale1 from "../../../assets/image/img-slide-1.jpg";
import ImgSlideSale2 from "../../../assets/image/img-slide-2.jpg";
import ImgSlideSale3 from "../../../assets/image/img-slide-3.jpg";
import ImgSlideSale4 from "../../../assets/image/img-slide-4.jpg";
import ImgSlideSale5 from "../../../assets/image/img-slide-5.jpg";
import ImgSlideSale6 from "../../../assets/image/img-slide-6.jpg";
import ImgSlideSale7 from "../../../assets/image/img-slide-7.jpg";
import ImgSlideSale8 from "../../../assets/image/img-slide-8.jpg";
import ImgSlideSale9 from "../../../assets/image/img-slide-9.jpg";

export default function NewSlide() {
  const [active, setActive] = useState(0);

  const goLeft = () => {
    // active === 0 ? setActive(2) : setActive(active - 1);
    setActive(0);
  };

  const goRight = () => {
    // active === 2 ? setActive(0) : setActive(active + 1);
    setActive(2);
  };

  const goCenter = () => {
    setActive(1);
  };

  return (
    <div>
      <div className="slider">
        {active === 0 ? (
          <div className="slide-1">
            <div className="container-slide">
              <img
                style={{ width: 230, height: 155 }}
                src={ImgSlideSale1}
                alt=""
              />
              <span>50%</span>
            </div>
            <div className="container-slide">
              <img
                style={{ width: 230, height: 155 }}
                src={ImgSlideSale2}
                alt=""
              />
              <span>50%</span>
            </div>
            <div className="container-slide">
              <img
                style={{ width: 230, height: 155 }}
                src={ImgSlideSale3}
                alt=""
              />
              <span>50%</span>
            </div>
          </div>
        ) : active === 1 ? (
          <div className="slide-2">
            <div className="container-slide">
              <img
                style={{ width: 230, height: 155 }}
                src={ImgSlideSale4}
                alt=""
              />
              <span>50%</span>
            </div>
            <div className="container-slide">
              <img
                style={{ width: 230, height: 155 }}
                src={ImgSlideSale5}
                alt=""
              />
              <span>50%</span>
            </div>
            <div className="container-slide">
              <img
                style={{ width: 230, height: 155 }}
                src={ImgSlideSale6}
                alt=""
              />
              <span>50%</span>
            </div>
          </div>
        ) : (
          <div className="slide-3">
            <div className="container-slide">
              <img
                style={{ width: 230, height: 155 }}
                src={ImgSlideSale7}
                alt=""
              />
              <span>50%</span>
            </div>
            <div className="container-slide">
              <img
                style={{ width: 230, height: 155 }}
                src={ImgSlideSale8}
                alt=""
              />
              <span>50%</span>
            </div>
            <div className="container-slide">
              <img
                style={{ width: 230, height: 155 }}
                src={ImgSlideSale9}
                alt=""
              />
              <span>50%</span>
            </div>
          </div>
        )}
        <button onClick={goLeft} className="onClick onClickLeft"></button>
        <button onClick={goCenter} className="onClick onClickCenter"></button>
        <button onClick={goRight} className="onClick onClickRight"></button>
      </div>
    </div>
  );
}
