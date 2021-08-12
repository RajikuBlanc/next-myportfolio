import Link from 'next/link';
import styled from 'styled-components';

export default function WorksItem({ title }) {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={`/works/${title}`}>
      <Link_a>{title}</Link_a>
    </Link>
  );
}

const Link_a = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  width: 100%;
  height: 100%;
`;
