import styles from './index.module.scss';
import { useEffect } from 'react';
import { getProducts } from '../../../services/index';
import ProductCard from '../../../components/src/molecules/ProductCard';
import { useProducts } from '../../../context/ProductsContext';
import { Product } from 'modules/components/src/molecules/ProductCard/types';

export function Index() {
  const { products, setProducts, cartItems, setCartItems, setCartItemsCount } =
    useProducts();

/**
 * Asynchronously fetches the list of products.
 * Calls the `getProducts` API function from services to retrieve product data, then
 * updates the state with the fetched products.
 * 
 * If an error occurs during the fetch, it is caught and can be handled
 * appropriately (e.g., TODO: display an error message to the user).
 */
  const fetchProducts = async () => {
    try{
      const productsList = await getProducts();
      setProducts(productsList);
    }
    catch(error){
      // Display some UI Error
    }
  };

  useEffect(() => {
    // fetch all products on page load
    fetchProducts();
  }, []);

/**
 * Adds a product to the shopping cart.
 * 
 * If the product already exists in the cart (matched by `sku`), 
 * increments its `count` by 1. Otherwise, adds the product to the cart 
 * with an initial `count` of 1.
 * 
 * Also updates the total cart items count by incrementing it by 1.
 * 
 * @param {Product} product - The product object to add or update in the cart.
 */
  const handleAddToCart = (product: Product) => {
    const itemIndexInCart = cartItems.findIndex(
      (item) => item.sku === product.sku
    );
    const cartItemsClone = [...cartItems];
    if (itemIndexInCart !== -1) {
      cartItemsClone[itemIndexInCart] = {
        ...cartItemsClone[itemIndexInCart],
        count: cartItemsClone[itemIndexInCart].count + 1,
      };
    } else cartItemsClone.push({ ...product, count: 1 });
    setCartItems(cartItemsClone);
    setCartItemsCount((count) => count + 1);
  };
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      {products.map((product) => (
        <ProductCard
          key={product.sku}
          sku={product.sku}
          image={product.imageUrl}
          title={product.name}
          description={product.description}
          price={product.price}
          onAddToCart={() => handleAddToCart(product)}
        />
      ))}
    </div>
  );
}

export default Index;
