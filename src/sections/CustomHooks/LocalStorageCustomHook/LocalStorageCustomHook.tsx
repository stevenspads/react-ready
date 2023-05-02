import { useLocalStorage } from './hooks/useLocalStorage';

const App = () => {
  const [isDarkTheme, setDarkTheme] = useLocalStorage<boolean>('theme', false);

  const toggleTheme = () => setDarkTheme((theme) => !theme);

  return <button onClick={toggleTheme}>{isDarkTheme ? `Dark` : `Light`} Theme</button>;
};

const LocalStorageCustomHook = () => {
  return (
    <div className="Example">
      <h4>useLocalStorage() custom Hook</h4>
      <App />
    </div>
  );
};

export { LocalStorageCustomHook };
