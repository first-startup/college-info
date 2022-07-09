import React from "react";
import "./css/TagSearch.css";

const TagSearch = (props) => {

    const getFilterTag = (e) => {
        props.searchTag(e.target.className);
      }
  return (
    <div className="tagBox">
      <h3>Filter Tags:</h3>
      <ul className="tag-list" onClick={getFilterTag}>
        <li className="tech" id="selectTag">Tech</li>
        <li className="business" id="selectTag">Business</li>
        <li className="sales" id="selectTag">Sales</li>
        <li className="manufacturing" id="selectTag">Manufactring</li>
      </ul>
    </div>
  );
};

export default TagSearch;
