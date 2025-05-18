import React from 'react';
import styles from './ProductDetailsModal.module.scss';
import { ProductDetailsModalProps } from './types';


const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
}) => {
  return (
    <div className={styles.productDetailsModal}>
      <img
        src={product.imageUrl}
        alt={product.name}
        className={styles.productImage}
      />
      <h2 className={styles.productTitle}>{product.name}</h2>
      <p className={styles.productDescription}>{product.description}</p>
    </div>
  );
};

export default ProductDetailsModal;
