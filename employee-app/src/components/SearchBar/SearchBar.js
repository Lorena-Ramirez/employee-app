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
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
        <button onClick={props.resetTable} className="btn btn-primary">
          Reset
        </button>
        
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
