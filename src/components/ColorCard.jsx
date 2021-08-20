import React from 'react';
import '../components/ColorCard.component.css';

function ColorCard({ colors }) {
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
            <p>{color.color}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ColorCard;
