import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import SectionTitle from '../../components/atoms/SectionTitle';
import Image from 'next/image';
import fetch from 'node-fetch';
export default function WorksName() {
  const router = useRouter();
  console.log(router.query);
  return (
    <Layout>
      <div className="container">
        <SectionTitle title="works" />
        <div>
          {/* 画像 */}
          {/* <Image src={img} alt={img}></Image> */}
          {/* タイトル */}
          {/* 制作期間 */}
          {/* こだわり */}
          {/* 苦戦したこと */}
          {/* GitHub */}
          {/* URL */}
          {/* Back Button */}
        </div>
      </div>
    </Layout>
  );
}
export async function getServerSideProps(params) {
  console.log(params);
  const repoUrl = 'https://github.com/RajikuBlanc/next-myportfolio/blob/main/src/data/worksdata.json';
  const res = await fetch(repoUrl);
  const posts = await res.json();
  return { props: { posts } };
}
