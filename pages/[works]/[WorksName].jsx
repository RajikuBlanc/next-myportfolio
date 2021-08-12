import { useRouter } from 'next/router';
import Layout from '../../components/layout';
export default function WorksName() {
  const router = useRouter();
  return (
    <Layout>
      <h1>{router.query.WorksName}</h1>
    </Layout>
  );
}
