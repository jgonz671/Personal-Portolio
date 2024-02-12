import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from '../routes/Contact';
import Project from '../routes/Project';
import History from '../routes/History';
import Text from '../routes/Text'
import Home from '../routes/Home';

function Layout() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Text />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </main>
  );
}

export default Layout;