type Props = {
  name: string;
};

const Greeting = ({ name }: Props) => {
  return <h1>Hello, {name}!</h1>;
};

const ComponentProps = () => {
  const name = 'John Smith';

  return (
    <div className="Example">
      <h3>Component with props</h3>
      <Greeting name={name} />
    </div>
  );
};

export { ComponentProps };
