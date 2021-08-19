import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import SectionTitle from '../../components/atoms/SectionTitle';
import Image from 'next/image';
import workLists from '../../src/data/worksdata';
import Link from 'next/link';
import styled from 'styled-components';

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
      <WorksName_div className="container">
        <SectionTitle title="works" />
        <div>
          <p>{workData.title}</p>
          {/* 画像 */}
          <Image src={workData.img} alt="WorksImg"></Image>
          {/* 制作期間 */}
          <p>制作期間:</p>
          <p>{workData.productionTime}</p>
          {/* こだわり */}
          <p>こだわり:</p>
          <p>{workData.commitment}</p>
          <p>苦戦したこと:</p>
          {/* 苦戦したこと */}
          <p>{workData.hardships}</p>
          {/* GitHub */}
          <Link href={workData.github}>
            <a target="_blank">github</a>
          </Link>
          {/* URL */}
          <Link href={workData.url}>
            <a>url</a>
          </Link>
          {/* Back Button */}
          <Link href="/works">
            <a>back to list</a>
          </Link>
        </div>
      </WorksName_div>
    </Layout>
  );
}
const WorksName_div = styled.div`
  img {
    width: 300px;
  }
`;
