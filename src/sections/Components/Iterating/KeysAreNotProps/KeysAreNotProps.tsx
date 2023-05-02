type MenuItem = {
  id: number;
  name: string;
  description: string;
};

type Props = {
  items: MenuItem[];
};

const Item = ({ id, name, description }: MenuItem) => {
  return (
    <li>
      <h5>
        {id}: {name}
      </h5>
      <p>{description}</p>
    </li>
  );
};

const MainMenu = ({ items }: Props) => {
  const menuItems = items.map(({ id, name, description }) => (
    <Item key={id} id={id} name={name} description={description} />
  ));

  return <ul>{menuItems}</ul>;
};

const KeysAreNotProps = () => {
  return (
    <div className="Example">
      <h4>Keys during iteration are not props</h4>
      <MainMenu
        items={[
          { id: 1, name: 'Home', description: 'Home page' },
          { id: 2, name: 'About', description: 'About page' },
          { id: 3, name: 'Contact', description: 'Contact page' },
        ]}
      />
    </div>
  );
};

export { KeysAreNotProps };
