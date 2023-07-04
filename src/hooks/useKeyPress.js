import { useEffect, useState } from 'react';

const useKeyPress = (targetKeyList) => {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const downHandler = ({ key }) => {
      if (targetKeyList.every((targetKey) => targetKey === key)) {
        setKeyPressed(true);
      }
    };

    const upHandler = ({ key }) => {
      if (targetKeyList.every((targetKey) => targetKey === key)) {
        setKeyPressed(false);
      }
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [targetKeyList]);

  return keyPressed;
};

export default useKeyPress;
