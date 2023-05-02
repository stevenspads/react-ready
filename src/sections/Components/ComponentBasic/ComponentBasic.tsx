const Greeting = () => {
  return <p>Hello, world!</p>;
};

const ComponentBasic = () => {
  return (
    <div className="Example">
      <h3>Basic component</h3>
      <Greeting />
    </div>
  );
};

export { ComponentBasic };
