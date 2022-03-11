import { createGlobalStyle } from 'styled-components'

export const Resets = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`