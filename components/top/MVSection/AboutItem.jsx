import styled from 'styled-components';
import MoreButton from '../../atoms/MoreButton';

const ProfileItemStyle = styled.li`
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
export default function AboutItem() {
  const title = 'About';
  return (
    <ProfileItemStyle>
      <h3>{title}</h3>
      <div className="content">
        {/* More Button */}
        <MoreButton link="/about" />
      </div>
    </ProfileItemStyle>
  );
}
