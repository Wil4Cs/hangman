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
      <KeyboardKey value={letter} key={index} />
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
  render() {
    return (
      <div id="mystery-word-box">
        <div className="mystery-letter">M</div>
        <div className="mystery-letter">Y</div>
        <div className="mystery-letter">S</div>
        <div className="mystery-letter">T</div>
        <div className="mystery-letter">E</div>
        <div className="mystery-letter">R</div>
        <div className="mystery-letter">E</div>
      </div>
    );
  }
}

class TitleGame extends React.Component {
  render() {
    return <h1>Jeu du pendu</h1>;
  }
}

ReactDOM.render(<Game />, document.getElementById('root'));
