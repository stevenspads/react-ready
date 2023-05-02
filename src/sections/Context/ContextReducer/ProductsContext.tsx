import { createContext, ReactNode, useContext, useReducer } from 'react';

type Product = {
  id: number;
  name: string;
};

type ProductsState = {
  products: Product[];
};

enum ProductActionType {
  AddProduct = 'ADD_PRODUCT',
  EditProduct = 'EDIT_PRODUCT',
  DeleteProduct = 'DELETE_PRODUCT',
}

type ProductAction =
  | { type: ProductActionType.AddProduct; payload: Product }
  | { type: ProductActionType.EditProduct; payload: Product }
  | { type: ProductActionType.DeleteProduct; payload: number };

const initialState: ProductsState = {
  products: [
    { id: 1, name: 'Nintendo Switch' },
    { id: 2, name: 'Sony PlayStation' },
    { id: 3, name: 'XBOX Series X' },
  ],
};

const productsReducer = (state: ProductsState, action: ProductAction): ProductsState => {
  const { type, payload } = action;

  switch (type) {
    case ProductActionType.AddProduct: {
      return {
        ...state,
        products: [...state.products, payload],
      };
    }
    case ProductActionType.EditProduct: {
      const updatedProducts = state.products.map((product) => (product.id === payload.id ? payload : product));
      return { products: updatedProducts };
    }
    case ProductActionType.DeleteProduct: {
      const filteredProducts = state.products.filter((product) => product.id !== payload);
      return { products: filteredProducts };
    }
    default: {
      return state;
    }
  }
};

type ProductsDispatch = (action: ProductAction) => void;
type ProductsContextType = {
  state: ProductsState;
  dispatch: ProductsDispatch;
};

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

const ProductsProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  return <ProductsContext.Provider value={{ state, dispatch }}>{children}</ProductsContext.Provider>;
};

const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProductsContext must be used within a ProductsProvider');
  }
  return context;
};

export type { Product };
export { ProductActionType, ProductsProvider, useProductsContext };
