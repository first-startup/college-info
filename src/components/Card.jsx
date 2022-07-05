import React from "react";
import "./css/Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
      </div>
      <div className="card-content">
        <h2>Chintan's startup</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          enim natus expedita nostrum quam incidunt.
        </p>
        <div className="card-tags">
          <div className="tag">sales</div>
          <div className="tag">manufacturing</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
