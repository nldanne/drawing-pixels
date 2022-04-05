import React, { useState } from 'react';
import '../styles/pixel.scss';

function Pixel({ selectedColor }) {
  const [pixelColor, setPixelColor] = useState('#fff');
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  return (
    <div className='pixel' style={{backgroundColor: pixelColor}}>

    </div>
  )
}

export default Pixel;