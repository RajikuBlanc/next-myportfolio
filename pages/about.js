import Head from 'next/head';
import Header from '../component/Header';

export default function About() {
  const title = 'About';
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <h1>{title}Page</h1>
    </div>
  );
}
