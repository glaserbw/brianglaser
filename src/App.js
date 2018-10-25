import React, { Component } from 'react';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// PAGE IMPORTS
import Navbar from './components/Navbar/Navbar';
// import Home from './components/Home/Home';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Main from './components/Main/Main';



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
        <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler} />
        {backdrop}

        {/* <Home /> */}
        <ScrollableAnchor id={'Main'}><Main /></ScrollableAnchor>
        <ScrollableAnchor id={'About'}><About /></ScrollableAnchor>
        <ScrollableAnchor id={'Project'}><Project /></ScrollableAnchor>
        <ScrollableAnchor id={'Contact'}><Contact /></ScrollableAnchor>
      </div>
    );
  }
}

export default App;
