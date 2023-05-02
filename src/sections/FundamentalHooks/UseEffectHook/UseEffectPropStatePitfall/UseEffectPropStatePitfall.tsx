// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';

type Props = {
  value: number;
};

// 🔴 Bad: props put as-is into component state

/*
const ValueDisplay = ({ value }: Props) => {
  const [countValue, setCountValue] = useState<number>(0);

  // runs when the 'value' prop changes
  useEffect(() => {
    // save latest value to state
    setCountValue(value);
  }, [value]);

  // for logging purposes (runs every render)
  useEffect(() => {
    console.log(`Rendered with value ${value}`);
  });

  return <p>{countValue}</p>;
};
*/

// ✅ Good: prop used directly, not stored in state

const ValueDisplay = ({ value }: Props) => {
  return <p>{value}</p>;
};

const ValueChanger = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <div>
      <ValueDisplay value={value} />
      <button onClick={() => setValue(Math.random())}>Change Value</button>
    </div>
  );
};

const UseEffectPropStatePitfall = () => {
  return (
    <div className="Example">
      <h4>Props-in-state pitfall</h4>
      <ValueChanger />
    </div>
  );
};

export { UseEffectPropStatePitfall };
