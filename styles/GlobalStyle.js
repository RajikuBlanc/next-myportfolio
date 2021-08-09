import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --primary: #818181;
    --white : #ffffff;
    --white-979:#979797;
    --black: #000000;

  }
  html{
    font-size: 10px;
  }
  body{
    background-color: var(--primary);
    font-family: 'Roboto Mono';
    color: var(--white);
    letter-spacing: 0.1em;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: var(--white);

  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  .content {
    width: 100%;
    padding: 0 1.5rem;
    padding-top: 3rem;
    padding-bottom: 2rem;
    border: 3px solid var(--white);
    background-color: var(--primary);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default GlobalStyles;
