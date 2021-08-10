import styled from 'styled-components';

const SectionTitle_h2 = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 3rem;
  letter-spacing: 0.2em;
  margin-bottom: 1rem;
`;
export default function SectionTitle({ title = 'section title' }) {
  return <SectionTitle_h2>{title}</SectionTitle_h2>;
}
