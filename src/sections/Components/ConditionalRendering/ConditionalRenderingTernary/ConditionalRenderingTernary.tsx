type Props = {
  name: string;
  isShipped?: boolean;
};

const OrderItem = ({ name, isShipped }: Props) => {
  return <p>{isShipped ? `${name} (shipped)` : name}</p>;
};

/*
// HTML tags or component tags can also go within the ternary expression

const OrderItem = ({ name, isShipped }: Props) => {
  return (
    <p>
      {isShipped ? (
        <strong>
          {`${name} (shipped)`}
        </strong>
      ) : (
        name
      )}
    </p>
  );
};
*/

const ConditionalRenderingTernary = () => {
  return (
    <div className="Example">
      <h4>Conditional rendering with a JSX ternary expression</h4>
      <OrderItem name="TV" isShipped />
    </div>
  );
};

export { ConditionalRenderingTernary };
