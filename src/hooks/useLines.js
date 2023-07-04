import { createContext, useContext, useState } from 'react';

const LinesContext = createContext();

export const LinesProvider = ({ children }) => {
  const [lines, setLines] = useState([]);
  const value = [lines, setLines];
  return (
    <LinesContext.Provider value={value}>{children}</LinesContext.Provider>
  );
};
const useLines = () => useContext(LinesContext);

export default useLines;
