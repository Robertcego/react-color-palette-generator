import React, { useState, useEffect, useCallback } from 'react';
import colors from '../utils/colorsArray';
import randomHexGenerator from '../utils/randomHexGenerator';
import ColorCard from './ColorCard';

function PaletteGeneratorComponent() {
  const [palette, setPalette] = useState(colors);

  const keyPress = useCallback((e) => {
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

  const handleKeyDown = (event) => {
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
    <div
      style={{
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>Color Palette Generator</h1>
      <ColorCard colors={palette} />
      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <button
              style={{
                backgroundColor: '#7E6CCA',
                color: '#fff',
                height: '90px',
                border: 'none',
                borderRadius: '5px',
                width: '400px',
                fontSize: '0.8em',
              }}
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
