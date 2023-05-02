import { createContext, useContext, ReactNode } from 'react';

const ThemeContext = createContext<string>('dark');

type PanelProps = {
  title: string;
  children: ReactNode;
};

const Panel = ({ title, children }: PanelProps) => {
  const theme = useContext(ThemeContext);

  return (
    <section className={`panel-${theme}`}>
      <h5>{title}</h5>
      <p>Panel Theme: {theme}</p>
      {children}
    </section>
  );
};

const Footer = () => {
  const theme = useContext(ThemeContext);

  return (
    <footer>
      <p>&copy; React App</p>
      <p>Footer Theme: {theme}</p>
    </footer>
  );
};

const Form = () => {
  return (
    <Panel title="Welcome, User">
      <button>Sign up</button>
      <button>Log in</button>
      <hr />
      <ThemeContext.Provider value="light">
        <Footer />
      </ThemeContext.Provider>
    </Panel>
  );
};

const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
};

const OverrideContext = () => {
  return (
    <div className="Example">
      <h3>Override context</h3>
      <App />
    </div>
  );
};

export { OverrideContext };
