import { useState } from 'react';

type Props = {
  counter: number;
};

const CounterDisplay = ({ counter }: Props) => {
  return <p>{counter}</p>;
};

const CounterChanger = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <CounterDisplay counter={value} />
      <button onClick={() => setValue(Math.random())}>Change Value</button>
    </div>
  );
};

const UseStateChildComponents = () => {
  return (
    <div className="Example">
      <h4>useState and child components</h4>
      <CounterChanger />
    </div>
  );
};

export { UseStateChildComponents };
