import { useRouter } from 'next/router';
import Layout from '../../components/layout';
export default function SkillName() {
  const router = useRouter();
  return (
    <Layout>
      <h1>{router.query.SkillName}</h1>
    </Layout>
  );
}
