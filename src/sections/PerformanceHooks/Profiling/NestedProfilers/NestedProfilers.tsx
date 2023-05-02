import { Profiler, ReactNode, useState } from 'react';

const Sidebar = () => {
  return <p>Sidebar</p>;
};

type ContentProps = {
  children: ReactNode;
};

const Content = ({ children }: ContentProps) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Content</p>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <div>{children}</div>
    </>
  );
};

const Editor = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Editor</p>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
};

const Preview = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Preview</p>
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
        <Content>
          <Profiler id="Editor" onRender={onRender}>
            <Editor />
          </Profiler>
          <Preview />
        </Content>
      </Profiler>
    </>
  );
};

const NestedProfilers = () => {
  return (
    <div className="Example">
      <h4>Nested Profilers</h4>
      <App />
    </div>
  );
};

export { NestedProfilers };
