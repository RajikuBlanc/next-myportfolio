import Head from 'next/head';

export default function About() {
  const title = 'About';
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>About Page</h1>
    </div>
  );
}
