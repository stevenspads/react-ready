type Props = {
  name: string;
  isShipped?: boolean;
};

const OrderItem = ({ name, isShipped }: Props) => {
  if (isShipped) {
    return <p>{name} (shipped)</p>;
  }

  return <p>{name}</p>;
};

const Order = () => {
  return (
    <section>
      <OrderItem name="iPhone" isShipped={false} />
      <OrderItem name="iPad" isShipped={true} />
      <OrderItem name="iMac" isShipped />
    </section>
  );
};

const ConditionalRenderingIf = () => {
  return (
    <div className="Example">
      <h4>Conditional rendering with if statement</h4>
      <Order />
    </div>
  );
};

export { ConditionalRenderingIf };
