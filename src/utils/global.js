import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,*::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  html {
    font-family: "Poppins", 'Helvetica Neue', sans-serif;
  }
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-size: 1rem;
    transition-property: background, color;
    transition-duration: 0.25s;
  }
`;
