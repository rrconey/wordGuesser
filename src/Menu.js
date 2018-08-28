console.log('you got this!')

import React, {Component} from "react";
import ReactDOM from "react-dom";
import dummyData from '../data/dummyData'

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	console.log('PROPS', this.props)
    return (
      			<div className='col-md-4 col-sm-4 col-xs-12'>
	      			<form className="form-container" onSubmit={this.props.handleSubmit}>
						<h1> Word Guess </h1>
	      			<h2>P1: {this.props.playerName}</h2>
				  	<div className="form-group">
					    <label>Name:</label>
					    <input type="text" maxLength="9" className="form-control" placeholder="Enter Name" onChange={ (event) => this.props.nameChange(event.target.value)}/>
					    <p>Enter name to play against the Computer!</p>
				  	</div>
				  	<div>
					  <button type="submit" className="btn btn-success btn-block">Easy</button>
					  <button type="submit" className="btn btn-danger btn-block">Hard</button>
					  <button type="submit" className="btn btn-warning btn-block new-gamebtn">New Game</button>
	      			</div>
					</form>
      			</div>		
    );
  }
}

