import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "../../assets/brain.png";

const Logo = () => {
  return (
    <div className="logo-container">
      <Tilt
        className="Tilt br2 shadow-2 tc"
        options={{ max: 55 }}
        style={{ width: "80px", height: "80px" }}
      >
        <div className="Tilt-inner pa3">
          <img src={brain} alt="brain" style={{ paddingTop: "5px" }} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
