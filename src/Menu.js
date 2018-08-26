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
    return (<div>
      <form onSubmit={this.props.handleSubmit}>
        <label>
          First Name:
          <input title='Letters(A-Z) ONLY!' type="text" onChange={ (event) => this.props.nameChange(event.target.value)} />
        </label>
        <input type="submit" className='btn btn-warning menu-btn' value="New Game" />
      </form>
      <h2>Hey {this.props.playerName}</h2>
      </div>
    );
  }
}

