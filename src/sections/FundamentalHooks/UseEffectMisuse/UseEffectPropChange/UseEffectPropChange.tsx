import { useState, useEffect } from 'react';

type Item = { id: number; name: string };

type Props = { items: Item[] };

// 🔴 Bad: using an effect to update state when prop changes

/*
const List = ({ items }: Props) => {
  const [selection, setSelection] = useState<Item | null>(null);

  useEffect(() => {
    setSelection(null);
  }, [items]);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => setSelection(item)}>
            {item.name}
          </li>
        ))}
      </ul>
      <p>Selection: {selection?.name ?? 'None'}</p>
    </div>
  );
};
*/

// To run the 🔴 Bad scenario:
// - uncomment the List component above
// - comment out the List component below

// ✅ Good: selected item is computed during renders

const List = ({ items }: Props) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selection = items.find(({ id }) => id === selectedId) ?? null;

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => setSelectedId(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
      <p>Selection: {selection?.name ?? 'None'}</p>
    </div>
  );
};

const CharacterList = () => {
  const items1 = [
    { id: 1, name: 'Mario' },
    { id: 2, name: 'Luigi' },
  ];
  const items2 = [
    { id: 3, name: 'Toad' },
    { id: 4, name: 'Peach' },
  ];

  const [id, setId] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setId((id) => (id === 1 ? 2 : 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return <List items={id === 1 ? items1 : items2} />;
};

const UseEffectPropChange = () => {
  return (
    <div className="Example">
      <h4>Using useEffect() to update state when a prop changes</h4>
      <CharacterList />
    </div>
  );
};

export { UseEffectPropChange };
