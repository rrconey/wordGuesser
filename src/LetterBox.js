console.log('you got this!')

import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class LetterBox extends Component {
  constructor(props) {
    super(props);
    this.state = {buttonColor: "badge badge-pill badge-primary char"}
    this.buttonPress = this.buttonPress.bind(this)
  }

  buttonPress() {
  	console.log('BUtton Hit on letter', this.props.char )
    var correct = 'badge badge-pill badge-success char';
    var incorrect = 'badge badge-pill badge-danger char';
    var newColor = this.props.currentWord.includes(this.props.char) ? correct : incorrect;

  	this.setState({buttonColor: newColor})
  }

  onClick() {
  	this.buttonPress();
  	this.props.guessLetter(this.props.currentWord, this.props.spaces,this.props.char)
  }

  render() {
    return (
        <span onClick={() => this.onClick() } className={this.state.buttonColor}>{this.props.char}</span>
    );
  }
}

