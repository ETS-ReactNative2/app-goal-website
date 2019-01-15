import React from "react";
import pageHeight from "../pageHeight";
import Menu from "../Menu";
import About from "../About";
import Testimonial from "../Testimonial";
import Contact from "../Contact";
import Projects from "../Projects";
import "./Page.css";

class PageController extends React.Component {
  state = {
    page: 0,
    lastScroll: 0
  };

  scrollListenerTimeout = null;

  componentWillMount() {
    window.addEventListener("scroll", () => {
      setTimeout(() => {
        this.handleScroll();
      }, 100);
    });
  }

  handleScroll() {
    clearTimeout(this.scrollListenerTimeout);
    this.scrollListenerTimeout = setTimeout(() => {
      this.changePage();
    }, 30);
  }

  changePage() {
    const { windowHeight: height } = this.props;
    let { lastScroll, page } = this.state;
    let scroll = window.pageYOffset;
    console.log(scroll);
    if (scroll > lastScroll + 50) {
      page = this.next(page);
    } else if (scroll < lastScroll - 50) {
      page = this.prev(page);
    }
    scroll = height * page;
    this.setState({ lastScroll: scroll, page });
    window.scroll(0, scroll);
  }

  prev(page) {
    page -= 1;
    if (page < 0) page = 0;
    return page;
  }

  next(page) {
    page += 1;
    if (page > 4) page = 4;
    return page;
  }

  handleSelectPage(menu) {
    let page;
    switch (menu) {
      case "#home":
        page = 0;
        break;
      case "#sobre":
        page = 1;
        break;
      case "#projetos":
        page = 2;
        break;
      case "#depoimentos":
        page = 3;
        break;
      case "#contato":
        page = 4;
        break;
      default:
        page = 0;
        break;
    }
    const { windowHeight: height } = this.props;
    this.setState({ page, scroll: height * page });
  }

  getOffsetTop(p) {
    const { windowHeight } = this.props;
    const { page } = this.state;
    if (page < p) return windowHeight;
    return 0;
  }

  render() {
    const { windowHeight: height } = this.props;
    const { page } = this.state;
    return (
      <div className="page-controller" style={{ height: height * 5 }}>
        <Menu
          bottom={page === 0}
          selectPage={this.handleSelectPage.bind(this)}
        />
        <About offsetTop={this.getOffsetTop(1)} />
        <Projects offsetTop={this.getOffsetTop(2)} />
        <Testimonial offsetTop={this.getOffsetTop(3)} />
        <Contact offsetTop={this.getOffsetTop(4)} />
        {/*<MapContainer/>*/}
      </div>
    );
  }
}

PageController.defaultProps = {
  page: 0
};

export default pageHeight(PageController);
