type Props = {
  ordersCount: number;
};

// 🔴 Bad: left side of logical AND operator is not a boolean expression

/*
const OrdersPage = ({ ordersCount }: Props) => {
  return (
    <div>
      {ordersCount && <h1>Orders</h1>}
    </div>
  );
};
*/

// ✅ Good: left side of logical AND operator is a boolean expression

const OrdersPage = ({ ordersCount }: Props) => {
  return <div>{ordersCount > 0 && <h4>Orders</h4>}</div>;
};

const ConditionalRenderingAndPitfall = () => {
  return (
    <div className="Example">
      <h4>The logical AND pitfall</h4>
      <OrdersPage ordersCount={0} />
    </div>
  );
};

export { ConditionalRenderingAndPitfall };
