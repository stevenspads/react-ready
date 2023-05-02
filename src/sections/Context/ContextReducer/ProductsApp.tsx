import { AddProduct } from './AddProduct';
import { ProductsList } from './ProductsList';
import { ProductsProvider } from './ProductsContext';

const ProductsApp = () => {
  return (
    <ProductsProvider>
      <h4>Products</h4>
      <AddProduct />
      <ProductsList />
    </ProductsProvider>
  );
};

export { ProductsApp };
