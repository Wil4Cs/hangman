import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const maxAttempt = 11;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.resetClick = this.resetClick.bind(this);
    this.state = {
      usedLetters: new Set(),
      mysteryWord: getRandomWord(),
      attempts: maxAttempt
    };
  }

  handleClick(keyStroke) {
    const mysteryWord = this.state.mysteryWord;
    const usedLetters = this.state.usedLetters;
    const attempts = this.state.attempts;

    // check if the game is over
    if (attempts === 0 || checkForWin(mysteryWord, usedLetters)) return;
    // add a letter to the set "usedLetters"
    this.setState(prevState => ({
      usedLetters: prevState.usedLetters.add(keyStroke)
    }));
    // decrease attempts if the mystery word doesn't contains keystroke
    if (!mysteryWord.includes(keyStroke)) {
      this.setState(prevState => ({
        attempts: prevState.attempts - 1
      }));
    }
  }

  resetClick() {
    this.setState({ attempts: maxAttempt });
    this.setState({ usedLetters: new Set() });
    this.setState({ mysteryWord: getRandomWord() });
    this.setState({ showKeyboard: true });
  }

  render() {
    const mysteryWord = this.state.mysteryWord;
    const usedLetters = this.state.usedLetters;
    const attempts = this.state.attempts;
    const winner = checkForWin(mysteryWord, usedLetters);
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
              onClick={keyStroke => this.handleClick(keyStroke)}
            />
          )}
        </section>
      </div>
    );
  }
}

function checkForWin(wordTocompare, setToCompare) {
  // remove double letters by using a Set
  wordTocompare = new Set([...wordTocompare]);
  // check all letters in the word was aked by the user
  for (let letter of wordTocompare) if (!setToCompare.has(letter)) return false;
  return true;
}

class Canva extends React.Component {
  render() {
    const attempts = this.props.attempts;
    const wordWasFound = this.props.wordWasFound;
    let status;
    if (attempts === 0) {
      status = 'Dommage... Le mot mystère était le suivant :';
    } else if (wordWasFound) {
      status = 'Félicitations !!! Vous avez gagné !';
    } else {
      status = 'Nombre de tentatives restantes : ' + attempts;
    }

    return (
      <div id="attempt-box">
        <canvas className="canva" width="400" height="400">
          Votre navigateur ne supporte pas les balises canvas...
        </canvas>
        <p className="guess">{status}</p>
      </div>
    );
  }
}

function KeyboardKey({ value, feedback, matchColor, onClick }) {
  return (
    <button
      type="button"
      className={`key ${feedback}`}
      disabled={feedback === 'press-deny' ? 'disabled' : null}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

function Keyboard({ shouldNotDisplay, usedKey, onClick }) {
  const keysRow1 = Array.of('A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P');
  const keysRow2 = Array.of('Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M');
  const keysRow3 = Array.of('W', 'X', 'C', 'V', 'B', 'N');

  function renderKeyboardKey(arrayOfLetters) {
    return arrayOfLetters.map((letter, index) => (
      <KeyboardKey
        value={letter}
        feedback={usedKey.has(letter) ? 'press-deny' : 'press-allow'}
        onClick={() => onClick(letter)}
        key={index.toString()}
      />
    ));
  }

  return (
    <div id="keyboard-box">
      <div className="keyboard-row">{renderKeyboardKey(keysRow1)}</div>
      <div className="keyboard-row">{renderKeyboardKey(keysRow2)}</div>
      <div className="keyboard-row">{renderKeyboardKey(keysRow3)}</div>
    </div>
  );
}

const FRUITS = ['POMME', 'BANANE', 'ANANAS'];

// replace letters not found in the word with underscores
function computeDisplay(phrase, usedLetters) {
  return phrase.replace(/\w/g, letter =>
    usedLetters.has(letter) ? letter : '_'
  );
}

// get a random integer excluding the max number
function getRandomInt(max, min = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// return a random word in upper case
function getRandomWord() {
  const randomInt = getRandomInt(FRUITS.length);
  return FRUITS[randomInt].toUpperCase();
}

function MysteryWord({ mysteryWord, displayLetters, attempts }) {
  // check if user lost and whatever, change the word from string to an array
  if (attempts === 0) {
    mysteryWord = [...mysteryWord];
  } else {
    mysteryWord = Array.from(computeDisplay(mysteryWord, displayLetters));
  }

  return (
    <div id="mystery-word-box">
      {mysteryWord.map((letter, index) => (
        <div className="mystery-letter" key={index.toString()}>
          {letter}
        </div>
      ))}
    </div>
  );
}

class TitleGame extends React.Component {
  render() {
    return <h1>Jeu du pendu</h1>;
  }
}

ReactDOM.render(<Game />, document.getElementById('root'));
