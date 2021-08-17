import styled from 'styled-components';

export default function Ptext({ text }) {
  return (
    <div>
      <Ptext_p>{text}</Ptext_p>
    </div>
  );
}
const Ptext_p = styled.p`
  font-size: 1.5rem;
`;
