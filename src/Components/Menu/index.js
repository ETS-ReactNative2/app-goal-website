import React, { Component } from "react";
import pageHeight from "../pageHeight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/fontawesome-free-brands";
import logo from "../../goal_logo_2_just2.png";
import "./Menu.css";

class Menu extends Component {
  state = {
    open: false
  };

  handleToggleMenu() {
    this.setState({ open: !this.state.open });
  }

  handleMenuClick(e) {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    this.props.selectPage(href);
  }

  render() {
    const { windowHeight, headerHeight } = this.props;
    const { open } = this.state;
    return (
      <nav
        id="menu"
        className="navbar navbar-expand-lg navbar-dark w-100"
        style={{
          padding: "0 10px",
          backgroundColor: "#000000",
          top: !this.props.bottom ? 0 : windowHeight - headerHeight
        }}
      >
        <a className="navbar-brand" href="#">
          <img style={{ maxHeight: "50px" }} src={logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.handleToggleMenu.bind(this)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          id="nav"
          style={{ top: open ? 0 : "-100%" }}
          onClick={this.handleToggleMenu.bind(this)}
        >
          <div className="d-flex flex-column justify-content-between">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a
                  href="#home"
                  className="nav-link"
                  onClick={this.handleMenuClick.bind(this)}
                >
                  HOME
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="#sobre"
                  className="nav-link"
                  onClick={this.handleMenuClick.bind(this)}
                >
                  QUEM SOMOS
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="#projetos"
                  className="nav-link"
                  onClick={this.handleMenuClick.bind(this)}
                >
                  PROJETOS
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="#depoimentos"
                  className="nav-link"
                  onClick={this.handleMenuClick.bind(this)}
                >
                  DEPOIMENTOS
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="#contato"
                  className="nav-link"
                  onClick={this.handleMenuClick.bind(this)}
                >
                  CONTATO
                </a>
              </li>
            </ul>
            <ul className="d-flex m-0 justify-content-end">
              <li className="list-group-item social-icons">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: "#ffffff" }}
                  />
                </a>
              </li>
              <li className="list-group-item social-icons">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "#ffffff" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Menu.defaultProps = {
  bottom: false
};

export default pageHeight(Menu);
