import React, { useState } from "react";

import "./StyledBestProduct.scss";
import SlideBestProductMen from "./SlideBestProduct";
import SlideProductWomen from "./slideProductWomen";
import SlideProductKis from "./SlideProductKis";
import SlideProductAccess from "./SlideProductAccess";

export default function BestProduct() {
  const [onClickProduct, setOnClickProduct] = useState(0);

  const onClickProduct1 = () => {
    setOnClickProduct(0);
  };

  const onClickProduct2 = () => {
    setOnClickProduct(1);
  };

  const onClickProduct3 = () => {
    setOnClickProduct(2);
  };

  const onClickProduct4 = () => {
    setOnClickProduct(3);
  };

  return (
    <div className="wrapper-selection-best-product">
      <div className="selection-best-product">
        <div className="wrapper-selection">
          <div className="selection">
            <button onClick={onClickProduct1} className="click-selection">
              MEN
            </button>
          </div>
          <div className="selection">
            <button onClick={onClickProduct2} className="click-selection">
              WOMEN
            </button>
          </div>
          <div className="selection">
            <button onClick={onClickProduct3} className="click-selection">
              KIS'S
            </button>
          </div>
          <div className="selection">
            <button onClick={onClickProduct4} className="click-selection">
              ACCESSORIES
            </button>
          </div>
        </div>
        {onClickProduct === 0 ? (
          <SlideBestProductMen />
        ) : onClickProduct === 1 ? (
          <SlideProductWomen />
        ) : onClickProduct === 2 ? (
          <SlideProductKis />
        ) : (
          <SlideProductAccess />
        )}
      </div>
    </div>
  );
}
