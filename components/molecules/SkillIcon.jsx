/* eslint-disable @next/next/link-passhref */
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const SkillIconStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 40px;
  }
`;
export default function SkillIcon({ img, name }) {
  return (
    <SkillIconStyle>
      <Link href={`/skill/${name}`}>
        <Image src={img} alt={name}></Image>
      </Link>
    </SkillIconStyle>
  );
}
