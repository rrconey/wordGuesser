console.log('you got this!')

import React, {Component} from "react";
import ReactDOM from "react-dom";
import dummyData from '../data/dummyData'
import Menu from './Menu';
import Game from './Game';
import Loss from './Loss';

class App extends React.Component {
	componentDidMount(){
	  jQuery.ajax({
	  url: 'http://app.linkedin-reach.io/words',
	  success: (data) => {
	    var allData = data.split('\n');
	    this.setState({api: allData})
	    }
	  })
  }


  constructor(props) {
    super(props);
    this.state = {
    	currentWord: 'happy',
    	api: [],
    	spaces: '',
    	guesses: new Set(),
    	playerName: '',
    	menuPage: true,
    	gamePage: false,
    	gameOverCounter: 0
    };
  this.changeName = this.changeName.bind(this);
  this.menuSubmit = this.menuSubmit.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.guessLetter = this.guessLetter.bind(this);
  }

  changeName(name) {
    this.setState({playerName: name});
  }
  
  guessLetter(letter) {
  	console.log('guess Letter HIT')
  	console.log(letter)
    this.setState({guesses: this.state.guesses.add(letter)})
  	console.log(this.state.guesses)
  }

  menuSubmit(event) {
  	console.log('menu submitted!')
    event.preventDefault();
  }
  
  handleSubmit(event) {
  	console.log('handleSubmit clicked!')
    //alert('A name was submitted: ' + this.state.playerName);
    event.preventDefault();
    this.setState({
    	menuPage: !this.state.menuPage, 
    	gamePage: !this.state.gamePage
    	})
  }

  render() {
  	console.log('rendered Data: ', this.state.api[100])
  	var menuPage = this.state.menuPage ? <Menu handleSubmit={this.handleSubmit} menuSubmit={this.menuSubmit} playerName={this.state.playerName} nameChange={this.changeName} /> : <Game guessLetter={this.guessLetter} playerName={this.state.playerName} currentWord={this.state.currentWord}/>
    return (<div>
      {menuPage}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById("app"));