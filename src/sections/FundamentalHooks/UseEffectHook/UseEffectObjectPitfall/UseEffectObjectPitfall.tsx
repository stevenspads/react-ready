import { ChangeEvent, useEffect, useState } from 'react';

const User = () => {
  const [user, setUser] = useState({ name: '', changes: -1 });

  // 🔴 Bad: object reference in the dependencies
  /*
  useEffect(() => {
    setUser({ ...user, changes: user.changes + 1 });
  }, [user]);
  */

  // ✅ Good: no object reference in the dependencies
  useEffect(() => {
    setUser({ ...user, changes: user.changes + 1 });
  }, [user.name]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, name: event.target.value });
  };

  return (
    <div>
      <p>
        Name: <input type="text" value={user.name} onChange={onChange} />
      </p>
      <p>Changes: {user.changes}</p>
    </div>
  );
};

const UseEffectObjectPitfall = () => {
  return (
    <div className="Example">
      <h4>useEffect object pitfall</h4>
      <User />
    </div>
  );
};

export { UseEffectObjectPitfall };
