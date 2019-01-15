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
          top,
          paddingTop: withHeader ? 60 : 0
        }}
      >
        <div className={cn("page-wrapper", classes.wrapper)}>{children}</div>
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
