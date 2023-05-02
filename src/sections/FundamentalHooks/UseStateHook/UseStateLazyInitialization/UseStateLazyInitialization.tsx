import { useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
};

// set data in localStorage for the initializer function to fetch
localStorage.setItem(
  'product',
  JSON.stringify({
    id: 1,
    name: 'Logitech mouse',
    price: 100,
  }),
);

const Cart = () => {
  const getInitialState = (): Product | null => {
    console.log('getInitialState() called...');

    const product = localStorage.getItem('product');

    if (product) {
      return JSON.parse(product);
    }
    return null;
  };

  // 🔴 Bad: initializer function will be called on every render
  // const [product, setProduct] = useState<Product | null>(getInitialState());

  // ✅ Good: initializer function only called on the first render
  const [product, setProduct] = useState<Product | null>(getInitialState);

  const updateState = () => {
    setProduct({
      id: 1,
      name: 'Logitech mouse',
      price: 100,
    });
  };

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <p>
        {product.name}, ${product.price}
      </p>
      <button onClick={updateState}>Update state</button>
    </>
  );
};

const UseStateLazyInitialization = () => {
  return (
    <div className="Example">
      <h4>Lazy initialization</h4>
      <Cart />
    </div>
  );
};

export { UseStateLazyInitialization };
