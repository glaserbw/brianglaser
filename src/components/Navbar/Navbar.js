import React, { Component } from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Navbar.css';


class Navbar extends Component {
  render() {
    return (
        <header className="navbar">
          <nav className="navbar_navigation">
            <div className="toolbar__toggle-button">
              <DrawerToggleButton click={this.props.drawerClickHandler} />
            </div>
            <div className="navbar_logo"><a href="/">The Logo</a></div>
            <div className="spacer"></div>
            <div className="navbar_navigation_items">
              <ul>
                <li><a href="/">About</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Contact</a></li>
              </ul>
            </div>
          </nav>
        </header>
    );
  }
}

export default Navbar;



