import { useRouter } from 'next/router';
import Head from 'next/head';
export default function Color() {
  const router = useRouter();
  const { name, color } = router.query;
  const title = name;
  return (
    <div>
      <Head>
        <title>{title}のページ</title>
      </Head>
      <h1>
        商品{name}の{color}です
      </h1>
    </div>
  );
}
