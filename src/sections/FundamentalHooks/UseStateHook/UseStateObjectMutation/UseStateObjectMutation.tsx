import { ChangeEvent, useState } from 'react';

interface User {
  firstName: string;
  lastName: string;
}

const UserProfile = () => {
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
  });

  // 🔴 Bad: direct state mutation

  /*
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    user[e.target.name as keyof User] = e.target.value;
  }
  */

  // ✅ Good: state replaced with a new object

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <label>
        First name:
        <input name="firstName" value={user.firstName} onChange={handleChange} />
      </label>
      <label>
        Last name:
        <input name="lastName" value={user.lastName} onChange={handleChange} />
      </label>
      <p>
        {user.firstName} {user.lastName}
      </p>
    </>
  );
};

const UseStateObjectMutation = () => {
  return (
    <div className="Example">
      <h4>Mutating an object in state</h4>
      <UserProfile />
    </div>
  );
};

export { UseStateObjectMutation };
