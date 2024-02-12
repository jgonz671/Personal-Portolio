import React from 'react'
import '../styles/Home.css'
import Typewriter from "typewriter-effect";

function Home(){

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

export default Home; 