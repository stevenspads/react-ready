import { memo, useCallback, useState } from 'react';

const getBooks = () => {
  return [{ title: 'Book A' }, { title: 'Book B' }, { title: 'Book C' }];
};

type BooksProps = {
  searchTerm: string;
  onClick: (title: string) => void;
};

const Books = ({ searchTerm, onClick }: BooksProps) => {
  console.log(`Books list rendered. searchTerm is ${searchTerm}.`);

  // this getBooks() call could be expensive
  const books = getBooks();

  const booksList = books.map(({ title }) => {
    const hasMatch = title === searchTerm;
    return (
      <li key={title} onClick={() => onClick(title)} style={{ color: hasMatch ? 'green' : 'black' }}>
        {title}
      </li>
    );
  });

  return <ul>{booksList}</ul>;
};

const MemoizedBooks = memo(Books);

type CatalogProps = {
  searchTerm: string;
};

const Catalog = ({ searchTerm }: CatalogProps) => {
  // 🔴 Bad: without useCallback, this function breaks the memoization of `MemoizedBooks`
  /*
  const onClick = (title: string) => {
    console.log(`You clicked ${title}`);
  };
  */

  // ✅ Good: useCallback() applied
  const onClick = useCallback(
    (title: string) => {
      console.log(`You clicked ${title}`);
    },
    [searchTerm],
  );

  return (
    <>
      <MemoizedBooks searchTerm={searchTerm} onClick={onClick} />
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

const UseCallbackMemo = () => {
  return (
    <div className="Example">
      <h4>The useCallback() hook for memo()</h4>
      <App />
    </div>
  );
};

export { UseCallbackMemo };
