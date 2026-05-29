import { useEffect, useState } from "react";

const useCountdown = (initialTime = 60) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time <= 0) return;

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const reset = () => {
    setTime(initialTime);
  };

  return {
    time,
    reset,
  };
};

export default useCountdown;