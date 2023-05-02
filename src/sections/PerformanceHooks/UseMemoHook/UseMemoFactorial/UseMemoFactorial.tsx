import { ChangeEvent, useMemo, useState } from 'react';

const getFactorial = (value: number): number => {
  console.log('getFactorial called...');

  return value <= 0 ? 1 : value * getFactorial(value - 1);
};

const Factorial = () => {
  const [number, setNumber] = useState(1);
  const [counter, setCounter] = useState(0);

  // 🔴 Bad: no useMemo()
  // const factorial = getFactorial(number);

  // ✅ Good: useMemo() applied
  const factorial = useMemo(() => getFactorial(number), [number]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(event.target.value));
  };

  const onClick = () => {
    console.log(`Re-rendering using counter ${counter}...`);
    setCounter((counter) => counter + 1);
  };

  return (
    <div>
      <p>
        The factorial of
        <input type="text" value={number} onChange={onChange} /> is {factorial}.
      </p>
      <button onClick={onClick}>Re-render component</button>
    </div>
  );
};

const UseMemoFactorial = () => {
  return (
    <div className="Example">
      <h4>Avoid re-computations of a factorial</h4>
      <Factorial />
    </div>
  );
};

export { UseMemoFactorial };
