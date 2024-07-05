import React from "react";
import "../Components/ProjectCard.css"

const ProjectCard = (props) => {
    const { name, tools, info, webImg, link } = props;
  return (
    <div className="projectCard">
      <img src={webImg} alt="" />

      <h3>{name}</h3>

      <h4>Tools: {tools}</h4>

      <p>{info}</p>

      <div className="projectLink">
        <a href={link} target="_blank">Go to Page</a>
      </div>
    </div>
  );
};

export default ProjectCard;
