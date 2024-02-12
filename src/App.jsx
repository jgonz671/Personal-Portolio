import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import './App.css';

function App() {
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()

  window.addEventListener('mousemove', (e) => {
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })
  
  return (
    <div className="App">
      <Navbar />
      <Layout />
      <div className ="cursor"
      style = {{
        left: `calc(${cursorX}px - 15px)`,
        top: `calc(${cursorY}px - 15px)`
      }}
      >
      </div>
    </div>
  );
}

export default App;
