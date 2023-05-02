import { useState, useEffect } from 'react';

const API_URL = 'https://swapi.dev/api/people';

type StarWarsCharacter = {
  name: string;
};

type Props = {
  id: number;
};

const Character = ({ id }: Props) => {
  const [data, setData] = useState<StarWarsCharacter | null>(null);
  const [fetchedId, setFetchedId] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        const response = await fetch(`${API_URL}/${id}`);
        const newData = await response.json();
        setFetchedId(id);
        setData(newData);
      }, Math.round(Math.random() * 10000));
    };

    fetchData();
  }, [id]);

  if (!data) {
    return null;
  }

  return (
    <div>
      <p style={{ color: fetchedId === id ? 'green' : 'red' }}>Data for ID {fetchedId}</p>
      <p>{data.name}</p>
    </div>
  );
};

const Characters = () => {
  const [characterId, setCharacterId] = useState<number>(1);

  const handleClick = () => {
    // Pick a random character id (max of 82 characters)
    const id = Math.floor(Math.random() * 82) + 1;
    setCharacterId(id);
  };

  return (
    <div>
      <p>Fetching character with ID {characterId}</p>
      <button type="button" onClick={handleClick}>
        Fetch Character
      </button>
      <hr />
      <Character id={characterId} />
    </div>
  );
};

const UseEffectRaceCondition = () => {
  return (
    <div className="Example">
      <h4>Race condition</h4>
      <Characters />
    </div>
  );
};

export { UseEffectRaceCondition };
