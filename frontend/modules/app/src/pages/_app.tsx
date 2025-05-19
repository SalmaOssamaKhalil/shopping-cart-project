import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import Header from '../../../components/src/organisms/Header';
import { ProductsProvider } from '../../../context/ProductsContext';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to Shop.co!</title>
      </Head>
      <main className="app">
        <ProductsProvider>
          <Header />
          <Component {...pageProps} />
        </ProductsProvider>
      </main>
    </>
  );
}

export default CustomApp;
