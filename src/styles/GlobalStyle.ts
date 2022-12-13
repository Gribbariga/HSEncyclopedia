import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  html {
    height: 100%;
  }

  body {
    height: 100%;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    overflow-x: auto;
    font-family: "Roboto", sans-serif;
  }

  #__next {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    position: relative;
    flex-direction: column;
    overflow-y:scroll;
  }

  main {
    flex-grow: 1;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input,
  textarea {
    -webkit-appearance: none;
  }


`;
