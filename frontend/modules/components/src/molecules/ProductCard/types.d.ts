export interface ProductCardProps {
  sku: string;
  image: string;
  title: string;
  description: string;
  price: string;
  onAddToCart: () => void;
}

export interface Product {
  sku: string;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

export interface CartProduct extends Product {
  count: number;
}
