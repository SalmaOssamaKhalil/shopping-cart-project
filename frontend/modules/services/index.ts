export const appName = () => 'Celfocus';

/**
 * Fetches the list of products from the API endpoint.
 * Sends a GET request to the mock service endpoint.
 * Throws an error if the response is not successful.
 * @returns {Promise<any>} A promise resolving to the JSON-parsed response data.
 * @throws {Error} If the fetch request fails or returns a non-OK status.
 */
export const getProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}v1/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
};
