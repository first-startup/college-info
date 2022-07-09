import { useState } from "react";
import "./App.css";
import CardWrap from "./components/CardWrap";
import Navbar from "./components/Navbar";
// import TagSearch from "./components/TagSearch";

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
      tag1: "sales", 
      tag2: "manufacturing", 
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim natus expedita nostrum quam incidunt."
    },
    { id: 4, 
      name: "Chintan's Startup",
      cllgName: "Unknown",
      src: "https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=800", 
      tag1: "tech", 
      tag2: "business", 
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim natus expedita nostrum quam incidunt."
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  // const [selectedTag, setSelectedTag] = useState("");
  const [filteredStartups, setFilteredStartups] = useState(startups);

  // Search Filter
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if(searchTerm !== ""){
      const filteredStartups = startups.filter(startup => {

        // Search related to startup name or college name
        return startup.cllgName.toLowerCase().includes(searchTerm.toLowerCase()) || startup.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredStartups(filteredStartups);
    }
    else{
      setFilteredStartups(startups);
    }
  }

  // // Select tag Filter
  // const selectTagFilter = (selectedTag) => {
  //   setSearchTerm(selectedTag);
  //   if(selectedTag !== ""){
  //     const filteredStartups = startups.filter(startup => {

  //       // Search related to tag selected
  //       return startup.tag1.toLowerCase().includes(selectedTag.toLowerCase()) || startup.tag2.toLowerCase().includes(selectedTag.toLowerCase());
  //     });
  //     setFilteredStartups(filteredStartups);
  //   }
    
  // }

  return (
    <div className="App">
      <Navbar term={searchTerm} searchKeyword={searchHandler} />
      {/* <div className="tagSearch">
        <TagSearch searchTag={selectTagFilter} />
      </div> */}
      <div className="card-holder">
        <CardWrap startups={filteredStartups} />
      </div>
    </div>
  );
}

export default App;
