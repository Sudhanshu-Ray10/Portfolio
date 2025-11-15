import { createContext, useContext, useState } from "react";

const TransitionContext = createContext(); // creates container

export const TransitionProvider = ({ children }) => {

  // INITIAL STATE (read localStorage first)
  const [isEntered, setIsEntered] = useState(false);
  // UPDATE (change state + save in localStorage)
  const updateIsEntered = (value) => {
    setIsEntered(value);
    localStorage.setItem("isEntered", value);
  };

  return (
    <TransitionContext.Provider value={{ isEntered, setIsEntered: updateIsEntered }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => useContext(TransitionContext);
