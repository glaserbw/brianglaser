import React, { Component } from 'react';
import './Home.css';

// Parallax effects

// component imports
import Title from './Title'
import Image from './Image'

class Home extends Component {
  render() {
    return (

            <section className="home">  
              <Title />
              <Image />
            </section>
      
    );
  }
}

export default Home;