import React from "react";
import pageHeight from "../pageHeight";
import "./Page.css";

const P = Component => {
  class C extends React.Component {
    render() {
      const { headerHeight: paddingTop, windowHeight: height } = this.props;
      return (
        <div className="page-container" style={{ paddingTop, height }}>
          <Component />
        </div>
      );
    }
  }
  return pageHeight(C);
};

const Page = () => {
  return P;
};

export default Page;
