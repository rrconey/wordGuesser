console.log('you got this!')

import React, {Component} from "react";
import ReactDOM from "react-dom";
import dummyData from '../data/dummyData'

export default class Win extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	console.log('PROPS', this.props)
    return (
    <div className='col-md-4 col-sm-4 col-xs-12'>
                <form className="form-container">
                <h1 className='gameover-heading'> GoodJob! </h1>
                <h4>Solving the mystery of</h4><h4> the word </h4>
                <h4 className='gameover-word'>{this.props.currentWord} </h4>
               <img id="snoopy" src='../img/win.jpg' />
               <button class="btn btn-warning btn-block">Continue</button>  
        </form>
      </div>
    );
  }
}

