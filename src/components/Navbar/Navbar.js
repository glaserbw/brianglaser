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
            <div className="navbar_logo"><a href="/"></a></div>
            <div className="spacer"></div>
            <div className="navbar_navigation_items">
              <ul>
                <li className="link--underline-effect"><a href="#About">About</a></li>
                <li className="link--underline-effect"><a href="#Projects">Projects</a></li>
                <li className="link--underline-effect"><a href="#Contact">Contact</a></li>
              </ul>
            </div>
          </nav>
        </header>
    );
  }
}

export default Navbar;



