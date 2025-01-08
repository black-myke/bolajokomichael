import React from "react";
import "../Skills/Skills.css";
import { Container } from "react-bootstrap";
import SerciceCard from "../../Components/SerciceCard";
import services from "../../Components/MyServices";
import skills from "../../Components/MySkills";

const Skills = () => {

  function createService(serviceInfo) {
    return(
      <SerciceCard 
        key={serviceInfo.id}
        title={serviceInfo.title}
        text={serviceInfo.text}
        serviceImage={serviceInfo.image}
      />
    )
  }


  return (
    <div className="home-head">

      <div className="skill-section">
        <Container fluid className="skills">
          <h2 className="aboutHeading">
            <span>Sk</span>ills
          </h2>

          <div className="skill-container">
            {skills.map((skill => (
              <div key={skill.id} className="skill-image">
                <img height={40} width={40} src={skill.image} alt="" />
                <p>{skill.text}</p>
              </div>
            )))}
          </div>


        </Container>


        <div className="services">
          <h2 className="aboutHeading">
              <span>Se</span>rvices
          </h2>
          <h3 className="offer">What I provide</h3>

          <div className="serviceContainer">
            {services.map(createService)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
