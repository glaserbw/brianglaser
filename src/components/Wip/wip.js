import React, { Component } from 'react';
import './wip.css';

class Wip extends Component {
  render() {
    return (
        <main>
          <div className="intro">Hi, I'm Brian Glaser.</div>
          <div className="tagline">Full-Stack Developer | Solutions Engineer | Digital Strategist</div>
          
          <div className="icons-social">
            <a target="_blank" href="https://github.com/glaserbw"><i className="fab fa-github"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/brian-w-glaser/"><i className="fab fa-linkedin"></i></a>
            <a target="_blank" href="mailto:glaserbw@gmail.com"><i className="far fa-envelope"></i></a>
            <a target="_blank" href ="/src/assets/BrianGlaser_Resume2018.pdf"><i className="fas fa-file-pdf"></i></a>
          </div>
        </main>
    );
  }
}

export default Wip;