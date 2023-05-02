import { useMemo, useState } from 'react';
import { filterProducts, getProducts, Product } from './utils';

type Props = {
  products: Product[];
  tab: string;
  isSale: boolean;
};

const ProductList = ({ products, tab, isSale }: Props) => {
  // 🔴 Bad: no useMemo() results in delays on starting/stopping the sale
  // const shownProducts = filterProducts(products, tab);

  // ✅ Good: useMemo() applied
  const filteredProducts = useMemo(() => filterProducts(products, tab), [products, tab]);

  return (
    <>
      {isSale && <p>Products sale is on!</p>}

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.isSold ? <s>{product.name}</s> : product.name}</li>
        ))}
      </ul>
    </>
  );
};

const products = getProducts();

const Products = () => {
  const [tab, setTab] = useState('all');
  const [isSale, setIsSale] = useState(false);

  return (
    <>
      <button onClick={() => setTab('all')}>All</button>
      <button onClick={() => setTab('available')}>Available</button>
      <button onClick={() => setTab('sold')}>Sold</button>

      <hr />

      <div>
        <button onClick={() => setIsSale((isSale) => !isSale)}>{isSale ? 'Stop' : 'Start'} Sale</button>
      </div>

      <hr />

      <ProductList products={products} tab={tab} isSale={isSale} />
    </>
  );
};

const UseMemoProducts = () => {
  return (
    <div className="Example">
      <h4>Avoid re-computing a list of products</h4>
      <Products />
    </div>
  );
};

export { UseMemoProducts };
