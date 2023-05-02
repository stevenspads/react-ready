import { ChangeEvent, useEffect, useState } from 'react';

const User = () => {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(-1);

  // 🔴 Bad: infinite loop since no dependencies were set
  /*
  useEffect(() => {
    setCount(count + 1);
  });
  */

  // ✅ Good: `count` increments only when `value` changes
  useEffect(() => {
    setCount(count + 1);
  }, [value]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <p>Changes: {count}</p>
    </div>
  );
};

const UseEffectDependencyPitfall = () => {
  return (
    <div className="Example">
      <h4>The dependency pitfall</h4>
      <User />
    </div>
  );
};

export { UseEffectDependencyPitfall };
