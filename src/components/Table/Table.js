import React from "react";


function Table(props) {
  const renderEmployees =()=>{
    
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col" onClick={props.sortTable} style={{"cursor":"pointer"}}>
            Name 
           
        </th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {
        props.employees && props.employees.map(employee => (<tr key={employee.login.uuid}>
              <td><img src={employee.picture.medium} alt = "Employee"/></td>
              <td>{`${employee.name.first} ${employee.name.last}`}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.dob.date.split("T")[0]}</td>
            </tr>
          ))};
      </tbody>
    </table>
  );
}

export default Table;