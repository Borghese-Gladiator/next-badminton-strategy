import { useState } from 'react';
import { Layer, Stage, Text } from 'react-konva';

import { AppBar, Box, Typography } from '@mui/material';

import useDimensions from '@/hooks/useDimensions';

const ShapesSidebar = ({ width, height }) => {
  const [state, setState] = useState({
    isDragging: false,
    x: 50,
    y: 50,
  });

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Text
          text="Draggable Text"
          x={state.x}
          y={state.y}
          draggable
          fill={state.isDragging ? 'green' : 'black'}
          onDragStart={() => {
            setState({
              isDragging: true,
            });
          }}
          onDragEnd={(e) => {
            setState({
              isDragging: false,
              x: e.target.x(),
              y: e.target.y(),
            });
          }}
        />
      </Layer>
    </Stage>
  );
};

export default ShapesSidebar;
