import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
        <section id="#about" className="about">
          <div className="about-container">
              <div className="about-me">
                  <p className="about-me-headline">I'm a full-stack developer with a deep appreciation meaningful user communication</p>
                  <hr></hr>
                  <hr/>
                  <p className="about-me-body">After over 10+ years experience in the digital advertising space, I decided to refocus my career and chase a passion for web development. What started as hobby/side projects quickly evolved into a career pivot to software development. Having worked in a multiude of different roles across tech, I understand what it takes for cross-functional teams to be successful. </p>
                  <br/>
                  <p className="about-me-body">When not coding/tinkering, you can find me in the mountains with my wife and Australian Cattle Dog.</p>
              <div className="skills-container">
                <ul className="skills-frontend">
                  <li>Frontend:</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>React.js</li>
                  <li>Boostrap</li>
                  <li>Materialize</li>
                  <li>HTML5 Canvas</li>
                  <li>Charts.js</li>
                </ul>
                <ul className="skills-backend">
                  <li><h3>Backend:</h3></li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>Python</li>
                  <li>Django</li>
                </ul>
                <ul className="skills-other">
                  <li><h3>Other:</h3></li>
                  <li>Heroku</li>
                  <li>JSON</li>
                  <li>DFP</li>
                  <li>Salesforce</li>
                  <li>Tableau</li>
                  <li>Microstrategy</li>
                </ul>
              </div>
              </div>
          </div>
        </section>
    );
  }
}

export default About;