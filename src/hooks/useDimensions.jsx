import { useEffect, useRef, useState } from 'react';

/*
Using react-konva, we can't set height & width on Stage to 100% since it only takes px values
therefore, we find the parent container's width and height and then manually set those !
*/
const useDimensions = () => {
  const divRef = useRef(null)
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  })

  const setCurrentDimensions = () => setDimensions({
    width: divRef.current.offsetWidth,
    height: divRef.current.offsetHeight
  })

  useEffect(() => {
    if (divRef.current?.offsetHeight && divRef.current?.offsetWidth) {
      setCurrentDimensions();
    }
    window.addEventListener('resize', setCurrentDimensions);
  }, []);

  return [divRef, dimensions]
}

export default useDimensions;