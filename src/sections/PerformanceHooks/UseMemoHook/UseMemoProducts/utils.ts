type Product = {
  id: number;
  name: string;
  isSold: boolean;
};

const getProducts = (): Product[] => {
  const products: Product[] = [];
  
  for (let i = 0; i < 50; i++) {
    products.push({
      id: i,
      name: "Product " + (i + 1),
      isSold: Math.random() > 0.5
    });
  };

  return products;
};

const filterProducts = (products: Product[], tab: string): Product[] => {
  console.log(`Filtering ${products.length} products for tab ${tab}.`);

  const startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // simulate expensive code
    // wait 500 ms
  }

  return products.filter(product => {
    if (tab === 'all') {
      return true;
    } else if (tab === 'available') {
      return !product.isSold;
    } else if (tab === 'sold') {
      return product.isSold;
    }
  });
};

export { getProducts, filterProducts };
export type { Product };