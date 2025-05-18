import { createContext, useState, useContext, ReactNode } from 'react';
import {
  Product,
  CartProduct,
} from '../components/src/molecules/ProductCard/types';

type ProductsContextType = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  cartItems: CartProduct[];
  setCartItems: React.Dispatch<React.SetStateAction<CartProduct[]>>;
  cartItemsCount: number;
  setCartItemsCount: React.Dispatch<React.SetStateAction<number>>;
};

type ProductsProviderProps = {
  children: ReactNode;
};

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [cartItemsCount, setCartItemsCount] = useState<number>(0);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartItemsCount,
        setCartItemsCount,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): ProductsContextType => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};
