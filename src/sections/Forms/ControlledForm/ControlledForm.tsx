import { ChangeEvent, FormEvent, useState } from 'react';

type Props = {
  onSubmit: (username: string) => void;
};

const UserForm = ({ onSubmit }: Props) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(username);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">
          Username:
          <input id="username" type="text" onChange={handleChange} value={username} />
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

  return (
    <div>
      <UserForm onSubmit={onSubmit} />
    </div>
  );
};

const ControlledForm = () => {
  return (
    <div className="Example">
      <h3>Controlled form</h3>
      <UserPage />
    </div>
  );
};

export { ControlledForm };
