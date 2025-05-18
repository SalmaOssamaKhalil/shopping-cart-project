import { Product } from '../ProductCard/types';

export interface ProductDetailsModalProps {
  product: Product;
  onAddToCart: () => void;
}
