import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: linear-gradient(270deg, #9700a7, #ce5d00);
    background-size: 400% 400%;

    -webkit-animation: Fade 59s ease infinite;
    animation: Fade 59s ease infinite;

    @-webkit-keyframes Fade {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @keyframes Fade {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
  }
`
