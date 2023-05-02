import { createContext, useContext, ReactNode, useState } from 'react';

const ThemeContext = createContext<string | undefined>(undefined);

type PanelProps = {
  title: string;
  children: ReactNode;
};

const Panel = ({ title, children }: PanelProps) => {
  const theme = useContext(ThemeContext);

  return (
    <section className={`panel-${theme}`}>
      <h5>{title}</h5>
      {children}
      <p>Theme: {theme}</p>
    </section>
  );
};

const Form = () => {
  return (
    <div>
      <Panel title="Welcome, User">
        <button>Sign up</button>
        <button>Log in</button>
      </Panel>
    </div>
  );
};

const App = () => {
  const [theme, setTheme] = useState<string>('dark');

  const changeTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={changeTheme}>Change Theme</button>
      <hr />
      <Form />
    </ThemeContext.Provider>
  );
};

const SimpleContext = () => {
  return (
    <div className="Example">
      <h3>Simple context</h3>
      <App />
    </div>
  );
};

export { SimpleContext };
