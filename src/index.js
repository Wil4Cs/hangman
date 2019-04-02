import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Game extends React.Component {
  render() {
    return (
      <div>
        <header>
          <TitleGame />
        </header>
        <section>
          <Canva />
          <MysteryWord />
          <Keyboard />
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
        <p className="guess">Nombre de tentatives</p>
      </div>
    );
  }
}

function KeyboardKey(props) {
  return <div className="key">{props.value}</div>;
}

class Keyboard extends React.Component {
  renderKeyboardKey(arrayOfLetters) {
    return arrayOfLetters.map((letter, index) => (
      <KeyboardKey value={letter} key={index.toString()} />
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

class MysteryWord extends React.Component {
  // get a random integer excluding the max number
  getRandomInt(max, min = 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render() {
    const randomInt = this.getRandomInt(FRUITS.length);
    let randomWord = FRUITS[randomInt].toUpperCase();
    randomWord = Array.from(randomWord);

    return (
      <div id="mystery-word-box">
        {randomWord.map((letter, index) => (
          <div className="mystery-letter" key={index.toString()}>
            {letter}
          </div>
        ))}
      </div>
    );
  }
}

class TitleGame extends React.Component {
  render() {
    return <h1>Jeu du pendu</h1>;
  }
}

const FRUITS = ['POMME', 'BANANE'];

ReactDOM.render(<Game />, document.getElementById('root'));
