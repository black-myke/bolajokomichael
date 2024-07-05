import React from "react";
import "../Skills/Skills.css";
import { Container, Col, Row } from "react-bootstrap";
import github from "../../assets/Images/github2.svg";
import html from "../../assets/Images/html-logo.svg";
import javascript from "../../assets/Images/javascript.png";
import css from "../../assets/Images/css-logo.svg";
import reactLogo from "../../assets/Images/react-logo.svg";
import bootstrap from "../../assets/Images/bootstrap.svg";
import useHtml from "../../assets/Images/html-logo-2.svg";
import useCss from "../../assets/Images/css-logo-2.svg";
import useBootstrap from "../../assets/Images/bootstrap-2.svg";
import useReact from "../../assets/Images/react-logo-2.svg";
import useGithub from "../../assets/Images/github-3.svg";
import Star from "../../assets/Images/star.svg"
import starHalf from "../../assets/Images/star-half.svg"
import SerciceCard from "../../Components/SerciceCard";
import Code from "../../assets/Images/code.svg"; import Flag from "../../assets/Images/flag.svg";
import Alarm from "../../assets/Images/alarm.svg"; import Computer from "../../assets/Images/computer-monitor.svg";
import Pen from "../../assets/Images/pen.svg"; import Notepad from "../../assets/Images/writing-notepad.svg";

const Skills = () => {
  return (
    <div className="home-head">
      <div className="tools">
        <img className="github" src={github} alt="github" />
        <img className="css" src={css} alt="css" />
        <img className="html" src={html} alt="html" />
        <img className="bootstrap" src={bootstrap} alt="" />
        <img src={reactLogo} alt="" className="react" />
        <img src={javascript} height={80} width={80} alt="" className="javascript"  />
      </div>

      <div className="skill-section">
        <Container>
          <h2 className="aboutHeading">
            <span>Sk</span>ills
          </h2>

          <Row>
            <Col className="skill-image" xs={6} sm={6} md={4} lg={4}>
              <img src={useHtml} alt="" />
              <p>HTML</p>
              <div className="rating">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
            </Col>

            <Col className="skill-image" xs={6} sm={6} md={4} lg={4}>
              <img src={useCss} alt="" />
              <p>CSS</p>
              <div className="rating">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
            </Col>

            <Col className="skill-image" xs={6} sm={6} md={4} lg={4}>
              <img height={40} width={36} src={javascript} alt="" />
              <p>JavaScript</p>
              <div className="rating">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={starHalf} alt="" />
              </div>
            </Col>

            <Col className="skill-image" xs={6} sm={6} md={4} lg={4}>
              <img src={useBootstrap} alt="" />
              <p>Bootstrap</p>
              <div className="rating">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
            </Col>

            <Col className="skill-image" xs={6} sm={6} md={4} lg={4}>
              <img src={useReact} alt="" />
              <p>ReactJS</p>
              <div className="rating">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={starHalf} alt="" />
              </div>
            </Col>

            <Col className="skill-image" xs={6} sm={6} md={4} lg={4}>
              <img src={useGithub} alt="" />
              <p>GitHub</p>
              <div className="rating">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={starHalf} alt="" />
              </div>
            </Col>
          </Row>
        </Container>

        {/* Services */}
        <Container className="services">
          <h2 className="aboutHeading">
            <span>Se</span>rvices
          </h2>

          <h3 className="offer">What I provide</h3>

          <Row className="serviceContainer">
            <Col className="serviceCol" xs={12} sm={12} md={6} lg={4}>
              <SerciceCard
                title={"Clean Code"}
                text={
                  "I write code that is easy to read and understand, following coding conventions and best practices. I make sure to use meaningful variable and function names, keeping functions small and focused on a single task"
                }
                serviceImage={Code}
              />
            </Col>

            <Col className="serviceCol" xs={12} sm={12} md={6} lg={4}>
              <SerciceCard
                title={"UI/UX"}
                text={
                  "I design interfaces that are intuitive and user-friendly, consider user needs and expectations throughout the design process while focusing on simplicity and clarity in layout and interactions"
                }
                serviceImage={Computer}
              />
            </Col>

            <Col className="serviceCol" xs={12} sm={12} md={6} lg={4}>
              <SerciceCard
                title={"Creative Design"}
                text={
                  "I think outside the box to create innovative solutions, experiment with different design concepts and styles. I also make sure to balance aesthetics with functionality and usability and collaborate with clients and colleagues to refine and enhance ideas"
                }
                serviceImage={Pen}
              />
            </Col>

            <Col className="serviceCol" xs={12} sm={12} md={6} lg={4}>
              <SerciceCard
                title={"Time Bound"}
                text={
                  "I set clear deadlines and milestones for project delivery, prioritize tasks based on their importance and urgency. I plan and allocate time effectively for each phase of the project, making sure to communicate progress regularly with my client."
                }
                serviceImage={Alarm}
              />
            </Col>

            <Col className="serviceCol" xs={12} sm={12} md={6} lg={4}>
              <SerciceCard
                title={"Branding"}
                text={
                  "I understand and align with the client's brand identity and values, provide websites that reflect the brand personality through design choices and messaging. I ensure that the user experience reinforces the brand's image, maintaining consistency in visual elements such as colors, fonts, and logos."
                }
                serviceImage={Flag}
              />
            </Col>

            <Col className="serviceCol" xs={12} sm={12} md={6} lg={4}>
              <SerciceCard
                title={"Accountability"}
                text={
                  "I communicate openly and honestly with clients and team members, follow through on commitments and deliver as promised. I learn from feedback and continuously improve my performance"
                }
                serviceImage={Notepad}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Skills;
