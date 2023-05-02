import { forwardRef, HTMLProps, Ref, useRef } from 'react';

// 🔴 Bad: no forwardRef used

/*
const TextInput = () => {
  return <input type="text" />;
}

const TextInputForm = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  }

  return (
    <>
      <TextInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus Input
      </button>
    </>
  );
}
*/

// ✅ Good: forwardRef is used

type TextInputProps = HTMLProps<HTMLInputElement>;

const TextInput = (props: TextInputProps, ref: Ref<HTMLInputElement>) => {
  return <input {...props} ref={ref} />;
};
const TextInputRef = forwardRef<HTMLInputElement, TextInputProps>(TextInput);

const TextInputForm = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  return (
    <div>
      <TextInputRef ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

const UseRefComponent = () => {
  return (
    <div className="Example">
      <h4>A ref for a React component with forwardRef()</h4>
      <TextInputForm />
    </div>
  );
};

export { UseRefComponent };
