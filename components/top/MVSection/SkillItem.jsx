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
  .content {
    width: 100%;
    padding: 0 1.5rem;
    padding-top: 3rem;
    padding-bottom: 2rem;
    border: 3px solid var(--white);
    background-color: var(--primary);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
