import React from "react";
import "./Rank.css";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white">
        Hi <i>{name} 👋</i> ,
      </div>
      <div className="white">Your current entry count is : {entries}</div>
    </div>
  );
};

export default Rank;
