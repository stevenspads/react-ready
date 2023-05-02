import { memo, useCallback, useEffect, useState } from 'react';

const getBooks = () => {
  return [{ title: 'Book A' }, { title: 'Book B' }, { title: 'Book C' }];
};

type Props = {
  searchTerm: string;
};

const Books = ({ searchTerm }: Props) => {
  console.log(`Books list rendered with search term ${searchTerm}.`);

  // this getBooks() call could be expensive
  const books = getBooks();

  const booksList = books.map(({ title }) => {
    return <li key={title}>{title}</li>;
  });

  return <ul>{booksList}</ul>;
};

const MemoizedBooks = memo(Books);

type CatalogProps = {
  searchTerm: string;
};

const Catalog = ({ searchTerm }: CatalogProps) => {
  // 🔴 Bad: no useCallback()
  // const logSearch = () => {
  //   console.log(`Search term is ${searchTerm}`);
  // };

  // ✅ Good: useCallback() applied
  const logSearch = useCallback(() => {
    console.log(`Search term is ${searchTerm}`);
  }, [searchTerm]);

  useEffect(() => {
    logSearch();
  }, [logSearch]);

  return (
    <>
      <MemoizedBooks searchTerm={searchTerm} />
    </>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // used to re-render this component
  const [, setClicks] = useState<number>(0);

  return (
    <>
      <div>
        <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
      </div>
      <div>
        <button onClick={() => setClicks((clicks) => (clicks += 1))}>Re-render</button>
      </div>
      <Catalog searchTerm={searchTerm} />
    </>
  );
};

const UseCallbackUseEffect = () => {
  return (
    <div className="Example">
      <h4>The useCallback() hook for useEffect()</h4>
      <App />
    </div>
  );
};

export { UseCallbackUseEffect };
