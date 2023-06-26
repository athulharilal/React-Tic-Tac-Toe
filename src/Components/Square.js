import React from "react";
import '../App.css'

function Square({ value, chooseSquare }) {
  return (
    <div className="square" onClick={chooseSquare}>
      <div>
        {value}
      </div>
    </div>
  );
}

export default Square;
