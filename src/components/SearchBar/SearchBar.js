import React from "react";
import "./styles.css";

function SearchBar(props) {
  return (
    <form className ="searchForm">
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <div className="search_container">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For an Employee"
          id="search"
        />        
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
