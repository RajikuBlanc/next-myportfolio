import styled from 'styled-components';

import Link from 'next/link';
export default function ViewMoreButton({ link }) {
  return (
    <ViewMoreButton_div>
      <Link href={link}>
        <a>View More</a>
      </Link>
    </ViewMoreButton_div>
  );
}

const ViewMoreButton_div = styled.div`
  width: 100%;
  text-align: center;
  a {
    font-size: 3rem;
    font-weight: bold;
    transition: all 0.5s;
    &:hover {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;
