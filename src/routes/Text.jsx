import React from 'react'
import '../styles/Text.css'
import Typewriter from "typewriter-effect";

function Text(){

    return <div className="typewriter-container">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(60)
                .typeString("Julian Gonzalez.")
                .pauseFor(250)
                .typeString("<br>")
                .pauseFor(250)
                .typeString("Full Stack Developer.")
                .start()
            }}
          />
    </div>;
}

export default Text; 