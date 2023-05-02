import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

const ThemeContext = createContext<string | undefined>('dark');

type UserContextType = {
  user: string | null;
  setUser: Dispatch<SetStateAction<string | null>>;
};
const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => undefined,
});

const Greeting = () => {
  const { user } = useContext(UserContext);

  return <p>Welcome, {user}.</p>;
};

const LoginForm = () => {
  const { setUser } = useContext(UserContext);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const isValidUser = firstName !== '' && lastName !== '';

  const onClick = () => {
    setUser(`${firstName} ${lastName}`);
  };

  return (
    <>
      <label>
        First Name: <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <label>
        Last Name: <input required value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <button type="button" disabled={!isValidUser} onClick={onClick}>
        Log In
      </button>
      {!isValidUser && <p>First and Last Name are required.</p>}
    </>
  );
};

const Panel = () => {
  const { user } = useContext(UserContext);

  const result = user ? <Greeting /> : <LoginForm />;

  return <div>{result}</div>;
};

const App = () => {
  const [theme, setTheme] = useState<string>('light');
  const [user, setUser] = useState<string | null>(null);

  const changeTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={changeTheme}>Change Theme</button>
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <Panel />
      </UserContext.Provider>
      <p>Theme: {theme}</p>
    </ThemeContext.Provider>
  );
};

const MultipleContexts = () => {
  return (
    <div className="Example">
      <h3>Multiple contexts</h3>
      <App />
    </div>
  );
};

export { MultipleContexts };
