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
    let boxes = this.props.spaces.split('').map( (char, index) => <li key={index} className='spaces'>{char}</li>)
      return (
         
          <div id="menu-outer">
            <div className="table">
              <ul id="horizontal-list">
              {boxes}
              </ul>
              </div>
          </div>    
         
      );
  }
}
