import React from "react";
import Card from "./Card";

const CardWrap = (props) => {
  // Conditional Rendering
  if(props.startups.length === 0){
    return(
      <h2>No Startups Found</h2>
    );
  }
  else{
    return (
      <div className="cardwrap">
        {props.startups.map((startup) => (
          <Card key={startup.id} {...startup} />
        ))}
      </div>
    );
  } 
};

export default CardWrap;
