import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
  box-sizing: border-box;
  }

  p, h1, h2, h3, h4, h5, h6, ul, li, body, button, a {
  margin: 0;
  padding: 0;
  }

  li {
  list-style: none;
  }

  button {
  cursor: pointer;
  }

  a {
  text-decoration: none;
  color: #FFFFFF;
  }

  html {
  overflow-x: hidden;
  scroll-behavior: smooth;
  }

  body {
  background-color: #151515;
  overflow: hidden;
  }
`;

export { GlobalStyles };