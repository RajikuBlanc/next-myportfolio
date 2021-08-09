import styled from 'styled-components';
import MoreButton from '../../atoms/MoreButton';

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
`;

export default function SkillItem() {
  const title = 'Skill';
  return (
    <SkillItemStyle>
      <h3>{title}</h3>
      <div className="content">
        {/* More Button */}
        <MoreButton link="/skill" />
      </div>
    </SkillItemStyle>
  );
}
