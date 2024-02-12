import React from 'react';
import '../styles/Project.css'; 

function Project() {
  return (
    <div className="project-details">
      <h2>Rubbish Radar</h2>
      <p>Developed a web-based application leveraging Vue.js framework focused on facilitating user-located waste disposal points displayed on an interactive map.</p>
      <p>Hosted the application on Google Firebase for scalable cloud computing capabilities.</p>
      <p>Integrated Google Maps API to render a custom map interface, featuring color-coded markers that distinguish various types of waste disposals.</p>
      <p>Introduced an upvote/downvote functionality exclusive to authenticated users to ensure data reliability.</p>
      <p>Implemented user authentication using Firebase OAuth enhancing user personalization and security.</p>

      <h2>Labyrinth Looter</h2>
      <p>Terminal-based RPG game in C++ that traverses through a dynamically generated simulated dungeon.</p>
      <p>Utilized Google Test framework to construct comprehensive test suites for each source file.</p>
      <p>Employed Valgrind to check for memory leaks and undefined memory usage.</p>

      <h2>Home Security System</h2>
      <p>Designed home security system on Arduino Uno R3 using ultrasonic sensor for motion detection, IR remote control for wireless disarming, and active buzzer for audible alarms.</p>
      <p>Optimized C++ code in Arduino IDE to utilize Arduino Uno R3 limited memory and processing capabilities.</p>
    </div>
  );
}

export default Project;