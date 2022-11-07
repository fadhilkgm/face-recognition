import React from "react";
import "./ImageLinkForm.css";
import { ReactComponent as ReactLogo } from "../../assets/upload.svg";
import { ReactComponent as HeroImg } from "../../assets/hero.svg";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <h1 className="heading">Detect Faces in an image by AI</h1>
      <div id="hero-image">
        <HeroImg className="hero-svg" />
      </div>

      <p className="f3"></p>
      <div className="container">
        <div className="form  pa4 br3 shadow-5">
          <input
            type="text"
            className="input-space"
            onChange={onInputChange}
            placeholder="Paste Your link here"
          />
          <button className="detect btn" onClick={onButtonSubmit}>
            Detect
          </button>
          <label>
            <input
              className="upload btn"
              type="button"
              value={`Upload Image`}
            />
            <ReactLogo className="svg" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
