import styled from 'styled-components';
import SectionTitle from '../../atoms/SectionTitle';
import WorksItem from './WorksItem';
import SkillItem from './SkillItem';
import AboutItem from './AboutItem';

const MvSectionStyle = styled.div`
  .container {
    margin-top: 2rem;
  }
  .portfolio__list {
    width: 100%;
    border: 2px solid var(--white);
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 5rem 10%;
    display: flex;
    justify-content: space-between;
  }
`;

export default function Mvsection() {
  return (
    <MvSectionStyle>
      <div className="container">
        <SectionTitle title="my portfolio" />
        <div className="portfolio__box">
          <ul className="portfolio__list">
            <WorksItem />
            <AboutItem />
            <SkillItem />
          </ul>
        </div>
      </div>
    </MvSectionStyle>
  );
}
