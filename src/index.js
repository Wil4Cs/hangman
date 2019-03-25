import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Game extends React.Component {
  render() {
    return <TitleGame />;
  }
}

class TitleGame extends React.Component {
  render() {
    return (
      <header>
        <h1>Jeu du pendu</h1>
      </header>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById('root'));
