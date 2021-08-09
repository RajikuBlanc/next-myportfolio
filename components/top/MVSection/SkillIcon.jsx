/* eslint-disable @next/next/link-passhref */
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const SkillIconStyle = styled.div``;
export default function SkillIcon({ img, name, link }) {
  return (
    <SkillIconStyle>
      <Link href={`/skill/${link}`}>
        <Image src={img} alt={name}></Image>
      </Link>
    </SkillIconStyle>
  );
}
