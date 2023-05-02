import { useToggle } from './hooks';

const ThemeSwitcher = () => {
  const [isDarkMode, toggleDarkMode] = useToggle(false);
  const theme = isDarkMode ? 'dark' : 'light';

  return (
    <div className={theme}>
      <p>{theme} mode</p>
      <button onClick={toggleDarkMode}>Toggle Theme</button>
    </div>
  );
};

const ToggleCustomHook = () => {
  return (
    <div className="Example">
      <h4>useToggle() custom Hook</h4>
      <ThemeSwitcher />
    </div>
  );
};

export { ToggleCustomHook };
