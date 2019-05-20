import React from 'react';

// CSS import
import '../css/keyboard-key.css';

// The Keyboard Key Component
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

export default KeyboardKey;
