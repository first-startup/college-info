import { useState } from "react";
import "./App.css";
import CardWrap from "./components/CardWrap";
import Navbar from "./components/Navbar";

function App() {
  const startups = [
    { id: 1, 
      name: "Ayush's Startup",
      cllgName: "Manipal",
      src: "https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=800", 
      tag1: "tech", 
      tag2: "business", 
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim natus expedita nostrum quam incidunt."
    },
    { id: 2, 
      name: "Chintan's Startup",
      cllgName: "Manipal",
      src: "https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=800", 
      tag1: "sales", 
      tag2: "manufacturing", 
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim natus expedita nostrum quam incidunt."
    },
    { id: 3, 
      name: "Ayush's Startup",
      cllgName: "Unknown",
      src: "https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=800", 
      tag1: "tech", 
      tag2: "business", 
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim natus expedita nostrum quam incidunt."
    },
    { id: 4, 
      name: "Chintan's Startup",
      cllgName: "Unknown",
      src: "https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=800", 
      tag1: "sales", 
      tag2: "manufacturing", 
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim natus expedita nostrum quam incidunt."
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStartups, setFilteredStartups] = useState(startups);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if(searchTerm !== ""){
      const filteredStartups = startups.filter(startup => {

        // Search related to startup name or college name
        return startup.cllgName.toLowerCase().includes(searchTerm.toLowerCase()) || startup.name.toLowerCase().includes(searchTerm.toLowerCase());

        // Search related to the whole object
        // return Object.values(startup)
        // .join(" ")
        // .toLowerCase()
        // .includes(searchTerm.toLowerCase());
      });
      setFilteredStartups(filteredStartups);
    }
    else{
      setFilteredStartups(startups);
    }
  }

  return (
    <div className="App">
      <Navbar term={searchTerm} searchKeyword={searchHandler} />
      <div className="card-holder">
        <CardWrap startups={filteredStartups} />
      </div>
    </div>
  );
}

export default App;
