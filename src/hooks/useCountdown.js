import { useState, useEffect } from "react";

export const useCountdown = (start = 3, onComplete) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (count === 0) {
      onComplete?.();
      return;
    }
    const timer = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return count;
};
