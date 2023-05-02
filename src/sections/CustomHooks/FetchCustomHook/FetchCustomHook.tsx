import { useData } from './hooks';

const API_URL = 'https://www.boredapi.com/api/activity';

type Activity = {
  activity: string;
};

const MyActivity = () => {
  const { data, loading, error } = useData<Activity>(API_URL);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h5>Activity</h5>
      {loading && <p>Loading...</p>}
      {error && <p>An error occured.</p>}
      {data && <p>{data.activity}</p>}
    </>
  );
};

const FetchCustomHook = () => {
  return (
    <div className="Example">
      <h4>useData() custom Hook</h4>
      <MyActivity />
    </div>
  );
};

export { FetchCustomHook };
