import React from 'react';
import '../styles/drawingPanel.scss';
import Row from './Row';

function DrawingPanel({ width, height, selectedColor }) {
  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width}  selectedColor={selectedColor} />)
  }

  return (
    <div id="drawing-panel">
      <div id="pixels">
        {rows}
      </div>
    </div>
  )
}

export default DrawingPanel;