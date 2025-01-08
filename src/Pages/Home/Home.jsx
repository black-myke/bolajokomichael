import React, { useEffect, useState } from "react";
import "../Home/home.css";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import github from "../../assets/Images/github2.svg";
import html from "../../assets/Images/html-logo.svg";
import css from "../../assets/Images/css-logo.svg";
import bootstrap from "../../assets/Images/bootstrap.svg";
import Profile from "../../assets/Images/avi.jpg";
import About from "../AboutMe/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";

const Home = () => {
  const mailLink =
    "mailto:michaelbolajoko@gmail.com?subject=Job%20Proposal&body=Hi%20Michael, I have a job proposal!";
  const Resume =
    "https://drive.google.com/file/d/1x16rQEjht5B4Pc46K4n_C97Zz_OPYXF7/view";


  const names = ["React Developer", "Web Designer", "Frontend Web Developer"];
  const [currentName, setCurrentName] = useState(names[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [names.length]);

  useEffect(() => {
    setCurrentName(names[index]);
  }, [index, names]);

  return (
    <div className="home-head">

      <Container fluid className="home-section">
        <Row className="home-main">
          <Col xs={12} lg={6} className="home-text">
            <h2 className="hi">Hi,</h2>
            <h1 className="intro">
              I'm <span>Bolajoko Opeoluwa Michael</span>
            </h1>
            <h2 className="stack">
              <span key={currentName}>{currentName}</span>
            </h2>
          </Col>

          <Col xs={12} lg={6} className="profile-img">
            <img className="image" src={Profile} alt="Michael Bolajoko" />
          </Col>
        </Row>

        <Row className="resume-work">
          <Col className="letsWork d-block" xs={6} sm={6} lg={12}>
            <a target="_blank" href={mailLink}>
              Let's Work
            </a>
          </Col>

          <Col className="letsWork go-resume" xs={6} sm={6} lg={0}>
            <a target="_blank" href={Resume}>
              My Resume
            </a>
          </Col>
        </Row>
      </Container>

      <div className="mobile-home">
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
