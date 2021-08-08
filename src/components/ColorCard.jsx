import React from 'react';

function ColorCard({ colors }) {
  return (
    <div>
      {colors.map((color, i) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row !important',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          key={i}
          className='color-card'
        >
          <div>
            <div
              style={{
                backgroundColor: `${color.color1}`,
                height: '300px',
                width: '300px',
              }}
            ></div>
            <p>{color.color1}</p>
          </div>
          <div>
            <div
              style={{
                backgroundColor: `${color.color2}`,
                height: '300px',
                width: '300px',
              }}
            ></div>
            <p>{color.color2}</p>
          </div>
          <div>
            <div
              style={{
                backgroundColor: `${color.color3}`,
                height: '300px',
                width: '300px',
              }}
            ></div>
            <p>{color.color3}</p>
          </div>
          <div>
            <div
              style={{
                backgroundColor: `${color.color4}`,
                height: '300px',
                width: '300px',
              }}
            ></div>
            <p>{color.color4}</p>
          </div>
          <div>
            <div
              style={{
                backgroundColor: `${color.color5}`,
                height: '300px',
                width: '300px',
              }}
            ></div>
            <p>{color.color5}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ColorCard;
