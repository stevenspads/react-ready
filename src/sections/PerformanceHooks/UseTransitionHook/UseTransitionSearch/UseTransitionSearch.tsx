import { useState, useTransition, ChangeEvent } from 'react';

const SearchNumbers = ({ numbers }: { numbers: number[] }) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState(numbers);
  const [isPending, startTransition] = useTransition();

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearch(value);
    startTransition(() => {
      setResults(numbers.filter((n) => n.toString().includes(value)));
    });
  };

  return (
    <>
      <p>{numbers.length !== results.length ? `${results.length} matches` : null}</p>

      <input onChange={handleChange} value={search} type="text" />

      {isPending ? <div>Loading...</div> : results.map((result) => <p key={result}>{result}</p>)}
    </>
  );
};

const numbers = Array.from(Array(100000).keys());

const UseTransitionSearch = () => {
  return (
    <div className="Example">
      <h4>The useTransition() hook for search</h4>
      <SearchNumbers numbers={numbers} />
    </div>
  );
};

export { UseTransitionSearch };
