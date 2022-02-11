import React from "react";
import Title from "react-vanilla-tilt";
import quote from "./quote.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0 pa3">
      <Title
        className="Tilt br2 shadow-2 center"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <img src={quote} alt="logo" />{" "}
        </div>
      </Title>
    </div>
  );
};

export default Logo;
