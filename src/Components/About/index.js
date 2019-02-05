import React from "react";
import Page from "../Page";
import drawingHouse from "../../images/art/drawing_house.png";

const style = {
  fontStyle: "italic",
  padding: "10px 0 10px 20px",
  fontSize: "0.95rem",
  borderColor: "#149dcc !important",
  borderWidth: "3px",
  color: "#767676",
  borderLeft: "2px solid"
};

const About = ({ offsetTop }) => (
  <Page id="home" offsetTop={offsetTop}>
    <div
      className="h-100 d-flex flex-column flex-sm-row justify-content-center align-content-center m-auto"
      style={{ maxWidth: 768 }}
    >
      <figure className="m-auto" style={{ width: "65%", maxWidth: 280 }}>
        <img className="img-fluid" src={drawingHouse} alt="First slide" />
      </figure>
      <div className="m-auto" style={{ maxWidth: 900 }}>
        <blockquote style={style}>
          <p>
            Nullam at tellus a ante dictum sagittis. Aenean malesuada, turpis
            non aliquam blandit, Aenean malesuada, turpis non aliquam blandit,
            Aenean malesuada, turpis non aliquam blandit nisl dui pellentesque
            tortor, malesuada consectetur sem lectus sed lacus.
          </p>
          <small>
            by <cite>Winston Churchill</cite>
          </small>
        </blockquote>
      </div>
    </div>
  </Page>
);

export default About;
