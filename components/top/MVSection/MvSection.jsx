import styled from 'styled-components';
import SectionTitle from '../../atoms/SectionTitle';
import WorksItem from './WorksItem';
import SkillItem from './SkillItem';
import AboutItem from './AboutItem';

// --------------- Function ---------------
export default function Mvsection() {
  return (
    <Mv_section>
      <div className="container">
        <SectionTitle title="my portfolio" />
        <List_ul>
          <WorksItem />
          <AboutItem />
          <SkillItem />
        </List_ul>
      </div>
    </Mv_section>
  );
}
// --------------- Style ---------------
const Mv_section = styled.section`
  padding-top: 2rem;
  margin-bottom: 10rem;
`;

const List_ul = styled.ul`
  width: 100%;
  border: 2px solid var(--white);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 5rem 10%;
  display: flex;
  justify-content: space-between;
`;
