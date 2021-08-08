import Head from 'next/head';
import Header from './organisms/Header';
import Footer from './organisms/Footer';
import GlobalStyles from '../styles/GlobalStyle';

export default function Layout({ children }) {
  const title = 'My Portfolio';
  const description = 'My Portfolio';
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <Header />
      {children}
      <Footer />
      <GlobalStyles />
    </div>
  );
}
