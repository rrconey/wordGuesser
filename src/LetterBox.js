console.log('you got this!')

import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class LetterBox extends Component {
  constructor(props) {
    super(props);
    this.state = {buttonColor: "normal"}
    this.buttonPress = this.buttonPress.bind(this)
  }

  buttonPress() {
  	console.log('BUtton Hit on letter', this.props.char)
    var newColor = this.props.currentWord.includes(this.props.char) ? "correct" : "incorrect";

  	this.setState({buttonColor: newColor})
  }

  onClick() {
  	this.buttonPress();
  	this.props.guessLetter(this.props.currentWord, this.props.spaces,this.props.char)
  }

  render() {
    return (
        <div onClick={() => this.onClick() } className={this.state.buttonColor}>{this.props.char}</div>
    );
  }
}

