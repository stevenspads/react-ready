import { useRef, useState, useEffect } from 'react';

const Stopwatch = () => {
  const timerIdRef = useRef<number>(0);
  const [timer, setTimer] = useState<number>(0);

  const startTimer = () => {
    if (timerIdRef.current) {
      return;
    }

    timerIdRef.current = setInterval(() => setTimer((timer) => timer + 1), 1000);
  };

  const stopTimer = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);

  return (
    <div>
      <p>{timer}</p>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
      </div>
    </div>
  );
};

const UseRefStopwatch = () => {
  return (
    <div className="Example">
      <h4>Stopwatch</h4>
      <Stopwatch />
    </div>
  );
};

export { UseRefStopwatch };
