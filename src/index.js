console.log('you got this!')

import React, {Component} from "react";
import ReactDOM from "react-dom";
import dummyData from '../data/dummyData'
import Menu from './Menu';
import Game from './Game';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	playerName: '',
    	menuPage: true,
    	gamePage: false
    };
  this.changeName = this.changeName.bind(this);
  this.menuSubmit = this.menuSubmit.bind(this);
  }

  changeName(name) {
    this.setState({playerName: name});
  }
  
  menuSubmit(event) {
  	console.log('menu submitted!')
    event.preventDefault();
  }
  

  render() {
  	var menuPage = this.state.menuPage ? <Menu submission={this.menuSubmit} playerName={this.state.playerName} nameChange={this.changeName} /> : <Game />

    return (<div>
      {menuPage}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById("app"));