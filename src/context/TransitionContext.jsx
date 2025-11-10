import { createContext, useContext, useState } from "react";

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
  const [isEntered, setIsEntered] = useState(false);
  return (
    <TransitionContext.Provider value={{ isEntered, setIsEntered }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => useContext(TransitionContext);
