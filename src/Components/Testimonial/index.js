import React from "react";
import Page from "../Page";
import "./Testimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import image1 from "../../images/examples/test_1.jpg";
import image2 from "../../images/examples/test_2.jpg";
import image3 from "../../images/examples/test_3.jpg";

const Testimonial = ({ offsetTop }) => (
  <Page offsetTop={offsetTop}>
    <div id="testimonials" className="container">
      <div className="h-100 d-flex flex-column justify-content-center align-content-center">
        <div className="">
          <h2>Depoimentos</h2>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#myCarousel" data-slide-to="1" />
              <li data-target="#myCarousel" data-slide-to="2" />
            </ol>
            <div className="carousel-inner mx-auto" style={{ maxWidth: 600 }}>
              <div className="item carousel-item active">
                <div className="img-box">
                  <img src={image1} alt="" />
                </div>
                <p className="testimonial">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  eu sem tempor, varius quam at, luctus dui. Mauris magna metus,
                  dapibus nec turpis vel, semper malesuada ante. Idac bibendum
                  scelerisque non non purus. Suspendisse varius nibh non
                  aliquet.
                </p>
                <p className="overview">
                  <b>Paula Wilson</b>, Media Analyst
                </p>
              </div>
              <div className="item carousel-item">
                <div className="img-box">
                  <img src={image2} alt="" />
                </div>
                <p className="testimonial">
                  Vestibulum quis quam ut magna consequat faucibus. Pellentesque
                  eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus.
                  Pellentesque viverra sagittis quam at mattis. Suspendisse
                  potenti. Aliquam sit amet gravida nibh, facilisis gravida
                  odio.
                </p>
                <p className="overview">
                  <b>Antonio Moreno</b>, Web Developer
                </p>
              </div>
              <div className="item carousel-item">
                <div className="img-box">
                  <img src={image3} alt="" />
                </div>
                <p className="testimonial">
                  Phasellus vitae suscipit justo. Mauris pharetra feugiat ante
                  id lacinia. Etiam faucibus mauris id tempor egestas. Duis
                  luctus turpis at accumsan tincidunt. Phasellus risus risus,
                  volutpat vel tellus ac, tincidunt fringilla massa. Etiam
                  hendrerit dolor eget rutrum.
                </p>
                <p className="overview">
                  <b>Michael Holz</b>, Seo Analyst
                </p>
              </div>
            </div>
            <a
              className="carousel-control left carousel-control-prev"
              href="#myCarousel"
              data-slide="prev"
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </a>
            <a
              className="carousel-control right carousel-control-next"
              href="#myCarousel"
              data-slide="next"
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </Page>
);

export default Testimonial;
