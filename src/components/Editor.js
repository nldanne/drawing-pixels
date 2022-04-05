import React, { useState } from 'react';
import { CirclePicker } from 'react-color';
import DrawingPanel from './DrawingPanel';

import '../styles/editor.scss';

function Editor() {
  const [canvasWidth, setCanvasWidth] = useState(16);
  const [canvasHeight, setCanvasHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingCanvas, setHideDrawingCanvas] = useState(true);
  const [buttonText, setButtonText] = useState('Start drawing');
  const [selectedColor, setSelectedColor] = useState('#f44336');

  const widthHandler = (e) => {
    setCanvasWidth(e.target.value);
  };

  const heightHandler = (e) => {
    setCanvasHeight(e.target.value);
  };

  const initializeCanvas = () => {
    setHideOptions(!hideOptions);
    setHideDrawingCanvas(!hideDrawingCanvas);

    buttonText ==='Start drawing' 
      ? setButtonText('reset') 
      : setButtonText('Start drawing');
  };

  const changeColorHandler = (color) => {
    setSelectedColor(color.hex);
  };

  return (
    <div id="editor">
      <h1>Pixel Art Editor</h1>
      {hideDrawingCanvas && <h2>Enter Your Canvas Dimensions</h2>}
      {hideDrawingCanvas && (
      <div id="options">
        <div className='option'>
          <input 
            type='number' 
            className='panelInput' 
            defaultValue={canvasWidth} 
            onChange={widthHandler}
          />
          <span>Width</span>
        </div>
        <div className='option'>
          <input 
            type='number' 
            className='panelInput' 
            defaultValue={canvasHeight} 
            onChange={heightHandler}
          />
          <span>Height</span>
        </div>
      </div> )}

      <button 
        className='button'
        onClick={initializeCanvas}
      > {buttonText}
      </button>

      {hideOptions && (
        <>
          <CirclePicker 
            color={selectedColor} 
            onChangeComplete={changeColorHandler}
          />

          <DrawingPanel 
            width={canvasWidth}
            height={canvasHeight}
            selectedColor={selectedColor}
          />  
        </>
      )}

    </div> 
  )
}

export default Editor;