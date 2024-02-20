import React, { useEffect, useState }  from 'react';
import githubMark from '../img/github-mark.png'
import websiteMark from '../img/website-mark.png'
import '../styles/Project.css';

function Project() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const projects = [
    {
      title: "Rubbish Radar",
      description: "Web application designed to display user-located waste disposal (trash can) points on an interactive map.",
      languages: ["JavaScript", "Vue.js", "Node.js", "CSS", "HTML", "Google Maps API", "Firebase", "Firebase OAuth"],
      githubLink: "https://github.com/jgonz671/Rubbish-Radar",
      websiteLink: "https://rubbishradar-695ae.web.app"
    },
    {
      title: "Labyrinth Looter",
      description: "Terminal-based RPG game that traverses through a dynamically generated dungeon.",
      languages: ["C++", "Valgrind", "Google Test", "HTML"],
      githubLink: "https://github.com/jgonz671/Labyrinth-Looter1"
    },
    {
      title: "Home Security System",
      description: "Home security system designed to alert users of motion detection.",
      languages: ["C++", "Arduino Uno R3, Arduino IDE"],
      githubLink: "https://github.com/jgonz671/Home-Security-System"
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className={`${isAnimated ? 'project-wrapper run-animation' : 'project-wrapper'}`}>
          <div className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-languages">
              {project.languages.map((language, idx) => (
                <span key={idx} className="language">{language}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <img src={githubMark} alt="GitHub Link" className="project-icon" />
              </a>
              {project.websiteLink && (
                <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                  <img src={websiteMark} alt="Website Link" className="project-icon" />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 

export default Project;
