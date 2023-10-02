import { useState, useMemo, useDeferredValue, ChangeEvent } from 'react';

const numbers = [...new Array(150000).keys()];

const SearchList = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input type="number" onChange={handleChange} value={query} />
      <List query={query} />
    </div>
  );
};

const List = ({ query }: { query: string }) => {
  const deferredQuery = useDeferredValue(query);

  const list = useMemo(
    () =>
      numbers.map((i, index) =>
        deferredQuery ? i.toString().startsWith(deferredQuery) && <p key={index}>{i}</p> : <p key={index}>{i}</p>,
      ),
    [deferredQuery],
  );

  return <div>{list}</div>;
};

const UseDeferredValueSearch = () => {
  return (
    <div className="Example">
      <h4>The useDeferredValue() hook for search</h4>
      <SearchList />
    </div>
  );
};

export { UseDeferredValueSearch };
