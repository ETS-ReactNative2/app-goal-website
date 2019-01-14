import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/fontawesome-free-brands";
import "./Menu.css";
import logo from "../goal_logo_2_just2.png";

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          padding: "0 10px",
          backgroundColor: "#000000"
        }}
      >
        <a className="navbar-brand" href="#">
          <img style={{ maxHeight: "50px" }} src={logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link " href="#home">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                PROJETOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#who-we-are">
                QUEM SOMOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
                DEPOIMENTOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PARCEIRO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                CONTATO
              </a>
            </li>
          </ul>
          <ul className="navbar-nav d-inline-block" id="social-icons-group">
            <li className="nav-item d-inline-block p-1 social-icons">
              <a className="nav-link" href="#">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#ffffff" }}
                />
              </a>
            </li>
            <li className="nav-item d-inline-block p-1 social-icons">
              <a className="nav-link" href="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#ffffff" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
