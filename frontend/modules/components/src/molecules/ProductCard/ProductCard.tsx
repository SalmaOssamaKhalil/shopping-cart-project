import React from 'react';
import { ProductCardProps } from './types';
import styles from './ProductCard.module.scss';
import { useOnlineStatus } from '../../../../hooks/useOnlineStatus';
import ProductDetailsModal from '../ProductDetailsModal';
import Button from '../../atoms/Button/Button';

const ProductCard: React.FC<ProductCardProps> = ({
  sku,
  image,
  title,
  description,
  price,
  onAddToCart,
}) => {
  const isOnline = useOnlineStatus();

  return (
    <div className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.productImage} />
        <div className={styles.modalWrapper}>
          <ProductDetailsModal
            onAddToCart={onAddToCart}
            product={{
              sku: sku,
              name: title,
              price,
              description,
              imageUrl: image,
            }}
          />
        </div>
      </div>
      <h2 className={styles.productTitle}>{title}</h2>
      <p className={styles.productPrice}>{price}€</p>
      <Button 
        disabled={!isOnline}
        onClick={onAddToCart}
        text={'Add to Cart'}
      />
    </div>
  );
};

export default ProductCard;
