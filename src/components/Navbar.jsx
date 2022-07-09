import React, {useRef} from "react";
import "./css/Navbar.css";
const Navbar = (props) => {

  const inputEl = useRef("");
  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value)
  }

  return (
    <nav>
      <div className="nav-wrapper container"> 
        <h2 className="nav-logo">LOGO</h2>

        <input
          ref={inputEl}
          type="search"
          className="search__input"
          placeholder="Search for the college or startup"
          value={props.term}
          onChange={getSearchTerm}
        />
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
