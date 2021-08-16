import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
export default function SkillItem({ id, img, name, color, level }) {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={`/skill/${id}`}>
      <SkillItem_a color={color} width={level}>
        <Image src={img} alt={name}></Image>
        <Name_p>{name}</Name_p>
      </SkillItem_a>
    </Link>
  );
}

const SkillItem_a = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border: 4px solid ${props => props.color};
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 10px;
    width: ${props => props.width};
    background-color: ${props => props.color};
  }
  &:hover {
    transition: all 0.3s;
    transform: translateY(-10px);
  }
  img {
    width: 64px;
  }
`;

const Name_p = styled.p`
  font-size: 1.3rem;
  text-transform: uppercase;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
