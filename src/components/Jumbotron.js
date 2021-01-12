import React from "react";

function Jumbotron() {
  return(
    <div className="jumbotron"
      style={{
        textAlign: 'center'
      }}
    >
      <h1 className="display-4">Employee Directory</h1>
      <p className="lead">View Employee Directory, or search for a specific employee</p>
    </div>
  );
}

export default Jumbotron;