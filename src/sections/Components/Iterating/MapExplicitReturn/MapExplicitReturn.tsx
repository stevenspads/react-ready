type MenuItem = {
  name: string;
  description: string;
};

type Props = {
  items: MenuItem[];
};

const MainMenu = ({ items }: Props) => {
  const menuItems = items.map(({ name, description }) => {
    const nameUppercase = name.toUpperCase();

    return (
      <li key={name}>
        <h5>{nameUppercase}</h5>
        <p>{description}</p>
      </li>
    );
  });

  return <ul>{menuItems}</ul>;
};

const MapExplicitReturn = () => {
  return (
    <div className="Example">
      <h4>Iterating with `map()` using an explicit return</h4>
      <MainMenu
        items={[
          { name: 'Home', description: 'Home page' },
          { name: 'About', description: 'About page' },
          { name: 'Contact', description: 'Contact page' },
        ]}
      />
    </div>
  );
};

export { MapExplicitReturn };
