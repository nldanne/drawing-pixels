import React, { useRef } from 'react';
import Row from './Row';
import { exportComponentAsPNG, exportComponentAsJPEG } from 'react-component-export-image';

import '../styles/drawingPanel.scss';

function DrawingPanel({ width, height, selectedColor }) {
  const componentRef = useRef();
  
  
  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width}  selectedColor={selectedColor} />)
  }

  return (
    <div id="drawing-panel">
      <div id="pixels" ref={componentRef}>
        {rows}
      </div>
      <button 
        className='button-outline'
        onClick={() => exportComponentAsPNG(componentRef)}
      > Export as PNG
      </button>
      <button 
        className='button-outline'
        onClick={() => exportComponentAsJPEG(componentRef)}
      > Export as JPG
      </button>
    </div>
  )
}

export default DrawingPanel;