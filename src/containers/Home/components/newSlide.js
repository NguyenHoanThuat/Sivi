import React, { useState } from "react";

import "./newSlide.scss";

export default function NewSlide() {
  let ArraySlide = [1, 2, 3];

  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (ArraySlide.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (ArraySlide.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div>
      <p>Ahihi đồ ngốc</p>
      <div className="slider">
        {ArraySlide.map((item, index) => (
          <div
            key={index}
            className="slide"
            style={{ transform: `translate(${x}%)` }}
          >
            {item}
          </div>
        ))}
        <button onClick={goLeft} className="onClickLeft">
          left
        </button>
        <button onClick={goRight} className="onClickRight">
          right
        </button>
      </div>
    </div>
  );
}
