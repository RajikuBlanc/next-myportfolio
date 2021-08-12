import styled from 'styled-components';
import MoreButton from '../atoms/MoreButton';

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
  .content {
    padding-right: 2rem;
    padding-left: 2rem;
  }
  .about__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid var(--white);
    padding-bottom: 8rem;
  }
  .about__name {
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 500;
    border-bottom: 1px solid var(--white);
  }
  .about__text {
    font-size: 1.2rem;
    margin-top: 2rem;
  }
  .moreButton {
    margin-top: 2rem;
  }
`;
export default function AboutItem() {
  const title = 'About';
  const name = '本馬 遼太郎';
  const text1 = '2020年10月からプログラミングの学習を始める。';
  const text2 =
    '現在はweb制作会社にインターン生としてフロントエンドを勉強しながら、実務に参加させていただいております。';
  return (
    <ProfileItemStyle>
      <h3>{title}</h3>
      <div className="content">
        <div className="about__box">
          <p className="about__name">{name}</p>
          <p className="about__text">{text1}</p>
          <p className="about__text">{text2}</p>
        </div>
        {/* More Button */}
        <MoreButton link="/about" />
      </div>
    </ProfileItemStyle>
  );
}
