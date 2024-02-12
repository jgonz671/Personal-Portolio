import React from 'react'
import '../styles/Text.css'
import Typewriter from "typewriter-effect";

function Text(){

    return <div className="typewriter-container">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("My name is Julian Gonzalez")
                .pauseFor(1000)
                .start()
            }}
          />
    </div>;
}

export default Text; 