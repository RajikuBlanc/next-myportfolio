import Head from 'next/head';
import Header from '../component/organisms/Header';
import GlobalStyles from '../styles/GlobalStyle';
import Footer from '../component/organisms/Footer';

export default function Home() {
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
      {/* GlobalStyles */}
      <GlobalStyles />

      {/* Header */}
      <Header />

      {/* Contents */}
      {/* MV */}
      {/* Profile */}
      {/* Skill */}
      {/* Works */}
      {/* Contact */}
      {/* Footer */}
      <Footer />
    </div>
  );
}
