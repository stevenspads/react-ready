import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

type ThemeContextType = {
  theme: string;
  changeTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  changeTheme: () => undefined,
});

type UserContextType = {
  user: string | null;
  setUser: Dispatch<SetStateAction<string | null>>;
};
const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => undefined,
});

type Props = {
  children: ReactNode;
};

const MyContextProviders = ({ children }: Props) => {
  const [user, setUser] = useState<string | null>(null);
  const [theme, setTheme] = useState<string>('dark');

  const changeTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        {children}
      </UserContext.Provider>
      <p>Theme: {theme}</p>
    </ThemeContext.Provider>
  );
};

const ThemeSwitcher = () => {
  const { changeTheme } = useContext(ThemeContext);

  return <button onClick={changeTheme}>Change Theme</button>;
};

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
  return (
    <MyContextProviders>
      <ThemeSwitcher />
      <Panel />
    </MyContextProviders>
  );
};

const ExtractProviders = () => {
  return (
    <div className="Example">
      <h3>Extracting context providers to a component</h3>
      <App />
    </div>
  );
};

export { ExtractProviders };
