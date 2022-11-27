import { EastOutlined, WestOutlined } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import "./Slider.scss";

const Slider = () => {
  const imgData = ["/img/slide1.jpg", "/img/slide2.jpg", "/img/slide3.jpg"];

  const [slideNum, setSlideNum] = useState(0);

  const prevHandler = () => {
    slideNum === 0 ? setSlideNum(2) : setSlideNum((prev) => prev - 1);
  };

  const nextHandler = () => {
    slideNum === 2 ? setSlideNum(0) : setSlideNum((prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${slideNum * 100}vw)` }}
      >
        {imgData.map((iData) => {
          return <img src={iData} alt="" />;
        })}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevHandler}>
          <WestOutlined />
        </div>
        <div className="icon" onClick={nextHandler}>
          <EastOutlined />
        </div>
      </div>
    </div>
  );
};

export default Slider;
