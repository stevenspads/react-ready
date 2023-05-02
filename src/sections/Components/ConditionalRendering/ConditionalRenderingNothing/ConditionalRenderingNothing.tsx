type Props = {
  name: string;
  isShipped?: boolean;
};

const OrderItem = ({ name, isShipped }: Props) => {
  if (!isShipped) {
    return null;
  }

  return <p>{name}</p>;
};

const ConditionalRenderingNothing = () => {
  return (
    <div className="Example">
      <h4>Conditionally rendering nothing</h4>
      <OrderItem name="TV" isShipped={false} />
    </div>
  );
};

export { ConditionalRenderingNothing };
