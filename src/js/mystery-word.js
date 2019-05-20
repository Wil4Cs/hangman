import React from 'react';

// CSS import
import '../css/mystery-word.css';

// The Mystery Word Component
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

export default MysteryWord;

// == INTERNAL HELPERS ==============================================

// The list of words to guess
export const GUESS_WORDS = ['POMME', 'BANANE', 'ANANAS'];

// replace letters not found in the word with underscores
function computeDisplay(phrase, usedLetters) {
  return phrase.replace(/\w/g, letter =>
    usedLetters.has(letter) ? letter : '_'
  );
}
