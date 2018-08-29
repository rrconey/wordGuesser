console.log('you got this!')

import React, {Component} from "react";
import ReactDOM from "react-dom";
import dummyData from '../data/dummyData'
import LetterBox from './LetterBox';
import Word from './Word';

export default class Game extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let row1 = 'abcdefghij'.split('').map( char => <LetterBox currentWord={this.props.currentWord} spaces={this.props.spaces} guessLetter={this.props.guessLetter} key={char} char={char.toUpperCase()}/> );
    let row2 = 'klmnopqrst'.split('').map( char => <LetterBox currentWord={this.props.currentWord} spaces={this.props.spaces} guessLetter={this.props.guessLetter} key={char} char={char.toUpperCase()}/> );
    let row3 = 'uvwxyz'.split('').map( char => <LetterBox currentWord={this.props.currentWord} spaces={this.props.spaces} guessLetter={this.props.guessLetter} key={char} char={char.toUpperCase()}/> );
    
    let row4 = 'abcdefghijklmnopqrstuvwxyz'.split('').map( char => <LetterBox currentWord={this.props.currentWord} spaces={this.props.spaces} guessLetter={this.props.guessLetter} key={char} char={char.toUpperCase()}/> );
    
  	console.log('Game PROPS', this.props)
    return (
            <div className='col-md-4 col-sm-4 col-xs-12'>
                <form className="form-container">
                <h1>Word Guess</h1>
                <h2 className="game-center">Computer vs. {this.props.playerName}</h2>
                <Word spaces={this.props.spaces}/>
            <div>
              <p>Remaining Gueeses: {6 - this.props.wrongCount}</p>
            </div>
            <div className="container">
           
             </div>


             <div class="wrapperExample3">
            {row4}
            <div className='normal'/>

</div>

          </form>
         


      </div>
    );
  }
}

