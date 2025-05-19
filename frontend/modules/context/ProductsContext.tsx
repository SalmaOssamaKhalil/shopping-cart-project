import React, { createContext, useState, useContext, ReactNode } from 'react';
import {
  Product,
  CartProduct,
} from '../components/src/molecules/ProductCard/types';

/**
 * Context type defining the shape of the Products context value.
 * 
 * Includes:
 * - `products`: array of available products.
 * - `setProducts`: setter function to update products.
 * - `cartItems`: array of products added to the cart with quantities.
 * - `setCartItems`: setter function to update cart items.
 * - `cartItemsCount`: total count of items in the cart.
 * - `setCartItemsCount`: setter function to update the item count.
 */
type ProductsContextType = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  cartItems: CartProduct[];
  setCartItems: React.Dispatch<React.SetStateAction<CartProduct[]>>;
  cartItemsCount: number;
  setCartItemsCount: React.Dispatch<React.SetStateAction<number>>;
};

/**
 * Props type for the ProductsProvider component.
 * 
 * @property {ReactNode} children - React components that will have access
 * to the products context.
 */
type ProductsProviderProps = {
  children: ReactNode;
};

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

/**
 * React context provider that holds the products and cart state.
 * 
 * Provides state and setters for:
 * - products list
 * - cart items
 * - total count of cart items
 * 
 * Wrap your application or component subtree with this provider to
 * enable access to the products and cart context via `useProducts`.
 * 
 * @param {ProductsProviderProps} props - Provider props including children.
 * @returns JSX.Element that wraps children with ProductsContext.
 */
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

/**
 * Custom React hook to consume the ProductsContext.
 * 
 * Throws an error if used outside of a ProductsProvider.
 * 
 * @returns {ProductsContextType} The products context value.
 */
export const useProducts = (): ProductsContextType => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};
