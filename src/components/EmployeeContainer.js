import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import SearchBar from "./SearchBar/SearchBar";
import Table from "./Table/Table";
import API from "../utils/API";


class EmployeeContainer extends Component {
  state = {
    allEmployees: "",
    filteredEmployees: "",
    search: "",
    isSorted: false,

  };

  componentDidMount() {
    API.search()
      .then(res => { this.setState({ allEmployees: res.data.results, filteredEmployees: res.data.results });})
      .catch(err => console.log(err));
  }
  sortTable =()=> {
    const filteredList = this.state.filteredEmployees.sort((a, b)=> {
      const user1 = a.name.first;
      const user2 = b.name.first
      if(this.state.isSorted){
        if (user1 > user2) {
          return 1;
        }
        if (user1 < user2) {
          return -1;
        }
        return 0;
      }
      else{
        if (user1 < user2) {
          return 1;
        }
        if (user1 > user2) {
          return -1;
        }
        return 0;
      }
    })
    this.setState({
      filteredEmployees: filteredList,
      isSorted: !this.state.isSorted
    });
  };

  filterEmployees(value) {
    let filteredEmployees = this.state.allEmployees;

    filteredEmployees = filteredEmployees.filter(
      emp => emp.name.first.toLowerCase().includes(value.toLowerCase()))
    console.log(filteredEmployees);

    this.setState({
      filteredEmployees: filteredEmployees
    })
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search: value
    })
    this.filterEmployees(value);
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
          sortTable={this.sortTable}
        />
        <Table 
        employees={this.state.filteredEmployees}
        sortTable={this.sortTable}
         />
      </>
    )
  }

};

export default EmployeeContainer;