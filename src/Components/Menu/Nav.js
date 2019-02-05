import React, { Fragment } from "react";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/fontawesome-free-brands";

const Nav = ({ onMenuClick, inline }) => {
  const classes = {
    list: inline
      ? "list-inline d-flex justify-content-end align-items-center"
      : "list-group list-group-flush",
    item: inline ? "list-inline-item" : "list-group-item"
  };
  const socialItems = (
    <Fragment>
      <li className={cn("social-icons")}>
        <a className="nav-link" href="#">
          <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff" }} />
        </a>
      </li>
      <li className={cn("social-icons")}>
        <a className="nav-link" href="#">
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff" }} />
        </a>
      </li>
    </Fragment>
  );
  return (
    <Fragment>
      <ul className={classes.list}>
        <li className={classes.item}>
          <a href="#home" className="nav-link" onClick={onMenuClick}>
            HOME
          </a>
        </li>
        <li className={classes.item}>
          <a href="#sobre" className="nav-link" onClick={onMenuClick}>
            QUEM SOMOS
          </a>
        </li>
        <li className={classes.item}>
          <a href="#projetos" className="nav-link" onClick={onMenuClick}>
            PROJETOS
          </a>
        </li>
        <li className={classes.item}>
          <a href="#depoimentos" className="nav-link" onClick={onMenuClick}>
            DEPOIMENTOS
          </a>
        </li>
        <li className={classes.item}>
          <a href="#contato" className="nav-link" onClick={onMenuClick}>
            CONTATO
          </a>
        </li>
        {inline && (
          <Fragment>
            <li
              className={cn(classes.item, "bg-white")}
              style={{ width: 2, height: 20 }}
            />
            {socialItems}
          </Fragment>
        )}
      </ul>
      {!inline && (
        <ul className="d-flex m-0 justify-content-end">{socialItems}</ul>
      )}
    </Fragment>
  );
};

export default Nav;
