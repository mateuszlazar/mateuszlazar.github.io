import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f9fafa;
    margin: 0;
    font-family: 'Roboto Condensed','Arial',sans-serif;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  #gatsby-focus-wrapper {

  display: flex;
    align-items: center;
    justify-content: center;
  }

`
