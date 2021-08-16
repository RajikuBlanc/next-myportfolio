import SectionTitle from '../atoms/SectionTitle';
import ProfileText from '../atoms/ProfileText';
import styled from 'styled-components';

export default function ProfileSection() {
  return (
    <Profile_section>
      <div className="container">
        <SectionTitle title="profile" />
        <List_ul>
          <Item_li>
            <ProfileText headding="名前:" text="本馬 遼太郎(ほんま りょうたろう)" />
            <ProfileText headding="出身:" text="大阪府(在住)" />
            <ProfileText
              headding="自己紹介:"
              text="初めまして、本馬です。
人に頼られることが好きです。
自分のためだけでなく、他の人にも使っていただけるような
アプリ開発を目標としています。
まだアプリを開発することはできていませんが、
日々人のためになるアプロはないかと考えています。
考えるだけでは、開発はできないので、
開発するために学習に励んでいます。"
            />
          </Item_li>
          <Item_li>
            <ProfileText
              headding="2019/02~2020/10"
              text="公務員になるため勉強を始める。毎日5時間以上勉強し筆記試験、
面接ともに合格するが内定を頂けず、公務員を諦める。"
            />
            <ProfileText
              headding="2020/10~"
              text="公務員を諦めるきっかけとなったのが、プログラミングとの出会い。
プログラミング学習当初、プログラミング特有の言葉に困惑するが、
開発の楽しさを知り、学習意欲が向上し、プログラミングに没頭する。
PythonのフレームワークであるDjangoに触れる。"
            />
            <ProfileText
              headding="2020/11~"
              text="Djangoを触り始め、フロントエンドについて学習するようになる。
Webアプリケーションを自作し、運用したいと考え始める。
フロントエンドを学習するにつれ、Web制作に興味を持つ。"
            />
            <ProfileText headding="2021/03~ 現在" text="web制作会社にてインターンをしながら就職活動中です。" />
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
  padding-top: 5rem;
  padding-bottom: 5rem;
  border: 1px solid var(--white);
`;
const Item_li = styled.li`
  width: 50%;
`;
