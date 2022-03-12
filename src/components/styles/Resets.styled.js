import { createGlobalStyle } from 'styled-components'

export const Resets = createGlobalStyle`
  /* Global resets */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: sans-serif;
  }

  /* Hide scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }

  body {
    width: 100%;
    min-height: 100vh;
    background-color: #4682b4;
  }

  /* ul li:first-child {
    margin-top: 0;
  }
  
  ul li:last-child {
    margin-bottom: 0;
  } */
`
