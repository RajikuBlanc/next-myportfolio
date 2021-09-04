import styled from 'styled-components';

const FooterStyle = styled.footer`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  border-top: 2px solid var(--white);
  position: relative;
  small {
    font-size: 1.2rem;
  }
  span {
    text-transform: uppercase;
  }
  div {
    cursor: pointer;
  }
`;

const TopButton_div = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
`;

export default function Footer() {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <FooterStyle>
      <small>
        &copy;2021 <span>ryotaro homma</span>
      </small>
      <TopButton_div onClick={returnTop}></TopButton_div>
    </FooterStyle>
  );
}
