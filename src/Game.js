import React, {Component} from "react";
import ReactDOM from "react-dom";
import LetterBox from './LetterBox';
import Word from './Word';

const Game = (props) => {
  	console.log('Game PROPS', props);
    let rows = 'abcdefghijklmnopqrstuvwxyz'.split('').map( char => <LetterBox currentWord={props.currentWord} spaces={props.spaces} guessLetter={props.guessLetter} key={char} char={char.toUpperCase()}/> );
  return (
      <div className='col-md-4 col-sm-4 col-xs-12'>
        <form className="form-container">
          <h1 id="mainTitle">Word Guess</h1>
          <h2 className="game-center">Computer vs. {props.playerName}</h2>
          <Word spaces={props.spaces}/>
          <div>
            <p>Remaining Guesses: {6 - props.wrongCount}</p>
          </div>
          <div className="wrapperExample3">
            {rows}
            <div className='normal'/>
          </div> 
      </form>
      </div>
    );
  }

export default Game;