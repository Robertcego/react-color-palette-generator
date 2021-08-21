import React, { useState, useEffect, useCallback } from 'react';
import colors from '../utils/colorsArray';
import randomHexGenerator from '../utils/randomHexGenerator';
import ColorCard from './ColorCard';

import './PaletteGeneratorComponent.component.css';

function PaletteGeneratorComponent() {
  const [palette, setPalette] = useState(colors);

  const keyPress = useCallback((e) => {
    e.preventDefault();
    if (e.keyCode === 32) {
      const colors = [
        {
          id: 1,
          color: randomHexGenerator(),
        },
        {
          id: 2,
          color: randomHexGenerator(),
        },
        {
          id: 3,
          color: randomHexGenerator(),
        },
        {
          id: 4,
          color: randomHexGenerator(),
        },
        {
          id: 5,
          color: randomHexGenerator(),
        },
      ];
      setPalette(colors);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const handleKeyDown = (e) => {
    e.preventDefault();
    const colors = [
      {
        id: 1,
        color: randomHexGenerator(),
      },
      {
        id: 2,
        color: randomHexGenerator(),
      },
      {
        id: 3,
        color: randomHexGenerator(),
      },
      {
        id: 4,
        color: randomHexGenerator(),
      },
      {
        id: 5,
        color: randomHexGenerator(),
      },
    ];
    setPalette(colors);
  };

  return (
    <div className='palette-container'>
      <h1>Color Palette Generator</h1>
      <ColorCard colors={palette} />
      <div className='main-container'>
        <div className='wrapper__'>
          <div className='content-wrapper'>
            <button
              className='generator-btn'
              type='button'
              onClick={handleKeyDown}
            >
              Generate Palette
            </button>
            <span>Or just press the "Spacebar" to generate a new palette</span>
            <p>Click to copy indiviual color ⚫ Press "C" to copy palette</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaletteGeneratorComponent;
