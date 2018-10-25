import React, { Component } from 'react';
import './Home.css';
import Brian from "../../assets/images/Brian_Mobile.jpg";


class Image extends Component {
  render() {
    return (    
        <div>
            <img className="brian-img" src={Brian}></img>
        </div>
    );
  }
}

export default Image;

