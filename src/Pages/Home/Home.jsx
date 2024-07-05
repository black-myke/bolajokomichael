import React, { useEffect, useState } from "react";
import "../Home/home.css"
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";
import github from "../../assets/Images/github2.svg"
import html from "../../assets/Images/html-logo.svg"
import css from "../../assets/Images/css-logo.svg"
import bootstrap from "../../assets/Images/bootstrap.svg"
import Profile from "../../assets/Images/avi.jpg"


const Home = () => {
  const mailLink = "mailto:michaelbolajoko@gmail.com?subject=Job%20Proposal&body=Hi%20Michael, I have a job proposal!";

  const names = [
    "React Developer",
    "Web Designer",
    "Frontend Web Developer",
  ];
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
      <div className="tools">
        <img className="github" src={github} alt="github" />
        <img className="css" src={css} alt="css" />
        <img className="html" src={html} alt="html" />
        <img className="bootstrap" src={bootstrap} alt="" />
        
      </div>

      <Container fluid className="home-section">
        <Row>
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

          <Col className="letsWork" xs={12} lg={12}>
            <a target="_blank" href={mailLink}>
              Let Work!
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home