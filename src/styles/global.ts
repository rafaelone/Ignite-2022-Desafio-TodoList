import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  :root{
    --gray-100: #F2F2F2;
    --gray-200: #D9D9D9;
    --gray-300: #808080;
    --gray-400: #333333;
    --gray-500: #262626;
    --gray-600: #1A1A1A;
    --gray-700: #0D0D0D;
    --purple: #8284FA;
    --purple-dark: #8284FA;
    --blue: #4EA8DE;
    --blue-dark: #1E6F9F;
    --danger: #E25858;

  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #191919;
    color: var(--gray-100);
    -webkit-font-smoothing: antialiased;
  }


  body, input, textarea, button{
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 768px){
    html {
      font-size: 14px;
    }
  }

`;
