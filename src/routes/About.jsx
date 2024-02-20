import React from 'react';
import githubMark from '../img/github-mark.png';
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
        <img src={githubMark} alt="Profile Picture" className="profile-pic" />
        <div className="about-content">
          <h1>Hi, I'm Julian.</h1>
          <p>I'm a full-stack developer with a passion for creating intuitive and interactive web applications. I have experience in JavaScript, React, Node.js, and more.</p>
          <p>In my free time, I enjoy exploring new technologies and contributing to open-source projects.</p>
        </div>
      </animated.div>
    );
  }
  
  export default About;