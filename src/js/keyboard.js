import React from 'react';

// CSS import
import '../css/keyboard.css';

// Need to import the Keyboard Key component to describe a fully keyboard
import KeyboardKey from './keyboard-key';

// The Keyboard Component
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

export default Keyboard;
