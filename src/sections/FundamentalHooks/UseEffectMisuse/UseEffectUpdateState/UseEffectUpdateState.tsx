import { useState, useEffect } from 'react';

const UserForm = () => {
  const [firstName, setFirstName] = useState<string>('John');
  const [lastName, setLastName] = useState<string>('Smith');

  // 🔴 Bad: redundant state causes a useless Effect
  const [fullName, setFullName] = useState<string>('');

  // 🔴 Bad: useless Effect
  useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);

  // ✅ Good: compute it during rendering
  // const fullName = `${firstName} ${lastName}`;

  return (
    <>
      <input type="text" name="firstName" value={firstName} onChange={(event) => setFirstName(event?.target.value)} />
      <input type="text" name="lastName" value={lastName} onChange={(event) => setLastName(event?.target.value)} />
      <p>Full name: {fullName}</p>
    </>
  );
};

const UseEffectUpdateState = () => {
  return (
    <div className="Example">
      <h4>Using useEffect() to update state based on other state</h4>
      <UserForm />
    </div>
  );
};

export { UseEffectUpdateState };
