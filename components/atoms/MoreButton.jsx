import Link from 'next/link';
import styled from 'styled-components';

const MoreButtonStyle = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 4rem;
    height: 30px;
    font-size: 1.2rem;
    background-color: var(--white-979);
    border-radius: 5px;
  }
`;

export default function MoreButton({ link = '/' }) {
  return (
    <MoreButtonStyle>
      <Link href={link}>
        <a className="moreButton">MORE</a>
      </Link>
    </MoreButtonStyle>
  );
}
