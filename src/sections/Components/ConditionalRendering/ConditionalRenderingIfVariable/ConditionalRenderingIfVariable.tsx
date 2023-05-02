type Props = {
  name: string;
  isShipped?: boolean;
};

const OrderItem = ({ name, isShipped }: Props) => {
  let result = name;

  if (isShipped) {
    result = `${name} (shipped)`;
  }

  return <p>{result}</p>;
};

const ConditionalRenderingIfVariable = () => {
  return (
    <div className="Example">
      <h4>Conditional rendering with if statement and variable</h4>
      <OrderItem name="TV" isShipped />
    </div>
  );
};

export { ConditionalRenderingIfVariable };
