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
          <div
            style={{
              backgroundColor: `${color.color2}`,
              height: '300px',
              width: '300px',
            }}
          >
            {color.color2}
          </div>
          <div
            style={{
              backgroundColor: `${color.color3}`,
              height: '300px',
              width: '300px',
            }}
          >
            {color.color3}
          </div>
          <div
            style={{
              backgroundColor: `${color.color4}`,
              height: '300px',
              width: '300px',
            }}
          >
            {color.color4}
          </div>
          <div
            style={{
              backgroundColor: `${color.color5}`,
              height: '300px',
              width: '300px',
            }}
          >
            {color.color5}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ColorCard;
