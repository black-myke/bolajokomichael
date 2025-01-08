import React from "react";
import "../AboutMe/about.css";
import { Container, Col, Row } from "react-bootstrap";
import Profile from "../../assets/Images/avi.jpg";
import aboutAvi from "../../assets/Images/about-picture.jpg"
import Mail from "../../assets/Images/email-svg.svg"
import useLinkedIn from "../../assets/Images/linkedin.svg"


const About = () => {
  const mailLink = "mailto:michaelbolajoko@gmail.com?subject=Work%20Proposal&body=Hi%20Michael,";
  const linkedinLink = "www.linkedin.com/in/michael-bolajoko";
  return (
    <div className="home-head">

      <Container fluid className="home-section">
        <Row>
          <Col xs={12} lg={6} className="profileAbout-img">
            <img
              className="about-image"
              src={aboutAvi}
              alt="Bolajoko Michael"
            />
          </Col>

          <Col xs={12} lg={6} className="about-text">
            <h2 className="aboutHeading">
              <span>Ab</span>out Me
            </h2>
            <p className="aboutPara">
              &nbsp; &nbsp; &nbsp; As a dedicated web developer, I specialize in
              frontend technologies such as HTML, CSS, JavaScript, ReactJs, and
              Bootstrap. With a foundation rooted in business administration, I
              bring a unique blend of technical expertise and strategic insight
              to every project. I thrive in collaborative environments, working
              closely with clients and fellow developers to create engaging,
              innovative and intuitive web experiences. My passion lies in
              designing clean, responsive interfaces that combine aesthetic
              appeal with seamless functionality as well as SEO. I am committed
              to delivering solutions that not only meet your needs but exceed
              expectations, ensuring your web presence stands out in today's
              competitive landscape. <br />
              Passionate about technology, music, movies, climate, animals and
              lifestyle.
            </p>

            {/* <br /> */}
            <h2 className="aboutHeading">
              <span>Co</span>ntact Me
            </h2>

            <div className="contact">
              <div className="mail">
                <img src={Mail} alt="" />
                <a target="_blank" href={mailLink}>
                  michaelbolajoko@gmail.com
                </a>
              </div>

              <div className="linkedinProfile">
                <img src={useLinkedIn} alt="" />
                <a target="_blank" href={linkedinLink}>
                  Michael Bolajoko
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
