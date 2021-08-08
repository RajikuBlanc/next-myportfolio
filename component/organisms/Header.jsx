import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import Logo from '../../src/images/Logo.svg';

const HeaderStyle = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  border-bottom: 2px solid var(--white);
  .navList {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .contact {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 30px;
    color: var(--primary);
  }
  .navItem {
    font-size: 1.5rem;
    letter-spacing: 0.1em;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export default function Header() {
  const navMenu = [{ name: 'about' }, { name: 'works' }, { name: 'skill' }, { name: 'contact' }];
  return (
    <HeaderStyle>
      {/* Logo */}
      <Link href="/">
        <a>
          <Image src={Logo} alt="Logo"></Image>
        </a>
      </Link>

      {/* Nav */}
      <ul className="navList">
        {navMenu.map(item => {
          const name = item.name;
          return (
            <li key={name}>
              <Link href={`/${name}`}>
                <a className={`navItem ${name}`}>{name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </HeaderStyle>
  );
}
