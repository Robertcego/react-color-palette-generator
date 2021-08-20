import React, { useState, useEffect, useCallback } from 'react';
import colors from '../utils/colorsArray';
import randomHexGenerator from '../utils/randomHexGenerator';
import ColorCard from './ColorCard';

function PaletteGeneratorComponent() {
  const [palette, setPalette] = useState([]);
  console.log(colors.map((c) => c));

  useEffect(() => {
    // const generatePalette = () => {
    //   const color1 = randomHexGenerator();
    //   const color2 = randomHexGenerator();
    //   const color3 = randomHexGenerator();
    //   const color4 = randomHexGenerator();
    //   const color5 = randomHexGenerator();
    //   const palette = [];
    //   palette.push({
    //     color1: color1.toString(),
    //     color2: color2.toString(),
    //     color3: color3.toString(),
    //     color4: color4.toString(),
    //     color5: color5.toString(),
    //   });
    setPalette(colors);
    // };
    // generatePalette();
  }, []);

  const keyPress = useCallback((e) => {
    if (e.keyCode === 32) {
      // const generatePalette = () => {
      //   const color1 = randomHexGenerator();
      //   const color2 = randomHexGenerator();
      //   const color3 = randomHexGenerator();
      //   const color4 = randomHexGenerator();
      //   const color5 = randomHexGenerator();
      //   const palette = [];
      //   palette.push({
      //     color1: color1.toString(),
      //     color2: color2.toString(),
      //     color3: color3.toString(),
      //     color4: color4.toString(),
      //     color5: color5.toString(),
      //   });
      setPalette(colors);
      // };
      // generatePalette();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const handleKeyDown = (event) => {
    // const generatePalette = () => {
    //   const color1 = randomHexGenerator();
    //   const color2 = randomHexGenerator();
    //   const color3 = randomHexGenerator();
    //   const color4 = randomHexGenerator();
    //   const color5 = randomHexGenerator();
    //   // const hexColor = color.toString();
    //   const palette = [];
    //   palette.push({
    //     color1: color1.toString(),
    //     color2: color2.toString(),
    //     color3: color3.toString(),
    //     color4: color4.toString(),
    //     color5: color5.toString(),
    //   });
    setPalette(colors);
    // };
    // generatePalette();
  };

  // console.log(palette);

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
      <ColorCard colors={colors} />
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
