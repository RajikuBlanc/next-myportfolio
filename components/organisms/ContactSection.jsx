import SectionTitle from '../atoms/SectionTitle';
import styled from 'styled-components';
import FormCard from '../molecules/FormCard';
import TwitterIcon from '../../src/images/icon/twitter-icon.svg';
import MailIcon from '../../src/images/icon/mail-icon.svg';
export default function ContactSection() {
  return (
    <div className="container">
      <Contact_section>
        <SectionTitle title="Contact" />
        <FormList_ul>
          <FormCard
            url="https://twitter.com/Whale_ELAHW00"
            text="ダイレクトメッセージからお願い致します"
            img={TwitterIcon}
          />
          <FormCard url="mailto:rajiku.blanc@gmail.com" text="rajiku.blanc@gmail.com" img={MailIcon} />
        </FormList_ul>
      </Contact_section>
    </div>
  );
}

const Contact_section = styled.section`
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 5rem 3rem;
  margin-bottom: 10rem;
  .sectionTitle {
    text-align: left;
  }
`;
const FormList_ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20%;
  padding-top: 4rem;
  padding-bottom: 3rem;
`;
