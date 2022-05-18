import React from "react";
// import { NavLink } from "react-router-dom";
import "../Component/Card.css";

const Card = (props) => {
  return (
    <>
      <div className="container">
        <div className="cards">
          <div className="card">
            <img
              src={props.imgsrc}
              className="card_img"
              alt="image"
              width="215px"
              height="230px"
            />
            <div className="card-info">
              <span className="card_category">{props.title}</span>
              <h3 className="card_title">{props.sname}</h3>
              <p className="card_text">
                Color-hex gives information about colors including color models
                (RGB,HSL,HSV and CMYK), Triadic colors, monochromatic colors and
                analogous colors calculated in color page. Color-hex.com also
                generates a simple css code for the selected color.
              </p>
              <a href={props.link} className="btn btn-primary">
                <button> Click to explore</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
