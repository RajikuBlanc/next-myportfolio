import styled from 'styled-components';

const SectionTitleStyle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 3rem;
  letter-spacing: 0.2em;
  margin-bottom: 1rem;
`;
export default function SectionTitle({ title = 'section title' }) {
  return <SectionTitleStyle>{title}</SectionTitleStyle>;
}
