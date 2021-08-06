import Link from 'next/link';
import Head from 'next/head';
export default function Home() {
  const products = [{ name: 'bag', color: 'green' }, { name: 'shoes', color: 'red' }, { name: 'hat', color: 'blue' }];
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
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        {products.map(product => {
          return (
            <li key={product.name}>
              <Link href={`/products/${product.name}/${product.color}`}>
                <a>{product.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <h1>Hello Next</h1>
    </div>
  );
}
