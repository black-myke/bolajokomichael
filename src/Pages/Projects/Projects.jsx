import React from "react";
import "../Projects/Projects.css";
import { Container, Row, Col, } from "react-bootstrap";
import ProjectCard from "../../Components/ProjectCard";
import TXT from "../../assets/Images/TXT.png";
import Digiplus from "../../assets/Images/Digiplus.png";
import Tour from "../../assets/Images/Tour.png";
import Calc from "../../assets/Images/Calculator.png";

import projects from "../../Components/MyProjects";

const Projects = () => {
  const viatour = "https://responsive-page-group-7.vercel.app/";
  const digi = "https://group-7-product-page.vercel.app/";
  const calculator = "https://black-myke.github.io/Project-Calculator/";
  const academy = "https://txt-academy.vercel.app/";

  function createProjectCard(projectinfo) {
    return (
      <ProjectCard 
        key={projectinfo.id}
        webImg={projectinfo.webImg}
        name={projectinfo.name}
        tools={projectinfo.tools}
        info={projectinfo.info}
        link={projectinfo.lnk}
      />
    );
  }

  
  return (
    <div className="home-head">
      <div className="project-section">
        <h2 className="aboutHeading">
          <span>Pr</span>ojects
        </h2>
        
        <div className="project-container">
          {projects.map(createProjectCard)}
        </div>
      </div>
    </div>
  );
};

export default Projects;
