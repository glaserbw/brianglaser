import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <section id="fullsingle" class="page-template-page-fullsingle-me">  
        <div className="fs-me">
            <div className="me-content">
                <div className="logo">
                    <img src="" alt="Logo" />
                </div>
                <div className="bio">
                    <p>This is me. I push pixels at&nbsp;<a href="#">Google</a>, write words on&nbsp;<a href="#">Medium</a>&nbsp;and spill thoughts on&nbsp;<a href="#">Twitter</a>.</p>
                </div>
            </div>
        </div>
      </section>
    );
  }
}

export default Home;