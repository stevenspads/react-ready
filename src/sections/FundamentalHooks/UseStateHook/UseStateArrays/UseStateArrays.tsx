import { useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
};

const productList: Product[] = [
  { id: 1, name: 'PlayStation 5', price: 500 },
  { id: 2, name: 'TV', price: 1500 },
  { id: 3, name: 'Speakers', price: 750 },
];

const ProductList = () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [products, setProducts] = useState<Product[]>(productList);

  const handleAdd = () => {
    setName('');
    setPrice('');
    setProducts([
      ...products,
      {
        id: products[products.length - 1].id + 1,
        name,
        price: parseInt(price),
      },
    ]);
  };

  const handleDelete = (productToDelete: string) => {
    const updatedProducts = products.filter((product) => product.name !== productToDelete);
    setProducts(updatedProducts);
  };

  const handleClick = () => {
    const updatedProducts = products.map((product) => {
      if (product.name === 'PlayStation 5' && product.price > 100) {
        // Return a new product
        return {
          ...product,
          price: product.price - 50,
        };
      } else {
        // No change
        return product;
      }
    });
    // re-render with the updated array
    setProducts(updatedProducts);
  };

  return (
    <>
      <div>
        <h5>Add Product</h5>
        <input type="text" value={name} placeholder="Product name..." onChange={(e) => setName(e.target.value)} />
        <input type="text" value={price} placeholder="Product price..." onChange={(e) => setPrice(e.target.value)} />
        <button onClick={handleAdd}>Add Product</button>
      </div>

      <hr />

      <div>
        <h5>Discounts</h5>
        <button onClick={handleClick}>PlayStation Discount</button>
      </div>

      <hr />

      <h5>Products</h5>
      <ul>
        {products.map(({ id, name, price }) => (
          <li key={id}>
            {name}, $ {price} <button onClick={() => handleDelete(name)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

const UseStateArrays = () => {
  return (
    <div className="Example">
      <h4>useState with arrays</h4>
      <ProductList />
    </div>
  );
};

export { UseStateArrays };
