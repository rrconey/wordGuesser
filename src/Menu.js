console.log('you got this!')

import React, {Component} from "react";
import ReactDOM from "react-dom";
import dummyData from '../data/dummyData'
import ScoreBoard from './ScoreBoard'
export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	console.log('PROPS', this.props)
    return (
      			<div className='col-md-4 col-sm-4 col-xs-12'>
	      			<form className="form-container" onSubmit={this.props.handleSubmit}>
						<h1 id="mainTitle"> Word Guess </h1>
						<ScoreBoard wins={this.props.wins} loss={this.props.loss}/>
	      			<h2>P1: <span className='stick'>{this.props.playerName}</span></h2>
				  	<div className="form-group">
					    <input type="text" maxLength="9" className="form-control" placeholder="Name" onChange={ (event) => this.props.nameChange(event.target.value)}/>
					    <p>Enter "stick man" name to play against the Computer!</p>
				  	</div>
				  	<div>
					  <button type="submit" onClick={() => this.props.difficultyClick('easy')} className="btn btn-success btn-block">Easy</button>
					  <button type="submit" onClick={() => this.props.difficultyClick('hard')} className="btn btn-danger btn-block">Hard</button>
					  <button type="submit" className="btn btn-warning btn-block new-gamebtn">Random</button>
	      			</div>
					</form>
      			</div>		
    );
  }
}

