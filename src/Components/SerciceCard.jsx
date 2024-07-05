import React from "react";
import "../Components/ServiceCard.css";

const SerciceCard = (props) => {
    const {title, text, serviceImage} = props
  return (
    <div className="serviceCard">
      <img src={serviceImage} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default SerciceCard;
