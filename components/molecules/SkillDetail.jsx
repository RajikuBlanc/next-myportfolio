/* eslint-disable @next/next/link-passhref */
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
export default function SkillDetail({ name, img, color, level }) {
  return (
    <SkillDetail_div color={color}>
      <Box_div>
        <LeftBox_div>
          <Image src={img} alt={name}></Image>
        </LeftBox_div>
        <RightBox_div>
          <NameText_p>{name}</NameText_p>
          <LevelText_p>{level}</LevelText_p>
          <LevelBar_div level={level} color={color}></LevelBar_div>
        </RightBox_div>
      </Box_div>
      <Link href="/skill">
        <Link_a>back to List</Link_a>
      </Link>
    </SkillDetail_div>
  );
}

const SkillDetail_div = styled.div`
  width: 100%;
  border: 4px solid ${props => props.color};
  padding-top: 8rem;
  padding-bottom: 8rem;
  padding-left: 4rem;
  padding-right: 4rem;
`;

const Box_div = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  padding-bottom: 10rem;
  border-bottom: 1px solid var(--white);
`;

const LeftBox_div = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  img {
    width: 300px;
  }
`;
const RightBox_div = styled.div`
  width: 50%;
`;
const NameText_p = styled.p`
  text-transform: uppercase;
  font-size: 4rem;
  letter-spacing: 0.2em;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10rem;
`;

const LevelText_p = styled(NameText_p)`
  text-align: right;
  margin-bottom: 1rem;
`;
const LevelBar_div = styled.div`
  width: 100%;
  height: 15px;
  border: 1px solid ${props => props.color};
  position: relative;
  &::after {
    content: '';
    width: ${props => props.level};
    height: 13px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${props => props.color};
  }
`;

const Link_a = styled.a`
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 auto;
  margin-top: 3rem;
  display: block;
  width: 180px;
  padding: 1rem 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  transition: all 0.5s;
  &:hover {
    width: 220px;
  }
`;
