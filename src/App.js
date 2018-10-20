import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// PAGE IMPORTS
import Navbar from './components/Navbar/Navbar';
import Wip from './components/Wip/wip';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';


class App extends Component {
  state = {
    sideDrawerOpen: false 
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {

      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div style={{height:'100%'}}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Wip /> 
      </div>
    );
  }
}

export default App;
