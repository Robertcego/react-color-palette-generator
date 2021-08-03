/** @format */

import React, { useState } from 'react';
import colors from '../utils/colorsArray';
import randomHexGenerator from '../utils/randomHexGenerator';
import ColorCard from './ColorCard';

function PaletteGeneratorComponent() {
  const [keyPressed, setKeyPressed] = useState('');
  console.log(colors);

  const handleKeyDown = (event) => {
    if (event.keyCode === 32) {
      console.log('Space pressed');
      randomHexGenerator();
    }
  };

  return (
    <div>
      <h1>Color Palette Generator</h1>
      <ColorCard colors={colors} />
      <button type='button' onKeyDown={handleKeyDown}>
        Get a new palette
      </button>
      <p>{keyPressed}</p>
    </div>
  );
}

export default PaletteGeneratorComponent;
