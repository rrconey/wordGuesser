console.log('you got this!')

import React, {Component} from "react";
import ReactDOM from "react-dom";
import dummyData from '../data/dummyData'



const ScoreBoard = (props) => {
  return (
    <div>
      <p className='scoreboard-win'>Win: {props.wins}</p>
      <p className='scoreboard-loss'>Loss: {props.loss}</p>
    </div>)
};

export default ScoreBoard;

