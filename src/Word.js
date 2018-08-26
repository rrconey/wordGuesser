console.log('you got this!')

import React, {Component} from "react";
import ReactDOM from "react-dom";
import dummyData from '../data/dummyData'

export default class Word extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	console.log('Word PROPS', this.props)
    let boxes = '';
    for(var i = 0; i < this.props.currentWord.length;i++) {
      boxes += '_ '
    }

    return (
      <div>
          {boxes.trim()}
      </div>
    );
  }
}

