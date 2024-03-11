import React from 'react';
import profilePic from '../img/profile-pic.png'
import { useSpring, animated } from '@react-spring/web';
import '../styles/About.css';

function About() {
    const animationProps = useSpring({
      opacity:  1,
      from: { opacity:  0 },
      config: { duration:  1000 },
    });
  
    return (
      <animated.div className="about-container" style={animationProps}>
        <img src={profilePic} alt="Profile Picture" className="profile-pic" />
        <div className="about-content">
          <h1>Hi, I'm Julian.</h1>
          <p>I'm an undergraduate student at UCR studying computer engineering. With a curiosity that doesn't seem to die, 
            I'm always interested in discovering and learning about new things. I hope to advance my career in technology. 
          </p>
          <p>  
            For any business inquiries, shoot me an email through my contact page, or @julian.eg2003@gmail.com. Feel free to stay a while. :) 
          </p>
        </div>
      </animated.div>
    );
  }
  
  export default About;