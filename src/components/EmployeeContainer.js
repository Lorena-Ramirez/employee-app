import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import SearchBar from "./SearchBar/SearchBar";
import Table from "./Table/Table";
import API from "../utils/API";


class EmployeeContainer extends Component {
  state = {
    allEmployees: null,
    filteredEmployees: null,
    sortedEmployees: null,
    search: "",
    isSorting: false,

  };

  componentDidMount() {
    API.search()
      .then(res => { this.setState({ allEmployees: res.data.results, filteredEmployees: res.data.results }); console.log(this.state.allEmployees); })
      .catch(err => console.log(err));
  }
  sortTable() {
    this.setState({
      filteredEmployees: this.state.allEmployees.sort()
    });
    console.log(this.state.filterEmployees);
  };

    // this.setState({
    //  isSorting: !this.state.isSorting
    // })


  filterEmployees(value) {
    let filteredEmployees = this.state.allEmployees;

    filteredEmployees = filteredEmployees.filter(
      emp => emp.name.first.toLowerCase().includes(value.toLowerCase()))
    console.log(filteredEmployees);

    this.setState({
      filteredEmployees: filteredEmployees
    })
  };

  // searchEmployee = query => {
  //   API.search(query)
  //     .then(res => this.setState({ result: res.data }))
  //     .catch(err => console.log(err));
  // };


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