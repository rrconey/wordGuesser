console.log('you got this!')

import React, {Component} from "react";
import ReactDOM from "react-dom";
import dummyData from '../data/dummyData'

export default class Game extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	console.log('PROPS', this.props)
    return (
      <div>
      Game Page
      </div>
    );
  }
}

