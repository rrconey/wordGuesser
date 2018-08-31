import React, {Component} from "react";
import ReactDOM from "react-dom";

const Win = (props) => {
  return (
    <div className='col-md-4 col-sm-4 col-xs-12'>
      <form className="form-container">
        <h1 className='win-heading' id='mainTitle'> GoodJob! </h1>
        <h2 className='game-center'>Solving the word</h2>
        <h4 className='gameover-word'>{props.currentWord} </h4>
        <img id="profile" src='../img/win.jpg' />
        <p>Please /REACH/ out to the Engineer above on LinkedIn!</p>
        <button className="btn btn-warning btn-block">Continue</button>  
      </form>
    </div>
    );
}

export default Win;