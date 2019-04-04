import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usedLetters: new Set(),
      mysteryWord: getRandomWord(),
      attempts: 11
    };
  }

  handleClick(keyStroke) {
    const mysteryWord = this.state.mysteryWord;

    if (mysteryWord.includes(keyStroke)) {
      this.setState(prevState => ({
        usedLetters: prevState.usedLetters.add(keyStroke)
      }));
    } else {
      this.setState(prevState => ({
        attempts: prevState.attempts - 1
      }));
    }
  }

  render() {
    const mysteryWord = this.state.mysteryWord;
    const usedLetters = this.state.usedLetters;
    const attempts = this.state.attempts;

    return (
      <div>
        <header>
          <TitleGame />
        </header>
        <section>
          <Canva attempts={attempts} />
          <MysteryWord mysteryWord={mysteryWord} usedLetters={usedLetters} />
          <Keyboard onClick={keyStroke => this.handleClick(keyStroke)} />
        </section>
      </div>
    );
  }
}

class Canva extends React.Component {
  render() {
    return (
      <div id="attempt-box">
        <canvas className="canva" width="400" height="400">
          Votre navigateur ne supporte pas les balises canvas...
        </canvas>
        <p className="guess">
          Nombre de tentatives restantes : {this.props.attempts}
        </p>
      </div>
    );
  }
}

function KeyboardKey(props) {
  return (
    <div className="key" onClick={props.onClick}>
      {props.value}
    </div>
  );
}

class Keyboard extends React.Component {
  renderKeyboardKey(arrayOfLetters) {
    return arrayOfLetters.map((letter, index) => (
      <KeyboardKey
        value={letter}
        key={index.toString()}
        onClick={() => this.props.onClick(letter)}
      />
    ));
  }

  render() {
    const keysRow1 = Array.of('A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P');
    const keysRow2 = Array.of('Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M');
    const keysRow3 = Array.of('W', 'X', 'C', 'V', 'B', 'N');

    return (
      <div id="keyboard-box">
        <div className="keyboard-row">{this.renderKeyboardKey(keysRow1)}</div>
        <div className="keyboard-row">{this.renderKeyboardKey(keysRow2)}</div>
        <div className="keyboard-row">{this.renderKeyboardKey(keysRow3)}</div>
      </div>
    );
  }
}

const FRUITS = ['POMME', 'BANANE', 'ANANAS'];

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

function getRandomWord() {
  const randomInt = getRandomInt(FRUITS.length);
  return FRUITS[randomInt].toUpperCase();
}

function MysteryWord({ mysteryWord, usedLetters }) {
  const computeWord = Array.from(computeDisplay(mysteryWord, usedLetters));

  return (
    <div id="mystery-word-box">
      {computeWord.map((letter, index) => (
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
