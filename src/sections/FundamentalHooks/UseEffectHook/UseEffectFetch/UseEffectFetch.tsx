import { useEffect, useState } from 'react';

const API_URL = 'https://catfact.ninja/facts';

type Fact = {
  fact: string;
};

const CatFacts = () => {
  const [facts, setFacts] = useState<Fact[]>([]);

  useEffect(() => {
    async function fetchFacts() {
      const response = await fetch(API_URL);
      const { data } = await response.json();
      setFacts(data);
    }

    fetchFacts();
  }, []);

  return (
    <ul>
      {facts.map(({ fact }) => (
        <li key={fact}>{fact}</li>
      ))}
    </ul>
  );
};

const UseEffectFetch = () => {
  return (
    <div className="Example">
      <h4>useEffect to fetch data</h4>
      <CatFacts />
    </div>
  );
};

export { UseEffectFetch };
