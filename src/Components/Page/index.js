import React, { Component } from "react";
import cn from "classnames";
import pageHeight from "../pageHeight";

class Page extends Component {
  render() {
    const {
      offsetTop: top,
      headerHeight: paddingTop,
      windowHeight: height,
      children
    } = this.props;
    return (
      <div
        className="page-container"
        style={{
          top
        }}
      >
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            ...child.props,
            className: cn(child.props.className, "page-wrapper"),
            style: { ...child.props.style, maxHeight: height, paddingTop }
          })
        )}
      </div>
    );
  }
}

Page.defaultProps = {
  offsetTop: 0
};

export default pageHeight(Page);
