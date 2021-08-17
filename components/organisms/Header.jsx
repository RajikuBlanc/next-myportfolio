import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import Logo from '../../src/images/Logo.svg';
import { Medias } from '../../styles/Media';
import Burger from '../molecules/Burger';
import { useState } from 'react';
import Menu from '../molecules/Menu';

export default function Header() {
  const navMenu = [{ name: 'about' }, { name: 'works' }, { name: 'skill' }, { name: 'contact' }];
  const [open, setOpen] = useState();
  return (
    <HeaderStyle>
      {/* Logo */}
      <Link href="/">
        <a>
          <Image src={Logo} alt="Logo"></Image>
        </a>
      </Link>

      {/* Nav */}
      <NavList_ul>
        <li>
          <Link href="/">
            <a className="navItem">top</a>
          </Link>
        </li>
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
      </NavList_ul>
      <BurgerButton_div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </BurgerButton_div>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  background-color: var(--primary);
  z-index: 9999;
  border-bottom: 2px solid var(--white);
  margin-bottom: 2rem;

  .navItem {
    font-size: 1.5rem;
    letter-spacing: 0.1em;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.5s;
    padding: 0.5rem 2rem;
    border-radius: 5px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
  .contact {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 30px;
    color: var(--primary);
    &:hover {
      color: var(--black);
      background-color: var(--white);
    }
  }
`;

const NavList_ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  ${Medias.tab} {
    display: none;
  }
`;

const BurgerButton_div = styled.div`
  display: none;
  ${Medias.tab} {
    display: block;
  }
`;
