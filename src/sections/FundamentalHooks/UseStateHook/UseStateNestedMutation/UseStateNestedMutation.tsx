import { ChangeEvent, useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Smith',
    location: {
      city: 'Montreal',
      province: 'Quebec',
      country: 'Canada',
    },
  });

  // 🔴 Bad: direct state mutation

  /*
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    user.location.city = e.target.value;
  }
  */

  // ✅ Good: state setter function and spread syntax used

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user, // Copy other user fields
      location: {
        // but replace the location
        ...user.location, // copy other location fields
        city: e.target.value, // but replace the city
      },
    });
  };

  return (
    <>
      <label>
        City:
        <input name="city" value={user.location.city} onChange={handleChange} />
      </label>
      <p>City: {user.location.city}</p>
    </>
  );
};

const UseStateNestedMutation = () => {
  return (
    <div className="Example">
      <h4>Mutating a nested object in state</h4>
      <UserProfile />
    </div>
  );
};

export { UseStateNestedMutation };
