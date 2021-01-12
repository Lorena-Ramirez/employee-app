import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import SearchBar from "./SearchBar/SearchBar";
import Table from "./Table/Table";
import API from "../utils/API";


class EmployeeContainer extends Component {
  state = {
    allEmployees: null,
    filteredEmployees: null,
    search: ""
  };

  componentDidMount() {
    API.search()
    .then(res => {this.setState({ allEmployees: res.data.results, filteredEmployees: res.data.results}); console.log(this.state.allEmployees);})
    .catch(err => console.log(err));
  }
  
  render() {
    return (
      <>
      <Jumbotron />
      <SearchBar
      value={this.state.search}
      handleInputChange={this.handleInputChange}
      handleFormSubmit={this.handleFormSubmit}
      resetTable={this.resetTable}
      />
      <Table employees= {this.state.filteredEmployees} />
      </>
    )
  }

};

export default EmployeeContainer;