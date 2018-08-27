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

    
  	console.log('Game PROPS', this.props)
    return (
      <div>
      Game Page
      <h2>Computer vs. {this.props.playerName}</h2>
      <h2>The word is: {this.props.currentWord}</h2>
      <Word spaces={this.props.spaces}/>
      <div className="container">

      </div>
     
         
              <div className="container letterBox">
              <LetterBox />
              <div>
                {row1}
              </div>
               <div>
                {row2}
              </div>
              <div>
                {row3}
              </div>
              </div>
         



      </div>
    );
  }
}

