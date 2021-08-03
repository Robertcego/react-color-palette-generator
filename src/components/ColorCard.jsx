/** @format */

import React from 'react';

function ColorCard({ colors }) {
  return (
    <div>
      {colors.map((color, i) => (
        <div key={i} className='color-card'>
          <p style={{ color: `${color.color1}` }}>{color.color1}</p>
          <p style={{ color: `${color.color2}` }}>{color.color2}</p>
          <p style={{ color: `${color.color3}` }}>{color.color3}</p>
          <p style={{ color: `${color.color4}` }}>{color.color4}</p>
          <p style={{ color: `${color.color5}` }}>{color.color5}</p>
        </div>
      ))}
    </div>
  );
}

export default ColorCard;
