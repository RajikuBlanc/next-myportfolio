import Layout from '../components/layout';
import SectionTitle from '../components/atoms/SectionTitle';
import Projects from '../src/data/worksdata';
import Link from 'next/link';
import styled from 'styled-components';

export default function Works() {
  return (
    <Layout>
      <div className="container">
        <SectionTitle title="works" />
        <WorksList_ul>
          {Projects.map(project => {
            return (
              <WorksItem_li key={project.id}>
                <Link href={`works/${project.link}`}>
                  <a>{project.title}</a>
                </Link>
              </WorksItem_li>
            );
          })}
        </WorksList_ul>
      </div>
    </Layout>
  );
}

const WorksList_ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 80px;
  margin-top: 4rem;
  margin-bottom: 3rem;
  &::after {
    content: '';
    display: block;
    width: 250px;
    height: 0;
  }
`;

const WorksItem_li = styled.li`
  min-width: 250px;
  height: 350px;
  border: 1px solid #000;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;
