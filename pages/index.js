import Link from 'next/link';
export default function Home() {
  const products = [{ name: 'bag', color: 'green' }, { name: 'shoes', color: 'red' }, { name: 'hat', color: 'blue' }];
  return (
    <div>
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
