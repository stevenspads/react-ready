import { Product, ProductActionType, useProductsContext } from './ProductsContext';

const ProductsList = () => {
  const { state, dispatch } = useProductsContext();
  const { products } = state;

  const editProduct = (product: Product) => {
    dispatch({ type: ProductActionType.EditProduct, payload: product });
  };

  const deleteProduct = (id: number) => {
    dispatch({ type: ProductActionType.DeleteProduct, payload: id });
  };

  return (
    <ul>
      {products.map(({ id, name }) => (
        <li key={id}>
          <input value={name} onChange={(e) => editProduct({ id, name: e.target.value })} />
          <button onClick={() => deleteProduct(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export { ProductsList };
