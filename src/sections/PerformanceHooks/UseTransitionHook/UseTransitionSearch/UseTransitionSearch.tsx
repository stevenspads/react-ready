import { useState, ChangeEvent, useMemo, useTransition } from 'react';

// SearchNumbers without useTransition()
/*
const SearchNumbers = ({ numbers }: { numbers: number[] }) => {
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setText(value);
    setQuery(value);
  };

  const numbersList = useMemo(() => (
    numbers.map((i, index) => (
      query
        ? i.toString().startsWith(query)
        && <p key={index}>{i}</p>
        : <p key={index}>{i}</p>
    ))
  ), [query]);

  return (
    <>
      <input onChange={handleChange} value={text} type="text" />

      {numbersList}
    </>
  );
};
*/

const SearchNumbers = ({ numbers }: { numbers: number[] }) => {
  const [text, setText] = useState('');
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setText(value);
    startTransition(() => {
      setQuery(value);
    });
  };

  const numbersList = useMemo(
    () =>
      numbers.map((i, index) =>
        query ? i.toString().startsWith(query) && <p key={index}>{i}</p> : <p key={index}>{i}</p>,
      ),
    [query],
  );

  return (
    <>
      <input onChange={handleChange} value={text} type="text" />

      {isPending ? <div>Loading...</div> : numbersList}
    </>
  );
};

const numbers = [...new Array(50000).keys()];

const UseTransitionSearch = () => {
  return (
    <div className="Example">
      <h4>The useTransition() hook for search</h4>
      <SearchNumbers numbers={numbers} />
    </div>
  );
};

export { UseTransitionSearch };
