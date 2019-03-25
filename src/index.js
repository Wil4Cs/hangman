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

class TitleGame extends React.Component {
  render() {
    return <h1>Jeu du pendu</h1>;
  }
}

ReactDOM.render(<Game />, document.getElementById('root'));
