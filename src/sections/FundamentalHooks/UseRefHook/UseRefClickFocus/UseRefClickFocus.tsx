import { useRef } from 'react';

const ClickFocus = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus</button>
    </>
  );
};

const UseRefClickFocus = () => {
  return (
    <div className="Example">
      <h4>Focus when clicking</h4>
      <ClickFocus />
    </div>
  );
};

export { UseRefClickFocus };
