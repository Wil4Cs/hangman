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
