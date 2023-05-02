import { useState, useEffect, FormEvent } from 'react';

/* eslint-disable @typescript-eslint/no-unused-vars */
type ProfileData = {
  firstName: string;
  lastName: string;
};

const ProfilePage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // 🔴 Bad: profileData state is not needed
  // const [profileData, setProfileData] = useState<ProfileData | null>(null);

  // ✅ Good: analytics event sent when the form mounts
  useEffect(() => {
    console.log('POST request - ProfilePageView analytics event');
  }, []);

  // 🔴 Bad: POST request is event-related. Effect is not needed.
  /*
  useEffect(() => {
    if (profileData !== null) {
      console.log('POST request - saving user profile');
    }
  }, [profileData]);
  */

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 🔴 Bad: profileData state is not needed
    // setProfileData({ firstName, lastName });

    // ✅ Good: event-related POST request is in an event handler
    console.log('POST request - saving user profile');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const UseEffectEventRequest = () => {
  return (
    <div className="Example">
      <h4>Using useEffect() for an event-related request</h4>
      <ProfilePage />
    </div>
  );
};

export { UseEffectEventRequest };
