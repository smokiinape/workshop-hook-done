import React, { createContext, useState } from 'react';

export const InfoContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [stepInfo, setStepInfo] = useState({});

  return (
    <InfoContext.Provider
      value={{
        stepInfo,
        setStepInfo,
        
      }}
    > 
      {children}
    </InfoContext.Provider>
  );
  
};
