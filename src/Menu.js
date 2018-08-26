console.log('you got this!')

import React, {Component} from "react";
import ReactDOM from "react-dom";
import dummyData from '../data/dummyData'

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }



  render() {
  	console.log('PROPS', this.props)
    return (<div>
      <form >
        <label>
          First Name:
          <input type="text" onChange={ (event) => this.props.nameChange(event.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h2>Hey {this.props.playerName}</h2>
      </div>
    );
  }
}

