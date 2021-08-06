import { useRouter } from 'next/router';

export default function Color() {
  const router = useRouter();
  const { name, color } = router.query;

  return (
    <div>
      <h1>
        商品{name}の{color}です
      </h1>
    </div>
  );
}
