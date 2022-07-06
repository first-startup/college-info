import React from "react";
import Card from "./Card";

const CardWrap = () => {
  const startups = [
    { id: 1, 
      name: "Ayush's Startup",
      src: "https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=800", 
      tag1: "tech", 
      tag2: "business", 
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim natus expedita nostrum quam incidunt."
    },
    { id: 2, 
      name: "Chintan's Startup",
      src: "https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=800", 
      tag1: "sales", 
      tag2: "manufacturing", 
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim natus expedita nostrum quam incidunt."
    },
    { id: 3, 
      name: "Ayush's Startup",
      src: "https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=800", 
      tag1: "tech", 
      tag2: "business", 
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim natus expedita nostrum quam incidunt."
    },
    { id: 4, 
      name: "Chintan's Startup",
      src: "https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=800", 
      tag1: "sales", 
      tag2: "manufacturing", 
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim natus expedita nostrum quam incidunt."
    },
  ];
  return (
    <div className="cardwrap">
      {startups.map((startup) => (
        <Card key={startup.id} {...startup} />
      ))}
    </div>
  );
};

export default CardWrap;
