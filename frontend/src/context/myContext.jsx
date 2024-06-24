
import React, { createContext, useState } from "react";

const myContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <myContext.Provider value={{ loading, setLoading }}>
      {children}
    </myContext.Provider>
  );
};

export default myContext;
