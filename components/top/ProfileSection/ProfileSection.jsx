import SectionTitle from '../../atoms/SectionTitle';
import ProfileText from './ProfileText';
import styled from 'styled-components';

export default function ProfileSection() {
  return (
    <Profile_section>
      <div className="container">
        <SectionTitle title="profile" />
        <List_ul>
          <Item_li>
            <ProfileText headding="名前:" text="本馬 遼太郎" />
            <ProfileText headding="出身:" text="大阪府(在住)" />
            <ProfileText headding="自己紹介:" text="初めまして、本馬です。" />
          </Item_li>
          <Item_li>
            <ProfileText headding="名前:" text="本馬 遼太郎" />
          </Item_li>
        </List_ul>
      </div>
    </Profile_section>
  );
}

const Profile_section = styled.section`
  margin-bottom: 10rem;
`;

const List_ul = styled.ul`
  display: flex;
  padding-left: 9rem;
`;
const Item_li = styled.li`
  width: 50%;
`;
