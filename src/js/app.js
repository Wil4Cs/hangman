import React from 'react';

// CSS import
import '../css/app.css';

// JS import
import Canva, { maxAttempt } from './canva';
import TitleGame from './header';
import Keyboard from './keyboard';
import MysteryWord, { GUESS_WORDS } from './mystery-word';

// The Game Component
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.resetClick = this.resetClick.bind(this);
    this.state = {
      usedLetters: new Set(),
      mysteryWord: '',
      allWords: [],
      attempts: maxAttempt
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillMount() {
    const arrayOfWords = fillArrayWith(GUESS_WORDS);
    this.setState({ allWords: arrayOfWords });
    this.setState({ mysteryWord: getRandomWord(arrayOfWords) });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleClick(clickedKey) {
    this.updateState(clickedKey);
  }

  handleKeyPress(event) {
    const key = event.key.toUpperCase();
    const usedLetters = this.state.usedLetters;
    // check that the key pressed corresponds to a letter of the alphabet and was not tested yet
    if (!alphabetKeys.includes(key) || usedLetters.has(key)) return;
    this.updateState(event.key.toUpperCase());
  }

  updateState(key) {
    const mysteryWord = this.state.mysteryWord;

    // add a letter to the set "usedLetters" when pressed or clicked
    this.setState(prevState => ({
      usedLetters: prevState.usedLetters.add(key)
    }));
    // decrease attempts if the mystery word doesn't contains the letter
    if (!mysteryWord.includes(key)) {
      this.setState(prevState => ({
        attempts: prevState.attempts - 1
      }));
    }
  }

  resetClick() {
    const WORD_POSITION = this.state.allWords.indexOf(this.state.mysteryWord);
    const NEW_WORDS = this.state.allWords;
    // delete the mystery word from the array of allWords
    NEW_WORDS.splice(WORD_POSITION, 1);
    this.setState({ allWords: NEW_WORDS });
    this.setState({ attempts: maxAttempt });
    this.setState({ usedLetters: new Set() });
    if (this.state.allWords.length === 0) {
      const arrayOfWords = fillArrayWith(GUESS_WORDS);
      this.setState({ allWords: arrayOfWords });
      this.setState({ mysteryWord: getRandomWord(arrayOfWords) });
    } else {
      this.setState({ mysteryWord: getRandomWord(this.state.allWords) });
    }
  }

  render() {
    const mysteryWord = this.state.mysteryWord;
    const usedLetters = this.state.usedLetters;
    const attempts = this.state.attempts;
    const winner = checkForWin(mysteryWord, usedLetters);
    // Use this constant to display The Keyboard component or a button instead
    const endGame = winner === true || attempts === 0 ? true : false;

    return (
      <div>
        <header>
          <TitleGame />
        </header>
        <section>
          <Canva attempts={attempts} wordWasFound={winner} />
          <MysteryWord
            mysteryWord={mysteryWord}
            displayLetters={usedLetters}
            attempts={attempts}
          />
          {endGame && (
            <div id="btn-box">
              <button type="button" className="btn" onClick={this.resetClick}>
                Continuer
              </button>
            </div>
          )}
          {!endGame && (
            <Keyboard
              usedKey={usedLetters}
              onClick={clickedKey => this.handleClick(clickedKey)}
            />
          )}
        </section>
      </div>
    );
  }
}

export default Game;

// == INTERNAL HELPERS ==============================================

// Fill an array with all letters of the alphabet
const alphabetKeys = Array(26)
  .fill(1)
  .map((_, i) => String.fromCharCode(65 + i));

const checkForWin = (wordTocompare, setToCompare) => {
  // remove double letters by using a Set
  wordTocompare = new Set([...wordTocompare]);
  // check all letters in the word was aked by the user
  for (let letter of wordTocompare) if (!setToCompare.has(letter)) return false;
  return true;
};

const fillArrayWith = value => Array.from(value);

// get a random integer excluding the max number
function getRandomInt(max, min = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// return a random word in upper case
const getRandomWord = words => {
  const randomInt = getRandomInt(words.length);
  return words[randomInt].toUpperCase();
};
