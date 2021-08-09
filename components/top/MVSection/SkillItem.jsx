import styled from 'styled-components';
import MoreButton from '../../atoms/MoreButton';
import SkillIcon from './SkillIcon';
import Skills from '../../../src/data/skilldata';

const SkillItemStyle = styled.li`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 0.2em;
    margin-bottom: 1rem;
  }
  .skill__list {
    display: flex;
  }
  .skill__item {
    cursor: pointer;
  }
`;

export default function SkillItem() {
  const title = 'Skill';
  return (
    <SkillItemStyle>
      <h3>{title}</h3>
      <div className="content">
        {/* skill list */}
        <ul className="skill__list">
          {/* skill item */}
          {Skills.map(skill => {
            return (
              <li className="skill__item" key={skill.id}>
                <SkillIcon img={skill.img} name={skill.name} link={skill.link} />
              </li>
            );
          })}
        </ul>
        {/* More Button */}
        <MoreButton link="/skill" />
      </div>
    </SkillItemStyle>
  );
}
