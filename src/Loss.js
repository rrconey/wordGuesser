console.log('you got this!')

import React, {Component} from "react";
import ReactDOM from "react-dom";
import dummyData from '../data/dummyData'

export default class Loss extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	console.log('PROPS', this.props)
    return (
         <div className='col-md-4 col-sm-4 col-xs-12'>
                <form className="form-container">
                <h1 className='gameover-heading' id="mainTitle"> Game Over! </h1>
                <h2 className='game-center'>Sorry, the word was...</h2>
                <h4 className='gameover-word'>{this.props.currentWord} </h4>
               <img id="snoopy" src='../img/lookUp.jpg' />
               <button className="btn btn-warning btn-block">Start New Game</button>  
        </form>
      </div>
    );
  }
}

