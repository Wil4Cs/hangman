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
        <canvas class="canva" width="400" height="400">
          Votre navigateur ne supporte pas les balises canvas...
        </canvas>
        <p class="guess">Nombre de tantatives</p>
      </div>
    );
  }
}

class Keyboard extends React.Component {
  render() {
    return (
      <div id="keyboard-box">
        <div class="keyboard-row">
          <div class="key">A</div>
          <div class="key">B</div>
          <div class="key">C</div>
          <div class="key">D</div>
          <div class="key">E</div>
          <div class="key">F</div>
          <div class="key">G</div>
          <div class="key">H</div>
          <div class="key">I</div>
          <div class="key">J</div>
          <div class="key">K</div>
        </div>
        <div class="keyboard-row">
          <div class="key">L</div>
          <div class="key">M</div>
          <div class="key">N</div>
          <div class="key">O</div>
          <div class="key">P</div>
          <div class="key">Q</div>
          <div class="key">R</div>
          <div class="key">S</div>
          <div class="key">T</div>
        </div>
        <div class="keyboard-row">
          <div class="key">U</div>
          <div class="key">V</div>
          <div class="key">W</div>
          <div class="key">X</div>
          <div class="key">Y</div>
          <div class="key">Z</div>
        </div>
      </div>
    );
  }
}
class MysteryWord extends React.Component {
  render() {
    return (
      <div id="mystery-word-box">
        <div class="mystery-letter">M</div>
        <div class="mystery-letter">Y</div>
        <div class="mystery-letter">S</div>
        <div class="mystery-letter">T</div>
        <div class="mystery-letter">E</div>
        <div class="mystery-letter">R</div>
        <div class="mystery-letter">E</div>
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
