import { useState, useEffect } from 'react';

const API_URL = 'https://www.boredapi.com/api/activity';

// 🔴 Bad: Passing data to the parent via `onFetched` in an effect

/*
type Activity = {
  activity: string;
  type: string;
};

type MyActivityProps = {
  onFetched: (data: Activity | null) => void;
};

const MyActivity = ({ onFetched }: MyActivityProps) => {
  const [data, setData] = useState<Activity | null>(null);

  useEffect(() => {
    async function fetchActivity() {
      const response = await fetch(API_URL);
      const data = await response.json();
      if (data) {
        setData(data);
        onFetched(data);
      }
    }

    fetchActivity();
  }, [onFetched]);

  return <p>{data?.activity}</p>;
};

const MyProfile = () => {
  const [data, setData] = useState<Activity | null>(null);

  // logging the data returned by the child component
  useEffect(() => {
    if (data) {
      console.log(`From child component: ${data.activity}`);
    }
  }, [data]);

  return <MyActivity onFetched={setData} />;
};
*/

// To run the 🔴 Bad scenario:
// - uncomment the code block above
// - comment MyActivityProps, MyActivity, and MyProfile below

// ✅ Good: Fetch data from the parent and pass it to the child

type MyActivityProps = {
  activity: string | null;
};

const MyActivity = ({ activity }: MyActivityProps) => {
  return <p>{activity}</p>;
};

const MyProfile = () => {
  const [activity, setActivity] = useState<string | null>(null);

  useEffect(() => {
    async function fetchActivity() {
      const response = await fetch(API_URL);
      const { activity } = await response.json();
      if (activity) {
        setActivity(activity);
      }
    }

    fetchActivity();
  }, []);

  return <MyActivity activity={activity} />;
};

const UseEffectPassingToParent = () => {
  return (
    <div className="Example">
      <h4>Passing fetched data to the parent via useEffect()</h4>
      <MyProfile />
    </div>
  );
};

export { UseEffectPassingToParent };
