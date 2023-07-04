import useImage from 'use-image';

import { useEffect, useRef } from 'react';
import { Image, Layer, Line, Stage } from 'react-konva';

import useLines from '@/hooks/useLines';

const BadmintonCourtImage = () => {
  const [image] = useImage(
    'https://usercontent.one/wp/www.badmintonspeak.com/wp-content/uploads/2022/10/37-1068x701.jpg?media=1680935088'
  );
  return <Image image={image} />;
};

const DrawingArea = ({ width, height, onClearLines, clearLines }) => {
  const [lines, setLines] = useLines();

  const isDrawing = useRef(false);

  useEffect(() => {
    //loadImage();
  }, [clearLines]);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();

    // To draw line
    let lastLine = lines[lines.length - 1];

    if (lastLine) {
      // add point
      lastLine.points = lastLine.points.concat([point.x, point.y]);

      // replace last
      lines.splice(lines.length - 1, 1, lastLine);
      setLines(lines.concat());
    }
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  // Components are drawn on the canvas in order - this means the first component is the bottom-most
  return (
    <Stage
      width={width}
      height={height}
      onMouseDown={handleMouseDown}
      onMousemove={handleMouseMove}
      onMouseup={handleMouseUp}
    >
      <Layer>
        <BadmintonCourtImage />
        {lines.map((line, i) => (
          <Line
            key={i}
            points={line.points}
            stroke="#df4b26"
            strokeWidth={2}
            tension={0.5}
            lineCap="round"
            globalCompositeOperation={
              line.tool === 'eraser' ? 'destination-out' : 'source-over'
            }
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default DrawingArea;
