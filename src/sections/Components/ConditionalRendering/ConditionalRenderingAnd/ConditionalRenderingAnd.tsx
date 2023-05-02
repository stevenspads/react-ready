type Props = {
  name: string;
  isShipped?: boolean;
};

const OrderItem = ({ name, isShipped }: Props) => {
  return (
    <p>
      {name} {isShipped && ' (shipped)'}
    </p>
  );
};

const ConditionalRenderingAnd = () => {
  return (
    <div className="Example">
      <h4>Conditional rendering with logical AND operator</h4>
      <OrderItem name="TV" isShipped />
    </div>
  );
};

export { ConditionalRenderingAnd };
