import styled from 'styled-components';
import { bool, func } from 'prop-types';
import { Medias } from '../../styles/Media';
export default function Burger({ open, setOpen }) {
  return (
    <Burger_div open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </Burger_div>
  );
}
// propTypesを使用することでpropsに値を入れ忘れていた時にエラーが出る
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};

const Burger_div = styled.div`
  display: none;
  position: absolute;
  top: 3rem;
  right: 3rem;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  ${Medias.tab} {
    display: flex;
  }

  &:focus {
    outline: none;
  }
  div {
    display: none;
    width: 100%;
    height: 0.3rem;
    /* background: ${({ theme, open }) => (open ? theme.primary : theme.white)}; */
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
    ${Medias.tab} {
      display: block;
    }
  }
`;
