import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import SectionTitle from '../../components/atoms/SectionTitle';
import Image from 'next/image';
import workLists from '../../src/data/worksdata';

export async function getStaticProps({ params }) {
  const works = workLists.filter(work => work.id.toString() === params.id);
  return {
    props: {
      workData: works[0]
    }
  };
}
export async function getStaticPaths() {
  const paths = workLists.map(workList => ({
    params: { id: workList.id.toString() }
  }));
  return {
    paths,
    fallback: false
  };
}

export default function WorksName({ workData }) {
  return (
    <Layout>
      <div className="container">
        <SectionTitle title="works" />
        <div>
          {workData.title}
          {/* 画像 */}
          {/* <Image src={img} alt={img}></Image> */}
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
