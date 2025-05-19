import React, { useState, useMemo } from 'react';
import styles from './Header.module.scss';
import { useProducts } from '../../../../context/ProductsContext';
import { useOnlineStatus } from 'modules/hooks/useOnlineStatus';
import Button from '../../atoms/Button';

/**
 * Header component displaying the shop title and a shopping cart summary.
 * 
 * - Shows the shop name.
 * - Displays a cart button that toggles the visibility of the cart dropdown.
 * - The cart button shows the number of items in the cart (if any).
 * - The cart dropdown lists cart items with their image, name, quantity, and price.
 * - Displays the total checkout price calculated from the cart items.
 * - The checkout button is included but does not have an attached handler here.
 * - The cart button is disabled when offline (based on `useOnlineStatus` hook).
 * 
 * Uses React hooks:
 * - `useState` to manage cart dropdown visibility.
 * - `useMemo` to efficiently compute the total price.
 * - `useProducts` custom hook for accessing cart state.
 * - `useOnlineStatus` custom hook for online/offline detection.
 */
const Header: React.FC = () => {
  const { cartItems, cartItemsCount } = useProducts();
  const [showCart, setShowCart] = useState(false);
  const isOnline = useOnlineStatus();

  /**
   * Calculates the total checkout amount for all items in the cart.
   * 
   * Uses `useMemo` to memoize the calculation, so it only recalculates
   * when `cartItemsCount` changes.
   * 
   * It sums up each cart item's price multiplied by its quantity (`count`).
   * The `price` is cast to a number to ensure proper arithmetic.
   * 
   * @returns {number} The total price of all items in the cart.
   */
  const totalCheckout = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      return sum + item.count * Number(item.price);
    }, 0);
  }, [cartItemsCount]);

  return (
    <div className={styles.header}>
      <h1>Shop.co</h1>
      <div className={styles.cartContainer}>
        <button
          className={styles.cartButton}
          disabled={!isOnline}
          onClick={() => setShowCart(!showCart)}
        >
          {cartItemsCount > 0 ? (
            <div className={styles.itemsCount}>{cartItemsCount}</div>
          ) : (
            <></>
          )}
        </button>
        {showCart && (
          <div className={styles.cartDropdown}>
            <div className={styles.itemsWrapper}>
              {cartItems.map((item) => (
                <div className={styles.cartItem} key={item.sku}>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className={styles.productImage}
                  />
                  <p className={styles.name}>
                    {item.name} {item.count > 1 ? `(x ${item.count})` : ''}
                  </p>
                  <span className={styles.price}>
                    €
                    {item.count > 1
                      ? Number(item.price) * item.count
                      : item.price}
                  </span>
                </div>
              ))}
            </div>
            <div className={styles.cartFooter}>
              <strong>Total: € {totalCheckout.toFixed(2)}</strong>
              <Button text={'Checkout'}/>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
