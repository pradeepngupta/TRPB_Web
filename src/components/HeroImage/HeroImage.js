import React from "react";
import "./HeroImage.css";
import NewLineText from "./NewLineText";

const HeroImage = (props) => {
  return (
    <div
      className="container"
      style={{
        background: `url(${props.bgImage}) no-repeat center/cover`,
        height: "100vh",
        position: "relative",
        backgroundPositionY: "90px"
      }}
    >
        <div className="banner-content">
            <h1 className="heading-primary">{props.heading}</h1>
            <NewLineText text={props.text} />
        </div>
    </div>
  );
};

export default HeroImage;
