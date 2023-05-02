type MenuItem = {
  name: string;
  description: string;
};

type Props = {
  items: MenuItem[];
};

const MainMenu = ({ items }: Props) => {
  const menuItems = items.map(({ name, description }) => (
    <li key={name}>
      <h5>{name}</h5>
      <p>{description}</p>
    </li>
  ));

  return <ul>{menuItems}</ul>;
};

const MapImplicitReturn = () => {
  return (
    <div className="Example">
      <h4>Iterating with `map()` using an implicit return</h4>
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

export { MapImplicitReturn };
