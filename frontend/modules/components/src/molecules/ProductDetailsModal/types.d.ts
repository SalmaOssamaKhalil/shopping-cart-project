import { Product } from '../ProductCard/types';

// Type for ProductDetailsModal component props
export interface ProductDetailsModalProps {
  product: Product;
  onAddToCart: () => void;
}
