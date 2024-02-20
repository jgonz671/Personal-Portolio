import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from '../routes/Contact';
import Project from '../routes/Project';
import History from '../routes/History';
import About from '../routes/About';
import Home from '../routes/Home';

function Layout() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </main>
  );
}

export default Layout;