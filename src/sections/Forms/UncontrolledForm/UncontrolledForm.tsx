import { FormEvent, useRef } from 'react';

type Props = {
  onSubmit: (username: string) => void;
};

const UserForm = ({ onSubmit }: Props) => {
  const usernameRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (usernameRef.current) {
      onSubmit(usernameRef.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">
          Username:
          <input id="username" type="text" ref={usernameRef} />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

const UserPage = () => {
  const onSubmit = (username: string) => {
    alert(`Your username is ${username}`);
  };

  return <UserForm onSubmit={onSubmit} />;
};

const UncontrolledForm = () => {
  return (
    <div className="Example">
      <h3>Uncontrolled form</h3>
      <UserPage />
    </div>
  );
};

export { UncontrolledForm };
