import { Profiler, useState } from 'react';

const Sidebar = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Sidebar</p>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
};

const Content = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Content</p>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
};

const App = () => {
  const onRender = (
    id: string,
    phase: 'mount' | 'update' | 'nested-update',
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number,
  ) => {
    console.log(`${id}'s ${phase} phase:`);
    console.log(`Actual duration: ${actualDuration}`);
    console.log(`Base duration: ${baseDuration}`);
    console.log(`Start time: ${startTime}`);
    console.log(`Commit time: ${commitTime}`);
  };

  return (
    <>
      <Profiler id="Sidebar" onRender={onRender}>
        <Sidebar />
      </Profiler>
      <Profiler id="Content" onRender={onRender}>
        <Content />
      </Profiler>
    </>
  );
};

const MultipleProfilers = () => {
  return (
    <div className="Example">
      <h4>Multiple Profilers</h4>
      <App />
    </div>
  );
};

export { MultipleProfilers };
