import React from 'react';
import styles from './ProductDetailsModal.module.scss';
import { ProductDetailsModalProps } from './types';

/**
 * Modal component that displays detailed information about a product.
 * 
 * Shows the product image, title, and description.
 * 
 * @param {ProductDetailsModalProps} props - Props containing the product data.
 * @param {object} props.product - The product details to display.
 * @param {string} props.product.imageUrl - URL of the product image.
 * @param {string} props.product.name - title of the product.
 * @param {string} props.product.description - Description text of the product.
 */
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
