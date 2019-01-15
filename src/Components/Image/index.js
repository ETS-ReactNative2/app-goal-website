import React from "react";
import cn from "classnames";
import Page from "../Page";
import pageHeight from "../pageHeight";
import "./Image.css";

class Image extends React.Component {
  state = {
    current: 0,
    items: [
      { id: "carousel-first" },
      { id: "carousel-second" },
      { id: "carousel-third" }
    ]
  };

  prev() {
    let { current } = this.state;
    current -= 1;
    if (current < 0) current = 2;
    this.setState({ current });
  }

  next() {
    let { current } = this.state;
    current += 1;
    if (current > 2) current = 0;
    this.setState({ current });
  }

  componentDidMount() {
    setInterval(() => {
      this.next();
    }, 5000);
  }

  render() {
    const { offsetTop, headerHeight, windowHeight: height } = this.props;
    const { items, current } = this.state;
    return (
      <Page
        id="image"
        offsetTop={offsetTop}
        withHeader={false}
        classes={{ wrapper: "p-0 overflow-hidden h-100" }}
      >
        <div className="slider-container">
          <div className="slider-wrapper">
            {items.map((item, index) => (
              <div
                className="slider-item"
                style={{ left: `${(index - current) * 100}%` }}
              >
                <div
                  id={item.id}
                  className="d-block w-100"
                  style={{ height, paddingBottom: headerHeight }}
                />
              </div>
            ))}
          </div>
        </div>
      </Page>
    );
  }
}

Image.defaultProps = {
  headerHeight: 60,
  windowHeight: 768
};

export default pageHeight(Image);
