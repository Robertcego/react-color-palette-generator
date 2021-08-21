import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../components/ColorCard.component.css';
const { uuid } = require('uuidv4');

function ColorCard({ colors }) {
  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false);

  const setCopyValue = (e) => {
    if (e.currentTarget.id) {
      setValue(e.target.value);
      setCopied(true);
    }
    console.log(e.target.value);
    console.log(e.target.id);
    console.log(e.currentTarget.id);
  };

  return (
    <div className='container'>
      {colors.map((color) => (
        <div className='card-container' key={color.id}>
          <div className='card'>
            <div
              style={{
                backgroundColor: `${color.color}`,
                height: '300px',
                width: '200px',
                borderRadius: '0.8rem',
              }}
            ></div>
            <CopyToClipboard text={value} onCopy={setCopyValue}>
              <span onClick={setCopyValue} id={uuid()} value={color.color}>
                {color.color}
              </span>
            </CopyToClipboard>
            {copied ? <p style={{ color: 'red' }}>Copied</p> : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ColorCard;
