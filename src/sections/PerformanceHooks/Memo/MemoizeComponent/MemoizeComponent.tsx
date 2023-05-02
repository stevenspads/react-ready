import { memo, useState } from 'react';

type Props = {
  title: string;
  author: string;
  isMemoized: boolean;
};

const Book = ({ title, author, isMemoized }: Props) => {
  console.log(`${isMemoized ? '<MemoizedBook>' : '<Book>'} has rendered for ${title}.`);

  return (
    <>
      <p>
        {title} by {author}
      </p>
    </>
  );
};

const MemoizedBook = memo(Book);

const Books = () => {
  // this state is used to re-render the Books component
  const [, setClicks] = useState<number>(0);

  return (
    <>
      <button onClick={() => setClicks((clicks) => (clicks += 1))}>Re-render</button>
      <MemoizedBook title="Book A" author="Author A" isMemoized={true} />

      <Book title="Book B" author="Author B" isMemoized={false} />
    </>
  );
};

const MemoizeComponent = () => {
  return (
    <div className="Example">
      <h3>Memoize a Book component</h3>
      <Books />
    </div>
  );
};

export { MemoizeComponent };
