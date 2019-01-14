import React, { Component, Fragment } from "react";
import Swipe from "react-swipe-events";
import pageHeight from "./Components/pageHeight";
import Menu from "./Components/Menu";
import About from "./Components/About";
import { StickyContainer, Sticky } from "react-sticky";
import MapContainer from "./Containers/MapContainer";

import Image from "./Components/Image";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends Component {
  handleSwipe(e) {
    console.log(e);
  }
  render() {
    const { headerHeight } = this.props;
    return (
      <Fragment>
        <Image />
        <StickyContainer>
          <Sticky style={{ zIndex: 1000 }}>
            {({ style }) => (
              <div
                id="nav-bar-full"
                style={{
                  ...style,
                  height: headerHeight,
                  whiteSpace: "nowrap"
                }}
              >
                <Menu />
              </div>
            )}
          </Sticky>
          <About />
          <Projects />
          <Testimonial />
          <Contact />
          {/*<MapContainer/>*/}
        </StickyContainer>
      </Fragment>
    );
  }
}
export default pageHeight(App);
