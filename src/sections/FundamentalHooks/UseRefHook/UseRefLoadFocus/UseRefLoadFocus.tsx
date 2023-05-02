import { useRef, useEffect } from 'react';

const InputFocus = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // logs `HTMLInputElement`
    console.log(inputRef.current);

    inputRef.current?.focus();
  }, []);

  // logs `null`
  console.log(inputRef.current);

  return <input ref={inputRef} type="text" />;
};

const UseRefLoadFocus = () => {
  return (
    <div className="Example">
      <h4>Focus when loading</h4>
      <InputFocus />
    </div>
  );
};

export { UseRefLoadFocus };
