import React from 'react'
import '../styles/Home.css'
import Typewriter from "typewriter-effect";

function Home(){

  return <div className="typewriter-container">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(60)
              .typeString("Julian Gonzalez.")
              .pauseFor(250)
              .typeString("<br>")
              .pauseFor(250)
              .typeString("Software Engineering.")
              .start()
          }}
        />
  </div>;

}

export default Home; 