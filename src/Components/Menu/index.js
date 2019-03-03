import React, { Component } from 'react';
import pageHeight from '../pageHeight';
import logo from '../../goal_logo_2_just2.png';
import Nav from './Nav';
import './Menu.css';

class Menu extends Component {
  state = {
    open: false
  };

  handleToggleMenu() {
    this.setState({ open: !this.state.open });
  }

  handleMenuClick(e) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
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
          padding: '0 10px',
          backgroundColor: '#000000',
          top: !this.props.bottom ? 0 : windowHeight - headerHeight
        }}
      >
        <button
          type="button"
          className="navbar-brand"
          style={{
            backgroundColor: 'transparent',
            border: 0,
            padding: 0,
            cursor: 'pointer'
          }}
        >
          <img style={{ maxHeight: '50px' }} src={logo} />
        </button>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.handleToggleMenu.bind(this)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div id="nav-desktop" className="w-100 d-flex">
          <Nav onMenuClick={this.handleMenuClick.bind(this)} inline />
        </div>
        <div
          id="nav-mobile"
          style={{ top: open ? 0 : '-100%' }}
          onClick={this.handleToggleMenu.bind(this)}
        >
          <div className="d-flex flex-column justify-content-between">
            <Nav onMenuClick={this.handleMenuClick.bind(this)} />
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
