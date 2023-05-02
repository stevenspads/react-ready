const MainMenu = () => {
  const items = ['Home', 'About', 'Contact'];

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

const IteratingWithMap = () => {
  return (
    <div className="Example">
      <h4>Iterating with map()</h4>
      <MainMenu />
    </div>
  );
};

export { IteratingWithMap };
