import styled from 'styled-components';

const SectionTitle_h2 = styled.h2`
  text-transform: uppercase;
  font-size: 3rem;
  letter-spacing: 0.2em;
  margin-bottom: 3rem;
  text-align: center;
`;
export default function SectionTitle({ title = 'section title' }) {
  return <SectionTitle_h2 className="sectionTitle">{title}</SectionTitle_h2>;
}
