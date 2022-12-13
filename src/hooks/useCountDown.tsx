import { useState, useRef, useEffect } from "react";

export const useCountDown = (initialValue: number, onComplete?: () => void) => {
  let [counter, setCounter] = useState(initialValue);
  let [timer, setTimer] = useState<any>(null);
  const intervalRef = useRef<any>();
  intervalRef.current = counter;
  const interrupt = () => {
    clearInterval(timer);
  };
  useEffect(() => {
    setCounter(initialValue);
    const _timer = setInterval(() => {
      if (intervalRef.current === 0) {
        if (onComplete) {
          onComplete();
        }
        clearInterval(_timer);
      } else {
        setCounter(intervalRef.current - 1);
      }
    }, 1000);
    setTimer(_timer);
    return () => clearInterval(_timer);
  }, [initialValue, onComplete]);
  return [counter, interrupt] as const;
};

//Found this example from https://kodaps.com/creating-a-custom-hook-usecountdown-creating-a-react-quiz-app-part-2-72c82ca83b49 but changed it a bit.
