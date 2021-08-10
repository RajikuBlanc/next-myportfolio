import styled from 'styled-components';

export default function ProfileText({ headding, text }) {
  return (
    <ProfileText_div>
      <p>{headding}</p>
      <Description_p>{text}</Description_p>
    </ProfileText_div>
  );
}

const ProfileText_div = styled.div``;

const Description_p = styled.p`
  white-space: pre;
`;
