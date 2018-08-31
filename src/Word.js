import React, {Component} from "react";
import ReactDOM from "react-dom";

const ScoreBoard = (props) => {
  let boxes = props.spaces.split('').map( (char, index) => <li key={index} className='spaces'>{char}</li>)
  return (
      <div id="menu-outer">
        <div className="table">
          <ul id="horizontal-list">
          {boxes}
          </ul>
        </div>
      </div>    
     );
  };

export default ScoreBoard;