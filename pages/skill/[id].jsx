import Layout from '../../components/layout';
import skillLists from '../../src/data/skilldata';
export async function getStaticProps({ params }) {
  const skills = skillLists.filter(skill => skill.id.toString() === params.id);
  return {
    props: {
      skillData: skills[0]
    }
  };
}
export async function getStaticPaths() {
  const paths = skillLists.map(skillList => ({
    params: { id: skillList.id.toString() }
  }));
  return { paths, fallback: false };
}
export default function SkillName({ skillData }) {
  return (
    <Layout>
      <h1>{skillData.name}</h1>
    </Layout>
  );
}
