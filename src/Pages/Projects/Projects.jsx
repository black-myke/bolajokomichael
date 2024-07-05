import React from "react";
import "../Projects/Projects.css";
import { Container, Row, Col } from "react-bootstrap";
import github from "../../assets/Images/github2.svg";
import html from "../../assets/Images/html-logo.svg";
import javascript from "../../assets/Images/javascript.png";
import css from "../../assets/Images/css-logo.svg";
import reactLogo from "../../assets/Images/react-logo.svg";
import bootstrap from "../../assets/Images/bootstrap.svg";
import ProjectCard from "../../Components/ProjectCard";
import TXT from "../../assets/Images/TXT.png";
import Digiplus from "../../assets/Images/Digiplus.png";
import Tour from "../../assets/Images/Tour.png";
import Calc from "../../assets/Images/Calculator.png";

const Projects = () => {
  const viatour = "https://responsive-page-group-7.vercel.app/";
  const digi = "https://group-7-product-page.vercel.app/";
  const calculator = "https://black-myke.github.io/Project-Calculator/";
  const academy = "https://txt-academy.vercel.app/";

  
  return (
    <div className="home-head">
      <div className="tools">
        <img className="github" src={github} alt="github" />
        <img className="css" src={css} alt="css" />
        <img className="html" src={html} alt="html" />
        <img className="bootstrap" src={bootstrap} alt="" />
        <img src={reactLogo} alt="" className="react" />
        <img
          src={javascript}
          height={90}
          width={90}
          alt=""
          className="javascript"
        />
      </div>

      <div className="project-section">
        <Container>
          <h2 className="aboutHeading">
            <span>Pr</span>ojects
          </h2>

          <Row>
            <Col className="project-card" xs={12} sm={12} md={6} lg={6}>
              <ProjectCard
                webImg={TXT}
                name={"TXT Academy"}
                tools={"HTML, CSS, Bootstrap"}
                info={
                  "A static landing page for Forex Academy. It serves as a platform for students to enroll into the academy. Responsive across all device screen sizes."
                }
                link={academy}
              />
            </Col>

            <Col className="project-card" xs={12} sm={12} md={6} lg={6}>
              <ProjectCard
                webImg={Digiplus}
                name={"DigiPlus Product Page"}
                tools={"HTML, Bootstrap"}
                info={
                  "An e-commerce page to showcase different product offered by Digiplus. Responsive across all device screen sizes"
                }
                link={digi}
              />
            </Col>

            <Col className="project-card" xs={12} sm={12} md={6} lg={6}>
              <ProjectCard
                webImg={Tour}
                name={"Viatours"}
                tools={"HTML, CSS, Bootstrap"}
                info={
                  "A landing page serving as a tour guide for tourist, showing different destinations for tourist."
                }
                link={viatour}
              />
            </Col>

            <Col className="project-card" xs={12} sm={12} md={6} lg={6}>
              <ProjectCard
                webImg={Calc}
                name={"Non-Scientific Calculator"}
                tools={"HTML, CSS, Javascript"}
                info={
                  "Calculator developed with basic html, css and javascript"
                }
                link={calculator}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
