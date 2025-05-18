export const appName = () => 'Celfocus';

export const getProducts = async () => {
  const res = await fetch(`http://localhost:8082/api/v1/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
};
