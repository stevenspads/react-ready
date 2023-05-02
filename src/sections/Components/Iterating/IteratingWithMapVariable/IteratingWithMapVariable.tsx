type Props = {
  items: string[];
};

const MainMenu = ({ items }: Props) => {
  const menuItems = items.map((item) => <li key={item}>{item}</li>);

  return <ul>{menuItems}</ul>;
};

const IteratingWithMapVariable = () => {
  return (
    <div className="Example">
      <h4>Iterating with the result assigned to a variable</h4>
      <MainMenu items={['Home', 'About', 'Contact']} />
    </div>
  );
};

export { IteratingWithMapVariable };
