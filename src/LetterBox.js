console.log('you got this!')

import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class LetterBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <span onClick={() => this.props.guessLetter(this.props.currentWord, this.props.spaces,this.props.char)} className="badge badge-pill badge-primary char">{this.props.char}</span>
    );
  }
}

