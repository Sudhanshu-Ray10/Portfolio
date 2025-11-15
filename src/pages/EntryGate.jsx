import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Countdown from "../components/EntryGate/Countdown";
import FireArrows from "../components/EntryGate/FireArrows";
import GateOverlay from "../components/EntryGate/GateOverlay";
import { useCountdown } from "../hooks/useCountdown";
import { useTransition } from "../context/TransitionContext";
import { useNavigate } from "react-router-dom";


const EntryGate = () => {
  const { setIsEntered } = useTransition();
  const navigate = useNavigate();
  const [showArrows, setShowArrows] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const count = useCountdown(3, () => {
    setShowArrows(true);
    setTimeout(() => {
      setShowOverlay(true);
      setTimeout(()=>{
      setIsEntered(true);
      navigate('/home')
      },2500);
     
    
    }, 2000);
  });

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        {!showArrows && count > 0 && <Countdown key={count} number={count} />}
      </AnimatePresence>

      {showArrows && !showOverlay && <FireArrows />}
      {showOverlay && <GateOverlay />}
    </div>
  );
};

export default EntryGate;
