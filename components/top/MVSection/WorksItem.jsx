import styled from 'styled-components';
import MoreButton from '../../atoms/MoreButton';

const WorksItemStyle = styled.li`
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
  .swiper_container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 243px;
    border: 1px solid var(--white);
    margin-bottom: 1.5rem;
  }
`;

export default function WorksItem() {
  const title = 'Works';
  return (
    <WorksItemStyle>
      <h3>{title}</h3>
      {/* Swiper */}
      <div className="content">
        <div className="swiper_container">swiper_container</div>
        {/* More Button */}
        <MoreButton link="/works" />
      </div>
    </WorksItemStyle>
  );
}
