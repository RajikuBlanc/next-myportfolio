/* eslint-disable @next/next/link-passhref */
import Layout from '../components/layout';
import SectionTitle from '../components/atoms/SectionTitle';
import skillData from '../src/data/skilldata';
import Link from 'next/link';
import styled from 'styled-components';
import SkillItem from '../components/molecules/SkillItem';

export async function getStaticProps() {
  return {
    props: {
      skillLists: skillData
    }
  };
}

export default function Skill({ skillLists }) {
  return (
    <Layout>
      <div className="container">
        <SectionTitle title="skill" />
        <SkillList_ul>
          {skillLists.map(skillList => {
            if (skillList.id < 12) {
              return (
                <li key={skillList.id}>
                  <SkillItem
                    id={skillList.id}
                    img={skillList.img}
                    name={skillList.name}
                    color={skillList.color}
                    level={skillList.level}
                  />
                </li>
              );
            }
          })}
        </SkillList_ul>
        <Text_p>Studys</Text_p>
        <StudySkillList_ul>
          {skillLists.map(skillList => {
            if (skillList.id > 12) {
              return (
                <li key={skillList.id}>
                  <Link href={`/skill/${skillList.id}`}>
                    <SkillItem id={skillList.id} img={skillList.img} name={skillList.name} color={skillList.color} />
                  </Link>
                </li>
              );
            }
          })}
        </StudySkillList_ul>
      </div>
    </Layout>
  );
}

const Text_p = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;
const SkillList_ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  margin-bottom: 5rem;
`;
const StudySkillList_ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  padding-top: 5rem;
  border-top: 1px solid var(--white);
`;
