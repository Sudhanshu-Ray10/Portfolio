import { useTransition } from "./context/TransitionContext";
import EntryGate from "./pages/EntryGate";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const { isEntered } = useTransition();

  return (
   
    <div className="min-h-screen bg-black text-white">
      {isEntered && <Navbar />}
      <AnimatePresence mode="wait">
        {!isEntered ? (
          <motion.div
            key="gate"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1.5 }}
          >
            <EntryGate />
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Home />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    
  );
};

export default App;
