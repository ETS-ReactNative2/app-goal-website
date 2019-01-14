import React from "react";
import pageHeight from "./pageHeight";
import "./Image.css";

const Image = ({ headerHeight, windowHeight: height }) => (
  <div
    id="carouselExampleIndicators"
    className="carousel slide"
    data-ride="carousel"
  >
    <ol className="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        className="active"
      />
      <li data-target="#carouselExampleIndicators" data-slide-to="1" />
      <li data-target="#carouselExampleIndicators" data-slide-to="2" />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div
          id="carousel-first"
          className="d-block w-100"
          style={{ height: height - headerHeight }}
        />
      </div>
      <div className="carousel-item">
        <div
          id="carousel-second"
          className="d-block w-100"
          style={{ height: height - headerHeight }}
        />
      </div>
      <div className="carousel-item">
        <div
          id="carousel-third"
          className="d-block w-100"
          style={{ height: height - headerHeight }}
        />
      </div>
    </div>
    <a
      className="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
);

Image.defaultProps = {
  headerHeight: 60,
  windowHeight: 768
};

export default pageHeight(Image);
