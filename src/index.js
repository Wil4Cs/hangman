import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
  }

  render() {
    const mysteryWord = this.state.mysteryWord;
    const usedLetters = this.state.usedLetters;
    const attempts = this.state.attempts;
    const winner = checkForWin(mysteryWord, usedLetters);
    // Use this variable to display The Keyboard component or a button instead
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

function step1(ctx) {
  // ground
  ctx.beginPath();
  ctx.moveTo(360, 380);
  ctx.quadraticCurveTo(200, 270, 40, 360);
  ctx.quadraticCurveTo(35, 363, 40, 366);
  ctx.quadraticCurveTo(180, 290, 360, 386);
  ctx.quadraticCurveTo(365, 383, 360, 380);
  ctx.fill();
  // grass
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.moveTo(116, 330);
  ctx.quadraticCurveTo(110, 323, 100, 325);
  ctx.closePath();
  ctx.stroke();
  ctx.moveTo(116, 330);
  ctx.quadraticCurveTo(110, 317, 100, 320);
  ctx.quadraticCurveTo(114, 310, 115, 328);
  ctx.fill();
  ctx.moveTo(116, 330);
  ctx.quadraticCurveTo(110, 300, 105, 314);
  ctx.quadraticCurveTo(111, 290, 118, 330);
  ctx.fill();
  ctx.moveTo(122, 330);
  ctx.quadraticCurveTo(138, 312, 138, 310);
  ctx.quadraticCurveTo(130, 305, 120, 330);
  ctx.fill();
  ctx.moveTo(120, 330);
  ctx.quadraticCurveTo(130, 300, 133, 305);
  ctx.quadraticCurveTo(127, 290, 120, 330);
  ctx.fill();
}
function step2(ctx) {
  // stake
  ctx.beginPath();
  ctx.lineWidth = 8;
  ctx.lineJoin = 'round';
  ctx.moveTo(120, 328);
  ctx.lineTo(100, 35);
  ctx.stroke();

  // left strut
  ctx.beginPath();
  ctx.moveTo(113, 270);
  ctx.lineTo(70, 345);
  ctx.lineTo(90, 337);
  ctx.lineTo(113, 280);
  ctx.fill();
  // right strut
  ctx.beginPath();
  ctx.moveTo(119, 270);
  ctx.lineTo(170, 320);
  ctx.lineTo(150, 322);
  ctx.lineTo(121, 280);
  ctx.fill();
}
function step3(ctx) {
  // rafter
  ctx.beginPath();
  ctx.moveTo(80, 42);
  ctx.quadraticCurveTo(100, 29, 200, 30);
  ctx.quadraticCurveTo(235, 31, 260, 28);
  ctx.quadraticCurveTo(262, 24, 260, 20);
  ctx.quadraticCurveTo(235, 23, 200, 23);
  ctx.quadraticCurveTo(80, 21, 80, 34);
  ctx.quadraticCurveTo(80, 42, 80, 42);
  ctx.fill();
}
function step4(ctx) {
  // high strut
  ctx.beginPath();
  ctx.moveTo(107, 90);
  ctx.quadraticCurveTo(140, 60, 150, 30);
  ctx.quadraticCurveTo(160, 30, 160, 30);
  ctx.quadraticCurveTo(155, 55, 108, 110);
  ctx.quadraticCurveTo(107, 90, 107, 90);
  ctx.fill();
}
function step5(ctx) {
  // rope
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(255, 28);
  ctx.quadraticCurveTo(257, 40, 257, 60);
  ctx.quadraticCurveTo(255, 100, 255, 90);
  ctx.stroke();
}
function step6(ctx) {
  // head
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.moveTo(255, 100);
  ctx.bezierCurveTo(251, 75, 278, 67, 285, 80);
  ctx.bezierCurveTo(298, 102, 257, 119, 255, 100);
  ctx.stroke();
  // hair
  ctx.lineWidth = 1;
  ctx.moveTo(285, 78);
  ctx.quadraticCurveTo(294, 71, 293, 64);
  ctx.moveTo(283, 77);
  ctx.quadraticCurveTo(288, 68, 284, 61);
  ctx.moveTo(281, 75);
  ctx.quadraticCurveTo(282, 64, 273, 64);
  ctx.stroke();
  // mouth
  ctx.moveTo(262, 93);
  ctx.quadraticCurveTo(266, 98, 264, 103);
  // eyes
  ctx.moveTo(267, 87);
  ctx.lineTo(275, 87);
  ctx.moveTo(270, 83);
  ctx.lineTo(272, 91);
  ctx.moveTo(271, 94);
  ctx.lineTo(279, 94);
  ctx.moveTo(276, 90);
  ctx.lineTo(274, 98);
  ctx.stroke();
}
function step7(ctx) {
  // body
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.moveTo(256, 104);
  ctx.quadraticCurveTo(258, 120, 254, 140);
  ctx.quadraticCurveTo(250, 160, 251, 172);
  ctx.stroke();
}
function step8(ctx) {
  // left leg
  ctx.beginPath();
  ctx.moveTo(250, 170);
  ctx.quadraticCurveTo(245, 225, 248, 230);
  ctx.quadraticCurveTo(252, 234, 256, 230);
  ctx.bezierCurveTo(247, 215, 255, 170, 250, 170);
  ctx.fill();
}
function step9(ctx) {
  // right leg
  ctx.beginPath();
  ctx.moveTo(250, 170);
  ctx.quadraticCurveTo(275, 220, 275, 220);
  ctx.quadraticCurveTo(279, 224, 283, 220);
  ctx.bezierCurveTo(275, 215, 255, 166, 250, 170);
  ctx.fill();
}
function step10(ctx) {
  // left arm
  ctx.beginPath();
  ctx.moveTo(257, 110);
  ctx.quadraticCurveTo(235, 154, 230, 155);
  ctx.quadraticCurveTo(234, 159, 238, 155);
  ctx.quadraticCurveTo(257, 125, 257, 110);
  ctx.fill();
}
function step11(ctx) {
  // right arm
  ctx.beginPath();
  ctx.moveTo(257, 110);
  ctx.quadraticCurveTo(257, 125, 280, 155);
  ctx.quadraticCurveTo(284, 159, 288, 155);
  ctx.quadraticCurveTo(261, 125, 257, 110);
  ctx.fill();
}
function draw(ctx, step) {
  switch (step) {
    case 9:
      step2(ctx);
      break;
    case 8:
      step3(ctx);
      break;
    case 7:
      step4(ctx);
      break;
    case 6:
      step5(ctx);
      break;
    case 5:
      step6(ctx);
      break;
    case 4:
      step7(ctx);
      break;
    case 3:
      step8(ctx);
      break;
    case 2:
      step9(ctx);
      break;
    case 1:
      step10(ctx);
      break;
    case 0:
      step11(ctx);
      break;
    default:
      step1(ctx);
      break;
  }
}

const maxAttempt = 10;

class Canva extends React.Component {
  componentDidMount() {
    const ctx = this.refs.canvas.getContext('2d');
    draw(ctx, this.props.attempts);
  }

  componentDidUpdate() {
    this.drawTheHangman();
  }

  shouldComponentUpdate(nextProps) {
    let shouldUpdate = false;
    if (nextProps.wordWasFound) shouldUpdate = true;
    if (nextProps.attempts !== this.props.attempts) shouldUpdate = true;
    return shouldUpdate;
  }

  drawTheHangman() {
    const ctx = this.refs.canvas.getContext('2d');
    // leave out this function if the word has been found
    if (this.props.wordWasFound) {
      return;
    }
    // erase the drawing of the canva for a new game
    if (this.props.attempts === maxAttempt) {
      ctx.clearRect(0, 0, 400, 400);
    }
    draw(ctx, this.props.attempts);
  }

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
        <canvas className="canva" ref="canvas" width="400" height="400">
          Votre navigateur ne supporte pas les balises canvas...
        </canvas>
        <p className="guess">{status}</p>
      </div>
    );
  }
}

function KeyboardKey({ value, feedback, onClick }) {
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

function Keyboard({ usedKey, onClick }) {
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
