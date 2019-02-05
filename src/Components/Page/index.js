import React, { Component } from "react";
import cn from "classnames";

class Page extends Component {
  render() {
    const {
      className,
      offsetTop: top,
      children,
      withHeader,
      classes,
      ...props
    } = this.props;
    return (
      <div
        {...props}
        className={cn("page-container", className)}
        style={{
          ...props.style,
          top
        }}
      >
        <div className={cn("page-wrapper", classes.wrapper)}>
          <div style={{ minHeight: withHeader ? 60 : 0 }} />
          <div className="page-content" style={{ height: "calc(100% - 60px)" }}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Page.defaultProps = {
  offsetTop: 0,
  withHeader: true,
  classes: {}
};

export default Page;
