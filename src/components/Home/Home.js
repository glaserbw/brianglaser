import React, { Component } from 'react';
import './Home.css';

// Parallax effects
import { Parallax, Background } from 'react-parallax';

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