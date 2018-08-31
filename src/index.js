import React, {Component} from "react";
import ReactDOM from "react-dom";
import Menu from './Menu';
import Game from './Game';
import Win from './Win';
import Loss from './Loss';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      randomNum: 0,
    	currentWord: '',
    	api: [],
    	spaces: '',
    	guesses: new Set(),
    	wrongGuesses: new Set(),
    	playerName: '',
    	correctGuess: 0,
    	menuPage: true,
      gamePage: false,
    	gameOver: false,
      win: false,
    	gameOverCounter: 0,
    	wrongCount: 0,
      inputGuess: '',
      difficulty: 0,
      mostUsed: 'etaoinsr',
      container: [],
      allTimeWins: 999,
      allTimeLoss: 0
    };
  this.changeName = this.changeName.bind(this);
  this.menuSubmit = this.menuSubmit.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.guessLetter = this.guessLetter.bind(this);
  this.difficultyClick = this.difficultyClick.bind(this);
  }

  componentDidMount(){
    jQuery.ajax({
    url: 'http://app.linkedin-reach.io/words',
    success: (data) => {
      const allData = data.split('\n');
        let randomNum = Math.floor(Math.random()*allData.length)
        let randomWord = allData[randomNum];
       this.setState({
        api: allData, 
        currentWord:  randomWord.toUpperCase(), randomNum: randomNum})
      }
    })

    jQuery.ajax({url:'http://localhost:3000/',
      success: (data) => {
       
        // console.log(data[wins], data['wins'])
        data = JSON.parse(data)
        var wins = data.wins
        var loss = data.loss
        console.log('wins', wins, loss)
        this.setState({allTimeWins: wins, allTimeLoss: loss})
      }
    })


  }
  
  setDifficulty(word) {
  var obj = {}
  obj.word = word;
  var box = new Set()
  var mostUsed = this.state.mostUsed;
  for(var i = 0; i <  mostUsed.length; i++) {
    if(word.includes(mostUsed[i])) {
      box.add(mostUsed[i])
    }   
  }
  
  Array.from(box).length / word.length >= 0.5 ? obj.difficulty = 'easy' : obj.difficulty = 'hard'
  return obj
  }

  changeName(name) {
    this.setState({playerName: name});
  }
  
  difficultyClick(levelClicked) {
    var difficultyLevel = this.setDifficulty(this.state.currentWord)
    var allData = this.state.api
    var newWord;

    while(difficultyLevel.difficulty !== levelClicked) {
      
      var allData = this.state.api;
      var random = Math.floor(Math.random()*allData.length);
      var newWord = allData[random]
      difficultyLevel = this.setDifficulty(newWord)

    }
    this.setState({currentWord: difficultyLevel.word.toUpperCase()})
  }

  createSpaces() {
  let dashed = this.state.currentWord.split('').map( (char) => "_").join('');
  return dashed
  }

 guessLetter(currentWord, spacesArray, letter) {
  if(this.state.guesses.has(letter)) {return }
  
  if(this.state.wrongGuesses.has(letter) ) {
    console.log('you guesseses ' + letter + ' already!')
    return
    }

   let count = 0;
   let space = this.state.spaces // "_____ "
   let word = this.state.currentWord;
      
   for(let i = 0; i < space.length;i++) {
    
    if(word[i] === letter) {
      this.setState({correctGuess: ++this.state.correctGuess })
      console.log('correct guess!', this.state.currentWord[i], i , letter, this.state.correctGuess)
      
      space = space.split('')

      space[i] = letter

      space = space.join('');
       
     

      if(!this.state.guesses.has(letter)) {
      var addition = this.state.guesses.add(letter)}
      count++
      this.setState({guesses: addition})
      
    }
    
    console.log('Line 100:', this.state.spaces)
  }
    this.setState({spaces: space});
    console.log('Line 109:', this.state.spaces)

    if(count === 0 ) {
      console.log('WRONG GUESS @', letter)
      //this means a wrong guess has been made
      this.state.wrongGuesses.add(letter)
      this.checkForGameover();
    } else {
      this.checkForWin();
    }
  }

  checkForWin() {
	  console.log('checking for WIN: ',this.state.correctGuess, this.state.currentWord.length)
	  console.log('WINNNNERRR!!!!!! won!') 
    
    if(this.state.correctGuess === this.state.currentWord.length) {
      this.setState({menuPage: false,
      gamePage: false,
      gameOver: false,
      win: true})
    }
    
  }
  

  checkForGameover() {
  this.setState({wrongCount: ++this.state.wrongCount});
  if(this.state.wrongCount === 5) {
    console.log('Be careful, final Guess!')
  }
  if(this.state.wrongCount > 5) {
    console.log('sorry you lost')
    this.setState({menuPage: false, gamePage: false, gameOver: true})
    return 'sorry YOU LOST!'
    }
  }

  menuSubmit(event) {
  	console.log('menu submitted!')
    event.preventDefault();

  }

  handleSubmit(event) {
    this.setState({spaces: this.createSpaces()})
    if(!this.state.playerName) {
      this.setState({playerName: 'Unknown'})

    }
    event.preventDefault();
    this.setState({
    	menuPage: !this.state.menuPage, 
    	gamePage: !this.state.gamePage
    	})
  }

  render() {
    let currentPage;
  	if( this.state.menuPage) {currentPage = <Menu wins={this.state.allTimeWins} loss={this.state.allTimeLoss} difficultyClick={this.difficultyClick}handleSubmit={this.handleSubmit} menuSubmit={this.menuSubmit} playerName={this.state.playerName} nameChange={this.changeName} /> }
    if( this.state.gamePage) {currentPage = <Game wrongCount={this.state.wrongCount} guessLetter={this.guessLetter} playerName={this.state.playerName} currentWord={this.state.currentWord} spaces={this.state.spaces}/> }
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