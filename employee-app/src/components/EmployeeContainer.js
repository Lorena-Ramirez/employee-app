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

  resetTable= event => {
    event.preventDefault();
    this.setState({
      filteredEmployees: this.state.allEmployees
    });
  };

  filterEmployee() {
    if(this.state.filteredEmployees === null){
      return
    }
    else{
      this.setState({
        filteredEmployees: this.state.allEmployees.filter(employee => employee.name.first.includes(this.state.search))
      });
    }
  };

  searchEmployee = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
    this.filterEmployee(); 
  };


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