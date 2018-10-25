import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
        <footer>
          <div className="tagline">Contact</div>
          <div className="icons-social">
            <a target="_blank" href="https://github.com/glaserbw"><i className="fab fa-github"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/brian-w-glaser/"><i className="fab fa-linkedin"></i></a>
            <a target="_blank" href="mailto:glaserbw@gmail.com"><i className="far fa-envelope"></i></a>
            <a target="_blank" href ="https://drive.google.com/file/d/1CWWai4iXAyws1uXSCTVl7hdxV4Hh_5as/view?usp=sharing"><i className="fas fa-file-pdf"></i></a>
          </div>
        </footer>
    );
  }
}

export default Contact;