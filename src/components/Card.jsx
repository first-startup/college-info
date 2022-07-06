import React from "react";
import "./css/Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={props.src}
          alt={props.name}
        />
      </div>
      <div className="card-content">
        <h2 className="card-name">{props.name}<small className="card-cllg">:{props.cllgName}</small></h2>
        <p className="card-desc">{props.description}</p>
        <div className="card-tags">
          <div className="tag">{props.tag1}</div>
          <div className="tag">{props.tag2}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
