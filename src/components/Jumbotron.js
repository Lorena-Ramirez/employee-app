import React from "react";

function Jumbotron() {
  return(
    <div className="jumbotron"
      style={{
        textAlign: 'center'
      }}
    >
      <h1 className="display-4">Employee Directory</h1>
      <p className="lead">View full employee directory, or search for a specific employee. Order and unorder the list alphabetically by clicking Name columun</p>
    </div>
  );
}

export default Jumbotron;