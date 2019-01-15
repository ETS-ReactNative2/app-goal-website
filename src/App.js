import React, { Component, Fragment } from "react";
import Swipe from "react-swipe-events";
import PageController from "./Components/PageController";
import pageHeight from "./Components/pageHeight";

import Image from "./Components/Image";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends Component {
  handleSwipe() {}

  render() {
    return (
      <Swipe onSwiping={this.handleSwipe.bind(this)}>
        <Image />
        <PageController />
      </Swipe>
    );
  }
}
export default pageHeight(App);
