console.log('you got this!')

import React, {Component} from "react";
import ReactDOM from "react-dom";
import dummyData from '../data/dummyData'
import Menu from './Menu';
import Game from './Game';
import Win from './Win';
import Loss from './Loss';


class App extends React.Component {
	componentDidMount(){
	  // jQuery.ajax({
	  // url: 'http://app.linkedin-reach.io/words',
	  // success: (data) => {
	  //   const allData = data.split('\n');
   //      let randomWord = allData[Math.floor(Math.random()*allData.length)];
	     this.setState({
	    	//api: allData, 
	    	currentWord:  'HAPPY' //|| randomWord})
	    //}
	  })
  }

  constructor(props) {
    super(props);
    this.state = {
    	currentWord: '',
    	api: [],
    	spaces: '',
    	guesses: new Set(),
    	wrongGuesses: new Set(),
    	playerName: 'Unknown',
    	correctGuess: 0,
    	menuPage: !true,
      gamePage: false,
    	gameOver: false,
      win: !false,
    	gameOverCounter: 0,
    	wrongCount: 0
    };
  this.changeName = this.changeName.bind(this);
  this.menuSubmit = this.menuSubmit.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.guessLetter = this.guessLetter.bind(this);
  }

  changeName(name) {
    this.setState({playerName: name, spaces: this.createSpaces()});
  }
  

createSpaces() {
  let dashed = this.state.currentWord.split('').map( (char) => "_").join('');
  console.log('dasH: ', dashed)
  return dashed
}


 guessLetter(currentWord, spacesArray, letter) {
  if(this.state.guesses.has(letter)) {return }
  
  if(this.state.wrongGuesses.has(letter) ) {
    console.log('you guessesed ' + letter + ' already!')
    return
    }

  //console.log('wrongCount', wrongCount, guesses)
   let count = 0;
   let space = this.state.spaces
   let word = this.state.currentWord;

   console.log('space'+ space +' word ' + word)

   for(let i = 0; i < space.length;i++) {
    if(this.state.currentWord[i] === letter) {
      this.setState({correctGuess: this.state.correctGuess + 1})
      console.log('correct guess!')
      if(!this.state.guesses.has(letter)) {
      this.state.guesses = this.state.guesses.add(letter)}
      count++
      this.state.spaces[i] = letter
    }
  }

  if(count === 0 ) {
    console.log('WRONG GUESS @', letter)
    //this means a wrong guess has been made
    this.state.wrongGuesses.add(letter)
    this.checkForGameover();
  } else {
    this.checkForWin();
  }
  //change state of empty 
  this.state.spaces = spacesArray.join('')
  console.log('Current FIELD: ', this.state.spaces)
}

  //  guessLetter(currentWord, spacesArray,letter) {
  // 	console.log('guess Letter HIT ', letter)
  //   this.setState({guesses: this.state.guesses.add(letter)})
  // 	//console.log('guesses set: ' + this.state.guesses)

  // }


  checkForWin() {
	  console.log('checking for WIN: ',this.state.correctGuess, this.state.currentWord.length)
	  return this.state.correctGuess === this.state.currentWord.length ? console.log('WINNNNERRR!!!!!! won!') : null;
  }


  checkForGameover() {
  this.state.wrongCount++;
  if(this.state.wrongCount === 5) {
    console.log('Be careful, final Guess!')
  }
  if(this.state.wrongCount >= 6) {
    console.log('sorry you lost')
    this.setState({menuPage: false, gamePage: false, gameOver: true})
    return 'sorry YOU LOST!'
    }
  }


  menuSubmit(event) {
  	console.log('menu submitted!')
    event.preventDefault();
  }
  
  checkMatch(letter) {
    console.log('letter clicked in checkMatch' + letter)

  }

  handleSubmit(event) {
  	console.log('handleSubmit clicked!')
    if(!this.state.playerName) {
      this.setState({playerName: 'Unknown'})

    }
    //alert('A name was submitted: ' + this.state.playerName);
    event.preventDefault();
    this.setState({
    	menuPage: !this.state.menuPage, 
    	gamePage: !this.state.gamePage
    	})
  }

  render() {
  	console.log('rendered Data: ', this.state.api[100])
    let currentPage;
  	if( this.state.menuPage) {currentPage = <Menu handleSubmit={this.handleSubmit} menuSubmit={this.menuSubmit} playerName={this.state.playerName} nameChange={this.changeName} /> }
    if( this.state.gamePage) {currentPage = <Game guessLetter={this.guessLetter} playerName={this.state.playerName} currentWord={this.state.currentWord} spaces={this.state.currentWord}/> }
    if( this.state.gameOver) {currentPage = <Loss currentWord={this.state.currentWord} />}
    if( this.state.win) {currentPage = <Win currentWord={this.state.currentWord} />}
    return (
    	<div className='container-fluid'>
		<div className='row'>
			<div className='col-md-4 col-sm-4 col-xs-12'></div>
            {currentPage}
			<div className='col-md-4 col-sm-4 col-xs-12'></div>
		</div>
	</div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById("app"));