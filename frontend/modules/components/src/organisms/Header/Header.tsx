import React, { useState, useMemo } from 'react';
import styles from './Header.module.scss';
import { useProducts } from '../../../../context/ProductsContext';
import { useOnlineStatus } from 'modules/hooks/useOnlineStatus';
import Button from '../../atoms/Button';

const Header: React.FC = () => {
  const { cartItems, cartItemsCount } = useProducts();
  const [showCart, setShowCart] = useState(false);
  const isOnline = useOnlineStatus();

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
