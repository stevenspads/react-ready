import { useState } from 'react';
import { ProductActionType, useProductsContext } from './ProductsContext';

const AddProduct = () => {
  const [productName, setProductName] = useState<string>('');
  const { state, dispatch } = useProductsContext();

  const addProduct = () => {
    if (productName.length) {
      dispatch({
        type: ProductActionType.AddProduct,
        payload: {
          id: Math.max(...state.products.map((item) => item.id)) + 1,
          name: productName,
        },
      });
      setProductName('');
    }
  };

  return (
    <>
      <input placeholder="Add new product" value={productName} onChange={(e) => setProductName(e.target.value)} />
      <button onClick={addProduct}>Add Product</button>
    </>
  );
};

export { AddProduct };
