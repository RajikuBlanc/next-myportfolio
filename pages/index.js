import Head from 'next/head';
import Header from '../component/Header';
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

      {/* Header */}
      <Header />

      <h1>Hello Next</h1>
    </div>
  );
}
