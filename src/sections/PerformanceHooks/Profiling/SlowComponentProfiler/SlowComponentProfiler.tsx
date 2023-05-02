import { Profiler, useEffect, useState } from 'react';

// This component takes a long time to render
const SlowComponent = () => {
  const [data, setData] = useState<number[]>([]);

  // Simulate a long-running operation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setData([1, 2, 3, 4, 5]);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

const App = () => {
  const [showSlowComponent, setShowSlowComponent] = useState(false);

  const onRender = (
    id: string,
    phase: 'mount' | 'update' | 'nested-update',
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number,
  ) => {
    if (id === 'SlowComponent') {
      console.log(`${id}'s ${phase} phase:`);
      console.log(`Actual duration: ${actualDuration}`);
      console.log(`Base duration: ${baseDuration}`);
      console.log(`Start time: ${startTime}`);
      console.log(`Commit time: ${commitTime}`);
    }
  };

  return (
    <Profiler id="App" onRender={onRender}>
      <button onClick={() => setShowSlowComponent(!showSlowComponent)}>
        {showSlowComponent ? 'Hide' : 'Show'} Slow Component
      </button>
      {showSlowComponent && (
        <Profiler id="SlowComponent" onRender={onRender}>
          <SlowComponent />
        </Profiler>
      )}
    </Profiler>
  );
};

const SlowComponentProfiler = () => {
  return (
    <div className="Example">
      <h4>Slow Component Profiler</h4>
      <App />
    </div>
  );
};

export { SlowComponentProfiler };
