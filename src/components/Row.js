import React from 'react';
import Pixel from './Pixel';
import '../styles/row.scss';

function Row({ width, selectedColor }) {
  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} selectedColor={selectedColor} />);
  }

  return (
    <div className='row'>{pixels}</div>
  )
}

export default Row;